import { Component } from "./component";

const NODE_BORDER_RADIUS = 15;
const NODE_FILL_COLOR = "#FDFFE4";
const NODE_STROKE_COLOR = "orange";
const NODE_STROKE_WIDTH = 3;
const NODE_TITLE_COLOR = "brown";
const NODE_TITLE_FONT = "bold 18px verdana";
const NODE_SYMBOL_STROKE_WIDTH = 3;
const NODE_SYMBOL_STROKE_COLOR = "#FFE696";
const NODE_SYMBOL_FILL_COLOR = "#FFE696";

export class CnodeComponent extends Component {
  #node;

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
    let containerEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let titleEl = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    let symbolEl = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    nodeEl.appendChild(containerEl);
    nodeEl.appendChild(titleEl);
    nodeEl.appendChild(symbolEl);

    let width = 200;
    let height = 250;

    containerEl.setAttribute(
      "d",
      `
      M 0 ${NODE_BORDER_RADIUS * 1.3} 
      A ${NODE_BORDER_RADIUS * 1.3} ${NODE_BORDER_RADIUS * 1.3} 0 0 0 ${NODE_BORDER_RADIUS * 1.3} 0 
      L ${width - NODE_BORDER_RADIUS} 0 
      A ${NODE_BORDER_RADIUS} ${NODE_BORDER_RADIUS} 0 0 1 ${width} ${NODE_BORDER_RADIUS} 
      L ${width} ${height - NODE_BORDER_RADIUS} 
      A ${NODE_BORDER_RADIUS} ${NODE_BORDER_RADIUS} 0 0 1 ${width - NODE_BORDER_RADIUS} ${height} 
      L ${NODE_BORDER_RADIUS} ${height} 
      A ${NODE_BORDER_RADIUS} ${NODE_BORDER_RADIUS} 0 0 1 0 ${height - NODE_BORDER_RADIUS} 
      Z
      `
    );

    titleEl.innerHTML = this.node.name;
    titleEl.style = `font: ${NODE_TITLE_FONT}; color: ${NODE_TITLE_COLOR}; text-align: center`;
    titleEl.setAttribute("x", NODE_BORDER_RADIUS * 0.5);
    titleEl.setAttribute("y", NODE_BORDER_RADIUS * 0.5);
    titleEl.setAttribute("width", width - NODE_BORDER_RADIUS * 0.5 * 2);
    titleEl.setAttribute("height", 20);

    containerEl.setAttribute("stroke", NODE_STROKE_COLOR);
    containerEl.setAttribute("stroke-width", NODE_STROKE_WIDTH);
    containerEl.setAttribute("fill", NODE_FILL_COLOR);
    containerEl.setAttribute("x", "0");
    containerEl.setAttribute("y", "0");

    symbolEl.setAttribute("cx", 0);
    symbolEl.setAttribute("cy", 0);
    symbolEl.setAttribute("r", NODE_BORDER_RADIUS * 0.9);
    symbolEl.setAttribute("stroke", NODE_SYMBOL_STROKE_COLOR);
    symbolEl.setAttribute("stroke-width", NODE_SYMBOL_STROKE_WIDTH);
    symbolEl.setAttribute("fill", NODE_SYMBOL_FILL_COLOR);

    nodeEl.setAttribute("x", "0");
    nodeEl.setAttribute("y", "0");
    return nodeEl;
  }
}
