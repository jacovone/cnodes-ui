import { Canvas } from "./canvas";

export class Component {
  #canvas = null;
  #componentEl = null;

  #x = 0;
  #y = 0;
  #moving = false;
  #startMovePos = null;
  #startMovePointerPos = null;

  constructor() {
    let self = this;

    this.#componentEl = this.createElement();

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

  get x() {
      return this.#x;
  }

  set x(val) {
    this.#x = val;
    this.#updateSVGElement();
  }

  get y() {
      return this.#y;
  }

  set y(val) {
    this.#y = val;
    this.#updateSVGElement();
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

  /**
   * Manages the mousedown event to implement moving
   * @param {*} e The mousedown event
   */
  #onPointerDown(e) {
    this.#moving = true;
    this.#startMovePos = this.#canvas.clientToSvgPoint(e.clientX, e.clientY);
    this.#startMovePointerPos = this.#canvas.svgEl.createSVGPoint();
    this.#startMovePointerPos.x = this.#x;
    this.#startMovePointerPos.y = this.#y;
    this.#componentEl.setPointerCapture(e.pointerId);

    e.stopPropagation();
  }

  /**
   * Manages the mouseup event to implement pan
   * @param {*} e The mouseup event
   */
  #onPointerUp(e) {
    this.#moving = false;
    this.#componentEl.releasePointerCapture(e.pointerId);
    e.stopPropagation();
  }

  /**
   * Manages the mousemove event to implement pan
   * @param {*} e The mousemove event
   */
  #onPointerMove(e) {
    if (!this.#moving) {
      return;
    }
    let movePoint = this.#canvas.clientToSvgPoint(e.clientX, e.clientY);
    let xDiff = movePoint.x - this.#startMovePos.x;
    let yDiff = movePoint.y - this.#startMovePos.y;

    // This effectively move the element
    this.x = xDiff + this.#startMovePointerPos.x;
    this.y = yDiff + this.#startMovePointerPos.y;
    e.stopPropagation();
  }

  createElement() {
    throw new Error('Element must be defined in a subclass!')
  }

  #updateSVGElement() {
    this.#componentEl.setAttribute('transform', `translate(${this.#x},${this.#y})`);
  }
}

export class TestComponent extends Component {
    constructor() {
        super();
    }

    createElement() {
        let pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathEl.setAttribute("d", `M 0 0 Q 10 40 100 20`);
        pathEl.setAttribute("stroke", "red");
        pathEl.setAttribute("stroke-width", "5");
        pathEl.setAttribute("fill", "transparent");
    
        return pathEl;
    }
}

export class TestComponent2 extends Component {
    constructor() {
        super();
    }

    createElement() {
        let pathEl = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        pathEl.setAttribute("width", `200`);
        pathEl.setAttribute("height", `100`);
        pathEl.setAttribute("stroke", "blue");
        pathEl.setAttribute("fill-opacity", "0.5");
        pathEl.setAttribute("stroke-width", "5");
        pathEl.setAttribute("fill", "green");
    
        return pathEl;
    }
}