import { Component } from "./component";

export class Connection {
  #canvas = null;
  #connectionEl = null;

  // a socket component
  #source = null;
  #target = null;

  constructor(source, target) {
    this.#source = source;
    this.target = target;
  }

  setup() {
    this.#connectionEl = this.createElement();
  }

  get canvas() {
    return this.#canvas;
  }

  set canvas(val) {
    this.#canvas = val;
  }

  get source() {
    return this.#source;
  }

  set source(val) {
    this.#source = val;
  }

  get target() {
    return this.#target;
  }

  set target(val) {
    this.#target = val;
  }

  get connectionEl() {
    return this.#connectionEl;
  }

  get svgEl() {
    return this.#canvas.svgEl;
  }

  createElement() {
    throw new Error("Element must be defined in a subclass!");
  }

  destroy() {}
}
