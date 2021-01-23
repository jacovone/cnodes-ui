/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020/2021
 */

import { Socket } from "@marco.jacovone/cnodes/lib/core/socket";
import { Theme } from "../components/theme";
import { Component } from "./component";
import { Connection } from "./connection";
import { Menu, MenuItem } from "./menu";
import { Position } from "./position";
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

  /** An SVG element for rectangular selection */
  #selectionEl = null;

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

  /** The user is panning the canvas backgorund? */
  #panning = false;

  /** The user is selecting multiple components with a rect */
  #selecting = false;

  /** The point in which the drag was started */
  #startDragPos;

  /** The component for the contextual menu */
  #contextMenuComponent = null;

  /** The list of components in the canvas */
  #components = [];

  /** The list of selected components */
  #selectedComponents = [];

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

    this.#svgEl.style["-webkit-touch-callout"] = "none";
    this.#svgEl.style["-webkit-user-select"] = "none";
    this.#svgEl.style["-khtml-user-select"] = "none";
    this.#svgEl.style["-moz-user-select"] = "none";
    this.#svgEl.style["-ms-user-select"] = "none";
    this.#svgEl.style["user-select"] = "none";

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
      if (e.ctrlKey) {
        e.preventDefault();
        return;
      }
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
  get selectedComponents() {
    return this.#selectedComponents;
  }
  set selectedComponents(val) {
    this.#selectedComponents = val;
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

    let zoomFactor = 0.002;
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
   * Manage the mousedown event to implement pan and canvas selection
   * @param {Event} e The mousedown event
   */
  #onPointerDown(e) {
    if (e.button === 0) {
      if (!e.shiftKey) {
        // Reset selection
        let selection = this.#selectedComponents;
        this.#selectedComponents = [];
        // Update components
        for (let c of selection) {
          c.updateSVGElement();
        }

        this.#panning = true;
        this.#startDragPos = this.clientToSvgPoint(e.clientX, e.clientY);
        this.#svgEl.setPointerCapture(e.pointerId);
      } else {
        // Begin the rect selection
        this.#selecting = true;
        this.#selectionEl = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect"
        );
        let p = this.clientToSvgPoint(e.clientX, e.clientY);
        this.#startDragPos = new Position(p.x, p.y);
        this.#selectionEl.setAttribute("x", p.x);
        this.#selectionEl.setAttribute("y", p.y);
        this.#selectionEl.setAttribute("width", "0");
        this.#selectionEl.setAttribute("height", "0");
        this.#selectionEl.setAttribute(
          "stroke",
          Theme.current.CANVAS_SELECTION_STROKE_COLOR
        );
        this.#selectionEl.setAttribute(
          "stroke-width",
          Theme.current.CANVAS_SELECTION_STROKE_WIDTH
        );
        this.#selectionEl.setAttribute(
          "fill",
          Theme.current.CANVAS_SELECTION_FILL_COLOR
        );
        this.#svgEl.appendChild(this.#selectionEl);
        this.#svgEl.setPointerCapture(e.pointerId);
      }
    }
  }

  /**
   * Manages the mouseup event to implement pan and canvas selection
   * @param {Event} e The mouseup event
   */
  #onPointerUp(e) {
    if (e.button === 0) {
      // Pan end
      this.#panning = false;
      this.#svgEl.releasePointerCapture(e.pointerId);
      if (this.#selecting) {
        this.#selecting = false;
        this.#svgEl.removeChild(this.#selectionEl);
        this.#selectionEl = null;
      }
    } else if (e.button === 2) {
      // Lets show context menu

      let component = this.componentFromPosition(e.clientX, e.clientY);
      let p = this.clientToSvgPoint(e.clientX, e.clientY);

      let items;
      if (!component) {
        items = this.getCanvasContextMenuItems();
      } else {
        // Check if there is more than a component selected
        if (this.#selectedComponents.length <= 1) {
          items = component.getContextMenuItems();
        } else {
          // There are more than 1 component selected, so merge menu items
          // copmmont to all components
          items = this.getAllCommonMenuItems(this.#selectedComponents);
        }
      }

      this.showContextMenu(items, p.x, p.y);
    }
  }

  /**
   * Manages the mousemove event to implement pan and canvas selection
   * @param {Event} e The mousemove event
   */
  #onPointerMove(e) {
    if (!this.#panning && !this.#selecting) {
      return;
    }
    let movePoint = this.clientToSvgPoint(e.clientX, e.clientY);

    if (this.#panning) {
      let xDiff = movePoint.x - this.#startDragPos.x;
      let yDiff = movePoint.y - this.#startDragPos.y;
      this.#vbX -= xDiff;
      this.#vbY -= yDiff;
      this.#updateSVGViewBox();
    }
    if (this.#selecting) {
      // Update selection rect
      let x = Math.min(this.#startDragPos.x, movePoint.x);
      let y = Math.min(this.#startDragPos.y, movePoint.y);
      let width = Math.abs(this.#startDragPos.x - movePoint.x);
      let height = Math.abs(this.#startDragPos.y - movePoint.y);

      this.#selectionEl.setAttribute("x", x);
      this.#selectionEl.setAttribute("y", y);
      this.#selectionEl.setAttribute("width", width);
      this.#selectionEl.setAttribute("height", height);

      // Update the selection
      this.#addComponentToSelectionForBox(x, y, width, height);
    }
  }

  /**
   * Add components inside the specified rectangular area to the current
   * canvas selection
   * @param {number} x Box left
   * @param {number} y Box top
   * @param {number} width Box width
   * @param {number} height Box height
   */
  #addComponentToSelectionForBox(x, y, width, height) {
    /**
     * Return true if two rects passed as parameter overlaps
     * @param {number} x1 x of the first rect
     * @param {number} y1 y of the first rect
     * @param {number} width1 width of the first rect
     * @param {number} height1 height of the first rect
     * @param {number} x2 x of the second rect
     * @param {number} y2 y of the second rect
     * @param {number} width2 width of the second rect
     * @param {number} height2 hright of the second rect
     */
    function rectsOverlaps(x1, y1, width1, height1, x2, y2, width2, height2) {
      return (
        Math.max(x1, x2, x1 + width1, x2 + width2) -
          Math.min(x1, x2, x1 + width1, x2 + width2) <
          width1 + width2 &&
        Math.max(y1, y2, y1 + height1, y2 + height2) -
          Math.min(y1, y2, y1 + height1, y2 + height2) <
          height1 + height2
      );
    }

    for (let c of this.#components.filter((comp) => comp.selectable)) {
      if (
        rectsOverlaps(
          c.absPos.x,
          c.absPos.y,
          c.width,
          c.height,
          x,
          y,
          width,
          height
        )
      ) {
        if (this.#selectedComponents.findIndex((comp) => comp === c) === -1) {
          this.#selectedComponents.push(c);
        }
      } else {
        this.#selectedComponents = this.#selectedComponents.filter(
          (comp) => comp !== c
        );
      }
      c.updateSVGElement();
    }
  }

  /**
   * This method clones a list of components and put it on the map. Components
   * have to be selectable and clonable
   * @param {Component[]} components Components to clone
   */
  #cloneComponents(components) {}

  /**
   * This method extract all common menu items from an
   * array of components. Menu items are considered the same
   * if it have the same text and the same search text. The returned
   * array is an array of menu items in which text and search text is preserved
   * while callback are a composition of original callbacks, so by selecting
   * a menu item, all action of all components are executed
   * @param {Component[]} components The array of components
   */
  getAllCommonMenuItems(components) {
    if (components.length === 0) {
      return [];
    }
    let retItems = [];
    let c = components[0];
    // Compare this component with each other
    let items = c.getContextMenuItems();

    if (items?.length > 0) {
      // For each menu item of c, check is it present
      // in all other components
      for (let item of items) {
        // Array of different copies for this item
        let accItems = [item];
        let presentInAllComponents = true;
        for (let c1 of components.filter((comp) => comp !== c)) {
          let items1 = c1.getContextMenuItems();
          let item1 = items1.find(
            (i) => i.text === item.text && i.searchText === item.searchText
          );
          if (item1 !== undefined) {
            accItems.push(item1);
          } else {
            presentInAllComponents = false;
          }
        }
        // If this item is present in all components, create a
        // new MenuItem with sampe texts and a callback that is composition of
        // all callbacks
        if (presentInAllComponents) {
          // Define the composition of callbacks
          let callback = () => {
            for (let i of accItems) {
              i.callback();
            }
          };
          retItems.push(new MenuItem(item.text, callback, item.searchText));
        }
      }
    }

    return retItems;
  }

  /**
   * This method is called whenever the user move a selected component
   * @param {Component} component The moved component
   * @param {Position} delta The diff position of movement
   */
  #onSelectedComponentMovedByUser = (component, delta) => {
    for (let c of this.#selectedComponents.filter((c) => c !== component)) {
      c.pos = c.pos.add(delta);
      c.updateSVGElement();
    }
  };

  /**
   * This method is invoked whenever the user click a selected component
   * @param {Component} component Thye clicked component
   * @param {boolean} shiftKey Was the shift key pressed during the clock action?
   */
  #onComponentIsClicked = (component, shiftKey) => {
    if (shiftKey) {
      // Invert the component selection
      if (this.#selectedComponents.findIndex((c) => c === component) !== -1) {
        this.#selectedComponents = this.#selectedComponents.filter(
          (c) => c !== component
        );
      } else {
        this.#selectedComponents.push(component);
      }
      component.updateSVGElement();
    } else {
      // If is already selected does nothing
      if (!this.isComponentSelected(component)) {
        // Set the component as the only one selected
        let selection = this.#selectedComponents;
        this.#selectedComponents = [component];
        for (let c of selection) {
          c.updateSVGElement();
        }
        component.updateSVGElement();
      }
    }
  };

  /**
   * Manages the contextmenu event to implement custom menu,
   * by simply disabling the default menu
   * @param {Event} e The contextmenu event
   */
  #onContextMenu(e) {
    e.preventDefault();
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

    if (component.moveable && component.selectable) {
      component.events.on("cnui:clicked", this.#onComponentIsClicked);
      component.events.on(
        "cnui:usermoveselected",
        this.#onSelectedComponentMovedByUser
      );
    }
  }

  /**
   * Remove a component from the canvas
   * @param {Component} component Component to remove
   */
  removeComponent(component) {
    // Remove the component from the SVG space
    this.components = this.#components.filter((c) => c !== component);

    // Remove component from selected components
    this.#selectedComponents = this.#selectedComponents.filter(
      (c) => c !== component
    );

    if (component.componentEl.parentElement === this.#svgEl) {
      this.#svgEl.removeChild(component.componentEl);
    }

    // Unregister callbacks
    if (component.moveable && component.selectable) {
      component.events.off("cnui:clicked", this.#onComponentIsClicked);
      component.events.off(
        "cnui:usermove",
        this.#onSelectedComponentMovedByUser
      );
    }
  }

  /**
   * True if the component passed as parameter is in the selection list
   * @param {Component} component Component to be consider
   */
  isComponentSelected(component) {
    return this.#selectedComponents.includes(component);
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
    this.selectedComponents = [];
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
      // Ignore menus and sockets
      if (!(c instanceof Socket) && !(c instanceof Menu)) {
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

    if (
      nodesBounds.height() >= this.#minVBSize &&
      nodesBounds.width() >= this.#minVBSize &&
      nodesBounds.height() <= this.#maxVBSize &&
      nodesBounds.width() <= this.#maxVBSize
    ) {
      this.#vbX = nodesBounds.minX;
      this.#vbY = nodesBounds.minY;
      this.#vbWidth = nodesBounds.width();
      this.#vbHeight = nodesBounds.height();

      this.#updateSVGViewBox();
    }
  }
}
