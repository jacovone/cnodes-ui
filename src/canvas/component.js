/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { Position } from "./position";
import { EventEmitter } from "events";

/**
 * This class is the base class for all components in the cnodes-ui canvas.
 * The class is responsible for manage mobility of components. This is not
 * yet the class for the cnodes nodes, is more abstract so that the user can
 * derive from that to implement components that are not explicitly connected
 * to the cnodes library, such as decorators, comments, etc.
 * In general component can have subcomponents. Special examples of subcomponents are
 * sockets. The socket is a component that can be connected through connections,
 * in the canvas-ui class model.
 */
export class Component {
  /** A reference to the enclosing canvas */
  #canvas = null;

  /** A reference to the SVG element that implement the component */
  #componentEl = null;

  /** The parent component if there is one */
  #parent = null;

  /** Is this component moveable? */
  #moveable = true;

  /** The position fo this component inside the canvas, in SVG coordinates */
  #pos = new Position(0, 0);

  /** The component is actually moving */
  #moving = false;

  /** A reference to the position of the component at the time hi starts moving */
  #startMovePos = null;

  /** The pointer position at the time in which the component starts moving */
  #startMovePointerPos = null;

  /** The list of eventual child components */
  #components = [];

  /**
   * Events connected to the component
   */
  events = new EventEmitter();

  constructor() {}

  /**
   * Sets up the component. The component creation follow a specific flow.
   * The user that creates the component have to call this method after, to
   * initializes the internal SVG component and optionally installs pointer
   * event listeners to manage moving.
   * By default setup() return this, so you can concatenate construction such as
   * new Component(...).setup();
   */
  setup() {
    // Create the SVG element. A subclass must override this method
    // to define the graphical aspect of the component
    this.#componentEl = this.createElement();

    let self = this;

    // Register a reference of this component inside the HTML element
    this.#componentEl.componentRef = this;

    // Cancel context menu on any pointerdown event
    this.#componentEl.addEventListener("pointerdown", (e) => {
      self.canvas.cancelContextMenu();
    });

    if (this.moveable) {
      this.#componentEl.addEventListener("pointerdown", (e) => {
        self.#onPointerDown(e);
      });
      this.#componentEl.addEventListener("pointerup", (e) => {
        self.#onPointerUp(e);
      });
      this.#componentEl.addEventListener("pointermove", (e) => {
        self.#onPointerMove(e);
      });
    }

    return this;
  }

  get pos() {
    return this.#pos;
  }
  set pos(val) {
    this.#pos = val;
    this.updateSVGElement();
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
  get components() {
    return this.#components;
  }
  set components(val) {
    this.#components = val;
  }

  get svgEl() {
    return this.#canvas.svgEl;
  }

  get moveable() {
    return this.#moveable;
  }
  set moveable(val) {
    this.#moveable = val;
  }
  get parent() {
    return this.#parent;
  }
  set parent(val) {
    this.#parent = val;
  }

  /**
   * Manages the mousedown event to implement moving
   * @param {Event} e The mousedown event
   */
  #onPointerDown(e) {
    if (e.button === 0) {
      if (this.#moveable) {
        this.#moving = true;
        this.#startMovePos = this.#canvas.clientToSvgPoint(
          e.clientX,
          e.clientY
        );
        this.#startMovePointerPos = this.#canvas.svgEl.createSVGPoint();
        this.#startMovePointerPos.x = this.#pos.x;
        this.#startMovePointerPos.y = this.#pos.y;
        this.#componentEl.setPointerCapture(e.pointerId);
        e.stopPropagation();
      }
    }
  }

  /**
   * Manages the mouseup event to implement pan
   * @param {Event} e The mouseup event
   */
  #onPointerUp(e) {
    if (this.#moveable && e.button === 0) {
      this.#moving = false;
      this.#componentEl.releasePointerCapture(e.pointerId);
      e.stopPropagation();
    }
  }

  /**
   * Manages the mousemove event to implement pan
   * @param {Event} e The mousemove event
   */
  #onPointerMove(e) {
    if (this.#moveable) {
      if (!this.#moving) {
        return;
      }
      let movePoint = this.#canvas.clientToSvgPoint(e.clientX, e.clientY);
      let xDiff = movePoint.x - this.#startMovePos.x;
      let yDiff = movePoint.y - this.#startMovePos.y;

      // This effectively move the element
      this.#pos.x = xDiff + this.#startMovePointerPos.x;
      this.#pos.y = yDiff + this.#startMovePointerPos.y;
      this.updateSVGElement();
      e.stopPropagation();
    }
  }

  /**
   * Returns the array of context menu items. If the component
   * returns null, no contextual menu is shown
   */
  getContextMenuItems() {
    return null;
  }

  /**
   * This method must be overridden in a child concrete class.
   * The setup() mthod calls this one during the creation process
   */
  createElement() {
    throw new Error("Element must be defined in a subclass!");
  }

  /**
   * Returns the absolute position of this component, in terms
   * of canvas coordinates, by travering the child-parent component
   * hierarchy
   */
  get absPos() {
    let pos = new Position(this.#pos.x, this.#pos.y);
    if (this.#parent) {
      let parentPos = this.#parent.absPos;
      pos = pos.add(parentPos);
    }
    return pos;
  }

  /**
   * Update the component element according to x and y local coordinates,
   * if this component is a child component, coordinates in canvas space
   * are computed
   */
  updateSVGElement() {
    let pos = this.absPos;
    this.#componentEl.setAttribute("transform", `translate(${pos.x},${pos.y})`);

    // Also update all children
    for (let c of this.#components) {
      c.updateSVGElement();
    }

    // Update all connections
    if (this.canvas) {
      this.canvas.updateAllConnections();
    }

    // emits a cnui:change event passing the entire object
    this.events.emit("cnui:change", this);
  }

  /**
   * Add a new component as child component.
   * WARNING: before attach child components, this component
   * must to be attached to the canvas itself, otherwise the method
   * fails
   * @param {Component} component Component to add
   */
  addComponent(component) {
    this.#components.push(component);
    component.parent = this;
    component.canvas = this.canvas;
    this.svgEl.appendChild(component.componentEl);
    component.updateSVGElement();
  }

  /**
   * Remove a child subcomponent
   * @param {Component} component The component to remove
   */
  removeComponent(component) {
    this.components = this.#components.filter((c) => c !== component);
    component.destroy();
    this.svgEl.removeChild(component.componentEl);
  }

  /**
   * This method is called when this component is removed
   * from the canvas of from its parent component
   */
  destroy() {
    // Removes all subcomponents
    this.components.forEach((c) => this.removeComponent(c));
  }
}
