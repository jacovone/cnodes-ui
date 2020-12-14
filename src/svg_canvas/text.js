import { Component } from "./component";

export class TextComponent extends Component {
  #text = "";

  constructor(text) {
    super();
    this.text = text;
    this.componentEl.style = "font: italic 24px sans-serif;";
    this.componentEl.setAttribute("fill", "bloack");
    this.componentEl.setAttribute("x", "0");
    this.componentEl.setAttribute("y", "0");
    this.componentEl.innerHTML = this.text;
  }

  get text() {
    return this.#text;
  }

  set text(val) {
    this.#text = val;
    this.componentEl.innerHTML = this.#text;
  }

  createElement() {
    let textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
    return textEl;
  }
}
