/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { Env } from "@marco.jacovone/cnodes/cnodes";
import { Program } from "@marco.jacovone/cnodes/cnodes";
import { Canvas } from "../canvas/canvas";
import { Component } from "../canvas/component";
import { MenuItem } from "../canvas/menu";
import { Position } from "../canvas/position";
import { IOConnection } from "../connections/io_connection";
import { PrevNextConnection } from "../connections/prevnext_connection";
import { CnodeComponent } from "./cnode";
import { CnodesMenu } from "./cnodesmenu";
import { Theme } from "./theme";

/**
 * This is the entry-point class for managing the canvas
 * relative to a cnodes program.
 */
export class CnodesCanvas extends Canvas {
  /** The edited program */
  #program = null;

  constructor(el) {
    super(el);

    let defsEl = document.createElementNS("http://www.w3.org/2000/svg", "defs");

    defsEl.innerHTML = `
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
      <marker id="io-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" fill="${Theme.current.CONNECTION_IO_COLOR}" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 Z">
        </path>
      </marker>
      <marker id="prevnext-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" fill="${Theme.current.CONNECTION_PREV_NEXT_COLOR}" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 Z">
        </path>
      </marker>      
    `;

    this.svgEl.appendChild(defsEl);
  }

  get program() {
    return this.#program;
  }

  /**
   * This setter is a trigger for the import procedure
   */
  set program(val) {
    this.#importCnodesProgram(val);
    this.#program = val;
  }

  /**
   * Executes the program
   */
  run() {
    this.#program.process();
  }

  /**
   * Dump the internal CNODES program to the console
   */
  dump() {
    console.log(Env.export(this.#program));
  }

  /**
   * Add a new component to the canvas
   * @param {Component} component Component to add
   */
  addComponent(component) {
    super.addComponent(component);

    if (component instanceof CnodeComponent && this.program) {
      // Add the node to the program
      this.program.addNode(component.node);
    }
  }

  /**
   * Remove a component from the canvas
   * @param {Component} component Component to remove
   */
  removeComponent(component) {
    super.removeComponent(component);

    if (component instanceof CnodeComponent && this.program) {
      // Remove the node from the program
      this.program.removeNode(component.node);
    }
  }

  /**
   * Return a list of MenuItem for the context menu
   */
  getCanvasContextMenuItems() {
    let items = [];
    for (let cat of Env.getCategories()) {
      for (let nodeDef of Env.getCategoryNodes(cat)) {
        let n = Env.getInstance(nodeDef.name);
        if (n.creatable) {
          items.push(
            new MenuItem(
              `
              <tspan alignment-baseline="middle" style="${Theme.current.MENU_ITEM_FONT}" fill="${Theme.current.MENU_ITEM_COLOR}">
                ${nodeDef.name}
              </tspan>
              <tspan alignment-baseline="middle" style="${Theme.current.MENU_ITEM_CATEGORY_FONT}" fill="${Theme.current.MENU_ITEM_CATEGORY_COLOR}">
                ${nodeDef.category}
              </tspan>
              `,
              (x, y) => {
                let node = new CnodeComponent(n, this);
                node.pos = new Position(x, y);
              }
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
  #importCnodesProgram(program) {
    this.#program = null;
    this.removeAll();

    // Import the program
    for (let n of program.nodes) {
      let comp = new CnodeComponent(n, this);
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
    }

    // Setup connections
    for (let n of program.nodes) {
      // Setup prev
      if (n.prev && n.prev.peers.length > 0) {
        for (let peer of n.prev.peers) {
          let thisSocketComponent = n.prev.__comp;
          let otherSocketComponent = peer.__comp;

          if (!this.alreadyConnected(otherSocketComponent, thisSocketComponent)) {
            // Create connection component without creating the connection on cnodes sockets
            new PrevNextConnection(otherSocketComponent, thisSocketComponent, this, false);
          }
        }
      }
      // Setup nexts
      for (let next of n.nexts) {
        if (next.peer) {
          let thisSocketComponent = next.__comp;
          let otherSocketComponent = next.peer.__comp;

          if (!this.alreadyConnected(otherSocketComponent, thisSocketComponent)) {
            // Create connection component without creating the connection on cnodes sockets
            new PrevNextConnection(thisSocketComponent, otherSocketComponent, this, false);
          }
        }
      }
      // Setup inputs
      for (let inp of n.inputs) {
        if (inp.peer) {
          let thisSocketComponent = inp.__comp;
          let otherSocketComponent = inp.peer.__comp;

          if (!this.alreadyConnected(otherSocketComponent, thisSocketComponent)) {
            // Create connection component without creating the connection on cnodes sockets
            new IOConnection(otherSocketComponent, thisSocketComponent, this, false);
          }
        }
      }
      // Setup outputs
      for (let outp of n.outputs) {
        if (outp.peers.length > 0) {
          for (let peer of outp.peers) {
            let thisSocketComponent = outp.__comp;
            let otherSocketComponent = peer.__comp;

            if (!this.alreadyConnected(otherSocketComponent, thisSocketComponent)) {
              // Create connection component without creating the connection on cnodes sockets
              new IOConnection(thisSocketComponent, otherSocketComponent, this, false);
            }
          }
        }
      }
    }
  }
}
