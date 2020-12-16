import { Component } from "../canvas/component";

export class HTMLComponent extends Component {
  #html = "";
  #width = 0;
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

  createElement() {
    let htmlEl = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    htmlEl.setAttribute("style", "position: relative;");
    htmlEl.setAttribute("x", "0");
    htmlEl.setAttribute("y", "0");
    return htmlEl;
  }
}
