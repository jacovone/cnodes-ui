/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { Theme } from "./theme";
import { Env } from "@marco.jacovone/cnodes/cnodes";
import { IOConnection } from "../connections/io_connection";
import { CnodesSocketComponent } from "./cnodessocket";
import { SocketComponent } from "../canvas/socket";
import { MenuItem } from "../canvas/menu";
import { CnodeComponent } from "./cnode";
import { Position } from "../canvas/position";
import { OutputSocketComponent } from "./output";

/**
 * This class implement a socket to draw a Input element
 * in the cnodes world
 */
export class InputSocketComponent extends CnodesSocketComponent {
  /** A reference to the imput value element */
  #inputValueElement = null;

  /** A reference to the imput name element, if there is one */
  #inputNameElement = null;

  /** A reference to the label element, if there is one */
  #labelElement = null;

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
    this.#socketSymbol = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );

    this.#socketSymbol.setAttribute("cx", 0);
    this.#socketSymbol.setAttribute("cy", 0);
    this.#socketSymbol.setAttribute("r", Theme.current.NODE_IO_POINT_RADIUS);
    this.#socketSymbol.setAttribute(
      "stroke-width",
      Theme.current.NODE_IO_STROKE_WIDTH
    );
    this.#socketSymbol.setAttribute(
      "stroke",
      Theme.current.NODE_IO_STROKE_COLOR
    );
    this.#socketSymbol.setAttribute(
      "fill",
      CnodesSocketComponent.getColorForType(this.socket.type)
    );

    let textInputNameElem = null;

    /*
     * If this socket can edit name, we create an input element for
     * this name, otherwise, we create a label
     */
    if (this.socket.canEditName) {
      textInputNameElem = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "foreignObject"
      );
      textInputNameElem.style = `
        font: ${Theme.current.NODE_IO_NAME_FONT}; 
        color: ${Theme.current.NODE_IO_NAME_COLOR}; 
        text-align: left;
        line-height: 30px;
        user-select: none;
        pointer-events: auto;
      `;

      textInputNameElem.setAttribute("x", 0);
      textInputNameElem.setAttribute("y", 0);
      textInputNameElem.setAttribute("transform", `translate(${15}, ${-15})`);
      textInputNameElem.setAttribute(
        "width",
        Theme.current.NODE_WIDTH / 2 - 15
      );
      textInputNameElem.setAttribute("height", 30);

      this.#inputNameElement = document.createElement("input");
      this.#inputNameElement.style = `
        font: ${Theme.current.NODE_IO_NAME_FONT}; 
        color: ${Theme.current.NODE_IO_NAME_COLOR}; 
        width: ${
          Theme.current.NODE_WIDTH / 2 - 25
        }px; // 5px less than foreignObject
        height: ${20}px;
        border: 0;
        padding: 2px;
        margin: 2px;
      `;

      this.#inputNameElement.addEventListener("keyup", (e) => {
        this.socket.name = e.target.value;
      });

      this.#inputNameElement.setAttribute("value", this.socket.name);
      this.#inputNameElement.setAttribute("type", "text");

      textInputNameElem.appendChild(this.#inputNameElement);
    } else {
      this.#labelElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "foreignObject"
      );
      this.#labelElement.style = `
        font: ${Theme.current.NODE_IO_NAME_FONT}; 
        color: ${Theme.current.NODE_IO_NAME_COLOR}; 
        text-align: left;
        width: ${Theme.current.NODE_WIDTH / 2 - 15}px;
        height: 30px;
        line-height: 30px;
        user-select: none;
      `;

      this.#labelElement.innerHTML = `${this.socket.name}`;

      this.#labelElement.setAttribute("x", 0);
      this.#labelElement.setAttribute("y", 0);
      this.#labelElement.setAttribute("transform", `translate(${15}, ${-15})`);
      this.#labelElement.setAttribute(
        "width",
        Theme.current.NODE_WIDTH / 2 - 15
      );
      this.#labelElement.setAttribute("height", 30);
    }

    let textInputValueElem = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "foreignObject"
    );
    textInputValueElem.style = `
      font: ${Theme.current.NODE_IO_NAME_FONT}; 
      color: ${Theme.current.NODE_IO_NAME_COLOR}; 
      text-align: left;
      line-height: 30px;
      user-select: none;
      pointer-events: auto;
    `;

    textInputValueElem.setAttribute("x", 0);
    textInputValueElem.setAttribute("y", 0);
    textInputValueElem.setAttribute(
      "transform",
      `translate(${Theme.current.NODE_WIDTH / 2}, ${-15})`
    );
    textInputValueElem.setAttribute("width", Theme.current.NODE_WIDTH / 2 - 15);
    textInputValueElem.setAttribute("height", 30);

    this.#inputValueElement = document.createElement("input");
    this.#inputValueElement.style = `
      font: ${Theme.current.NODE_IO_NAME_FONT}; 
      color: ${Theme.current.NODE_IO_NAME_COLOR}; 
      width: ${
        Theme.current.NODE_WIDTH / 2 - 25
      }px; // 5px less than foreignObject
      height: ${20}px;
      border: 0;
      padding: 2px;
      margin: 2px;
    `;

    this.#inputValueElement.addEventListener("keyup", (e) => {
      this.socket.value = e.target.value;
    });

    this.#inputValueElement.setAttribute("value", this.socket.value);
    this.#inputValueElement.setAttribute("type", "text");

    textInputValueElem.appendChild(this.#inputValueElement);

    let inputElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
    inputElem.setAttribute("x", 0);
    inputElem.setAttribute("y", 0);
    inputElem.appendChild(this.#socketSymbol);

    if (this.socket.canEditName) {
      inputElem.appendChild(textInputNameElem);
    } else {
      inputElem.appendChild(this.#labelElement);
    }

    inputElem.appendChild(textInputValueElem);

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
    return (
      socketComp instanceof OutputSocketComponent &&
      this.socket.node.canBeConnected(this.socket, socketComp.socket)
    );
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
   * Update the component element according to x and y local coordinates,
   * if this component is a child component, coordinates in canvas space
   * are computed. In addition, this override will reflect the status of the
   * socket by hiding/showing the text field related to the input socket
   */
  updateSVGElement() {
    super.updateSVGElement();

    // Show/Hide the imput component
    this.#inputValueElement.style["display"] = this.isConnected
      ? "none"
      : "table-cell";

    if (this.socket.canEditName) {
      this.#inputNameElement.value = `${this.socket.name}`;
    } else {
      this.#labelElement.innerHTML = `${this.socket.name}`;
    }
    this.socket.value = this.#inputValueElement.value;
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
            // Create an item only if the input in "compatible" with this output
            if (this.socket.node.canBeConnected(this.socket, out)) {
              items.push(
                new MenuItem(
                  `
                  <tspan alignment-baseline="middle" fill="${CnodesSocketComponent.getColorForType(
                    out.type
                  )}" style="${Theme.current.MENU_ITEM_CATEGORY_FONT}">
                    ${out.name}
                  </tspan>
                  <tspan alignment-baseline="middle" style="${
                    Theme.current.MENU_ITEM_FONT
                  }" fill="${Theme.current.MENU_ITEM_COLOR}">
                    ${nodeDef.name}
                  </tspan>
                  <tspan alignment-baseline="middle" style="${
                    Theme.current.MENU_ITEM_CATEGORY_FONT
                  }" fill="${Theme.current.MENU_ITEM_CATEGORY_COLOR}">
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
    }
    return items;
  }

  /**
   * Returns the array of context menu items. If the component
   * returns null, no contextual menu is shown
   */
  getContextMenuItems() {
    let items = [];

    let conn = this.canvas.getConnectionsFor(this)[0];
    if (conn) {
      items.push(
        new MenuItem(
          `<tspan alignment-baseline="middle">Disconnect</tspan>`,
          () => {
            // Disconnect this socket
            this.canvas.removeConnection(conn);
            this.socket.disconnect();
          }
        )
      );
    }
    if (this.socket.node.canRemoveInput(this.socket)) {
      items.push(
        new MenuItem(
          `<tspan alignment-baseline="middle">Delete input</tspan>`,
          () => {
            // First, disconnect if connected
            let conn = this.canvas.getConnectionsFor(this)[0];
            if (conn) {
              this.canvas.removeConnection(conn);
              this.socket.disconnect();
            }
            this.socket.node.removeInput(this.socket);
            this.parent.removeComponent(this);
            this.parent.updateSVGElement();
          }
        )
      );
    }

    return items.length > 0 ? items : null;
  }
}
