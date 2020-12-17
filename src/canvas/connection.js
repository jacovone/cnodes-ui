import { Component } from "./component";

export class Connection {
  #canvas;
  #componentEl;

  #source;
  #target;

  constructor() {}

  setup() {
    this.#componentEl = this.createElement();
  }

  get canvas() {
    return this.#canvas;
  }

  set canvas(val) {
    this.#canvas = val;
  }

  get componentEl() {
    return this.#componentEl;
  }

  get svgEl() {
    return this.#canvas.svgEl;
  }

  destroy() {}
}
