import { Component } from "./component";

const SOCKET_RADIUS = "30";
const SOCKET_BORDER = "black";
const SOCKET_FILL = "orangered";

export class InputOutputSocketComponent extends Component {
  #socket = null;

  constructor(socket) {
    super();
    this.#socket = socket;
    super.setup();
  }

  get socket() {
    return this.#socket;
  }

  createElement() {
    let socketEl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    socketEl.setAttribute("r", SOCKET_RADIUS);
    socketEl.setAttribute("fill", SOCKET_FILL);
    socketEl.setAttribute("stroke", SOCKET_BORDER);
    socketEl.setAttribute("stroke-width", 4);
    return socketEl;
  }
}
