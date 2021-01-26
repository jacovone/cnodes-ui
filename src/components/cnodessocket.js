/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020/2021
 */

import { Socket } from "@marco.jacovone/cnodes/index";
import { Types } from "@marco.jacovone/cnodes/lib/core/type";
import { Position } from "../canvas/position";
import { SocketComponent } from "../canvas/socket";
import { Theme } from "./theme";

/**
 * This class is the base class for all sockets components
 * of cnodes. The class introduces the socket field that is
 * a "cnodes" socket the internal structure to store links
 * between cnodes nodes. In addition implements the base functionality
 * of the "smart" connection flow, in case the user drag out
 * of a socket component and release the pointer outside of
 * a destination socket
 */
export class CnodesSocketComponent extends SocketComponent {
  /** The cnodes socket object */
  #socket = null;

  /**
   * Construct a new CnodesSocket object
   * @param {Socket} socket The internal cnodes socket object
   */
  constructor(socket) {
    super();
    this.#socket = socket;
  }

  get socket() {
    return this.#socket;
  }

  /**
   * The user has released the pointer button out of a valid socket,
   * display a context menu that presents all valid possible nodes
   * and relative sockets to connect...
   * Possible nodes items are returned by subclasses; this method display the
   * context menu via canvas.showContextMenu(...) and specifying a menuCallback
   * that inform this client about the final selection of the user, so
   * complete the connection or abort that
   * @param {Event} e The event pointerup
   */
  connectionEndedOutOfSocket(e) {
    // Enumerates all possible socket to connect
    let items = this.getRegisteredPossiblePeers();

    let p = this.canvas.clientToSvgPoint(e.clientX, e.clientY);
    this.canvas.showContextMenu(items, p.x, p.y, (socketComp) => {
      if (!socketComp) {
        if (this.tempConnectionEl) {
          this.canvas.connectionsEl.removeChild(this.tempConnectionEl);
        }
        this.tempConnectionEl = null;
      } else {
        this.connectionDone(socketComp);
      }
    });
  }

  /**
   * The user is moving the pointer around, with a connection pending
   * @param {number} x The x coordinate in SVG space
   * @param {number} y The y coordinate in SVG space
   * @param {boolean} invalid true if the pointer is overing a unacceptable socket
   */
  connectionMoving(x, y, invalid) {
    let sourcePoint = new Position(this.absPos.x, this.absPos.y);
    let targetPoint = new Position(
      this.currentPeerSocketComponent
        ? this.currentPeerSocketComponent.absPos.x
        : x,
      this.currentPeerSocketComponent
        ? this.currentPeerSocketComponent.absPos.y
        : y
    );

    let cpXDistance = Math.max(
      0.8 * Math.abs(sourcePoint.x - targetPoint.x),
      Math.min(Math.abs(sourcePoint.y - targetPoint.y), 100)
    );
    let cp1 = sourcePoint.add(
      new Position(
        cpXDistance * this.getSourcePointDirection(),
        -0.3 * (sourcePoint.y - targetPoint.y)
      )
    );
    let cp2 = targetPoint.add(
      new Position(
        -cpXDistance * this.getSourcePointDirection(),
        0.3 * (sourcePoint.y - targetPoint.y)
      )
    );

    this.tempConnectionEl.setAttribute(
      "d",
      `
      M ${this.absPos.x} ${this.absPos.y}
      C ${cp1.x} ${cp1.y} ${cp2.x} ${cp2.y} ${targetPoint.x} ${targetPoint.y}
    `
    );

    this.tempConnectionEl.setAttribute(
      "stroke-width",
      Theme.current.CONNECTION_TEMP_WIDTH
    );
    this.tempConnectionEl.setAttribute(
      "stroke",
      invalid
        ? Theme.current.CONNECTION_TEMP_INVALID_COLOR
        : this.currentPeerSocketComponent
        ? Theme.current.CONNECTION_TEMP_VALID_COLOR
        : Theme.current.CONNECTION_TEMP_COLOR
    );
    this.tempConnectionEl.setAttribute("stroke-dasharray", "5 5");
    this.tempConnectionEl.setAttribute("fill", "transparent");
  }

  /**
   * Remove the internal socket reference to the component
   * upon destroy
   */
  destroy() {
    this.socket.__comp = null;
    super.destroy();
  }

  /**
   * Return a color code in CSS for a given cndoes data type
   * @param {string} type CNODES data type
   */
  static getColorForType(type) {
    switch (type) {
      case Types.ARRAY:
        return Theme.current.TYPE_ARRAY_COLOR;
      case Types.NUMBER:
        return Theme.current.TYPE_NUMBER_COLOR;
      case Types.STRING:
        return Theme.current.TYPE_STRING_COLOR;
      case Types.OBJECT:
        return Theme.current.TYPE_OBJECT_COLOR;
      case Types.BOOLEAN:
        return Theme.current.TYPE_BOOLEAN_COLOR;
      case Types.ANY:
        return Theme.current.TYPE_ANY_COLOR;
      default:
        return "black";
    }
  }
}
