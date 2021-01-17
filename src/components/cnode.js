/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { Component } from "../canvas/component";
import { Position } from "../canvas/position";
import { PrevSocketComponent } from "./prev";
import { NextSocketComponent } from "./next";
import { Theme } from "./theme";
import { OutputSocketComponent } from "./output";
import { InputSocketComponent } from "./input";
import { MenuItem } from "../canvas/menu";
import { CnodesEditableTextComponent } from "./cnodeseditabletext";

/**
 * This is the main class for managing a single CNode
 * inside the cnodes-ui canvas. It embed a cnodes node instance
 */
export class CnodeComponent extends Component {
  /** The cnodes nod instance */
  #node;

  /** An SVG element to draw the container of the node */
  #containerEl;

  /** An SVG element to draw the top-left symbol for the node */
  #symbolEl;

  /** An SVG element to draw the top-left sign for the node */
  #signEl;

  /** A subcomponent for title */
  #titleComp = null;

  /** A subcomponent for comment */
  #commentComp = null;

  constructor(node, canvas) {
    super();
    this.#node = node;

    // write a back-reference
    this.#node.__comp = this;
  }

  get node() {
    return this.#node;
  }
  get titleComp() {
    return this.#titleComp;
  }
  get width() {
    return Theme.current.NODE_WIDTH;
  }

  /**
   * Sets up the component
   */
  setup() {
    super.setup();
    canvas.addComponent(this);

    // If there is an active program, add this node to it
    if (this.canvas.program) {
      this.canvas.program.addNode(this.#node);
    }

    this.updateSubcomponents();
    return this;
  }

  /**
   * Computes the node vertical size, based on node
   * characteristics in terms of number of input, output,
   * and nexts. It takes account of the current theme
   */
  get height() {
    let leftSocketsHeight = this.node.inputs.length;
    if (
      this.node.prev &&
      this.node.nexts.length === 0 &&
      this.node.outputs.length === 0
    ) {
      leftSocketsHeight++;
    }
    let rightSocketsHeight = this.node.outputs.length + this.node.nexts.length;

    return (
      Theme.current.NODE_BORDER_RADIUS * 0.5 +
      20 + // padding
      30 * (leftSocketsHeight + rightSocketsHeight) +
      15 // Padding
    );
  }

  /**
   * Lets create the SVG element
   */
  createElement() {
    let nodeEl = document.createElementNS("http://www.w3.org/2000/svg", "g");
    this.#containerEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    this.#symbolEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    this.#signEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );

    this.#containerEl.setAttribute(
      "stroke",
      !this.node.functional
        ? Theme.current.NODE_STROKE_COLOR
        : Theme.current.NODE_FUNCTIONAL_STROKE_COLOR
    );
    this.#containerEl.setAttribute(
      "stroke-width",
      Theme.current.NODE_STROKE_WIDTH
    );
    this.#containerEl.setAttribute(
      "fill",
      this.node.functional
        ? Theme.current.NODE_FUNCTIONAL_FILL_COLOR
        : Theme.current.NODE_FILL_COLOR
    );
    this.#containerEl.setAttribute("x", "0");
    this.#containerEl.setAttribute("y", "0");

    this.#symbolEl.setAttribute("cx", 0);
    this.#symbolEl.setAttribute("cy", 0);
    this.#symbolEl.setAttribute("r", Theme.current.NODE_BORDER_RADIUS * 0.9);
    this.#symbolEl.setAttribute(
      "stroke",
      Theme.current.NODE_SYMBOL_STROKE_COLOR
    );
    this.#symbolEl.setAttribute(
      "stroke-width",
      Theme.current.NODE_SYMBOL_STROKE_WIDTH
    );
    this.#symbolEl.setAttribute("fill", Theme.current.NODE_SYMBOL_FILL_COLOR);

    let signRadius = Theme.current.NODE_BORDER_RADIUS * 0.7;
    this.#signEl.setAttribute(
      "d",
      !this.node.functional
        ? `
      M ${signRadius * 0.5} 0
      L ${-signRadius * 0.3} ${-signRadius / 2}
      L ${-signRadius * 0.3} ${signRadius / 2}
      Z
      `
        : `
      M ${signRadius * 0.6} 0
      L ${-signRadius * 0.5} 0

      M 0 ${-signRadius * 0.6}
      L ${-signRadius * 0.5} 0
      L 0 ${+signRadius * 0.6}
      `
    );
    this.#signEl.setAttribute(
      "stroke",
      !this.node.functional
        ? Theme.current.NODE_SIGN_COLOR
        : Theme.current.NODE_FUNCTIONAL_SIGN_COLOR
    );
    this.#signEl.setAttribute("stroke-width", !this.node.functional ? 1 : 3);
    this.#signEl.setAttribute(
      "fill",
      !this.node.functional ? Theme.current.NODE_SIGN_COLOR : "transparent"
    );
    this.#signEl.setAttribute("stroke-linejoin", "null");
    this.#signEl.setAttribute("x", "0");
    this.#signEl.setAttribute("y", "0");

    nodeEl.setAttribute("x", "0");
    nodeEl.setAttribute("y", "0");

    nodeEl.appendChild(this.#containerEl);
    nodeEl.appendChild(this.#symbolEl);
    nodeEl.appendChild(this.#signEl);

    return nodeEl;
  }

  /**
   * This method construct and/or update all sub components. They are all sockets
   * representing input, outputs, prev and nexts.
   */
  updateSubcomponents() {
    let posY = 30 + 0.5 * Theme.current.NODE_BORDER_RADIUS;

    // Prev
    if (this.node.prev) {
      let nComp = this.node.prev.__comp;
      if (!nComp) {
        nComp = new PrevSocketComponent(this.node.prev).setup().addTo(this);

        // write a back_reference
        this.node.prev.__comp = nComp;
      }
      // Update position
      nComp.pos = new Position(0, posY);
    }

    // Nexts
    for (const next of this.node.nexts) {
      let nComp = next.__comp;
      if (!nComp) {
        nComp = new NextSocketComponent(next).setup().addTo(this);

        // write a back-reference
        next.__comp = nComp;
      }
      // Update position
      nComp.pos = new Position(Theme.current.NODE_WIDTH, posY);
      posY += 30;
    }

    // Take account of the case in which there are not nexts and outputs
    // but there is a prev.
    if (
      this.node.outputs.length === 0 &&
      this.node.nexts.length === 0 &&
      this.node.prev
    ) {
      posY += 30;
    }

    // Output
    for (const output of this.node.outputs) {
      let nComp = output.__comp;
      if (!nComp) {
        nComp = new OutputSocketComponent(output).setup().addTo(this);

        // write a back-reference
        output.__comp = nComp;
      }
      // Update position
      nComp.pos = new Position(Theme.current.NODE_WIDTH, posY);
      posY += 30;
    }

    // Input
    for (const input of this.node.inputs) {
      let nComp = input.__comp;
      if (!nComp) {
        nComp = new InputSocketComponent(input).setup().addTo(this);

        // write a back-reference
        input.__comp = nComp;
      }
      // Update position
      nComp.pos = new Position(0, posY);
      posY += 30;
    }

    // Title
    if (!this.#titleComp) {
      this.#titleComp = new CnodesEditableTextComponent(
        this.node.title
      ).setup();

      // Register to "cnui:change" to update title and meta info about it
      this.#titleComp.events.on("cnui:change", (component) => {
        // Prevent empty title
        if (component.text === "") {
          component.text = "title";
        }
      });

      this.#titleComp.events.on("cnui:move", (component) => {
        // Update UI data in meta info
        this.node.title = component.text;
        if (!this.node.meta) {
          this.node.meta = {};
        }
        this.node.meta.titlePos = {
          x: component.pos.x,
          y: component.pos.y,
        };
      });

      this.#titleComp.font = Theme.current.NODE_TITLE_FONT;

      this.#titleComp.color = this.node.functional
        ? Theme.current.NODE_FUNCTIONAL_TITLE_COLOR
        : Theme.current.NODE_TITLE_COLOR;
      this.#titleComp.pos = this.node.meta?.titlePos
        ? new Position(this.node.meta.titlePos.x, this.node.meta.titlePos.y)
        : new Position(10 + Theme.current.NODE_BORDER_RADIUS, -25);
      this.#titleComp.width =
        Theme.current.NODE_WIDTH - (10 + Theme.current.NODE_BORDER_RADIUS);
      this.#titleComp.addTo(this);
    }
  }

  /**
   * Intercept by overriding this method to update
   * graphical cooordinates in the program structure
   */
  updateSVGElement() {
    super.updateSVGElement();

    this.#containerEl.setAttribute(
      "d",
      `
      M 0 ${Theme.current.NODE_BORDER_RADIUS * 1.3} 
      A ${Theme.current.NODE_BORDER_RADIUS * 1.3} ${
        Theme.current.NODE_BORDER_RADIUS * 1.3
      } 0 0 0 ${Theme.current.NODE_BORDER_RADIUS * 1.3} 0 
      L ${Theme.current.NODE_WIDTH - Theme.current.NODE_BORDER_RADIUS} 0 
      A ${Theme.current.NODE_BORDER_RADIUS} ${
        Theme.current.NODE_BORDER_RADIUS
      } 0 0 1 ${Theme.current.NODE_WIDTH} ${Theme.current.NODE_BORDER_RADIUS} 
      L ${Theme.current.NODE_WIDTH} ${
        this.height - Theme.current.NODE_BORDER_RADIUS
      } 
      A ${Theme.current.NODE_BORDER_RADIUS} ${
        Theme.current.NODE_BORDER_RADIUS
      } 0 0 1 ${Theme.current.NODE_WIDTH - Theme.current.NODE_BORDER_RADIUS} ${
        this.height
      } 
      L ${Theme.current.NODE_BORDER_RADIUS} ${this.height} 
      A ${Theme.current.NODE_BORDER_RADIUS} ${
        Theme.current.NODE_BORDER_RADIUS
      } 0 0 1 0 ${this.height - Theme.current.NODE_BORDER_RADIUS} 
      Z
      `
    );

    // Update sub-sockets
    this.updateSubcomponents();

    // Update UI data in meta info
    if (!this.#node.meta) {
      this.node.meta = {};
    }
    this.#node.meta.pos = {
      x: this.pos.x,
      y: this.pos.y,
    };
  }

  /**
   * Returns the array of context menu items. If the component
   * returns null, no contextual menu is shown
   */
  getContextMenuItems() {
    let items = [];

    // The node can add inputs?
    if (this.node.canAddInput) {
      items.push(
        new MenuItem(
          `<tspan alignment-baseline="middle">Add input</tspan>`,
          () => {
            this.node.addInput();
            this.updateSVGElement();
          }
        )
      );
    }

    // The node can add inputs?
    if (this.node.canAddOutput) {
      items.push(
        new MenuItem(
          `<tspan alignment-baseline="middle">Add output</tspan>`,
          () => {
            this.node.addOutput();
            this.updateSVGElement();
          }
        )
      );
    }

    items.push(
      new MenuItem(
        `<tspan alignment-baseline="middle">Disconnect all</tspan>`,
        () => {
          this.events.emit("cnui:disconnectAll");
        }
      )
    );

    // The node can be removed?
    if (this.node.removable) {
      items.push(
        new MenuItem(
          `<tspan alignment-baseline="middle">Delete</tspan>`,
          () => {
            this.destroy();
          }
        )
      );
    }

    if (!this.#commentComp) {
      items.push(
        new MenuItem(
          `<tspan alignment-baseline="middle">Add comment</tspan>`,
          () => {
            this.createCommentComponent(
              "write a comment",
              0,
              this.height + 10,
              true
            );
          }
        )
      );
    } else {
      items.push(
        new MenuItem(
          `<tspan alignment-baseline="middle">Remove comment</tspan>`,
          () => {
            this.#commentComp.events.removeAllListeners("cnui:change");
            this.#commentComp.events.removeAllListeners("cnui:move");
            this.#commentComp.destroy();
            this.node.meta.comment = undefined;
            this.#commentComp = null;
          }
        )
      );
    }

    return items;
  }

  /**
   * This method creates a comment component and attach it to the
   * node component. Take the x,y coordinates in input to place this
   * component, by default at the bottom of the node
   * @param {string} comment The text for the comment
   * @param {number} x The x coordinate for the comment component
   * @param {number} y The y coordinate for the comment component
   * @param {boolean} initialEdit The comment starts in edit mode?
   */
  createCommentComponent(
    comment = "write a comment",
    x = 0,
    y = this.height + 10,
    initialEdit = false
  ) {
    this.#commentComp = new CnodesEditableTextComponent(comment).setup();
    this.#commentComp.font = Theme.current.NODE_COMMENT_FONT;
    this.#commentComp.color = Theme.current.NODE_COMMENT_COLOR;
    this.#commentComp.pos = new Position(x, y);
    this.#commentComp.width = Theme.current.NODE_WIDTH;
    this.#commentComp.addTo(this);

    this.#commentComp.setEditing(initialEdit);

    // Register to "cnui:change" to update title
    this.#commentComp.events.on("cnui:change", (component) => {
      // Prevent empty title
      if (component.text === "") {
        component.text = "comment";
      }
    });
    // Register "cnui:move" to update meta info
    this.#commentComp.events.on("cnui:move", (component) => {
      // Update UI data in meta info
      if (!this.node.meta) {
        this.node.meta = {};
      }
      this.node.meta.comment = {
        text: component.text,
        pos: {
          x: component.pos.x,
          y: component.pos.y,
        },
      };
    });
  }

  /**
   * Remove the internal node reference to the component
   * upon destroy
   */
  destroy() {
    this.node.__comp = null;

    // If there is acrive program, remove the node from it
    if (this.canvas.program) {
      this.canvas.program.removeNode(this.node);
    }

    this.#titleComp.events.removeAllListeners("cnui:change");
    this.#titleComp.events.removeAllListeners("cnui:move");
    if (this.#commentComp) {
      this.#commentComp.events.removeAllListeners("cnui:change");
      this.#commentComp.events.removeAllListeners("cnui:move");
    }

    super.destroy();
  }
}
