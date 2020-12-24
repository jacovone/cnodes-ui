/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { PrevSocket } from "@marco.jacovone/cnodes/cnodes";
import { Theme } from "./theme";
import { Position } from "../canvas/position";
import { PrevNextConnection } from "../connections/prevnext_connection";
import { CnodesSocketComponent } from "./cnodessocket";
import { SocketComponent } from "../canvas/socket";
import { Env } from "@marco.jacovone/cnodes/src/core/env";
import { MenuItem } from "../canvas/menu";
import { CnodeComponent } from "./cnode";

/**
 * This class implements a socket representing the Next socket in the
 * cnodes context
 */
export class NextSocketComponent extends CnodesSocketComponent {
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
    this.#socketSymbol = document.createElementNS("http://www.w3.org/2000/svg", "path");

    this.#socketSymbol.setAttribute(
      "d",
      `
      M -7 -8
      L 7 -8
      L 12 0
      L 7 8
      L -7 8
      Z
      `
    );
    this.#socketSymbol.setAttribute("stroke", Theme.current.NODE_PREV_NEXT_STROKE_COLOR);
    this.#socketSymbol.setAttribute("stroke-width", Theme.current.NODE_PREV_NEXT_STROKE_WIDTH);
    this.#socketSymbol.setAttribute("fill", Theme.current.NODE_PREV_NEXT_FILL_COLOR);

    let labelElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    labelElem.style = `
      font: ${Theme.current.NODE_PREV_NEXT_NAME_FONT}; 
      color: ${Theme.current.NODE_PREV_NEXT_NAME_COLOR}; 
      text-align: right;
      width: ${Theme.current.NODE_WIDTH / 2 - 15}px;
      height: 30px;
      line-height: 30px;
      user-select: none;
      `;

    labelElem.innerHTML = `${this.socket.name}`;

    labelElem.setAttribute("x", 0);
    labelElem.setAttribute("y", 0);
    labelElem.setAttribute("transform", `translate(${-Theme.current.NODE_WIDTH / 2}, ${-15})`);
    labelElem.setAttribute("width", Theme.current.NODE_WIDTH / 2 - 15);
    labelElem.setAttribute("height", 30);

    let prevElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
    prevElem.setAttribute("x", 0);
    prevElem.setAttribute("y", 0);
    prevElem.appendChild(this.#socketSymbol);
    prevElem.appendChild(labelElem);

    return prevElem;
  }

  /**
   * Query if this socket could accept a connection with
   * a peer socket passed as parmeter
   * @param {SocketComponent} socketComp Peer socket to connect
   */
  canAcceptPeerSocket(socketComp) {
    return socketComp.socket instanceof PrevSocket;
  }

  /**
   * The user has completed a valid connection
   * @param {SocketComponent} socketComp Peer socket to connect
   */
  connectionDone(socketComp) {
    super.connectionDone(socketComp);

    // This creates the connection and connects sockets
    new PrevNextConnection(this, socketComp, this.canvas);
  }

  /**
   * Quesry if this socket could accept a connection with
   * a peer socket passed as parmeter
   * @param {SocketComponent} socketComp Peer socket to connect
   */
  canAcceptPeerSocket(socketComp) {
    return socketComp.socket instanceof PrevSocket;
  }

  /**
   * This socket supports single connection, so if the user
   * connects another socket to it, we have to delete previous connections
   */
  get hasSingleConnection() {
    return true;
  }

  /**
   * Returns the direction of the source point for this socket component:
   * -1 = Left
   * 1 = Right
   */
  getSourcePointDirection() {
    return 1;
  }

  /**
   * This method is responsible to enumerate all socket of registered nodes
   * that can enstabilish a valid connection with this socket and construct
   * a menu items array thst define callback to create the related node and
   * return the particular socket. It is used by the smart connection process
   * via the context menu
   */
  getRegisteredPossiblePeers() {
    let items = [];
    for (let cat of Env.getCategories()) {
      for (let nodeDef of Env.getCategoryNodes(cat)) {
        // Instantiate the node to enumerate its sockets
        let n = Env.getInstance(nodeDef.name);
        if (n.creatable && n.prev) {
          items.push(
            new MenuItem(
              `
              <tspan alignment-baseline="middle" fill="${Theme.current.NODE_PREV_NEXT_FILL_COLOR}">
                ${n.prev.name}
              </tspan>
              <tspan alignment-baseline="middle">
                ${nodeDef.name}
              </tspan>
              <tspan alignment-baseline="middle" style="font: bold 10px sans-serif" fill="lightgray">
                ${nodeDef.category}
              </tspan>
              `,
              (x, y) => {
                let node = new CnodeComponent(n, this.canvas);
                node.pos = new Position(x, y);
                // Return the connected component instead
                return n.prev.__comp;
              }
            )
          );
        }
      }
    }
    return items;
  }
}
