import { Component } from "../canvas/component";
import { Position } from "../canvas/position";
import { PrevSocketComponent } from "./prev";
import { NextSocketComponent } from "./next";
import * as theme from "./theme";
import { OutputSocketComponent } from "./output";
import { InputSocketComponent } from "./input";

export class CnodeComponent extends Component {
  #node;
  #containerEl;
  #titleEl;
  #symbolEl;

  constructor(node, canvas) {
    super();
    this.#node = node;
    super.setup();
    canvas.addComponent(this);
    this.#attachSubcomponents();
  }

  get node() {
    return this.#node;
  }

  get height() {
    return (
      theme.NODE_BORDER_RADIUS * 0.5 +
      40 + // Title
      30 * Math.max(1, this.node.nexts.length) + // Nexts/prevs, at least 1 prev
      30 * Math.max(0, this.node.outputs.length) + // Outputs
      30 * Math.max(0, this.node.inputs.length) + // Inputs
      15
    ); // Padding
  }

  createElement() {
    let nodeEl = document.createElementNS("http://www.w3.org/2000/svg", "g");
    this.#containerEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.#titleEl = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    this.#symbolEl = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    nodeEl.appendChild(this.#containerEl);
    nodeEl.appendChild(this.#titleEl);
    nodeEl.appendChild(this.#symbolEl);

    this.#containerEl.setAttribute(
      "d",
      `
      M 0 ${theme.NODE_BORDER_RADIUS * 1.3} 
      A ${theme.NODE_BORDER_RADIUS * 1.3} ${theme.NODE_BORDER_RADIUS * 1.3} 0 0 0 ${theme.NODE_BORDER_RADIUS * 1.3} 0 
      L ${theme.NODE_WIDTH - theme.NODE_BORDER_RADIUS} 0 
      A ${theme.NODE_BORDER_RADIUS} ${theme.NODE_BORDER_RADIUS} 0 0 1 ${theme.NODE_WIDTH} ${theme.NODE_BORDER_RADIUS} 
      L ${theme.NODE_WIDTH} ${this.height - theme.NODE_BORDER_RADIUS} 
      A ${theme.NODE_BORDER_RADIUS} ${theme.NODE_BORDER_RADIUS} 0 0 1 ${theme.NODE_WIDTH - theme.NODE_BORDER_RADIUS} ${this.height} 
      L ${theme.NODE_BORDER_RADIUS} ${this.height} 
      A ${theme.NODE_BORDER_RADIUS} ${theme.NODE_BORDER_RADIUS} 0 0 1 0 ${this.height - theme.NODE_BORDER_RADIUS} 
      Z
      `
    );

    this.#titleEl.innerHTML = this.node.name;
    this.#titleEl.style = `font: ${theme.NODE_TITLE_FONT}; color: ${theme.NODE_TITLE_COLOR}; text-align: center; user-select: none`;
    this.#titleEl.setAttribute("x", theme.NODE_BORDER_RADIUS * 0.5);
    this.#titleEl.setAttribute("y", theme.NODE_BORDER_RADIUS * 0.5);
    this.#titleEl.setAttribute("width", theme.NODE_WIDTH - theme.NODE_BORDER_RADIUS * 0.5 * 2);
    this.#titleEl.setAttribute("height", 20);

    this.#containerEl.setAttribute("stroke", theme.NODE_STROKE_COLOR);
    this.#containerEl.setAttribute("stroke-width", theme.NODE_STROKE_WIDTH);
    this.#containerEl.setAttribute("fill", theme.NODE_FILL_COLOR);
    this.#containerEl.setAttribute("x", "0");
    this.#containerEl.setAttribute("y", "0");

    this.#symbolEl.setAttribute("cx", 0);
    this.#symbolEl.setAttribute("cy", 0);
    this.#symbolEl.setAttribute("r", theme.NODE_BORDER_RADIUS * 0.9);
    this.#symbolEl.setAttribute("stroke", theme.NODE_SYMBOL_STROKE_COLOR);
    this.#symbolEl.setAttribute("stroke-width", theme.NODE_SYMBOL_STROKE_WIDTH);
    this.#symbolEl.setAttribute("fill", theme.NODE_SYMBOL_FILL_COLOR);

    nodeEl.setAttribute("x", "0");
    nodeEl.setAttribute("y", "0");
    return nodeEl;
  }

  #attachSubcomponents() {
    let posY = 40 + 0.5 * theme.NODE_BORDER_RADIUS;

    // Prev
    if (this.node.prev) {
      let nComp = new PrevSocketComponent(this.node.prev);
      nComp.pos = new Position(0, posY);
      this.addComponent(nComp);
    }

    // Nexts
    for (const next of this.node.nexts) {
      let nComp = new NextSocketComponent(next);
      nComp.pos = new Position(theme.NODE_WIDTH, posY);
      this.addComponent(nComp);
      posY += 30;
    }

    // Output
    for (const output of this.node.outputs) {
      let nComp = new OutputSocketComponent(output);
      nComp.pos = new Position(theme.NODE_WIDTH, posY);
      this.addComponent(nComp);
      posY += 30;
    }

    // Input
    for (const input of this.node.inputs) {
      let nComp = new InputSocketComponent(input);
      nComp.pos = new Position(0, posY);
      this.addComponent(nComp);
      posY += 30;
    }
  }
}
