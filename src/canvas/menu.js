/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { Theme } from "../components/theme";
import { Canvas } from "./canvas";
import { Component } from "./component";
import { Position } from "./position";

/**
 * This class represents a single Menu item.
 * A menu itemhas a text, and a callback to call on click
 */
export class MenuItem {
  /** The "click" callback */
  #callback = null;

  /** The text for the item */
  #text = "";

  /**
   * Constructs a menu item
   * @param {string} text Title of the menu item
   * @param {function} callback The callback function to call on click event
   */
  constructor(text, callback) {
    this.#text = text;
    this.#callback = callback;
  }

  get text() {
    return this.#text;
  }
  set text(val) {
    this.#text = val;
  }
  get callback() {
    return this.#callback;
  }
  set callback(val) {
    this.#callback = val;
  }
}

/**
 * This class implements a menu
 */
export class Menu extends Component {
  /** Menu items */
  #items = [];

  /**
   * Construct a new Menu for the canvas
   * @param {Canvas} canvas The canvas
   * @param {MenuItem[]} items The menu items
   * @param {number} x The x coordinate
   * @param {number} y The y coordinate
   */
  constructor(canvas, items, x, y) {
    super();
    this.moveable = false;
    this.canvas = canvas;
    this.#items = items;
    this.setup();

    canvas.addComponent(this);
    this.pos = new Position(x, y);
  }

  get items() {
    return this.#items;
  }
  set items(val) {
    this.#items = val;
  }

  /**
   * Set up the container
   */
  setup() {
    super.setup();
  }

  /**
   * Computes the menu vertical size, based on menu items
   */
  get height() {
    throw new Error("A subclass must implement this method!");
  }

  /**
   * Lets create the SVG element
   */
  createElement() {
    throw new Error("A subclass must implement this method!");
  }
}
