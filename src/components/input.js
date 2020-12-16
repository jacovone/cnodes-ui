import { Component } from "../canvas/component";
import * as theme from "./theme";

export class InputSocketComponent extends Component {
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
    text-align: left;
    width: ${theme.NODE_WIDTH / 2 - 15}px;
    height: 30px;
    line-height: 30px;
    user-select: none;
    `;

    labelElem.innerHTML = `${this.socket.name}`;

    labelElem.setAttribute("x", 0);
    labelElem.setAttribute("y", 0);
    labelElem.setAttribute("transform", `translate(${15}, ${-15})`);
    labelElem.setAttribute("width", theme.NODE_WIDTH / 2 - 15);
    labelElem.setAttribute("height", 30);

    let textInputElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    textInputElem.style = `
    font: ${theme.NODE_IO_NAME_FONT}; 
    color: ${theme.NODE_IO_NAME_COLOR}; 
    text-align: left;
    line-height: 30px;
    user-select: none;
    `;

    textInputElem.setAttribute("x", 0);
    textInputElem.setAttribute("y", 0);
    textInputElem.setAttribute("transform", `translate(${theme.NODE_WIDTH / 2}, ${-15})`);
    textInputElem.setAttribute("width", theme.NODE_WIDTH / 2 - 15);
    textInputElem.setAttribute("height", 30);

    let textFieldElem = document.createElement("input");
    textFieldElem.style = `
    font: ${theme.NODE_IO_NAME_FONT}; 
    color: ${theme.NODE_IO_NAME_COLOR}; 
    width: ${theme.NODE_WIDTH / 2 - 25}px; // 5px less than foreignObject
    height: ${20}px;
    border: 0;
    padding: 2px;
    margin: 2px;
    `;

    textFieldElem.setAttribute("value", this.socket.value);
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
