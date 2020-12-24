/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { Theme } from "./theme";
import { InputSocket } from "@marco.jacovone/cnodes/cnodes";
import { IOConnection } from "../connections/io_connection";
import { CnodesSocketComponent } from "./cnodessocket";

/**
 * This class implements a socket representing a Output in the
 * cnodes world
 */
export class OutputSocketComponent extends CnodesSocketComponent {
  /** The socket symbol element */
  #socketSymbol = null;

  constructor(socket) {
    super(socket);
    super.setup();
  }

  /**
   * Customize the drag element
   */
  get dragElement() {
    return this.#socketSymbol;
  }

  /**
   * Lets create the element
   */
  createElement() {
    this.#socketSymbol = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    this.#socketSymbol.setAttribute("cx", 0);
    this.#socketSymbol.setAttribute("cy", 0);
    this.#socketSymbol.setAttribute("r", Theme.current.NODE_IO_POINT_RADIUS);
    this.#socketSymbol.setAttribute("stroke-width", Theme.current.NODE_IO_STROKE_WIDTH);
    this.#socketSymbol.setAttribute("stroke", Theme.current.NODE_IO_STROKE_COLOR);
    this.#socketSymbol.setAttribute("fill", Theme.current.NODE_IO_FILL_COLOR);

    let labelElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    labelElem.style = `
      font: ${Theme.current.NODE_IO_NAME_FONT}; 
      color: ${Theme.current.NODE_IO_NAME_COLOR}; 
      text-align: right;
      width: ${Theme.current.NODE_WIDTH - 30}px;
      height: 30px;
      line-height: 30px;
      user-select: none;
      `;

    labelElem.innerHTML = `${this.socket.name}`;

    labelElem.setAttribute("x", 0);
    labelElem.setAttribute("y", 0);
    labelElem.setAttribute("transform", `translate(${-Theme.current.NODE_WIDTH + 15}, ${-15})`);
    labelElem.setAttribute("width", Theme.current.NODE_WIDTH - 30);
    labelElem.setAttribute("height", 30);

    let outputElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
    outputElem.setAttribute("x", 0);
    outputElem.setAttribute("y", 0);
    outputElem.appendChild(this.#socketSymbol);
    outputElem.appendChild(labelElem);

    return outputElem;
  }

  /**
   * The user has completed a valid connection
   * @param {SocketComponent} socketComp Peer socket to connect
   */
  connectionDone(socketComp) {
    super.connectionDone(socketComp);

    // if there is another connection for the target component,
    // delete the oldest one
    if (socketComp.isConnected) {
      this.canvas.removeConnection(this.canvas.getConnectionsFor(socketComp)[0]);
    }

    // This creates the connection and connects sockets
    new IOConnection(this, socketComp, this.canvas);
  }

  /**
   * Query if this socket could accept a connection with
   * a peer socket passed as parmeter
   * @param {SocketComponent} socketComp Peer socket to connect
   */
  canAcceptPeerSocket(socketComp) {
    return socketComp.socket instanceof InputSocket;
  }

  /**
   * This socket is a multi-connection socket. This means that
   * many sockets can be connected to it
   */
  get hasSingleConnection() {
    return false;
  }
}
