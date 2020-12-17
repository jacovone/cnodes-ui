/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { Component } from "./component";
import { Position } from "./position";

/**
 * A Socket is a special case of component. Tipically, to design
 * a component node in canvas-ui, you define a base component, and attach
 * to it a list of subcomponents that derives from Socket class, for
 * give the user the chance to link nodes
 */
export class SocketComponent extends Component {
  /** This socket is connecting, the user is dragging with the mouse */
  #connecting = false;

  /** The last (other) socket pointed by the mouse cursor while connecting */
  #currentPeerSocketComponent = null;

  #tempConnectionEl = null;

  constructor(socket) {
    super();
    this.#socket = socket;
  }

  get connecting() {
    return this.#connecting;
  }

  set connecting(val) {
    this.#connecting = val;
  }

  get currentPeerSocketComponent() {
    return this.#currentPeerSocketComponent;
  }

  get tempConnectionEl() {
    return this.#tempConnectionEl;
  }

  setup() {
    this.moveable = false;
    super.setup();

    let self = this;
    this.componentEl.addEventListener("pointerdown", (e) => {
      self.onPointerDown(e);
    });
    this.componentEl.addEventListener("pointerup", (e) => {
      self.onPointerUp(e);
    });
    this.componentEl.addEventListener("pointermove", (e) => {
      self.onPointerMove(e);
    });
  }

  onPointerDown(e) {
    if (!this.hasSingleConnection || !this.isConnected) {
      this.#connecting = true;
      this.componentEl.setPointerCapture(e.pointerId);
      e.stopPropagation();

      // Connect action is started
      this.connectionStarted();
    } else {
      let peerComponent = this.getPeerComponent();
      peerComponent.onPointerDown(e);

      let con = this.canvas.getConnectionsFor(this)[0];
      this.canvas.removeConnection(con);

      e.stopPropagation();
    }
  }

  onPointerUp(e) {
    this.#connecting = false;
    this.componentEl.releasePointerCapture(e.pointerId);
    e.stopPropagation();

    if (this.#currentPeerSocketComponent) {
      let connectingSocketComponent = this.#currentPeerSocketComponent;
      this.#currentPeerSocketComponent = null;
      this.connectionDone(connectingSocketComponent);
    } else {
      this.connectionCancelled();
    }
  }

  onPointerMove(e) {
    if (this.#connecting) {
      // Test if a socket is pointed
      let pointedComponent = this.canvas.componentFromPosition(e.clientX, e.clientY, true);

      let p = this.canvas.clientToSvgPoint(e.clientX, e.clientY);
      if (pointedComponent) {
        if (this.canAcceptPeerSocket(pointedComponent)) {
          this.#currentPeerSocketComponent = pointedComponent;
          this.connectionMoving(p.x, p.y, false);
        } else {
          this.#currentPeerSocketComponent = null;
          this.connectionMoving(p.x, p.y, true);
        }
      } else {
        this.#currentPeerSocketComponent = null;
        this.connectionMoving(p.x, p.y, false);
      }

      e.stopPropagation();
    }
  }

  /**
   * The user has began dragging the socket to create a connection
   */
  connectionStarted() {
    this.#tempConnectionEl = document.createElementNS("http://www.w3.org/2000/svg", "path");

    this.#tempConnectionEl.setAttribute(
      "d",
      `
      M ${this.absPos.x} ${this.absPos.y}
    `
    );

    this.canvas.connectionsEl.appendChild(this.#tempConnectionEl);
  }

  /**
   * The user is moving the pointer around, with a connection pending
   * @param {*} x The x coordinate in SVG space
   * @param {*} y The y coordinate in SVG space
   * @param {*} invalid true if the pointer is overing a unacceptable socket
   */
  connectionMoving(x, y, invalid) {
    let sourcePoint = new Position(this.absPos.x, this.absPos.y);
    let targetPoint = new Position(
      this.currentPeerSocketComponent ? this.currentPeerSocketComponent.absPos.x : x,
      this.currentPeerSocketComponent ? this.currentPeerSocketComponent.absPos.y : y
    );

    this.#tempConnectionEl.setAttribute(
      "d",
      `
      M ${sourcePoint.x} ${sourcePoint.y}
      L ${targetPoint.x} ${targetPoint.y}
    `
    );

    this.#tempConnectionEl.setAttribute("stroke-width", 2);
    this.#tempConnectionEl.setAttribute("stroke", "black");
    this.#tempConnectionEl.setAttribute("fill", "transparent");
  }

  /**
   * The user has completed a valid connection
   * @param {*} socketComp Peer socket to connect
   */
  connectionDone(socketComp) {
    this.canvas.connectionsEl.removeChild(this.#tempConnectionEl);
  }

  /**
   * The user has aborted the connection
   */
  connectionCancelled() {
    this.canvas.connectionsEl.removeChild(this.#tempConnectionEl);
  }

  /**
   * Query if this socket could accept a connection with
   * a peer socket passed as parmeter
   * @param {*} socketComp Peer socket to connect
   */
  canAcceptPeerSocket(socketComp) {
    throw new Error("This method must be overridden in a subclass!");
  }

  get hasSingleConnection() {
    throw new Error("This method must be overridden in a subclass!");
  }

  get isConnected() {
    return this.canvas.getConnectionsFor(this).length > 0;
  }

  getPeerComponent() {
    if (!this.hasSingleConnection) {
      return null;
    } else {
      let con = this.canvas.getConnectionsFor(this)[0];
      if (this === con.source) {
        return con.target;
      } else {
        return con.source;
      }
    }
  }

  get socket() {
    return this.#socket;
  }
}
