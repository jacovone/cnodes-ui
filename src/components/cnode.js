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

/**
 * This is the main class for managing a single CNode
 * inside the cnodes-ui canvas. It embed a cnodes node instance
 */
export class CnodeComponent extends Component {
  /** The cnodes nod instance */
  #node;

  /** An SVG element to draw the container of the node */
  #containerEl;

  /** An SVG element to draw the title of the node */
  #titleEl;

  /** An SVG element to draw the top-left symbol for the node */
  #symbolEl;

  /** An SVG element to draw the top-left sign for the node */
  #signEl;

  constructor(node, canvas) {
    super();
    this.#node = node;

    // write a back-reference
    this.#node.__comp = this;

    super.setup();
    canvas.addComponent(this);

    this.#attachSubcomponents();
  }

  get node() {
    return this.#node;
  }

  /**
   * Computes the node vertical size, based on node
   * characteristics in terms of number of input, output,
   * and nexts. It takes account of the current theme
   */
  get height() {
    return (
      Theme.current.NODE_BORDER_RADIUS * 0.5 +
      40 + // Title
      30 * Math.max(this.node.functional ? 0 : 1, this.node.nexts.length) + // Nexts/prevs, at least 1 prev
      30 * Math.max(0, this.node.outputs.length) + // Outputs
      30 * Math.max(0, this.node.inputs.length) + // Inputs
      15 // Padding
    );
  }

  /**
   * Lets create the SVG element
   */
  createElement() {
    let nodeEl = document.createElementNS("http://www.w3.org/2000/svg", "g");
    this.#containerEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.#titleEl = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    this.#symbolEl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    this.#signEl = document.createElementNS("http://www.w3.org/2000/svg", "path");

    nodeEl.appendChild(this.#containerEl);
    nodeEl.appendChild(this.#titleEl);
    nodeEl.appendChild(this.#symbolEl);
    nodeEl.appendChild(this.#signEl);

    this.#containerEl.setAttribute(
      "d",
      `
      M 0 ${Theme.current.NODE_BORDER_RADIUS * 1.3} 
      A ${Theme.current.NODE_BORDER_RADIUS * 1.3} ${Theme.current.NODE_BORDER_RADIUS * 1.3} 0 0 0 ${Theme.current.NODE_BORDER_RADIUS * 1.3} 0 
      L ${Theme.current.NODE_WIDTH - Theme.current.NODE_BORDER_RADIUS} 0 
      A ${Theme.current.NODE_BORDER_RADIUS} ${Theme.current.NODE_BORDER_RADIUS} 0 0 1 ${Theme.current.NODE_WIDTH} ${
        Theme.current.NODE_BORDER_RADIUS
      } 
      L ${Theme.current.NODE_WIDTH} ${this.height - Theme.current.NODE_BORDER_RADIUS} 
      A ${Theme.current.NODE_BORDER_RADIUS} ${Theme.current.NODE_BORDER_RADIUS} 0 0 1 ${
        Theme.current.NODE_WIDTH - Theme.current.NODE_BORDER_RADIUS
      } ${this.height} 
      L ${Theme.current.NODE_BORDER_RADIUS} ${this.height} 
      A ${Theme.current.NODE_BORDER_RADIUS} ${Theme.current.NODE_BORDER_RADIUS} 0 0 1 0 ${this.height - Theme.current.NODE_BORDER_RADIUS} 
      Z
      `
    );

    this.#titleEl.innerHTML = this.node.name;
    this.#titleEl.style = `
      font: ${Theme.current.NODE_TITLE_FONT}; 
      color: ${!this.node.functional ? Theme.current.NODE_TITLE_COLOR : Theme.current.NODE_FUNCTIONAL_TITLE_COLOR}; 
      text-align: center; 
      user-select: none`;
    this.#titleEl.setAttribute("x", Theme.current.NODE_BORDER_RADIUS * 0.5);
    this.#titleEl.setAttribute("y", Theme.current.NODE_BORDER_RADIUS * 0.5);
    this.#titleEl.setAttribute("width", Theme.current.NODE_WIDTH - Theme.current.NODE_BORDER_RADIUS * 0.5 * 2);
    this.#titleEl.setAttribute("height", 20);

    this.#containerEl.setAttribute(
      "stroke",
      !this.node.functional ? Theme.current.NODE_STROKE_COLOR : Theme.current.NODE_FUNCTIONAL_STROKE_COLOR
    );
    this.#containerEl.setAttribute("stroke-width", Theme.current.NODE_STROKE_WIDTH);
    this.#containerEl.setAttribute("fill", this.node.functional ? Theme.current.NODE_FUNCTIONAL_FILL_COLOR : Theme.current.NODE_FILL_COLOR);
    this.#containerEl.setAttribute("x", "0");
    this.#containerEl.setAttribute("y", "0");

    this.#symbolEl.setAttribute("cx", 0);
    this.#symbolEl.setAttribute("cy", 0);
    this.#symbolEl.setAttribute("r", Theme.current.NODE_BORDER_RADIUS * 0.9);
    this.#symbolEl.setAttribute("stroke", Theme.current.NODE_SYMBOL_STROKE_COLOR);
    this.#symbolEl.setAttribute("stroke-width", Theme.current.NODE_SYMBOL_STROKE_WIDTH);
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
      M ${signRadius * 0.5} 0
      L ${-signRadius * 0.3} 0
      L 0 ${-signRadius * 0.5}
      M ${signRadius * 0.5} 0
      L ${-signRadius * 0.3} 0
      L 0 ${+signRadius * 0.5}
      `
    );
    this.#signEl.setAttribute("stroke", !this.node.functional ? Theme.current.NODE_SIGN_COLOR : Theme.current.NODE_FUNCTIONAL_SIGN_COLOR);
    this.#signEl.setAttribute("stroke-width", !this.node.functional ? 1 : 3);
    this.#signEl.setAttribute("fill", !this.node.functional ? Theme.current.NODE_SIGN_COLOR : "transparent");
    this.#signEl.setAttribute("stroke-linejoin", "null");
    this.#signEl.setAttribute("x", "0");
    this.#signEl.setAttribute("y", "0");

    nodeEl.setAttribute("x", "0");
    nodeEl.setAttribute("y", "0");
    return nodeEl;
  }

  /**
   * This method construct all sub components. They are all sockets
   * representing input, outputs, prev and nexts.
   */
  #attachSubcomponents() {
    let posY = 40 + 0.5 * Theme.current.NODE_BORDER_RADIUS;

    // Prev
    if (this.node.prev) {
      let nComp = new PrevSocketComponent(this.node.prev);
      nComp.pos = new Position(0, posY);
      this.addComponent(nComp);

      // write a back_reference
      this.node.prev.__comp = nComp;
    }

    // Nexts
    for (const next of this.node.nexts) {
      let nComp = new NextSocketComponent(next);
      nComp.pos = new Position(Theme.current.NODE_WIDTH, posY);
      this.addComponent(nComp);
      posY += 30;

      // write a back-reference
      next.__comp = nComp;
    }

    // Output
    for (const output of this.node.outputs) {
      let nComp = new OutputSocketComponent(output);
      nComp.pos = new Position(Theme.current.NODE_WIDTH, posY);
      this.addComponent(nComp);
      posY += 30;

      // write a back-reference
      output.__comp = nComp;
    }

    // Input
    for (const input of this.node.inputs) {
      let nComp = new InputSocketComponent(input);
      nComp.pos = new Position(0, posY);
      this.addComponent(nComp);
      posY += 30;

      // write a back-reference
      input.__comp = nComp;
    }
  }

  /**
   * Intercept by overriding this method to update
   * graphical cooordinates in the program structure
   */
  updateSVGElement() {
    super.updateSVGElement();

    // Update UI data in meta info
    if (!this.#node.meta) {
      this.node.meta = {};
    }
    this.#node.meta.pos = {
      x: this.pos.x,
      y: this.pos.y,
    };
  }
}
