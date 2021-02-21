/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020/2021
 */

import { Position } from "./position.mjs";
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

  /* Is this component clonable? */
  #clonable = false;

  /** The position fo this component inside the canvas, in SVG coordinates */
  #pos = new Position(0, 0);

  /** The component is actually moving */
  #moving = false;

  /** A reference to the position of the component at the time hi starts moving */
  #startMovePos = null;

  /** The pointer position at the time in which the component starts moving */
  #startMovePointerPos = null;

  /** The component is selectable? */
  #selectable = false;

  /**
   * Events connected to the component:
   */
  events = new EventEmitter().setMaxListeners(30);

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
    let diff = new Position(val.x - this.#pos.x, val.y - this.#pos.y);
    this.#pos = val;
    this.updateSVGElement();
    this.events.emit("cnui:move", this, diff);
  }
  get width() {
    return 0;
  }
  get height() {
    return 0;
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

  get moveable() {
    return this.#moveable;
  }
  set moveable(val) {
    this.#moveable = val;
  }
  get selectable() {
    return this.#selectable;
  }
  set selectable(val) {
    this.#selectable = val;
  }
  get clonable() {
    return this.#clonable;
  }
  set clonable(val) {
    this.#clonable = val;
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
    if (!this.canvas.enabled) {
      return;
    }

    if (e.button === 0 || e.button === 2) {
      this.events.emit("cnui:clicked", this, e.shiftKey);

      if (this.#moveable && e.button === 0) {
        this.#moving = false;
        this.#startMovePos = this.#canvas.clientToSvgPoint(
          e.clientX,
          e.clientY
        );
        this.#startMovePointerPos = this.#canvas.svgEl.createSVGPoint();
        this.#startMovePointerPos.x = this.#pos.x;
        this.#startMovePointerPos.y = this.#pos.y;
        this.#componentEl.setPointerCapture(e.pointerId);
      }

      if (e.button === 0) {
        e.stopPropagation();
      }
    }
  }

  /**
   * Manages the mouseup event to implement pan
   * @param {Event} e The mouseup event
   */
  #onPointerUp(e) {
    if (!this.canvas.enabled) {
      return;
    }

    if (this.#moveable && e.button === 0) {
      if (this.#startMovePos) {
        this.#startMovePos = null;
        this.#startMovePointerPos = null;
        if (this.#moving) {
          this.#moving = false;
          this.canvas.saveState();
        }
      }
      this.#componentEl.releasePointerCapture(e.pointerId);
      e.stopPropagation();
    }
  }

  /**
   * Manages the mousemove event to implement pan
   * @param {Event} e The mousemove event
   */
  #onPointerMove(e) {
    if (!this.canvas.enabled) {
      return;
    }

    if (this.#moveable) {
      if (this.#startMovePos) {
        this.#moving = true;
      } else {
        return;
      }

      let origPos = new Position(this.#pos.x, this.#pos.y);

      let movePoint = this.#canvas.clientToSvgPoint(e.clientX, e.clientY);
      let xDiff = movePoint.x - this.#startMovePos.x;
      let yDiff = movePoint.y - this.#startMovePos.y;

      // This effectively move the element
      this.#pos.x = xDiff + this.#startMovePointerPos.x;
      this.#pos.y = yDiff + this.#startMovePointerPos.y;

      if (e.ctrlKey) {
        this.#pos.x = Math.ceil(this.#pos.x / 20) * 20;
        this.#pos.y = Math.ceil(this.#pos.y / 20) * 20;
      }

      let delta = new Position(
        this.#pos.x - origPos.x,
        this.#pos.y - origPos.y
      );

      this.updateSVGElement();

      // Notify that component has moved
      this.events.emit("cnui:move", this, delta);

      if (this.canvas.isComponentSelected(this)) {
        // Notify that component has moved by the user
        this.events.emit("cnui:usermoveselected", this, delta);
      }

      if (e.altKey) {
        this.canvas.fitGraph();
      }

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
  }

  /**
   * A listener to the parent's move event
   */
  #cbMove = () => {
    this.updateSVGElement();
    this.events.emit("cnui:move", this);
  };

  /**
   * A listener to the parent's destroy event
   */
  #cbDestroy = () => {
    this.destroy();
  };

  /**
   * A listener to the parent's bringedToFront event
   */
  #cbBringedToFront = () => {
    this.canvas.bringToFront(this);
  };

  /**
   * A listener to the parent's disconnectAll event
   */
  #cbDisconnectAll = () => {
    for (let c of this.canvas.getConnectionsFor(this)) {
      c.destroy();
    }
  };

  /**
   * This method add this component as a child of another component. This means
   * tht this component register itself for receive parent component events, to
   * react on them. The addTo() method return this, to allow user to chain calls
   * during creation process
   * @param {Component} component The component to attach to
   */
  addTo(component) {
    this.#parent = component;
    component.canvas.addComponent(this);

    component.events.on("cnui:move", this.#cbMove);
    component.events.on("cnui:disconnectAll", this.#cbDisconnectAll);
    component.events.on("cnui:destroy", this.#cbDestroy);
    component.events.on("cnui:bringedToFront", this.#cbBringedToFront);

    return this;
  }

  /**
   * This method is called when this component is removed
   * from the canvas of from its parent component
   */
  destroy() {
    this.canvas.removeComponent(this);
    this.events.emit("cnui:destroy", this);

    // If this component is a child for another component
    // we must unregister listeners
    this.#parent?.events.off("cnui:move", this.#cbMove);
    this.#parent?.events.off("cnui:disconnectAll", this.#cbDisconnectAll);
    this.#parent?.events.off("cnui:destroy", this.#cbDestroy);
    this.#parent?.events.off("cnui:bringedToFront", this.#cbBringedToFront);
  }
}
