/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { SocketComponent } from "../canvas/socket";

/**
 * This class is the base class for all sockets components
 * of cnodes. The class introduces the socket field that is
 * a "cnodes" socket the internal structure to store links
 * between cnodes nodes
 */
export class CnodesSocketComponent extends SocketComponent {
  /** The cnodes socket object */
  #socket = null;

  /**
   * Construct a new CnodesSocket object
   * @param {*} socket The internal cnodes socket object
   */
  constructor(socket) {
    super();
    this.#socket = socket;
  }

  get socket() {
    return this.#socket;
  }
}