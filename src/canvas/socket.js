import { Component } from "./component";

export class SocketComponent extends Component {
  #socket;

  constructor(socket) {
    super(socket);
    this.#socket = socket;
  }

  setup() {
    this.moveable = false;
    super.setup();
  }

  get socket() {
    return this.#socket;
  }
}
