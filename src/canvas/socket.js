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

  /** This SVG component is used to display a temporary floating link during the connection */
  #tempConnectionEl = null;

  constructor() {
    super();
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

  /**
   * Sets up a socket. A socket is not movable by default and
   * calls the createElement() method to prepare the SVG element
   */
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

  /**
   * Manages the pointerdown event to implement the start of the
   * drag-and-link process. If the socket is a one-link socket, such as
   * a "next" connection to another node, a pointerdown should disconnect
   * the old connection and restart the dragging of the peek socket, to give
   * the user the chance to connect the peer socket to another one.
   * If the socket was not already connected, call the connectionStarted()
   * method that will be overridden in subclasses
   * @param {*} e The pointerdown event
   */
  onPointerDown(e) {
    if (!this.hasSingleConnection || !this.isConnected) {
      this.#connecting = true;
      this.componentEl.setPointerCapture(e.pointerId);
      e.stopPropagation();

      // Connect action is started
      this.connectionStarted();
    } else {
      let peerComponent = this.getSinglePeerComponent();
      peerComponent.onPointerDown(e);

      let con = this.canvas.getConnectionsFor(this)[0];
      this.canvas.removeConnection(con);

      e.stopPropagation();
    }
  }

  /**
   * This method manages the pointerup event to implement
   * the final part of the connection. If the pointer is overing a
   * valid peer socket, then the connection ca be done, and the
   * connectionDone() method can be calles. Otherwise the
   * connectionCancelled() is called. Both methods must be overridden
   * in subclasses.
   * @param {*} e The pointerup event
   */
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

  /**
   * This method manages the pointermove event to implement the
   * middle part of the connection process. During this phase, cnodes-ui
   * check if the pointer is overing a valid peer socket component, and
   * if true, show the temprary link in a "valid state", such as a special color
   * of the stroke stroke, and store the peer component in the currentPeerSocketComponent
   * for future use.
   * @param {*} e The pointermove event
   */
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

  /**
   * Return true if this socket only support one connection at most
   */
  get hasSingleConnection() {
    throw new Error("This method must be overridden in a subclass!");
  }

  /**
   * Is this socket actually connected?
   */
  get isConnected() {
    return this.canvas.getConnectionsFor(this).length > 0;
  }

  /**
   * Return the peer component of the socket in case
   * of this socket is a single connection. Otherwise return null
   */
  getSinglePeerComponent() {
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

  /**
   * This method was called from the connections each time the
   * socket is connected and disconnected
   */
  updateStatus() {}
}
