/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020/2021
 */

import { Types } from "@marco.jacovone/cnodes/lib/core/type";
import { Connection } from "../canvas/connection";

/**
 * This class implements a connection for the cnodes system
 * It embed both source and target sockets
 */
export class CnodesConnection extends Connection {
  constructor(source, target, canvas) {
    super(source, target);
  }

  /**
   * Sets up the component
   */
  setup() {
    super.setup();
    this.updateSVGElement();

    if (canvas.program) {
      // Connect cnodes sockets
      this.source.socket.connect(this.target.socket);
    }
    return this;
  }

  /**
   * Lets create the element
   */
  createElement() {
    let el = document.createElementNS("http://www.w3.org/2000/svg", "path");
    return el;
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

  /**
   * Return a relevant type between two types passed as parameter
   * @param {string} type1 CNODES source type
   * @param {string} type2 CNODES target type
   */
  getRelevantType(type1, type2) {
    if (type1 === Types.ANY) {
      return type2;
    } else if (type2 === Types.ANY) {
      return type1;
    } else {
      return type1;
    }
  }
}
