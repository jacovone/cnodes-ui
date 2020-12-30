/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { Connection } from "../canvas/connection";
import { Position } from "../canvas/position";
import { Theme } from "../components/theme";

/**
 * This class implements a connection for Input->Output connection
 * in the cnodes world. It embed both source and target sockets that
 * must be of type InputSocketComponent and OutputSocketComponent, and manages
 * the connection status of the embedded cnodes's socket
 */
export class IOConnection extends Connection {
  constructor(source, target, canvas) {
    super(source, target);
    super.setup();
    canvas.addConnection(this);
    this.updateSVGElement();

    if (canvas.program) {
      // Connect cnodes sockets
      this.source.socket.connect(this.target.socket);
    }
  }

  /**
   * Lets create the element
   */
  createElement() {
    let el = document.createElementNS("http://www.w3.org/2000/svg", "path");

    return el;
  }

  /**
   * Update the aspect of the connection
   */
  updateSVGElement() {
    let sourcePoint = new Position(this.source.absPos.x, this.source.absPos.y);
    let targetPoint = new Position(this.target.absPos.x - Theme.current.NODE_IO_POINT_RADIUS, this.target.absPos.y);

    let cpXDistance = Math.max(0.8 * Math.abs(sourcePoint.x - targetPoint.x), 100);
    let cp1 = sourcePoint.add(new Position(cpXDistance, -0.1 * (sourcePoint.y - targetPoint.y)));
    let cp2 = targetPoint.add(new Position(-cpXDistance, 0.1 * (sourcePoint.y - targetPoint.y)));

    this.connectionEl.setAttribute(
      "d",
      `
      M ${sourcePoint.x} ${sourcePoint.y}
      C ${cp1.x} ${cp1.y} ${cp2.x} ${cp2.y} ${targetPoint.x} ${targetPoint.y}
    `
    );

    this.connectionEl.setAttribute("stroke-width", Theme.current.CONNECTION_IO_WIDTH);
    this.connectionEl.setAttribute("stroke", Theme.current.CONNECTION_IO_COLOR);
    this.connectionEl.setAttribute("marker-end", "url(#io-arrow)");
    this.connectionEl.setAttribute("fill", "transparent");
  }

  /**
   * Diconnect the internal cnodes sockets
   */
  destroy() {
    // If there is an active program, remove the connection
    if (this.canvas.program) {
      this.source.socket.disconnect(this.target.socket);
    }
    super.destroy();
  }
}
