import { SocketComponent } from "../canvas/socket";
import { Theme } from "./theme";
import { OutputSocket } from "@marco.jacovone/cnodes/core/socket";

export class InputSocketComponent extends SocketComponent {
  constructor(socket) {
    super(socket);
    super.setup();
  }

  createElement() {
    let symbolElem = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    symbolElem.setAttribute("cx", 0);
    symbolElem.setAttribute("cy", 0);
    symbolElem.setAttribute("r", 10);
    symbolElem.setAttribute("stroke-width", Theme.current.NODE_IO_STROKE_WIDTH);
    symbolElem.setAttribute("stroke", Theme.current.NODE_IO_STROKE_COLOR);
    symbolElem.setAttribute("fill", Theme.current.NODE_IO_FILL_COLOR);

    let labelElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    labelElem.style = `
    font: ${Theme.current.NODE_IO_NAME_FONT}; 
    color: ${Theme.current.NODE_IO_NAME_COLOR}; 
    text-align: left;
    width: ${Theme.current.NODE_WIDTH / 2 - 15}px;
    height: 30px;
    line-height: 30px;
    user-select: none;
    `;

    labelElem.innerHTML = `${this.socket.name}`;

    labelElem.setAttribute("x", 0);
    labelElem.setAttribute("y", 0);
    labelElem.setAttribute("transform", `translate(${15}, ${-15})`);
    labelElem.setAttribute("width", Theme.current.NODE_WIDTH / 2 - 15);
    labelElem.setAttribute("height", 30);

    let textInputElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    textInputElem.style = `
    font: ${Theme.current.NODE_IO_NAME_FONT}; 
    color: ${Theme.current.NODE_IO_NAME_COLOR}; 
    text-align: left;
    line-height: 30px;
    user-select: none;
    `;

    textInputElem.setAttribute("x", 0);
    textInputElem.setAttribute("y", 0);
    textInputElem.setAttribute("transform", `translate(${Theme.current.NODE_WIDTH / 2}, ${-15})`);
    textInputElem.setAttribute("width", Theme.current.NODE_WIDTH / 2 - 15);
    textInputElem.setAttribute("height", 30);

    let textFieldElem = document.createElement("input");
    textFieldElem.style = `
    font: ${Theme.current.NODE_IO_NAME_FONT}; 
    color: ${Theme.current.NODE_IO_NAME_COLOR}; 
    width: ${Theme.current.NODE_WIDTH / 2 - 25}px; // 5px less than foreignObject
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

  /**
   * Quesry if this socket could accept a connection with
   * a peer socket passed as parmeter
   * @param {*} socketComp Peer socket to connect
   */
  canAcceptPeerSocket(socketComp) {
    return socketComp.socket instanceof OutputSocket;
  }
}
