/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020/2021
 */

import { EventEmitter } from "events";
import { Env } from "@marco.jacovone/cnodes/cnodes";
import { Program } from "@marco.jacovone/cnodes/cnodes";
import { Node } from "@marco.jacovone/cnodes/lib/core/node";
import { Canvas } from "../canvas/canvas";
import { MenuItem } from "../canvas/menu";
import { Position } from "../canvas/position";
import { IOConnection } from "../connections/ioconnection";
import { PrevNextConnection } from "../connections/prevnextconnection";
import { CnodeComponent } from "./cnode";
import { CnodesMenu } from "./cnodesmenu";
import { Theme } from "./theme";

/**
 * This is the entry-point class for managing the canvas
 * relative to a cnodes program.
 */
export class CnodesCanvas extends Canvas {
  /** The static registry of (cnodes NDOE) <--> (CnodeComponent) map */
  static #nodesUIRegistry = new Map();

  /** The edited program */
  #program = null;

  /** The stack of edited programs */
  #stack = [];

  /** The clipboard of the canvas */
  static clipboard = null;

  /** The event emitter connected to the canvas */
  events = new EventEmitter();

  constructor(el) {
    super(el);

    let defsEl = document.createElementNS("http://www.w3.org/2000/svg", "defs");

    defsEl.innerHTML = `
      ${Theme.current.DEFS}
      <filter xmlns="http://www.w3.org/2000/svg" id="dropshadow" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/> 
        <feOffset dx="0" dy="0" result="offsetblur"/> 
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3"/>
        </feComponentTransfer>
        <feMerge> 
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/> 
        </feMerge>
      </filter>
      <marker id="io-arrow-any" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="5" markerHeight="5" fill="${Theme.current.TYPE_ANY_COLOR}" orient="auto-start-reverse">
        <path d="M 3 0 L 10 4 L 10 6 L 3 10 Z">
        </path>
      </marker>
      <marker id="io-arrow-boolean" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="5" markerHeight="5" fill="${Theme.current.TYPE_BOOLEAN_COLOR}" orient="auto-start-reverse">
        <path d="M 3 0 L 10 4 L 10 6 L 3 10 Z">
        </path>
      </marker>
      <marker id="io-arrow-number" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="5" markerHeight="5" fill="${Theme.current.TYPE_NUMBER_COLOR}" orient="auto-start-reverse">
        <path d="M 3 0 L 10 4 L 10 6 L 3 10 Z">
        </path>
      </marker>
      <marker id="io-arrow-string" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="5" markerHeight="5" fill="${Theme.current.TYPE_STRING_COLOR}" orient="auto-start-reverse">
        <path d="M 3 0 L 10 4 L 10 6 L 3 10 Z">
        </path>
      </marker>
      <marker id="io-arrow-object" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="5" markerHeight="5" fill="${Theme.current.TYPE_OBJECT_COLOR}" orient="auto-start-reverse">
        <path d="M 3 0 L 10 4 L 10 6 L 3 10 Z">
        </path>
      </marker>
      <marker id="io-arrow-array" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="5" markerHeight="5" fill="${Theme.current.TYPE_ARRAY_COLOR}" orient="auto-start-reverse">
        <path d="M 3 0 L 10 4 L 10 6 L 3 10 Z">
        </path>
      </marker>
      <marker id="prevnext-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="5" markerHeight="5" fill="${Theme.current.CONNECTION_PREV_NEXT_COLOR}" orient="auto-start-reverse">
        <path d="M 3 0 L 10 4 L 10 6 L 3 10 Z">
        </path>
      </marker>      
    `;

    this.svgEl.appendChild(defsEl);

    // Register keystrokes
    document.addEventListener("keydown", (e) => {
      if (document.activeElement.tagName.toUpperCase() === "INPUT") {
        return;
      }

      if (e.key === "Backspace") {
        if (this.canPopProgram()) {
          this.popProgram();
        }
        e.preventDefault();
      }
      if (e.key === "Escape") {
        this.unselectAllNodes();
        e.preventDefault();
      }
      if (e.key === "Delete") {
        this.deleteSelectedNodes();
        e.preventDefault();
      }
      if (e.ctrlKey || e.metaKey) {
        if (e.key === "x") {
          this.copySelectedNodes();
          this.deleteSelectedNodes();
          e.preventDefault();
        }
        if (e.key === "a") {
          this.selectAllNodes();
          e.preventDefault();
        }
        if (e.key === "c") {
          this.copySelectedNodes();
          e.preventDefault();
        }
        if (e.key === "v") {
          this.pasteNodes();
          e.preventDefault();
        }
        if (e.key === "d") {
          this.cloneSelectedNodes();
          e.preventDefault();
        }
        if (e.key === "z" && !e.shiftKey) {
          // this.undoChanges();
          e.preventDefault();
        }
        if (e.key === "z" && e.shiftKey) {
          // this.redoChanges();
          e.preventDefault();
        }
      }
    });
  }

  get program() {
    return this.#program;
  }

  /**
   * Register a UI class, that extends CnodeComponent for managing
   * a specific node passed as parameter, by registering the instance
   * in the canvas registry
   * @param {Node} node The node instance (cnodes)
   * @param {Function} factory The factory, that is a function that creates the UI component
   */
  static registerNodeUI(node, factory) {
    CnodesCanvas.#nodesUIRegistry.set(node.constructor.name, factory);
  }

  /**
   * Returns the instance of the UI component registered in the canvas registry
   * that is able to manage a cnode specific instance passed as parameter
   * @param {Node} node The node instance (cnodes)
   * @param {CnodesCanvas} canvas The canvas instance, to create the node UI component
   */
  static getNodeUIInstance(node, canvas) {
    let factory = CnodesCanvas.#nodesUIRegistry.get(node.constructor.name);
    if (factory) {
      return factory(node, canvas).setup();
    } else {
      return new CnodeComponent(node, canvas).setup();
    }
  }

  /**
   * This setter is a trigger for the import procedure
   */
  set program(val) {
    this.importCnodesProgram(val);
    this.#program = val;
    this.fitGraph();
  }

  /**
   * Executes the program
   */
  async run() {
    await this.#program.process();
  }

  /**
   * Dump the internal CNODES program to the console
   */
  dump() {
    console.log(Env.export(this.#program));
  }

  /**
   * Override this method to add common actions on top, like
   * duplicate, copy, paste.
   * @param {Components[]} components Array of components from which
   * retrieve actions
   */
  getAllCommonMenuItems(components) {
    let retArr = super.getAllCommonMenuItems(components);

    retArr.unshift(
      new MenuItem(
        `
        <tspan alignment-baseline="middle" style="${
          Theme.current.MENU_SPECIAL_ITEM_STYLE
        }">
          Copy ${this.selectedComponents.length} node${
          this.selectedComponents.length !== 1 ? "s" : ""
        }
        </tspan>
        `,
        () => {
          this.copySelectedNodes();
        },
        "copy"
      )
    );
    retArr.unshift(
      new MenuItem(
        `
        <tspan alignment-baseline="middle" style="${
          Theme.current.MENU_SPECIAL_ITEM_STYLE
        }">
          Clone ${this.selectedComponents.length} node${
          this.selectedComponents.length !== 1 ? "s" : ""
        }
        </tspan>
        `,
        () => {
          this.cloneSelectedNodes();
        },
        "clone"
      )
    );

    return retArr;
  }

  /**
   * Return a list of MenuItem for the context menu
   */
  getCanvasContextMenuItems() {
    let items = [];

    if (this.canPopProgram()) {
      items.push(
        new MenuItem(
          `
          <tspan alignment-baseline="middle" style="${Theme.current.MENU_SPECIAL_ITEM_STYLE}">
            Return to parent...
          </tspan>
          `,
          () => {
            this.popProgram();
          },
          "return"
        )
      );
    }

    items.push(
      new MenuItem(
        `
        <tspan alignment-baseline="middle" style="${Theme.current.MENU_SPECIAL_ITEM_STYLE}">
          Fit graph
        </tspan>
        `,
        () => {
          this.fitGraph();
        },
        "fit graph"
      )
    );

    if (CnodesCanvas.clipboard) {
      items.push(
        new MenuItem(
          `
          <tspan alignment-baseline="middle" style="${
            Theme.current.MENU_SPECIAL_ITEM_STYLE
          }">
            Paste ${CnodesCanvas.clipboard.length} node${
            CnodesCanvas.clipboard.length !== 1 ? "s" : ""
          }
          </tspan>
          `,
          (x, y) => {
            this.pasteNodes(x, y);
          },
          "paste"
        )
      );
    }

    for (let cat of Env.getCategories()) {
      for (let nodeDef of Env.getCategoryNodes(cat)) {
        let n = Env.getInstance(nodeDef.name);
        if (n.creatable) {
          items.push(
            new MenuItem(
              `
              <tspan alignment-baseline="middle" style="${Theme.current.MENU_ITEM_STYLE}" fill="${Theme.current.MENU_ITEM_CATEGORY_COLOR}">
                New
              </tspan>
              <tspan alignment-baseline="middle" style="${Theme.current.MENU_ITEM_STYLE}" fill="${Theme.current.MENU_ITEM_COLOR}">
                ${nodeDef.name}
              </tspan>
              <tspan alignment-baseline="middle" style="${Theme.current.MENU_ITEM_CATEGORY_STYLE}" fill="${Theme.current.MENU_ITEM_CATEGORY_COLOR}">
                (${nodeDef.category})
              </tspan>
              `,
              (x, y) => {
                let node = CnodesCanvas.getNodeUIInstance(n, this);
                node.pos = new Position(x, y);
              },
              n.title
            )
          );
        }
      }
    }

    if (items.length === 0) {
      return null;
    } else {
      return items;
    }
  }

  /**
   * Cancels the current open context menu, and closes it.
   * Override this to ensure cancel menu inform menu callback clients
   */
  cancelContextMenu() {
    if (this.contextMenuComponent && this.contextMenuComponent.menuCallback) {
      this.contextMenuComponent.menuCallback(null);
      this.contextMenuComponent.menuCallback = null;
    }
    super.cancelContextMenu();
  }

  /**
   * Shows the context menu retated to the component or to the canvas
   * @param {MenuItem[]} items Items that compose the menu
   * @param {number} x The x coordinate for the menu
   * @param {number} y The y coordinate for the menu
   * @param {Function} menuCallback If the client is interested to the user selection or cancel
   */
  showContextMenu(items, x, y, menuCallback) {
    if (items) {
      if (this.contextMenuComponent) {
        this.cancelContextMenu();
      }

      this.contextMenuComponent = new CnodesMenu(this, items);
      this.contextMenuComponent.menuCallback = menuCallback;
      this.contextMenuComponent.show(x, y);
    }
  }

  /**
   * This method imports an entire cnodes program
   * @param {Program} program Program to import
   */
  importCnodesProgram(program) {
    // By temporary clearing the instance of the program, we inform
    // components that all creation/destruction will not have effect
    // on the program instance
    this.#program = null;

    this.destroyAll();

    // Import nodes
    this.importNodes(program.nodes);

    // Restore the program instance
    this.#program = program;
  }

  /**
   * This method import a list of nodes inside the current program
   * by reconstructing all connection between nodes
   * @param {Node[]} nodes A list of nodes to import
   */
  importNodes(nodes) {
    let importedNodes = [];

    // Import the program
    for (let n of nodes) {
      let comp = CnodesCanvas.getNodeUIInstance(n, this);
      importedNodes.push(comp);
      comp.moveable = true;

      // Extract meta info
      if (!n.meta) {
        n.meta = {};
      }
      if (n.meta.pos) {
        comp.pos = new Position(n.meta.pos.x, n.meta.pos.y);
      } else {
        comp.pos = new Position(100, 100);
      }
      if (n.meta.titlePos) {
        comp.titleComp.pos = new Position(n.meta.titlePos.x, n.meta.titlePos.y);
      }
      if (n.meta.comment) {
        comp.createCommentComponent(
          n.meta.comment.text,
          n.meta.comment.pos.x,
          n.meta.comment.pos.y,
          false
        );
      }
    }

    // Setup connections
    for (let n of nodes) {
      // Setup prev
      if (n.prev && n.prev.peers.length > 0) {
        for (let peer of n.prev.peers) {
          if (!this.alreadyConnected(peer.__comp, n.prev.__comp)) {
            // Create connection component
            new PrevNextConnection(peer.__comp, n.prev.__comp, this).setup();
          }
        }
      }
      // Setup nexts
      for (let next of n.nexts) {
        if (next.peer) {
          if (!this.alreadyConnected(next.peer.__comp, next.__comp)) {
            // Create connection component
            new PrevNextConnection(next.__comp, next.peer.__comp, this).setup();
          }
        }
      }
      // Setup inputs
      for (let inp of n.inputs) {
        if (inp.peer) {
          if (!this.alreadyConnected(inp.peer.__comp, inp.__comp)) {
            // Create connection component
            new IOConnection(inp.peer.__comp, inp.__comp, this).setup();
          }
        }
      }
      // Setup outputs
      for (let outp of n.outputs) {
        if (outp.peers.length > 0) {
          for (let peer of outp.peers) {
            if (!this.alreadyConnected(outp.__comp, peer.__comp)) {
              // Create connection component
              new IOConnection(outp.__comp, peer.__comp, this).setup();
            }
          }
        }
      }
    }

    return importedNodes;
  }

  /**
   * This method clones selected nodes and add them to the canvas
   * at a position a bit doifferent from it source set
   */
  cloneSelectedNodes() {
    let oldSelected = this.selectedComponents;

    let selectedNodes = Program.cloneNodes(
      this.selectedComponents
        .filter((c) => c instanceof CnodeComponent && c.node.creatable)
        .map((c) => c.node)
    );
    let cloneNodes = Program.cloneNodes(selectedNodes);

    for (let node of cloneNodes) {
      if (node.meta?.pos) {
        node.meta.pos = new Position(
          node.meta.pos.x + 100,
          node.meta.pos.y + 100
        );
      }
    }
    let importedNodes = this.importNodes(cloneNodes);

    // Now select newly imported nodes and deselect older one
    this.selectedComponents = importedNodes;
    for (let comp of oldSelected) {
      comp.updateSVGElement();
    }
    for (let comp of importedNodes) {
      comp.updateSVGElement();
    }
  }

  /**
   * This method copy all selected nodes to a property of the canvas
   */
  copySelectedNodes() {
    let selectedNodes = Program.cloneNodes(
      this.selectedComponents
        .filter((c) => c instanceof CnodeComponent && c.node.creatable)
        .map((c) => c.node)
    );
    CnodesCanvas.clipboard = Program.cloneNodes(selectedNodes);
  }

  /**
   * This method deletes selected nodes
   */
  deleteSelectedNodes() {
    for (let c of this.selectedComponents) {
      if (c instanceof CnodeComponent && c.node.removable) {
        c.destroy();
      }
    }
  }

  /**
   * This method unselect all nodes
   */
  unselectAllNodes() {
    this.selectedComponents = [];
    this.components.forEach((c) => c.updateSVGElement());
  }

  /**
   * This method select all nodes
   */
  selectAllNodes() {
    this.selectedComponents = this.components.filter(
      (c) => c instanceof CnodeComponent
    );
    this.selectedComponents.forEach((c) => c.updateSVGElement());
  }

  /**
   * Paste copied nodes to the canvas, at a position
   * @param {number} x X Position to which paste nodes
   * @param {number} y Y Position to which paste nodes
   */
  pasteNodes(x, y) {
    if (!CnodesCanvas.clipboard) {
      return;
    }

    let oldSelected = this.selectedComponents;

    let cloneNodes = Program.cloneNodes(CnodesCanvas.clipboard);

    if (x && y) {
      // Compute the min x,y of cloned nodes
      let minPos = cloneNodes.reduce(
        (acc, val) =>
          new Position(
            Math.min(acc.x, val?.meta?.pos.x),
            Math.min(acc.y, val?.meta?.pos.y)
          ),
        new Position(Infinity, Infinity)
      );

      // Normalize positions
      cloneNodes = cloneNodes.map((n) => {
        if (n?.meta?.pos) {
          n.meta.pos.x -= minPos.x;
          n.meta.pos.y -= minPos.y;
        }
        return n;
      });

      // Relocate nodes to menu point
      for (let node of cloneNodes) {
        if (node?.meta?.pos) {
          node.meta.pos = {
            x: x + node.meta.pos.x,
            y: y + node.meta.pos.y,
          };
        }
      }
    } else {
      // Shift nodes by (100,100)
      for (let node of cloneNodes) {
        if (node?.meta?.pos) {
          node.meta.pos = {
            x: 100 + node.meta.pos.x,
            y: 100 + node.meta.pos.y,
          };
        }
      }
    }

    let importedNodes = this.importNodes(cloneNodes);

    // Now select newly imported nodes and deselect older one
    this.selectedComponents = importedNodes;
    for (let comp of oldSelected) {
      comp.updateSVGElement();
    }
    for (let comp of importedNodes) {
      comp.updateSVGElement();
    }
  }

  /**
   * Push a subprogram on the canvas. The current program
   * is pushed on to the stack and the new one is placed on the canvas
   * @param {Program} program The new program to edit
   */
  pushProgram(program) {
    setTimeout(() => {
      // Push this current program to the stack
      this.#stack.unshift(this.program);

      // Set the new Program
      this.program = program;
    });
  }

  /**
   * Pops the last program and place it on the canvas. The actual
   * program (that is a subprogram of the popped) is abandoned
   */
  popProgram() {
    setTimeout(() => {
      this.program = this.#stack.shift();
    });
  }

  /**
   * Can this canvas pop a program from the stack, that is:
   * there is at least one program on the stack?
   */
  canPopProgram() {
    return this.#stack.length > 0;
  }
}
