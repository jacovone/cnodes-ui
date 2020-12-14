export class Canvas {
  /** The main svg element */
  #svgEl = null;

  /** The current SVG box view left coord */
  #vbX = 0;

  /** The current SVG box view top coord */
  #vbY = 0;

  /** The current SVG box view width */
  #vbWidth = 100;

  /** The current SVG box view height */
  #vbHeight = 100;

  /** The user is dragging the canvas backgorund? */
  #dragging = false;

  /** The point in which the drag was started */
  #startDragPos;

  /** The list of components in the canvas */
  #components = [];

  /**
   * The constructor of the Canvas object. Initializes the SVG element,
   * set up all listeners to manage panning, zooming and selection.
   * @param {*} el The parent element in which create the SVG element
   */
  constructor(el) {
    this.#svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.#svgEl.style.width = "100%";
    this.#svgEl.style.height = "100%";
    el.appendChild(this.#svgEl);

    this.#adaptSVGSize();

    let self = this;
    window.addEventListener("resize", () => {
      self.#adaptSVGSize();
    });
    this.#svgEl.addEventListener("wheel", (e) => {
      self.#onWheel(e);
    });
    this.#svgEl.addEventListener("pointerdown", (e) => {
      self.#onPointerDown(e);
    });
    this.#svgEl.addEventListener("pointerup", (e) => {
      self.#onPointerUp(e);
    });
    this.#svgEl.addEventListener("pointermove", (e) => {
      self.#onPointerMove(e);
    });
  }

  /**
   * Return the internal SVG element
   */
  get svgEl() {
    return this.#svgEl;
  }

  /**
   * Updates the box view coordinates based on coordinates
   * stored in private fields #vbX, #vbY, #vbWidth and #vbHeight
   */
  #updateSVGViewBox() {
    this.#svgEl.setAttribute(
      "viewBox",
      `${this.#vbX} ${this.#vbY} ${this.#vbWidth} ${this.#vbHeight}`
    );
  }

  /**
   * Adjust the view box of the svg element based of the container
   * current size. It's called when a resize event is received
   */
  #adaptSVGSize() {
    this.#vbWidth = this.#svgEl.parentElement.clientWidth;
    this.#vbHeight = this.#svgEl.parentElement.clientHeight;
    this.#updateSVGViewBox();
  }

  /**
   * Manages the wheel event to imlement zooming
   * @param {*} e Wheel event
   */
  #onWheel(e) {
    let p = this.clientToSvgPoint(e.clientX, e.clientY);

    let zoomFactor = 0.003;
    let zoom = 1 + e.deltaY * zoomFactor;

    let newWidth = this.#vbWidth * zoom;
    let newHeight = this.#vbHeight * zoom;

    if (newHeight < 10) return;
    if (newWidth < 10) return;
    if (newHeight > 50000) return;
    if (newWidth > 50000) return;

    let newLeft =
      this.#vbX -
      (newWidth - this.#vbWidth) * ((p.x - this.#vbX) / this.#vbWidth);
    let newTop =
      this.#vbY -
      (newHeight - this.#vbHeight) * ((p.y - this.#vbY) / this.#vbHeight);

    this.#vbHeight = newHeight;
    this.#vbWidth = newWidth;
    this.#vbX = newLeft;
    this.#vbY = newTop;

    this.#updateSVGViewBox();
    e.stopPropagation();
  }

  clientToSvgPoint(clientX, clientY) {
    let p = this.#svgEl.createSVGPoint();

    p.x = clientX;
    p.y = clientY;

    let pSVG = p.matrixTransform(this.#svgEl.getCTM().inverse());
    return pSVG;
  }

  /**
   * Manager the mousedown event to implement pan
   * @param {*} e The mousedown event
   */
  #onPointerDown(e) {
    this.#dragging = true;
    this.#startDragPos = this.clientToSvgPoint(e.clientX, e.clientY);
    this.#svgEl.setPointerCapture(e.pointerId);
  }

  /**
   * Manages the mouseup event to implement pan
   * @param {*} e The mouseup event
   */
  #onPointerUp(e) {
    this.#dragging = false;
    this.#svgEl.releasePointerCapture(e.pointerId);
  }

  /**
   * Manages the mousemove event to implement pan
   * @param {*} e The mousemove event
   */
  #onPointerMove(e) {
    if (!this.#dragging) {
      return;
    }
    let movePoint = this.clientToSvgPoint(e.clientX, e.clientY);
    let xDiff = movePoint.x - this.#startDragPos.x;
    let yDiff = movePoint.y - this.#startDragPos.y;
    this.#vbX -= xDiff;
    this.#vbY -= yDiff;
    this.#updateSVGViewBox();
  }

  /**
   * Add a new component to the canvas
   * @param {*} component Component to add
   */
  addComponent(component) {
    this.#components.push(component);
    component.canvas = this;
    this.#svgEl.appendChild(component.componentEl);
  }

  removeComponent(component) {
    this.components = this.#components.filter((c) => c !== component);
    this.#svgEl.removeChild(component.componentEl);
  }

  clear() {
    this.#svgEl.innerHTML = "";
  }
}
