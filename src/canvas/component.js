import { Position } from "./position";

export class Component {
  #canvas = null;
  #componentEl = null;
  #parent = null;
  #moveable = true;
  #pos = new Position(0, 0);
  #moving = false;
  #startMovePos = null;
  #startMovePointerPos = null;

  /** The list of child components */
  #components = [];

  constructor() {}

  setup() {
    let self = this;

    this.#componentEl = this.createElement();

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
   * @param {*} e The mousedown event
   */
  #onPointerDown(e) {
    if (this.#moveable) {
      this.#moving = true;
      this.#startMovePos = this.#canvas.clientToSvgPoint(e.clientX, e.clientY);
      this.#startMovePointerPos = this.#canvas.svgEl.createSVGPoint();
      this.#startMovePointerPos.x = this.#pos.x;
      this.#startMovePointerPos.y = this.#pos.y;
      this.#componentEl.setPointerCapture(e.pointerId);
      e.stopPropagation();
    }
  }

  /**
   * Manages the mouseup event to implement pan
   * @param {*} e The mouseup event
   */
  #onPointerUp(e) {
    if (this.#moveable) {
      this.#moving = false;
      this.#componentEl.releasePointerCapture(e.pointerId);
      e.stopPropagation();
    }
  }

  /**
   * Manages the mousemove event to implement pan
   * @param {*} e The mousemove event
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
   * This method must be overridden in a child concrete class
   */
  createElement() {
    throw new Error("Element must be defined in a subclass!");
  }

  /**
   * Returns the absolute position of this component, in terms
   * of canvas coordinates
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

    // Update all children also
    for (let c of this.#components) {
      c.updateSVGElement();
    }
  }

  /**
   * Add a new component as child component
   * @param {*} component Component to add
   */
  addComponent(component) {
    this.#components.push(component);
    component.parent = this;
    component.canvas = this.canvas;
    this.svgEl.appendChild(component.componentEl);
    component.updateSVGElement();
  }

  removeComponent(component) {
    this.components = this.#components.filter((c) => c !== component);
    this.svgEl.removeChild(component.componentEl);
  }
}
