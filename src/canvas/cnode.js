import { Component } from "./component";

const NODE_WIDTH = 200;

const NODE_BORDER_RADIUS = 15;
const NODE_FILL_COLOR = "#FAD7A0";
const NODE_STROKE_COLOR = "#FAD7A0";
const NODE_STROKE_WIDTH = 3;

const NODE_TITLE_COLOR = "black";
const NODE_TITLE_FONT = "bold 18px verdana";

const NODE_SYMBOL_STROKE_WIDTH = 3;
const NODE_SYMBOL_STROKE_COLOR = "#FEF9E7";
const NODE_SYMBOL_FILL_COLOR = "#FEF9E7";

const NODE_PREV_NEXT_STROKE_WIDTH = 2;
const NODE_PREV_NEXT_STROKE_COLOR = "#31A200";
const NODE_PREV_NEXT_FILL_COLOR = "#31A200";
const NODE_PREV_NEXT_NAME_FONT = "bold 11px verdana";
const NODE_PREV_NEXT_NAME_COLOR = "bold 11px black";

const NODE_IO_STROKE_WIDTH = 2;
const NODE_IO_STROKE_COLOR = "#008EBF";
const NODE_IO_FILL_COLOR = "#008EBF";
const NODE_IO_NAME_FONT = "bold 11px verdana";
const NODE_IO_NAME_COLOR = "bold 11px black";

export class CnodeComponent extends Component {
  #node;
  #containerEl;
  #titleEl;
  #symbolEl;

  constructor(node) {
    super();
    this.#node = node;
    super.setup();
  }

  get node() {
    return this.#node;
  }

  createElement() {
    let nodeEl = document.createElementNS("http://www.w3.org/2000/svg", "g");
    this.#containerEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.#titleEl = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    this.#symbolEl = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    nodeEl.appendChild(this.#containerEl);
    nodeEl.appendChild(this.#titleEl);
    nodeEl.appendChild(this.#symbolEl);

    let height =
      NODE_BORDER_RADIUS * 0.5 +
      40 + // Title
      30 * Math.max(1, this.node.nexts.length) + // Nexts/prevs, at least 1 prev
      30 * Math.max(0, this.node.outputs.length) + // Outputs
      30 * Math.max(0, this.node.inputs.length) + // Inputs
      15; // Padding

    this.#containerEl.setAttribute(
      "d",
      `
      M 0 ${NODE_BORDER_RADIUS * 1.3} 
      A ${NODE_BORDER_RADIUS * 1.3} ${NODE_BORDER_RADIUS * 1.3} 0 0 0 ${NODE_BORDER_RADIUS * 1.3} 0 
      L ${NODE_WIDTH - NODE_BORDER_RADIUS} 0 
      A ${NODE_BORDER_RADIUS} ${NODE_BORDER_RADIUS} 0 0 1 ${NODE_WIDTH} ${NODE_BORDER_RADIUS} 
      L ${NODE_WIDTH} ${height - NODE_BORDER_RADIUS} 
      A ${NODE_BORDER_RADIUS} ${NODE_BORDER_RADIUS} 0 0 1 ${NODE_WIDTH - NODE_BORDER_RADIUS} ${height} 
      L ${NODE_BORDER_RADIUS} ${height} 
      A ${NODE_BORDER_RADIUS} ${NODE_BORDER_RADIUS} 0 0 1 0 ${height - NODE_BORDER_RADIUS} 
      Z
      `
    );

    this.#titleEl.innerHTML = this.node.name;
    this.#titleEl.style = `font: ${NODE_TITLE_FONT}; color: ${NODE_TITLE_COLOR}; text-align: center; user-select: none`;
    this.#titleEl.setAttribute("x", NODE_BORDER_RADIUS * 0.5);
    this.#titleEl.setAttribute("y", NODE_BORDER_RADIUS * 0.5);
    this.#titleEl.setAttribute("width", NODE_WIDTH - NODE_BORDER_RADIUS * 0.5 * 2);
    this.#titleEl.setAttribute("height", 20);

    this.#containerEl.setAttribute("stroke", NODE_STROKE_COLOR);
    this.#containerEl.setAttribute("stroke-width", NODE_STROKE_WIDTH);
    this.#containerEl.setAttribute("fill", NODE_FILL_COLOR);
    this.#containerEl.setAttribute("x", "0");
    this.#containerEl.setAttribute("y", "0");

    this.#symbolEl.setAttribute("cx", 0);
    this.#symbolEl.setAttribute("cy", 0);
    this.#symbolEl.setAttribute("r", NODE_BORDER_RADIUS * 0.9);
    this.#symbolEl.setAttribute("stroke", NODE_SYMBOL_STROKE_COLOR);
    this.#symbolEl.setAttribute("stroke-width", NODE_SYMBOL_STROKE_WIDTH);
    this.#symbolEl.setAttribute("fill", NODE_SYMBOL_FILL_COLOR);

    let posY = 40 + 0.5 * NODE_BORDER_RADIUS;

    // Prev
    if (this.node.prev) {
      let nEl = this.createPrevElement(this.node.prev);
      nEl.setAttribute("transform", `translate(0, ${posY})`);
      nodeEl.appendChild(nEl);
    }

    // Nexts
    for (const next of this.node.nexts) {
      let nEl = this.createNextElement(next);
      nEl.setAttribute("transform", `translate(${NODE_WIDTH}, ${posY})`);
      nodeEl.appendChild(nEl);
      posY += 30;
    }

    // Output
    for (const output of this.node.outputs) {
      let nEl = this.createOutputElement(output);
      nEl.setAttribute("transform", `translate(${NODE_WIDTH}, ${posY})`);
      nodeEl.appendChild(nEl);
      posY += 30;
    }

    // Input
    for (const input of this.node.inputs) {
      let nEl = this.createInputElement(input);
      nEl.setAttribute("transform", `translate(0, ${posY})`);
      nodeEl.appendChild(nEl);
      posY += 30;
    }

    nodeEl.setAttribute("x", "0");
    nodeEl.setAttribute("y", "0");
    return nodeEl;
  }

  createPrevElement(prev) {
    let symbolElem = document.createElementNS("http://www.w3.org/2000/svg", "path");

    symbolElem.setAttribute(
      "d",
      `
      M -7 -8
      L 7 -8
      L 7 8
      L -7 8
      Z
      `
    );
    symbolElem.setAttribute("stroke", NODE_PREV_NEXT_STROKE_COLOR);
    symbolElem.setAttribute("stroke-width", NODE_PREV_NEXT_STROKE_WIDTH);
    symbolElem.setAttribute("fill", NODE_PREV_NEXT_FILL_COLOR);

    let labelElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    labelElem.style = `
      font: ${NODE_PREV_NEXT_NAME_FONT}; 
      color: ${NODE_PREV_NEXT_NAME_COLOR}; 
      text-align: left;
      width: ${NODE_WIDTH / 2 - 15}px;
      height: 30px;
      line-height: 30px;
      user-select: none;
      `;

    labelElem.innerHTML = `${prev.name}`;

    labelElem.setAttribute("x", 0);
    labelElem.setAttribute("y", 0);
    labelElem.setAttribute("transform", `translate(${15}, ${-15})`);
    labelElem.setAttribute("width", NODE_WIDTH / 2 - 15);
    labelElem.setAttribute("height", 30);

    let prevElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
    prevElem.setAttribute("x", 0);
    prevElem.setAttribute("y", 0);
    prevElem.appendChild(symbolElem);
    prevElem.appendChild(labelElem);

    return prevElem;
  }

  createNextElement(next) {
    let symbolElem = document.createElementNS("http://www.w3.org/2000/svg", "path");

    symbolElem.setAttribute(
      "d",
      `
      M -7 -8
      L 7 -8
      L 12 0
      L 7 8
      L -7 8
      Z
      `
    );
    symbolElem.setAttribute("stroke", NODE_PREV_NEXT_STROKE_COLOR);
    symbolElem.setAttribute("stroke-width", NODE_PREV_NEXT_STROKE_WIDTH);
    symbolElem.setAttribute("fill", NODE_PREV_NEXT_FILL_COLOR);

    let labelElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    labelElem.style = `
      font: ${NODE_PREV_NEXT_NAME_FONT}; 
      color: ${NODE_PREV_NEXT_NAME_COLOR}; 
      text-align: right;
      width: ${NODE_WIDTH / 2 - 15}px;
      height: 30px;
      line-height: 30px;
      user-select: none;
      `;

    labelElem.innerHTML = `${next.name}`;

    labelElem.setAttribute("x", 0);
    labelElem.setAttribute("y", 0);
    labelElem.setAttribute("transform", `translate(${-NODE_WIDTH / 2}, ${-15})`);
    labelElem.setAttribute("width", NODE_WIDTH / 2 - 15);
    labelElem.setAttribute("height", 30);

    let prevElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
    prevElem.setAttribute("x", 0);
    prevElem.setAttribute("y", 0);
    prevElem.appendChild(symbolElem);
    prevElem.appendChild(labelElem);

    return prevElem;
  }

  createOutputElement(output) {
    let symbolElem = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    symbolElem.setAttribute("cx", 0);
    symbolElem.setAttribute("cy", 0);
    symbolElem.setAttribute("r", 10);
    symbolElem.setAttribute("stroke-width", NODE_IO_STROKE_WIDTH);
    symbolElem.setAttribute("stroke", NODE_IO_STROKE_COLOR);
    symbolElem.setAttribute("fill", NODE_IO_FILL_COLOR);

    let labelElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    labelElem.style = `
      font: ${NODE_IO_NAME_FONT}; 
      color: ${NODE_IO_NAME_COLOR}; 
      text-align: right;
      width: ${NODE_WIDTH - 30}px;
      height: 30px;
      line-height: 30px;
      user-select: none;
      `;

    labelElem.innerHTML = `${output.name}`;

    labelElem.setAttribute("x", 0);
    labelElem.setAttribute("y", 0);
    labelElem.setAttribute("transform", `translate(${-NODE_WIDTH + 15}, ${-15})`);
    labelElem.setAttribute("width", NODE_WIDTH - 30);
    labelElem.setAttribute("height", 30);

    let outputElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
    outputElem.setAttribute("x", 0);
    outputElem.setAttribute("y", 0);
    outputElem.appendChild(symbolElem);
    outputElem.appendChild(labelElem);

    return outputElem;
  }

  createInputElement(input) {
    let symbolElem = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    symbolElem.setAttribute("cx", 0);
    symbolElem.setAttribute("cy", 0);
    symbolElem.setAttribute("r", 10);
    symbolElem.setAttribute("stroke-width", NODE_IO_STROKE_WIDTH);
    symbolElem.setAttribute("stroke", NODE_IO_STROKE_COLOR);
    symbolElem.setAttribute("fill", NODE_IO_FILL_COLOR);

    let labelElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    labelElem.style = `
    font: ${NODE_IO_NAME_FONT}; 
    color: ${NODE_IO_NAME_COLOR}; 
    text-align: left;
    width: ${NODE_WIDTH / 2 - 15}px;
    height: 30px;
    line-height: 30px;
    user-select: none;
    `;

    labelElem.innerHTML = `${input.name}`;

    labelElem.setAttribute("x", 0);
    labelElem.setAttribute("y", 0);
    labelElem.setAttribute("transform", `translate(${15}, ${-15})`);
    labelElem.setAttribute("width", NODE_WIDTH / 2 - 15);
    labelElem.setAttribute("height", 30);

    let textInputElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    textInputElem.style = `
    font: ${NODE_IO_NAME_FONT}; 
    color: ${NODE_IO_NAME_COLOR}; 
    text-align: left;
    line-height: 30px;
    user-select: none;
    `;

    textInputElem.setAttribute("x", 0);
    textInputElem.setAttribute("y", 0);
    textInputElem.setAttribute("transform", `translate(${NODE_WIDTH / 2}, ${-15})`);
    textInputElem.setAttribute("width", NODE_WIDTH / 2 - 15);
    textInputElem.setAttribute("height", 30);

    let textFieldElem = document.createElement("input");
    textFieldElem.style = `
    font: ${NODE_IO_NAME_FONT}; 
    color: ${NODE_IO_NAME_COLOR}; 
    width: ${NODE_WIDTH / 2 - 25}px; // 5px less than foreignObject
    height: ${20}px;
    border: 0;
    padding: 2px;
    margin: 2px;
    `;

    // textFieldElem.setAttribute("x", 0);
    // textFieldElem.setAttribute("y", 0);
    textFieldElem.setAttribute("value", input.value);
    textFieldElem.setAttribute("type", "text");

    textInputElem.appendChild(textFieldElem);

    let inputElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
    inputElem.setAttribute("x", 0);
    inputElem.setAttribute("y", 0);
    inputElem.appendChild(symbolElem);
    inputElem.appendChild(labelElem);
    inputElem.appendChild(textInputElem);

    return inputElem;
  }
}
