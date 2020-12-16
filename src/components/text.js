import { Component } from "../canvas/component";

export class TextComponent extends Component {
  #style = "style: 24px sans-serif;";
  #text = "";
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

  createElement() {
    let textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
    return textEl;
  }
}
