/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020/2021
 */

import { Position } from "../canvas/position.mjs";
import { CnodesConnection } from "../components/cnodesconnection.mjs";
import { Theme } from "../components/theme.mjs";

/**
 * This class implements a connection for Input->Output connection
 * in the cnodes world. It embed both source and target sockets that
 * must be of type InputSocketComponent and OutputSocketComponent, and manages
 * the connection status of the embedded cnodes's socket
 */
export class PrevNextConnection extends CnodesConnection {
  constructor(source, target, canvas) {
    super(source, target, canvas);
  }

  /**
   * Update the aspect of the connection
   */
  updateSVGElement() {
    let sourcePoint = new Position(this.source.absPos.x, this.source.absPos.y);
    let targetPoint = new Position(
      this.target.absPos.x - Theme.current.NODE_PREV_NEXT_POINT_RADIUS,
      this.target.absPos.y
    );

    let cpXDistance = Math.max(
      0.8 * Math.abs(sourcePoint.x - targetPoint.x),
      Math.min(Math.abs(sourcePoint.y - targetPoint.y), 100)
    );
    let cp1 = sourcePoint.add(
      new Position(cpXDistance, -0.3 * (sourcePoint.y - targetPoint.y))
    );
    let cp2 = targetPoint.add(
      new Position(-cpXDistance, 0.3 * (sourcePoint.y - targetPoint.y))
    );

    this.connectionEl.setAttribute(
      "d",
      `
      M ${sourcePoint.x} ${sourcePoint.y}
      C ${cp1.x} ${cp1.y} ${cp2.x} ${cp2.y} ${targetPoint.x} ${targetPoint.y}
    `
    );

    this.connectionEl.setAttribute(
      "stroke-width",
      Theme.current.CONNECTION_PREV_NEXT_WIDTH
    );
    this.connectionEl.setAttribute(
      "stroke",
      Theme.current.CONNECTION_PREV_NEXT_COLOR
    );
    this.connectionEl.setAttribute("marker-end", "url(#prevnext-arrow)");
    this.connectionEl.setAttribute("fill", "transparent");
  }
}
