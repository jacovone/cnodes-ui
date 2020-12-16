import { Component } from "../canvas/component";
import * as theme from "./theme";

export class PrevSocketComponent extends Component {
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
    symbolElem.setAttribute("stroke", theme.NODE_PREV_NEXT_STROKE_COLOR);
    symbolElem.setAttribute("stroke-width", theme.NODE_PREV_NEXT_STROKE_WIDTH);
    symbolElem.setAttribute("fill", theme.NODE_PREV_NEXT_FILL_COLOR);

    let labelElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    labelElem.style = `
      font: ${theme.NODE_PREV_NEXT_NAME_FONT}; 
      color: ${theme.NODE_PREV_NEXT_NAME_COLOR}; 
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

    let prevElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
    prevElem.setAttribute("x", 0);
    prevElem.setAttribute("y", 0);
    prevElem.appendChild(symbolElem);
    prevElem.appendChild(labelElem);

    return prevElem;
  }
}
