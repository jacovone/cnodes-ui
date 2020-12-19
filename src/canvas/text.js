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
 * This is a sample component to draw a simple SVG Text
 */
export class TextComponent extends Component {
  /** Style of the text component */
  #style = "style: 24px sans-serif;";

  /** Content of the component */
  #text = "";

  /** Color of the text */
  #color = "black";

  constructor(text) {
    super();
    this.text = text;
    this.#style = "24px sans-serif;";
    this.componentEl.style = this.#style;
    this.componentEl.setAttribute("fill", this.#color);
    this.componentEl.setAttribute("x", "0");
    this.componentEl.setAttribute("y", "0");
    this.componentEl.innerHTML = this.text;

    super.setup();
  }

  get text() {
    return this.#text;
  }
  set text(val) {
    this.#text = val;
    this.componentEl.innerHTML = this.#text;
  }
  get color() {
    return this.#color;
  }
  set color(val) {
    this.#color = val;
    this.componentEl.setAttribute("color", this.#color);
  }
  get style() {
    return this.#style;
  }
  set style(val) {
    this.#style = val;
    this.componentEl.setAttribute("style", this.#style);
  }

  /**
   * Lets create the element
   */
  createElement() {
    let textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
    return textEl;
  }
}
