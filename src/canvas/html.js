/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { Component } from "./component";

/**
 * This is a sample component to draw a simple text
 * containing HTML
 */
export class HTMLComponent extends Component {
  /** The content of the component */
  #html = "";

  /** The component width */
  #width = 0;

  /** The component height */
  #height = 0;

  constructor(html, width, height) {
    super();
    this.html = html;
    this.width = width;
    this.height = height;
    super.setup();
  }

  get html() {
    return this.#html;
  }
  set html(val) {
    this.#html = val;
    this.componentEl.innerHTML = this.#html;
  }
  get width() {
    return this.#width;
  }
  set width(val) {
    this.#width = val;
    this.componentEl.setAttribute("width", this.#width);
  }
  get height() {
    return this.#height;
  }
  set height(val) {
    this.#height = val;
    this.componentEl.setAttribute("height", this.#height);
  }

  /**
   * Lets create the SVG element
   */
  createElement() {
    let htmlEl = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    htmlEl.setAttribute("style", "position: relative;");
    htmlEl.setAttribute("x", "0");
    htmlEl.setAttribute("y", "0");
    return htmlEl;
  }
}
