/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { SocketComponent } from "./socket";

/**
 * This is the main Canvas class. This class implement a general purpose canvas
 * that can manage nodes, sockets (a special subset of components) and connections
 * between sockets. The canvas is able to zoom and pan itself as well as to move
 * components. Components are organized in a hierarchical way, so that moving a component
 * will move all its subcomponents, including sockets. Sockets are (sub)components
 * that can be connected through connections to other sockets.
 * The class use SVG to render all elements.
 */
export class Canvas {
  /** The main svg element */
  #svgEl = null;

  /** A group under the main svg element to store connections */
  #connectionsEl = null;

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

  /** The list of connections between components in the canvas */
  #connections = [];

  /**
   * The constructor of the Canvas object. Initializes the SVG element,
   * set up all listeners to manage panning, zooming and selection.
   * @param {*} el The parent element in which create the SVG element
   */
  constructor(el) {
    // Create the main SVG element
    this.#svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    this.#svgEl.style.width = "100%";
    this.#svgEl.style.height = "100%";
    el.appendChild(this.#svgEl);

    // Now create a "g" element that will be the parent of all connections. This is
    // important to guarantee that connections will be always behind components
    this.#connectionsEl = document.createElementNS("http://www.w3.org/2000/svg", "g");
    this.#svgEl.appendChild(this.#connectionsEl);

    this.#adaptSVGSize();

    // Define all pointer events to manager pan and zoom
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

  get components() {
    return this.#components;
  }
  set components(val) {
    this.#components = val;
  }
  get connections() {
    return this.#connections;
  }
  set connections(val) {
    this.#connections = val;
  }

  /**
   * Return the internal SVG element
   */
  get svgEl() {
    return this.#svgEl;
  }

  /**
   * Return the internal SVG connections element
   */
  get connectionsEl() {
    return this.#connectionsEl;
  }

  /**
   * Updates the box view coordinates based on coordinates
   * stored in private fields #vbX, #vbY, #vbWidth and #vbHeight
   */
  #updateSVGViewBox() {
    this.#svgEl.setAttribute("viewBox", `${this.#vbX} ${this.#vbY} ${this.#vbWidth} ${this.#vbHeight}`);
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

    let newLeft = this.#vbX - (newWidth - this.#vbWidth) * ((p.x - this.#vbX) / this.#vbWidth);
    let newTop = this.#vbY - (newHeight - this.#vbHeight) * ((p.y - this.#vbY) / this.#vbHeight);

    this.#vbHeight = newHeight;
    this.#vbWidth = newWidth;
    this.#vbX = newLeft;
    this.#vbY = newTop;

    this.#updateSVGViewBox();
    e.stopPropagation();
  }

  /**
   * This method is responsible for translate client (browser) coordinates
   * to SVG space coordinates
   * @param {*} clientX The client x coordinate
   * @param {*} clientY The client y coordinate
   */
  clientToSvgPoint(clientX, clientY) {
    // Subtract the SVG's origin
    clientX -= this.#svgEl.getBoundingClientRect().left;
    clientY -= this.#svgEl.getBoundingClientRect().top;

    // Create a point in SVG space
    let p = this.#svgEl.createSVGPoint();

    p.x = clientX;
    p.y = clientY;

    // Translate coordinates using the SVG transofrmation matrix
    let pSVG = p.matrixTransform(this.#svgEl.getCTM().inverse());
    return pSVG;
  }

  /**
   * Manage the mousedown event to implement pan
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
   * This method detect a cnodes-ui component inside the canvas
   * at specified location (x,y). Optionally the user can request
   * only sockets component, this is useful when you want to search
   * a possible connection peer during the link process
   * @param {*} x The x coordinate in the canvas
   * @param {*} y Te y coordinate in the canvas
   * @param {*} onlySockets If true, this method search only for socket components
   */
  componentFromPosition(x, y, onlySockets = false) {
    // Get the DOM element at x,y in client space
    let pointedEl = document.elementFromPoint(x, y);

    // Searching for an element with the property "componentRef". When cnodes-ui
    // add a component, insert this property inside the SVG root element of the component
    while (pointedEl) {
      // Traverse the DOM tree
      if (pointedEl.componentRef && (!onlySockets || pointedEl.componentRef instanceof SocketComponent)) {
        return pointedEl.componentRef;
      }
      pointedEl = pointedEl.parentElement;
    }
    return null;
  }

  /**
   * Add a new connection to the canvas, also add the related element to
   * the main SVG group of connections
   * @param {*} connection The connection to add
   */
  addConnection(connection) {
    this.#connections.push(connection);
    connection.canvas = this;
    this.#connectionsEl.appendChild(connection.connectionEl);
  }

  /**
   * Remove a connection from the canvas, also remove the related SVG element
   * @param {*} connection The connection to remove
   */
  removeConnection(connection) {
    // Signal the connection that will be destroyed
    connection.destroy();
    this.#connections = this.#connections.filter((c) => c !== connection);
    this.#connectionsEl.removeChild(connection.connectionEl);
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

  /**
   * Remove a component from the canvas
   * @param {*} component Component to remove
   */
  removeComponent(component) {
    // Signal component that will be removed
    c.destroy();
    this.components = this.#components.filter((c) => c !== component);
    this.#svgEl.removeChild(component.componentEl);

    // Signal related connections that will be removed
    this.#connections.forEach((c) => {
      if (c.source === component || c.target === component) {
        c.destroy();
      }
    });
    // Remove related connections
    this.#connections = this.#connections.filter((c) => c.source !== component && c.target !== component);
  }

  /**
   * Update all connections in terms of SVG properties. This is
   * important because when components are moved, this ensures that
   * connections will follow them
   */
  updateAllConnections() {
    for (let connection of this.#connections) {
      connection.updateSVGElement();
    }
  }

  /**
   * This method extract all connections in the canvas, that have
   * the source or the target SocketComponent as endpoint
   * @param {*} socket The socket component for which search the connection
   */
  getConnectionsFor(socket) {
    return this.#connections.filter((c) => c.source === socket || c.target === socket);
  }

  /**
   * Remoives all connections from the canvas
   */
  removeAllConnections() {
    while (this.#connections.length > 0) {
      this.removeConnection(this.#connections[0]);
    }
  }

  /**
   * Removes all components from the canvas
   */
  removeAllComponents() {
    while (this.#components.length > 0) {
      this.removeComponent(this.#components[0]);
    }
  }

  /**
   * Remoives all connections and all components from the canvas
   */
  removeAll() {
    this.removeAllConnections();
    this.removeAllComponents();
  }
}
