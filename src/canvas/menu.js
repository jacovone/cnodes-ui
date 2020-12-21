/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { Component } from "./component";

export class MenuItem {
  #text;

  /**
   * Constructs a menu item
   * @param {string} text Title of the menu item
   */
  constructor(text) {
    this.#text = text;
  }
}

export class Menu extends Component {
  /**
   * Menu items
   */
  #items;

  constructor() {
    super();
  }
}
