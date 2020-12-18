import { PrevSocket } from "@marco.jacovone/cnodes/core/socket";
import { Theme } from "./theme";
import { Position } from "../canvas/position";
import { PrevNextConnection } from "../connections/prevnext_connection";
import { CnodesSocketComponent } from "./cnodessocket";

export class NextSocketComponent extends CnodesSocketComponent {
  constructor(socket) {
    super(socket);
    super.setup();
  }

  createElement() {
    let symbolElem = document.createElementNS("http://www.w3.org/2000/svg", "path");

    symbolElem.setAttribute(
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
    symbolElem.setAttribute("stroke", Theme.current.NODE_PREV_NEXT_STROKE_COLOR);
    symbolElem.setAttribute("stroke-width", Theme.current.NODE_PREV_NEXT_STROKE_WIDTH);
    symbolElem.setAttribute("fill", Theme.current.NODE_PREV_NEXT_FILL_COLOR);

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
    prevElem.appendChild(symbolElem);
    prevElem.appendChild(labelElem);

    return prevElem;
  }

  /**
   * Quesry if this socket could accept a connection with
   * a peer socket passed as parmeter
   * @param {*} socketComp Peer socket to connect
   */
  canAcceptPeerSocket(socketComp) {
    return socketComp.socket instanceof PrevSocket;
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

    let cpXDistance = Math.max(0.8 * Math.abs(sourcePoint.x - targetPoint.x), 100);
    let cp1 = sourcePoint.add(new Position(cpXDistance, -0.1 * (sourcePoint.y - targetPoint.y)));
    let cp2 = targetPoint.add(new Position(-cpXDistance, 0.1 * (sourcePoint.y - targetPoint.y)));

    this.tempConnectionEl.setAttribute(
      "d",
      `
      M ${this.absPos.x} ${this.absPos.y}
      C ${cp1.x} ${cp1.y} ${cp2.x} ${cp2.y} ${targetPoint.x} ${targetPoint.y}
    `
    );

    this.tempConnectionEl.setAttribute("stroke-width", Theme.current.CONNECTION_PREV_NEXT_WIDTH);
    this.tempConnectionEl.setAttribute(
      "stroke",
      invalid
        ? Theme.current.CONNECTION_PREV_NEXT_INVALID_COLOR
        : this.currentPeerSocketComponent
        ? Theme.current.CONNECTION_PREV_NEXT_VALID_COLOR
        : Theme.current.CONNECTION_PREV_NEXT_COLOR
    );
    this.tempConnectionEl.setAttribute("fill", "transparent");
  }

  /**
   * The user has completed a valid connection
   * @param {*} socketComp Peer socket to connect
   */
  connectionDone(socketComp) {
    super.connectionDone(socketComp);

    // This creates the connection and connects sockets
    new PrevNextConnection(this, socketComp, this.canvas);
  }

  /**
   * Quesry if this socket could accept a connection with
   * a peer socket passed as parmeter
   * @param {*} socketComp Peer socket to connect
   */
  canAcceptPeerSocket(socketComp) {
    return socketComp.socket instanceof PrevSocket;
  }

  get hasSingleConnection() {
    return true;
  }
}
