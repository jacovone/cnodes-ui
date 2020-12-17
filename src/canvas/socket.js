import { Component } from "./component";

export class SocketComponent extends Component {
  #connecting = false;
  #currentPeerSocketComponent = null;
  #socket;

  constructor(socket) {
    super();
    this.#socket = socket;
  }

  setup() {
    this.moveable = false;
    super.setup();

    let self = this;
    this.componentEl.addEventListener("pointerdown", (e) => {
      self.#onPointerDown(e);
    });
    this.componentEl.addEventListener("pointerup", (e) => {
      self.#onPointerUp(e);
    });
    this.componentEl.addEventListener("pointermove", (e) => {
      self.#onPointerMove(e);
    });
  }

  #onPointerDown(e) {
    this.#connecting = true;
    this.componentEl.setPointerCapture(e.pointerId);
    e.stopPropagation();
  }

  #onPointerUp(e) {
    this.#connecting = false;
    this.componentEl.releasePointerCapture(e.pointerId);
    e.stopPropagation();

    if (this.#currentPeerSocketComponent) {
      console.log(`COnnesso a <${this.#currentPeerSocketComponent.socket.name}>!`);
    }
  }

  #onPointerMove(e) {
    if (this.#connecting) {
      let p = this.canvas.clientToSvgPoint(e.clientX, e.clientY);

      // Test if a socket is pointed
      let pointedComponent = this.canvas.componentFromPosition(e.clientX, e.clientY, true);
      if (pointedComponent && this.canAcceptPeerSocket(pointedComponent)) {
        this.#currentPeerSocketComponent = pointedComponent;
      } else {
        this.#currentPeerSocketComponent = null;
      }
      e.stopPropagation();
    }
  }

  /**
   * Quesry if this socket could accept a connection with
   * a peer socket passed as parmeter
   * @param {*} socketComp Peer socket to connect
   */
  canAcceptPeerSocket(socketComp) {
    throw new Error("This method must be override in a subclass");
  }

  get socket() {
    return this.#socket;
  }
}
