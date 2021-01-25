/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020/2021
 */

import { EventEmitter } from "events";

/**
 * This is tha base class of all connections. A Connection is always a
 * link from two sockets. Sockets are special subclass of components, tipically
 * child of base components
 */
export class Connection {
  /** A reference to the enclosing canvas */
  #canvas = null;

  /** A reference to the SVG element of this connection */
  #connectionEl = null;

  /** The source socket component for the link */
  #source = null;

  /** Yhe destination socket component for the link */
  #target = null;

  /**
   * Events connected to the component:
   */
  events = new EventEmitter();

  /**
   * A listener for parent's move event
   */
  #cbMove = () => {
    this.updateSVGElement();
    this.events.emit("cnui:move", this);
  };

  /**
   * A listener for parent's destroy event
   */
  #cbDestroy = () => {
    this.destroy();
  };

  /**
   * Construct a connection instance by setting its source and target.
   * This method takes also the opportunity to register itself to
   * source and target events, and react accordingly
   */
  constructor(source, target) {
    this.#source = source;
    this.#target = target;

    this.#source.events.on("cnui:move", this.#cbMove);
    this.#source.events.on("cnui:destroy", this.#cbDestroy);
    this.#target.events.on("cnui:move", this.#cbMove);
    this.#target.events.on("cnui:destroy", this.#cbDestroy);
  }

  /**
   * Sets up this connection. In terms of construction flow
   * this means create the SVG element that will be shown
   */
  setup() {
    this.#connectionEl = this.createElement();
    this.canvas.addConnection(this);
    this.#source.updateSVGElement();
    this.#target.updateSVGElement();

    return this;
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

  /**
   * This method is responsible to create the SVG element
   * for display the connetion. Subclasses must override this method
   */
  createElement() {
    throw new Error("Element must be defined in a subclass!");
  }

  /**
   * This method is called when the connetion needs to be updated.
   * This happens when sockets and/or components connected to this
   * object where moved
   */
  updateSVGElement() {
    throw new Error("Element must be defined in a subclass!");
  }

  /**
   * This method is called when the connection is removed from the canvas
   */
  destroy() {
    this.canvas.removeConnection(this);
    this.#source.events.off("cnui:move", this.#cbMove);
    this.#target.events.off("cnui:move", this.#cbMove);
    this.#source.events.off("cnui:destroy", this.#cbDestroy);
    this.#target.events.off("cnui:destroy", this.#cbDestroy);

    this.#source.updateSVGElement();
    this.#target.updateSVGElement();
  }
}
