var cnui;cnui =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/canvas/canvas.js":
/*!******************************!*\
  !*** ./src/canvas/canvas.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Canvas": () => /* binding */ Canvas
/* harmony export */ });
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/theme */ "./src/components/theme.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/canvas/component.js");
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connection */ "./src/canvas/connection.js");
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket */ "./src/canvas/socket.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */




/**
 * This is the main Canvas class. This class implement a general purpose canvas
 * that can manage nodes, components, sockets (a special subset of components) and connections
 * between sockets. The canvas is able to zoom and pan itself as well as to move
 * components. Components are organized in a hierarchical way, so that moving a component
 * will move all its subcomponents, including sockets. Sockets are (sub)components
 * that can be connected through connections to other sockets.
 * The class use SVG elements to render all elements.
 */

var _svgEl = new WeakMap();

var _connectionsEl = new WeakMap();

var _vbX = new WeakMap();

var _vbY = new WeakMap();

var _vbWidth = new WeakMap();

var _vbHeight = new WeakMap();

var _minVBSize = new WeakMap();

var _maxVBSize = new WeakMap();

var _dragging = new WeakMap();

var _startDragPos = new WeakMap();

var _contextMenuComponent = new WeakMap();

var _components = new WeakMap();

var _connections = new WeakMap();

var _updateSVGViewBox = new WeakSet();

var _adaptSVGSize = new WeakSet();

var _onWheel = new WeakSet();

var _onPointerDown = new WeakSet();

var _onPointerUp = new WeakSet();

var _onPointerMove = new WeakSet();

var _onContextMenu = new WeakSet();

var Canvas = /*#__PURE__*/function () {
  /** The main svg element */

  /** A group under the main svg element to store connections */

  /** The current SVG box view left coord */

  /** The current SVG box view top coord */

  /** The current SVG box view width */

  /** The current SVG box view height */

  /**
   * Define the minimum SVG View Box size, actually means
   * the max level of zoom (in)
   */

  /**
   * Define the minimum SVG View Box size, actually means
   * the max level of zoom (out)
   */

  /** The user is dragging the canvas backgorund? */

  /** The point in which the drag was started */

  /** The component for the contextual menu */

  /** The list of components in the canvas */

  /** The list of connections between components in the canvas */

  /**
   * The constructor of the Canvas object. Initializes the SVG element,
   * set up all listeners to manage panning, zooming and selection.
   * @param {HTMLElement} el The parent element in which create the SVG element
   */
  function Canvas(el) {
    var _this = this;

    _classCallCheck(this, Canvas);

    _onContextMenu.add(this);

    _onPointerMove.add(this);

    _onPointerUp.add(this);

    _onPointerDown.add(this);

    _onWheel.add(this);

    _adaptSVGSize.add(this);

    _updateSVGViewBox.add(this);

    _svgEl.set(this, {
      writable: true,
      value: null
    });

    _connectionsEl.set(this, {
      writable: true,
      value: null
    });

    _vbX.set(this, {
      writable: true,
      value: 0
    });

    _vbY.set(this, {
      writable: true,
      value: 0
    });

    _vbWidth.set(this, {
      writable: true,
      value: 100
    });

    _vbHeight.set(this, {
      writable: true,
      value: 100
    });

    _minVBSize.set(this, {
      writable: true,
      value: 10
    });

    _maxVBSize.set(this, {
      writable: true,
      value: 50000
    });

    _dragging.set(this, {
      writable: true,
      value: false
    });

    _startDragPos.set(this, {
      writable: true,
      value: void 0
    });

    _contextMenuComponent.set(this, {
      writable: true,
      value: null
    });

    _components.set(this, {
      writable: true,
      value: []
    });

    _connections.set(this, {
      writable: true,
      value: []
    });

    // Create the main SVG element
    _classPrivateFieldSet(this, _svgEl, document.createElementNS("http://www.w3.org/2000/svg", "svg"));

    _classPrivateFieldGet(this, _svgEl).style.width = "100%";
    _classPrivateFieldGet(this, _svgEl).style.height = "100%";
    el.appendChild(_classPrivateFieldGet(this, _svgEl)); // Background color

    _classPrivateFieldGet(this, _svgEl).style["background-color"] = _components_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.CANVAS_BACKGROUND_COLOR; // Now create a "g" element that will be the parent of all connections. This is
    // important to guarantee that connections will be always behind components

    _classPrivateFieldSet(this, _connectionsEl, document.createElementNS("http://www.w3.org/2000/svg", "g"));

    _classPrivateFieldGet(this, _svgEl).appendChild(_classPrivateFieldGet(this, _connectionsEl));

    _classPrivateMethodGet(this, _adaptSVGSize, _adaptSVGSize2).call(this); // Define all pointer events to manager pan and zoom


    var self = this;
    window.addEventListener("resize", function () {
      _classPrivateMethodGet(self, _adaptSVGSize, _adaptSVGSize2).call(self);
    });

    _classPrivateFieldGet(this, _svgEl).addEventListener("wheel", function (e) {
      _classPrivateMethodGet(self, _onWheel, _onWheel2).call(self, e);
    });

    _classPrivateFieldGet(this, _svgEl).addEventListener("pointerdown", function (e) {
      _this.cancelContextMenu();

      _classPrivateMethodGet(self, _onPointerDown, _onPointerDown2).call(self, e);
    });

    _classPrivateFieldGet(this, _svgEl).addEventListener("pointerup", function (e) {
      _classPrivateMethodGet(self, _onPointerUp, _onPointerUp2).call(self, e);
    });

    _classPrivateFieldGet(this, _svgEl).addEventListener("pointermove", function (e) {
      _classPrivateMethodGet(self, _onPointerMove, _onPointerMove2).call(self, e);
    });

    _classPrivateFieldGet(this, _svgEl).addEventListener("contextmenu", function (e) {
      _classPrivateMethodGet(self, _onContextMenu, _onContextMenu2).call(self, e);
    });
  }
  /**
   * Returns the minimum SVG View Box size, actually means
   * the max level of zoom (in)
   */


  _createClass(Canvas, [{
    key: "clientToSvgPoint",

    /**
     * This method is responsible for translate client (browser) coordinates
     * to SVG space coordinates
     * @param {number} clientX The client x coordinate
     * @param {number} clientY The client y coordinate
     */
    value: function clientToSvgPoint(clientX, clientY) {
      // Create a point in SVG space
      var p = _classPrivateFieldGet(this, _svgEl).createSVGPoint();

      p.x = clientX;
      p.y = clientY; // Translate coordinates using the SVG transofrmation matrix

      var pSVG = p.matrixTransform(_classPrivateFieldGet(this, _svgEl).getScreenCTM().inverse());
      return pSVG;
    }
    /**
     * Manage the mousedown event to implement pan
     * @param {Event} e The mousedown event
     */

  }, {
    key: "componentFromPosition",

    /**
     * This method detect a cnodes-ui component inside the canvas
     * at specified location (x,y). Optionally the user can request
     * only sockets component, this is useful when you want to search
     * a possible connection peer during the link process
     * @param {number} x The x coordinate in the canvas
     * @param {number} y Te y coordinate in the canvas
     * @param {boolean} onlySockets If true, this method search only for socket components
     */
    value: function componentFromPosition(x, y) {
      var onlySockets = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // Get the DOM element at x,y in client space
      var pointedEl = document.elementFromPoint(x, y); // Searching for an element with the property "componentRef". When cnodes-ui
      // add a component, insert this property inside the SVG root element of the component

      while (pointedEl) {
        // Traverse the DOM tree
        if (pointedEl.componentRef && (!onlySockets || pointedEl.componentRef instanceof _socket__WEBPACK_IMPORTED_MODULE_3__.SocketComponent)) {
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

  }, {
    key: "addConnection",
    value: function addConnection(connection) {
      _classPrivateFieldGet(this, _connections).push(connection);

      connection.canvas = this;

      _classPrivateFieldGet(this, _connectionsEl).appendChild(connection.connectionEl); // Update connected sockets


      connection.source.updateSVGElement();
      connection.target.updateSVGElement();
    }
    /**
     * Remove a connection from the canvas, also remove the related SVG element
     * @param {Connection} connection The connection to remove
     */

  }, {
    key: "removeConnection",
    value: function removeConnection(connection) {
      // Signal the connection that will be destroyed
      connection.destroy();

      _classPrivateFieldSet(this, _connections, _classPrivateFieldGet(this, _connections).filter(function (c) {
        return c !== connection;
      }));

      _classPrivateFieldGet(this, _connectionsEl).removeChild(connection.connectionEl); // Update connected sockets


      connection.source.updateSVGElement();
      connection.target.updateSVGElement();
    }
    /**
     * Checks if there is a connection between sockets already
     * @param {SocketComponent} socket1 First socket component
     * @param {SocketComponent} socket2 Second socket component
     */

  }, {
    key: "alreadyConnected",
    value: function alreadyConnected(socket1, socket2) {
      return this.connections.findIndex(function (c) {
        return c.source === socket1 && c.target === socket2 || c.source === socket2 && c.target === socket1;
      }) !== -1;
    }
    /**
     * Add a new component to the canvas
     * @param {Component} component Component to add
     */

  }, {
    key: "addComponent",
    value: function addComponent(component) {
      _classPrivateFieldGet(this, _components).push(component);

      component.canvas = this;

      _classPrivateFieldGet(this, _svgEl).appendChild(component.componentEl);
    }
    /**
     * Remove a component from the canvas
     * @param {Component} component Component to remove
     */

  }, {
    key: "removeComponent",
    value: function removeComponent(component) {
      // Remove related connections
      var _iterator = _createForOfIteratorHelper(component.components),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var s = _step.value;

          if (s instanceof _socket__WEBPACK_IMPORTED_MODULE_3__.SocketComponent) {
            var _iterator2 = _createForOfIteratorHelper(this.getConnectionsFor(s)),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var c = _step2.value;
                this.removeConnection(c);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } // Signal component that will be removed

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      component.destroy(); // Remove the component from the SVG space

      this.components = _classPrivateFieldGet(this, _components).filter(function (c) {
        return c !== component;
      });

      _classPrivateFieldGet(this, _svgEl).removeChild(component.componentEl);
    }
    /**
     * Update all connections in terms of SVG properties. This is
     * important because when components are moved, this ensures that
     * connections will follow them
     */

  }, {
    key: "updateAllConnections",
    value: function updateAllConnections() {
      var _iterator3 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _connections)),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var connection = _step3.value;
          connection.updateSVGElement();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    /**
     * This method extract all connections in the canvas, that have
     * the source or the target SocketComponent as endpoint
     * @param {SocketComponent} socket The socket component for which search the connection
     */

  }, {
    key: "getConnectionsFor",
    value: function getConnectionsFor(socket) {
      return _classPrivateFieldGet(this, _connections).filter(function (c) {
        return c.source === socket || c.target === socket;
      });
    }
    /**
     * Removes all connections from the canvas
     */

  }, {
    key: "removeAllConnections",
    value: function removeAllConnections() {
      while (_classPrivateFieldGet(this, _connections).length > 0) {
        this.removeConnection(_classPrivateFieldGet(this, _connections)[0]);
      }
    }
    /**
     * Removes all components from the canvas
     */

  }, {
    key: "removeAllComponents",
    value: function removeAllComponents() {
      while (_classPrivateFieldGet(this, _components).length > 0) {
        this.removeComponent(_classPrivateFieldGet(this, _components)[0]);
      }
    }
    /**
     * Remoives all connections and all components from the canvas
     */

  }, {
    key: "removeAll",
    value: function removeAll() {
      this.removeAllConnections();
      this.removeAllComponents();
    }
    /**
     * Return a list of MenuItem for the context menu
     */

  }, {
    key: "getCanvasContextMenuItems",
    value: function getCanvasContextMenuItems() {
      return null;
    }
    /**
     * Shows the context menu retated to the component or the canvas
     * @param {MenuItem[]} items Items that compose the menu
     * @param {number} x The x coordinate for the menu
     * @param {number} y The y coordinate for the menu
     */

  }, {
    key: "showContextMenu",
    value: function showContextMenu(items, x, y) {
      throw new Error("You must override this method in a subclass!");
    }
    /**
     * Cancels the current open context menu, and closes it
     */

  }, {
    key: "cancelContextMenu",
    value: function cancelContextMenu() {
      if (_classPrivateFieldGet(this, _contextMenuComponent)) {
        this.removeComponent(_classPrivateFieldGet(this, _contextMenuComponent));
        this.contextMenuComponent = null;
      }
    }
  }, {
    key: "minVBSize",
    get: function get() {
      return _classPrivateFieldGet(this, _minVBSize);
    }
    /**
     * Sets the minimum SVG View Box size, actually means
     * the max level of zoom (in)
     */
    ,
    set: function set(val) {
      _classPrivateFieldSet(this, _minVBSize, val);
    }
    /**
     * Returns the minimum SVG View Box size, actually means
     * the max level of zoom (out)
     */

  }, {
    key: "maxVBSize",
    get: function get() {
      return _classPrivateFieldGet(this, _maxVBSize);
    }
    /**
     * Sets the minimum SVG View Box size, actually means
     * the max level of zoom (out)
     */
    ,
    set: function set(val) {
      _classPrivateFieldSet(this, _maxVBSize, val);
    }
  }, {
    key: "components",
    get: function get() {
      return _classPrivateFieldGet(this, _components);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _components, val);
    }
  }, {
    key: "connections",
    get: function get() {
      return _classPrivateFieldGet(this, _connections);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _connections, val);
    }
  }, {
    key: "contextMenuComponent",
    get: function get() {
      return _classPrivateFieldGet(this, _contextMenuComponent);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _contextMenuComponent, val);
    }
    /**
     * Return the internal SVG element
     */

  }, {
    key: "svgEl",
    get: function get() {
      return _classPrivateFieldGet(this, _svgEl);
    }
    /**
     * Return the internal SVG connections element
     */

  }, {
    key: "connectionsEl",
    get: function get() {
      return _classPrivateFieldGet(this, _connectionsEl);
    }
    /**
     * Updates the box view coordinates based on coordinates
     * stored in private fields #vbX, #vbY, #vbWidth and #vbHeight
     */

  }]);

  return Canvas;
}();

var _updateSVGViewBox2 = function _updateSVGViewBox2() {
  _classPrivateFieldGet(this, _svgEl).setAttribute("viewBox", "".concat(_classPrivateFieldGet(this, _vbX), " ").concat(_classPrivateFieldGet(this, _vbY), " ").concat(_classPrivateFieldGet(this, _vbWidth), " ").concat(_classPrivateFieldGet(this, _vbHeight)));
};

var _adaptSVGSize2 = function _adaptSVGSize2() {
  _classPrivateFieldSet(this, _vbWidth, _classPrivateFieldGet(this, _svgEl).parentElement.clientWidth);

  _classPrivateFieldSet(this, _vbHeight, _classPrivateFieldGet(this, _svgEl).parentElement.clientHeight);

  _classPrivateMethodGet(this, _updateSVGViewBox, _updateSVGViewBox2).call(this);
};

var _onWheel2 = function _onWheel2(e) {
  var p = this.clientToSvgPoint(e.clientX, e.clientY);
  var zoomFactor = 0.003;
  var zoom = 1 + e.deltaY * zoomFactor;
  var newWidth = _classPrivateFieldGet(this, _vbWidth) * zoom;
  var newHeight = _classPrivateFieldGet(this, _vbHeight) * zoom;
  if (newHeight < _classPrivateFieldGet(this, _minVBSize)) return;
  if (newWidth < _classPrivateFieldGet(this, _minVBSize)) return;
  if (newHeight > _classPrivateFieldGet(this, _maxVBSize)) return;
  if (newWidth > _classPrivateFieldGet(this, _maxVBSize)) return;

  var newLeft = _classPrivateFieldGet(this, _vbX) - (newWidth - _classPrivateFieldGet(this, _vbWidth)) * ((p.x - _classPrivateFieldGet(this, _vbX)) / _classPrivateFieldGet(this, _vbWidth));

  var newTop = _classPrivateFieldGet(this, _vbY) - (newHeight - _classPrivateFieldGet(this, _vbHeight)) * ((p.y - _classPrivateFieldGet(this, _vbY)) / _classPrivateFieldGet(this, _vbHeight));

  _classPrivateFieldSet(this, _vbHeight, newHeight);

  _classPrivateFieldSet(this, _vbWidth, newWidth);

  _classPrivateFieldSet(this, _vbX, newLeft);

  _classPrivateFieldSet(this, _vbY, newTop);

  _classPrivateMethodGet(this, _updateSVGViewBox, _updateSVGViewBox2).call(this);

  e.stopPropagation();
};

var _onPointerDown2 = function _onPointerDown2(e) {
  if (e.button === 0) {
    _classPrivateFieldSet(this, _dragging, true);

    _classPrivateFieldSet(this, _startDragPos, this.clientToSvgPoint(e.clientX, e.clientY));

    _classPrivateFieldGet(this, _svgEl).setPointerCapture(e.pointerId);
  }
};

var _onPointerUp2 = function _onPointerUp2(e) {
  if (e.button === 0) {
    _classPrivateFieldSet(this, _dragging, false);

    _classPrivateFieldGet(this, _svgEl).releasePointerCapture(e.pointerId);
  }
};

var _onPointerMove2 = function _onPointerMove2(e) {
  if (!_classPrivateFieldGet(this, _dragging)) {
    return;
  }

  var movePoint = this.clientToSvgPoint(e.clientX, e.clientY);

  var xDiff = movePoint.x - _classPrivateFieldGet(this, _startDragPos).x;

  var yDiff = movePoint.y - _classPrivateFieldGet(this, _startDragPos).y;

  _classPrivateFieldSet(this, _vbX, _classPrivateFieldGet(this, _vbX) - xDiff);

  _classPrivateFieldSet(this, _vbY, _classPrivateFieldGet(this, _vbY) - yDiff);

  _classPrivateMethodGet(this, _updateSVGViewBox, _updateSVGViewBox2).call(this);
};

var _onContextMenu2 = function _onContextMenu2(e) {
  e.preventDefault();
  e.stopPropagation();
  var component = this.componentFromPosition(e.clientX, e.clientY);
  var p = this.clientToSvgPoint(e.clientX, e.clientY);
  var items;

  if (!component) {
    items = this.getCanvasContextMenuItems();
  } else {
    items = component.getContextMenuItems();
  }

  this.showContextMenu(items, p.x, p.y);
};

/***/ }),

/***/ "./src/canvas/component.js":
/*!*********************************!*\
  !*** ./src/canvas/component.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => /* binding */ Component
/* harmony export */ });
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position */ "./src/canvas/position.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

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

var _canvas = new WeakMap();

var _componentEl = new WeakMap();

var _parent = new WeakMap();

var _moveable = new WeakMap();

var _pos = new WeakMap();

var _moving = new WeakMap();

var _startMovePos = new WeakMap();

var _startMovePointerPos = new WeakMap();

var _components = new WeakMap();

var _onPointerDown = new WeakSet();

var _onPointerUp = new WeakSet();

var _onPointerMove = new WeakSet();

var Component = /*#__PURE__*/function () {
  /** A reference to the enclosing canvas */

  /** A reference to the SVG element that implement the component */

  /** The parent component if there is one */

  /** Is this component moveable? */

  /** The position fo this component inside the canvas, in SVG coordinates */

  /** The component is actually moving */

  /** A reference to the position of the component at the time hi starts moving */

  /** The pointer position at the time in which the component starts moving */

  /** The list of eventual child components */
  function Component() {
    _classCallCheck(this, Component);

    _onPointerMove.add(this);

    _onPointerUp.add(this);

    _onPointerDown.add(this);

    _canvas.set(this, {
      writable: true,
      value: null
    });

    _componentEl.set(this, {
      writable: true,
      value: null
    });

    _parent.set(this, {
      writable: true,
      value: null
    });

    _moveable.set(this, {
      writable: true,
      value: true
    });

    _pos.set(this, {
      writable: true,
      value: new _position__WEBPACK_IMPORTED_MODULE_0__.Position(0, 0)
    });

    _moving.set(this, {
      writable: true,
      value: false
    });

    _startMovePos.set(this, {
      writable: true,
      value: null
    });

    _startMovePointerPos.set(this, {
      writable: true,
      value: null
    });

    _components.set(this, {
      writable: true,
      value: []
    });
  }
  /**
   * Sets up the component. The component creation follow a specific flow.
   * The user that creates the component have to call this method after, to
   * initializes the internal SVG component and optionally installs pointer
   * event listeners to manage moving.
   */


  _createClass(Component, [{
    key: "setup",
    value: function setup() {
      // Create the SVG element. A subclass must override this method
      // to define the graphical aspect of the component
      _classPrivateFieldSet(this, _componentEl, this.createElement());

      var self = this; // Register a reference of this component inside the HTML element

      _classPrivateFieldGet(this, _componentEl).componentRef = this; // Cancel context menu on any pointerdown event

      _classPrivateFieldGet(this, _componentEl).addEventListener("pointerdown", function (e) {
        self.canvas.cancelContextMenu();
      });

      if (this.moveable) {
        _classPrivateFieldGet(this, _componentEl).addEventListener("pointerdown", function (e) {
          _classPrivateMethodGet(self, _onPointerDown, _onPointerDown2).call(self, e);
        });

        _classPrivateFieldGet(this, _componentEl).addEventListener("pointerup", function (e) {
          _classPrivateMethodGet(self, _onPointerUp, _onPointerUp2).call(self, e);
        });

        _classPrivateFieldGet(this, _componentEl).addEventListener("pointermove", function (e) {
          _classPrivateMethodGet(self, _onPointerMove, _onPointerMove2).call(self, e);
        });
      }
    }
  }, {
    key: "getContextMenuItems",

    /**
     * Returns the array of context menu items. If the component
     * returns null, no contextual menu is shown
     */
    value: function getContextMenuItems() {
      return null;
    }
    /**
     * This method must be overridden in a child concrete class.
     * The setup() mthod calls this one during the creation process
     */

  }, {
    key: "createElement",
    value: function createElement() {
      throw new Error("Element must be defined in a subclass!");
    }
    /**
     * Returns the absolute position of this component, in terms
     * of canvas coordinates, by travering the child-parent component
     * hierarchy
     */

  }, {
    key: "updateSVGElement",

    /**
     * Update the component element according to x and y local coordinates,
     * if this component is a child component, coordinates in canvas space
     * are computed
     */
    value: function updateSVGElement() {
      var pos = this.absPos;

      _classPrivateFieldGet(this, _componentEl).setAttribute("transform", "translate(".concat(pos.x, ",").concat(pos.y, ")")); // Also update all children


      var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(this, _components)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var c = _step.value;
          c.updateSVGElement();
        } // Update all connections

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (this.canvas) {
        this.canvas.updateAllConnections();
      }
    }
    /**
     * Add a new component as child component.
     * WARNING: before attach child components, this component
     * must to be attached to the canvas itself, otherwise the method
     * fails
     * @param {Component} component Component to add
     */

  }, {
    key: "addComponent",
    value: function addComponent(component) {
      _classPrivateFieldGet(this, _components).push(component);

      component.parent = this;
      component.canvas = this.canvas;
      this.svgEl.appendChild(component.componentEl);
      component.updateSVGElement();
    }
    /**
     * Remove a child subcomponent
     * @param {Component} component The component to remove
     */

  }, {
    key: "removeComponent",
    value: function removeComponent(component) {
      this.components = _classPrivateFieldGet(this, _components).filter(function (c) {
        return c !== component;
      });
      component.destroy();
      this.svgEl.removeChild(component.componentEl);
    }
    /**
     * This method is called when this component is removed
     * from the canvas of from its parent component
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this = this;

      // Removes all subcomponents
      this.components.forEach(function (c) {
        return _this.removeComponent(c);
      });
    }
  }, {
    key: "pos",
    get: function get() {
      return _classPrivateFieldGet(this, _pos);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _pos, val);

      this.updateSVGElement();
    }
  }, {
    key: "canvas",
    get: function get() {
      return _classPrivateFieldGet(this, _canvas);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _canvas, val);
    }
  }, {
    key: "componentEl",
    get: function get() {
      return _classPrivateFieldGet(this, _componentEl);
    }
  }, {
    key: "components",
    get: function get() {
      return _classPrivateFieldGet(this, _components);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _components, val);
    }
  }, {
    key: "svgEl",
    get: function get() {
      return _classPrivateFieldGet(this, _canvas).svgEl;
    }
  }, {
    key: "moveable",
    get: function get() {
      return _classPrivateFieldGet(this, _moveable);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _moveable, val);
    }
  }, {
    key: "parent",
    get: function get() {
      return _classPrivateFieldGet(this, _parent);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _parent, val);
    }
    /**
     * Manages the mousedown event to implement moving
     * @param {Event} e The mousedown event
     */

  }, {
    key: "absPos",
    get: function get() {
      var pos = new _position__WEBPACK_IMPORTED_MODULE_0__.Position(_classPrivateFieldGet(this, _pos).x, _classPrivateFieldGet(this, _pos).y);

      if (_classPrivateFieldGet(this, _parent)) {
        var parentPos = _classPrivateFieldGet(this, _parent).absPos;

        pos = pos.add(parentPos);
      }

      return pos;
    }
  }]);

  return Component;
}();

var _onPointerDown2 = function _onPointerDown2(e) {
  if (e.button === 0) {
    if (_classPrivateFieldGet(this, _moveable)) {
      _classPrivateFieldSet(this, _moving, true);

      _classPrivateFieldSet(this, _startMovePos, _classPrivateFieldGet(this, _canvas).clientToSvgPoint(e.clientX, e.clientY));

      _classPrivateFieldSet(this, _startMovePointerPos, _classPrivateFieldGet(this, _canvas).svgEl.createSVGPoint());

      _classPrivateFieldGet(this, _startMovePointerPos).x = _classPrivateFieldGet(this, _pos).x;
      _classPrivateFieldGet(this, _startMovePointerPos).y = _classPrivateFieldGet(this, _pos).y;

      _classPrivateFieldGet(this, _componentEl).setPointerCapture(e.pointerId);

      e.stopPropagation();
    }
  }
};

var _onPointerUp2 = function _onPointerUp2(e) {
  if (_classPrivateFieldGet(this, _moveable) && e.button === 0) {
    _classPrivateFieldSet(this, _moving, false);

    _classPrivateFieldGet(this, _componentEl).releasePointerCapture(e.pointerId);

    e.stopPropagation();
  }
};

var _onPointerMove2 = function _onPointerMove2(e) {
  if (_classPrivateFieldGet(this, _moveable)) {
    if (!_classPrivateFieldGet(this, _moving)) {
      return;
    }

    var movePoint = _classPrivateFieldGet(this, _canvas).clientToSvgPoint(e.clientX, e.clientY);

    var xDiff = movePoint.x - _classPrivateFieldGet(this, _startMovePos).x;

    var yDiff = movePoint.y - _classPrivateFieldGet(this, _startMovePos).y; // This effectively move the element


    _classPrivateFieldGet(this, _pos).x = xDiff + _classPrivateFieldGet(this, _startMovePointerPos).x;
    _classPrivateFieldGet(this, _pos).y = yDiff + _classPrivateFieldGet(this, _startMovePointerPos).y;
    this.updateSVGElement();
    e.stopPropagation();
  }
};

/***/ }),

/***/ "./src/canvas/connection.js":
/*!**********************************!*\
  !*** ./src/canvas/connection.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Connection": () => /* binding */ Connection
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _canvas = new WeakMap();

var _connectionEl = new WeakMap();

var _source = new WeakMap();

var _target = new WeakMap();

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

/**
 * This is tha base class of all connections. A Connection is always a
 * link from two sockets. Sockets are special subclass of components, tipically
 * child of base components
 */
var Connection = /*#__PURE__*/function () {
  /** A reference to the enclosing canvas */

  /** A reference to the SVG element of this connection */

  /** The source socket component for the link */

  /** Yhe destination socket component for the link */

  /**
   * Construct a connection instance by setting its source and target
   */
  function Connection(source, target) {
    _classCallCheck(this, Connection);

    _canvas.set(this, {
      writable: true,
      value: null
    });

    _connectionEl.set(this, {
      writable: true,
      value: null
    });

    _source.set(this, {
      writable: true,
      value: null
    });

    _target.set(this, {
      writable: true,
      value: null
    });

    _classPrivateFieldSet(this, _source, source);

    _classPrivateFieldSet(this, _target, target);

    this.source.updateSVGElement();
    this.target.updateSVGElement();
  }
  /**
   * Sets up this connection. In terms of construction flow
   * this means create the SVG element that will be shown
   */


  _createClass(Connection, [{
    key: "setup",
    value: function setup() {
      _classPrivateFieldSet(this, _connectionEl, this.createElement());
    }
  }, {
    key: "createElement",

    /**
     * This method is responsible to create the SVG element
     * for display the connetion. Subclasses must override this method
     */
    value: function createElement() {
      throw new Error("Element must be defined in a subclass!");
    }
    /**
     * This method is called when the connetion needs to be updated.
     * This happens when sockets and/or components connected to this
     * object where moved
     */

  }, {
    key: "updateSVGElement",
    value: function updateSVGElement() {
      throw new Error("Element must be defined in a subclass!");
    }
    /**
     * This method is called when the connection is removed from the canvas
     */

  }, {
    key: "destroy",
    value: function destroy() {}
  }, {
    key: "canvas",
    get: function get() {
      return _classPrivateFieldGet(this, _canvas);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _canvas, val);
    }
  }, {
    key: "source",
    get: function get() {
      return _classPrivateFieldGet(this, _source);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _source, val);
    }
  }, {
    key: "target",
    get: function get() {
      return _classPrivateFieldGet(this, _target);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _target, val);
    }
  }, {
    key: "connectionEl",
    get: function get() {
      return _classPrivateFieldGet(this, _connectionEl);
    }
  }, {
    key: "svgEl",
    get: function get() {
      return _classPrivateFieldGet(this, _canvas).svgEl;
    }
  }]);

  return Connection;
}();

/***/ }),

/***/ "./src/canvas/menu.js":
/*!****************************!*\
  !*** ./src/canvas/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItem": () => /* binding */ MenuItem,
/* harmony export */   "Menu": () => /* binding */ Menu
/* harmony export */ });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/canvas/canvas.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/canvas/component.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./position */ "./src/canvas/position.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class represents a single Menu item.
 * A menu itemhas a text, and a callback to call on click
 */

var _callback = new WeakMap();

var _text = new WeakMap();

var MenuItem = /*#__PURE__*/function () {
  /** The "click" callback */

  /** The text for the item */

  /**
   * Constructs a menu item
   * @param {string} text Title of the menu item
   * @param {function} callback The callback function to call on click event
   */
  function MenuItem(text, callback) {
    _classCallCheck(this, MenuItem);

    _callback.set(this, {
      writable: true,
      value: null
    });

    _text.set(this, {
      writable: true,
      value: ""
    });

    _classPrivateFieldSet(this, _text, text);

    _classPrivateFieldSet(this, _callback, callback);
  }

  _createClass(MenuItem, [{
    key: "text",
    get: function get() {
      return _classPrivateFieldGet(this, _text);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _text, val);
    }
  }, {
    key: "callback",
    get: function get() {
      return _classPrivateFieldGet(this, _callback);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _callback, val);
    }
  }]);

  return MenuItem;
}();
/**
 * This class implements a menu
 */

var _items = new WeakMap();

var Menu = /*#__PURE__*/function (_Component) {
  _inherits(Menu, _Component);

  var _super = _createSuper(Menu);

  /** Menu items */

  /**
   * Construct a new Menu for the canvas
   * @param {Canvas} canvas The canvas
   * @param {MenuItem[]} items The menu items
   */
  function Menu(canvas, items) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this);

    _items.set(_assertThisInitialized(_this), {
      writable: true,
      value: []
    });

    _this.moveable = false;
    _this.canvas = canvas;

    _classPrivateFieldSet(_assertThisInitialized(_this), _items, items);

    return _this;
  }

  _createClass(Menu, [{
    key: "show",

    /**
     * Show the menu
     * @param {number} x The x coordinate
     * @param {number} y The y coordinate
     */
    value: function show(x, y) {
      this.setup();
      canvas.addComponent(this);
      this.pos = new _position__WEBPACK_IMPORTED_MODULE_2__.Position(x, y);
    }
    /**
     * Set up the container
     */

  }, {
    key: "setup",
    value: function setup() {
      _get(_getPrototypeOf(Menu.prototype), "setup", this).call(this);
    }
    /**
     * Computes the menu vertical size, based on menu items
     */

  }, {
    key: "createElement",

    /**
     * Lets create the SVG element
     */
    value: function createElement() {
      throw new Error("A subclass must implement this method!");
    }
  }, {
    key: "items",
    get: function get() {
      return _classPrivateFieldGet(this, _items);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _items, val);
    }
  }, {
    key: "height",
    get: function get() {
      throw new Error("A subclass must implement this method!");
    }
  }]);

  return Menu;
}(_component__WEBPACK_IMPORTED_MODULE_1__.Component);

/***/ }),

/***/ "./src/canvas/position.js":
/*!********************************!*\
  !*** ./src/canvas/position.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Position": () => /* binding */ Position
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _x = new WeakMap();

var _y = new WeakMap();

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

/**
 * A class that represents a position in SVG space
 */
var Position = /*#__PURE__*/function () {
  /** The x coordinate */

  /** The y coordinate */

  /**
   * Construct a new Position
   * @param {number} x The x coordinate
   * @param {number} y The y coordinate
   */
  function Position(x, y) {
    _classCallCheck(this, Position);

    _x.set(this, {
      writable: true,
      value: 0
    });

    _y.set(this, {
      writable: true,
      value: 0
    });

    _classPrivateFieldSet(this, _x, x);

    _classPrivateFieldSet(this, _y, y);
  }

  _createClass(Position, [{
    key: "add",

    /**
     * Return a new position by adding another instance of
     * position coordinate by coordinate
     * @param {Position} pos
     */
    value: function add(pos) {
      return new Position(_classPrivateFieldGet(this, _x) + pos.x, _classPrivateFieldGet(this, _y) + pos.y);
    }
    /**
     * Return a new position by subtracting another instance of
     * position coordinate by coordinate
     * @param {Position} pos
     */

  }, {
    key: "sub",
    value: function sub(pos) {
      return new Position(_classPrivateFieldGet(this, _x) - pos.x, _classPrivateFieldGet(this, _y) - pos.y);
    }
  }, {
    key: "x",
    get: function get() {
      return _classPrivateFieldGet(this, _x);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _x, val);
    }
  }, {
    key: "y",
    get: function get() {
      return _classPrivateFieldGet(this, _y);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _y, val);
    }
  }]);

  return Position;
}();

/***/ }),

/***/ "./src/canvas/socket.js":
/*!******************************!*\
  !*** ./src/canvas/socket.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketComponent": () => /* binding */ SocketComponent
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/canvas/component.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./position */ "./src/canvas/position.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */


/**
 * A Socket is a special case of component. Tipically, to design
 * a component node in canvas-ui, you define a base component, and attach
 * to it a list of subcomponents that derives from Socket class, for
 * give the user the chance to link nodes
 */

var _connecting = new WeakMap();

var _currentPeerSocketComponent = new WeakMap();

var _tempConnectionEl = new WeakMap();

var SocketComponent = /*#__PURE__*/function (_Component) {
  _inherits(SocketComponent, _Component);

  var _super = _createSuper(SocketComponent);

  /** This socket is connecting, the user is dragging with the mouse */

  /** The last (other) socket pointed by the mouse cursor while connecting */

  /** This SVG component is used to display a temporary floating link during the connection */
  function SocketComponent() {
    var _this;

    _classCallCheck(this, SocketComponent);

    _this = _super.call(this);

    _connecting.set(_assertThisInitialized(_this), {
      writable: true,
      value: false
    });

    _currentPeerSocketComponent.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    _tempConnectionEl.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    return _this;
  }

  _createClass(SocketComponent, [{
    key: "setup",

    /**
     * Sets up a socket. A socket is not movable by default and
     * calls the createElement() method to prepare the SVG element
     */
    value: function setup() {
      this.moveable = false;

      _get(_getPrototypeOf(SocketComponent.prototype), "setup", this).call(this); // All sockets does not manage pointer events so events
      // can pass through to the base componentEl element....


      this.componentEl.style["pointer-events"] = "none"; // ... but the dragEle element (that by default is the entire componentEl ;-)

      this.dragElement.style["pointer-events"] = "auto";
      var self = this;
      this.dragElement.addEventListener("pointerdown", function (e) {
        self.onPointerDown(e);
      });
      this.dragElement.addEventListener("pointerup", function (e) {
        self.onPointerUp(e);
      });
      this.dragElement.addEventListener("pointermove", function (e) {
        self.onPointerMove(e);
      });
    }
    /**
     * Returns the element that responds to pointer events. By
     * default this is the entire root element
     */

  }, {
    key: "onPointerDown",

    /**
     * Manages the pointerdown event to implement the start of the
     * drag-and-link process. If the socket is a one-link socket, such as
     * a "next" connection to another node, a pointerdown should disconnect
     * the old connection and restart the dragging of the peek socket, to give
     * the user the chance to connect the peer socket to another one.
     * If the socket was not already connected, call the connectionStarted()
     * method that will be overridden in subclasses
     * @param {Event} e The pointerdown event
     */
    value: function onPointerDown(e) {
      if (e.button === 0) {
        // Cancel previous context menu
        if (_classPrivateFieldGet(this, _tempConnectionEl)) {
          this.canvas.cancelContextMenu();
          this.canvas.connectionsEl.removeChild(_classPrivateFieldGet(this, _tempConnectionEl));

          _classPrivateFieldSet(this, _tempConnectionEl, null);
        }

        if (!this.hasSingleConnection || !this.isConnected) {
          _classPrivateFieldSet(this, _connecting, true);

          this.dragElement.setPointerCapture(e.pointerId);
          e.stopPropagation(); // Connect action is started

          this.connectionStarted();
        } else {
          var peerComponent = this.getSinglePeerComponent();
          peerComponent.onPointerDown(e);
          var con = this.canvas.getConnectionsFor(this)[0];
          this.canvas.removeConnection(con);
          e.stopPropagation();
        }
      }
    }
    /**
     * This method manages the pointerup event to implement
     * the final part of the connection. If the pointer is overing a
     * valid peer socket, then the connection ca be done, and the
     * connectionDone() method can be call. Otherwise the
     * connectionEndedOutOfSocket() is called.
     * @param {Event} e The pointerup event
     */

  }, {
    key: "onPointerUp",
    value: function onPointerUp(e) {
      if (e.button === 0) {
        _classPrivateFieldSet(this, _connecting, false);

        this.dragElement.releasePointerCapture(e.pointerId);
        e.stopPropagation();

        if (_classPrivateFieldGet(this, _currentPeerSocketComponent)) {
          var connectingSocketComponent = _classPrivateFieldGet(this, _currentPeerSocketComponent);

          _classPrivateFieldSet(this, _currentPeerSocketComponent, null);

          this.connectionDone(connectingSocketComponent);
        } else {
          this.connectionEndedOutOfSocket(e);
        }
      }
    }
    /**
     * This method manages the pointermove event to implement the
     * middle part of the connection process. During this phase, cnodes-ui
     * check if the pointer is overing a valid peer socket component, and
     * if true, show the temprary link in a "valid state", such as a special color
     * of the stroke stroke, and store the peer component in the currentPeerSocketComponent
     * for future use.
     * @param {Event} e The pointermove event
     */

  }, {
    key: "onPointerMove",
    value: function onPointerMove(e) {
      if (_classPrivateFieldGet(this, _connecting)) {
        // Test if a socket is pointed
        var pointedComponent = this.canvas.componentFromPosition(e.clientX, e.clientY, true);
        var p = this.canvas.clientToSvgPoint(e.clientX, e.clientY);

        if (pointedComponent) {
          if (this.canAcceptPeerSocket(pointedComponent)) {
            this.connectionMoving(p.x, p.y, false);

            _classPrivateFieldSet(this, _currentPeerSocketComponent, pointedComponent);
          } else {
            this.connectionMoving(p.x, p.y, true);

            _classPrivateFieldSet(this, _currentPeerSocketComponent, null);
          }
        } else {
          this.connectionMoving(p.x, p.y, false);

          _classPrivateFieldSet(this, _currentPeerSocketComponent, null);
        }

        e.stopPropagation();
      }
    }
    /**
     * Returns the array of context menu items. If the component
     * returns null, no contextual menu is shown
     */

  }, {
    key: "getContextMenuItems",
    value: function getContextMenuItems() {
      return null;
    }
    /**
     * The user has began dragging the socket to create a connection
     */

  }, {
    key: "connectionStarted",
    value: function connectionStarted() {
      _classPrivateFieldSet(this, _tempConnectionEl, document.createElementNS("http://www.w3.org/2000/svg", "path"));

      _classPrivateFieldGet(this, _tempConnectionEl).setAttribute("d", "\n      M ".concat(this.absPos.x, " ").concat(this.absPos.y, "\n      "));

      this.canvas.connectionsEl.appendChild(_classPrivateFieldGet(this, _tempConnectionEl));
    }
    /**
     * The user is moving the pointer around, with a connection pending
     * @param {number} x The x coordinate in SVG space
     * @param {number} y The y coordinate in SVG space
     * @param {boolean} invalid true if the pointer is overing a unacceptable socket
     */

  }, {
    key: "connectionMoving",
    value: function connectionMoving(x, y, invalid) {
      var sourcePoint = new _position__WEBPACK_IMPORTED_MODULE_1__.Position(this.absPos.x, this.absPos.y);
      var targetPoint = new _position__WEBPACK_IMPORTED_MODULE_1__.Position(this.currentPeerSocketComponent ? this.currentPeerSocketComponent.absPos.x : x, this.currentPeerSocketComponent ? this.currentPeerSocketComponent.absPos.y : y);

      _classPrivateFieldGet(this, _tempConnectionEl).setAttribute("d", "\n      M ".concat(sourcePoint.x, " ").concat(sourcePoint.y, "\n      L ").concat(targetPoint.x, " ").concat(targetPoint.y, "\n    "));

      _classPrivateFieldGet(this, _tempConnectionEl).setAttribute("stroke-width", 2);

      _classPrivateFieldGet(this, _tempConnectionEl).setAttribute("stroke", "black");

      _classPrivateFieldGet(this, _tempConnectionEl).setAttribute("fill", "transparent");
    }
    /**
     * The user has completed a valid connection
     * @param {SocketComponent} socketComp Peer socket to connect
     */

  }, {
    key: "connectionDone",
    value: function connectionDone(socketComp) {
      this.canvas.connectionsEl.removeChild(_classPrivateFieldGet(this, _tempConnectionEl));

      _classPrivateFieldSet(this, _tempConnectionEl, null);
    }
    /**
     * The user has released the pointer button out of a valid socket,
     * so by default, cancel the connection
     * @param {Event} e The event pointerup
     */

  }, {
    key: "connectionEndedOutOfSocket",
    value: function connectionEndedOutOfSocket(e) {
      this.canvas.connectionsEl.removeChild(_classPrivateFieldGet(this, _tempConnectionEl));

      _classPrivateFieldSet(this, _tempConnectionEl, null);
    }
    /**
     * Query if this socket could accept a connection with
     * a peer socket passed as parmeter
     * @param {SocketComponent} socketComp Peer socket to connect
     */

  }, {
    key: "canAcceptPeerSocket",
    value: function canAcceptPeerSocket(socketComp) {
      throw new Error("This method must be overridden in a subclass!");
    }
    /**
     * Return true if this socket only support one connection at most
     */

  }, {
    key: "getSinglePeerComponent",

    /**
     * Return the peer component of the socket in case
     * of this socket is a single connection. Otherwise return null
     */
    value: function getSinglePeerComponent() {
      if (!this.hasSingleConnection) {
        return null;
      } else {
        var con = this.canvas.getConnectionsFor(this)[0];

        if (this === con.source) {
          return con.target;
        } else {
          return con.source;
        }
      }
    }
  }, {
    key: "connecting",
    get: function get() {
      return _classPrivateFieldGet(this, _connecting);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _connecting, val);
    }
  }, {
    key: "currentPeerSocketComponent",
    get: function get() {
      return _classPrivateFieldGet(this, _currentPeerSocketComponent);
    }
  }, {
    key: "tempConnectionEl",
    get: function get() {
      return _classPrivateFieldGet(this, _tempConnectionEl);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _tempConnectionEl, val);
    }
  }, {
    key: "dragElement",
    get: function get() {
      return this.componentEl;
    }
  }, {
    key: "hasSingleConnection",
    get: function get() {
      throw new Error("This method must be overridden in a subclass!");
    }
    /**
     * Is this socket actually connected?
     */

  }, {
    key: "isConnected",
    get: function get() {
      return this.canvas.getConnectionsFor(this).length > 0;
    }
  }]);

  return SocketComponent;
}(_component__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./src/components/cnode.js":
/*!*********************************!*\
  !*** ./src/components/cnode.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CnodeComponent": () => /* binding */ CnodeComponent
/* harmony export */ });
/* harmony import */ var _canvas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas/component */ "./src/canvas/component.js");
/* harmony import */ var _canvas_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../canvas/position */ "./src/canvas/position.js");
/* harmony import */ var _prev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prev */ "./src/components/prev.js");
/* harmony import */ var _next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./next */ "./src/components/next.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme */ "./src/components/theme.js");
/* harmony import */ var _output__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./output */ "./src/components/output.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input */ "./src/components/input.js");
/* harmony import */ var _canvas_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../canvas/menu */ "./src/canvas/menu.js");
/* harmony import */ var _canvas_socket__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../canvas/socket */ "./src/canvas/socket.js");
/* harmony import */ var _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @marco.jacovone/cnodes/cnodes */ "../cnodes/cnodes.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */










/**
 * This is the main class for managing a single CNode
 * inside the cnodes-ui canvas. It embed a cnodes node instance
 */

var _node = new WeakMap();

var _containerEl = new WeakMap();

var _titleEl = new WeakMap();

var _symbolEl = new WeakMap();

var _signEl = new WeakMap();

var CnodeComponent = /*#__PURE__*/function (_Component) {
  _inherits(CnodeComponent, _Component);

  var _super = _createSuper(CnodeComponent);

  /** The cnodes nod instance */

  /** An SVG element to draw the container of the node */

  /** An SVG element to draw the title of the node */

  /** An SVG element to draw the top-left symbol for the node */

  /** An SVG element to draw the top-left sign for the node */
  function CnodeComponent(node, canvas) {
    var _thisSuper, _this;

    _classCallCheck(this, CnodeComponent);

    _this = _super.call(this);

    _node.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _containerEl.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _titleEl.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _symbolEl.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _signEl.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _node, node); // write a back-reference


    _classPrivateFieldGet(_assertThisInitialized(_this), _node).__comp = _assertThisInitialized(_this);

    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(CnodeComponent.prototype)), "setup", _thisSuper).call(_thisSuper);

    canvas.addComponent(_assertThisInitialized(_this)); // If there is an active program, add this node to it

    if (_this.canvas.program) {
      _this.canvas.program.addNode(_classPrivateFieldGet(_assertThisInitialized(_this), _node));
    }

    _this.updateSubcomponents();

    return _this;
  }

  _createClass(CnodeComponent, [{
    key: "createElement",

    /**
     * Lets create the SVG element
     */
    value: function createElement() {
      var nodeEl = document.createElementNS("http://www.w3.org/2000/svg", "g");

      _classPrivateFieldSet(this, _containerEl, document.createElementNS("http://www.w3.org/2000/svg", "path"));

      _classPrivateFieldSet(this, _titleEl, document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"));

      _classPrivateFieldSet(this, _symbolEl, document.createElementNS("http://www.w3.org/2000/svg", "circle"));

      _classPrivateFieldSet(this, _signEl, document.createElementNS("http://www.w3.org/2000/svg", "path"));

      nodeEl.appendChild(_classPrivateFieldGet(this, _containerEl));
      nodeEl.appendChild(_classPrivateFieldGet(this, _titleEl));
      nodeEl.appendChild(_classPrivateFieldGet(this, _symbolEl));
      nodeEl.appendChild(_classPrivateFieldGet(this, _signEl));
      _classPrivateFieldGet(this, _titleEl).innerHTML = this.node.name;
      _classPrivateFieldGet(this, _titleEl).style = "\n      font: ".concat(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_TITLE_FONT, "; \n      color: ").concat(!this.node.functional ? _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_TITLE_COLOR : _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_FUNCTIONAL_TITLE_COLOR, "; \n      text-align: center; \n      user-select: none");

      _classPrivateFieldGet(this, _titleEl).setAttribute("x", _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS * 0.5);

      _classPrivateFieldGet(this, _titleEl).setAttribute("y", _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS * 0.5);

      _classPrivateFieldGet(this, _titleEl).setAttribute("width", _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_WIDTH - _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS * 0.5 * 2);

      _classPrivateFieldGet(this, _titleEl).setAttribute("height", 30);

      _classPrivateFieldGet(this, _containerEl).setAttribute("stroke", !this.node.functional ? _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_STROKE_COLOR : _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_FUNCTIONAL_STROKE_COLOR);

      _classPrivateFieldGet(this, _containerEl).setAttribute("stroke-width", _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_STROKE_WIDTH);

      _classPrivateFieldGet(this, _containerEl).setAttribute("fill", this.node.functional ? _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_FUNCTIONAL_FILL_COLOR : _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_FILL_COLOR);

      _classPrivateFieldGet(this, _containerEl).setAttribute("x", "0");

      _classPrivateFieldGet(this, _containerEl).setAttribute("y", "0");

      _classPrivateFieldGet(this, _symbolEl).setAttribute("cx", 0);

      _classPrivateFieldGet(this, _symbolEl).setAttribute("cy", 0);

      _classPrivateFieldGet(this, _symbolEl).setAttribute("r", _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS * 0.9);

      _classPrivateFieldGet(this, _symbolEl).setAttribute("stroke", _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_SYMBOL_STROKE_COLOR);

      _classPrivateFieldGet(this, _symbolEl).setAttribute("stroke-width", _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_SYMBOL_STROKE_WIDTH);

      _classPrivateFieldGet(this, _symbolEl).setAttribute("fill", _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_SYMBOL_FILL_COLOR);

      var signRadius = _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS * 0.7;

      _classPrivateFieldGet(this, _signEl).setAttribute("d", !this.node.functional ? "\n      M ".concat(signRadius * 0.5, " 0\n      L ").concat(-signRadius * 0.3, " ").concat(-signRadius / 2, "\n      L ").concat(-signRadius * 0.3, " ").concat(signRadius / 2, "\n      Z\n      ") : "\n      M ".concat(signRadius * 0.6, " 0\n      L ").concat(-signRadius * 0.5, " 0\n\n      M 0 ").concat(-signRadius * 0.6, "\n      L ").concat(-signRadius * 0.5, " 0\n      L 0 ").concat(+signRadius * 0.6, "\n      "));

      _classPrivateFieldGet(this, _signEl).setAttribute("stroke", !this.node.functional ? _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_SIGN_COLOR : _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_FUNCTIONAL_SIGN_COLOR);

      _classPrivateFieldGet(this, _signEl).setAttribute("stroke-width", !this.node.functional ? 1 : 3);

      _classPrivateFieldGet(this, _signEl).setAttribute("fill", !this.node.functional ? _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_SIGN_COLOR : "transparent");

      _classPrivateFieldGet(this, _signEl).setAttribute("stroke-linejoin", "null");

      _classPrivateFieldGet(this, _signEl).setAttribute("x", "0");

      _classPrivateFieldGet(this, _signEl).setAttribute("y", "0");

      nodeEl.setAttribute("x", "0");
      nodeEl.setAttribute("y", "0");
      return nodeEl;
    }
    /**
     * This method construct and/or update all sub components. They are all sockets
     * representing input, outputs, prev and nexts.
     */

  }, {
    key: "updateSubcomponents",
    value: function updateSubcomponents() {
      var posY = 40 + 0.5 * _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS; // Prev

      if (this.node.prev) {
        var nComp = this.node.prev.__comp;

        if (!nComp) {
          nComp = new _prev__WEBPACK_IMPORTED_MODULE_2__.PrevSocketComponent(this.node.prev);
          this.addComponent(nComp); // write a back_reference

          this.node.prev.__comp = nComp;
        } // Update position


        nComp.pos = new _canvas_position__WEBPACK_IMPORTED_MODULE_1__.Position(0, posY);
      } // Nexts


      var _iterator = _createForOfIteratorHelper(this.node.nexts),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var next = _step.value;
          var _nComp = next.__comp;

          if (!_nComp) {
            _nComp = new _next__WEBPACK_IMPORTED_MODULE_3__.NextSocketComponent(next);
            this.addComponent(_nComp); // write a back-reference

            next.__comp = _nComp;
          } // Update position


          _nComp.pos = new _canvas_position__WEBPACK_IMPORTED_MODULE_1__.Position(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_WIDTH, posY);
          posY += 30;
        } // Output

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(this.node.outputs),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var output = _step2.value;
          var _nComp2 = output.__comp;

          if (!_nComp2) {
            _nComp2 = new _output__WEBPACK_IMPORTED_MODULE_5__.OutputSocketComponent(output);
            this.addComponent(_nComp2); // write a back-reference

            output.__comp = _nComp2;
          } // Update position


          _nComp2.pos = new _canvas_position__WEBPACK_IMPORTED_MODULE_1__.Position(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_WIDTH, posY);
          posY += 30;
        } // Input

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(this.node.inputs),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var input = _step3.value;
          var _nComp3 = input.__comp;

          if (!_nComp3) {
            _nComp3 = new _input__WEBPACK_IMPORTED_MODULE_6__.InputSocketComponent(input);
            this.addComponent(_nComp3); // write a back-reference

            input.__comp = _nComp3;
          } // Update status


          _nComp3.updateSVGElement();

          _nComp3.pos = new _canvas_position__WEBPACK_IMPORTED_MODULE_1__.Position(0, posY);
          posY += 30;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    /**
     * Intercept by overriding this method to update
     * graphical cooordinates in the program structure
     */

  }, {
    key: "updateSVGElement",
    value: function updateSVGElement() {
      _get(_getPrototypeOf(CnodeComponent.prototype), "updateSVGElement", this).call(this);

      _classPrivateFieldGet(this, _containerEl).setAttribute("d", "\n      M 0 ".concat(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS * 1.3, " \n      A ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS * 1.3, " ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS * 1.3, " 0 0 0 ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS * 1.3, " 0 \n      L ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_WIDTH - _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS, " 0 \n      A ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS, " ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS, " 0 0 1 ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_WIDTH, " ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS, " \n      L ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_WIDTH, " ").concat(this.height - _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS, " \n      A ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS, " ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS, " 0 0 1 ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_WIDTH - _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS, " ").concat(this.height, " \n      L ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS, " ").concat(this.height, " \n      A ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS, " ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS, " 0 0 1 0 ").concat(this.height - _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS, " \n      Z\n      "));

      this.updateSubcomponents(); // Update UI data in meta info

      if (!_classPrivateFieldGet(this, _node).meta) {
        this.node.meta = {};
      }

      _classPrivateFieldGet(this, _node).meta.pos = {
        x: this.pos.x,
        y: this.pos.y
      };
    }
    /**
     * Returns the array of context menu items. If the component
     * returns null, no contextual menu is shown
     */

  }, {
    key: "getContextMenuItems",
    value: function getContextMenuItems() {
      var _this2 = this;

      var items = [];

      if (this.node instanceof _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_9__.Program) {
        items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_7__.MenuItem("<tspan alignment-baseline=\"middle\">Edit...</tspan>", function () {
          _this2.canvas.pushProgram(_this2.node);
        }));
      } // The node can add inputs?


      if (this.node.canAddInput) {
        items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_7__.MenuItem("<tspan alignment-baseline=\"middle\">Add input</tspan>", function () {
          _this2.node.addInput();

          _this2.updateSVGElement();
        }));
      } // The node can add inputs?


      if (this.node.canAddOutput) {
        items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_7__.MenuItem("<tspan alignment-baseline=\"middle\">Add output</tspan>", function () {
          _this2.node.addOutput();

          _this2.updateSVGElement();
        }));
      }

      items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_7__.MenuItem("<tspan alignment-baseline=\"middle\">Disconnect all</tspan>", function () {
        var _iterator4 = _createForOfIteratorHelper(_this2.components),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var comp = _step4.value;

            if (comp instanceof _canvas_socket__WEBPACK_IMPORTED_MODULE_8__.SocketComponent && comp.isConnected) {
              var _iterator5 = _createForOfIteratorHelper(_this2.canvas.getConnectionsFor(comp)),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var conn = _step5.value;

                  _this2.canvas.removeConnection(conn);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      })); // The node can be removed?

      if (this.node.removable) {
        items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_7__.MenuItem("<tspan alignment-baseline=\"middle\">Delete</tspan>", function () {
          _this2.canvas.removeComponent(_this2);
        }));
      }

      return items;
    }
    /**
     * Remove the internal node reference to the component
     * upon destroy
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.node.__comp = null; // If there is acrive program, remove the node from it

      if (this.canvas.program) {
        this.canvas.program.removeNode(this.node);
      }

      _get(_getPrototypeOf(CnodeComponent.prototype), "destroy", this).call(this);
    }
  }, {
    key: "node",
    get: function get() {
      return _classPrivateFieldGet(this, _node);
    }
    /**
     * Computes the node vertical size, based on node
     * characteristics in terms of number of input, output,
     * and nexts. It takes account of the current theme
     */

  }, {
    key: "height",
    get: function get() {
      var leftSocketsHeight = this.node.inputs.length;

      if (this.node.prev && this.node.nexts.length === 0 && this.node.outputs.length === 0) {
        leftSocketsHeight++;
      }

      var rightSocketsHeight = this.node.outputs.length + this.node.nexts.length;
      return _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS * 0.5 + 40 + // Title
      30 * (leftSocketsHeight + rightSocketsHeight) + 15 // Padding
      ;
    }
  }]);

  return CnodeComponent;
}(_canvas_component__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./src/components/cnodescanvas.js":
/*!****************************************!*\
  !*** ./src/components/cnodescanvas.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CnodesCanvas": () => /* binding */ CnodesCanvas
/* harmony export */ });
/* harmony import */ var _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @marco.jacovone/cnodes/cnodes */ "../cnodes/cnodes.js");
/* harmony import */ var _canvas_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../canvas/canvas */ "./src/canvas/canvas.js");
/* harmony import */ var _canvas_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../canvas/menu */ "./src/canvas/menu.js");
/* harmony import */ var _canvas_position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../canvas/position */ "./src/canvas/position.js");
/* harmony import */ var _connections_io_connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../connections/io_connection */ "./src/connections/io_connection.js");
/* harmony import */ var _connections_prevnext_connection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../connections/prevnext_connection */ "./src/connections/prevnext_connection.js");
/* harmony import */ var _cnode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cnode */ "./src/components/cnode.js");
/* harmony import */ var _cnodesmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cnodesmenu */ "./src/components/cnodesmenu.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme */ "./src/components/theme.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */










/**
 * This is the entry-point class for managing the canvas
 * relative to a cnodes program.
 */

var _program = new WeakMap();

var _stack = new WeakMap();

var CnodesCanvas = /*#__PURE__*/function (_Canvas) {
  _inherits(CnodesCanvas, _Canvas);

  var _super = _createSuper(CnodesCanvas);

  /** The edited program */

  /** The stack of edited programs */
  function CnodesCanvas(el) {
    var _this;

    _classCallCheck(this, CnodesCanvas);

    _this = _super.call(this, el);

    _program.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    _stack.set(_assertThisInitialized(_this), {
      writable: true,
      value: []
    });

    var defsEl = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defsEl.innerHTML = "\n      <filter xmlns=\"http://www.w3.org/2000/svg\" id=\"dropshadow\" height=\"130%\">\n        <feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"3\"/> \n        <feOffset dx=\"0\" dy=\"0\" result=\"offsetblur\"/> \n        <feComponentTransfer>\n          <feFuncA type=\"linear\" slope=\"0.3\"/>\n        </feComponentTransfer>\n        <feMerge> \n          <feMergeNode/>\n          <feMergeNode in=\"SourceGraphic\"/> \n        </feMerge>\n      </filter>\n      <marker id=\"io-arrow-any\" viewBox=\"0 0 10 10\" refX=\"7\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" fill=\"".concat(_theme__WEBPACK_IMPORTED_MODULE_8__.Theme.current.TYPE_ANY_COLOR, "\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 0 L 10 5 L 0 10 Z\">\n        </path>\n      </marker>\n      <marker id=\"io-arrow-boolean\" viewBox=\"0 0 10 10\" refX=\"7\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_8__.Theme.current.TYPE_BOOLEAN_COLOR, "\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 0 L 10 5 L 0 10 Z\">\n        </path>\n      </marker>\n      <marker id=\"io-arrow-number\" viewBox=\"0 0 10 10\" refX=\"7\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_8__.Theme.current.TYPE_NUMBER_COLOR, "\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 0 L 10 5 L 0 10 Z\">\n        </path>\n      </marker>\n      <marker id=\"io-arrow-string\" viewBox=\"0 0 10 10\" refX=\"7\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_8__.Theme.current.TYPE_STRING_COLOR, "\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 0 L 10 5 L 0 10 Z\">\n        </path>\n      </marker>\n      <marker id=\"io-arrow-object\" viewBox=\"0 0 10 10\" refX=\"7\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_8__.Theme.current.TYPE_OBJECT_COLOR, "\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 0 L 10 5 L 0 10 Z\">\n        </path>\n      </marker>\n      <marker id=\"io-arrow-array\" viewBox=\"0 0 10 10\" refX=\"7\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_8__.Theme.current.TYPE_ARRAY_COLOR, "\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 0 L 10 5 L 0 10 Z\">\n        </path>\n      </marker>\n      <marker id=\"prevnext-arrow\" viewBox=\"0 0 10 10\" refX=\"7\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_8__.Theme.current.CONNECTION_PREV_NEXT_COLOR, "\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 0 L 10 5 L 0 10 Z\">\n        </path>\n      </marker>      \n    ");

    _this.svgEl.appendChild(defsEl);

    return _this;
  }

  _createClass(CnodesCanvas, [{
    key: "run",

    /**
     * Executes the program
     */
    value: function run() {
      _classPrivateFieldGet(this, _program).process();
    }
    /**
     * Dump the internal CNODES program to the console
     */

  }, {
    key: "dump",
    value: function dump() {
      console.log(_marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__.Env.export(_classPrivateFieldGet(this, _program)));
    }
    /**
     * Return a list of MenuItem for the context menu
     */

  }, {
    key: "getCanvasContextMenuItems",
    value: function getCanvasContextMenuItems() {
      var _this2 = this;

      var items = [];

      if (this.canPopProgram()) {
        items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_2__.MenuItem("\n          <tspan alignment-baseline=\"middle\" style=\"".concat(_theme__WEBPACK_IMPORTED_MODULE_8__.Theme.current.MENU_ITEM_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_8__.Theme.current.MENU_ITEM_COLOR, "\">\n            Return to parent...\n          </tspan>\n          "), function () {
          _this2.popProgram();
        }));
      }

      var _iterator = _createForOfIteratorHelper(_marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__.Env.getCategories()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cat = _step.value;

          var _iterator2 = _createForOfIteratorHelper(_marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__.Env.getCategoryNodes(cat)),
              _step2;

          try {
            var _loop = function _loop() {
              var nodeDef = _step2.value;
              var n = _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__.Env.getInstance(nodeDef.name);

              if (n.creatable) {
                items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_2__.MenuItem("\n              <tspan alignment-baseline=\"middle\" style=\"".concat(_theme__WEBPACK_IMPORTED_MODULE_8__.Theme.current.MENU_ITEM_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_8__.Theme.current.MENU_ITEM_COLOR, "\">\n                New\n              </tspan>\n              <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_8__.Theme.current.MENU_ITEM_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_8__.Theme.current.MENU_ITEM_COLOR, "\">\n                ").concat(nodeDef.name, "\n              </tspan>\n              <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_8__.Theme.current.MENU_ITEM_CATEGORY_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_8__.Theme.current.MENU_ITEM_CATEGORY_COLOR, "\">\n                ").concat(nodeDef.category, "\n              </tspan>\n              "), function (x, y) {
                  var node = new _cnode__WEBPACK_IMPORTED_MODULE_6__.CnodeComponent(n, _this2);
                  node.pos = new _canvas_position__WEBPACK_IMPORTED_MODULE_3__.Position(x, y);
                }));
              }
            };

            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (items.length === 0) {
        return null;
      } else {
        return items;
      }
    }
    /**
     * Cancels the current open context menu, and closes it.
     * Override this to ensure cancel menu inform menu callback clients
     */

  }, {
    key: "cancelContextMenu",
    value: function cancelContextMenu() {
      if (this.contextMenuComponent && this.contextMenuComponent.menuCallback) {
        this.contextMenuComponent.menuCallback(null);
        this.contextMenuComponent.menuCallback = null;
      }

      _get(_getPrototypeOf(CnodesCanvas.prototype), "cancelContextMenu", this).call(this);
    }
    /**
     * Shows the context menu retated to the component or to the canvas
     * @param {MenuItem[]} items Items that compose the menu
     * @param {number} x The x coordinate for the menu
     * @param {number} y The y coordinate for the menu
     * @param {Function} menuCallback If the client is interested to the user selection or cancel
     */

  }, {
    key: "showContextMenu",
    value: function showContextMenu(items, x, y, menuCallback) {
      if (items) {
        if (this.contextMenuComponent) {
          this.cancelContextMenu();
        }

        this.contextMenuComponent = new _cnodesmenu__WEBPACK_IMPORTED_MODULE_7__.CnodesMenu(this, items);
        this.contextMenuComponent.menuCallback = menuCallback;
        this.contextMenuComponent.show(x, y);
      }
    }
    /**
     * This method imports an entire cnodes program
     * @param {Program} program Program to import
     */

  }, {
    key: "importCnodesProgram",
    value: function importCnodesProgram(program) {
      // By temporary clearing the instance of the program, we inform
      // components that all creation/destruction will not have effect
      // on the program instance
      _classPrivateFieldSet(this, _program, null);

      this.removeAll(); // Import the program

      var _iterator3 = _createForOfIteratorHelper(program.nodes),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var n = _step3.value;
          var comp = new _cnode__WEBPACK_IMPORTED_MODULE_6__.CnodeComponent(n, this);
          comp.moveable = true; // Extract meta info

          if (!n.meta) {
            n.meta = {};
          }

          if (n.meta.pos) {
            comp.pos = new _canvas_position__WEBPACK_IMPORTED_MODULE_3__.Position(n.meta.pos.x, n.meta.pos.y);
          } else {
            comp.pos = new _canvas_position__WEBPACK_IMPORTED_MODULE_3__.Position(100, 100);
          }
        } // Setup connections

      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var _iterator4 = _createForOfIteratorHelper(program.nodes),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _n = _step4.value;

          // Setup prev
          if (_n.prev && _n.prev.peers.length > 0) {
            var _iterator5 = _createForOfIteratorHelper(_n.prev.peers),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var peer = _step5.value;

                if (!this.alreadyConnected(peer.__comp, _n.prev.__comp)) {
                  // Create connection component
                  new _connections_prevnext_connection__WEBPACK_IMPORTED_MODULE_5__.PrevNextConnection(peer.__comp, _n.prev.__comp, this);
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          } // Setup nexts


          var _iterator6 = _createForOfIteratorHelper(_n.nexts),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var next = _step6.value;

              if (next.peer) {
                if (!this.alreadyConnected(next.peer.__comp, next.__comp)) {
                  // Create connection component
                  new _connections_prevnext_connection__WEBPACK_IMPORTED_MODULE_5__.PrevNextConnection(next.__comp, next.peer.__comp, this);
                }
              }
            } // Setup inputs

          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          var _iterator7 = _createForOfIteratorHelper(_n.inputs),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var inp = _step7.value;

              if (inp.peer) {
                if (!this.alreadyConnected(inp.peer.__comp, inp.__comp)) {
                  // Create connection component
                  new _connections_io_connection__WEBPACK_IMPORTED_MODULE_4__.IOConnection(inp.peer.__comp, inp.__comp, this);
                }
              }
            } // Setup outputs

          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          var _iterator8 = _createForOfIteratorHelper(_n.outputs),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var outp = _step8.value;

              if (outp.peers.length > 0) {
                var _iterator9 = _createForOfIteratorHelper(outp.peers),
                    _step9;

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var _peer = _step9.value;

                    if (!this.alreadyConnected(outp.__comp, _peer.__comp)) {
                      // Create connection component
                      new _connections_io_connection__WEBPACK_IMPORTED_MODULE_4__.IOConnection(outp.__comp, _peer.__comp, this);
                    }
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        } // Restore the program instance

      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      _classPrivateFieldSet(this, _program, program);
    }
    /**
     * Push a subprogram on the canvas. The current program
     * is pushed on to the stack and the new one is placed on the canvas
     * @param {*} program The new program to edit
     */

  }, {
    key: "pushProgram",
    value: function pushProgram(program) {
      var _this3 = this;

      setTimeout(function () {
        // Push this current program to the stack
        _classPrivateFieldGet(_this3, _stack).unshift(_this3.program); // Set the new Program


        _this3.program = program;
      });
    }
    /**
     * Pops the last program and place it on the canvas. The actual
     * program (that is a subprogram of the popped) is abandoned
     */

  }, {
    key: "popProgram",
    value: function popProgram() {
      var _this4 = this;

      setTimeout(function () {
        _this4.program = _classPrivateFieldGet(_this4, _stack).shift();
      });
    }
    /**
     * Can this canvas pop a program from the stack, that is:
     * there is at least one program on the stack?
     */

  }, {
    key: "canPopProgram",
    value: function canPopProgram() {
      return _classPrivateFieldGet(this, _stack).length > 0;
    }
  }, {
    key: "program",
    get: function get() {
      return _classPrivateFieldGet(this, _program);
    }
    /**
     * This setter is a trigger for the import procedure
     */
    ,
    set: function set(val) {
      this.importCnodesProgram(val);

      _classPrivateFieldSet(this, _program, val);
    }
  }]);

  return CnodesCanvas;
}(_canvas_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas);

/***/ }),

/***/ "./src/components/cnodesconnection.js":
/*!********************************************!*\
  !*** ./src/components/cnodesconnection.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CnodesConnection": () => /* binding */ CnodesConnection
/* harmony export */ });
/* harmony import */ var _marco_jacovone_cnodes_lib_core_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @marco.jacovone/cnodes/lib/core/type */ "../cnodes/lib/core/type.js");
/* harmony import */ var _canvas_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../canvas/connection */ "./src/canvas/connection.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */


/**
 * This class implements a connection for the cnodes system
 * It embed both source and target sockets
 */

var CnodesConnection = /*#__PURE__*/function (_Connection) {
  _inherits(CnodesConnection, _Connection);

  var _super = _createSuper(CnodesConnection);

  function CnodesConnection(source, target, canvas) {
    var _thisSuper, _this;

    _classCallCheck(this, CnodesConnection);

    _this = _super.call(this, source, target);

    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(CnodesConnection.prototype)), "setup", _thisSuper).call(_thisSuper);

    canvas.addConnection(_assertThisInitialized(_this));

    _this.updateSVGElement();

    if (canvas.program) {
      // Connect cnodes sockets
      _this.source.socket.connect(_this.target.socket);
    }

    return _this;
  }
  /**
   * Lets create the element
   */


  _createClass(CnodesConnection, [{
    key: "createElement",
    value: function createElement() {
      var el = document.createElementNS("http://www.w3.org/2000/svg", "path");
      return el;
    }
    /**
     * Diconnect the internal cnodes sockets
     */

  }, {
    key: "destroy",
    value: function destroy() {
      // If there is an active program, remove the connection
      if (this.canvas.program) {
        this.source.socket.disconnect(this.target.socket);
      }

      _get(_getPrototypeOf(CnodesConnection.prototype), "destroy", this).call(this);
    }
    /**
     * Return a relevant type between two types passed as parameter
     * @param {string} type1 CNODES source type
     * @param {string} type2 CNODES target type
     */

  }, {
    key: "getRelevantType",
    value: function getRelevantType(type1, type2) {
      if (type1 === _marco_jacovone_cnodes_lib_core_type__WEBPACK_IMPORTED_MODULE_0__.Types.ANY) {
        return type2;
      } else if (type2 === _marco_jacovone_cnodes_lib_core_type__WEBPACK_IMPORTED_MODULE_0__.Types.ANY) {
        return type1;
      } else {
        return type1;
      }
    }
  }]);

  return CnodesConnection;
}(_canvas_connection__WEBPACK_IMPORTED_MODULE_1__.Connection);

/***/ }),

/***/ "./src/components/cnodesmenu.js":
/*!**************************************!*\
  !*** ./src/components/cnodesmenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CnodesMenu": () => /* binding */ CnodesMenu
/* harmony export */ });
/* harmony import */ var _canvas_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas/menu */ "./src/canvas/menu.js");
/* harmony import */ var _cnodescanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cnodescanvas */ "./src/components/cnodescanvas.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./src/components/theme.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a context menu for cnodes canvas
 */

var _inputElement = new WeakMap();

var _containerEl = new WeakMap();

var _itemsEls = new WeakMap();

var _searchFilter = new WeakMap();

var _menuCallback = new WeakMap();

var CnodesMenu = /*#__PURE__*/function (_Menu) {
  _inherits(CnodesMenu, _Menu);

  var _super = _createSuper(CnodesMenu);

  /** The input element for the search */

  /** Container element around items*/

  /** Current search result items */

  /** The search filter (value of the search input) */

  /**
   * The result of the selection of the user. If who request the menu is interested.
   * Some components, like sockets, can open a context menu to select items, instead of
   * the canvas. In such case, the originating component have to know the final
   * result of the menu selection. In this case, tho variable contains a callback to
   * the menu "client", and the menu, upon a user selection, calls this callback passing
   * the result value of the context menu item callback, as parameter.
   * Please see the class CnodesSocket component to check this behavior.
   */

  /**
   * Construct a new Menu for the canvas
   * @param {CnodesCanvas} canvas The canvas
   * @param {MenuItem[]} items The menu items
   */
  function CnodesMenu(canvas, items) {
    var _this;

    _classCallCheck(this, CnodesMenu);

    _this = _super.call(this, canvas, items);

    _inputElement.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    _containerEl.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    _itemsEls.set(_assertThisInitialized(_this), {
      writable: true,
      value: []
    });

    _searchFilter.set(_assertThisInitialized(_this), {
      writable: true,
      value: ""
    });

    _menuCallback.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    return _this;
  }

  _createClass(CnodesMenu, [{
    key: "show",

    /**
     * Shows the menu
     * @param {*} x The x coordinate
     * @param {*} y The y coordinate
     */
    value: function show(x, y) {
      _get(_getPrototypeOf(CnodesMenu.prototype), "show", this).call(this, x, y);

      _classPrivateFieldGet(this, _inputElement).focus();

      this.createMenuItemsElements();
    }
    /**
     * Lets create the SVG element
     */

  }, {
    key: "createElement",
    value: function createElement() {
      var _this2 = this;

      var menuEl = document.createElementNS("http://www.w3.org/2000/svg", "g");
      var textInputElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
      textInputElem.style = "\n      font: ".concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_SEARCH_FONT, "; \n      color: ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.NODE_IO_NAME_COLOR, "; \n      text-align: left;\n      line-height: 30px;\n      user-select: none;\n      pointer-events: auto;\n    ");
      textInputElem.setAttribute("x", 0);
      textInputElem.setAttribute("y", 0);
      textInputElem.setAttribute("transform", "translate(".concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS, ", ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS, ")"));
      textInputElem.setAttribute("width", _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_MIN_WIDTH - 2 * _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS);
      textInputElem.setAttribute("height", _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_ITEM_HEIGHT);

      _classPrivateFieldSet(this, _inputElement, document.createElement("input"));

      _classPrivateFieldGet(this, _inputElement).style = "\n      font: ".concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.NODE_IO_NAME_FONT, "; \n      color: ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.NODE_IO_NAME_COLOR, "; \n      width: ").concat(textInputElem.getAttribute("width") - 10, "px; // 10px less than foreignObject\n      height: ", 20, "px;\n      border: 0;\n      padding: 2px;\n      margin: 2px;\n    ");

      _classPrivateFieldGet(this, _inputElement).setAttribute("value", "");

      _classPrivateFieldGet(this, _inputElement).setAttribute("type", "text");

      var self = this;

      _classPrivateFieldGet(this, _inputElement).addEventListener("input", function (e) {
        _classPrivateFieldSet(self, _searchFilter, _classPrivateFieldGet(_this2, _inputElement).value);

        self.createMenuItemsElements();
      });

      _classPrivateFieldGet(this, _inputElement).addEventListener("keydown", function (e) {
        if (e.keyCode === 27) {
          self.canvas.cancelContextMenu(); // If there is client of the menu interested to user selection or abort

          if (self.menuCallback) {
            self.menuCallback(null);
            self.menuCallback = null;
          }

          return;
        }

        if (e.keyCode === 13) {
          if (self.filteredElements.length > 0) {
            var _menuEl = _this2.canvas.contextMenuComponent.componentEl.getBoundingClientRect();

            var p = _this2.canvas.clientToSvgPoint(_menuEl.left, _menuEl.top); // Items can return a result to inform the menu client about the item selection


            var itemResult = self.filteredElements[0].callback(p.x, p.y); // If there is client of the menu interested to user selection or abort

            if (self.menuCallback) {
              self.menuCallback(itemResult);
              self.menuCallback = null;
            }

            self.canvas.cancelContextMenu();
            return;
          }
        }
      });

      textInputElem.appendChild(_classPrivateFieldGet(this, _inputElement));

      _classPrivateFieldSet(this, _containerEl, document.createElementNS("http://www.w3.org/2000/svg", "path"));

      _classPrivateFieldGet(this, _containerEl).setAttribute("fill", _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_FILL_COLOR);

      _classPrivateFieldGet(this, _containerEl).setAttribute("stroke", _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_STROKE_COLOR);

      _classPrivateFieldGet(this, _containerEl).setAttribute("stroke-width", _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_STROKE_WIDTH);

      _classPrivateFieldGet(this, _containerEl).setAttribute("filter", "url(#dropshadow)");

      menuEl.appendChild(_classPrivateFieldGet(this, _containerEl));
      menuEl.appendChild(textInputElem);
      return menuEl;
    }
    /**
     * Creates/Updates menu items based on the search input field, and
     * adjust the size of the container element
     */

  }, {
    key: "createMenuItemsElements",
    value: function createMenuItemsElements() {
      var _this3 = this;

      _classPrivateFieldGet(this, _containerEl).setAttribute("d", "\n      M 0 ".concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS * 1.3, " \n      A ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS * 1.3, " ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS * 1.3, " 0 0 1 ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS * 1.3, " 0 \n      L ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_MIN_WIDTH - _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS, " 0 \n      A ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS, " ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS, " 0 0 1 ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_MIN_WIDTH, " ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS, " \n      L ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_MIN_WIDTH, " ").concat(this.height - _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS, " \n      A ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS, " ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS, " 0 0 1 ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_MIN_WIDTH - _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS, " ").concat(this.height, " \n      L ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS, " ").concat(this.height, " \n      A ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS, " ").concat(_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS, " 0 0 1 0 ").concat(this.height - _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS, " \n      Z\n      "));

      while (_classPrivateFieldGet(this, _itemsEls).length > 0) {
        this.componentEl.removeChild(_classPrivateFieldGet(this, _itemsEls)[0].itemEl);
        this.componentEl.removeChild(_classPrivateFieldGet(this, _itemsEls)[0].itemTextEl);

        _classPrivateFieldGet(this, _itemsEls).splice(0, 1);
      } // Create menu items


      var _iterator = _createForOfIteratorHelper(this.filteredElements.entries()),
          _step;

      try {
        var _loop = function _loop() {
          var _step$value = _slicedToArray(_step.value, 2),
              i = _step$value[0],
              item = _step$value[1];

          var itemX = _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS;
          var itemY = _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS + _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_ITEM_HEIGHT * (i + 1);
          var itemWidth = _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_MIN_WIDTH - 2 * _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS;
          var itemHeight = _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_ITEM_HEIGHT;
          var itemEl = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          itemEl.setAttribute("x", itemX);
          itemEl.setAttribute("y", itemY);
          itemEl.setAttribute("width", itemWidth);
          itemEl.setAttribute("height", itemHeight);
          itemEl.setAttribute("style", _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_ITEM_FONT);
          itemEl.setAttribute("stroke", "transparent");
          itemEl.setAttribute("stroke-width", 0);
          itemEl.setAttribute("fill", "transparent");
          var itemTextEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
          itemTextEl.setAttribute("x", itemX + 5);
          itemTextEl.setAttribute("y", itemY + _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_ITEM_HEIGHT / 2);
          itemTextEl.setAttribute("width", itemWidth - 10);
          itemTextEl.setAttribute("height", itemHeight - 10);
          itemTextEl.setAttribute("style", _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_ITEM_FONT); // itemTextEl.setAttribute("alignment-baseline", "middle");

          itemTextEl.style["pointer-events"] = "none";
          itemTextEl.style["user-select"] = "none";
          itemTextEl.innerHTML = item.text;
          itemEl.addEventListener("pointerenter", function (e) {
            itemEl.setAttribute("fill", _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_ITEM_HIGHLIGHT);
          });
          itemEl.addEventListener("pointerleave", function (e) {
            itemEl.setAttribute("fill", "transparent");
          });
          itemEl.addEventListener("pointerdown", function (e) {
            var menuEl = _this3.canvas.contextMenuComponent.componentEl.getBoundingClientRect();

            var p = _this3.canvas.clientToSvgPoint(menuEl.left, menuEl.top);

            var result = item.callback(p.x, p.y); // If there is client of the menu interested to user selection or abort

            if (_this3.menuCallback) {
              _this3.menuCallback(result);

              _this3.menuCallback = null;
            }

            _this3.canvas.cancelContextMenu();
          });

          _this3.componentEl.appendChild(itemEl);

          _this3.componentEl.appendChild(itemTextEl);

          _classPrivateFieldGet(_this3, _itemsEls).push({
            itemEl: itemEl,
            itemTextEl: itemTextEl
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "searchFilter",
    get: function get() {
      return _classPrivateFieldGet(this, _searchFilter);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _searchFilter, val);
    }
  }, {
    key: "menuCallback",
    get: function get() {
      return _classPrivateFieldGet(this, _menuCallback);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _menuCallback, val);
    }
    /** Returns the filtered items of the menu */

  }, {
    key: "filteredElements",
    get: function get() {
      var _this4 = this;

      var filterElems = this.items.filter(function (i, idx) {
        return i.text.toUpperCase().includes(_this4.searchFilter.toUpperCase());
      });
      return filterElems.filter(function (i, idx) {
        return idx <= 10;
      });
    }
    /**
     * Computes the menu vertical size, based on menu items
     * filtered by search filter
     */

  }, {
    key: "height",
    get: function get() {
      return _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_BORDER_RADIUS * 2 + // Padding
      30 + // Search input
      _theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.MENU_ITEM_HEIGHT * this.filteredElements.length // Items
      ;
    }
  }]);

  return CnodesMenu;
}(_canvas_menu__WEBPACK_IMPORTED_MODULE_0__.Menu);

/***/ }),

/***/ "./src/components/cnodessocket.js":
/*!****************************************!*\
  !*** ./src/components/cnodessocket.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CnodesSocketComponent": () => /* binding */ CnodesSocketComponent
/* harmony export */ });
/* harmony import */ var _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @marco.jacovone/cnodes/cnodes */ "../cnodes/cnodes.js");
/* harmony import */ var _marco_jacovone_cnodes_lib_core_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @marco.jacovone/cnodes/lib/core/type */ "../cnodes/lib/core/type.js");
/* harmony import */ var _canvas_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../canvas/position */ "./src/canvas/position.js");
/* harmony import */ var _canvas_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../canvas/socket */ "./src/canvas/socket.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme */ "./src/components/theme.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */





/**
 * This class is the base class for all sockets components
 * of cnodes. The class introduces the socket field that is
 * a "cnodes" socket the internal structure to store links
 * between cnodes nodes. In addition implements the base functionality
 * of the "smart" connection flow, in case the user drag out
 * of a socket component and release the pointer outside of
 * a destination socket
 */

var _socket = new WeakMap();

var CnodesSocketComponent = /*#__PURE__*/function (_SocketComponent) {
  _inherits(CnodesSocketComponent, _SocketComponent);

  var _super = _createSuper(CnodesSocketComponent);

  /** The cnodes socket object */

  /**
   * Construct a new CnodesSocket object
   * @param {Socket} socket The internal cnodes socket object
   */
  function CnodesSocketComponent(socket) {
    var _this;

    _classCallCheck(this, CnodesSocketComponent);

    _this = _super.call(this);

    _socket.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _socket, socket);

    return _this;
  }

  _createClass(CnodesSocketComponent, [{
    key: "connectionEndedOutOfSocket",

    /**
     * The user has released the pointer button out of a valid socket,
     * display a context menu that presents all valid possible nodes
     * and relative sockets to connect...
     * Possible nodes items are returned by subclasses; this method display the
     * context menu via canvas.showContextMenu(...) and specifying a menuCallback
     * that inform this client about the final selection of the user, so
     * complete the connection or abort that
     * @param {Event} e The event pointerup
     */
    value: function connectionEndedOutOfSocket(e) {
      var _this2 = this;

      // Enumerates all possible socket to connect
      var items = this.getRegisteredPossiblePeers();
      var p = this.canvas.clientToSvgPoint(e.clientX, e.clientY);
      this.canvas.showContextMenu(items, p.x, p.y, function (socketComp) {
        if (!socketComp) {
          _this2.canvas.connectionsEl.removeChild(_this2.tempConnectionEl);

          _this2.tempConnectionEl = null;
        } else {
          _this2.connectionDone(socketComp);
        }
      });
    }
    /**
     * The user is moving the pointer around, with a connection pending
     * @param {number} x The x coordinate in SVG space
     * @param {number} y The y coordinate in SVG space
     * @param {boolean} invalid true if the pointer is overing a unacceptable socket
     */

  }, {
    key: "connectionMoving",
    value: function connectionMoving(x, y, invalid) {
      var sourcePoint = new _canvas_position__WEBPACK_IMPORTED_MODULE_2__.Position(this.absPos.x, this.absPos.y);
      var targetPoint = new _canvas_position__WEBPACK_IMPORTED_MODULE_2__.Position(this.currentPeerSocketComponent ? this.currentPeerSocketComponent.absPos.x : x, this.currentPeerSocketComponent ? this.currentPeerSocketComponent.absPos.y : y);
      var cpXDistance = Math.max(0.8 * Math.abs(sourcePoint.x - targetPoint.x), 100);
      var cp1 = sourcePoint.add(new _canvas_position__WEBPACK_IMPORTED_MODULE_2__.Position(cpXDistance * this.getSourcePointDirection(), -0.1 * (sourcePoint.y - targetPoint.y)));
      var cp2 = targetPoint.add(new _canvas_position__WEBPACK_IMPORTED_MODULE_2__.Position(-cpXDistance * this.getSourcePointDirection(), 0.1 * (sourcePoint.y - targetPoint.y)));
      this.tempConnectionEl.setAttribute("d", "\n      M ".concat(this.absPos.x, " ").concat(this.absPos.y, "\n      C ").concat(cp1.x, " ").concat(cp1.y, " ").concat(cp2.x, " ").concat(cp2.y, " ").concat(targetPoint.x, " ").concat(targetPoint.y, "\n    "));
      this.tempConnectionEl.setAttribute("stroke-width", _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.CONNECTION_TEMP_WIDTH);
      this.tempConnectionEl.setAttribute("stroke", invalid ? _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.CONNECTION_TEMP_INVALID_COLOR : this.currentPeerSocketComponent ? _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.CONNECTION_TEMP_VALID_COLOR : _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.CONNECTION_TEMP_COLOR);
      this.tempConnectionEl.setAttribute("stroke-dasharray", "5 5");
      this.tempConnectionEl.setAttribute("fill", "transparent");
    }
    /**
     * Remove the internal socket reference to the component
     * upon destroy
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.socket.__comp = null;

      _get(_getPrototypeOf(CnodesSocketComponent.prototype), "destroy", this).call(this);
    }
    /**
     * Return a color code in CSS for a given cndoes data type
     * @param {string} type CNODES data type
     */

  }, {
    key: "socket",
    get: function get() {
      return _classPrivateFieldGet(this, _socket);
    }
  }], [{
    key: "getColorForType",
    value: function getColorForType(type) {
      switch (type) {
        case _marco_jacovone_cnodes_lib_core_type__WEBPACK_IMPORTED_MODULE_1__.Types.ARRAY:
          return _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.TYPE_ARRAY_COLOR;

        case _marco_jacovone_cnodes_lib_core_type__WEBPACK_IMPORTED_MODULE_1__.Types.NUMBER:
          return _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.TYPE_NUMBER_COLOR;

        case _marco_jacovone_cnodes_lib_core_type__WEBPACK_IMPORTED_MODULE_1__.Types.STRING:
          return _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.TYPE_STRING_COLOR;

        case _marco_jacovone_cnodes_lib_core_type__WEBPACK_IMPORTED_MODULE_1__.Types.OBJECT:
          return _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.TYPE_OBJECT_COLOR;

        case _marco_jacovone_cnodes_lib_core_type__WEBPACK_IMPORTED_MODULE_1__.Types.BOOLEAN:
          return _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.TYPE_BOOLEAN_COLOR;

        case _marco_jacovone_cnodes_lib_core_type__WEBPACK_IMPORTED_MODULE_1__.Types.ANY:
          return _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.TYPE_ANY_COLOR;

        default:
          return "black";
      }
    }
  }]);

  return CnodesSocketComponent;
}(_canvas_socket__WEBPACK_IMPORTED_MODULE_3__.SocketComponent);

/***/ }),

/***/ "./src/components/input.js":
/*!*********************************!*\
  !*** ./src/components/input.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputSocketComponent": () => /* binding */ InputSocketComponent
/* harmony export */ });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./src/components/theme.js");
/* harmony import */ var _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @marco.jacovone/cnodes/cnodes */ "../cnodes/cnodes.js");
/* harmony import */ var _connections_io_connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connections/io_connection */ "./src/connections/io_connection.js");
/* harmony import */ var _cnodessocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cnodessocket */ "./src/components/cnodessocket.js");
/* harmony import */ var _canvas_socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../canvas/socket */ "./src/canvas/socket.js");
/* harmony import */ var _canvas_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../canvas/menu */ "./src/canvas/menu.js");
/* harmony import */ var _cnode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cnode */ "./src/components/cnode.js");
/* harmony import */ var _canvas_position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../canvas/position */ "./src/canvas/position.js");
/* harmony import */ var _output__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./output */ "./src/components/output.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */









/**
 * This class implement a socket to draw a Input element
 * in the cnodes world
 */

var _inputValueElement = new WeakMap();

var _inputNameElement = new WeakMap();

var _labelElement = new WeakMap();

var _socketSymbol = new WeakMap();

var InputSocketComponent = /*#__PURE__*/function (_CnodesSocketComponen) {
  _inherits(InputSocketComponent, _CnodesSocketComponen);

  var _super = _createSuper(InputSocketComponent);

  /** A reference to the imput value element */

  /** A reference to the imput name element, if there is one */

  /** A reference to the label element, if there is one */

  /** The symbol element */
  function InputSocketComponent(socket) {
    var _thisSuper, _this;

    _classCallCheck(this, InputSocketComponent);

    _this = _super.call(this, socket);

    _inputValueElement.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    _inputNameElement.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    _labelElement.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    _socketSymbol.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(InputSocketComponent.prototype)), "setup", _thisSuper).call(_thisSuper);

    return _this;
  }
  /**
   * Customize the drag element
   */


  _createClass(InputSocketComponent, [{
    key: "createElement",

    /**
     * Lets create the element
     */
    value: function createElement() {
      var _this2 = this;

      _classPrivateFieldSet(this, _socketSymbol, document.createElementNS("http://www.w3.org/2000/svg", "circle"));

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("cx", 0);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("cy", 0);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("r", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_POINT_RADIUS);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("stroke-width", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_STROKE_WIDTH);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("stroke", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_STROKE_COLOR);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("fill", _cnodessocket__WEBPACK_IMPORTED_MODULE_3__.CnodesSocketComponent.getColorForType(this.socket.type));

      var textInputNameElem = null;
      /*
       * If this socket can edit name, we create an input element for
       * this name, otherwise, we create a label
       */

      if (this.socket.canEditName) {
        textInputNameElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        textInputNameElem.style = "\n        font: ".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_FONT, "; \n        color: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_COLOR, "; \n        text-align: left;\n        line-height: 30px;\n        user-select: none;\n        pointer-events: auto;\n      ");
        textInputNameElem.setAttribute("x", 0);
        textInputNameElem.setAttribute("y", 0);
        textInputNameElem.setAttribute("transform", "translate(".concat(15, ", ", -15, ")"));
        textInputNameElem.setAttribute("width", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH / 2 - 15);
        textInputNameElem.setAttribute("height", 30);

        _classPrivateFieldSet(this, _inputNameElement, document.createElement("input"));

        _classPrivateFieldGet(this, _inputNameElement).style = "\n        font: ".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_FONT, "; \n        color: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_COLOR, "; \n        width: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH / 2 - 25, "px; // 5px less than foreignObject\n        height: ", 20, "px;\n        border: 0;\n        padding: 2px;\n        margin: 2px;\n      ");

        _classPrivateFieldGet(this, _inputNameElement).addEventListener("keyup", function (e) {
          _this2.socket.name = e.target.value;
        });

        _classPrivateFieldGet(this, _inputNameElement).setAttribute("value", this.socket.name);

        _classPrivateFieldGet(this, _inputNameElement).setAttribute("type", "text");

        textInputNameElem.appendChild(_classPrivateFieldGet(this, _inputNameElement));
      } else {
        _classPrivateFieldSet(this, _labelElement, document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"));

        _classPrivateFieldGet(this, _labelElement).style = "\n        font: ".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_FONT, "; \n        color: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_COLOR, "; \n        text-align: left;\n        width: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH / 2 - 15, "px;\n        height: 30px;\n        line-height: 30px;\n        user-select: none;\n      ");
        _classPrivateFieldGet(this, _labelElement).innerHTML = "".concat(this.socket.name);

        _classPrivateFieldGet(this, _labelElement).setAttribute("x", 0);

        _classPrivateFieldGet(this, _labelElement).setAttribute("y", 0);

        _classPrivateFieldGet(this, _labelElement).setAttribute("transform", "translate(".concat(15, ", ", -15, ")"));

        _classPrivateFieldGet(this, _labelElement).setAttribute("width", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH / 2 - 15);

        _classPrivateFieldGet(this, _labelElement).setAttribute("height", 30);
      }

      var textInputValueElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
      textInputValueElem.style = "\n      font: ".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_FONT, "; \n      color: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_COLOR, "; \n      text-align: left;\n      line-height: 30px;\n      user-select: none;\n      pointer-events: auto;\n    ");
      textInputValueElem.setAttribute("x", 0);
      textInputValueElem.setAttribute("y", 0);
      textInputValueElem.setAttribute("transform", "translate(".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH / 2, ", ").concat(-15, ")"));
      textInputValueElem.setAttribute("width", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH / 2 - 15);
      textInputValueElem.setAttribute("height", 30);

      _classPrivateFieldSet(this, _inputValueElement, document.createElement("input"));

      _classPrivateFieldGet(this, _inputValueElement).style = "\n      font: ".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_FONT, "; \n      color: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_COLOR, "; \n      width: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH / 2 - 25, "px; // 5px less than foreignObject\n      height: ", 20, "px;\n      border: 0;\n      padding: 2px;\n      margin: 2px;\n    ");

      _classPrivateFieldGet(this, _inputValueElement).addEventListener("keyup", function (e) {
        _this2.socket.value = e.target.value;
      });

      _classPrivateFieldGet(this, _inputValueElement).setAttribute("value", this.socket.value);

      _classPrivateFieldGet(this, _inputValueElement).setAttribute("type", "text");

      textInputValueElem.appendChild(_classPrivateFieldGet(this, _inputValueElement));
      var inputElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
      inputElem.setAttribute("x", 0);
      inputElem.setAttribute("y", 0);
      inputElem.appendChild(_classPrivateFieldGet(this, _socketSymbol));

      if (this.socket.canEditName) {
        inputElem.appendChild(textInputNameElem);
      } else {
        inputElem.appendChild(_classPrivateFieldGet(this, _labelElement));
      }

      inputElem.appendChild(textInputValueElem);
      return inputElem;
    }
    /**
     * The user has completed a valid connection
     * @param {SocketComponent} socketComp Peer socket to connect
     */

  }, {
    key: "connectionDone",
    value: function connectionDone(socketComp) {
      _get(_getPrototypeOf(InputSocketComponent.prototype), "connectionDone", this).call(this, socketComp); // This creates the connection and connects sockets


      new _connections_io_connection__WEBPACK_IMPORTED_MODULE_2__.IOConnection(socketComp, this, this.canvas);
    }
    /**
     * Query if this socket could accept a connection with
     * a peer socket passed as parmeter
     * @param {SocketComponent} socketComp Peer socket to connect
     */

  }, {
    key: "canAcceptPeerSocket",
    value: function canAcceptPeerSocket(socketComp) {
      return socketComp instanceof _output__WEBPACK_IMPORTED_MODULE_8__.OutputSocketComponent && this.socket.node.canBeConnected(this.socket, socketComp.socket);
    }
    /**
     * This socket supports single connection, so if the user
     * connects another socket to it, we have to delete previous connections
     */

  }, {
    key: "getSourcePointDirection",

    /**
     * Returns the direction of the source point for this socket component:
     * -1 = Left
     * 1 = Right
     */
    value: function getSourcePointDirection() {
      return -1;
    }
    /**
     * Update the component element according to x and y local coordinates,
     * if this component is a child component, coordinates in canvas space
     * are computed. In addition, this override will reflect the status of the
     * socket by hiding/showing the text field related to the input socket
     */

  }, {
    key: "updateSVGElement",
    value: function updateSVGElement() {
      _get(_getPrototypeOf(InputSocketComponent.prototype), "updateSVGElement", this).call(this); // Show/Hide the imput component


      _classPrivateFieldGet(this, _inputValueElement).style["display"] = this.isConnected ? "none" : "table-cell";

      if (this.socket.canEditName) {
        _classPrivateFieldGet(this, _inputNameElement).value = "".concat(this.socket.name);
      } else {
        _classPrivateFieldGet(this, _labelElement).innerHTML = "".concat(this.socket.name);
      }

      this.socket.value = _classPrivateFieldGet(this, _inputValueElement).value;
    }
    /**
     * This method is responsible to enumerate all socket of registered nodes
     * that can enstabilish a valid connection with this socket and construct
     * a menu items array thst define callback to create the related node and
     * return the particular socket. It is used by the smart connection process
     * via the context menu
     */

  }, {
    key: "getRegisteredPossiblePeers",
    value: function getRegisteredPossiblePeers() {
      var _this3 = this;

      var items = [];

      var _iterator = _createForOfIteratorHelper(_marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_1__.Env.getCategories()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cat = _step.value;

          var _iterator2 = _createForOfIteratorHelper(_marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_1__.Env.getCategoryNodes(cat)),
              _step2;

          try {
            var _loop = function _loop() {
              var nodeDef = _step2.value;
              // Instantiate the node to enumerate its sockets
              var n = _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_1__.Env.getInstance(nodeDef.name);

              if (n.creatable) {
                var _iterator3 = _createForOfIteratorHelper(n.outputs),
                    _step3;

                try {
                  var _loop2 = function _loop2() {
                    var out = _step3.value;

                    // Create an item only if the input in "compatible" with this output
                    if (_this3.socket.node.canBeConnected(_this3.socket, out)) {
                      items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_5__.MenuItem("\n                  <tspan alignment-baseline=\"middle\" fill=\"".concat(_cnodessocket__WEBPACK_IMPORTED_MODULE_3__.CnodesSocketComponent.getColorForType(out.type), "\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_CATEGORY_FONT, "\">\n                    ").concat(out.name, "\n                  </tspan>\n                  <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_COLOR, "\">\n                    ").concat(nodeDef.name, "\n                  </tspan>\n                  <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_CATEGORY_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_CATEGORY_COLOR, "\">\n                    ").concat(nodeDef.category, "\n                  </tspan>\n                  "), function (x, y) {
                        // create the node and return the specific socket component to
                        // the context menu client
                        var node = new _cnode__WEBPACK_IMPORTED_MODULE_6__.CnodeComponent(n, _this3.canvas);
                        node.pos = new _canvas_position__WEBPACK_IMPORTED_MODULE_7__.Position(x, y); // Return the connected component instead

                        return out.__comp;
                      }));
                    }
                  };

                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    _loop2();
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            };

            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return items;
    }
    /**
     * Returns the array of context menu items. If the component
     * returns null, no contextual menu is shown
     */

  }, {
    key: "getContextMenuItems",
    value: function getContextMenuItems() {
      var _this4 = this;

      var items = [];
      var conn = this.canvas.getConnectionsFor(this)[0];

      if (conn) {
        items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_5__.MenuItem("<tspan alignment-baseline=\"middle\">Disconnect</tspan>", function () {
          // Disconnect this socket
          _this4.canvas.removeConnection(conn);

          _this4.socket.disconnect();
        }));
      }

      if (this.socket.node.canRemoveInput(this.socket)) {
        items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_5__.MenuItem("<tspan alignment-baseline=\"middle\">Delete input</tspan>", function () {
          // First, disconnect if connected
          var conn = _this4.canvas.getConnectionsFor(_this4)[0];

          if (conn) {
            _this4.canvas.removeConnection(conn);

            _this4.socket.disconnect();
          }

          _this4.socket.node.removeInput(_this4.socket);

          _this4.parent.removeComponent(_this4);

          _this4.parent.updateSVGElement();
        }));
      }

      return items.length > 0 ? items : null;
    }
  }, {
    key: "dragElement",
    get: function get() {
      return _classPrivateFieldGet(this, _socketSymbol);
    }
  }, {
    key: "hasSingleConnection",
    get: function get() {
      return true;
    }
  }]);

  return InputSocketComponent;
}(_cnodessocket__WEBPACK_IMPORTED_MODULE_3__.CnodesSocketComponent);

/***/ }),

/***/ "./src/components/next.js":
/*!********************************!*\
  !*** ./src/components/next.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NextSocketComponent": () => /* binding */ NextSocketComponent
/* harmony export */ });
/* harmony import */ var _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @marco.jacovone/cnodes/cnodes */ "../cnodes/cnodes.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./src/components/theme.js");
/* harmony import */ var _canvas_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../canvas/position */ "./src/canvas/position.js");
/* harmony import */ var _connections_prevnext_connection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connections/prevnext_connection */ "./src/connections/prevnext_connection.js");
/* harmony import */ var _cnodessocket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cnodessocket */ "./src/components/cnodessocket.js");
/* harmony import */ var _canvas_socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../canvas/socket */ "./src/canvas/socket.js");
/* harmony import */ var _canvas_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../canvas/menu */ "./src/canvas/menu.js");
/* harmony import */ var _cnode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cnode */ "./src/components/cnode.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */









/**
 * This class implements a socket representing the Next socket in the
 * cnodes context
 */

var _socketSymbol = new WeakMap();

var NextSocketComponent = /*#__PURE__*/function (_CnodesSocketComponen) {
  _inherits(NextSocketComponent, _CnodesSocketComponen);

  var _super = _createSuper(NextSocketComponent);

  /** The socket symbol element */
  function NextSocketComponent(socket) {
    var _thisSuper, _this;

    _classCallCheck(this, NextSocketComponent);

    _this = _super.call(this, socket);

    _socketSymbol.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(NextSocketComponent.prototype)), "setup", _thisSuper).call(_thisSuper);

    return _this;
  }
  /**
   * Customize the drag element
   */


  _createClass(NextSocketComponent, [{
    key: "createElement",

    /**
     * Lets create the element
     */
    value: function createElement() {
      _classPrivateFieldSet(this, _socketSymbol, document.createElementNS("http://www.w3.org/2000/svg", "path"));

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("d", "\n      M -7 -8\n      L 7 -8\n      L 12 0\n      L 7 8\n      L -7 8\n      Z\n      ");

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("stroke", _theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_STROKE_COLOR);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("stroke-width", _theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_STROKE_WIDTH);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("fill", _theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_FILL_COLOR);

      var labelElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
      labelElem.style = "\n      font: ".concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_NAME_FONT, "; \n      color: ").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_NAME_COLOR, "; \n      text-align: right;\n      width: ").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_WIDTH / 2 - 15, "px;\n      height: 30px;\n      line-height: 30px;\n      user-select: none;\n      ");
      labelElem.innerHTML = "".concat(this.socket.name);
      labelElem.setAttribute("x", 0);
      labelElem.setAttribute("y", 0);
      labelElem.setAttribute("transform", "translate(".concat(-_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_WIDTH / 2, ", ").concat(-15, ")"));
      labelElem.setAttribute("width", _theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_WIDTH / 2 - 15);
      labelElem.setAttribute("height", 30);
      var prevElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
      prevElem.setAttribute("x", 0);
      prevElem.setAttribute("y", 0);
      prevElem.appendChild(_classPrivateFieldGet(this, _socketSymbol));
      prevElem.appendChild(labelElem);
      return prevElem;
    }
    /**
     * Query if this socket could accept a connection with
     * a peer socket passed as parmeter
     * @param {SocketComponent} socketComp Peer socket to connect
     */

  }, {
    key: "canAcceptPeerSocket",
    value: function canAcceptPeerSocket(socketComp) {
      return socketComp.socket instanceof _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__.PrevSocket;
    }
    /**
     * The user has completed a valid connection
     * @param {SocketComponent} socketComp Peer socket to connect
     */

  }, {
    key: "connectionDone",
    value: function connectionDone(socketComp) {
      _get(_getPrototypeOf(NextSocketComponent.prototype), "connectionDone", this).call(this, socketComp); // This creates the connection and connects sockets


      new _connections_prevnext_connection__WEBPACK_IMPORTED_MODULE_3__.PrevNextConnection(this, socketComp, this.canvas);
    }
    /**
     * Quesry if this socket could accept a connection with
     * a peer socket passed as parmeter
     * @param {SocketComponent} socketComp Peer socket to connect
     */

  }, {
    key: "canAcceptPeerSocket",
    value: function canAcceptPeerSocket(socketComp) {
      return socketComp.socket instanceof _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__.PrevSocket;
    }
    /**
     * This socket supports single connection, so if the user
     * connects another socket to it, we have to delete previous connections
     */

  }, {
    key: "getSourcePointDirection",

    /**
     * Returns the direction of the source point for this socket component:
     * -1 = Left
     * 1 = Right
     */
    value: function getSourcePointDirection() {
      return 1;
    }
    /**
     * This method is responsible to enumerate all socket of registered nodes
     * that can enstabilish a valid connection with this socket and construct
     * a menu items array thst define callback to create the related node and
     * return the particular socket. It is used by the smart connection process
     * via the context menu
     */

  }, {
    key: "getRegisteredPossiblePeers",
    value: function getRegisteredPossiblePeers() {
      var _this2 = this;

      var items = [];

      var _iterator = _createForOfIteratorHelper(_marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__.Env.getCategories()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cat = _step.value;

          var _iterator2 = _createForOfIteratorHelper(_marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__.Env.getCategoryNodes(cat)),
              _step2;

          try {
            var _loop = function _loop() {
              var nodeDef = _step2.value;
              // Instantiate the node to enumerate its sockets
              var n = _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__.Env.getInstance(nodeDef.name);

              if (n.creatable && n.prev) {
                items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_6__.MenuItem("\n              <tspan alignment-baseline=\"middle\" fill=\"".concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_FILL_COLOR, "\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_CATEGORY_FONT, "\">\n                ").concat(n.prev.name, "\n              </tspan>\n              <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_COLOR, "\">\n              ").concat(nodeDef.name, "\n              </tspan>\n              <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_CATEGORY_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_CATEGORY_COLOR, "\">\n              ").concat(nodeDef.category, "\n              </tspan>\n              "), function (x, y) {
                  // create the node and return the specific socket component to
                  // the context menu client
                  var node = new _cnode__WEBPACK_IMPORTED_MODULE_7__.CnodeComponent(n, _this2.canvas);
                  node.pos = new _canvas_position__WEBPACK_IMPORTED_MODULE_2__.Position(x, y); // Return the connected component instead

                  return n.prev.__comp;
                }));
              }
            };

            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return items;
    }
    /**
     * Returns the array of context menu items. If the component
     * returns null, no contextual menu is shown
     */

  }, {
    key: "getContextMenuItems",
    value: function getContextMenuItems() {
      var _this3 = this;

      var items = [];
      var conn = this.canvas.getConnectionsFor(this)[0];

      if (conn) {
        items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_6__.MenuItem("<tspan alignment-baseline=\"middle\">Disconnect</tspan>", function () {
          // Disconnect this socket
          _this3.canvas.removeConnection(conn);

          _this3.socket.disconnect();
        }));
      }

      return items.length > 0 ? items : null;
    }
  }, {
    key: "dragElement",
    get: function get() {
      return _classPrivateFieldGet(this, _socketSymbol);
    }
  }, {
    key: "hasSingleConnection",
    get: function get() {
      return true;
    }
  }]);

  return NextSocketComponent;
}(_cnodessocket__WEBPACK_IMPORTED_MODULE_4__.CnodesSocketComponent);

/***/ }),

/***/ "./src/components/output.js":
/*!**********************************!*\
  !*** ./src/components/output.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutputSocketComponent": () => /* binding */ OutputSocketComponent
/* harmony export */ });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./src/components/theme.js");
/* harmony import */ var _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @marco.jacovone/cnodes/cnodes */ "../cnodes/cnodes.js");
/* harmony import */ var _connections_io_connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connections/io_connection */ "./src/connections/io_connection.js");
/* harmony import */ var _cnodessocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cnodessocket */ "./src/components/cnodessocket.js");
/* harmony import */ var _canvas_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../canvas/menu */ "./src/canvas/menu.js");
/* harmony import */ var _cnode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cnode */ "./src/components/cnode.js");
/* harmony import */ var _canvas_position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../canvas/position */ "./src/canvas/position.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input */ "./src/components/input.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */








/**
 * This class implements a socket representing a Output in the
 * cnodes world
 */

var _socketSymbol = new WeakMap();

var _outputNameElement = new WeakMap();

var _labelElement = new WeakMap();

var OutputSocketComponent = /*#__PURE__*/function (_CnodesSocketComponen) {
  _inherits(OutputSocketComponent, _CnodesSocketComponen);

  var _super = _createSuper(OutputSocketComponent);

  /** The socket symbol element */

  /** A reference to the output name element, if there is one */

  /** A reference to the label element, if there is one */
  function OutputSocketComponent(socket) {
    var _thisSuper, _this;

    _classCallCheck(this, OutputSocketComponent);

    _this = _super.call(this, socket);

    _socketSymbol.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    _outputNameElement.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    _labelElement.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(OutputSocketComponent.prototype)), "setup", _thisSuper).call(_thisSuper);

    return _this;
  }
  /**
   * Customize the drag element
   */


  _createClass(OutputSocketComponent, [{
    key: "createElement",

    /**
     * Lets create the element
     */
    value: function createElement() {
      var _this2 = this;

      _classPrivateFieldSet(this, _socketSymbol, document.createElementNS("http://www.w3.org/2000/svg", "circle"));

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("cx", 0);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("cy", 0);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("r", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_POINT_RADIUS);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("stroke-width", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_STROKE_WIDTH);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("stroke", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_STROKE_COLOR);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("fill", _cnodessocket__WEBPACK_IMPORTED_MODULE_3__.CnodesSocketComponent.getColorForType(this.socket.type));

      var textOutputNameElem = null;
      /*
       * If this socket can edit name, we create an output element for
       * this name, otherwise, we create a label
       */

      if (this.socket.canEditName) {
        textOutputNameElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        textOutputNameElem.style = "\n        font: ".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_FONT, "; \n        color: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_COLOR, "; \n        text-align: left;\n        line-height: 30px;\n        user-select: none;\n        pointer-events: auto;\n      ");
        textOutputNameElem.setAttribute("x", 0);
        textOutputNameElem.setAttribute("y", 0);
        textOutputNameElem.setAttribute("transform", "translate(".concat(-_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH / 2, ", ").concat(-15, ")"));
        textOutputNameElem.setAttribute("width", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH / 2 - 15);
        textOutputNameElem.setAttribute("height", 30);

        _classPrivateFieldSet(this, _outputNameElement, document.createElement("input"));

        _classPrivateFieldGet(this, _outputNameElement).style = "\n        font: ".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_FONT, "; \n        color: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_COLOR, "; \n        width: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH / 2 - 25, "px; // 5px less than foreignObject\n        height: ", 20, "px;\n        border: 0;\n        padding: 2px;\n        margin: 2px;\n        text-align: right\n      ");

        _classPrivateFieldGet(this, _outputNameElement).addEventListener("keyup", function (e) {
          _this2.socket.name = e.target.value;
        });

        _classPrivateFieldGet(this, _outputNameElement).setAttribute("value", this.socket.name);

        _classPrivateFieldGet(this, _outputNameElement).setAttribute("type", "text");

        textOutputNameElem.appendChild(_classPrivateFieldGet(this, _outputNameElement));
      } else {
        _classPrivateFieldSet(this, _labelElement, document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"));

        _classPrivateFieldGet(this, _labelElement).style = "\n        font: ".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_FONT, "; \n        color: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_COLOR, "; \n        text-align: right;\n        width: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH - 30, "px;\n        height: 30px;\n        line-height: 30px;\n        user-select: none;\n        ");
        _classPrivateFieldGet(this, _labelElement).innerHTML = "".concat(this.socket.name);

        _classPrivateFieldGet(this, _labelElement).setAttribute("x", 0);

        _classPrivateFieldGet(this, _labelElement).setAttribute("y", 0);

        _classPrivateFieldGet(this, _labelElement).setAttribute("transform", "translate(".concat(-_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH + 15, ", ").concat(-15, ")"));

        _classPrivateFieldGet(this, _labelElement).setAttribute("width", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH - 30);

        _classPrivateFieldGet(this, _labelElement).setAttribute("height", 30);
      }

      var outputElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
      outputElem.setAttribute("x", 0);
      outputElem.setAttribute("y", 0);
      outputElem.appendChild(_classPrivateFieldGet(this, _socketSymbol));

      if (this.socket.canEditName) {
        outputElem.appendChild(textOutputNameElem);
      } else {
        outputElem.appendChild(_classPrivateFieldGet(this, _labelElement));
      }

      return outputElem;
    }
    /**
     * The user has completed a valid connection
     * @param {SocketComponent} socketComp Peer socket to connect
     */

  }, {
    key: "connectionDone",
    value: function connectionDone(socketComp) {
      _get(_getPrototypeOf(OutputSocketComponent.prototype), "connectionDone", this).call(this, socketComp); // if there is another connection for the target component,
      // delete the oldest one


      if (socketComp.isConnected) {
        this.canvas.removeConnection(this.canvas.getConnectionsFor(socketComp)[0]);
      } // This creates the connection and connects sockets


      new _connections_io_connection__WEBPACK_IMPORTED_MODULE_2__.IOConnection(this, socketComp, this.canvas);
    }
    /**
     * Query if this socket could accept a connection with
     * a peer socket passed as parmeter
     * @param {SocketComponent} socketComp Peer socket to connect
     */

  }, {
    key: "canAcceptPeerSocket",
    value: function canAcceptPeerSocket(socketComp) {
      return socketComp instanceof _input__WEBPACK_IMPORTED_MODULE_7__.InputSocketComponent && this.socket.node.canBeConnected(this.socket, socketComp.socket);
    }
    /**
     * Returns the direction of the source point for this socket component:
     * -1 = Left
     * 1 = Right
     */

  }, {
    key: "getSourcePointDirection",
    value: function getSourcePointDirection() {
      return 1;
    }
    /**
     * This socket is a multi-connection socket. This means that
     * many sockets can be connected to it
     */

  }, {
    key: "getRegisteredPossiblePeers",

    /**
     * This method is responsible to enumerate all socket of registered nodes
     * that can enstabilish a valid connection with this socket and construct
     * a menu items array thst define callback to create the related node and
     * return the particular socket. It is used by the smart connection process
     * via the context menu
     */
    value: function getRegisteredPossiblePeers() {
      var _this3 = this;

      var items = [];

      var _iterator = _createForOfIteratorHelper(_marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_1__.Env.getCategories()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cat = _step.value;

          var _iterator2 = _createForOfIteratorHelper(_marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_1__.Env.getCategoryNodes(cat)),
              _step2;

          try {
            var _loop = function _loop() {
              var nodeDef = _step2.value;
              // Instantiate the node to enumerate its sockets
              var n = _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_1__.Env.getInstance(nodeDef.name);

              if (n.creatable) {
                var _iterator3 = _createForOfIteratorHelper(n.inputs),
                    _step3;

                try {
                  var _loop2 = function _loop2() {
                    var inp = _step3.value;

                    // Create an item only if the input in "compatible" with this output
                    if (_this3.socket.node.canBeConnected(_this3.socket, inp)) {
                      items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_4__.MenuItem("\n                  <tspan alignment-baseline=\"middle\" fill=\"".concat(_cnodessocket__WEBPACK_IMPORTED_MODULE_3__.CnodesSocketComponent.getColorForType(inp.type), "\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_CATEGORY_FONT, "\">\n                    ").concat(inp.name, "\n                  </tspan>\n                  <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_COLOR, "\">\n                    ").concat(nodeDef.name, "\n                  </tspan>\n                  <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_CATEGORY_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_CATEGORY_COLOR, "\">\n                    ").concat(nodeDef.category, "\n                  </tspan>\n                  "), function (x, y) {
                        // create the node and return the specific socket component to
                        // the context menu client
                        var node = new _cnode__WEBPACK_IMPORTED_MODULE_5__.CnodeComponent(n, _this3.canvas);
                        node.pos = new _canvas_position__WEBPACK_IMPORTED_MODULE_6__.Position(x, y); // Return the connected component instead

                        return inp.__comp;
                      }));
                    }
                  };

                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    _loop2();
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            };

            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return items;
    }
    /**
     * Returns the array of context menu items. If the component
     * returns null, no contextual menu is shown
     */

  }, {
    key: "getContextMenuItems",
    value: function getContextMenuItems() {
      var _this4 = this;

      var items = [];
      var conns = this.canvas.getConnectionsFor(this);

      if (conns.length > 0) {
        items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_4__.MenuItem("<tspan alignment-baseline=\"middle\">Disconnect all</tspan>", function () {
          var _iterator4 = _createForOfIteratorHelper(conns),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var c = _step4.value;

              // Disconnect this socket
              _this4.canvas.removeConnection(c);

              _this4.socket.disconnect(c.target);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }));
      }

      if (this.socket.node.canRemoveOutput(this.socket)) {
        items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_4__.MenuItem("<tspan alignment-baseline=\"middle\">Delete output</tspan>", function () {
          // First, disconnect all peers
          var conns = _this4.canvas.getConnectionsFor(_this4);

          if (conns.length > 0) {
            var _iterator5 = _createForOfIteratorHelper(conns),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var c = _step5.value;

                _this4.canvas.removeConnection(c);

                _this4.socket.disconnect(c.target);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }

          _this4.socket.node.removeOutput(_this4.socket);

          _this4.parent.removeComponent(_this4);

          _this4.parent.updateSVGElement();
        }));
      }

      return items.length > 0 ? items : null;
    }
  }, {
    key: "dragElement",
    get: function get() {
      return _classPrivateFieldGet(this, _socketSymbol);
    }
  }, {
    key: "hasSingleConnection",
    get: function get() {
      return false;
    }
  }]);

  return OutputSocketComponent;
}(_cnodessocket__WEBPACK_IMPORTED_MODULE_3__.CnodesSocketComponent);

/***/ }),

/***/ "./src/components/prev.js":
/*!********************************!*\
  !*** ./src/components/prev.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrevSocketComponent": () => /* binding */ PrevSocketComponent
/* harmony export */ });
/* harmony import */ var _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @marco.jacovone/cnodes/cnodes */ "../cnodes/cnodes.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./src/components/theme.js");
/* harmony import */ var _connections_prevnext_connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connections/prevnext_connection */ "./src/connections/prevnext_connection.js");
/* harmony import */ var _cnodessocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cnodessocket */ "./src/components/cnodessocket.js");
/* harmony import */ var _canvas_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../canvas/menu */ "./src/canvas/menu.js");
/* harmony import */ var _cnode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cnode */ "./src/components/cnode.js");
/* harmony import */ var _canvas_position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../canvas/position */ "./src/canvas/position.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */








/**
 * This class implements a socket that represents a Prev object
 * in the cnodes world
 */

var _socketSymbol = new WeakMap();

var PrevSocketComponent = /*#__PURE__*/function (_CnodesSocketComponen) {
  _inherits(PrevSocketComponent, _CnodesSocketComponen);

  var _super = _createSuper(PrevSocketComponent);

  /** The socket symbol element */
  function PrevSocketComponent(socket) {
    var _thisSuper, _this;

    _classCallCheck(this, PrevSocketComponent);

    _this = _super.call(this, socket);

    _socketSymbol.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(PrevSocketComponent.prototype)), "setup", _thisSuper).call(_thisSuper);

    return _this;
  }
  /**
   * Customize the drag element
   */


  _createClass(PrevSocketComponent, [{
    key: "createElement",

    /**
     * Lets create the element
     */
    value: function createElement() {
      _classPrivateFieldSet(this, _socketSymbol, document.createElementNS("http://www.w3.org/2000/svg", "path"));

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("d", "\n      M ".concat(-_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_POINT_RADIUS, " ").concat(-_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_POINT_RADIUS, "\n      L ").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_POINT_RADIUS, " ").concat(-_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_POINT_RADIUS, "\n      L ").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_POINT_RADIUS, " ").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_POINT_RADIUS, "\n      L ").concat(-_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_POINT_RADIUS, " ").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_POINT_RADIUS, "\n      Z\n      "));

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("stroke", _theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_STROKE_COLOR);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("stroke-width", _theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_STROKE_WIDTH);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("fill", _theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_FILL_COLOR);

      var labelElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
      labelElem.style = "\n      font: ".concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_NAME_FONT, "; \n      color: ").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_NAME_COLOR, "; \n      text-align: left;\n      width: ").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_WIDTH / 2 - 15, "px;\n      height: 30px;\n      line-height: 30px;\n      user-select: none;\n      ");
      labelElem.innerHTML = "".concat(this.socket.name);
      labelElem.setAttribute("x", 0);
      labelElem.setAttribute("y", 0);
      labelElem.setAttribute("transform", "translate(".concat(15, ", ", -15, ")"));
      labelElem.setAttribute("width", _theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_WIDTH / 2 - 15);
      labelElem.setAttribute("height", 30);
      var prevElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
      prevElem.setAttribute("x", 0);
      prevElem.setAttribute("y", 0);
      prevElem.appendChild(_classPrivateFieldGet(this, _socketSymbol));
      prevElem.appendChild(labelElem);
      return prevElem;
    }
    /**
     * The user has completed a valid connection
     * @param {SocketComponent} socketComp Peer socket to connect
     */

  }, {
    key: "connectionDone",
    value: function connectionDone(socketComp) {
      _get(_getPrototypeOf(PrevSocketComponent.prototype), "connectionDone", this).call(this, socketComp); // if there is another connection for the target component,
      // delete the oldest one


      if (socketComp.isConnected) {
        this.canvas.removeConnection(this.canvas.getConnectionsFor(socketComp)[0]);
      } // This creates the connection and connects sockets


      new _connections_prevnext_connection__WEBPACK_IMPORTED_MODULE_2__.PrevNextConnection(socketComp, this, this.canvas);
    }
    /**
     * Quesry if this socket could accept a connection with
     * a peer socket passed as parmeter
     * @param {SocketComponent} socketComp Peer socket to connect
     */

  }, {
    key: "canAcceptPeerSocket",
    value: function canAcceptPeerSocket(socketComp) {
      return socketComp.socket instanceof _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__.NextSocket;
    }
    /**
     * Returns the direction of the source point for this socket component:
     * -1 = Left
     * 1 = Right
     */

  }, {
    key: "getSourcePointDirection",
    value: function getSourcePointDirection() {
      return -1;
    }
    /**
     * This socket is a multi-connection socket. This means that
     * many sockets can be connected to it
     */

  }, {
    key: "getRegisteredPossiblePeers",

    /**
     * This method is responsible to enumerate all socket of registered nodes
     * that can enstabilish a valid connection with this socket and construct
     * a menu items array thst define callback to create the related node and
     * return the particular socket. It is used by the smart connection process
     * via the context menu
     */
    value: function getRegisteredPossiblePeers() {
      var _this2 = this;

      var items = [];

      var _iterator = _createForOfIteratorHelper(_marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__.Env.getCategories()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cat = _step.value;

          var _iterator2 = _createForOfIteratorHelper(_marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__.Env.getCategoryNodes(cat)),
              _step2;

          try {
            var _loop = function _loop() {
              var nodeDef = _step2.value;
              // Instantiate the node to enumerate its sockets
              var n = _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__.Env.getInstance(nodeDef.name);

              if (n.creatable) {
                var _iterator3 = _createForOfIteratorHelper(n.nexts),
                    _step3;

                try {
                  var _loop2 = function _loop2() {
                    var next = _step3.value;
                    items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_4__.MenuItem("\n                <tspan alignment-baseline=\"middle\" fill=\"".concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_FILL_COLOR, "\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_CATEGORY_FONT, "\">\n                  ").concat(next.name, "\n                </tspan>\n                <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_COLOR, "\">\n                  ").concat(nodeDef.name, "\n                </tspan>\n                <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_CATEGORY_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_CATEGORY_COLOR, "\">\n                  ").concat(nodeDef.category, "\n                </tspan>\n                "), function (x, y) {
                      // create the node and return the specific socket component to
                      // the context menu client
                      var node = new _cnode__WEBPACK_IMPORTED_MODULE_5__.CnodeComponent(n, _this2.canvas);
                      node.pos = new _canvas_position__WEBPACK_IMPORTED_MODULE_6__.Position(x, y); // Return the connected component instead

                      return next.__comp;
                    }));
                  };

                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    _loop2();
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            };

            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return items;
    }
    /**
     * Returns the array of context menu items. If the component
     * returns null, no contextual menu is shown
     */

  }, {
    key: "getContextMenuItems",
    value: function getContextMenuItems() {
      var _this3 = this;

      var items = [];
      var conns = this.canvas.getConnectionsFor(this);

      if (conns.length > 0) {
        items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_4__.MenuItem("<tspan alignment-baseline=\"middle\">Disconnect all</tspan>", function () {
          var _iterator4 = _createForOfIteratorHelper(conns),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var c = _step4.value;

              // Disconnect this socket
              _this3.canvas.removeConnection(c);

              _this3.socket.disconnect(c.source);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }));
      }

      return items.length > 0 ? items : null;
    }
  }, {
    key: "dragElement",
    get: function get() {
      return _classPrivateFieldGet(this, _socketSymbol);
    }
  }, {
    key: "hasSingleConnection",
    get: function get() {
      return false;
    }
  }]);

  return PrevSocketComponent;
}(_cnodessocket__WEBPACK_IMPORTED_MODULE_3__.CnodesSocketComponent);

/***/ }),

/***/ "./src/components/theme.js":
/*!*********************************!*\
  !*** ./src/components/theme.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Theme": () => /* binding */ Theme,
/* harmony export */   "defaultLight": () => /* binding */ defaultLight
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

/**
 * This class contains all values needed to draw all elements
 * of design for cnodes-ui. The user can customize the graphic
 * aspect of element by defining a theme.
 * For exemple to modify the node with you can define your own
 * property inside a custom theme:
 *
 * class MyTheme extends cnui.Theme {
 *   get NODE_WIDTH() {
 *     return 400;
 *   }
 * }
 *
 * Now activate the theme by setting:
 *
 * cnui.Theme.current = new MyTheme();
 *
 */
var Theme = /*#__PURE__*/function () {
  function Theme() {
    _classCallCheck(this, Theme);
  } // Canvas


  _createClass(Theme, [{
    key: "CANVAS_BACKGROUND_COLOR",
    get: function get() {
      return "white";
    } // Node container

  }, {
    key: "NODE_WIDTH",
    get: function get() {
      return 200;
    }
  }, {
    key: "NODE_BORDER_RADIUS",
    get: function get() {
      return 15;
    }
  }, {
    key: "NODE_FILL_COLOR",
    get: function get() {
      return "#FAD7A0";
    }
  }, {
    key: "NODE_FUNCTIONAL_FILL_COLOR",
    get: function get() {
      return "#C5F0FF";
    }
  }, {
    key: "NODE_STROKE_COLOR",
    get: function get() {
      return "#FFFFFF";
    }
  }, {
    key: "NODE_FUNCTIONAL_STROKE_COLOR",
    get: function get() {
      return "#FFFFFF";
    }
  }, {
    key: "NODE_STROKE_WIDTH",
    get: function get() {
      return 3;
    }
  }, {
    key: "NODE_TITLE_COLOR",
    get: function get() {
      return "brown";
    }
  }, {
    key: "NODE_FUNCTIONAL_TITLE_COLOR",
    get: function get() {
      return "#069DD1";
    }
  }, {
    key: "NODE_TITLE_FONT",
    get: function get() {
      return "bold 18px verdana";
    }
  }, {
    key: "NODE_SYMBOL_STROKE_WIDTH",
    get: function get() {
      return 3;
    }
  }, {
    key: "NODE_SYMBOL_STROKE_COLOR",
    get: function get() {
      return "#FEF9E7";
    }
  }, {
    key: "NODE_SYMBOL_FILL_COLOR",
    get: function get() {
      return "#FEF9E7";
    }
  }, {
    key: "NODE_SIGN_COLOR",
    get: function get() {
      return "#31A200";
    }
  }, {
    key: "NODE_FUNCTIONAL_SIGN_COLOR",
    get: function get() {
      return "#008EBF";
    } // Sockets

  }, {
    key: "NODE_PREV_NEXT_STROKE_WIDTH",
    get: function get() {
      return 2;
    }
  }, {
    key: "NODE_PREV_NEXT_STROKE_COLOR",
    get: function get() {
      return "#31A200";
    }
  }, {
    key: "NODE_PREV_NEXT_FILL_COLOR",
    get: function get() {
      return "#31A200";
    }
  }, {
    key: "NODE_PREV_NEXT_NAME_FONT",
    get: function get() {
      return "bold 11px verdana";
    }
  }, {
    key: "NODE_PREV_NEXT_NAME_COLOR",
    get: function get() {
      return "bold 11px black";
    }
  }, {
    key: "NODE_PREV_NEXT_POINT_RADIUS",
    get: function get() {
      return 8;
    }
  }, {
    key: "NODE_IO_STROKE_WIDTH",
    get: function get() {
      return 4;
    }
  }, {
    key: "NODE_IO_STROKE_COLOR",
    get: function get() {
      return "white";
    } // The color fill is based on socket type
    // get NODE_IO_FILL_COLOR() {
    //   return "#008EBF";
    // }

  }, {
    key: "NODE_IO_NAME_FONT",
    get: function get() {
      return "bold 11px verdana";
    }
  }, {
    key: "NODE_IO_NAME_COLOR",
    get: function get() {
      return "bold 11px black";
    }
  }, {
    key: "NODE_IO_POINT_RADIUS",
    get: function get() {
      return 10;
    } // IO Connections

  }, {
    key: "CONNECTION_TEMP_WIDTH",
    get: function get() {
      return 4;
    }
  }, {
    key: "CONNECTION_TEMP_INVALID_COLOR",
    get: function get() {
      return "red";
    }
  }, {
    key: "CONNECTION_TEMP_VALID_COLOR",
    get: function get() {
      return "gray";
    }
  }, {
    key: "CONNECTION_TEMP_COLOR",
    get: function get() {
      return "#DDDDDD";
    }
  }, {
    key: "CONNECTION_IO_WIDTH",
    get: function get() {
      return 4;
    }
  }, {
    key: "CONNECTION_IO_COLOR",
    get: function get() {
      return "#008EBF";
    }
  }, {
    key: "CONNECTION_PREV_NEXT_WIDTH",
    get: function get() {
      return 4;
    }
  }, {
    key: "CONNECTION_PREV_NEXT_COLOR",
    get: function get() {
      return "#31A200";
    } // Menu

  }, {
    key: "MENU_MIN_WIDTH",
    get: function get() {
      return 200;
    }
  }, {
    key: "MENU_BORDER_RADIUS",
    get: function get() {
      return 10;
    }
  }, {
    key: "MENU_FILL_COLOR",
    get: function get() {
      return "#F3F3F3";
    }
  }, {
    key: "MENU_STROKE_COLOR",
    get: function get() {
      return "#EEEEEE";
    }
  }, {
    key: "MENU_STROKE_WIDTH",
    get: function get() {
      return 2;
    }
  }, {
    key: "MENU_ITEM_HEIGHT",
    get: function get() {
      return 33;
    }
  }, {
    key: "MENU_ITEM_FONT",
    get: function get() {
      return "font: bold 14px sans-serif";
    }
  }, {
    key: "MENU_ITEM_CATEGORY_FONT",
    get: function get() {
      return "font: bold 10px sans-serif";
    }
  }, {
    key: "MENU_ITEM_COLOR",
    get: function get() {
      return "black";
    }
  }, {
    key: "MENU_ITEM_CATEGORY_COLOR",
    get: function get() {
      return "lightgray";
    }
  }, {
    key: "MENU_ITEM_HIGHLIGHT",
    get: function get() {
      return "white";
    }
  }, {
    key: "MENU_SEARCH_FONT",
    get: function get() {
      return "bold 11px verdana";
    }
  }, {
    key: "TYPE_ARRAY_COLOR",
    get: function get() {
      return "orange";
    }
  }, {
    key: "TYPE_OBJECT_COLOR",
    get: function get() {
      return "#008EBF";
    }
  }, {
    key: "TYPE_NUMBER_COLOR",
    get: function get() {
      return "green";
    }
  }, {
    key: "TYPE_STRING_COLOR",
    get: function get() {
      return "#CB4335";
    }
  }, {
    key: "TYPE_BOOLEAN_COLOR",
    get: function get() {
      return "#F5B7B1";
    }
  }, {
    key: "TYPE_ANY_COLOR",
    get: function get() {
      return "#d9d9d9";
    }
  }]);

  return Theme;
}();
/** Default Light Theme */

_defineProperty(Theme, "current", new Theme());

var defaultLight = new Theme();

/***/ }),

/***/ "./src/connections/io_connection.js":
/*!******************************************!*\
  !*** ./src/connections/io_connection.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IOConnection": () => /* binding */ IOConnection
/* harmony export */ });
/* harmony import */ var _canvas_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas/position */ "./src/canvas/position.js");
/* harmony import */ var _components_cnodesconnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cnodesconnection */ "./src/components/cnodesconnection.js");
/* harmony import */ var _components_cnodessocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cnodessocket */ "./src/components/cnodessocket.js");
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/theme */ "./src/components/theme.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */




/**
 * This class implements a connection for Input->Output connection
 * in the cnodes world. It embed both source and target sockets that
 * must be of type InputSocketComponent and OutputSocketComponent, and manages
 * the connection status of the embedded cnodes's socket
 */

var IOConnection = /*#__PURE__*/function (_CnodesConnection) {
  _inherits(IOConnection, _CnodesConnection);

  var _super = _createSuper(IOConnection);

  function IOConnection(source, target, canvas) {
    _classCallCheck(this, IOConnection);

    return _super.call(this, source, target, canvas);
  }
  /**
   * Update the aspect of the connection
   */


  _createClass(IOConnection, [{
    key: "updateSVGElement",
    value: function updateSVGElement() {
      var sourcePoint = new _canvas_position__WEBPACK_IMPORTED_MODULE_0__.Position(this.source.absPos.x, this.source.absPos.y);
      var targetPoint = new _canvas_position__WEBPACK_IMPORTED_MODULE_0__.Position(this.target.absPos.x - _components_theme__WEBPACK_IMPORTED_MODULE_3__.Theme.current.NODE_IO_POINT_RADIUS, this.target.absPos.y);
      var cpXDistance = Math.max(0.8 * Math.abs(sourcePoint.x - targetPoint.x), 100);
      var cp1 = sourcePoint.add(new _canvas_position__WEBPACK_IMPORTED_MODULE_0__.Position(cpXDistance, -0.1 * (sourcePoint.y - targetPoint.y)));
      var cp2 = targetPoint.add(new _canvas_position__WEBPACK_IMPORTED_MODULE_0__.Position(-cpXDistance, 0.1 * (sourcePoint.y - targetPoint.y)));
      this.connectionEl.setAttribute("d", "\n      M ".concat(sourcePoint.x, " ").concat(sourcePoint.y, "\n      C ").concat(cp1.x, " ").concat(cp1.y, " ").concat(cp2.x, " ").concat(cp2.y, " ").concat(targetPoint.x, " ").concat(targetPoint.y, "\n    "));
      this.connectionEl.setAttribute("stroke-width", _components_theme__WEBPACK_IMPORTED_MODULE_3__.Theme.current.CONNECTION_IO_WIDTH);
      this.connectionEl.setAttribute("stroke", _components_cnodessocket__WEBPACK_IMPORTED_MODULE_2__.CnodesSocketComponent.getColorForType(this.getRelevantType(this.source.socket.type, this.target.socket.type)));
      this.connectionEl.setAttribute("marker-end", "url(#io-arrow-".concat(this.getRelevantType(this.source.socket.type, this.target.socket.type), ")"));
      this.connectionEl.setAttribute("fill", "transparent");
    }
  }]);

  return IOConnection;
}(_components_cnodesconnection__WEBPACK_IMPORTED_MODULE_1__.CnodesConnection);

/***/ }),

/***/ "./src/connections/prevnext_connection.js":
/*!************************************************!*\
  !*** ./src/connections/prevnext_connection.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrevNextConnection": () => /* binding */ PrevNextConnection
/* harmony export */ });
/* harmony import */ var _canvas_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas/position */ "./src/canvas/position.js");
/* harmony import */ var _components_cnodesconnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cnodesconnection */ "./src/components/cnodesconnection.js");
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/theme */ "./src/components/theme.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a connection for Input->Output connection
 * in the cnodes world. It embed both source and target sockets that
 * must be of type InputSocketComponent and OutputSocketComponent, and manages
 * the connection status of the embedded cnodes's socket
 */

var PrevNextConnection = /*#__PURE__*/function (_CnodesConnection) {
  _inherits(PrevNextConnection, _CnodesConnection);

  var _super = _createSuper(PrevNextConnection);

  function PrevNextConnection(source, target, canvas) {
    var connect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    _classCallCheck(this, PrevNextConnection);

    return _super.call(this, source, target, canvas);
  }
  /**
   * Update the aspect of the connection
   */


  _createClass(PrevNextConnection, [{
    key: "updateSVGElement",
    value: function updateSVGElement() {
      var sourcePoint = new _canvas_position__WEBPACK_IMPORTED_MODULE_0__.Position(this.source.absPos.x, this.source.absPos.y);
      var targetPoint = new _canvas_position__WEBPACK_IMPORTED_MODULE_0__.Position(this.target.absPos.x - _components_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.NODE_PREV_NEXT_POINT_RADIUS, this.target.absPos.y);
      var cpXDistance = Math.max(0.8 * Math.abs(sourcePoint.x - targetPoint.x), 100);
      var cp1 = sourcePoint.add(new _canvas_position__WEBPACK_IMPORTED_MODULE_0__.Position(cpXDistance, -0.1 * (sourcePoint.y - targetPoint.y)));
      var cp2 = targetPoint.add(new _canvas_position__WEBPACK_IMPORTED_MODULE_0__.Position(-cpXDistance, 0.1 * (sourcePoint.y - targetPoint.y)));
      this.connectionEl.setAttribute("d", "\n      M ".concat(sourcePoint.x, " ").concat(sourcePoint.y, "\n      C ").concat(cp1.x, " ").concat(cp1.y, " ").concat(cp2.x, " ").concat(cp2.y, " ").concat(targetPoint.x, " ").concat(targetPoint.y, "\n    "));
      this.connectionEl.setAttribute("stroke-width", _components_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.CONNECTION_PREV_NEXT_WIDTH);
      this.connectionEl.setAttribute("stroke", _components_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.CONNECTION_PREV_NEXT_COLOR);
      this.connectionEl.setAttribute("marker-end", "url(#prevnext-arrow)");
      this.connectionEl.setAttribute("fill", "transparent");
    }
  }]);

  return PrevNextConnection;
}(_components_cnodesconnection__WEBPACK_IMPORTED_MODULE_1__.CnodesConnection);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Canvas": () => /* reexport safe */ _canvas_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas,
/* harmony export */   "Component": () => /* reexport safe */ _canvas_component__WEBPACK_IMPORTED_MODULE_1__.Component,
/* harmony export */   "CnodeComponent": () => /* reexport safe */ _components_cnode__WEBPACK_IMPORTED_MODULE_3__.CnodeComponent,
/* harmony export */   "Position": () => /* reexport safe */ _canvas_position__WEBPACK_IMPORTED_MODULE_2__.Position,
/* harmony export */   "Theme": () => /* reexport safe */ _components_theme__WEBPACK_IMPORTED_MODULE_4__.Theme,
/* harmony export */   "defaultLight": () => /* reexport safe */ _components_theme__WEBPACK_IMPORTED_MODULE_4__.defaultLight,
/* harmony export */   "CnodesCanvas": () => /* reexport safe */ _components_cnodescanvas__WEBPACK_IMPORTED_MODULE_5__.CnodesCanvas,
/* harmony export */   "APush": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.APush,
/* harmony export */   "Call": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Call,
/* harmony export */   "Comparision": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Comparision,
/* harmony export */   "Console": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Console,
/* harmony export */   "Env": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Env,
/* harmony export */   "FAConst": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FAConst,
/* harmony export */   "FAGet": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FAGet,
/* harmony export */   "FALength": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FALength,
/* harmony export */   "FAMake": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FAMake,
/* harmony export */   "FAdd": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FAdd,
/* harmony export */   "FCompare": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FCompare,
/* harmony export */   "FConcat": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FConcat,
/* harmony export */   "FDiv": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FDiv,
/* harmony export */   "FGetvar": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FGetvar,
/* harmony export */   "FIf": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FIf,
/* harmony export */   "FMod": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FMod,
/* harmony export */   "FMul": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FMul,
/* harmony export */   "FNConst": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FNConst,
/* harmony export */   "FOBreak": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FOBreak,
/* harmony export */   "FOMake": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FOMake,
/* harmony export */   "FSConst": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FSConst,
/* harmony export */   "FSqrt": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FSqrt,
/* harmony export */   "FlowSocket": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FlowSocket,
/* harmony export */   "For": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.For,
/* harmony export */   "Getvar": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Getvar,
/* harmony export */   "If": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.If,
/* harmony export */   "InputSocket": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.InputSocket,
/* harmony export */   "NextSocket": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.NextSocket,
/* harmony export */   "Node": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Node,
/* harmony export */   "OutputSocket": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.OutputSocket,
/* harmony export */   "PrevSocket": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.PrevSocket,
/* harmony export */   "Program": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Program,
/* harmony export */   "Result": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Result,
/* harmony export */   "Setvar": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Setvar,
/* harmony export */   "Socket": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Socket,
/* harmony export */   "Types": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Types,
/* harmony export */   "ValueSocket": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.ValueSocket,
/* harmony export */   "While": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.While,
/* harmony export */   "apushNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.apushNode,
/* harmony export */   "callNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.callNode,
/* harmony export */   "consoleNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.consoleNode,
/* harmony export */   "faconstNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.faconstNode,
/* harmony export */   "faddNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.faddNode,
/* harmony export */   "fagetNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fagetNode,
/* harmony export */   "falengthNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.falengthNode,
/* harmony export */   "famakeNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.famakeNode,
/* harmony export */   "fcompareNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fcompareNode,
/* harmony export */   "fconcatNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fconcatNode,
/* harmony export */   "fdivNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fdivNode,
/* harmony export */   "fgetvarNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fgetvarNode,
/* harmony export */   "fifNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fifNode,
/* harmony export */   "fmodNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fmodNode,
/* harmony export */   "fmulNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fmulNode,
/* harmony export */   "fnconstNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fnconstNode,
/* harmony export */   "fobreakNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fobreakNode,
/* harmony export */   "fomakeNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fomakeNode,
/* harmony export */   "forNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.forNode,
/* harmony export */   "fsconstNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fsconstNode,
/* harmony export */   "fsqrtNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fsqrtNode,
/* harmony export */   "getvarNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.getvarNode,
/* harmony export */   "ifNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.ifNode,
/* harmony export */   "program": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.program,
/* harmony export */   "setvarNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.setvarNode,
/* harmony export */   "whileNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.whileNode,
/* harmony export */   "canvas": () => /* binding */ canvas
/* harmony export */ });
/* harmony import */ var _canvas_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas/canvas */ "./src/canvas/canvas.js");
/* harmony import */ var _canvas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas/component */ "./src/canvas/component.js");
/* harmony import */ var _canvas_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas/position */ "./src/canvas/position.js");
/* harmony import */ var _components_cnode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cnode */ "./src/components/cnode.js");
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/theme */ "./src/components/theme.js");
/* harmony import */ var _components_cnodescanvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cnodescanvas */ "./src/components/cnodescanvas.js");
/* harmony import */ var _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @marco.jacovone/cnodes/cnodes */ "../cnodes/cnodes.js");
/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */









/**
 * This is the main entrypoint function. You can pass an ID of a
 * DOM element by parameter (tipically a DIV element).
 * For example, having a simple DOM element like
 *
 * <div id="mycanvas" class="fullscreen"></div>
 *
 * You can do
 *
 * <script>
 *  let canvas = cnui.canvas('mycanvas');
 *  let prg = cnui.Env.import(JSON.parse('...'));
 *  canvas.program = prg;
 * </script>
 *
 * @param {string} elId The id of the DOM element you want to become a CNODES-UI canvas
 */

function canvas(elId) {
  var el = document.getElementById(elId);

  if (!el) {
    console.log("No element with id '".concat(elId, "'"));
    return null;
  }

  _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Env.init();
  return new _components_cnodescanvas__WEBPACK_IMPORTED_MODULE_5__.CnodesCanvas(el);
}

/***/ }),

/***/ "../cnodes/cnodes.js":
/*!***************************!*\
  !*** ../cnodes/cnodes.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Env": () => /* reexport safe */ _lib_core_env_js__WEBPACK_IMPORTED_MODULE_0__.Env,
/* harmony export */   "Node": () => /* reexport safe */ _lib_core_node_js__WEBPACK_IMPORTED_MODULE_1__.Node,
/* harmony export */   "Result": () => /* reexport safe */ _lib_core_node_js__WEBPACK_IMPORTED_MODULE_1__.Result,
/* harmony export */   "Program": () => /* reexport safe */ _lib_core_program_js__WEBPACK_IMPORTED_MODULE_2__.Program,
/* harmony export */   "program": () => /* reexport safe */ _lib_core_program_js__WEBPACK_IMPORTED_MODULE_2__.program,
/* harmony export */   "FlowSocket": () => /* reexport safe */ _lib_core_socket_js__WEBPACK_IMPORTED_MODULE_3__.FlowSocket,
/* harmony export */   "InputSocket": () => /* reexport safe */ _lib_core_socket_js__WEBPACK_IMPORTED_MODULE_3__.InputSocket,
/* harmony export */   "NextSocket": () => /* reexport safe */ _lib_core_socket_js__WEBPACK_IMPORTED_MODULE_3__.NextSocket,
/* harmony export */   "OutputSocket": () => /* reexport safe */ _lib_core_socket_js__WEBPACK_IMPORTED_MODULE_3__.OutputSocket,
/* harmony export */   "PrevSocket": () => /* reexport safe */ _lib_core_socket_js__WEBPACK_IMPORTED_MODULE_3__.PrevSocket,
/* harmony export */   "Socket": () => /* reexport safe */ _lib_core_socket_js__WEBPACK_IMPORTED_MODULE_3__.Socket,
/* harmony export */   "ValueSocket": () => /* reexport safe */ _lib_core_socket_js__WEBPACK_IMPORTED_MODULE_3__.ValueSocket,
/* harmony export */   "Types": () => /* reexport safe */ _lib_core_type_js__WEBPACK_IMPORTED_MODULE_4__.Types,
/* harmony export */   "Call": () => /* reexport safe */ _lib_nodes_call_js__WEBPACK_IMPORTED_MODULE_5__.Call,
/* harmony export */   "callNode": () => /* reexport safe */ _lib_nodes_call_js__WEBPACK_IMPORTED_MODULE_5__.callNode,
/* harmony export */   "Console": () => /* reexport safe */ _lib_nodes_console_js__WEBPACK_IMPORTED_MODULE_6__.Console,
/* harmony export */   "consoleNode": () => /* reexport safe */ _lib_nodes_console_js__WEBPACK_IMPORTED_MODULE_6__.consoleNode,
/* harmony export */   "FGetvar": () => /* reexport safe */ _lib_nodes_fgetvar_js__WEBPACK_IMPORTED_MODULE_7__.FGetvar,
/* harmony export */   "fgetvarNode": () => /* reexport safe */ _lib_nodes_fgetvar_js__WEBPACK_IMPORTED_MODULE_7__.fgetvarNode,
/* harmony export */   "For": () => /* reexport safe */ _lib_nodes_for_js__WEBPACK_IMPORTED_MODULE_8__.For,
/* harmony export */   "forNode": () => /* reexport safe */ _lib_nodes_for_js__WEBPACK_IMPORTED_MODULE_8__.forNode,
/* harmony export */   "Getvar": () => /* reexport safe */ _lib_nodes_getvar_js__WEBPACK_IMPORTED_MODULE_9__.Getvar,
/* harmony export */   "getvarNode": () => /* reexport safe */ _lib_nodes_getvar_js__WEBPACK_IMPORTED_MODULE_9__.getvarNode,
/* harmony export */   "If": () => /* reexport safe */ _lib_nodes_if_js__WEBPACK_IMPORTED_MODULE_10__.If,
/* harmony export */   "ifNode": () => /* reexport safe */ _lib_nodes_if_js__WEBPACK_IMPORTED_MODULE_10__.ifNode,
/* harmony export */   "Setvar": () => /* reexport safe */ _lib_nodes_setvar_js__WEBPACK_IMPORTED_MODULE_11__.Setvar,
/* harmony export */   "setvarNode": () => /* reexport safe */ _lib_nodes_setvar_js__WEBPACK_IMPORTED_MODULE_11__.setvarNode,
/* harmony export */   "While": () => /* reexport safe */ _lib_nodes_while_js__WEBPACK_IMPORTED_MODULE_12__.While,
/* harmony export */   "whileNode": () => /* reexport safe */ _lib_nodes_while_js__WEBPACK_IMPORTED_MODULE_12__.whileNode,
/* harmony export */   "FIf": () => /* reexport safe */ _lib_nodes_fif_js__WEBPACK_IMPORTED_MODULE_13__.FIf,
/* harmony export */   "fifNode": () => /* reexport safe */ _lib_nodes_fif_js__WEBPACK_IMPORTED_MODULE_13__.fifNode,
/* harmony export */   "Comparision": () => /* reexport safe */ _lib_nodes_bool_fcompare_js__WEBPACK_IMPORTED_MODULE_14__.Comparision,
/* harmony export */   "FCompare": () => /* reexport safe */ _lib_nodes_bool_fcompare_js__WEBPACK_IMPORTED_MODULE_14__.FCompare,
/* harmony export */   "fcompareNode": () => /* reexport safe */ _lib_nodes_bool_fcompare_js__WEBPACK_IMPORTED_MODULE_14__.fcompareNode,
/* harmony export */   "FSConst": () => /* reexport safe */ _lib_nodes_string_fsconst_js__WEBPACK_IMPORTED_MODULE_15__.FSConst,
/* harmony export */   "fsconstNode": () => /* reexport safe */ _lib_nodes_string_fsconst_js__WEBPACK_IMPORTED_MODULE_15__.fsconstNode,
/* harmony export */   "FConcat": () => /* reexport safe */ _lib_nodes_string_fconcat_js__WEBPACK_IMPORTED_MODULE_16__.FConcat,
/* harmony export */   "fconcatNode": () => /* reexport safe */ _lib_nodes_string_fconcat_js__WEBPACK_IMPORTED_MODULE_16__.fconcatNode,
/* harmony export */   "FNConst": () => /* reexport safe */ _lib_nodes_math_fnconst_js__WEBPACK_IMPORTED_MODULE_17__.FNConst,
/* harmony export */   "fnconstNode": () => /* reexport safe */ _lib_nodes_math_fnconst_js__WEBPACK_IMPORTED_MODULE_17__.fnconstNode,
/* harmony export */   "FAdd": () => /* reexport safe */ _lib_nodes_math_fadd_js__WEBPACK_IMPORTED_MODULE_18__.FAdd,
/* harmony export */   "faddNode": () => /* reexport safe */ _lib_nodes_math_fadd_js__WEBPACK_IMPORTED_MODULE_18__.faddNode,
/* harmony export */   "FDiv": () => /* reexport safe */ _lib_nodes_math_fdiv_js__WEBPACK_IMPORTED_MODULE_19__.FDiv,
/* harmony export */   "fdivNode": () => /* reexport safe */ _lib_nodes_math_fdiv_js__WEBPACK_IMPORTED_MODULE_19__.fdivNode,
/* harmony export */   "FMul": () => /* reexport safe */ _lib_nodes_math_fmul_js__WEBPACK_IMPORTED_MODULE_20__.FMul,
/* harmony export */   "fmulNode": () => /* reexport safe */ _lib_nodes_math_fmul_js__WEBPACK_IMPORTED_MODULE_20__.fmulNode,
/* harmony export */   "FSqrt": () => /* reexport safe */ _lib_nodes_math_fsqrt_js__WEBPACK_IMPORTED_MODULE_21__.FSqrt,
/* harmony export */   "fsqrtNode": () => /* reexport safe */ _lib_nodes_math_fsqrt_js__WEBPACK_IMPORTED_MODULE_21__.fsqrtNode,
/* harmony export */   "FMod": () => /* reexport safe */ _lib_nodes_math_fmod_js__WEBPACK_IMPORTED_MODULE_22__.FMod,
/* harmony export */   "fmodNode": () => /* reexport safe */ _lib_nodes_math_fmod_js__WEBPACK_IMPORTED_MODULE_22__.fmodNode,
/* harmony export */   "APush": () => /* reexport safe */ _lib_nodes_array_apush_js__WEBPACK_IMPORTED_MODULE_23__.APush,
/* harmony export */   "apushNode": () => /* reexport safe */ _lib_nodes_array_apush_js__WEBPACK_IMPORTED_MODULE_23__.apushNode,
/* harmony export */   "FAConst": () => /* reexport safe */ _lib_nodes_array_faconst_js__WEBPACK_IMPORTED_MODULE_24__.FAConst,
/* harmony export */   "faconstNode": () => /* reexport safe */ _lib_nodes_array_faconst_js__WEBPACK_IMPORTED_MODULE_24__.faconstNode,
/* harmony export */   "FAMake": () => /* reexport safe */ _lib_nodes_array_famake_js__WEBPACK_IMPORTED_MODULE_25__.FAMake,
/* harmony export */   "famakeNode": () => /* reexport safe */ _lib_nodes_array_famake_js__WEBPACK_IMPORTED_MODULE_25__.famakeNode,
/* harmony export */   "FAGet": () => /* reexport safe */ _lib_nodes_array_faget_js__WEBPACK_IMPORTED_MODULE_26__.FAGet,
/* harmony export */   "fagetNode": () => /* reexport safe */ _lib_nodes_array_faget_js__WEBPACK_IMPORTED_MODULE_26__.fagetNode,
/* harmony export */   "FALength": () => /* reexport safe */ _lib_nodes_array_falength_js__WEBPACK_IMPORTED_MODULE_27__.FALength,
/* harmony export */   "falengthNode": () => /* reexport safe */ _lib_nodes_array_falength_js__WEBPACK_IMPORTED_MODULE_27__.falengthNode,
/* harmony export */   "FOMake": () => /* reexport safe */ _lib_nodes_object_fomake_js__WEBPACK_IMPORTED_MODULE_28__.FOMake,
/* harmony export */   "fomakeNode": () => /* reexport safe */ _lib_nodes_object_fomake_js__WEBPACK_IMPORTED_MODULE_28__.fomakeNode,
/* harmony export */   "FOBreak": () => /* reexport safe */ _lib_nodes_object_fobreak_js__WEBPACK_IMPORTED_MODULE_29__.FOBreak,
/* harmony export */   "fobreakNode": () => /* reexport safe */ _lib_nodes_object_fobreak_js__WEBPACK_IMPORTED_MODULE_29__.fobreakNode
/* harmony export */ });
/* harmony import */ var _lib_core_env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/core/env.js */ "../cnodes/lib/core/env.js");
/* harmony import */ var _lib_core_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _lib_core_program_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/core/program.js */ "../cnodes/lib/core/program.js");
/* harmony import */ var _lib_core_socket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _lib_core_type_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/core/type.js */ "../cnodes/lib/core/type.js");
/* harmony import */ var _lib_nodes_call_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/nodes/call.js */ "../cnodes/lib/nodes/call.js");
/* harmony import */ var _lib_nodes_console_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/nodes/console.js */ "../cnodes/lib/nodes/console.js");
/* harmony import */ var _lib_nodes_fgetvar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/nodes/fgetvar.js */ "../cnodes/lib/nodes/fgetvar.js");
/* harmony import */ var _lib_nodes_for_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/nodes/for.js */ "../cnodes/lib/nodes/for.js");
/* harmony import */ var _lib_nodes_getvar_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/nodes/getvar.js */ "../cnodes/lib/nodes/getvar.js");
/* harmony import */ var _lib_nodes_if_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/nodes/if.js */ "../cnodes/lib/nodes/if.js");
/* harmony import */ var _lib_nodes_setvar_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/nodes/setvar.js */ "../cnodes/lib/nodes/setvar.js");
/* harmony import */ var _lib_nodes_while_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/nodes/while.js */ "../cnodes/lib/nodes/while.js");
/* harmony import */ var _lib_nodes_fif_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/nodes/fif.js */ "../cnodes/lib/nodes/fif.js");
/* harmony import */ var _lib_nodes_bool_fcompare_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/nodes/bool/fcompare.js */ "../cnodes/lib/nodes/bool/fcompare.js");
/* harmony import */ var _lib_nodes_string_fsconst_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/nodes/string/fsconst.js */ "../cnodes/lib/nodes/string/fsconst.js");
/* harmony import */ var _lib_nodes_string_fconcat_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/nodes/string/fconcat.js */ "../cnodes/lib/nodes/string/fconcat.js");
/* harmony import */ var _lib_nodes_math_fnconst_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/nodes/math/fnconst.js */ "../cnodes/lib/nodes/math/fnconst.js");
/* harmony import */ var _lib_nodes_math_fadd_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/nodes/math/fadd.js */ "../cnodes/lib/nodes/math/fadd.js");
/* harmony import */ var _lib_nodes_math_fdiv_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/nodes/math/fdiv.js */ "../cnodes/lib/nodes/math/fdiv.js");
/* harmony import */ var _lib_nodes_math_fmul_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/nodes/math/fmul.js */ "../cnodes/lib/nodes/math/fmul.js");
/* harmony import */ var _lib_nodes_math_fsqrt_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/nodes/math/fsqrt.js */ "../cnodes/lib/nodes/math/fsqrt.js");
/* harmony import */ var _lib_nodes_math_fmod_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/nodes/math/fmod.js */ "../cnodes/lib/nodes/math/fmod.js");
/* harmony import */ var _lib_nodes_array_apush_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lib/nodes/array/apush.js */ "../cnodes/lib/nodes/array/apush.js");
/* harmony import */ var _lib_nodes_array_faconst_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lib/nodes/array/faconst.js */ "../cnodes/lib/nodes/array/faconst.js");
/* harmony import */ var _lib_nodes_array_famake_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lib/nodes/array/famake.js */ "../cnodes/lib/nodes/array/famake.js");
/* harmony import */ var _lib_nodes_array_faget_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lib/nodes/array/faget.js */ "../cnodes/lib/nodes/array/faget.js");
/* harmony import */ var _lib_nodes_array_falength_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./lib/nodes/array/falength.js */ "../cnodes/lib/nodes/array/falength.js");
/* harmony import */ var _lib_nodes_object_fomake_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./lib/nodes/object/fomake.js */ "../cnodes/lib/nodes/object/fomake.js");
/* harmony import */ var _lib_nodes_object_fobreak_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./lib/nodes/object/fobreak.js */ "../cnodes/lib/nodes/object/fobreak.js");
/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */
// Export core nodes













 // Export boolean nodes

 // Export string nodes


 // Export math nodes






 // Export arrays nodes





 // Export objects nodes




/***/ }),

/***/ "../cnodes/lib/core/enter.js":
/*!***********************************!*\
  !*** ../cnodes/lib/core/enter.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Enter": () => /* binding */ Enter,
/* harmony export */   "enterNode": () => /* binding */ enterNode
/* harmony export */ });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a cnode that is the starting point for a
 * program. The program can be top-level or not
 */

var Enter = /*#__PURE__*/function (_Node) {
  _inherits(Enter, _Node);

  var _super = _createSuper(Enter);

  function Enter() {
    var _this;

    _classCallCheck(this, Enter);

    _this = _super.call(this, "Enter");
    _this.removable = false;
    _this.creatable = false;
    _this.inputs = [new _socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val", _assertThisInitialized(_this), _type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, 0)];
    _this.outputs = [new _socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, 0)];
    _this.nexts = [new _socket_js__WEBPACK_IMPORTED_MODULE_1__.NextSocket("Begin", _assertThisInitialized(_this))];
    _this.prev = null;
    return _this;
  }
  /**
   * The process method
   */


  _createClass(Enter, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();
      this.output("Val").value = this.input("Val").value;
      this.output("Val").type = this.input("Val").type;
      return this.getFlowResult(this.next("Begin"));
    }
  }]);

  return Enter;
}(_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * Helper fuction to create the node
 */

function enterNode() {
  return new Enter();
}

/***/ }),

/***/ "../cnodes/lib/core/env.js":
/*!*********************************!*\
  !*** ../cnodes/lib/core/env.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Env": () => /* binding */ Env
/* harmony export */ });
/* harmony import */ var _program_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./program.js */ "../cnodes/lib/core/program.js");
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enter.js */ "../cnodes/lib/core/enter.js");
/* harmony import */ var _exit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exit.js */ "../cnodes/lib/core/exit.js");
/* harmony import */ var _nodes_call_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nodes/call.js */ "../cnodes/lib/nodes/call.js");
/* harmony import */ var _nodes_console_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nodes/console.js */ "../cnodes/lib/nodes/console.js");
/* harmony import */ var _nodes_fgetvar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nodes/fgetvar.js */ "../cnodes/lib/nodes/fgetvar.js");
/* harmony import */ var _nodes_for_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nodes/for.js */ "../cnodes/lib/nodes/for.js");
/* harmony import */ var _nodes_getvar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nodes/getvar.js */ "../cnodes/lib/nodes/getvar.js");
/* harmony import */ var _nodes_setvar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../nodes/setvar.js */ "../cnodes/lib/nodes/setvar.js");
/* harmony import */ var _nodes_while_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../nodes/while.js */ "../cnodes/lib/nodes/while.js");
/* harmony import */ var _nodes_if_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../nodes/if.js */ "../cnodes/lib/nodes/if.js");
/* harmony import */ var _nodes_array_apush_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../nodes/array/apush.js */ "../cnodes/lib/nodes/array/apush.js");
/* harmony import */ var _nodes_array_faconst_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../nodes/array/faconst.js */ "../cnodes/lib/nodes/array/faconst.js");
/* harmony import */ var _nodes_array_famake_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../nodes/array/famake.js */ "../cnodes/lib/nodes/array/famake.js");
/* harmony import */ var _nodes_array_faget_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../nodes/array/faget.js */ "../cnodes/lib/nodes/array/faget.js");
/* harmony import */ var _nodes_array_falength_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../nodes/array/falength.js */ "../cnodes/lib/nodes/array/falength.js");
/* harmony import */ var _nodes_math_fadd_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../nodes/math/fadd.js */ "../cnodes/lib/nodes/math/fadd.js");
/* harmony import */ var _nodes_math_fdiv_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../nodes/math/fdiv.js */ "../cnodes/lib/nodes/math/fdiv.js");
/* harmony import */ var _nodes_math_fmul_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../nodes/math/fmul.js */ "../cnodes/lib/nodes/math/fmul.js");
/* harmony import */ var _nodes_math_fsqrt_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../nodes/math/fsqrt.js */ "../cnodes/lib/nodes/math/fsqrt.js");
/* harmony import */ var _nodes_bool_fequal_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../nodes/bool/fequal.js */ "../cnodes/lib/nodes/bool/fequal.js");
/* harmony import */ var _nodes_bool_fgt_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../nodes/bool/fgt.js */ "../cnodes/lib/nodes/bool/fgt.js");
/* harmony import */ var _nodes_bool_fgte_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../nodes/bool/fgte.js */ "../cnodes/lib/nodes/bool/fgte.js");
/* harmony import */ var _nodes_bool_flt_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../nodes/bool/flt.js */ "../cnodes/lib/nodes/bool/flt.js");
/* harmony import */ var _nodes_bool_flte_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../nodes/bool/flte.js */ "../cnodes/lib/nodes/bool/flte.js");
/* harmony import */ var _nodes_bool_fnotequal_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../nodes/bool/fnotequal.js */ "../cnodes/lib/nodes/bool/fnotequal.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _nodes_string_fsconst_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../nodes/string/fsconst.js */ "../cnodes/lib/nodes/string/fsconst.js");
/* harmony import */ var _nodes_string_fconcat_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../nodes/string/fconcat.js */ "../cnodes/lib/nodes/string/fconcat.js");
/* harmony import */ var _nodes_math_fmod_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../nodes/math/fmod.js */ "../cnodes/lib/nodes/math/fmod.js");
/* harmony import */ var _nodes_fif_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../nodes/fif.js */ "../cnodes/lib/nodes/fif.js");
/* harmony import */ var _nodes_math_fnconst_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../nodes/math/fnconst.js */ "../cnodes/lib/nodes/math/fnconst.js");
/* harmony import */ var _nodes_object_fomake_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../nodes/object/fomake.js */ "../cnodes/lib/nodes/object/fomake.js");
/* harmony import */ var _nodes_object_fobreak_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../nodes/object/fobreak.js */ "../cnodes/lib/nodes/object/fobreak.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



































/**
 * This class represents a main global environment for cnodes.
 * The class is a "static" class that is responible for maintaining a global
 * registry of registered nodes. A node registration is a object with three fields: a node name,
 * a category name and a factory, that returns a new instance for that node.
 * The global Env instance must be initialized one-time by calling the Env.init() method,
 * this method register all built-in nodes. Eventual custom nodes must be registered manually
 * via Env.registerNode(name, category, factory).
 */

var Env = /*#__PURE__*/function () {
  function Env() {
    _classCallCheck(this, Env);
  }

  _createClass(Env, null, [{
    key: "init",

    /**
     * Initialize the CNodes global environment
     */
    value: function init() {
      _classStaticPrivateFieldSpecSet(Env, Env, _nodeRegistry, new Map()); // Core nodes


      Env.registerNode("Program", "Core", _program_js__WEBPACK_IMPORTED_MODULE_0__.program);
      Env.registerNode("Call", "Core", _nodes_call_js__WEBPACK_IMPORTED_MODULE_3__.callNode);
      Env.registerNode("Console", "Core", _nodes_console_js__WEBPACK_IMPORTED_MODULE_4__.consoleNode);
      Env.registerNode("FGetvar", "Core", _nodes_fgetvar_js__WEBPACK_IMPORTED_MODULE_5__.fgetvarNode);
      Env.registerNode("For", "Core", _nodes_for_js__WEBPACK_IMPORTED_MODULE_6__.forNode);
      Env.registerNode("Getvar", "Core", _nodes_getvar_js__WEBPACK_IMPORTED_MODULE_7__.getvarNode);
      Env.registerNode("If", "Core", _nodes_if_js__WEBPACK_IMPORTED_MODULE_10__.ifNode);
      Env.registerNode("FIf", "Core", _nodes_fif_js__WEBPACK_IMPORTED_MODULE_31__.fifNode);
      Env.registerNode("Setvar", "Core", _nodes_setvar_js__WEBPACK_IMPORTED_MODULE_8__.setvarNode);
      Env.registerNode("While", "Core", _nodes_while_js__WEBPACK_IMPORTED_MODULE_9__.whileNode);
      Env.registerNode("Enter", "Core", _enter_js__WEBPACK_IMPORTED_MODULE_1__.enterNode);
      Env.registerNode("Exit", "Core", _exit_js__WEBPACK_IMPORTED_MODULE_2__.exitNode); // String nodes

      Env.registerNode("FSConst", "String", _nodes_string_fsconst_js__WEBPACK_IMPORTED_MODULE_28__.fsconstNode);
      Env.registerNode("FConcat", "String", _nodes_string_fconcat_js__WEBPACK_IMPORTED_MODULE_29__.fconcatNode); // Math nodes

      Env.registerNode("FNConst", "Math", _nodes_math_fnconst_js__WEBPACK_IMPORTED_MODULE_32__.fnconstNode);
      Env.registerNode("FAdd", "Math", _nodes_math_fadd_js__WEBPACK_IMPORTED_MODULE_16__.faddNode);
      Env.registerNode("FDiv", "Math", _nodes_math_fdiv_js__WEBPACK_IMPORTED_MODULE_17__.fdivNode);
      Env.registerNode("FMod", "Math", _nodes_math_fmod_js__WEBPACK_IMPORTED_MODULE_30__.fmodNode);
      Env.registerNode("FMul", "Math", _nodes_math_fmul_js__WEBPACK_IMPORTED_MODULE_18__.fmulNode);
      Env.registerNode("FSqrt", "Math", _nodes_math_fsqrt_js__WEBPACK_IMPORTED_MODULE_19__.fsqrtNode); // Boolean Nodes

      Env.registerNode("FEqual", "Boolean", _nodes_bool_fequal_js__WEBPACK_IMPORTED_MODULE_20__.fequalNode);
      Env.registerNode("FGT", "Boolean", _nodes_bool_fgt_js__WEBPACK_IMPORTED_MODULE_21__.fgtNode);
      Env.registerNode("FGTE", "Boolean", _nodes_bool_fgte_js__WEBPACK_IMPORTED_MODULE_22__.fgteNode);
      Env.registerNode("FLT", "Boolean", _nodes_bool_flt_js__WEBPACK_IMPORTED_MODULE_23__.fltNode);
      Env.registerNode("FLTE", "Boolean", _nodes_bool_flte_js__WEBPACK_IMPORTED_MODULE_24__.flteNode);
      Env.registerNode("FNotEqual", "Boolean", _nodes_bool_fnotequal_js__WEBPACK_IMPORTED_MODULE_25__.fnotequalNode); // Arrays Nodes

      Env.registerNode("APush", "Arrays", _nodes_array_apush_js__WEBPACK_IMPORTED_MODULE_11__.apushNode);
      Env.registerNode("FAConst", "Arrays", _nodes_array_faconst_js__WEBPACK_IMPORTED_MODULE_12__.faconstNode);
      Env.registerNode("FAMake", "Arrays", _nodes_array_famake_js__WEBPACK_IMPORTED_MODULE_13__.famakeNode);
      Env.registerNode("FAGet", "Arrays", _nodes_array_faget_js__WEBPACK_IMPORTED_MODULE_14__.fagetNode);
      Env.registerNode("FALength", "Arrays", _nodes_array_falength_js__WEBPACK_IMPORTED_MODULE_15__.falengthNode); // Object Nodes

      Env.registerNode("FOMake", "Objects", _nodes_object_fomake_js__WEBPACK_IMPORTED_MODULE_33__.fomakeNode);
      Env.registerNode("FOBreak", "Objects", _nodes_object_fobreak_js__WEBPACK_IMPORTED_MODULE_34__.fobreakNode);
    }
    /**
     * Register a node type
     * @param {string} name The name of the node
     * @param {string} category The category of the node
     * @param {any} factory A class that instantiate the node
     */

  }, {
    key: "registerNode",
    value: function registerNode(name, category, factory) {
      _classStaticPrivateFieldSpecGet(Env, Env, _nodeRegistry).set(name, {
        category: category,
        factory: factory
      });
    }
    /**
     * Return the list of unique registered categories
     */

  }, {
    key: "getCategories",
    value: function getCategories() {
      var categoryMap = new Map();
      Array.from(_classStaticPrivateFieldSpecGet(this, Env, _nodeRegistry).values()).forEach(function (element) {
        categoryMap.set(element.category, 0);
      });
      return Array.from(categoryMap.keys());
    }
    /**
     * Return an array of registrations for nodes.
     * Registrations have the sign: {name, category, factory}
     * @param {string} category The category for which seacrh registrations
     */

  }, {
    key: "getCategoryNodes",
    value: function getCategoryNodes(category) {
      var registrations = [];
      Array.from(_classStaticPrivateFieldSpecGet(this, Env, _nodeRegistry).entries()).forEach(function (entry) {
        if (entry[1].category === category) {
          registrations.push({
            name: entry[0],
            category: entry[1].category,
            factory: entry[1].factory
          });
        }
      });
      return registrations;
    }
    /**
     * Instantiate a node by name
     * @param {string} name The name of the node
     */

  }, {
    key: "getInstance",
    value: function getInstance(name) {
      var reg = _classStaticPrivateFieldSpecGet(this, Env, _nodeRegistry).get(name);

      if (reg) {
        return reg.factory();
      } else {
        return null;
      }
    }
    /**
     * Creates and returns a JSON representation of the entire program
     * @param {Program} program The program to export
     */

  }, {
    key: "export",
    value: function _export(program) {
      var exp = {
        id: program.id,
        version: _program_js__WEBPACK_IMPORTED_MODULE_0__.Program.version,
        lastNodeIndex: _node_js__WEBPACK_IMPORTED_MODULE_27__.Node.lastNodeIdIndex,
        lastSocketIndex: _socket_js__WEBPACK_IMPORTED_MODULE_26__.Socket.lastSocketIdIndex,
        enter: program.enter.id,
        exit: program.exit.id,
        nodes: [],
        connections: []
      };

      var _iterator = _createForOfIteratorHelper(program.nodes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var node = _step.value;
          var nodeExp = {
            id: node.id,
            name: node.name,
            functional: node.functional,
            meta: node.meta,
            program: node instanceof _program_js__WEBPACK_IMPORTED_MODULE_0__.Program ? Env["export"](node) : undefined,
            inputs: node.inputs.map(function (inp) {
              return {
                id: inp.id,
                name: inp.name,
                node: null,
                type: inp.type,
                value: inp.value,
                canEditName: inp.canEditName,
                peer: null
              };
            }),
            outputs: node.outputs.map(function (outp) {
              return {
                id: outp.id,
                name: outp.name,
                node: null,
                type: outp.type,
                value: outp.value,
                canEditName: outp.canEditName,
                peers: []
              };
            }),
            prev: !node.prev ? null : {
              id: node.prev.id,
              name: node.prev.name,
              node: null,
              peers: []
            },
            nexts: node.nexts.map(function (next) {
              return {
                id: next.id,
                name: next.name,
                node: null,
                peer: null
              };
            })
          };
          exp.nodes.push(nodeExp);
        }
        /**
         * Define a inner-function that prevent duplicates connections
         * @param {any} connection The connection to push
         */

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      function pushConnection(connection) {
        if (exp.connections.findIndex(function (c) {
          return c.type === connection.type && c.sourceNode === connection.sourceNode && c.sourceSocket === connection.sourceSocket && c.targetNode === connection.targetNode && c.targetSocket === connection.targetSocket;
        }) === -1) {
          exp.connections.push(connection);
        }
      }

      var _iterator2 = _createForOfIteratorHelper(program.nodes),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _node = _step2.value;

          if (_node.prev && _node.prev.peers && _node.prev.peers.length > 0) {
            var _iterator3 = _createForOfIteratorHelper(_node.prev.peers),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var peer = _step3.value;
                var connectionExp = {
                  type: "pn",
                  sourceNode: peer.node.id,
                  sourceSocket: peer.id,
                  targetNode: _node.id,
                  targetSocket: _node.prev.id
                };
                pushConnection(connectionExp);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          var _iterator4 = _createForOfIteratorHelper(_node.inputs),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var inp = _step4.value;

              if (inp.peer) {
                var _connectionExp = {
                  type: "io",
                  sourceNode: inp.peer.node.id,
                  sourceSocket: inp.peer.id,
                  targetNode: _node.id,
                  targetSocket: inp.id
                };
                pushConnection(_connectionExp);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          var _iterator5 = _createForOfIteratorHelper(_node.outputs),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var outp = _step5.value;

              var _iterator7 = _createForOfIteratorHelper(outp.peers),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _peer = _step7.value;

                  if (_peer) {
                    var _connectionExp2 = {
                      type: "io",
                      sourceNode: _node.id,
                      sourceSocket: outp.id,
                      targetNode: _peer.node.id,
                      targetSocket: _peer.id
                    };
                    pushConnection(_connectionExp2);
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          var _iterator6 = _createForOfIteratorHelper(_node.nexts),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var next = _step6.value;

              if (next.peer) {
                var _connectionExp3 = {
                  type: "pn",
                  sourceNode: _node.id,
                  sourceSocket: next.id,
                  targetNode: next.peer.node.id,
                  targetSocket: next.peer.id
                };
                pushConnection(_connectionExp3);
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return exp;
    }
    /**
     * Create a program instance based on export data created with export() method
     * @param {any} data A object with the export data format
     */

  }, {
    key: "import",
    value: function _import(data) {
      if (data.version !== 1) {
        throw new Error("Imported data must have version 1");
      }

      var p = new _program_js__WEBPACK_IMPORTED_MODULE_0__.Program(); // Removes enter and exit auto-nodes, these
      // will be re-created by import procedure

      p.removeNode(p.enter);
      p.removeNode(p.exit);
      _program_js__WEBPACK_IMPORTED_MODULE_0__.Program.version = data.version; // Now import nodes without connections

      var _iterator8 = _createForOfIteratorHelper(data.nodes),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var nodeData = _step8.value;
          var node = void 0; // If this node is a program node, let the import
          // procedure to create the node

          if (nodeData.program) {
            node = Env["import"](nodeData.program);
          } else {
            // Otherwise import the node
            node = Env.getInstance(nodeData.name);
          } // Delete default sockets (created by getInstance())


          node.inputs = [];
          node.outputs = [];
          node.prev = null;
          node.nexts = [];

          if (!node) {
            throw new Error("Node type '".concat(nodeData.name, "' is not registered"));
          }

          node.id = nodeData.id;
          node.functional = nodeData.functional;
          node.meta = nodeData.meta;

          var _iterator10 = _createForOfIteratorHelper(nodeData.inputs),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var inpData = _step10.value;
              var inp = new _socket_js__WEBPACK_IMPORTED_MODULE_26__.InputSocket(inpData.name, node, inpData.type, inpData.value);
              inp.id = inpData.id;
              inp.canEditName = inpData.canEditName;
              node.inputs.push(inp);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }

          var _iterator11 = _createForOfIteratorHelper(nodeData.outputs),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var outpData = _step11.value;
              var outp = new _socket_js__WEBPACK_IMPORTED_MODULE_26__.OutputSocket(outpData.name, node, outpData.type, outpData.value);
              outp.canEditName = outpData.canEditName;
              outp.id = outpData.id;
              node.outputs.push(outp);
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }

          if (nodeData.prev) {
            var prev = new _socket_js__WEBPACK_IMPORTED_MODULE_26__.PrevSocket(nodeData.prev.name, node);
            prev.id = nodeData.prev.id;
            node.prev = prev;
          }

          var _iterator12 = _createForOfIteratorHelper(nodeData.nexts),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var nextData = _step12.value;
              var next = new _socket_js__WEBPACK_IMPORTED_MODULE_26__.NextSocket(nextData.name, node);
              next.id = nextData.id;
              node.nexts.push(next);
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }

          p.addNode(node);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      p.enter = p.nodes.find(function (n) {
        return n.id === data.enter;
      });
      p.exit = p.nodes.find(function (n) {
        return n.id === data.exit;
      }); // Now import connections

      var _iterator9 = _createForOfIteratorHelper(data.connections),
          _step9;

      try {
        var _loop = function _loop() {
          var connectionData = _step9.value;
          var sourceNode = p.nodes.find(function (n) {
            return n.id === connectionData.sourceNode;
          });
          var targetNode = p.nodes.find(function (n) {
            return n.id === connectionData.targetNode;
          });
          var sourceSocket = connectionData.type === "pn" ? sourceNode.nexts.find(function (n) {
            return n.id === connectionData.sourceSocket;
          }) : sourceNode.outputs.find(function (o) {
            return o.id === connectionData.sourceSocket;
          });
          var targetSocket = connectionData.type === "pn" ? targetNode.prev : targetNode.inputs.find(function (i) {
            return i.id === connectionData.targetSocket;
          });
          sourceSocket.connect(targetSocket);
        };

        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          _loop();
        } // These two static variable must be assigned at the end because
        // the new InputSocket(), new OutputSocket(), ... increment it during
        // the import phase

      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      _node_js__WEBPACK_IMPORTED_MODULE_27__.Node.lastNodeIdIndex = data.lastNodeIndex;
      _socket_js__WEBPACK_IMPORTED_MODULE_26__.Socket.lastSocketIdIndex = data.lastSocketIndex;
      return p;
    }
  }]);

  return Env;
}();
var _nodeRegistry = {
  writable: true,
  value: new Map()
};

/***/ }),

/***/ "../cnodes/lib/core/exit.js":
/*!**********************************!*\
  !*** ../cnodes/lib/core/exit.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exit": () => /* binding */ Exit,
/* harmony export */   "exitNode": () => /* binding */ exitNode
/* harmony export */ });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a cnode that is the starting point for a
 * program. The program can be top-level or not
 */

var Exit = /*#__PURE__*/function (_Node) {
  _inherits(Exit, _Node);

  var _super = _createSuper(Exit);

  function Exit() {
    var _this;

    _classCallCheck(this, Exit);

    _this = _super.call(this, "Exit");
    _this.removable = false;
    _this.creatable = false;
    _this.inputs = [new _socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val", _assertThisInitialized(_this), _type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, 0)];
    _this.outputs = [new _socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, 0)];
    _this.nexts = [];
    _this.prev = new _socket_js__WEBPACK_IMPORTED_MODULE_1__.PrevSocket("End", _assertThisInitialized(_this));
    return _this;
  }
  /**
   * The process method
   */


  _createClass(Exit, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();
      this.output("Val").value = this.input("Val").value;
      this.output("Val").type = this.input("Val").type;
      return new _node_js__WEBPACK_IMPORTED_MODULE_0__.Result(); // End process
    }
  }]);

  return Exit;
}(_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * Helper fuction to create the node
 */

function exitNode() {
  return new Exit();
}

/***/ }),

/***/ "../cnodes/lib/core/node.js":
/*!**********************************!*\
  !*** ../cnodes/lib/core/node.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => /* binding */ Node,
/* harmony export */   "Result": () => /* binding */ Result
/* harmony export */ });
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type.js */ "../cnodes/lib/core/type.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */


/**
 * This is the base node class. A node have some input and output
 * to exchange data with other nodes, some nexts to determine next
 * execution nodes, and a prev to identify the entry point.
 * A node can be functional or iterative. If the node is funcitonal
 * the execution of the process method is repeated each time other
 * nodes read the output values, otherwise output nodes reports
 * the last computed value. Each node has a unique id to identify it
 */

var _id = new WeakMap();

var _name = new WeakMap();

var _functional = new WeakMap();

var _inputs = new WeakMap();

var _outputs = new WeakMap();

var _nexts = new WeakMap();

var _prev = new WeakMap();

var _program = new WeakMap();

var _meta = new WeakMap();

var _removable = new WeakMap();

var _creatable = new WeakMap();

var _canAddInput = new WeakMap();

var _canAddOutput = new WeakMap();

var _canAddNext = new WeakMap();

var Node = /*#__PURE__*/function () {
  /** An incremental index to generate unique node IDs */

  /** The internal unique identifier */

  /** The internal name of the node */

  /** Is this node a functional node? */

  /** List of node's inputs */

  /** List of node's outputs */

  /** List of node's nexts in execution */

  /** The execution entry point */

  /** Reference to the enclosing program */

  /** Additional info (UIs can write anything to store graphical behaviors) */

  /** Can the node be removed by the user? */

  /** Can the node be created by the user? */

  /** Can the user add an input? */

  /** Can the user add an output? */

  /** Can the user add a next? */
  function Node(name) {
    _classCallCheck(this, Node);

    _id.set(this, {
      writable: true,
      value: null
    });

    _name.set(this, {
      writable: true,
      value: ""
    });

    _functional.set(this, {
      writable: true,
      value: false
    });

    _inputs.set(this, {
      writable: true,
      value: []
    });

    _outputs.set(this, {
      writable: true,
      value: []
    });

    _nexts.set(this, {
      writable: true,
      value: []
    });

    _prev.set(this, {
      writable: true,
      value: null
    });

    _program.set(this, {
      writable: true,
      value: null
    });

    _meta.set(this, {
      writable: true,
      value: null
    });

    _removable.set(this, {
      writable: true,
      value: true
    });

    _creatable.set(this, {
      writable: true,
      value: true
    });

    _canAddInput.set(this, {
      writable: true,
      value: false
    });

    _canAddOutput.set(this, {
      writable: true,
      value: false
    });

    _canAddNext.set(this, {
      writable: true,
      value: false
    });

    _classPrivateFieldSet(this, _name, name);

    _classPrivateFieldSet(this, _id, "NID_" + Node.lastNodeIdIndex++);
  }

  _createClass(Node, [{
    key: "input",

    /**
     * Returns the input by name
     * @param {string} name Name of the input
     */
    value: function input(name) {
      return this.inputs.find(function (i) {
        return i.name === name;
      });
    }
    /**
     * Returns the output by name
     * @param {string} name The name of the output
     */

  }, {
    key: "output",
    value: function output(name) {
      return this.outputs.find(function (o) {
        return o.name === name;
      });
    }
    /**
     * Returns the next by name
     * @param {string} name The name of the next
     */

  }, {
    key: "next",
    value: function next(name) {
      if (!name) {
        return this.nexts[0];
      }

      return this.nexts.find(function (n) {
        return n.name === name;
      });
    }
    /**
     * Evaluate all imputs of this node. Inputs are sockets.
     * If the socket is connected the evaluation will search
     * for the socket's peer and evaluate the output counterpart
     * eventually reprocess the output's nod, if the node is
     * functional
     */

  }, {
    key: "evaluateInputs",
    value: function evaluateInputs() {
      var _iterator = _createForOfIteratorHelper(this.inputs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var inp = _step.value;
          inp.evaluate();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * This is an helper method to construct a Result instance
     * by name
     * @param {Socket} socket The Socket on which construct the Result instance
     */

  }, {
    key: "getFlowResult",
    value: function getFlowResult(socket) {
      if (socket.peer) {
        return new Result(socket.peer.node);
      } else {
        return new Result();
      }
    }
    /**
     * This method disconnect all sockets from the node
     */

  }, {
    key: "disconnectAllSockets",
    value: function disconnectAllSockets() {
      if (_classPrivateFieldGet(this, _prev)) {
        while (_classPrivateFieldGet(this, _prev).peers.length > 0) {
          _classPrivateFieldGet(this, _prev).disconnect(_classPrivateFieldGet(this, _prev).peers[0]);
        }
      }

      var _iterator2 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _inputs)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var i = _step2.value;

          if (i.peer) {
            i.disconnect();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _outputs)),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var o = _step3.value;

          while (o.peers.length > 0) {
            o.peers[0].disconnect();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var _iterator4 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _nexts)),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var n = _step4.value;

          if (n.peer) {
            n.disconnect();
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    /**
     * If this.#canAddInput is true, the user can add an input
     * Subclass with variable number of input should override this method
     */

  }, {
    key: "addInput",
    value: function addInput() {
      throw new Error("Can't add input!");
    }
    /**
     * This method removes a specific input from the node, if
     * this is possible whit this instance
     * Subclass with variable number of input should override this method
     * @param {*} input The input to remove
     */

  }, {
    key: "removeInput",
    value: function removeInput(input) {
      throw new Error("Can't remove input");
    }
    /**
     * Can this node remove a specific input?
     * Subclass with variable number of input should override this method
     * @param {InputsSocket} input The input to remove
     */

  }, {
    key: "canRemoveInput",
    value: function canRemoveInput(input) {
      return false;
    }
    /**
     * If this.#canAddOutput is true, the user can add an output
     * Subclass with variable number of output should override this method
     */

  }, {
    key: "addOutput",
    value: function addOutput() {
      throw new Error("Can't add output!");
    }
    /**
     * This method removes a specific output from the node, if
     * this is possible whit this instance
     * Subclass with variable number of output should override this method
     * @param {OutputSocket} output The output to remove
     */

  }, {
    key: "removeOutput",
    value: function removeOutput(output) {
      throw new Error("Can't remove output");
    }
    /**
     * Can this node remove a specific output?
     * Subclass with variable number of output should override this method
     * @param {OutputSocket} output The output to remove
     */

  }, {
    key: "canRemoveOutput",
    value: function canRemoveOutput(input) {
      return false;
    }
    /**
     * This method defines if a particular socket of this node can
     * be connected to another one, based on sockets type.
     * Default implementation checks for types of sockets, following the rule:
     * - if sockets are FlowSockets, return true
     * - Otherwise if the type of one socket is Types.ANY, return true
     * - Otherwise if the two types are the same, return true
     * - Otherwise return false
     * @param {Socket} thisSocket The instance of socket of this node
     * @param {Socket} otherSocket The other socket
     */

  }, {
    key: "canBeConnected",
    value: function canBeConnected(thisSocket, otherSocket) {
      if (thisSocket instanceof _socket_js__WEBPACK_IMPORTED_MODULE_0__.FlowSocket && !(otherSocket instanceof _socket_js__WEBPACK_IMPORTED_MODULE_0__.FlowSocket)) {
        return false;
      }

      if (otherSocket instanceof _socket_js__WEBPACK_IMPORTED_MODULE_0__.FlowSocket && !(thisSocket instanceof _socket_js__WEBPACK_IMPORTED_MODULE_0__.FlowSocket)) {
        return false;
      }

      if (thisSocket instanceof _socket_js__WEBPACK_IMPORTED_MODULE_0__.FlowSocket || otherSocket instanceof _socket_js__WEBPACK_IMPORTED_MODULE_0__.FlowSocket) {
        return true;
      }

      if (thisSocket.type === _type_js__WEBPACK_IMPORTED_MODULE_1__.Types.ANY || otherSocket.type === _type_js__WEBPACK_IMPORTED_MODULE_1__.Types.ANY) {
        return true;
      }

      if (thisSocket.type === otherSocket.type) {
        return true;
      }

      return false;
    }
    /** The base version of the node does nothing */

  }, {
    key: "process",
    value: function process() {
      return new Result();
    }
  }, {
    key: "id",
    get: function get() {
      return _classPrivateFieldGet(this, _id);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _id, val);
    }
  }, {
    key: "name",
    get: function get() {
      return _classPrivateFieldGet(this, _name);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _name, val);
    }
  }, {
    key: "functional",
    get: function get() {
      return _classPrivateFieldGet(this, _functional);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _functional, val);
    }
  }, {
    key: "inputs",
    get: function get() {
      return _classPrivateFieldGet(this, _inputs);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _inputs, val);
    }
  }, {
    key: "outputs",
    get: function get() {
      return _classPrivateFieldGet(this, _outputs);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _outputs, val);
    }
  }, {
    key: "nexts",
    get: function get() {
      return _classPrivateFieldGet(this, _nexts);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _nexts, val);
    }
  }, {
    key: "prev",
    get: function get() {
      return _classPrivateFieldGet(this, _prev);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _prev, val);
    }
  }, {
    key: "program",
    get: function get() {
      return _classPrivateFieldGet(this, _program);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _program, val);
    }
  }, {
    key: "removable",
    get: function get() {
      return _classPrivateFieldGet(this, _removable);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _removable, val);
    }
  }, {
    key: "creatable",
    get: function get() {
      return _classPrivateFieldGet(this, _creatable);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _creatable, val);
    }
  }, {
    key: "canAddInput",
    get: function get() {
      return _classPrivateFieldGet(this, _canAddInput);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _canAddInput, val);
    }
  }, {
    key: "canAddOutput",
    get: function get() {
      return _classPrivateFieldGet(this, _canAddOutput);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _canAddOutput, val);
    }
  }, {
    key: "canAddNext",
    get: function get() {
      return _classPrivateFieldGet(this, _canAddNext);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _canAddNext, val);
    }
  }, {
    key: "meta",
    get: function get() {
      return _classPrivateFieldGet(this, _meta);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _meta, val);
    }
  }]);

  return Node;
}();
/**
 * The result class used by programs to receive
 * the next "next" in the flow
 */

_defineProperty(Node, "lastNodeIdIndex", 0);

var _next = new WeakMap();

var Result = /*#__PURE__*/function () {
  /** The next node */
  function Result() {
    var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Result);

    _next.set(this, {
      writable: true,
      value: null
    });

    _classPrivateFieldSet(this, _next, next);
  }

  _createClass(Result, [{
    key: "next",
    get: function get() {
      return _classPrivateFieldGet(this, _next);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _next, val);
    }
  }]);

  return Result;
}();

/***/ }),

/***/ "../cnodes/lib/core/program.js":
/*!*************************************!*\
  !*** ../cnodes/lib/core/program.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Program": () => /* binding */ Program,
/* harmony export */   "program": () => /* binding */ program
/* harmony export */ });
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enter.js */ "../cnodes/lib/core/enter.js");
/* harmony import */ var _exit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exit.js */ "../cnodes/lib/core/exit.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */





/**
 * A program is a special node that contains nodes. The program
 * manages the flow of the global execution by starting from the
 * "Enter" default, autocreated node, call its process() method and receive the next
 * "next". A program also store a global variable space
 */

var _nodes = new WeakMap();

var _enter = new WeakMap();

var _exit = new WeakMap();

var _currentNode = new WeakMap();

var _vars = new WeakMap();

var Program = /*#__PURE__*/function (_Node) {
  _inherits(Program, _Node);

  var _super = _createSuper(Program);

  /** Engine version */

  /** The nodes in this program */

  /** The Enter node */

  /** The Exit node */

  /** The instruction pointer equivalent :) */

  /** The variable global space */
  function Program() {
    var _this;

    _classCallCheck(this, Program);

    _this = _super.call(this, "Program");

    _nodes.set(_assertThisInitialized(_this), {
      writable: true,
      value: []
    });

    _enter.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    _exit.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    _currentNode.set(_assertThisInitialized(_this), {
      writable: true,
      value: null
    });

    _vars.set(_assertThisInitialized(_this), {
      writable: true,
      value: new Map()
    });

    _this.inputs = [new _socket_js__WEBPACK_IMPORTED_MODULE_3__.InputSocket("Val", _assertThisInitialized(_this), _type_js__WEBPACK_IMPORTED_MODULE_4__.Types.ANY, 0)];
    _this.outputs = [new _socket_js__WEBPACK_IMPORTED_MODULE_3__.OutputSocket("Val", _assertThisInitialized(_this), _type_js__WEBPACK_IMPORTED_MODULE_4__.Types.ANY, 0)];
    _this.nexts = [new _socket_js__WEBPACK_IMPORTED_MODULE_3__.NextSocket("Out", _assertThisInitialized(_this))];
    _this.prev = new _socket_js__WEBPACK_IMPORTED_MODULE_3__.PrevSocket("In", _assertThisInitialized(_this)); // Create default enter, exit nodes

    _this.addNode(_classPrivateFieldSet(_assertThisInitialized(_this), _enter, new _enter_js__WEBPACK_IMPORTED_MODULE_0__.Enter())).addNode(_classPrivateFieldSet(_assertThisInitialized(_this), _exit, new _exit_js__WEBPACK_IMPORTED_MODULE_1__.Exit()));

    return _this;
  }

  _createClass(Program, [{
    key: "addNode",

    /**
     * Add a new node to this program
     * @param {Node} node The node to add
     */
    value: function addNode(node) {
      _classPrivateFieldGet(this, _nodes).push(node); // Set this program to the node


      node.program = this;
      return this;
    }
    /**
     * Removes a node from this program, disconnect all sockets
     * @param {Node} node The node to remove
     */

  }, {
    key: "removeNode",
    value: function removeNode(node) {
      // Disconnect its sockets
      node.disconnectAllSockets();

      _classPrivateFieldSet(this, _nodes, _classPrivateFieldGet(this, _nodes).filter(function (n) {
        return n.id !== node.id;
      }));

      node.program = null;
      return this;
    }
    /**
     * The process method will start from the Enter node and
     * cycle over nexts returned by the process functions of nodes.
     * The Program node couldn't be a top-level program, but a sub-nod
     * of another program. For that reason, the process() method copy the
     * value of the only input in the Program node to the only one
     * input of the "Enter" forst node.
     * This is a limitation: The Program node can be actually only 1 input
     * and only 1 output. At the same, Enter and Exit nodes will have only
     * 1 input and output respectively.
     * At the end, the process() methos of the Program node, will copy the
     * value of the Exit's output to the unique output of the Program node
     */

  }, {
    key: "process",
    value: function process() {
      this.evaluateInputs(); // Copy input to enter's input

      _classPrivateFieldGet(this, _enter).input("Val").value = this.input("Val").value;
      _classPrivateFieldGet(this, _enter).input("Val").type = this.input("Val").type;
      this.processFrom(_classPrivateFieldGet(this, _enter)); // Copy output to exit's output

      this.output("Val").value = _classPrivateFieldGet(this, _exit).output("Val").value;
      this.output("Val").type = _classPrivateFieldGet(this, _exit).output("Val").type;
      return this.getFlowResult(this.next("Out"));
    }
    /**
     * Execute a program useng node as starting point
     * @param {Node} node Starting point node
     */

  }, {
    key: "processFrom",
    value: function processFrom(node) {
      this.currentNode = node;

      while (this.currentNode !== null) {
        var result = this.currentNode.process();
        this.currentNode = result.next;
      }
    }
  }, {
    key: "vars",
    get: function get() {
      return _classPrivateFieldGet(this, _vars);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _vars, val);
    }
  }, {
    key: "enter",
    get: function get() {
      return _classPrivateFieldGet(this, _enter);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _enter, val);
    }
  }, {
    key: "exit",
    get: function get() {
      return _classPrivateFieldGet(this, _exit);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _exit, val);
    }
  }, {
    key: "currentNode",
    get: function get() {
      return _classPrivateFieldGet(this, _currentNode);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _currentNode, val);
    }
  }, {
    key: "nodes",
    get: function get() {
      return _classPrivateFieldGet(this, _nodes);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _nodes, val);
    }
  }]);

  return Program;
}(_node_js__WEBPACK_IMPORTED_MODULE_2__.Node);
/**
 * A helper function to create the program
 * @param {string} name The name of the program
 */

_defineProperty(Program, "version", 1);

function program() {
  return new Program();
}

/***/ }),

/***/ "../cnodes/lib/core/socket.js":
/*!************************************!*\
  !*** ../cnodes/lib/core/socket.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Socket": () => /* binding */ Socket,
/* harmony export */   "ValueSocket": () => /* binding */ ValueSocket,
/* harmony export */   "InputSocket": () => /* binding */ InputSocket,
/* harmony export */   "OutputSocket": () => /* binding */ OutputSocket,
/* harmony export */   "FlowSocket": () => /* binding */ FlowSocket,
/* harmony export */   "PrevSocket": () => /* binding */ PrevSocket,
/* harmony export */   "NextSocket": () => /* binding */ NextSocket
/* harmony export */ });
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

/**
 * A socket is an object that represent an input,
 * output, next or prev for the node
 */

var _id = new WeakMap();

var _name = new WeakMap();

var _node = new WeakMap();

var Socket = /*#__PURE__*/function () {
  /** An incremental index to generate unique socket IDs */

  /** The internal id of the socket */

  /** The name of this socket */

  /** The parent node */

  /**
   * Construct a new socket on a node with a given name
   * @param {string} name The name of the socket
   * @param {Node} node The parent node of the socket
   */
  function Socket(name, node) {
    _classCallCheck(this, Socket);

    _id.set(this, {
      writable: true,
      value: ""
    });

    _name.set(this, {
      writable: true,
      value: ""
    });

    _node.set(this, {
      writable: true,
      value: null
    });

    _classPrivateFieldSet(this, _id, "SID_" + Socket.lastSocketIdIndex++);

    _classPrivateFieldSet(this, _name, name);

    _classPrivateFieldSet(this, _node, node);
  }

  _createClass(Socket, [{
    key: "id",
    get: function get() {
      return _classPrivateFieldGet(this, _id);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _id, val);
    }
  }, {
    key: "name",
    get: function get() {
      return _classPrivateFieldGet(this, _name);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _name, val);
    }
  }, {
    key: "node",
    get: function get() {
      return _classPrivateFieldGet(this, _node);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _node, val);
    }
  }]);

  return Socket;
}();
/**
 * The value socket represent a input or a output value
 * for the node, so it has a value and a type
 */

_defineProperty(Socket, "lastSocketIdIndex", 0);

var _type = new WeakMap();

var _value = new WeakMap();

var _canEditName = new WeakMap();

var ValueSocket = /*#__PURE__*/function (_Socket) {
  _inherits(ValueSocket, _Socket);

  var _super = _createSuper(ValueSocket);

  /** The type for the socket's value */

  /** The stored value */

  /**
   * Some input/output sockets needs to have a name that users can change.
   * That's because the name of the socket is part of what the user can
   * choose. Think for example at a node that can make a data structure,
   * the user will want configure each field of the structure, in terms of
   * data value and name. The node will have a single output with the structure
   * as output. In this case the user can select a variable number of input
   * sockets, and can configure values (or connection) for each input as well
   * as the name of each socket, that whill be the name of the field in the structure.
   * This type of socket should be represented as a text field in a UI library.
   */

  /**
   * Construct a new ValueSocket
   * @param {string} name Name of the socket
   * @param {Node} node The parent node
   * @param {Type} type The type of this socket
   * @param {any} value The default value of the socket
   */
  function ValueSocket(name, node) {
    var _this;

    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _type_js__WEBPACK_IMPORTED_MODULE_0__.Types.NUMBER;
    var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, ValueSocket);

    _this = _super.call(this, name, node);

    _type.set(_assertThisInitialized(_this), {
      writable: true,
      value: _type_js__WEBPACK_IMPORTED_MODULE_0__.Types.NUMBER
    });

    _value.set(_assertThisInitialized(_this), {
      writable: true,
      value: 0
    });

    _canEditName.set(_assertThisInitialized(_this), {
      writable: true,
      value: false
    });

    _this.type = type;
    _this.value = value;
    return _this;
  }

  _createClass(ValueSocket, [{
    key: "type",
    get: function get() {
      return _classPrivateFieldGet(this, _type);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _type, val);
    }
  }, {
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _value);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _value, val);
    }
  }, {
    key: "canEditName",
    get: function get() {
      return _classPrivateFieldGet(this, _canEditName);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _canEditName, val);
    }
  }]);

  return ValueSocket;
}(Socket);
/**
 * This is an input socket value for the node, it
 * can have only a peer socket, because its value
 * have to be defined in a deterministic way
 */

var _peer = new WeakMap();

var InputSocket = /*#__PURE__*/function (_ValueSocket) {
  _inherits(InputSocket, _ValueSocket);

  var _super2 = _createSuper(InputSocket);

  /** The only peer socket */

  /**
   * Construct a new InputSocket
   * @param {string} name The name of the socket
   * @param {Node} node The parent node
   * @param {Type} type The type of the socket
   * @param {any} value The default value of the socket
   */
  function InputSocket(name, node) {
    var _this2;

    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _type_js__WEBPACK_IMPORTED_MODULE_0__.Types.NUMBER;
    var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, InputSocket);

    _this2 = _super2.call(this, name, node, type, value);

    _peer.set(_assertThisInitialized(_this2), {
      writable: true,
      value: null
    });

    return _this2;
  }

  _createClass(InputSocket, [{
    key: "evaluate",

    /**
     * Evaluate the socket value. If the socket is connected,
     * this method goes to the peer socket and take the value.
     * If the peer socket is part of a functional node, the process()
     * method is executed before taking the value
     */
    value: function evaluate() {
      if (this.peer !== null) {
        if (this.peer.node && this.peer.node.functional) {
          this.peer.node.process();
        }

        this.type = this.peer.type;
        this.value = this.peer.value;
      }
    }
    /**
     * Connect this socket to another (output) socket
     * @param {Socket} socket The output socket to connect
     */

  }, {
    key: "connect",
    value: function connect(socket) {
      var _this3 = this;

      this.peer = socket;

      if (socket.peers.find(function (s) {
        return s === _this3;
      }) === undefined) {
        socket.peers.push(this);
      }
    }
    /**
     * Disconnects this socket from its peer
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      var _this4 = this;

      if (this.peer) {
        var index = this.peer.peers.findIndex(function (s) {
          return s === _this4;
        });

        if (index !== -1) {
          this.peer.peers.splice(index, 1);
        }
      }

      this.peer = null;
    }
  }, {
    key: "peer",
    get: function get() {
      return _classPrivateFieldGet(this, _peer);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _peer, val);
    }
  }]);

  return InputSocket;
}(ValueSocket);
/**
 * This is a output value socket and represent an output
 * value for the node. Output value socket can be connected to
 * many peer input value sockets, because many socket would like
 * to take the value from this.
 */

var _peers = new WeakMap();

var OutputSocket = /*#__PURE__*/function (_ValueSocket2) {
  _inherits(OutputSocket, _ValueSocket2);

  var _super3 = _createSuper(OutputSocket);

  /** A list of input value connected sockets */

  /**
   * Construct a new OutputSocket
   * @param {string} name The name of the socket
   * @param {Node} node The parent node
   * @param {Type} type The type of the socket
   * @param {any} value The default value of the socket
   */
  function OutputSocket(name, node) {
    var _this5;

    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _type_js__WEBPACK_IMPORTED_MODULE_0__.Types.NUMBER;
    var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, OutputSocket);

    _this5 = _super3.call(this, name, node, type, value);

    _peers.set(_assertThisInitialized(_this5), {
      writable: true,
      value: []
    });

    return _this5;
  }

  _createClass(OutputSocket, [{
    key: "connect",

    /**
     * Connects this socket to a input socket
     * @param {Socket} socket Socket to connect to
     */
    value: function connect(socket) {
      if (this.peers.find(function (s) {
        return s === socket;
      }) === undefined) {
        this.peers.push(socket);
      }

      socket.peer = this;
    }
    /**
     * Disconnect this socket from a specific input peer
     * @param {Socket} socket The socket to disconnect
     */

  }, {
    key: "disconnect",
    value: function disconnect(socket) {
      var index = this.peers.findIndex(function (s) {
        return s === socket;
      });

      if (index !== undefined) {
        this.peers.splice(index, 1);
        socket.peer = null;
      }
    }
  }, {
    key: "peers",
    get: function get() {
      return _classPrivateFieldGet(this, _peers);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _peers, val);
    }
  }]);

  return OutputSocket;
}(ValueSocket);
/**
 * A flow socket is a socket to connect two nodes in
 * terms of execution flow
 */

var FlowSocket = /*#__PURE__*/function (_Socket2) {
  _inherits(FlowSocket, _Socket2);

  var _super4 = _createSuper(FlowSocket);

  /**
   * Construct a new FlowSocket
   * @param {sring} name Name of the socket
   * @param {Node} node The parent node
   */
  function FlowSocket(name, node) {
    _classCallCheck(this, FlowSocket);

    return _super4.call(this, name, node);
  }

  return FlowSocket;
}(Socket);
/**
 * This class representa a prev socket, a socket that
 * can be connected to other nexts sockets. The prev socket
 * cab have many peer (next) socket because the execution
 * can come from anywhere in the program
 */

var _peers2 = new WeakMap();

var PrevSocket = /*#__PURE__*/function (_FlowSocket) {
  _inherits(PrevSocket, _FlowSocket);

  var _super5 = _createSuper(PrevSocket);

  /** List of (next) peer sockets */

  /**
   * Construct a new PrevSocket
   * @param {string} name Name of the socket
   * @param {Node} node Parent node
   */
  function PrevSocket(name, node) {
    var _this6;

    _classCallCheck(this, PrevSocket);

    _this6 = _super5.call(this, name, node);

    _peers2.set(_assertThisInitialized(_this6), {
      writable: true,
      value: []
    });

    return _this6;
  }

  _createClass(PrevSocket, [{
    key: "connect",

    /**
     * Connect this socket to a next socket
     * @param {Socket} socket The next socket to connect
     */
    value: function connect(socket) {
      if (this.peers.find(function (s) {
        return s === socket;
      }) === undefined) {
        this.peers.push(socket);
      }

      socket.peer = this;
    }
    /**
     * Disconnect this socket from a next socket
     * @param {Socket} socket The next socket to disconnect
     */

  }, {
    key: "disconnect",
    value: function disconnect(socket) {
      var index = this.peers.findIndex(function (s) {
        return s === socket;
      });

      if (index !== undefined) {
        this.peers.splice(index, 1);
        socket.peer = null;
      }
    }
  }, {
    key: "peers",
    get: function get() {
      return _classPrivateFieldGet(this, _peers2);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _peers2, val);
    }
  }]);

  return PrevSocket;
}(FlowSocket);
/**
 * This class represents a socket to redirect the flow
 * to another node via a node's prev socket. This socket can
 * be connected to only one (prev) socket, because the program
 * flow have to be well defined
 */

var _peer2 = new WeakMap();

var NextSocket = /*#__PURE__*/function (_FlowSocket2) {
  _inherits(NextSocket, _FlowSocket2);

  var _super6 = _createSuper(NextSocket);

  /** The peer (prev) socket */

  /**
   * Construct a new NextSocket
   * @param {string} name Name of the socket
   * @param {Node} node The parent node of the socket
   */
  function NextSocket(name, node) {
    var _this7;

    _classCallCheck(this, NextSocket);

    _this7 = _super6.call(this, name, node);

    _peer2.set(_assertThisInitialized(_this7), {
      writable: true,
      value: null
    });

    return _this7;
  }

  _createClass(NextSocket, [{
    key: "connect",

    /**
     * Connect this socket to another (prev) socket
     * @param {Socket} socket The prev socket to connect to
     */
    value: function connect(socket) {
      var _this8 = this;

      this.peer = socket;

      if (socket.peers.find(function (s) {
        return s === _this8;
      }) === undefined) {
        socket.peers.push(this);
      }
    }
    /**
     * Disconnect this socket from the peer
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      var _this9 = this;

      if (this.peer) {
        var index = this.peer.peers.findIndex(function (s) {
          return s === _this9;
        });

        if (index !== -1) {
          this.peer.peers.splice(index, 1);
        }

        this.peer = null;
      }
    }
  }, {
    key: "peer",
    get: function get() {
      return _classPrivateFieldGet(this, _peer2);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _peer2, val);
    }
  }]);

  return NextSocket;
}(FlowSocket);

/***/ }),

/***/ "../cnodes/lib/core/type.js":
/*!**********************************!*\
  !*** ../cnodes/lib/core/type.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Types": () => /* binding */ Types
/* harmony export */ });
/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

/**
 * Possible types for values
 */
var Types = {
  NUMBER: "number",
  STRING: "string",
  BOOLEAN: "boolean",
  OBJECT: "object",
  ARRAY: "array",
  ANY: "any"
};

/***/ }),

/***/ "../cnodes/lib/nodes/array/apush.js":
/*!******************************************!*\
  !*** ../cnodes/lib/nodes/array/apush.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APush": () => /* binding */ APush,
/* harmony export */   "apushNode": () => /* binding */ apushNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a cnode that pushes a value
 * into an array
 */

var APush = /*#__PURE__*/function (_Node) {
  _inherits(APush, _Node);

  var _super = _createSuper(APush);

  function APush() {
    var _this;

    _classCallCheck(this, APush);

    _this = _super.call(this, "APush");
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Array", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ARRAY), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY)];
    _this.nexts = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.NextSocket("Out", _assertThisInitialized(_this))];
    _this.prev = new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.PrevSocket("In", _assertThisInitialized(_this));
    return _this;
  }
  /**
   * The process method
   */


  _createClass(APush, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();
      var arr = this.input("Array").value;
      var val = this.input("Val").value;

      if (!Array.isArray(arr)) {// TODO: Manage error
      } else {
        arr.push(val);
        this.output("Val").value = arr;
      }

      return this.getFlowResult(this.next("Out"));
    }
  }]);

  return APush;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * Helper function to create the node
 */

function apushNode() {
  return new APush();
}

/***/ }),

/***/ "../cnodes/lib/nodes/array/faconst.js":
/*!********************************************!*\
  !*** ../cnodes/lib/nodes/array/faconst.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FAConst": () => /* binding */ FAConst,
/* harmony export */   "faconstNode": () => /* binding */ faconstNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a node to get an array
 * as a string constant by JSON.parse() the input string.
 */

var FAConst = /*#__PURE__*/function (_Node) {
  _inherits(FAConst, _Node);

  var _super = _createSuper(FAConst);

  function FAConst() {
    var _this;

    _classCallCheck(this, FAConst);

    _this = _super.call(this, "FAConst");
    _this.functional = true;
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.STRING, "[0, 1, 2]")];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ARRAY, [])];
    _this.nexts = [];
    _this.prev = null;
    return _this;
  }
  /**
   * The process function
   */


  _createClass(FAConst, [{
    key: "process",
    value: function process() {
      this.evaluateInputs(); // Convert the constant/input value to an array

      try {
        this.output("Val").value = JSON.parse(this.input("Val").value);

        if (!Array.isArray(this.output("Val").value)) {
          throw new Error("The input value (".concat(this.output("Val").value, ") is not an array"));
        }
      } catch (error) {
        // TODO: Manage error
        console.log(error);
      }
    }
  }]);

  return FAConst;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * A helper function to create the node
 */

function faconstNode() {
  return new FAConst();
}

/***/ }),

/***/ "../cnodes/lib/nodes/array/faget.js":
/*!******************************************!*\
  !*** ../cnodes/lib/nodes/array/faget.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FAGet": () => /* binding */ FAGet,
/* harmony export */   "fagetNode": () => /* binding */ fagetNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a functional node for pick
 * a single value from an array
 */

var FAGet = /*#__PURE__*/function (_Node) {
  _inherits(FAGet, _Node);

  var _super = _createSuper(FAGet);

  function FAGet() {
    var _this;

    _classCallCheck(this, FAGet);

    _this = _super.call(this, "FAGet"); // The node is pure functional

    _this.functional = true; // Default to two numeric inputs

    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Array", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ARRAY, 0), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Index", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, 0)];
    _this.prev = null;
    _this.nexts = [];
    return _this;
  }
  /**
   * The process override
   */


  _createClass(FAGet, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();
      var arr = this.input("Array").value;
      var index = parseInt(this.input("Index").value, 10);

      if (!Array.isArray(arr)) {// TODO: Manage error
      } else {
        this.output("Val").value = arr[index];
      }
    }
  }]);

  return FAGet;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * Helper fuction to create the node
 */

function fagetNode() {
  return new FAGet();
}

/***/ }),

/***/ "../cnodes/lib/nodes/array/falength.js":
/*!*********************************************!*\
  !*** ../cnodes/lib/nodes/array/falength.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FALength": () => /* binding */ FALength,
/* harmony export */   "falengthNode": () => /* binding */ falengthNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a functional node for get
 * the length of an array
 */

var FALength = /*#__PURE__*/function (_Node) {
  _inherits(FALength, _Node);

  var _super = _createSuper(FALength);

  function FALength() {
    var _this;

    _classCallCheck(this, FALength);

    _this = _super.call(this, "FALength"); // The node is pure functional

    _this.functional = true; // Default to two numeric inputs

    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Array", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ARRAY, 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0)];
    _this.prev = null;
    _this.nexts = [];
    return _this;
  }
  /**
   * The process override
   */


  _createClass(FALength, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();
      var arr = this.input("Array").value;

      if (!Array.isArray(arr)) {// TODO: Manage error
      } else {
        this.output("Val").value = arr.length;
      }
    }
  }]);

  return FALength;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * Helper fuction to create the node
 */

function falengthNode() {
  return new FALength();
}

/***/ }),

/***/ "../cnodes/lib/nodes/array/famake.js":
/*!*******************************************!*\
  !*** ../cnodes/lib/nodes/array/famake.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FAMake": () => /* binding */ FAMake,
/* harmony export */   "famakeNode": () => /* binding */ famakeNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a node to get an array
 * from a list of inputs
 */

var FAMake = /*#__PURE__*/function (_Node) {
  _inherits(FAMake, _Node);

  var _super = _createSuper(FAMake);

  function FAMake() {
    var _this;

    _classCallCheck(this, FAMake);

    _this = _super.call(this, "FAMake");
    _this.canAddInput = true;
    _this.functional = true;
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("0", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, ""), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("1", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, "")];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ARRAY, [])];
    _this.nexts = [];
    _this.prev = null;
    return _this;
  }
  /**
   * The process function
   */


  _createClass(FAMake, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();
      var arr = [];
      arr.push.apply(arr, _toConsumableArray(this.inputs.map(function (i) {
        return i.value;
      })));
      this.output("Val").value = arr;
    }
    /**
     * Can this node remove a specific input?
     * In this case, there must be at least 1 input
     * @param {InputsSocket} input The input to remove
     */

  }, {
    key: "canRemoveInput",
    value: function canRemoveInput(input) {
      return this.inputs.length > 0;
    }
    /**
     * If this.#canAddInput is true, the user can add an input
     * equal to the (at least one) input that already exists
     */

  }, {
    key: "addInput",
    value: function addInput() {
      if (this.canAddInput) {
        this.inputs.push(new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("", this, _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, "")); // Rename all inputs to its ordinal number in the inputs array

        var _iterator = _createForOfIteratorHelper(this.inputs.entries()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
                idx = _step$value[0],
                i = _step$value[1];

            i.name = "" + idx;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        throw new Error("Can't add input!");
      }
    }
    /**
     * This method removes a specific input from the node, if
     * this is possible whit this instance
     * @param {InputSocket} input The input to remove
     */

  }, {
    key: "removeInput",
    value: function removeInput(input) {
      if (this.canRemoveInput(input)) {
        this.inputs = this.inputs.filter(function (i) {
          return i !== input;
        }); // Rename all inputs to its ordinal number in the inputs array

        var _iterator2 = _createForOfIteratorHelper(this.inputs.entries()),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _slicedToArray(_step2.value, 2),
                idx = _step2$value[0],
                i = _step2$value[1];

            i.name = "" + idx;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        throw new Error("Can't remove input");
      }
    }
  }]);

  return FAMake;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * A helper function to create the node
 */

function famakeNode() {
  return new FAMake();
}

/***/ }),

/***/ "../cnodes/lib/nodes/bool/fcompare.js":
/*!********************************************!*\
  !*** ../cnodes/lib/nodes/bool/fcompare.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Comparision": () => /* binding */ Comparision,
/* harmony export */   "FCompare": () => /* binding */ FCompare,
/* harmony export */   "fcompareNode": () => /* binding */ fcompareNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * Supported comparision types
 */

var Comparision = {
  EQUAL: "equal",
  GT: "gt",
  GTE: "gte",
  LT: "lt",
  LTE: "lte",
  NOT_EQUAL: "not_equal"
};
/**
 * This class implements a functional node for compairing numeric values.
 */

var _comparision = new WeakMap();

var FCompare = /*#__PURE__*/function (_Node) {
  _inherits(FCompare, _Node);

  var _super = _createSuper(FCompare);

  /** Configured comparision for this node */
  function FCompare() {
    var _this;

    var comparision = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Comparision.EQUAL;

    _classCallCheck(this, FCompare);

    _this = _super.call(this, "FCompare");

    _comparision.set(_assertThisInitialized(_this), {
      writable: true,
      value: Comparision.EQUAL
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _comparision, comparision); // The node is pure functional


    _this.functional = true; // Default to two numeric inputs

    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val1", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, 0), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val2", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.BOOLEAN, 0)];
    _this.prev = null;
    _this.nexts = [];
    return _this;
  }

  _createClass(FCompare, [{
    key: "process",

    /**
     * The process override
     */
    value: function process() {
      this.evaluateInputs();
      var val1 = this.input("Val1").value;
      var val2 = this.input("Val2").value;
      var ret;

      switch (this.comparision) {
        case Comparision.EQUAL:
          {
            ret = val1 === val2;
            break;
          }

        case Comparision.NOT_EQUAL:
          {
            ret = val1 !== val2;
            break;
          }

        case Comparision.GT:
          {
            ret = val1 > val2;
            break;
          }

        case Comparision.GTE:
          {
            ret = val1 >= val2;
            break;
          }

        case Comparision.LT:
          {
            ret = val1 < val2;
            break;
          }

        case Comparision.LTE:
          {
            ret = val1 <= val2;
            break;
          }

        default:
          {
            throw "Comparision type not valid";
          }
      }

      this.output("Val").value = ret;
    }
  }, {
    key: "comparision",
    get: function get() {
      return _classPrivateFieldGet(this, _comparision);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _comparision, val);
    }
  }]);

  return FCompare;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * Helper fuction to create the node
 */

function fcompareNode() {
  return new FCompare();
}

/***/ }),

/***/ "../cnodes/lib/nodes/bool/fequal.js":
/*!******************************************!*\
  !*** ../cnodes/lib/nodes/bool/fequal.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FEqual": () => /* binding */ FEqual,
/* harmony export */   "fequalNode": () => /* binding */ fequalNode
/* harmony export */ });
/* harmony import */ var _fcompare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcompare.js */ "../cnodes/lib/nodes/bool/fcompare.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */


/**
 * This class override the FCompare node with a comparision of EQUAL
 */

var FEqual = /*#__PURE__*/function (_FCompare) {
  _inherits(FEqual, _FCompare);

  var _super = _createSuper(FEqual);

  function FEqual() {
    var _this;

    _classCallCheck(this, FEqual);

    _this = _super.call(this, _fcompare_js__WEBPACK_IMPORTED_MODULE_0__.Comparision.EQUAL);
    _this.name = "FEqual";
    return _this;
  }

  return FEqual;
}(_fcompare_js__WEBPACK_IMPORTED_MODULE_0__.FCompare);
/**
 * Helper fuction to create the node
 */

function fequalNode() {
  return new FEqual();
}

/***/ }),

/***/ "../cnodes/lib/nodes/bool/fgt.js":
/*!***************************************!*\
  !*** ../cnodes/lib/nodes/bool/fgt.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FGT": () => /* binding */ FGT,
/* harmony export */   "fgtNode": () => /* binding */ fgtNode
/* harmony export */ });
/* harmony import */ var _fcompare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcompare.js */ "../cnodes/lib/nodes/bool/fcompare.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */


/**
 * This class override the FCompare node with a comparision of GT
 */

var FGT = /*#__PURE__*/function (_FCompare) {
  _inherits(FGT, _FCompare);

  var _super = _createSuper(FGT);

  function FGT() {
    var _this;

    _classCallCheck(this, FGT);

    _this = _super.call(this, _fcompare_js__WEBPACK_IMPORTED_MODULE_0__.Comparision.GT);
    _this.name = "FGT";
    return _this;
  }

  return FGT;
}(_fcompare_js__WEBPACK_IMPORTED_MODULE_0__.FCompare);
/**
 * Helper fuction to create the node
 */

function fgtNode() {
  return new FGT();
}

/***/ }),

/***/ "../cnodes/lib/nodes/bool/fgte.js":
/*!****************************************!*\
  !*** ../cnodes/lib/nodes/bool/fgte.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FGTE": () => /* binding */ FGTE,
/* harmony export */   "fgteNode": () => /* binding */ fgteNode
/* harmony export */ });
/* harmony import */ var _fcompare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcompare.js */ "../cnodes/lib/nodes/bool/fcompare.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */


/**
 * This class override the FCompare node with a comparision of GTE
 */

var FGTE = /*#__PURE__*/function (_FCompare) {
  _inherits(FGTE, _FCompare);

  var _super = _createSuper(FGTE);

  function FGTE() {
    var _this;

    _classCallCheck(this, FGTE);

    _this = _super.call(this, _fcompare_js__WEBPACK_IMPORTED_MODULE_0__.Comparision.GTE);
    _this.name = "FGTE";
    return _this;
  }

  return FGTE;
}(_fcompare_js__WEBPACK_IMPORTED_MODULE_0__.FCompare);
/**
 * Helper fuction to create the node
 */

function fgteNode() {
  return new FGTE();
}

/***/ }),

/***/ "../cnodes/lib/nodes/bool/flt.js":
/*!***************************************!*\
  !*** ../cnodes/lib/nodes/bool/flt.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FLT": () => /* binding */ FLT,
/* harmony export */   "fltNode": () => /* binding */ fltNode
/* harmony export */ });
/* harmony import */ var _fcompare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcompare.js */ "../cnodes/lib/nodes/bool/fcompare.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */


/**
 * This class override the FCompare node with a comparision of FLT
 */

var FLT = /*#__PURE__*/function (_FCompare) {
  _inherits(FLT, _FCompare);

  var _super = _createSuper(FLT);

  function FLT() {
    var _this;

    _classCallCheck(this, FLT);

    _this = _super.call(this, _fcompare_js__WEBPACK_IMPORTED_MODULE_0__.Comparision.LT);
    _this.name = "FLT";
    return _this;
  }

  return FLT;
}(_fcompare_js__WEBPACK_IMPORTED_MODULE_0__.FCompare);
/**
 * Helper fuction to create the node
 */

function fltNode() {
  return new FLT();
}

/***/ }),

/***/ "../cnodes/lib/nodes/bool/flte.js":
/*!****************************************!*\
  !*** ../cnodes/lib/nodes/bool/flte.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FLTE": () => /* binding */ FLTE,
/* harmony export */   "flteNode": () => /* binding */ flteNode
/* harmony export */ });
/* harmony import */ var _fcompare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcompare.js */ "../cnodes/lib/nodes/bool/fcompare.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */


/**
 * This class override the FCompare node with a comparision of FLTE
 */

var FLTE = /*#__PURE__*/function (_FCompare) {
  _inherits(FLTE, _FCompare);

  var _super = _createSuper(FLTE);

  function FLTE() {
    var _this;

    _classCallCheck(this, FLTE);

    _this = _super.call(this, _fcompare_js__WEBPACK_IMPORTED_MODULE_0__.Comparision.LTE);
    _this.name = "FLTE";
    return _this;
  }

  return FLTE;
}(_fcompare_js__WEBPACK_IMPORTED_MODULE_0__.FCompare);
/**
 * Helper fuction to create the node
 */

function flteNode() {
  return new FLTE();
}

/***/ }),

/***/ "../cnodes/lib/nodes/bool/fnotequal.js":
/*!*********************************************!*\
  !*** ../cnodes/lib/nodes/bool/fnotequal.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FNotEqual": () => /* binding */ FNotEqual,
/* harmony export */   "fnotequalNode": () => /* binding */ fnotequalNode
/* harmony export */ });
/* harmony import */ var _fcompare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcompare.js */ "../cnodes/lib/nodes/bool/fcompare.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */


/**
 * This class override the FCompare node with a comparision of NOT_EQUAL
 */

var FNotEqual = /*#__PURE__*/function (_FCompare) {
  _inherits(FNotEqual, _FCompare);

  var _super = _createSuper(FNotEqual);

  function FNotEqual() {
    var _this;

    _classCallCheck(this, FNotEqual);

    _this = _super.call(this, _fcompare_js__WEBPACK_IMPORTED_MODULE_0__.Comparision.NOT_EQUAL);
    _this.name = "FNotEqual";
    return _this;
  }

  return FNotEqual;
}(_fcompare_js__WEBPACK_IMPORTED_MODULE_0__.FCompare);
/**
 * Helper fuction to create the node
 */

function fnotequalNode() {
  return new FNotEqual();
}

/***/ }),

/***/ "../cnodes/lib/nodes/call.js":
/*!***********************************!*\
  !*** ../cnodes/lib/nodes/call.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Call": () => /* binding */ Call,
/* harmony export */   "callNode": () => /* binding */ callNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/socket.js */ "../cnodes/lib/core/socket.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */


/**
 * This class implements a subroutine/function call
 */

var Call = /*#__PURE__*/function (_Node) {
  _inherits(Call, _Node);

  var _super = _createSuper(Call);

  function Call() {
    var _this;

    _classCallCheck(this, Call);

    _this = _super.call(this, "Call");
    _this.inputs = [];
    _this.outputs = [];
    _this.nexts = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.NextSocket("Out", _assertThisInitialized(_this)), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.NextSocket("Call", _assertThisInitialized(_this))];
    _this.prev = new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.PrevSocket("In", _assertThisInitialized(_this));
    return _this;
  }
  /**
   * The process function
   */


  _createClass(Call, [{
    key: "process",
    value: function process() {
      // Save the current program's node
      var prevCurrentNode = this.program.currentNode; // Execute a sub program beginning on that node

      this.program.processFrom(this.next("Call").peer.node); // Restore the current program's node

      this.program.currentNode = prevCurrentNode;
      return this.getFlowResult(this.next("Out"));
    }
  }]);

  return Call;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * A helper function to create the node
 */

function callNode() {
  return new Call();
}

/***/ }),

/***/ "../cnodes/lib/nodes/console.js":
/*!**************************************!*\
  !*** ../cnodes/lib/nodes/console.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Console": () => /* binding */ Console,
/* harmony export */   "consoleNode": () => /* binding */ consoleNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a cnode that print to the
 * console the input value
 */

var Console = /*#__PURE__*/function (_Node) {
  _inherits(Console, _Node);

  var _super = _createSuper(Console);

  function Console() {
    var _this;

    _classCallCheck(this, Console);

    _this = _super.call(this, "Console");
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY)];
    _this.outputs = [];
    _this.nexts = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.NextSocket("Out", _assertThisInitialized(_this))];
    _this.prev = new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.PrevSocket("In", _assertThisInitialized(_this));
    return _this;
  }
  /**
   * The process method
   */


  _createClass(Console, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();
      console.log(this.input("Val").value);
      return this.getFlowResult(this.next("Out"));
    }
  }]);

  return Console;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * Helper function to create the node
 */

function consoleNode() {
  return new Console();
}

/***/ }),

/***/ "../cnodes/lib/nodes/fgetvar.js":
/*!**************************************!*\
  !*** ../cnodes/lib/nodes/fgetvar.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FGetvar": () => /* binding */ FGetvar,
/* harmony export */   "fgetvarNode": () => /* binding */ fgetvarNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a functional GetVar node,
 * a node to read a variable's value from the global
 * program's space
 */

var FGetvar = /*#__PURE__*/function (_Node) {
  _inherits(FGetvar, _Node);

  var _super = _createSuper(FGetvar);

  function FGetvar() {
    var _this;

    _classCallCheck(this, FGetvar);

    _this = _super.call(this, "FGetvar");
    _this.functional = true;
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Name", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.STRING, "")];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, "")];
    _this.nexts = [];
    _this.prev = null;
    return _this;
  }
  /**
   * The process method
   */


  _createClass(FGetvar, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();
      var varName = this.input("Name").value;
      this.output("Val").value = this.program.vars.get(varName);
    }
  }]);

  return FGetvar;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * Helper function to create the node
 */

function fgetvarNode() {
  return new FGetvar();
}

/***/ }),

/***/ "../cnodes/lib/nodes/fif.js":
/*!**********************************!*\
  !*** ../cnodes/lib/nodes/fif.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FIf": () => /* binding */ FIf,
/* harmony export */   "fifNode": () => /* binding */ fifNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a functional conditional node
 */

var FIf = /*#__PURE__*/function (_Node) {
  _inherits(FIf, _Node);

  var _super = _createSuper(FIf);

  function FIf() {
    var _this;

    _classCallCheck(this, FIf);

    _this = _super.call(this, "FIf"); // The node is pure functional

    _this.functional = true; // Default to two any inputs

    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Condition", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.BOOLEAN, false), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("True", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, 0), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("False", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, 0)];
    _this.prev = null;
    _this.nexts = [];
    return _this;
  }
  /**
   * The process override
   */


  _createClass(FIf, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();
      this.output("Val").value = this.input("Condition").value ? this.input("True").value : this.input("False").value;
    }
  }]);

  return FIf;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * Helper fuction to create the node
 */

function fifNode() {
  return new FIf();
}

/***/ }),

/***/ "../cnodes/lib/nodes/for.js":
/*!**********************************!*\
  !*** ../cnodes/lib/nodes/for.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "For": () => /* binding */ For,
/* harmony export */   "forNode": () => /* binding */ forNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a node that is able to
 * iterate over a range of integers, like the form
 * for(let i=start; i<end; i++) do();
 */

var For = /*#__PURE__*/function (_Node) {
  _inherits(For, _Node);

  var _super = _createSuper(For);

  function For() {
    var _this;

    _classCallCheck(this, For);

    _this = _super.call(this, "For");
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("From", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("To", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Index", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0)];
    _this.nexts = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.NextSocket("Out", _assertThisInitialized(_this)), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.NextSocket("Do", _assertThisInitialized(_this))];
    _this.prev = new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.PrevSocket("In", _assertThisInitialized(_this));
    return _this;
  }
  /**
   * The process function
   */


  _createClass(For, [{
    key: "process",
    value: function process() {
      this.evaluateInputs(); // Save the current program's node

      var prevCurrentNode = this.program.currentNode; // Set the "Index" output value to Index

      this.output("Index").value = parseInt(this.input("From").value); // Re evaluate inputs in case of Condition depends on Index output

      this.evaluateInputs(); // Let's cycle from "From" to "To" values

      for (var index = parseInt(this.input("From").value); index < parseInt(this.input("To").value); index++) {
        // Set the "Index" output value to Index
        this.output("Index").value = index; // If there's a node connected to the "Do" next socket...

        if (this.next("Do").peer !== null && this.next("Do").peer.node !== null) {
          // Execute a sub program beginning on that node
          this.program.processFrom(this.next("Do").peer.node);
        }
      } // Restore the current program's node


      this.program.currentNode = prevCurrentNode;
      return this.getFlowResult(this.next("Out"));
    }
  }]);

  return For;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * A helper function to create the node
 */

function forNode() {
  return new For();
}

/***/ }),

/***/ "../cnodes/lib/nodes/getvar.js":
/*!*************************************!*\
  !*** ../cnodes/lib/nodes/getvar.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Getvar": () => /* binding */ Getvar,
/* harmony export */   "getvarNode": () => /* binding */ getvarNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a node to get a variable's value
 * in the program's global space. This node has a functional
 * counterpart naamed FGetvar
 */

var Getvar = /*#__PURE__*/function (_Node) {
  _inherits(Getvar, _Node);

  var _super = _createSuper(Getvar);

  function Getvar() {
    var _this;

    _classCallCheck(this, Getvar);

    _this = _super.call(this, "Getvar");
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Name", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.STRING, "")];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, "")];
    _this.nexts = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.NextSocket("Out", _assertThisInitialized(_this))];
    _this.prev = new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.PrevSocket("In", _assertThisInitialized(_this));
    return _this;
  }
  /**
   * The process function
   */


  _createClass(Getvar, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();
      var varName = this.input("Name").value;
      this.output("Val").value = this.program.vars.get(varName);
      return this.getFlowResult(this.next("Out"));
    }
  }]);

  return Getvar;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * A helper function to create the node
 */

function getvarNode() {
  return new Getvar();
}

/***/ }),

/***/ "../cnodes/lib/nodes/if.js":
/*!*********************************!*\
  !*** ../cnodes/lib/nodes/if.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "If": () => /* binding */ If,
/* harmony export */   "ifNode": () => /* binding */ ifNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a node that is able to
 * redirect the flow of execution based on the
 * "condition" input value
 */

var If = /*#__PURE__*/function (_Node) {
  _inherits(If, _Node);

  var _super = _createSuper(If);

  function If() {
    var _this;

    _classCallCheck(this, If);

    _this = _super.call(this, "If");
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Condition", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.BOOLEAN, false)];
    _this.outputs = [];
    _this.nexts = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.NextSocket("Then", _assertThisInitialized(_this)), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.NextSocket("Else", _assertThisInitialized(_this))];
    _this.prev = new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.PrevSocket("In", _assertThisInitialized(_this));
    return _this;
  }
  /**
   * The process function
   */


  _createClass(If, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();
      var flow = null;

      if (this.input("Condition").value) {
        flow = this.next("Then");
      } else {
        flow = this.next("Else");
      }

      return this.getFlowResult(flow);
    }
  }]);

  return If;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * A helper function to create the node
 */

function ifNode() {
  return new If();
}

/***/ }),

/***/ "../cnodes/lib/nodes/math/fadd.js":
/*!****************************************!*\
  !*** ../cnodes/lib/nodes/math/fadd.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FAdd": () => /* binding */ FAdd,
/* harmony export */   "faddNode": () => /* binding */ faddNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a functional node for adding numeric values.
 * Supports a indefinite number of value inputs and one single output
 */

var FAdd = /*#__PURE__*/function (_Node) {
  _inherits(FAdd, _Node);

  var _super = _createSuper(FAdd);

  function FAdd() {
    var _this;

    _classCallCheck(this, FAdd);

    _this = _super.call(this, "FAdd"); // The node is pure functional

    _this.functional = true; // This node has a variable number of inputs

    _this.canAddInput = true; // Default to two numeric inputs

    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("0", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("1", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0)];
    _this.prev = null;
    _this.nexts = [];
    return _this;
  }
  /**
   * The process override
   */


  _createClass(FAdd, [{
    key: "process",
    value: function process() {
      var sum = 0;
      this.evaluateInputs();

      var _iterator = _createForOfIteratorHelper(this.inputs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var inp = _step.value;
          sum += parseFloat(inp.value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.output("Val").value = sum;
    }
    /**
     * If this.#canAddInput is true, the user can add an input
     * equal to the (at least one) input that already exists
     */

  }, {
    key: "addInput",
    value: function addInput() {
      if (this.canAddInput) {
        this.inputs.push(new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("", this, _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, "")); // Rename all inputs to its ordinal number in the inputs array

        var _iterator2 = _createForOfIteratorHelper(this.inputs.entries()),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _slicedToArray(_step2.value, 2),
                idx = _step2$value[0],
                i = _step2$value[1];

            i.name = "" + idx;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        throw new Error("Can't add input!");
      }
    }
    /**
     * This method removes a specific input from the node, if
     * this is possible whit this instance
     * @param {InputSocket} input The input to remove
     */

  }, {
    key: "removeInput",
    value: function removeInput(input) {
      if (this.canRemoveInput(input)) {
        this.inputs = this.inputs.filter(function (i) {
          return i !== input;
        }); // Rename all inputs to its ordinal number in the inputs array

        var _iterator3 = _createForOfIteratorHelper(this.inputs.entries()),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = _slicedToArray(_step3.value, 2),
                idx = _step3$value[0],
                i = _step3$value[1];

            i.name = "" + idx;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } else {
        throw new Error("Can't remove input");
      }
    }
    /**
     * Can this node remove a specific input?
     * In this case, there must be at least 2 inputs
     * @param {InputsSocket} input The input to remove
     */

  }, {
    key: "canRemoveInput",
    value: function canRemoveInput(input) {
      return this.inputs.length > 2;
    }
  }]);

  return FAdd;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * Helper fuction to create the node
 */

function faddNode() {
  return new FAdd();
}

/***/ }),

/***/ "../cnodes/lib/nodes/math/fdiv.js":
/*!****************************************!*\
  !*** ../cnodes/lib/nodes/math/fdiv.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDiv": () => /* binding */ FDiv,
/* harmony export */   "fdivNode": () => /* binding */ fdivNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a functional node for divide numeric values.
 */

var FDiv = /*#__PURE__*/function (_Node) {
  _inherits(FDiv, _Node);

  var _super = _createSuper(FDiv);

  function FDiv() {
    var _this;

    _classCallCheck(this, FDiv);

    _this = _super.call(this, "FDiv"); // The node is pure functional

    _this.functional = true; // Default to two numeric inputs

    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val1", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val2", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0)];
    _this.prev = null;
    _this.nexts = [];
    return _this;
  }
  /**
   * The process override
   */


  _createClass(FDiv, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();
      this.output("Val").value = parseFloat(this.input("Val1").value) / parseFloat(this.input("Val2").value);
    }
  }]);

  return FDiv;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * Helper fuction to create the node
 */

function fdivNode() {
  return new FDiv();
}

/***/ }),

/***/ "../cnodes/lib/nodes/math/fmod.js":
/*!****************************************!*\
  !*** ../cnodes/lib/nodes/math/fmod.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FMod": () => /* binding */ FMod,
/* harmony export */   "fmodNode": () => /* binding */ fmodNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a functional node for modulus (%)
 */

var FMod = /*#__PURE__*/function (_Node) {
  _inherits(FMod, _Node);

  var _super = _createSuper(FMod);

  function FMod() {
    var _this;

    _classCallCheck(this, FMod);

    _this = _super.call(this, "FMod"); // The node is pure functional

    _this.functional = true; // Default to two numeric inputs

    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val1", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val2", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0)];
    _this.prev = null;
    _this.nexts = [];
    return _this;
  }
  /**
   * The process override
   */


  _createClass(FMod, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();
      this.output("Val").value = parseFloat(this.input("Val1").value) % parseFloat(this.input("Val2").value);
    }
  }]);

  return FMod;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * Helper fuction to create the node
 */

function fmodNode() {
  return new FMod();
}

/***/ }),

/***/ "../cnodes/lib/nodes/math/fmul.js":
/*!****************************************!*\
  !*** ../cnodes/lib/nodes/math/fmul.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FMul": () => /* binding */ FMul,
/* harmony export */   "fmulNode": () => /* binding */ fmulNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a functional node for multiply numeric values.
 * Supports a indefinite number of value inputs and one single output
 */

var FMul = /*#__PURE__*/function (_Node) {
  _inherits(FMul, _Node);

  var _super = _createSuper(FMul);

  function FMul() {
    var _this;

    _classCallCheck(this, FMul);

    _this = _super.call(this, "FMul"); // The node is pure functional

    _this.functional = true; // This node has a variable number of inputs

    _this.canAddInput = true; // Default to two numeric inputs

    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("0", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("1", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0)];
    _this.prev = null;
    _this.nexts = [];
    return _this;
  }
  /**
   * The process override
   */


  _createClass(FMul, [{
    key: "process",
    value: function process() {
      var mul = 1;
      this.evaluateInputs();

      var _iterator = _createForOfIteratorHelper(this.inputs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var inp = _step.value;
          mul *= parseFloat(inp.value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.output("Val").value = mul;
    }
    /**
     * If this.#canAddInput is true, the user can add an input
     * equal to the (at least one) input that already exists
     */

  }, {
    key: "addInput",
    value: function addInput() {
      if (this.canAddInput) {
        this.inputs.push(new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("", this, _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, "")); // Rename all inputs to its ordinal number in the inputs array

        var _iterator2 = _createForOfIteratorHelper(this.inputs.entries()),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _slicedToArray(_step2.value, 2),
                idx = _step2$value[0],
                i = _step2$value[1];

            i.name = "" + idx;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        throw new Error("Can't add input!");
      }
    }
    /**
     * This method removes a specific input from the node, if
     * this is possible whit this instance
     * @param {InputSocket} input The input to remove
     */

  }, {
    key: "removeInput",
    value: function removeInput(input) {
      if (this.canRemoveInput(input)) {
        this.inputs = this.inputs.filter(function (i) {
          return i !== input;
        }); // Rename all inputs to its ordinal number in the inputs array

        var _iterator3 = _createForOfIteratorHelper(this.inputs.entries()),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = _slicedToArray(_step3.value, 2),
                idx = _step3$value[0],
                i = _step3$value[1];

            i.name = "" + idx;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } else {
        throw new Error("Can't remove input");
      }
    }
    /**
     * Can this node remove a specific input?
     * In this case, there must be at least 2 inputs
     * @param {InputsSocket} input The input to remove
     */

  }, {
    key: "canRemoveInput",
    value: function canRemoveInput(input) {
      return this.inputs.length > 2;
    }
  }]);

  return FMul;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * Helper fuction to create the node
 */

function fmulNode() {
  return new FMul();
}

/***/ }),

/***/ "../cnodes/lib/nodes/math/fnconst.js":
/*!*******************************************!*\
  !*** ../cnodes/lib/nodes/math/fnconst.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FNConst": () => /* binding */ FNConst,
/* harmony export */   "fnconstNode": () => /* binding */ fnconstNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a node to get return a simple
 * number constant. This is a functional node.
 */

var FNConst = /*#__PURE__*/function (_Node) {
  _inherits(FNConst, _Node);

  var _super = _createSuper(FNConst);

  function FNConst() {
    var _this;

    _classCallCheck(this, FNConst);

    _this = _super.call(this, "FNConst");
    _this.functional = true;
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0)];
    _this.nexts = [];
    _this.prev = null;
    return _this;
  }
  /**
   * The process function
   */


  _createClass(FNConst, [{
    key: "process",
    value: function process() {
      this.evaluateInputs(); // Convert the constant/input value to a string

      this.output("Val").value = parseFloat(this.input("Val").value);
    }
  }]);

  return FNConst;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * A helper function to create the node
 */

function fnconstNode() {
  return new FNConst();
}

/***/ }),

/***/ "../cnodes/lib/nodes/math/fsqrt.js":
/*!*****************************************!*\
  !*** ../cnodes/lib/nodes/math/fsqrt.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FSqrt": () => /* binding */ FSqrt,
/* harmony export */   "fsqrtNode": () => /* binding */ fsqrtNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a functional node for Square Root.
 */

var FSqrt = /*#__PURE__*/function (_Node) {
  _inherits(FSqrt, _Node);

  var _super = _createSuper(FSqrt);

  function FSqrt() {
    var _this;

    _classCallCheck(this, FSqrt);

    _this = _super.call(this, "FSqrt"); // The node is pure functional

    _this.functional = true; // Default to one numeric inputs

    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0)];
    _this.prev = null;
    _this.nexts = [];
    return _this;
  }
  /**
   * The process override
   */


  _createClass(FSqrt, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();
      this.output("Val").value = Math.sqrt(parseFloat(this.input("Val").value));
    }
  }]);

  return FSqrt;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * Helper fuction to create the node
 */

function fsqrtNode() {
  return new FSqrt();
}

/***/ }),

/***/ "../cnodes/lib/nodes/object/fobreak.js":
/*!*********************************************!*\
  !*** ../cnodes/lib/nodes/object/fobreak.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FOBreak": () => /* binding */ FOBreak,
/* harmony export */   "fobreakNode": () => /* binding */ fobreakNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a node to break down
 * an object to its fields, or part of them
 */

var FOBreak = /*#__PURE__*/function (_Node) {
  _inherits(FOBreak, _Node);

  var _super = _createSuper(FOBreak);

  function FOBreak() {
    var _this;

    _classCallCheck(this, FOBreak);

    _this = _super.call(this, "FOBreak");
    _this.canAddOutput = true;
    _this.functional = true;
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.OBJECT, {})];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("field1", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, ""), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("field2", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, "")]; // Sets all output as changeable in terms of name

    var _iterator = _createForOfIteratorHelper(_this.outputs),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var o = _step.value;
        o.canEditName = true;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    _this.nexts = [];
    _this.prev = null;
    return _this;
  }
  /**
   * The process function
   */


  _createClass(FOBreak, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();

      var _iterator2 = _createForOfIteratorHelper(this.outputs),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var o = _step2.value;
          o.value = this.input("Val").value[o.name];
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * If this.#canAddOutput is true, the user can add an output
     * equal to the (at least one) output that already exists
     * Subclass with variable number of input should override this method
     */

  }, {
    key: "addOutput",
    value: function addOutput() {
      if (this.canAddOutput) {
        var o = new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("", this, _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, "");
        o.canEditName = true;
        this.outputs.push(o);
      } else {
        throw new Error("Can't add output!");
      }
    }
    /**
     * This method removes a specific output from the node
     * @param {OutputSocket} output The output to remove
     */

  }, {
    key: "removeOutput",
    value: function removeOutput(output) {
      if (this.canRemoveOutput(output)) {
        this.outputs = this.outputs.filter(function (o) {
          return o !== output;
        });
      } else {
        throw new Error("Can't remove input");
      }
    }
    /**
     * Can this node remove a specific output?
     * There must be at least 1 output
     * @param {OutputSocket} output The output to remove
     */

  }, {
    key: "canRemoveOutput",
    value: function canRemoveOutput(output) {
      return this.outputs.length > 1;
    }
  }]);

  return FOBreak;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * A helper function to create the node
 */

function fobreakNode() {
  return new FOBreak();
}

/***/ }),

/***/ "../cnodes/lib/nodes/object/fomake.js":
/*!********************************************!*\
  !*** ../cnodes/lib/nodes/object/fomake.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FOMake": () => /* binding */ FOMake,
/* harmony export */   "fomakeNode": () => /* binding */ fomakeNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a node to get an object
 * from a list of fields
 */

var FOMake = /*#__PURE__*/function (_Node) {
  _inherits(FOMake, _Node);

  var _super = _createSuper(FOMake);

  function FOMake() {
    var _this;

    _classCallCheck(this, FOMake);

    _this = _super.call(this, "FOMake");
    _this.canAddInput = true;
    _this.functional = true;
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("field1", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, ""), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("field2", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, "")]; // Sets all input as changeable in terms of name

    var _iterator = _createForOfIteratorHelper(_this.inputs),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var i = _step.value;
        i.canEditName = true;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.OBJECT, {})];
    _this.nexts = [];
    _this.prev = null;
    return _this;
  }
  /**
   * The process function
   */


  _createClass(FOMake, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();
      var obj = this.inputs.reduce(function (acc, val) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, val.name, val.value));
      }, {});
      this.output("Val").value = obj;
    }
    /**
     * Can this node remove a specific input?
     * In this case, there must be at least 1 input
     * @param {InputsSocket} input The input to remove
     */

  }, {
    key: "canRemoveInput",
    value: function canRemoveInput(input) {
      return this.inputs.length > 0;
    }
    /**
     * If this.#canAddInput is true, the user can add an input
     * the new input must have this.#canEditName === true.
     * in this particular case the name is editable, so let the user
     * to choose and left it blank
     */

  }, {
    key: "addInput",
    value: function addInput() {
      var is = new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("", this, _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, "");
      is.canEditName = true;
      this.inputs.push(is);
    }
    /**
     * This method removes a specific input from the node
     * @param {InputSocket} input The input to remove
     */

  }, {
    key: "removeInput",
    value: function removeInput(input) {
      if (this.canRemoveInput(input)) {
        this.inputs = this.inputs.filter(function (i) {
          return i !== input;
        });
      } else {
        throw new Error("Can't remove input");
      }
    }
  }]);

  return FOMake;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * A helper function to create the node
 */

function fomakeNode() {
  return new FOMake();
}

/***/ }),

/***/ "../cnodes/lib/nodes/setvar.js":
/*!*************************************!*\
  !*** ../cnodes/lib/nodes/setvar.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Setvar": () => /* binding */ Setvar,
/* harmony export */   "setvarNode": () => /* binding */ setvarNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a node to set a variable
 * value in the program's global space. If the variable
 * don't exists, the processo function will create it
 */

var Setvar = /*#__PURE__*/function (_Node) {
  _inherits(Setvar, _Node);

  var _super = _createSuper(Setvar);

  function Setvar() {
    var _this;

    _classCallCheck(this, Setvar);

    _this = _super.call(this, "Setvar");
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Name", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.STRING, 0), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, "")];
    _this.nexts = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.NextSocket("Out", _assertThisInitialized(_this))];
    _this.prev = new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.PrevSocket("In", _assertThisInitialized(_this));
    return _this;
  }
  /**
   * The process fmethod
   */


  _createClass(Setvar, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();
      var varName = this.input("Name").value;
      var varVal = this.input("Val").value;
      this.program.vars.set(varName, varVal);
      this.output("Val").value = varVal;
      return this.getFlowResult(this.next("Out"));
    }
  }]);

  return Setvar;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * A helper function to create the node
 */

function setvarNode() {
  return new Setvar();
}

/***/ }),

/***/ "../cnodes/lib/nodes/string/fconcat.js":
/*!*********************************************!*\
  !*** ../cnodes/lib/nodes/string/fconcat.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FConcat": () => /* binding */ FConcat,
/* harmony export */   "fconcatNode": () => /* binding */ fconcatNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a node that conctas two strings.
 * If other type are passed, these are converted to strings
 */

var FConcat = /*#__PURE__*/function (_Node) {
  _inherits(FConcat, _Node);

  var _super = _createSuper(FConcat);

  function FConcat() {
    var _this;

    _classCallCheck(this, FConcat);

    _this = _super.call(this, "FConcat");
    _this.functional = true;
    _this.canAddInput = true;
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("0", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.STRING, ""), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("1", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.STRING, "")];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.STRING, "")];
    _this.nexts = [];
    _this.prev = null;
    return _this;
  }
  /**
   * The process function
   */


  _createClass(FConcat, [{
    key: "process",
    value: function process() {
      this.evaluateInputs();
      var res = "";

      var _iterator = _createForOfIteratorHelper(this.inputs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;
          res += i.value.toString();
        } // Convert the constant/input value to a string

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.output("Val").value = res;
    }
    /**
     * If this.#canAddInput is true, the user can add an input
     * equal to the (at least one) input that already exists
     */

  }, {
    key: "addInput",
    value: function addInput() {
      if (this.canAddInput) {
        this.inputs.push(new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("", this, _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.STRING, "")); // Rename all inputs to its ordinal number in the inputs array

        var _iterator2 = _createForOfIteratorHelper(this.inputs.entries()),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _slicedToArray(_step2.value, 2),
                idx = _step2$value[0],
                i = _step2$value[1];

            i.name = "" + idx;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        throw new Error("Can't add input!");
      }
    }
    /**
     * This method removes a specific input from the node, if
     * this is possible whit this instance
     * @param {InputSocket} input The input to remove
     */

  }, {
    key: "removeInput",
    value: function removeInput(input) {
      if (this.canRemoveInput(input)) {
        this.inputs = this.inputs.filter(function (i) {
          return i !== input;
        }); // Rename all inputs to its ordinal number in the inputs array

        var _iterator3 = _createForOfIteratorHelper(this.inputs.entries()),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = _slicedToArray(_step3.value, 2),
                idx = _step3$value[0],
                i = _step3$value[1];

            i.name = "" + idx;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } else {
        throw new Error("Can't remove input");
      }
    }
    /**
     * Can this node remove a specific input?
     * In this case, there must be at least 2 inputs
     * @param {InputsSocket} input The input to remove
     */

  }, {
    key: "canRemoveInput",
    value: function canRemoveInput(input) {
      return this.inputs.length > 2;
    }
  }]);

  return FConcat;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * A helper function to create the node
 */

function fconcatNode() {
  return new FConcat();
}

/***/ }),

/***/ "../cnodes/lib/nodes/string/fsconst.js":
/*!*********************************************!*\
  !*** ../cnodes/lib/nodes/string/fsconst.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FSConst": () => /* binding */ FSConst,
/* harmony export */   "fsconstNode": () => /* binding */ fsconstNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a node to get return a simple
 * string constant. This is a functional node.
 */

var FSConst = /*#__PURE__*/function (_Node) {
  _inherits(FSConst, _Node);

  var _super = _createSuper(FSConst);

  function FSConst() {
    var _this;

    _classCallCheck(this, FSConst);

    _this = _super.call(this, "FSConst");
    _this.functional = true;
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, "")];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.STRING, "")];
    _this.nexts = [];
    _this.prev = null;
    return _this;
  }
  /**
   * The process function
   */


  _createClass(FSConst, [{
    key: "process",
    value: function process() {
      this.evaluateInputs(); // Convert the constant/input value to a string

      this.output("Val").value = this.input("Val").value.toString();
    }
  }]);

  return FSConst;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * A helper function to create the node
 */

function fsconstNode() {
  return new FSConst();
}

/***/ }),

/***/ "../cnodes/lib/nodes/while.js":
/*!************************************!*\
  !*** ../cnodes/lib/nodes/while.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "While": () => /* binding */ While,
/* harmony export */   "whileNode": () => /* binding */ whileNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node.js */ "../cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/socket.js */ "../cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/type.js */ "../cnodes/lib/core/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * cnodes
 *
 * A representation-agnostic library to define and execute nodes based processes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */



/**
 * This class implements a node that is able to
 * iterate until a condition become false, like
 * while(condition) do();
 */

var While = /*#__PURE__*/function (_Node) {
  _inherits(While, _Node);

  var _super = _createSuper(While);

  function While() {
    var _this;

    _classCallCheck(this, While);

    _this = _super.call(this, "While");
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Index", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Condition", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.BOOLEAN, false)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Index", _assertThisInitialized(_this), _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0)];
    _this.nexts = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.NextSocket("Out", _assertThisInitialized(_this)), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.NextSocket("Do", _assertThisInitialized(_this))];
    _this.prev = new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.PrevSocket("In", _assertThisInitialized(_this));
    return _this;
  }
  /**
   * The process function
   */


  _createClass(While, [{
    key: "process",
    value: function process() {
      this.evaluateInputs(); // Save the current program's node

      var prevCurrentNode = this.program.currentNode; // A bouns index variable ;-)

      var index = parseFloat(this.input("Index").value); // Set the "Index" output value to Index

      this.output("Index").value = index; // Re evaluate inputs in case of Condition depends on Index output

      this.evaluateInputs(); // Let's cycle while condition is true

      while (this.input("Condition").value) {
        // If there's a node connected to the "Do" next socket...
        if (this.next("Do").peer !== null && this.next("Do").peer.node !== null) {
          // Set the "Index" output value to Index
          this.output("Index").value = index++; // Execute a sub program beginning on that node

          this.program.processFrom(this.next("Do").peer.node); // Re-compute the guard...

          this.evaluateInputs();
        }
      } // Restore the currentprogram's node


      this.program.currentNode = prevCurrentNode;
      return this.getFlowResult(this.next("Out"));
    }
  }]);

  return While;
}(_core_node_js__WEBPACK_IMPORTED_MODULE_0__.Node);
/**
 * A helper function to create the node
 */

function whileNode() {
  return new While();
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=main.js.map