/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { Theme } from "../components/theme";
import { Component } from "./component";
import { Connection } from "./connection";
import { SocketComponent } from "./socket";

/**
 * This is the main Canvas class. This class implement a general purpose canvas
 * that can manage nodes, components, sockets (a special subset of components) and connections
 * between sockets. The canvas is able to zoom and pan itself as well as to move
 * components. Components are organized in a hierarchical way, so that moving a component
 * will move all its subcomponents, including sockets. Sockets are (sub)components
 * that can be connected through connections to other sockets.
 * The class use SVG elements to render all elements.
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

  /**
   * Define the minimum SVG View Box size, actually means
   * the max level of zoom (in)
   */
  #minVBSize = 10;

  /**
   * Define the minimum SVG View Box size, actually means
   * the max level of zoom (out)
   */
  #maxVBSize = 50000;

  /** The user is dragging the canvas backgorund? */
  #dragging = false;

  /** The point in which the drag was started */
  #startDragPos;

  /** The component for the contextual menu */
  #contextMenuComponent = null;

  /** The list of components in the canvas */
  #components = [];

  /** The list of connections between components in the canvas */
  #connections = [];

  /**
   * The constructor of the Canvas object. Initializes the SVG element,
   * set up all listeners to manage panning, zooming and selection.
   * @param {HTMLElement} el The parent element in which create the SVG element
   */
  constructor(el) {
    // Create the main SVG element
    this.#svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    this.#svgEl.style.width = "100%";
    this.#svgEl.style.height = "100%";
    el.appendChild(this.#svgEl);

    // Background color
    this.#svgEl.style["background-color"] =
      Theme.current.CANVAS_BACKGROUND_COLOR;

    // Now create a "g" element that will be the parent of all connections. This is
    // important to guarantee that connections will be always behind components
    this.#connectionsEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );
    this.#svgEl.appendChild(this.#connectionsEl);

    this.#adaptSVGSize();

    // Define all pointer events to manager pan and zoom
    let self = this;
    window.addEventListener("resize", () => {
      self.fitGraph();
    });
    this.#svgEl.addEventListener("wheel", (e) => {
      self.#onWheel(e);
    });
    this.#svgEl.addEventListener("pointerdown", (e) => {
      this.cancelContextMenu();
      self.#onPointerDown(e);
    });
    this.#svgEl.addEventListener("pointerup", (e) => {
      self.#onPointerUp(e);
    });
    this.#svgEl.addEventListener("pointermove", (e) => {
      self.#onPointerMove(e);
    });
    this.#svgEl.addEventListener("contextmenu", (e) => {
      self.#onContextMenu(e);
    });
  }

  /**
   * Returns the minimum SVG View Box size, actually means
   * the max level of zoom (in)
   */
  get minVBSize() {
    return this.#minVBSize;
  }
  /**
   * Sets the minimum SVG View Box size, actually means
   * the max level of zoom (in)
   */
  set minVBSize(val) {
    this.#minVBSize = val;
  }
  /**
   * Returns the minimum SVG View Box size, actually means
   * the max level of zoom (out)
   */
  get maxVBSize() {
    return this.#maxVBSize;
  }
  /**
   * Sets the minimum SVG View Box size, actually means
   * the max level of zoom (out)
   */
  set maxVBSize(val) {
    this.#maxVBSize = val;
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
  get contextMenuComponent() {
    return this.#contextMenuComponent;
  }
  set contextMenuComponent(val) {
    this.#contextMenuComponent = val;
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
   * @param {Event} e Wheel event
   */
  #onWheel(e) {
    let p = this.clientToSvgPoint(e.clientX, e.clientY);

    let zoomFactor = 0.003;
    let zoom = 1 + e.deltaY * zoomFactor;

    let newWidth = this.#vbWidth * zoom;
    let newHeight = this.#vbHeight * zoom;

    if (newHeight < this.#minVBSize) return;
    if (newWidth < this.#minVBSize) return;
    if (newHeight > this.#maxVBSize) return;
    if (newWidth > this.#maxVBSize) return;

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

  /**
   * This method is responsible for translate client (browser) coordinates
   * to SVG space coordinates
   * @param {number} clientX The client x coordinate
   * @param {number} clientY The client y coordinate
   */
  clientToSvgPoint(clientX, clientY) {
    // Create a point in SVG space
    let p = this.#svgEl.createSVGPoint();

    p.x = clientX;
    p.y = clientY;

    // Translate coordinates using the SVG transofrmation matrix
    let pSVG = p.matrixTransform(this.#svgEl.getScreenCTM().inverse());
    return pSVG;
  }

  /**
   * Manage the mousedown event to implement pan
   * @param {Event} e The mousedown event
   */
  #onPointerDown(e) {
    if (e.button === 0) {
      this.#dragging = true;
      this.#startDragPos = this.clientToSvgPoint(e.clientX, e.clientY);
      this.#svgEl.setPointerCapture(e.pointerId);
    }
  }

  /**
   * Manages the mouseup event to implement pan
   * @param {Event} e The mouseup event
   */
  #onPointerUp(e) {
    if (e.button === 0) {
      this.#dragging = false;
      this.#svgEl.releasePointerCapture(e.pointerId);
    }
  }

  /**
   * Manages the mousemove event to implement pan
   * @param {Event} e The mousemove event
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
   * Manages the contextmenu event to implement custom menu
   * @param {Event} e The contextmenu event
   */
  #onContextMenu(e) {
    e.preventDefault();
    e.stopPropagation();

    let component = this.componentFromPosition(e.clientX, e.clientY);
    let p = this.clientToSvgPoint(e.clientX, e.clientY);

    let items;
    if (!component) {
      items = this.getCanvasContextMenuItems();
    } else {
      items = component.getContextMenuItems();
    }

    this.showContextMenu(items, p.x, p.y);
  }

  /**
   * This method detect a cnodes-ui component inside the canvas
   * at specified location (x,y). Optionally the user can request
   * only sockets component, this is useful when you want to search
   * a possible connection peer during the link process
   * @param {number} x The x coordinate in the canvas
   * @param {number} y Te y coordinate in the canvas
   * @param {boolean} onlySockets If true, this method search only for socket components
   */
  componentFromPosition(x, y, onlySockets = false) {
    // Get the DOM element at x,y in client space
    let pointedEl = document.elementFromPoint(x, y);

    // Searching for an element with the property "componentRef". When cnodes-ui
    // add a component, insert this property inside the SVG root element of the component
    while (pointedEl) {
      // Traverse the DOM tree
      if (
        pointedEl.componentRef &&
        (!onlySockets || pointedEl.componentRef instanceof SocketComponent)
      ) {
        return pointedEl.componentRef;
      }
      pointedEl = pointedEl.parentElement;
    }
    return null;
  }

  /**
   * Add a new connection to the canvas, also add the related element to
   * the main SVG group of connections
   * @param {Connection} connection The connection to add
   */
  addConnection(connection) {
    this.#connections.push(connection);
    connection.canvas = this;
    this.#connectionsEl.appendChild(connection.connectionEl);
  }

  /**
   * Remove a connection from the canvas, also remove the related SVG element
   * @param {Connection} connection The connection to remove
   */
  removeConnection(connection) {
    this.#connections = this.#connections.filter((c) => c !== connection);
    if (connection.connectionEl.parentElement === this.#connectionsEl)
      this.#connectionsEl.removeChild(connection.connectionEl);
  }

  /**
   * Checks if there is a connection between sockets already
   * @param {SocketComponent} socket1 First socket component
   * @param {SocketComponent} socket2 Second socket component
   */
  alreadyConnected(socket1, socket2) {
    return (
      this.connections.findIndex(
        (c) =>
          (c.source === socket1 && c.target === socket2) ||
          (c.source === socket2 && c.target === socket1)
      ) !== -1
    );
  }

  /**
   * Add a new component to the canvas
   * @param {Component} component Component to add
   */
  addComponent(component) {
    this.#components.push(component);
    component.canvas = this;
    this.#svgEl.appendChild(component.componentEl);
  }

  /**
   * Remove a component from the canvas
   * @param {Component} component Component to remove
   */
  removeComponent(component) {
    // Remove the component from the SVG space
    this.components = this.#components.filter((c) => c !== component);
    if (component.componentEl.parentElement === this.#svgEl)
      this.#svgEl.removeChild(component.componentEl);
  }

  /**
   * This method extract all connections in the canvas, that have
   * the source or the target SocketComponent as endpoint
   * @param {SocketComponent} socket The socket component for which search the connection
   */
  getConnectionsFor(socket) {
    return this.#connections.filter(
      (c) => c.source === socket || c.target === socket
    );
  }

  /**
   * Destroy all connections from the canvas
   */
  destroyAllConnections() {
    while (this.#connections.length > 0) {
      this.#connections[0].destroy();
    }
  }

  /**
   * Destroy all components from the canvas
   */
  destroyAllComponents() {
    while (this.#components.length > 0) {
      this.#components[0].destroy();
    }
  }

  /**
   * Destroy all connections and all components from the canvas
   */
  destroyAll() {
    this.destroyAllConnections();
    this.destroyAllComponents();
  }

  /**
   * Return a list of MenuItem for the context menu
   */
  getCanvasContextMenuItems() {
    return null;
  }

  /**
   * Shows the context menu retated to the component or the canvas
   * @param {MenuItem[]} items Items that compose the menu
   * @param {number} x The x coordinate for the menu
   * @param {number} y The y coordinate for the menu
   */
  showContextMenu(items, x, y) {
    throw new Error("You must override this method in a subclass!");
  }

  /**
   * Cancels the current open context menu, and closes it
   */
  cancelContextMenu() {
    if (this.#contextMenuComponent) {
      this.removeComponent(this.#contextMenuComponent);
      this.contextMenuComponent = null;
    }
  }

  /**
   * Set view box of the canvas to fit the entire graph
   * with a padding
   * @param { {x: number, y: number} } padding
   */
  fitGraph(padding) {
    let nodesBounds = {
      minX: Infinity,
      minY: Infinity,
      maxX: -Infinity,
      maxY: -Infinity,
      width: () => {
        return nodesBounds.maxX - nodesBounds.minX;
      },
      height: () => {
        return nodesBounds.maxY - nodesBounds.minY;
      },
    };

    // Compute exact bounds
    for (let c of this.components) {
      if (c.absPos.x < nodesBounds.minX) {
        nodesBounds.minX = c.absPos.x;
      }
      if (c.absPos.y < nodesBounds.minY) {
        nodesBounds.minY = c.absPos.y;
      }
      if (c.absPos.x + c.width > nodesBounds.maxX) {
        nodesBounds.maxX = c.absPos.x + c.width;
      }
      if (c.absPos.y + c.height > nodesBounds.maxY) {
        nodesBounds.maxY = c.absPos.y + c.height;
      }
    }

    // Add dome padding
    let pad = padding ?? {
      x: 100,
      y: 100,
    };

    nodesBounds.minX -= pad.x;
    nodesBounds.maxX += pad.x;
    nodesBounds.minY -= pad.y;
    nodesBounds.maxY += pad.y;

    this.#vbX = nodesBounds.minX;
    this.#vbY = nodesBounds.minY;
    this.#vbWidth = nodesBounds.width();
    this.#vbHeight = nodesBounds.height();

    this.#updateSVGViewBox();
  }
}
