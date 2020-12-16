import { Component } from "../canvas/component";
import * as theme from "./theme";

export class OutputSocketComponent extends Component {
  #socket = null;

  constructor(socket) {
    super();
    this.#socket = socket;
    this.moveable = false;
    super.setup();
  }

  get socket() {
    return this.#socket;
  }

  createElement() {
    let symbolElem = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    symbolElem.setAttribute("cx", 0);
    symbolElem.setAttribute("cy", 0);
    symbolElem.setAttribute("r", 10);
    symbolElem.setAttribute("stroke-width", theme.NODE_IO_STROKE_WIDTH);
    symbolElem.setAttribute("stroke", theme.NODE_IO_STROKE_COLOR);
    symbolElem.setAttribute("fill", theme.NODE_IO_FILL_COLOR);

    let labelElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    labelElem.style = `
      font: ${theme.NODE_IO_NAME_FONT}; 
      color: ${theme.NODE_IO_NAME_COLOR}; 
      text-align: right;
      width: ${theme.NODE_WIDTH - 30}px;
      height: 30px;
      line-height: 30px;
      user-select: none;
      `;

    labelElem.innerHTML = `${this.socket.name}`;

    labelElem.setAttribute("x", 0);
    labelElem.setAttribute("y", 0);
    labelElem.setAttribute("transform", `translate(${-theme.NODE_WIDTH + 15}, ${-15})`);
    labelElem.setAttribute("width", theme.NODE_WIDTH - 30);
    labelElem.setAttribute("height", 30);

    let outputElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
    outputElem.setAttribute("x", 0);
    outputElem.setAttribute("y", 0);
    outputElem.appendChild(symbolElem);
    outputElem.appendChild(labelElem);

    return outputElem;
  }
}
