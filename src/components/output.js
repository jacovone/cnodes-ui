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
import { Env } from "@marco.jacovone/cnodes/cnodes";
import { IOConnection } from "../connections/io_connection";
import { CnodesSocketComponent } from "./cnodessocket";
import { MenuItem } from "../canvas/menu";
import { CnodeComponent } from "./cnode";
import { Position } from "../canvas/position";

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
   * Returns the direction of the source point for this socket component:
   * -1 = Left
   * 1 = Right
   */
  getSourcePointDirection() {
    return 1;
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
          for (let inp of n.inputs) {
            items.push(
              new MenuItem(
                `
                <tspan alignment-baseline="middle" fill="${Theme.current.NODE_IO_FILL_COLOR}">
                  ${inp.name}
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
                  return inp.__comp;
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
            this.socket.disconnect(c.target);
          }
        })
      );
    }

    return items.length > 0 ? items : null;
  }
}
