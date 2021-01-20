/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020/2021
 */

/**
 * A class that represents a position in SVG space
 */
export class Position {
  /** The x coordinate */
  #x = 0;

  /** The y coordinate */
  #y = 0;

  /**
   * Construct a new Position
   * @param {number} x The x coordinate
   * @param {number} y The y coordinate
   */
  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  get x() {
    return this.#x;
  }
  set x(val) {
    this.#x = val;
  }
  get y() {
    return this.#y;
  }
  set y(val) {
    this.#y = val;
  }

  /**
   * Return a new position by adding another instance of
   * position coordinate by coordinate
   * @param {Position} pos
   */
  add(pos) {
    return new Position(this.#x + pos.x, this.#y + pos.y);
  }

  /**
   * Return a new position by subtracting another instance of
   * position coordinate by coordinate
   * @param {Position} pos
   */
  sub(pos) {
    return new Position(this.#x - pos.x, this.#y - pos.y);
  }
}
