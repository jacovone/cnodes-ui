/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { NextSocket } from "@marco.jacovone/cnodes/cnodes";
import { Theme } from "./theme";
import { PrevNextConnection } from "../connections/prevnext_connection";
import { CnodesSocketComponent } from "./cnodessocket";
import { Env } from "@marco.jacovone/cnodes/src/core/env";
import { MenuItem } from "../canvas/menu";
import { CnodeComponent } from "./cnode";
import { Position } from "../canvas/position";

/**
 * This class implements a socket that represents a Prev object
 * in the cnodes world
 */
export class PrevSocketComponent extends CnodesSocketComponent {
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
      M ${-Theme.current.NODE_PREV_NEXT_POINT_RADIUS} ${-Theme.current.NODE_PREV_NEXT_POINT_RADIUS}
      L ${Theme.current.NODE_PREV_NEXT_POINT_RADIUS} ${-Theme.current.NODE_PREV_NEXT_POINT_RADIUS}
      L ${Theme.current.NODE_PREV_NEXT_POINT_RADIUS} ${Theme.current.NODE_PREV_NEXT_POINT_RADIUS}
      L ${-Theme.current.NODE_PREV_NEXT_POINT_RADIUS} ${Theme.current.NODE_PREV_NEXT_POINT_RADIUS}
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

    let prevElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
    prevElem.setAttribute("x", 0);
    prevElem.setAttribute("y", 0);
    prevElem.appendChild(this.#socketSymbol);
    prevElem.appendChild(labelElem);

    return prevElem;
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
    new PrevNextConnection(socketComp, this, this.canvas);
  }

  /**
   * Quesry if this socket could accept a connection with
   * a peer socket passed as parmeter
   * @param {SocketComponent} socketComp Peer socket to connect
   */
  canAcceptPeerSocket(socketComp) {
    return socketComp.socket instanceof NextSocket;
  }

  /**
   * Returns the direction of the source point for this socket component:
   * -1 = Left
   * 1 = Right
   */
  getSourcePointDirection() {
    return -1;
  }

  /**
   * This socket is a multi-connection socket. This means that
   * many sockets can be connected to it
   */
  get hasSingleConnection() {
    return false;
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
        if (n.creatable) {
          for (let next of n.nexts) {
            items.push(
              new MenuItem(
                `
                <tspan alignment-baseline="middle" fill="${Theme.current.NODE_PREV_NEXT_FILL_COLOR}">
                  ${next.name}
                </tspan>
                <tspan alignment-baseline="middle" style="${Theme.current.MENU_ITEM_FONT}" fill="${Theme.current.MENU_ITEM_COLOR}">
                  ${nodeDef.name}
                </tspan>
                <tspan alignment-baseline="middle" style="${Theme.current.MENU_ITEM_CATEGORY_FONT}" fill="${Theme.current.MENU_ITEM_CATEGORY_COLOR}">
                  ${nodeDef.category}
                </tspan>
                `,
                (x, y) => {
                  // create the node and return the specific socket component to
                  // the context menu client
                  let node = new CnodeComponent(n, this.canvas);
                  node.pos = new Position(x, y);
                  // Return the connected component instead
                  return next.__comp;
                }
              )
            );
          }
        }
      }
    }
    return items;
  }

  /**
   * Returns the array of context menu items. If the component
   * returns null, no contextual menu is shown
   */
  getContextMenuItems() {
    let items = [];

    let conns = this.canvas.getConnectionsFor(this);
    if (conns.length > 0) {
      items.push(
        new MenuItem(`<tspan alignment-baseline="middle">Disconnect all</tspan>`, () => {
          for (let c of conns) {
            // Disconnect this socket
            this.canvas.removeConnection(c);
            this.socket.disconnect(c.source);
          }
        })
      );
    }

    return items.length > 0 ? items : null;
  }
}
