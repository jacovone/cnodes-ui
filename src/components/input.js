/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { Theme } from "./theme";
import { OutputSocket } from "@marco.jacovone/cnodes/cnodes";
import { IOConnection } from "../connections/io_connection";
import { CnodesSocketComponent } from "./cnodessocket";
import { SocketComponent } from "../canvas/socket";
import { Env } from "@marco.jacovone/cnodes/src/core/env";
import { MenuItem } from "../canvas/menu";
import { CnodeComponent } from "./cnode";
import { Position } from "../canvas/position";

/**
 * This class implement a socket to draw a Input element
 * in the cnodes world
 */
export class InputSocketComponent extends CnodesSocketComponent {
  /** A reference to the imput element */
  #inputElement = null;

  /** The symbol element */
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
      pointer-events: auto;
    `;

    textInputElem.setAttribute("x", 0);
    textInputElem.setAttribute("y", 0);
    textInputElem.setAttribute("transform", `translate(${Theme.current.NODE_WIDTH / 2}, ${-15})`);
    textInputElem.setAttribute("width", Theme.current.NODE_WIDTH / 2 - 15);
    textInputElem.setAttribute("height", 30);

    this.#inputElement = document.createElement("input");
    this.#inputElement.style = `
      font: ${Theme.current.NODE_IO_NAME_FONT}; 
      color: ${Theme.current.NODE_IO_NAME_COLOR}; 
      width: ${Theme.current.NODE_WIDTH / 2 - 25}px; // 5px less than foreignObject
      height: ${20}px;
      border: 0;
      padding: 2px;
      margin: 2px;
    `;

    this.#inputElement.addEventListener("keyup", (e) => {
      this.socket.value = e.target.value;
    });

    this.#inputElement.setAttribute("value", this.socket.value);
    this.#inputElement.setAttribute("type", "text");

    textInputElem.appendChild(this.#inputElement);

    let inputElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
    inputElem.setAttribute("x", 0);
    inputElem.setAttribute("y", 0);
    inputElem.appendChild(this.#socketSymbol);
    inputElem.appendChild(labelElem);
    inputElem.appendChild(textInputElem);

    return inputElem;
  }

  /**
   * The user has completed a valid connection
   * @param {SocketComponent} socketComp Peer socket to connect
   */
  connectionDone(socketComp) {
    super.connectionDone(socketComp);

    // This creates the connection and connects sockets
    new IOConnection(socketComp, this, this.canvas);
  }

  /**
   * Query if this socket could accept a connection with
   * a peer socket passed as parmeter
   * @param {SocketComponent} socketComp Peer socket to connect
   */
  canAcceptPeerSocket(socketComp) {
    return socketComp.socket instanceof OutputSocket;
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
    return -1;
  }

  /**
   * This method is called from connection when the connection status
   * of the socket chenged
   */
  updateStatus() {
    // Show/Hide the imput component
    this.#inputElement.style["display"] = this.isConnected ? "block" : "none";
    this.socket.value = this.#inputElement.value;
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
          for (let out of n.outputs) {
            items.push(
              new MenuItem(
                `
                <tspan alignment-baseline="middle" fill="${Theme.current.NODE_IO_FILL_COLOR}">
                  ${out.name}
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
                  return out.__comp;
                }
              )
            );
          }
        }
      }
    }
    return items;
  }
}
