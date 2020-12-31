var cnui;cnui =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@marco.jacovone/cnodes/cnodes.js":
/*!*******************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/cnodes.js ***!
  \*******************************************************/
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
/* harmony export */   "Type": () => /* reexport safe */ _lib_core_type_js__WEBPACK_IMPORTED_MODULE_4__.Type,
/* harmony export */   "Types": () => /* reexport safe */ _lib_core_type_js__WEBPACK_IMPORTED_MODULE_4__.Types,
/* harmony export */   "type": () => /* reexport safe */ _lib_core_type_js__WEBPACK_IMPORTED_MODULE_4__.type,
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
/* harmony export */   "Comparision": () => /* reexport safe */ _lib_nodes_bool_fcompare_js__WEBPACK_IMPORTED_MODULE_13__.Comparision,
/* harmony export */   "FCompare": () => /* reexport safe */ _lib_nodes_bool_fcompare_js__WEBPACK_IMPORTED_MODULE_13__.FCompare,
/* harmony export */   "fcompareNode": () => /* reexport safe */ _lib_nodes_bool_fcompare_js__WEBPACK_IMPORTED_MODULE_13__.fcompareNode,
/* harmony export */   "FAdd": () => /* reexport safe */ _lib_nodes_math_fadd_js__WEBPACK_IMPORTED_MODULE_14__.FAdd,
/* harmony export */   "faddNode": () => /* reexport safe */ _lib_nodes_math_fadd_js__WEBPACK_IMPORTED_MODULE_14__.faddNode,
/* harmony export */   "FDiv": () => /* reexport safe */ _lib_nodes_math_fdiv_js__WEBPACK_IMPORTED_MODULE_15__.FDiv,
/* harmony export */   "fdivNode": () => /* reexport safe */ _lib_nodes_math_fdiv_js__WEBPACK_IMPORTED_MODULE_15__.fdivNode,
/* harmony export */   "FMul": () => /* reexport safe */ _lib_nodes_math_fmul_js__WEBPACK_IMPORTED_MODULE_16__.FMul,
/* harmony export */   "fmulNode": () => /* reexport safe */ _lib_nodes_math_fmul_js__WEBPACK_IMPORTED_MODULE_16__.fmulNode,
/* harmony export */   "FSqrt": () => /* reexport safe */ _lib_nodes_math_fsqrt_js__WEBPACK_IMPORTED_MODULE_17__.FSqrt,
/* harmony export */   "fsqrtNode": () => /* reexport safe */ _lib_nodes_math_fsqrt_js__WEBPACK_IMPORTED_MODULE_17__.fsqrtNode
/* harmony export */ });
/* harmony import */ var _lib_core_env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/core/env.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/env.js");
/* harmony import */ var _lib_core_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/core/node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _lib_core_program_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/core/program.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/program.js");
/* harmony import */ var _lib_core_socket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/core/socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
/* harmony import */ var _lib_core_type_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/core/type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
/* harmony import */ var _lib_nodes_call_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/nodes/call.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/call.js");
/* harmony import */ var _lib_nodes_console_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/nodes/console.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/console.js");
/* harmony import */ var _lib_nodes_fgetvar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/nodes/fgetvar.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/fgetvar.js");
/* harmony import */ var _lib_nodes_for_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/nodes/for.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/for.js");
/* harmony import */ var _lib_nodes_getvar_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/nodes/getvar.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/getvar.js");
/* harmony import */ var _lib_nodes_if_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/nodes/if.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/if.js");
/* harmony import */ var _lib_nodes_setvar_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/nodes/setvar.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/setvar.js");
/* harmony import */ var _lib_nodes_while_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/nodes/while.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/while.js");
/* harmony import */ var _lib_nodes_bool_fcompare_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/nodes/bool/fcompare.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fcompare.js");
/* harmony import */ var _lib_nodes_math_fadd_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/nodes/math/fadd.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/math/fadd.js");
/* harmony import */ var _lib_nodes_math_fdiv_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/nodes/math/fdiv.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/math/fdiv.js");
/* harmony import */ var _lib_nodes_math_fmul_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/nodes/math/fmul.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/math/fmul.js");
/* harmony import */ var _lib_nodes_math_fsqrt_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/nodes/math/fsqrt.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/math/fsqrt.js");
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

 // Export math nodes






/***/ }),

/***/ "./node_modules/@marco.jacovone/cnodes/lib/core/enter.js":
/*!***************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/core/enter.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Enter": () => /* binding */ Enter,
/* harmony export */   "enterNode": () => /* binding */ enterNode
/* harmony export */ });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
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
    _this.inputs = [new _socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val", _assertThisInitialized(_this), (0,_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, false), 0)];
    _this.outputs = [new _socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), (0,_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, false), 0)];
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/core/env.js":
/*!*************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/core/env.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Env": () => /* binding */ Env
/* harmony export */ });
/* harmony import */ var _program_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./program.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/program.js");
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enter.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/enter.js");
/* harmony import */ var _exit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exit.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/exit.js");
/* harmony import */ var _nodes_call_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nodes/call.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/call.js");
/* harmony import */ var _nodes_console_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nodes/console.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/console.js");
/* harmony import */ var _nodes_fgetvar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nodes/fgetvar.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/fgetvar.js");
/* harmony import */ var _nodes_for_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nodes/for.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/for.js");
/* harmony import */ var _nodes_getvar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nodes/getvar.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/getvar.js");
/* harmony import */ var _nodes_setvar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../nodes/setvar.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/setvar.js");
/* harmony import */ var _nodes_while_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../nodes/while.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/while.js");
/* harmony import */ var _nodes_if_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../nodes/if.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/if.js");
/* harmony import */ var _nodes_math_fadd_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../nodes/math/fadd.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/math/fadd.js");
/* harmony import */ var _nodes_math_fdiv_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../nodes/math/fdiv.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/math/fdiv.js");
/* harmony import */ var _nodes_math_fmul_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../nodes/math/fmul.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/math/fmul.js");
/* harmony import */ var _nodes_math_fsqrt_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../nodes/math/fsqrt.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/math/fsqrt.js");
/* harmony import */ var _nodes_bool_fequal_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../nodes/bool/fequal.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fequal.js");
/* harmony import */ var _nodes_bool_fgt_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../nodes/bool/fgt.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fgt.js");
/* harmony import */ var _nodes_bool_fgte_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../nodes/bool/fgte.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fgte.js");
/* harmony import */ var _nodes_bool_flt_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../nodes/bool/flt.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/flt.js");
/* harmony import */ var _nodes_bool_flte_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../nodes/bool/flte.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/flte.js");
/* harmony import */ var _nodes_bool_fnotequal_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../nodes/bool/fnotequal.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fnotequal.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
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
      Env.registerNode("Setvar", "Core", _nodes_setvar_js__WEBPACK_IMPORTED_MODULE_8__.setvarNode);
      Env.registerNode("While", "Core", _nodes_while_js__WEBPACK_IMPORTED_MODULE_9__.whileNode);
      Env.registerNode("Enter", "Core", _enter_js__WEBPACK_IMPORTED_MODULE_1__.enterNode);
      Env.registerNode("Exit", "Core", _exit_js__WEBPACK_IMPORTED_MODULE_2__.exitNode); // Math nodes

      Env.registerNode("FAdd", "Math", _nodes_math_fadd_js__WEBPACK_IMPORTED_MODULE_11__.faddNode);
      Env.registerNode("FDiv", "Math", _nodes_math_fdiv_js__WEBPACK_IMPORTED_MODULE_12__.fdivNode);
      Env.registerNode("FMul", "Math", _nodes_math_fmul_js__WEBPACK_IMPORTED_MODULE_13__.fmulNode);
      Env.registerNode("FSqrt", "Math", _nodes_math_fsqrt_js__WEBPACK_IMPORTED_MODULE_14__.fsqrtNode); // Boolean Nodes

      Env.registerNode("FEqual", "Boolean", _nodes_bool_fequal_js__WEBPACK_IMPORTED_MODULE_15__.fequalNode);
      Env.registerNode("FGT", "Boolean", _nodes_bool_fgt_js__WEBPACK_IMPORTED_MODULE_16__.fgtNode);
      Env.registerNode("FGTE", "Boolean", _nodes_bool_fgte_js__WEBPACK_IMPORTED_MODULE_17__.fgteNode);
      Env.registerNode("FLT", "Boolean", _nodes_bool_flt_js__WEBPACK_IMPORTED_MODULE_18__.fltNode);
      Env.registerNode("FLTE", "Boolean", _nodes_bool_flte_js__WEBPACK_IMPORTED_MODULE_19__.flteNode);
      Env.registerNode("FNotEqual", "Boolean", _nodes_bool_fnotequal_js__WEBPACK_IMPORTED_MODULE_20__.fnotequalNode);
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
        lastNodeIndex: _node_js__WEBPACK_IMPORTED_MODULE_22__.Node.lastNodeIdIndex,
        lastSocketIndex: _socket_js__WEBPACK_IMPORTED_MODULE_21__.Socket.lastSocketIdIndex,
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
                type: {
                  type: inp.type.type,
                  isArray: inp.type.isArray
                },
                value: inp.value,
                peer: null
              };
            }),
            outputs: node.outputs.map(function (outp) {
              return {
                id: outp.id,
                name: outp.name,
                node: null,
                type: {
                  type: outp.type.type,
                  isArray: outp.type.isArray
                },
                value: outp.value,
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
              var inp = new _socket_js__WEBPACK_IMPORTED_MODULE_21__.InputSocket(inpData.name, node, new _type_js__WEBPACK_IMPORTED_MODULE_23__.Type(inpData.type.type, inpData.type.isArray), inpData.value);
              inp.id = inpData.id;
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
              var outp = new _socket_js__WEBPACK_IMPORTED_MODULE_21__.OutputSocket(outpData.name, node, new _type_js__WEBPACK_IMPORTED_MODULE_23__.Type(outpData.type.type, outpData.type.isArray), outpData.value);
              outp.id = outpData.id;
              node.outputs.push(outp);
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }

          if (nodeData.prev) {
            var prev = new _socket_js__WEBPACK_IMPORTED_MODULE_21__.PrevSocket(nodeData.prev.name, node);
            prev.id = nodeData.prev.id;
            node.prev = prev;
          }

          var _iterator12 = _createForOfIteratorHelper(nodeData.nexts),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var nextData = _step12.value;
              var next = new _socket_js__WEBPACK_IMPORTED_MODULE_21__.NextSocket(nextData.name, node);
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

      _node_js__WEBPACK_IMPORTED_MODULE_22__.Node.lastNodeIdIndex = data.lastNodeIndex;
      _socket_js__WEBPACK_IMPORTED_MODULE_21__.Socket.lastSocketIdIndex = data.lastSocketIndex;
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/core/exit.js":
/*!**************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/core/exit.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exit": () => /* binding */ Exit,
/* harmony export */   "exitNode": () => /* binding */ exitNode
/* harmony export */ });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
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
    _this.inputs = [new _socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val", _assertThisInitialized(_this), (0,_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, false), 0)];
    _this.outputs = [new _socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), (0,_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, false), 0)];
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js":
/*!**************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/core/node.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => /* binding */ Node,
/* harmony export */   "Result": () => /* binding */ Result
/* harmony export */ });
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
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
     * equal to the (at least one) input that already exists
     */

  }, {
    key: "addInput",
    value: function addInput() {
      if (this.canAddInput && _classPrivateFieldGet(this, _inputs).length > 0) {
        _classPrivateFieldGet(this, _inputs).push(new _socket_js__WEBPACK_IMPORTED_MODULE_0__.InputSocket("", this, _classPrivateFieldGet(this, _inputs)[0].type, _classPrivateFieldGet(this, _inputs)[0].value)); // Rename all inputs to its ordinal number in the inputs array


        var _iterator5 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _inputs).entries()),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _step5$value = _slicedToArray(_step5.value, 2),
                idx = _step5$value[0],
                i = _step5$value[1];

            i.name = "" + idx;
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      } else {
        throw new Error("Can't add input!");
      }
    }
    /**
     * This method removes a specific input from the node, if
     * this is possible whit this instance
     * @param {*} input The input to remove
     */

  }, {
    key: "removeInput",
    value: function removeInput(input) {
      if (this.canRemoveInput(input)) {
        _classPrivateFieldSet(this, _inputs, _classPrivateFieldGet(this, _inputs).filter(function (i) {
          return i !== input;
        })); // Rename all inputs to its ordinal number in the inputs array


        var _iterator6 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _inputs).entries()),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _step6$value = _slicedToArray(_step6.value, 2),
                idx = _step6$value[0],
                i = _step6$value[1];

            i.name = "" + idx;
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      } else {
        throw new Error("Can't remove input");
      }
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/core/program.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/core/program.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Program": () => /* binding */ Program,
/* harmony export */   "program": () => /* binding */ program
/* harmony export */ });
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enter.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/enter.js");
/* harmony import */ var _exit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exit.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/exit.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
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

    _this.inputs = [new _socket_js__WEBPACK_IMPORTED_MODULE_3__.InputSocket("Val", _assertThisInitialized(_this), (0,_type_js__WEBPACK_IMPORTED_MODULE_4__.type)(_type_js__WEBPACK_IMPORTED_MODULE_4__.Types.ANY, false), 0)];
    _this.outputs = [new _socket_js__WEBPACK_IMPORTED_MODULE_3__.OutputSocket("Val", _assertThisInitialized(_this), (0,_type_js__WEBPACK_IMPORTED_MODULE_4__.type)(_type_js__WEBPACK_IMPORTED_MODULE_4__.Types.ANY, false), 0)];
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js":
/*!****************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/core/socket.js ***!
  \****************************************************************/
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
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
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

var ValueSocket = /*#__PURE__*/function (_Socket) {
  _inherits(ValueSocket, _Socket);

  var _super = _createSuper(ValueSocket);

  /** The type for the socket's value */

  /** The stored value */

  /**
   * Construct a new ValueSocket
   * @param {string} name Name of the socket
   * @param {Node} node The parent node
   * @param {Type} type The type of this socket
   * @param {any} value The default value of the socket
   */
  function ValueSocket(name, node) {
    var _this;

    var _type2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _type2(_type_js__WEBPACK_IMPORTED_MODULE_0__.Types.NUMBER, false);

    var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, ValueSocket);

    _this = _super.call(this, name, node);

    _type.set(_assertThisInitialized(_this), {
      writable: true,
      value: (0,_type_js__WEBPACK_IMPORTED_MODULE_0__.type)(_type_js__WEBPACK_IMPORTED_MODULE_0__.Types.NUMBER, false)
    });

    _value.set(_assertThisInitialized(_this), {
      writable: true,
      value: 0
    });

    _this.type = _type2;
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

    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : type(_type_js__WEBPACK_IMPORTED_MODULE_0__.Types.NUMBER, false);
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

    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : type(_type_js__WEBPACK_IMPORTED_MODULE_0__.Types.NUMBER, false);
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js":
/*!**************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/core/type.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Types": () => /* binding */ Types,
/* harmony export */   "Type": () => /* binding */ Type,
/* harmony export */   "type": () => /* binding */ type
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
 * Possible types for values
 */
var Types = {
  NUMBER: "number",
  STRING: "string",
  BOOLEAN: "boolean",
  OBJECT: "object",
  ANY: "any"
};
/**
 * A type is a type and a flag indicating that the
 * type is a array of that base type
 */

var _type = new WeakMap();

var _isArray = new WeakMap();

var Type = /*#__PURE__*/function () {
  /** The base type */

  /** Is this type an array of base type? */

  /**
   * Construct a new Type
   * @param {string} type The type
   * @param {boolean} isArray Is array of this type?
   */
  function Type(type, isArray) {
    _classCallCheck(this, Type);

    _type.set(this, {
      writable: true,
      value: Types.NUMBER
    });

    _isArray.set(this, {
      writable: true,
      value: false
    });

    _classPrivateFieldSet(this, _type, type);

    _classPrivateFieldSet(this, _isArray, isArray);
  }

  _createClass(Type, [{
    key: "type",
    get: function get() {
      return _classPrivateFieldGet(this, _type);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _type, val);
    }
  }, {
    key: "isArray",
    get: function get() {
      return _classPrivateFieldGet(this, _isArray);
    },
    set: function set(val) {
      _classPrivateFieldSet(this, _isArray, val);
    }
  }]);

  return Type;
}();
/**
 * A helper function to create the type
 * @param {Type} type The base type
 * @param {boolean} isArray The array flag
 */

function type(type, isArray) {
  return new Type(type, isArray);
}

/***/ }),

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fcompare.js":
/*!************************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fcompare.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Comparision": () => /* binding */ Comparision,
/* harmony export */   "FCompare": () => /* binding */ FCompare,
/* harmony export */   "fcompareNode": () => /* binding */ fcompareNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
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

    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val1", _assertThisInitialized(_this), (0,_core_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, false), 0), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val2", _assertThisInitialized(_this), (0,_core_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, false), 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), (0,_core_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.BOOLEAN, false), 0)];
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fequal.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fequal.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FEqual": () => /* binding */ FEqual,
/* harmony export */   "fequalNode": () => /* binding */ fequalNode
/* harmony export */ });
/* harmony import */ var _fcompare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcompare.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fcompare.js");
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fgt.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fgt.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FGT": () => /* binding */ FGT,
/* harmony export */   "fgtNode": () => /* binding */ fgtNode
/* harmony export */ });
/* harmony import */ var _fcompare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcompare.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fcompare.js");
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fgte.js":
/*!********************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fgte.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FGTE": () => /* binding */ FGTE,
/* harmony export */   "fgteNode": () => /* binding */ fgteNode
/* harmony export */ });
/* harmony import */ var _fcompare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcompare.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fcompare.js");
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/flt.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/flt.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FLT": () => /* binding */ FLT,
/* harmony export */   "fltNode": () => /* binding */ fltNode
/* harmony export */ });
/* harmony import */ var _fcompare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcompare.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fcompare.js");
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/flte.js":
/*!********************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/flte.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FLTE": () => /* binding */ FLTE,
/* harmony export */   "flteNode": () => /* binding */ flteNode
/* harmony export */ });
/* harmony import */ var _fcompare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcompare.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fcompare.js");
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fnotequal.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fnotequal.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FNotEqual": () => /* binding */ FNotEqual,
/* harmony export */   "fnotequalNode": () => /* binding */ fnotequalNode
/* harmony export */ });
/* harmony import */ var _fcompare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcompare.js */ "./node_modules/@marco.jacovone/cnodes/lib/nodes/bool/fcompare.js");
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/call.js":
/*!***************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/call.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Call": () => /* binding */ Call,
/* harmony export */   "callNode": () => /* binding */ callNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/console.js":
/*!******************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/console.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Console": () => /* binding */ Console,
/* harmony export */   "consoleNode": () => /* binding */ consoleNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
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
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val", _assertThisInitialized(_this), (0,_core_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, false), 0)];
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/fgetvar.js":
/*!******************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/fgetvar.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FGetvar": () => /* binding */ FGetvar,
/* harmony export */   "fgetvarNode": () => /* binding */ fgetvarNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
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
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Name", _assertThisInitialized(_this), new _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Type(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.STRING, false), "")];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), new _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Type(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, false), "")];
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/for.js":
/*!**************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/for.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "For": () => /* binding */ For,
/* harmony export */   "forNode": () => /* binding */ forNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
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
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("From", _assertThisInitialized(_this), new _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Type(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0), 0), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("To", _assertThisInitialized(_this), new _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Type(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0), 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Index", _assertThisInitialized(_this), new _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Type(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, false), 0)];
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

      this.output("Index").value = this.input("From").value; // Re evaluate inputs in case of Condition depends on Index output

      this.evaluateInputs(); // Let's cycle from "From" to "To" values

      for (var index = this.input("From").value; index < this.input("To").value; index++) {
        // If there's a node connected to the "Do" next socket...
        if (this.next("Do").peer !== null && this.next("Do").peer.node !== null) {
          // Set the "Index" output value to Index
          this.output("Index").value = index; // Execute a sub program beginning on that node

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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/getvar.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/getvar.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Getvar": () => /* binding */ Getvar,
/* harmony export */   "getvarNode": () => /* binding */ getvarNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
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
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Name", _assertThisInitialized(_this), new _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Type(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.STRING, false), "")];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), new _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Type(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.ANY, false), "")];
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/if.js":
/*!*************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/if.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "If": () => /* binding */ If,
/* harmony export */   "ifNode": () => /* binding */ ifNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
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
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Condition", _assertThisInitialized(_this), new _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Type(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.BOOLEAN, false), false)];
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/math/fadd.js":
/*!********************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/math/fadd.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FAdd": () => /* binding */ FAdd,
/* harmony export */   "faddNode": () => /* binding */ faddNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
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

    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("0", _assertThisInitialized(_this), (0,_core_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, false), 0), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("1", _assertThisInitialized(_this), (0,_core_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, false), 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), (0,_core_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, false), 0)];
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/math/fdiv.js":
/*!********************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/math/fdiv.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDiv": () => /* binding */ FDiv,
/* harmony export */   "fdivNode": () => /* binding */ fdivNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
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

    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val1", _assertThisInitialized(_this), (0,_core_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, false), 0), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val2", _assertThisInitialized(_this), (0,_core_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, false), 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), (0,_core_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, false), 0)];
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/math/fmul.js":
/*!********************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/math/fmul.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FMul": () => /* binding */ FMul,
/* harmony export */   "fmulNode": () => /* binding */ fmulNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
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

    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("0", _assertThisInitialized(_this), (0,_core_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, false), 0), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("1", _assertThisInitialized(_this), (0,_core_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, false), 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), (0,_core_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, false), 0)];
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/math/fsqrt.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/math/fsqrt.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FSqrt": () => /* binding */ FSqrt,
/* harmony export */   "fsqrtNode": () => /* binding */ fsqrtNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
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

    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val", _assertThisInitialized(_this), (0,_core_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, false), 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), (0,_core_type_js__WEBPACK_IMPORTED_MODULE_2__.type)(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, false), 0)];
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/setvar.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/setvar.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Setvar": () => /* binding */ Setvar,
/* harmony export */   "setvarNode": () => /* binding */ setvarNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
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
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Name", _assertThisInitialized(_this), new _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Type(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, false), 0), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Val", _assertThisInitialized(_this), new _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Type(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, false), 0)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Val", _assertThisInitialized(_this), _typeof(""), "")];
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

/***/ "./node_modules/@marco.jacovone/cnodes/lib/nodes/while.js":
/*!****************************************************************!*\
  !*** ./node_modules/@marco.jacovone/cnodes/lib/nodes/while.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "While": () => /* binding */ While,
/* harmony export */   "whileNode": () => /* binding */ whileNode
/* harmony export */ });
/* harmony import */ var _core_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/node.js");
/* harmony import */ var _core_socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/socket.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/socket.js");
/* harmony import */ var _core_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/type.js */ "./node_modules/@marco.jacovone/cnodes/lib/core/type.js");
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
    _this.inputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Index", _assertThisInitialized(_this), new _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Type(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, 0), 0), new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.InputSocket("Condition", _assertThisInitialized(_this), new _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Type(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.BOOLEAN, false), false)];
    _this.outputs = [new _core_socket_js__WEBPACK_IMPORTED_MODULE_1__.OutputSocket("Index", _assertThisInitialized(_this), new _core_type_js__WEBPACK_IMPORTED_MODULE_2__.Type(_core_type_js__WEBPACK_IMPORTED_MODULE_2__.Types.NUMBER, false), 0)];
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

/***/ }),

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
 * that can manage nodes, sockets (a special subset of components) and connections
 * between sockets. The canvas is able to zoom and pan itself as well as to move
 * components. Components are organized in a hierarchical way, so that moving a component
 * will move all its subcomponents, including sockets. Sockets are (sub)components
 * that can be connected through connections to other sockets.
 * The class use SVG to render all elements.
 */

var _svgEl = new WeakMap();

var _connectionsEl = new WeakMap();

var _vbX = new WeakMap();

var _vbY = new WeakMap();

var _vbWidth = new WeakMap();

var _vbHeight = new WeakMap();

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
  if (newHeight < 10) return;
  if (newWidth < 10) return;
  if (newHeight > 50000) return;
  if (newWidth > 50000) return;

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
 * In general component can have sumcomponents. Special examples of subcomponents are
 * a sockets. The socket is the a component that can be connected through connections,
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

      _classPrivateFieldGet(this, _tempConnectionEl).setAttribute("d", "\n      M ".concat(this.absPos.x, " ").concat(this.absPos.y, "\n    "));

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
/* harmony import */ var _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @marco.jacovone/cnodes/cnodes */ "./node_modules/@marco.jacovone/cnodes/cnodes.js");
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
      return _theme__WEBPACK_IMPORTED_MODULE_4__.Theme.current.NODE_BORDER_RADIUS * 0.5 + 40 + // Title
      30 * Math.max(this.node.functional ? 0 : 1, this.node.nexts.length) + // Nexts/prevs, at least 1 prev
      30 * Math.max(0, this.node.outputs.length) + // Outputs
      30 * Math.max(0, this.node.inputs.length) + // Inputs
      15 // Padding
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
/* harmony import */ var _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @marco.jacovone/cnodes/cnodes */ "./node_modules/@marco.jacovone/cnodes/cnodes.js");
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
    defsEl.innerHTML = "\n      <filter xmlns=\"http://www.w3.org/2000/svg\" id=\"dropshadow\" height=\"130%\">\n        <feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"3\"/> \n        <feOffset dx=\"0\" dy=\"0\" result=\"offsetblur\"/> \n        <feComponentTransfer>\n          <feFuncA type=\"linear\" slope=\"0.3\"/>\n        </feComponentTransfer>\n        <feMerge> \n          <feMergeNode/>\n          <feMergeNode in=\"SourceGraphic\"/> \n        </feMerge>\n      </filter>\n      <marker id=\"io-arrow\" viewBox=\"0 0 10 10\" refX=\"7\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" fill=\"".concat(_theme__WEBPACK_IMPORTED_MODULE_8__.Theme.current.CONNECTION_IO_COLOR, "\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 0 L 10 5 L 0 10 Z\">\n        </path>\n      </marker>\n      <marker id=\"prevnext-arrow\" viewBox=\"0 0 10 10\" refX=\"7\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_8__.Theme.current.CONNECTION_PREV_NEXT_COLOR, "\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 0 L 10 5 L 0 10 Z\">\n        </path>\n      </marker>      \n    ");

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
/* harmony import */ var _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @marco.jacovone/cnodes/cnodes */ "./node_modules/@marco.jacovone/cnodes/cnodes.js");
/* harmony import */ var _canvas_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../canvas/position */ "./src/canvas/position.js");
/* harmony import */ var _canvas_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../canvas/socket */ "./src/canvas/socket.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ "./src/components/theme.js");
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
      var sourcePoint = new _canvas_position__WEBPACK_IMPORTED_MODULE_1__.Position(this.absPos.x, this.absPos.y);
      var targetPoint = new _canvas_position__WEBPACK_IMPORTED_MODULE_1__.Position(this.currentPeerSocketComponent ? this.currentPeerSocketComponent.absPos.x : x, this.currentPeerSocketComponent ? this.currentPeerSocketComponent.absPos.y : y);
      var cpXDistance = Math.max(0.8 * Math.abs(sourcePoint.x - targetPoint.x), 100);
      var cp1 = sourcePoint.add(new _canvas_position__WEBPACK_IMPORTED_MODULE_1__.Position(cpXDistance * this.getSourcePointDirection(), -0.1 * (sourcePoint.y - targetPoint.y)));
      var cp2 = targetPoint.add(new _canvas_position__WEBPACK_IMPORTED_MODULE_1__.Position(-cpXDistance * this.getSourcePointDirection(), 0.1 * (sourcePoint.y - targetPoint.y)));
      this.tempConnectionEl.setAttribute("d", "\n      M ".concat(this.absPos.x, " ").concat(this.absPos.y, "\n      C ").concat(cp1.x, " ").concat(cp1.y, " ").concat(cp2.x, " ").concat(cp2.y, " ").concat(targetPoint.x, " ").concat(targetPoint.y, "\n    "));
      this.tempConnectionEl.setAttribute("stroke-width", _theme__WEBPACK_IMPORTED_MODULE_3__.Theme.current.CONNECTION_TEMP_WIDTH);
      this.tempConnectionEl.setAttribute("stroke", invalid ? _theme__WEBPACK_IMPORTED_MODULE_3__.Theme.current.CONNECTION_TEMP_INVALID_COLOR : this.currentPeerSocketComponent ? _theme__WEBPACK_IMPORTED_MODULE_3__.Theme.current.CONNECTION_TEMP_VALID_COLOR : _theme__WEBPACK_IMPORTED_MODULE_3__.Theme.current.CONNECTION_TEMP_COLOR);
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
  }, {
    key: "socket",
    get: function get() {
      return _classPrivateFieldGet(this, _socket);
    }
  }]);

  return CnodesSocketComponent;
}(_canvas_socket__WEBPACK_IMPORTED_MODULE_2__.SocketComponent);

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
/* harmony import */ var _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @marco.jacovone/cnodes/cnodes */ "./node_modules/@marco.jacovone/cnodes/cnodes.js");
/* harmony import */ var _connections_io_connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connections/io_connection */ "./src/connections/io_connection.js");
/* harmony import */ var _cnodessocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cnodessocket */ "./src/components/cnodessocket.js");
/* harmony import */ var _canvas_socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../canvas/socket */ "./src/canvas/socket.js");
/* harmony import */ var _canvas_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../canvas/menu */ "./src/canvas/menu.js");
/* harmony import */ var _cnode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cnode */ "./src/components/cnode.js");
/* harmony import */ var _canvas_position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../canvas/position */ "./src/canvas/position.js");
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

var _inputElement = new WeakMap();

var _labelElement = new WeakMap();

var _socketSymbol = new WeakMap();

var InputSocketComponent = /*#__PURE__*/function (_CnodesSocketComponen) {
  _inherits(InputSocketComponent, _CnodesSocketComponen);

  var _super = _createSuper(InputSocketComponent);

  /** A reference to the imput element */

  /** A reference to the label element */

  /** The symbol element */
  function InputSocketComponent(socket) {
    var _thisSuper, _this;

    _classCallCheck(this, InputSocketComponent);

    _this = _super.call(this, socket);

    _inputElement.set(_assertThisInitialized(_this), {
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

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("fill", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_FILL_COLOR);

      _classPrivateFieldSet(this, _labelElement, document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"));

      _classPrivateFieldGet(this, _labelElement).style = "\n      font: ".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_FONT, "; \n      color: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_COLOR, "; \n      text-align: left;\n      width: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH / 2 - 15, "px;\n      height: 30px;\n      line-height: 30px;\n      user-select: none;\n    ");
      _classPrivateFieldGet(this, _labelElement).innerHTML = "".concat(this.socket.name);

      _classPrivateFieldGet(this, _labelElement).setAttribute("x", 0);

      _classPrivateFieldGet(this, _labelElement).setAttribute("y", 0);

      _classPrivateFieldGet(this, _labelElement).setAttribute("transform", "translate(".concat(15, ", ", -15, ")"));

      _classPrivateFieldGet(this, _labelElement).setAttribute("width", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH / 2 - 15);

      _classPrivateFieldGet(this, _labelElement).setAttribute("height", 30);

      var textInputElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
      textInputElem.style = "\n      font: ".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_FONT, "; \n      color: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_COLOR, "; \n      text-align: left;\n      line-height: 30px;\n      user-select: none;\n      pointer-events: auto;\n    ");
      textInputElem.setAttribute("x", 0);
      textInputElem.setAttribute("y", 0);
      textInputElem.setAttribute("transform", "translate(".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH / 2, ", ").concat(-15, ")"));
      textInputElem.setAttribute("width", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH / 2 - 15);
      textInputElem.setAttribute("height", 30);

      _classPrivateFieldSet(this, _inputElement, document.createElement("input"));

      _classPrivateFieldGet(this, _inputElement).style = "\n      font: ".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_FONT, "; \n      color: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_COLOR, "; \n      width: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH / 2 - 25, "px; // 5px less than foreignObject\n      height: ", 20, "px;\n      border: 0;\n      padding: 2px;\n      margin: 2px;\n    ");

      _classPrivateFieldGet(this, _inputElement).addEventListener("keyup", function (e) {
        _this2.socket.value = e.target.value;
      });

      _classPrivateFieldGet(this, _inputElement).setAttribute("value", this.socket.value);

      _classPrivateFieldGet(this, _inputElement).setAttribute("type", "text");

      textInputElem.appendChild(_classPrivateFieldGet(this, _inputElement));
      var inputElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
      inputElem.setAttribute("x", 0);
      inputElem.setAttribute("y", 0);
      inputElem.appendChild(_classPrivateFieldGet(this, _socketSymbol));
      inputElem.appendChild(_classPrivateFieldGet(this, _labelElement));
      inputElem.appendChild(textInputElem);
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
      return socketComp.socket instanceof _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_1__.OutputSocket;
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


      _classPrivateFieldGet(this, _inputElement).style["display"] = this.isConnected ? "none" : "table-cell";
      _classPrivateFieldGet(this, _labelElement).innerHTML = "".concat(this.socket.name);
      this.socket.value = _classPrivateFieldGet(this, _inputElement).value;
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
                    items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_5__.MenuItem("\n                <tspan alignment-baseline=\"middle\" fill=\"".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_FILL_COLOR, "\">\n                  ").concat(out.name, "\n                </tspan>\n                <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_COLOR, "\">\n                  ").concat(nodeDef.name, "\n                </tspan>\n                <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_CATEGORY_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_CATEGORY_COLOR, "\">\n                  ").concat(nodeDef.category, "\n                </tspan>\n                "), function (x, y) {
                      // create the node and return the specific socket component to
                      // the context menu client
                      var node = new _cnode__WEBPACK_IMPORTED_MODULE_6__.CnodeComponent(n, _this3.canvas);
                      node.pos = new _canvas_position__WEBPACK_IMPORTED_MODULE_7__.Position(x, y); // Return the connected component instead

                      return out.__comp;
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
/* harmony import */ var _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @marco.jacovone/cnodes/cnodes */ "./node_modules/@marco.jacovone/cnodes/cnodes.js");
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
                items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_6__.MenuItem("\n              <tspan alignment-baseline=\"middle\" fill=\"".concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_FILL_COLOR, "\">\n                ").concat(n.prev.name, "\n              </tspan>\n              <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_COLOR, "\">\n              ").concat(nodeDef.name, "\n              </tspan>\n              <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_CATEGORY_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_CATEGORY_COLOR, "\">\n              ").concat(nodeDef.category, "\n              </tspan>\n              "), function (x, y) {
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
/* harmony import */ var _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @marco.jacovone/cnodes/cnodes */ "./node_modules/@marco.jacovone/cnodes/cnodes.js");
/* harmony import */ var _connections_io_connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connections/io_connection */ "./src/connections/io_connection.js");
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
 * This class implements a socket representing a Output in the
 * cnodes world
 */

var _socketSymbol = new WeakMap();

var OutputSocketComponent = /*#__PURE__*/function (_CnodesSocketComponen) {
  _inherits(OutputSocketComponent, _CnodesSocketComponen);

  var _super = _createSuper(OutputSocketComponent);

  /** The socket symbol element */
  function OutputSocketComponent(socket) {
    var _thisSuper, _this;

    _classCallCheck(this, OutputSocketComponent);

    _this = _super.call(this, socket);

    _socketSymbol.set(_assertThisInitialized(_this), {
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
      _classPrivateFieldSet(this, _socketSymbol, document.createElementNS("http://www.w3.org/2000/svg", "circle"));

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("cx", 0);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("cy", 0);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("r", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_POINT_RADIUS);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("stroke-width", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_STROKE_WIDTH);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("stroke", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_STROKE_COLOR);

      _classPrivateFieldGet(this, _socketSymbol).setAttribute("fill", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_FILL_COLOR);

      var labelElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
      labelElem.style = "\n      font: ".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_FONT, "; \n      color: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_NAME_COLOR, "; \n      text-align: right;\n      width: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH - 30, "px;\n      height: 30px;\n      line-height: 30px;\n      user-select: none;\n      ");
      labelElem.innerHTML = "".concat(this.socket.name);
      labelElem.setAttribute("x", 0);
      labelElem.setAttribute("y", 0);
      labelElem.setAttribute("transform", "translate(".concat(-_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH + 15, ", ").concat(-15, ")"));
      labelElem.setAttribute("width", _theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_WIDTH - 30);
      labelElem.setAttribute("height", 30);
      var outputElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
      outputElem.setAttribute("x", 0);
      outputElem.setAttribute("y", 0);
      outputElem.appendChild(_classPrivateFieldGet(this, _socketSymbol));
      outputElem.appendChild(labelElem);
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
      return socketComp.socket instanceof _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_1__.InputSocket;
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
      var _this2 = this;

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
                    items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_4__.MenuItem("\n                <tspan alignment-baseline=\"middle\" fill=\"".concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.NODE_IO_FILL_COLOR, "\">\n                  ").concat(inp.name, "\n                </tspan>\n                <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_COLOR, "\">\n                  ").concat(nodeDef.name, "\n                </tspan>\n                <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_CATEGORY_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.current.MENU_ITEM_CATEGORY_COLOR, "\">\n                  ").concat(nodeDef.category, "\n                </tspan>\n                "), function (x, y) {
                      // create the node and return the specific socket component to
                      // the context menu client
                      var node = new _cnode__WEBPACK_IMPORTED_MODULE_5__.CnodeComponent(n, _this2.canvas);
                      node.pos = new _canvas_position__WEBPACK_IMPORTED_MODULE_6__.Position(x, y); // Return the connected component instead

                      return inp.__comp;
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

              _this3.socket.disconnect(c.target);
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
/* harmony import */ var _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @marco.jacovone/cnodes/cnodes */ "./node_modules/@marco.jacovone/cnodes/cnodes.js");
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
                    items.push(new _canvas_menu__WEBPACK_IMPORTED_MODULE_4__.MenuItem("\n                <tspan alignment-baseline=\"middle\" fill=\"".concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.NODE_PREV_NEXT_FILL_COLOR, "\">\n                  ").concat(next.name, "\n                </tspan>\n                <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_COLOR, "\">\n                  ").concat(nodeDef.name, "\n                </tspan>\n                <tspan alignment-baseline=\"middle\" style=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_CATEGORY_FONT, "\" fill=\"").concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Theme.current.MENU_ITEM_CATEGORY_COLOR, "\">\n                  ").concat(nodeDef.category, "\n                </tspan>\n                "), function (x, y) {
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
      return 2;
    }
  }, {
    key: "NODE_IO_STROKE_COLOR",
    get: function get() {
      return "#008EBF";
    }
  }, {
    key: "NODE_IO_FILL_COLOR",
    get: function get() {
      return "#008EBF";
    }
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
/* harmony import */ var _canvas_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas/connection */ "./src/canvas/connection.js");
/* harmony import */ var _canvas_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../canvas/position */ "./src/canvas/position.js");
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
 * This class implements a connection for Input->Output connection
 * in the cnodes world. It embed both source and target sockets that
 * must be of type InputSocketComponent and OutputSocketComponent, and manages
 * the connection status of the embedded cnodes's socket
 */

var IOConnection = /*#__PURE__*/function (_Connection) {
  _inherits(IOConnection, _Connection);

  var _super = _createSuper(IOConnection);

  function IOConnection(source, target, canvas) {
    var _thisSuper, _this;

    _classCallCheck(this, IOConnection);

    _this = _super.call(this, source, target);

    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(IOConnection.prototype)), "setup", _thisSuper).call(_thisSuper);

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


  _createClass(IOConnection, [{
    key: "createElement",
    value: function createElement() {
      var el = document.createElementNS("http://www.w3.org/2000/svg", "path");
      return el;
    }
    /**
     * Update the aspect of the connection
     */

  }, {
    key: "updateSVGElement",
    value: function updateSVGElement() {
      var sourcePoint = new _canvas_position__WEBPACK_IMPORTED_MODULE_1__.Position(this.source.absPos.x, this.source.absPos.y);
      var targetPoint = new _canvas_position__WEBPACK_IMPORTED_MODULE_1__.Position(this.target.absPos.x - _components_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.NODE_IO_POINT_RADIUS, this.target.absPos.y);
      var cpXDistance = Math.max(0.8 * Math.abs(sourcePoint.x - targetPoint.x), 100);
      var cp1 = sourcePoint.add(new _canvas_position__WEBPACK_IMPORTED_MODULE_1__.Position(cpXDistance, -0.1 * (sourcePoint.y - targetPoint.y)));
      var cp2 = targetPoint.add(new _canvas_position__WEBPACK_IMPORTED_MODULE_1__.Position(-cpXDistance, 0.1 * (sourcePoint.y - targetPoint.y)));
      this.connectionEl.setAttribute("d", "\n      M ".concat(sourcePoint.x, " ").concat(sourcePoint.y, "\n      C ").concat(cp1.x, " ").concat(cp1.y, " ").concat(cp2.x, " ").concat(cp2.y, " ").concat(targetPoint.x, " ").concat(targetPoint.y, "\n    "));
      this.connectionEl.setAttribute("stroke-width", _components_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.CONNECTION_IO_WIDTH);
      this.connectionEl.setAttribute("stroke", _components_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.CONNECTION_IO_COLOR);
      this.connectionEl.setAttribute("marker-end", "url(#io-arrow)");
      this.connectionEl.setAttribute("fill", "transparent");
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

      _get(_getPrototypeOf(IOConnection.prototype), "destroy", this).call(this);
    }
  }]);

  return IOConnection;
}(_canvas_connection__WEBPACK_IMPORTED_MODULE_0__.Connection);

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
/* harmony import */ var _canvas_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas/connection */ "./src/canvas/connection.js");
/* harmony import */ var _canvas_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../canvas/position */ "./src/canvas/position.js");
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
 * This class implements a connection for Input->Output connection
 * in the cnodes world. It embed both source and target sockets that
 * must be of type InputSocketComponent and OutputSocketComponent, and manages
 * the connection status of the embedded cnodes's socket
 */

var PrevNextConnection = /*#__PURE__*/function (_Connection) {
  _inherits(PrevNextConnection, _Connection);

  var _super = _createSuper(PrevNextConnection);

  function PrevNextConnection(source, target, canvas) {
    var _thisSuper, _this;

    var connect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    _classCallCheck(this, PrevNextConnection);

    _this = _super.call(this, source, target);

    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(PrevNextConnection.prototype)), "setup", _thisSuper).call(_thisSuper);

    canvas.addConnection(_assertThisInitialized(_this));

    _this.updateSVGElement();

    if (connect) {
      // Connect cnodes sockets
      _this.source.socket.connect(_this.target.socket);
    }

    return _this;
  }
  /**
   * Lets create the element
   */


  _createClass(PrevNextConnection, [{
    key: "createElement",
    value: function createElement() {
      var el = document.createElementNS("http://www.w3.org/2000/svg", "path");
      return el;
    }
    /**
     * Update the aspect of the connection
     */

  }, {
    key: "updateSVGElement",
    value: function updateSVGElement() {
      var sourcePoint = new _canvas_position__WEBPACK_IMPORTED_MODULE_1__.Position(this.source.absPos.x, this.source.absPos.y);
      var targetPoint = new _canvas_position__WEBPACK_IMPORTED_MODULE_1__.Position(this.target.absPos.x - _components_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.NODE_PREV_NEXT_POINT_RADIUS, this.target.absPos.y);
      var cpXDistance = Math.max(0.8 * Math.abs(sourcePoint.x - targetPoint.x), 100);
      var cp1 = sourcePoint.add(new _canvas_position__WEBPACK_IMPORTED_MODULE_1__.Position(cpXDistance, -0.1 * (sourcePoint.y - targetPoint.y)));
      var cp2 = targetPoint.add(new _canvas_position__WEBPACK_IMPORTED_MODULE_1__.Position(-cpXDistance, 0.1 * (sourcePoint.y - targetPoint.y)));
      this.connectionEl.setAttribute("d", "\n      M ".concat(sourcePoint.x, " ").concat(sourcePoint.y, "\n      C ").concat(cp1.x, " ").concat(cp1.y, " ").concat(cp2.x, " ").concat(cp2.y, " ").concat(targetPoint.x, " ").concat(targetPoint.y, "\n    "));
      this.connectionEl.setAttribute("stroke-width", _components_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.CONNECTION_PREV_NEXT_WIDTH);
      this.connectionEl.setAttribute("stroke", _components_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.current.CONNECTION_PREV_NEXT_COLOR);
      this.connectionEl.setAttribute("marker-end", "url(#prevnext-arrow)");
      this.connectionEl.setAttribute("fill", "transparent");
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

      _get(_getPrototypeOf(PrevNextConnection.prototype), "destroy", this).call(this);
    }
  }]);

  return PrevNextConnection;
}(_canvas_connection__WEBPACK_IMPORTED_MODULE_0__.Connection);

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
/* harmony export */   "Call": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Call,
/* harmony export */   "Comparision": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Comparision,
/* harmony export */   "Console": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Console,
/* harmony export */   "Env": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Env,
/* harmony export */   "FAdd": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FAdd,
/* harmony export */   "FCompare": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FCompare,
/* harmony export */   "FDiv": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FDiv,
/* harmony export */   "FGetvar": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FGetvar,
/* harmony export */   "FMul": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.FMul,
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
/* harmony export */   "Type": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Type,
/* harmony export */   "Types": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.Types,
/* harmony export */   "ValueSocket": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.ValueSocket,
/* harmony export */   "While": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.While,
/* harmony export */   "callNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.callNode,
/* harmony export */   "consoleNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.consoleNode,
/* harmony export */   "faddNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.faddNode,
/* harmony export */   "fcompareNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fcompareNode,
/* harmony export */   "fdivNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fdivNode,
/* harmony export */   "fgetvarNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fgetvarNode,
/* harmony export */   "fmulNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fmulNode,
/* harmony export */   "forNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.forNode,
/* harmony export */   "fsqrtNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.fsqrtNode,
/* harmony export */   "getvarNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.getvarNode,
/* harmony export */   "ifNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.ifNode,
/* harmony export */   "program": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.program,
/* harmony export */   "setvarNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.setvarNode,
/* harmony export */   "type": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.type,
/* harmony export */   "whileNode": () => /* reexport safe */ _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__.whileNode,
/* harmony export */   "canvas": () => /* binding */ canvas
/* harmony export */ });
/* harmony import */ var _canvas_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas/canvas */ "./src/canvas/canvas.js");
/* harmony import */ var _canvas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas/component */ "./src/canvas/component.js");
/* harmony import */ var _canvas_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas/position */ "./src/canvas/position.js");
/* harmony import */ var _components_cnode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cnode */ "./src/components/cnode.js");
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/theme */ "./src/components/theme.js");
/* harmony import */ var _components_cnodescanvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cnodescanvas */ "./src/components/cnodescanvas.js");
/* harmony import */ var _marco_jacovone_cnodes_cnodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @marco.jacovone/cnodes/cnodes */ "./node_modules/@marco.jacovone/cnodes/cnodes.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbnVpLy4vbm9kZV9tb2R1bGVzL0BtYXJjby5qYWNvdm9uZS9jbm9kZXMvY25vZGVzLmpzIiwid2VicGFjazovL2NudWkvLi9ub2RlX21vZHVsZXMvQG1hcmNvLmphY292b25lL2Nub2Rlcy9saWIvY29yZS9lbnRlci5qcyIsIndlYnBhY2s6Ly9jbnVpLy4vbm9kZV9tb2R1bGVzL0BtYXJjby5qYWNvdm9uZS9jbm9kZXMvbGliL2NvcmUvZW52LmpzIiwid2VicGFjazovL2NudWkvLi9ub2RlX21vZHVsZXMvQG1hcmNvLmphY292b25lL2Nub2Rlcy9saWIvY29yZS9leGl0LmpzIiwid2VicGFjazovL2NudWkvLi9ub2RlX21vZHVsZXMvQG1hcmNvLmphY292b25lL2Nub2Rlcy9saWIvY29yZS9ub2RlLmpzIiwid2VicGFjazovL2NudWkvLi9ub2RlX21vZHVsZXMvQG1hcmNvLmphY292b25lL2Nub2Rlcy9saWIvY29yZS9wcm9ncmFtLmpzIiwid2VicGFjazovL2NudWkvLi9ub2RlX21vZHVsZXMvQG1hcmNvLmphY292b25lL2Nub2Rlcy9saWIvY29yZS9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vY251aS8uL25vZGVfbW9kdWxlcy9AbWFyY28uamFjb3ZvbmUvY25vZGVzL2xpYi9jb3JlL3R5cGUuanMiLCJ3ZWJwYWNrOi8vY251aS8uL25vZGVfbW9kdWxlcy9AbWFyY28uamFjb3ZvbmUvY25vZGVzL2xpYi9ub2Rlcy9ib29sL2Zjb21wYXJlLmpzIiwid2VicGFjazovL2NudWkvLi9ub2RlX21vZHVsZXMvQG1hcmNvLmphY292b25lL2Nub2Rlcy9saWIvbm9kZXMvYm9vbC9mZXF1YWwuanMiLCJ3ZWJwYWNrOi8vY251aS8uL25vZGVfbW9kdWxlcy9AbWFyY28uamFjb3ZvbmUvY25vZGVzL2xpYi9ub2Rlcy9ib29sL2ZndC5qcyIsIndlYnBhY2s6Ly9jbnVpLy4vbm9kZV9tb2R1bGVzL0BtYXJjby5qYWNvdm9uZS9jbm9kZXMvbGliL25vZGVzL2Jvb2wvZmd0ZS5qcyIsIndlYnBhY2s6Ly9jbnVpLy4vbm9kZV9tb2R1bGVzL0BtYXJjby5qYWNvdm9uZS9jbm9kZXMvbGliL25vZGVzL2Jvb2wvZmx0LmpzIiwid2VicGFjazovL2NudWkvLi9ub2RlX21vZHVsZXMvQG1hcmNvLmphY292b25lL2Nub2Rlcy9saWIvbm9kZXMvYm9vbC9mbHRlLmpzIiwid2VicGFjazovL2NudWkvLi9ub2RlX21vZHVsZXMvQG1hcmNvLmphY292b25lL2Nub2Rlcy9saWIvbm9kZXMvYm9vbC9mbm90ZXF1YWwuanMiLCJ3ZWJwYWNrOi8vY251aS8uL25vZGVfbW9kdWxlcy9AbWFyY28uamFjb3ZvbmUvY25vZGVzL2xpYi9ub2Rlcy9jYWxsLmpzIiwid2VicGFjazovL2NudWkvLi9ub2RlX21vZHVsZXMvQG1hcmNvLmphY292b25lL2Nub2Rlcy9saWIvbm9kZXMvY29uc29sZS5qcyIsIndlYnBhY2s6Ly9jbnVpLy4vbm9kZV9tb2R1bGVzL0BtYXJjby5qYWNvdm9uZS9jbm9kZXMvbGliL25vZGVzL2ZnZXR2YXIuanMiLCJ3ZWJwYWNrOi8vY251aS8uL25vZGVfbW9kdWxlcy9AbWFyY28uamFjb3ZvbmUvY25vZGVzL2xpYi9ub2Rlcy9mb3IuanMiLCJ3ZWJwYWNrOi8vY251aS8uL25vZGVfbW9kdWxlcy9AbWFyY28uamFjb3ZvbmUvY25vZGVzL2xpYi9ub2Rlcy9nZXR2YXIuanMiLCJ3ZWJwYWNrOi8vY251aS8uL25vZGVfbW9kdWxlcy9AbWFyY28uamFjb3ZvbmUvY25vZGVzL2xpYi9ub2Rlcy9pZi5qcyIsIndlYnBhY2s6Ly9jbnVpLy4vbm9kZV9tb2R1bGVzL0BtYXJjby5qYWNvdm9uZS9jbm9kZXMvbGliL25vZGVzL21hdGgvZmFkZC5qcyIsIndlYnBhY2s6Ly9jbnVpLy4vbm9kZV9tb2R1bGVzL0BtYXJjby5qYWNvdm9uZS9jbm9kZXMvbGliL25vZGVzL21hdGgvZmRpdi5qcyIsIndlYnBhY2s6Ly9jbnVpLy4vbm9kZV9tb2R1bGVzL0BtYXJjby5qYWNvdm9uZS9jbm9kZXMvbGliL25vZGVzL21hdGgvZm11bC5qcyIsIndlYnBhY2s6Ly9jbnVpLy4vbm9kZV9tb2R1bGVzL0BtYXJjby5qYWNvdm9uZS9jbm9kZXMvbGliL25vZGVzL21hdGgvZnNxcnQuanMiLCJ3ZWJwYWNrOi8vY251aS8uL25vZGVfbW9kdWxlcy9AbWFyY28uamFjb3ZvbmUvY25vZGVzL2xpYi9ub2Rlcy9zZXR2YXIuanMiLCJ3ZWJwYWNrOi8vY251aS8uL25vZGVfbW9kdWxlcy9AbWFyY28uamFjb3ZvbmUvY25vZGVzL2xpYi9ub2Rlcy93aGlsZS5qcyIsIndlYnBhY2s6Ly9jbnVpLy4vc3JjL2NhbnZhcy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vY251aS8uL3NyYy9jYW52YXMvY29tcG9uZW50LmpzIiwid2VicGFjazovL2NudWkvLi9zcmMvY2FudmFzL2Nvbm5lY3Rpb24uanMiLCJ3ZWJwYWNrOi8vY251aS8uL3NyYy9jYW52YXMvbWVudS5qcyIsIndlYnBhY2s6Ly9jbnVpLy4vc3JjL2NhbnZhcy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9jbnVpLy4vc3JjL2NhbnZhcy9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vY251aS8uL3NyYy9jb21wb25lbnRzL2Nub2RlLmpzIiwid2VicGFjazovL2NudWkvLi9zcmMvY29tcG9uZW50cy9jbm9kZXNjYW52YXMuanMiLCJ3ZWJwYWNrOi8vY251aS8uL3NyYy9jb21wb25lbnRzL2Nub2Rlc21lbnUuanMiLCJ3ZWJwYWNrOi8vY251aS8uL3NyYy9jb21wb25lbnRzL2Nub2Rlc3NvY2tldC5qcyIsIndlYnBhY2s6Ly9jbnVpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vY251aS8uL3NyYy9jb21wb25lbnRzL25leHQuanMiLCJ3ZWJwYWNrOi8vY251aS8uL3NyYy9jb21wb25lbnRzL291dHB1dC5qcyIsIndlYnBhY2s6Ly9jbnVpLy4vc3JjL2NvbXBvbmVudHMvcHJldi5qcyIsIndlYnBhY2s6Ly9jbnVpLy4vc3JjL2NvbXBvbmVudHMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vY251aS8uL3NyYy9jb25uZWN0aW9ucy9pb19jb25uZWN0aW9uLmpzIiwid2VicGFjazovL2NudWkvLi9zcmMvY29ubmVjdGlvbnMvcHJldm5leHRfY29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9jbnVpLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2NudWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY251aS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY251aS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NudWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbnVpL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJFbnRlciIsInJlbW92YWJsZSIsImNyZWF0YWJsZSIsImlucHV0cyIsIklucHV0U29ja2V0IiwidHlwZSIsIlR5cGVzIiwib3V0cHV0cyIsIk91dHB1dFNvY2tldCIsIm5leHRzIiwiTmV4dFNvY2tldCIsInByZXYiLCJldmFsdWF0ZUlucHV0cyIsIm91dHB1dCIsInZhbHVlIiwiaW5wdXQiLCJnZXRGbG93UmVzdWx0IiwibmV4dCIsIk5vZGUiLCJlbnRlck5vZGUiLCJFbnYiLCJNYXAiLCJyZWdpc3Rlck5vZGUiLCJwcm9ncmFtIiwiY2FsbE5vZGUiLCJjb25zb2xlTm9kZSIsImZnZXR2YXJOb2RlIiwiZm9yTm9kZSIsImdldHZhck5vZGUiLCJpZk5vZGUiLCJzZXR2YXJOb2RlIiwid2hpbGVOb2RlIiwiZXhpdE5vZGUiLCJmYWRkTm9kZSIsImZkaXZOb2RlIiwiZm11bE5vZGUiLCJmc3FydE5vZGUiLCJmZXF1YWxOb2RlIiwiZmd0Tm9kZSIsImZndGVOb2RlIiwiZmx0Tm9kZSIsImZsdGVOb2RlIiwiZm5vdGVxdWFsTm9kZSIsIm5hbWUiLCJjYXRlZ29yeSIsImZhY3RvcnkiLCJzZXQiLCJjYXRlZ29yeU1hcCIsIkFycmF5IiwiZnJvbSIsInZhbHVlcyIsImZvckVhY2giLCJlbGVtZW50Iiwia2V5cyIsInJlZ2lzdHJhdGlvbnMiLCJlbnRyaWVzIiwiZW50cnkiLCJwdXNoIiwicmVnIiwiZ2V0IiwiZXhwIiwiaWQiLCJ2ZXJzaW9uIiwiUHJvZ3JhbSIsImxhc3ROb2RlSW5kZXgiLCJsYXN0U29ja2V0SW5kZXgiLCJTb2NrZXQiLCJlbnRlciIsImV4aXQiLCJub2RlcyIsImNvbm5lY3Rpb25zIiwibm9kZSIsIm5vZGVFeHAiLCJmdW5jdGlvbmFsIiwibWV0YSIsInVuZGVmaW5lZCIsIm1hcCIsImlucCIsImlzQXJyYXkiLCJwZWVyIiwib3V0cCIsInBlZXJzIiwicHVzaENvbm5lY3Rpb24iLCJjb25uZWN0aW9uIiwiZmluZEluZGV4IiwiYyIsInNvdXJjZU5vZGUiLCJzb3VyY2VTb2NrZXQiLCJ0YXJnZXROb2RlIiwidGFyZ2V0U29ja2V0IiwibGVuZ3RoIiwiY29ubmVjdGlvbkV4cCIsImRhdGEiLCJFcnJvciIsInAiLCJyZW1vdmVOb2RlIiwibm9kZURhdGEiLCJnZXRJbnN0YW5jZSIsImlucERhdGEiLCJUeXBlIiwib3V0cERhdGEiLCJQcmV2U29ja2V0IiwibmV4dERhdGEiLCJhZGROb2RlIiwiZmluZCIsIm4iLCJjb25uZWN0aW9uRGF0YSIsIm8iLCJpIiwiY29ubmVjdCIsIkV4aXQiLCJSZXN1bHQiLCJsYXN0Tm9kZUlkSW5kZXgiLCJldmFsdWF0ZSIsInNvY2tldCIsImRpc2Nvbm5lY3QiLCJjYW5BZGRJbnB1dCIsImlkeCIsImNhblJlbW92ZUlucHV0IiwiZmlsdGVyIiwidmFsIiwiZGlzY29ubmVjdEFsbFNvY2tldHMiLCJwcm9jZXNzRnJvbSIsImN1cnJlbnROb2RlIiwicmVzdWx0IiwicHJvY2VzcyIsImxhc3RTb2NrZXRJZEluZGV4IiwiVmFsdWVTb2NrZXQiLCJzIiwiaW5kZXgiLCJzcGxpY2UiLCJGbG93U29ja2V0IiwiTlVNQkVSIiwiU1RSSU5HIiwiQk9PTEVBTiIsIk9CSkVDVCIsIkFOWSIsIkNvbXBhcmlzaW9uIiwiRVFVQUwiLCJHVCIsIkdURSIsIkxUIiwiTFRFIiwiTk9UX0VRVUFMIiwiRkNvbXBhcmUiLCJjb21wYXJpc2lvbiIsInZhbDEiLCJ2YWwyIiwicmV0IiwiZmNvbXBhcmVOb2RlIiwiRkVxdWFsIiwiRkdUIiwiRkdURSIsIkZMVCIsIkZMVEUiLCJGTm90RXF1YWwiLCJDYWxsIiwicHJldkN1cnJlbnROb2RlIiwiQ29uc29sZSIsImNvbnNvbGUiLCJsb2ciLCJGR2V0dmFyIiwidmFyTmFtZSIsInZhcnMiLCJGb3IiLCJHZXR2YXIiLCJJZiIsImZsb3ciLCJGQWRkIiwic3VtIiwicGFyc2VGbG9hdCIsIkZEaXYiLCJGTXVsIiwibXVsIiwiRlNxcnQiLCJNYXRoIiwic3FydCIsIlNldHZhciIsInZhclZhbCIsIldoaWxlIiwiQ2FudmFzIiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJhcHBlbmRDaGlsZCIsIlRoZW1lIiwic2VsZiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2FuY2VsQ29udGV4dE1lbnUiLCJjbGllbnRYIiwiY2xpZW50WSIsImNyZWF0ZVNWR1BvaW50IiwieCIsInkiLCJwU1ZHIiwibWF0cml4VHJhbnNmb3JtIiwiZ2V0U2NyZWVuQ1RNIiwiaW52ZXJzZSIsIm9ubHlTb2NrZXRzIiwicG9pbnRlZEVsIiwiZWxlbWVudEZyb21Qb2ludCIsImNvbXBvbmVudFJlZiIsIlNvY2tldENvbXBvbmVudCIsInBhcmVudEVsZW1lbnQiLCJjYW52YXMiLCJjb25uZWN0aW9uRWwiLCJzb3VyY2UiLCJ1cGRhdGVTVkdFbGVtZW50IiwidGFyZ2V0IiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwic29ja2V0MSIsInNvY2tldDIiLCJjb21wb25lbnQiLCJjb21wb25lbnRFbCIsImNvbXBvbmVudHMiLCJnZXRDb25uZWN0aW9uc0ZvciIsInJlbW92ZUNvbm5lY3Rpb24iLCJyZW1vdmVDb21wb25lbnQiLCJyZW1vdmVBbGxDb25uZWN0aW9ucyIsInJlbW92ZUFsbENvbXBvbmVudHMiLCJpdGVtcyIsImNvbnRleHRNZW51Q29tcG9uZW50Iiwic2V0QXR0cmlidXRlIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJjbGllbnRUb1N2Z1BvaW50Iiwiem9vbUZhY3RvciIsInpvb20iLCJkZWx0YVkiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsIm5ld0xlZnQiLCJuZXdUb3AiLCJzdG9wUHJvcGFnYXRpb24iLCJidXR0b24iLCJzZXRQb2ludGVyQ2FwdHVyZSIsInBvaW50ZXJJZCIsInJlbGVhc2VQb2ludGVyQ2FwdHVyZSIsIm1vdmVQb2ludCIsInhEaWZmIiwieURpZmYiLCJwcmV2ZW50RGVmYXVsdCIsImNvbXBvbmVudEZyb21Qb3NpdGlvbiIsImdldENhbnZhc0NvbnRleHRNZW51SXRlbXMiLCJnZXRDb250ZXh0TWVudUl0ZW1zIiwic2hvd0NvbnRleHRNZW51IiwiQ29tcG9uZW50IiwiUG9zaXRpb24iLCJjcmVhdGVFbGVtZW50IiwibW92ZWFibGUiLCJwb3MiLCJhYnNQb3MiLCJ1cGRhdGVBbGxDb25uZWN0aW9ucyIsInBhcmVudCIsInN2Z0VsIiwicGFyZW50UG9zIiwiYWRkIiwiQ29ubmVjdGlvbiIsIk1lbnVJdGVtIiwidGV4dCIsImNhbGxiYWNrIiwiTWVudSIsInNldHVwIiwiYWRkQ29tcG9uZW50IiwiZHJhZ0VsZW1lbnQiLCJvblBvaW50ZXJEb3duIiwib25Qb2ludGVyVXAiLCJvblBvaW50ZXJNb3ZlIiwiaGFzU2luZ2xlQ29ubmVjdGlvbiIsImlzQ29ubmVjdGVkIiwiY29ubmVjdGlvblN0YXJ0ZWQiLCJwZWVyQ29tcG9uZW50IiwiZ2V0U2luZ2xlUGVlckNvbXBvbmVudCIsImNvbiIsImNvbm5lY3RpbmdTb2NrZXRDb21wb25lbnQiLCJjb25uZWN0aW9uRG9uZSIsImNvbm5lY3Rpb25FbmRlZE91dE9mU29ja2V0IiwicG9pbnRlZENvbXBvbmVudCIsImNhbkFjY2VwdFBlZXJTb2NrZXQiLCJjb25uZWN0aW9uTW92aW5nIiwiY29ubmVjdGlvbnNFbCIsImludmFsaWQiLCJzb3VyY2VQb2ludCIsInRhcmdldFBvaW50IiwiY3VycmVudFBlZXJTb2NrZXRDb21wb25lbnQiLCJzb2NrZXRDb21wIiwiQ25vZGVDb21wb25lbnQiLCJfX2NvbXAiLCJ1cGRhdGVTdWJjb21wb25lbnRzIiwibm9kZUVsIiwiaW5uZXJIVE1MIiwic2lnblJhZGl1cyIsInBvc1kiLCJuQ29tcCIsIlByZXZTb2NrZXRDb21wb25lbnQiLCJOZXh0U29ja2V0Q29tcG9uZW50IiwiT3V0cHV0U29ja2V0Q29tcG9uZW50IiwiSW5wdXRTb2NrZXRDb21wb25lbnQiLCJwdXNoUHJvZ3JhbSIsImFkZElucHV0IiwiY29tcCIsImNvbm4iLCJtYXgiLCJDbm9kZXNDYW52YXMiLCJkZWZzRWwiLCJjYW5Qb3BQcm9ncmFtIiwicG9wUHJvZ3JhbSIsImNhdCIsIm5vZGVEZWYiLCJtZW51Q2FsbGJhY2siLCJDbm9kZXNNZW51Iiwic2hvdyIsInJlbW92ZUFsbCIsImFscmVhZHlDb25uZWN0ZWQiLCJQcmV2TmV4dENvbm5lY3Rpb24iLCJJT0Nvbm5lY3Rpb24iLCJzZXRUaW1lb3V0IiwidW5zaGlmdCIsInNoaWZ0IiwiaW1wb3J0Q25vZGVzUHJvZ3JhbSIsImZvY3VzIiwiY3JlYXRlTWVudUl0ZW1zRWxlbWVudHMiLCJtZW51RWwiLCJ0ZXh0SW5wdXRFbGVtIiwiZ2V0QXR0cmlidXRlIiwia2V5Q29kZSIsImZpbHRlcmVkRWxlbWVudHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwidG9wIiwiaXRlbVJlc3VsdCIsIml0ZW1FbCIsIml0ZW1UZXh0RWwiLCJpdGVtIiwiaXRlbVgiLCJpdGVtWSIsIml0ZW1XaWR0aCIsIml0ZW1IZWlnaHQiLCJmaWx0ZXJFbGVtcyIsInRvVXBwZXJDYXNlIiwiaW5jbHVkZXMiLCJzZWFyY2hGaWx0ZXIiLCJDbm9kZXNTb2NrZXRDb21wb25lbnQiLCJnZXRSZWdpc3RlcmVkUG9zc2libGVQZWVycyIsInRlbXBDb25uZWN0aW9uRWwiLCJjcFhEaXN0YW5jZSIsImFicyIsImNwMSIsImdldFNvdXJjZVBvaW50RGlyZWN0aW9uIiwiY3AyIiwiaW5wdXRFbGVtIiwib3V0IiwicmVtb3ZlSW5wdXQiLCJsYWJlbEVsZW0iLCJwcmV2RWxlbSIsIm91dHB1dEVsZW0iLCJjb25ucyIsImRlZmF1bHRMaWdodCIsImFkZENvbm5lY3Rpb24iLCJlbElkIiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsS0FBYjtBQUFBOztBQUFBOztBQUNFLG1CQUFjO0FBQUE7O0FBQUE7O0FBQ1osOEJBQU0sT0FBTjtBQUNBLFVBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsVUFBS0MsTUFBTCxHQUFjLENBQUMsSUFBSUMsbURBQUosQ0FBZ0IsS0FBaEIsaUNBQTZCQyw4Q0FBSSxDQUFDQywrQ0FBRCxFQUFZLEtBQVosQ0FBakMsRUFBcUQsQ0FBckQsQ0FBRCxDQUFkO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLENBQUMsSUFBSUMsb0RBQUosQ0FBaUIsS0FBakIsaUNBQThCSCw4Q0FBSSxDQUFDQywrQ0FBRCxFQUFZLEtBQVosQ0FBbEMsRUFBc0Qs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Q0Q7O0FBQ0Q7QUFDRDtBQXZESDs7QUFBQTtBQUFBLEVBQXdDcUosMERBQXhDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU3RELE1BQVQsQ0FBZ0I0SixJQUFoQixFQUFzQjtBQUMzQixNQUFJeEwsRUFBRSxHQUFHQyxRQUFRLENBQUN3TCxjQUFULENBQXdCRCxJQUF4QixDQUFUOztBQUNBLE1BQUksQ0FBQ3hMLEVBQUwsRUFBUztBQUNQdEIsV0FBTyxDQUFDQyxHQUFSLCtCQUFtQzZNLElBQW5DO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0R6VixxRUFBQTtBQUNBLFNBQU8sSUFBSWlTLGtFQUFKLENBQWlCaEksRUFBakIsQ0FBUDtBQUNELEM7Ozs7OztVQzlDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogY25vZGVzXG4gKlxuICogQSByZXByZXNlbnRhdGlvbi1hZ25vc3RpYyBsaWJyYXJ5IHRvIGRlZmluZSBhbmQgZXhlY3V0ZSBub2RlcyBiYXNlZCBwcm9jZXNzZXNcbiAqIExpY2Vuc2U6IE1JVFxuICogQXV0aG9yOiBNYXJjbyBKYWNvdm9uZVxuICogWWVhcjogMjAyMFxuICovXG5cbi8vIEV4cG9ydCBjb3JlIG5vZGVzXG5leHBvcnQgKiBmcm9tIFwiLi9saWIvY29yZS9lbnYuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi9jb3JlL25vZGUuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi9jb3JlL3Byb2dyYW0uanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi9jb3JlL3NvY2tldC5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vbGliL2NvcmUvdHlwZS5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vbGliL25vZGVzL2NhbGwuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi9ub2Rlcy9jb25zb2xlLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saWIvbm9kZXMvZmdldHZhci5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vbGliL25vZGVzL2Zvci5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vbGliL25vZGVzL2dldHZhci5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vbGliL25vZGVzL2lmLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saWIvbm9kZXMvc2V0dmFyLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saWIvbm9kZXMvd2hpbGUuanNcIjtcblxuLy8gRXhwb3J0IGJvb2xlYW4gbm9kZXNcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi9ub2Rlcy9ib29sL2Zjb21wYXJlLmpzXCI7XG5cbi8vIEV4cG9ydCBtYXRoIG5vZGVzXG5leHBvcnQgKiBmcm9tIFwiLi9saWIvbm9kZXMvbWF0aC9mYWRkLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saWIvbm9kZXMvbWF0aC9mZGl2LmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saWIvbm9kZXMvbWF0aC9mbXVsLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saWIvbm9kZXMvbWF0aC9mc3FydC5qc1wiO1xuIiwiLyoqXG4gKiBjbm9kZXNcbiAqXG4gKiBBIHJlcHJlc2VudGF0aW9uLWFnbm9zdGljIGxpYnJhcnkgdG8gZGVmaW5lIGFuZCBleGVjdXRlIG5vZGVzIGJhc2VkIHByb2Nlc3Nlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGUuanNcIjtcbmltcG9ydCB7IE5leHRTb2NrZXQsIE91dHB1dFNvY2tldCwgSW5wdXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXQuanNcIjtcbmltcG9ydCB7IHR5cGUsIFR5cGVzIH0gZnJvbSBcIi4vdHlwZS5qc1wiO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaW1wbGVtZW50cyBhIGNub2RlIHRoYXQgaXMgdGhlIHN0YXJ0aW5nIHBvaW50IGZvciBhXG4gKiBwcm9ncmFtLiBUaGUgcHJvZ3JhbSBjYW4gYmUgdG9wLWxldmVsIG9yIG5vdFxuICovXG5leHBvcnQgY2xhc3MgRW50ZXIgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJFbnRlclwiKTtcbiAgICB0aGlzLnJlbW92YWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuY3JlYXRhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5pbnB1dHMgPSBbbmV3IElucHV0U29ja2V0KFwiVmFsXCIsIHRoaXMsIHR5cGUoVHlwZXMuQU5ZLCBmYWxzZSksIDApXTtcbiAgICB0aGlzLm91dHB1dHMgPSBbbmV3IE91dHB1dFNvY2tldChcIlZhbFwiLCB0aGlzLCB0eXBlKFR5cGVzLkFOWSwgZmFsc2UpLCAwKV07XG4gICAgdGhpcy5uZXh0cyA9IFtuZXcgTmV4dFNvY2tldChcIkJlZ2luXCIsIHRoaXMpXTtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwcm9jZXNzIG1ldGhvZFxuICAgKi9cbiAgcHJvY2VzcygpIHtcbiAgICB0aGlzLmV2YWx1YXRlSW5wdXRzKCk7XG4gICAgdGhpcy5vdXRwdXQoXCJWYWxcIikudmFsdWUgPSB0aGlzLmlucHV0KFwiVmFsXCIpLnZhbHVlO1xuICAgIHRoaXMub3V0cHV0KFwiVmFsXCIpLnR5cGUgPSB0aGlzLmlucHV0KFwiVmFsXCIpLnR5cGU7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Rmxvd1Jlc3VsdCh0aGlzLm5leHQoXCJCZWdpblwiKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVjdGlvbiB0byBjcmVhdGUgdGhlIG5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVudGVyTm9kZSgpIHtcbiAgcmV0dXJuIG5ldyBFbnRlcigpO1xufVxuIiwiLyoqXG4gKiBjbm9kZXNcbiAqXG4gKiBBIHJlcHJlc2VudGF0aW9uLWFnbm9zdGljIGxpYnJhcnkgdG8gZGVmaW5lIGFuZCBleGVjdXRlIG5vZGVzIGJhc2VkIHByb2Nlc3Nlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgcHJvZ3JhbSwgUHJvZ3JhbSB9IGZyb20gXCIuL3Byb2dyYW0uanNcIjtcbmltcG9ydCB7IGVudGVyTm9kZSB9IGZyb20gXCIuL2VudGVyLmpzXCI7XG5pbXBvcnQgeyBleGl0Tm9kZSB9IGZyb20gXCIuL2V4aXQuanNcIjtcblxuaW1wb3J0IHsgY2FsbE5vZGUgfSBmcm9tIFwiLi4vbm9kZXMvY2FsbC5qc1wiO1xuaW1wb3J0IHsgY29uc29sZU5vZGUgfSBmcm9tIFwiLi4vbm9kZXMvY29uc29sZS5qc1wiO1xuaW1wb3J0IHsgZmdldHZhck5vZGUgfSBmcm9tIFwiLi4vbm9kZXMvZmdldHZhci5qc1wiO1xuaW1wb3J0IHsgZm9yTm9kZSB9IGZyb20gXCIuLi9ub2Rlcy9mb3IuanNcIjtcbmltcG9ydCB7IGdldHZhck5vZGUgfSBmcm9tIFwiLi4vbm9kZXMvZ2V0dmFyLmpzXCI7XG5pbXBvcnQgeyBzZXR2YXJOb2RlIH0gZnJvbSBcIi4uL25vZGVzL3NldHZhci5qc1wiO1xuaW1wb3J0IHsgd2hpbGVOb2RlIH0gZnJvbSBcIi4uL25vZGVzL3doaWxlLmpzXCI7XG5pbXBvcnQgeyBpZk5vZGUgfSBmcm9tIFwiLi4vbm9kZXMvaWYuanNcIjtcblxuaW1wb3J0IHsgZmFkZE5vZGUgfSBmcm9tIFwiLi4vbm9kZXMvbWF0aC9mYWRkLmpzXCI7XG5pbXBvcnQgeyBmZGl2Tm9kZSB9IGZyb20gXCIuLi9ub2Rlcy9tYXRoL2ZkaXYuanNcIjtcbmltcG9ydCB7IGZtdWxOb2RlIH0gZnJvbSBcIi4uL25vZGVzL21hdGgvZm11bC5qc1wiO1xuaW1wb3J0IHsgZnNxcnROb2RlIH0gZnJvbSBcIi4uL25vZGVzL21hdGgvZnNxcnQuanNcIjtcblxuaW1wb3J0IHsgZmVxdWFsTm9kZSB9IGZyb20gXCIuLi9ub2Rlcy9ib29sL2ZlcXVhbC5qc1wiO1xuaW1wb3J0IHsgZmd0Tm9kZSB9IGZyb20gXCIuLi9ub2Rlcy9ib29sL2ZndC5qc1wiO1xuaW1wb3J0IHsgZmd0ZU5vZGUgfSBmcm9tIFwiLi4vbm9kZXMvYm9vbC9mZ3RlLmpzXCI7XG5pbXBvcnQgeyBmbHROb2RlIH0gZnJvbSBcIi4uL25vZGVzL2Jvb2wvZmx0LmpzXCI7XG5pbXBvcnQgeyBmbHRlTm9kZSB9IGZyb20gXCIuLi9ub2Rlcy9ib29sL2ZsdGUuanNcIjtcbmltcG9ydCB7IGZub3RlcXVhbE5vZGUgfSBmcm9tIFwiLi4vbm9kZXMvYm9vbC9mbm90ZXF1YWwuanNcIjtcblxuaW1wb3J0IHtcbiAgSW5wdXRTb2NrZXQsXG4gIE5leHRTb2NrZXQsXG4gIE91dHB1dFNvY2tldCxcbiAgUHJldlNvY2tldCxcbiAgU29ja2V0LFxufSBmcm9tIFwiLi9zb2NrZXQuanNcIjtcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlLmpzXCI7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSBcIi4vdHlwZS5qc1wiO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIG1haW4gZ2xvYmFsIGVudmlyb25tZW50IGZvciBjbm9kZXMuXG4gKiBUaGUgY2xhc3MgaXMgYSBcInN0YXRpY1wiIGNsYXNzIHRoYXQgaXMgcmVzcG9uaWJsZSBmb3IgbWFpbnRhaW5pbmcgYSBnbG9iYWxcbiAqIHJlZ2lzdHJ5IG9mIHJlZ2lzdGVyZWQgbm9kZXMuIEEgbm9kZSByZWdpc3RyYXRpb24gaXMgYSBvYmplY3Qgd2l0aCB0aHJlZSBmaWVsZHM6IGEgbm9kZSBuYW1lLFxuICogYSBjYXRlZ29yeSBuYW1lIGFuZCBhIGZhY3RvcnksIHRoYXQgcmV0dXJucyBhIG5ldyBpbnN0YW5jZSBmb3IgdGhhdCBub2RlLlxuICogVGhlIGdsb2JhbCBFbnYgaW5zdGFuY2UgbXVzdCBiZSBpbml0aWFsaXplZCBvbmUtdGltZSBieSBjYWxsaW5nIHRoZSBFbnYuaW5pdCgpIG1ldGhvZCxcbiAqIHRoaXMgbWV0aG9kIHJlZ2lzdGVyIGFsbCBidWlsdC1pbiBub2Rlcy4gRXZlbnR1YWwgY3VzdG9tIG5vZGVzIG11c3QgYmUgcmVnaXN0ZXJlZCBtYW51YWxseVxuICogdmlhIEVudi5yZWdpc3Rlck5vZGUobmFtZSwgY2F0ZWdvcnksIGZhY3RvcnkpLlxuICovXG5leHBvcnQgY2xhc3MgRW52IHtcbiAgc3RhdGljICNub2RlUmVnaXN0cnkgPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIENOb2RlcyBnbG9iYWwgZW52aXJvbm1lbnRcbiAgICovXG4gIHN0YXRpYyBpbml0KCkge1xuICAgIEVudi4jbm9kZVJlZ2lzdHJ5ID0gbmV3IE1hcCgpO1xuXG4gICAgLy8gQ29yZSBub2Rlc1xuXG4gICAgRW52LnJlZ2lzdGVyTm9kZShcIlByb2dyYW1cIiwgXCJDb3JlXCIsIHByb2dyYW0pO1xuICAgIEVudi5yZWdpc3Rlck5vZGUoXCJDYWxsXCIsIFwiQ29yZVwiLCBjYWxsTm9kZSk7XG4gICAgRW52LnJlZ2lzdGVyTm9kZShcIkNvbnNvbGVcIiwgXCJDb3JlXCIsIGNvbnNvbGVOb2RlKTtcbiAgICBFbnYucmVnaXN0ZXJOb2RlKFwiRkdldHZhclwiLCBcIkNvcmVcIiwgZmdldHZhck5vZGUpO1xuICAgIEVudi5yZWdpc3Rlck5vZGUoXCJGb3JcIiwgXCJDb3JlXCIsIGZvck5vZGUpO1xuICAgIEVudi5yZWdpc3Rlck5vZGUoXCJHZXR2YXJcIiwgXCJDb3JlXCIsIGdldHZhck5vZGUpO1xuICAgIEVudi5yZWdpc3Rlck5vZGUoXCJJZlwiLCBcIkNvcmVcIiwgaWZOb2RlKTtcbiAgICBFbnYucmVnaXN0ZXJOb2RlKFwiU2V0dmFyXCIsIFwiQ29yZVwiLCBzZXR2YXJOb2RlKTtcbiAgICBFbnYucmVnaXN0ZXJOb2RlKFwiV2hpbGVcIiwgXCJDb3JlXCIsIHdoaWxlTm9kZSk7XG4gICAgRW52LnJlZ2lzdGVyTm9kZShcIkVudGVyXCIsIFwiQ29yZVwiLCBlbnRlck5vZGUpO1xuICAgIEVudi5yZWdpc3Rlck5vZGUoXCJFeGl0XCIsIFwiQ29yZVwiLCBleGl0Tm9kZSk7XG5cbiAgICAvLyBNYXRoIG5vZGVzXG4gICAgRW52LnJlZ2lzdGVyTm9kZShcIkZBZGRcIiwgXCJNYXRoXCIsIGZhZGROb2RlKTtcbiAgICBFbnYucmVnaXN0ZXJOb2RlKFwiRkRpdlwiLCBcIk1hdGhcIiwgZmRpdk5vZGUpO1xuICAgIEVudi5yZWdpc3Rlck5vZGUoXCJGTXVsXCIsIFwiTWF0aFwiLCBmbXVsTm9kZSk7XG4gICAgRW52LnJlZ2lzdGVyTm9kZShcIkZTcXJ0XCIsIFwiTWF0aFwiLCBmc3FydE5vZGUpO1xuXG4gICAgLy8gQm9vbGVhbiBOb2Rlc1xuICAgIEVudi5yZWdpc3Rlck5vZGUoXCJGRXF1YWxcIiwgXCJCb29sZWFuXCIsIGZlcXVhbE5vZGUpO1xuICAgIEVudi5yZWdpc3Rlck5vZGUoXCJGR1RcIiwgXCJCb29sZWFuXCIsIGZndE5vZGUpO1xuICAgIEVudi5yZWdpc3Rlck5vZGUoXCJGR1RFXCIsIFwiQm9vbGVhblwiLCBmZ3RlTm9kZSk7XG4gICAgRW52LnJlZ2lzdGVyTm9kZShcIkZMVFwiLCBcIkJvb2xlYW5cIiwgZmx0Tm9kZSk7XG4gICAgRW52LnJlZ2lzdGVyTm9kZShcIkZMVEVcIiwgXCJCb29sZWFuXCIsIGZsdGVOb2RlKTtcbiAgICBFbnYucmVnaXN0ZXJOb2RlKFwiRk5vdEVxdWFsXCIsIFwiQm9vbGVhblwiLCBmbm90ZXF1YWxOb2RlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIG5vZGUgdHlwZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2F0ZWdvcnkgVGhlIGNhdGVnb3J5IG9mIHRoZSBub2RlXG4gICAqIEBwYXJhbSB7YW55fSBmYWN0b3J5IEEgY2xhc3MgdGhhdCBpbnN0YW50aWF0ZSB0aGUgbm9kZVxuICAgKi9cbiAgc3RhdGljIHJlZ2lzdGVyTm9kZShuYW1lLCBjYXRlZ29yeSwgZmFjdG9yeSkge1xuICAgIEVudi4jbm9kZVJlZ2lzdHJ5LnNldChuYW1lLCB7IGNhdGVnb3J5OiBjYXRlZ29yeSwgZmFjdG9yeTogZmFjdG9yeSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxpc3Qgb2YgdW5pcXVlIHJlZ2lzdGVyZWQgY2F0ZWdvcmllc1xuICAgKi9cbiAgc3RhdGljIGdldENhdGVnb3JpZXMoKSB7XG4gICAgbGV0IGNhdGVnb3J5TWFwID0gbmV3IE1hcCgpO1xuICAgIEFycmF5LmZyb20odGhpcy4jbm9kZVJlZ2lzdHJ5LnZhbHVlcygpKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjYXRlZ29yeU1hcC5zZXQoZWxlbWVudC5jYXRlZ29yeSwgMCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oY2F0ZWdvcnlNYXAua2V5cygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgcmVnaXN0cmF0aW9ucyBmb3Igbm9kZXMuXG4gICAqIFJlZ2lzdHJhdGlvbnMgaGF2ZSB0aGUgc2lnbjoge25hbWUsIGNhdGVnb3J5LCBmYWN0b3J5fVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2F0ZWdvcnkgVGhlIGNhdGVnb3J5IGZvciB3aGljaCBzZWFjcmggcmVnaXN0cmF0aW9uc1xuICAgKi9cbiAgc3RhdGljIGdldENhdGVnb3J5Tm9kZXMoY2F0ZWdvcnkpIHtcbiAgICBsZXQgcmVnaXN0cmF0aW9ucyA9IFtdO1xuICAgIEFycmF5LmZyb20odGhpcy4jbm9kZVJlZ2lzdHJ5LmVudHJpZXMoKSkuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeVsxXS5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpIHtcbiAgICAgICAgcmVnaXN0cmF0aW9ucy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBlbnRyeVswXSxcbiAgICAgICAgICBjYXRlZ29yeTogZW50cnlbMV0uY2F0ZWdvcnksXG4gICAgICAgICAgZmFjdG9yeTogZW50cnlbMV0uZmFjdG9yeSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlZ2lzdHJhdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogSW5zdGFudGlhdGUgYSBub2RlIGJ5IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIG5vZGVcbiAgICovXG4gIHN0YXRpYyBnZXRJbnN0YW5jZShuYW1lKSB7XG4gICAgbGV0IHJlZyA9IHRoaXMuI25vZGVSZWdpc3RyeS5nZXQobmFtZSk7XG4gICAgaWYgKHJlZykge1xuICAgICAgcmV0dXJuIHJlZy5mYWN0b3J5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZW50aXJlIHByb2dyYW1cbiAgICogQHBhcmFtIHtQcm9ncmFtfSBwcm9ncmFtIFRoZSBwcm9ncmFtIHRvIGV4cG9ydFxuICAgKi9cbiAgc3RhdGljIGV4cG9ydChwcm9ncmFtKSB7XG4gICAgbGV0IGV4cCA9IHtcbiAgICAgIGlkOiBwcm9ncmFtLmlkLFxuICAgICAgdmVyc2lvbjogUHJvZ3JhbS52ZXJzaW9uLFxuICAgICAgbGFzdE5vZGVJbmRleDogTm9kZS5sYXN0Tm9kZUlkSW5kZXgsXG4gICAgICBsYXN0U29ja2V0SW5kZXg6IFNvY2tldC5sYXN0U29ja2V0SWRJbmRleCxcbiAgICAgIGVudGVyOiBwcm9ncmFtLmVudGVyLmlkLFxuICAgICAgZXhpdDogcHJvZ3JhbS5leGl0LmlkLFxuICAgICAgbm9kZXM6IFtdLFxuICAgICAgY29ubmVjdGlvbnM6IFtdLFxuICAgIH07XG5cbiAgICBmb3IgKGxldCBub2RlIG9mIHByb2dyYW0ubm9kZXMpIHtcbiAgICAgIGxldCBub2RlRXhwID0ge1xuICAgICAgICBpZDogbm9kZS5pZCxcbiAgICAgICAgbmFtZTogbm9kZS5uYW1lLFxuICAgICAgICBmdW5jdGlvbmFsOiBub2RlLmZ1bmN0aW9uYWwsXG4gICAgICAgIG1ldGE6IG5vZGUubWV0YSxcbiAgICAgICAgcHJvZ3JhbTogbm9kZSBpbnN0YW5jZW9mIFByb2dyYW0gPyBFbnYuZXhwb3J0KG5vZGUpIDogdW5kZWZpbmVkLFxuICAgICAgICBpbnB1dHM6IG5vZGUuaW5wdXRzLm1hcCgoaW5wKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBpbnAuaWQsXG4gICAgICAgICAgICBuYW1lOiBpbnAubmFtZSxcbiAgICAgICAgICAgIG5vZGU6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiB7IHR5cGU6IGlucC50eXBlLnR5cGUsIGlzQXJyYXk6IGlucC50eXBlLmlzQXJyYXkgfSxcbiAgICAgICAgICAgIHZhbHVlOiBpbnAudmFsdWUsXG4gICAgICAgICAgICBwZWVyOiBudWxsLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgICBvdXRwdXRzOiBub2RlLm91dHB1dHMubWFwKChvdXRwKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBvdXRwLmlkLFxuICAgICAgICAgICAgbmFtZTogb3V0cC5uYW1lLFxuICAgICAgICAgICAgbm9kZTogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IHsgdHlwZTogb3V0cC50eXBlLnR5cGUsIGlzQXJyYXk6IG91dHAudHlwZS5pc0FycmF5IH0sXG4gICAgICAgICAgICB2YWx1ZTogb3V0cC52YWx1ZSxcbiAgICAgICAgICAgIHBlZXJzOiBbXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgICAgcHJldjogIW5vZGUucHJldlxuICAgICAgICAgID8gbnVsbFxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgICBpZDogbm9kZS5wcmV2LmlkLFxuICAgICAgICAgICAgICBuYW1lOiBub2RlLnByZXYubmFtZSxcbiAgICAgICAgICAgICAgbm9kZTogbnVsbCxcbiAgICAgICAgICAgICAgcGVlcnM6IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgbmV4dHM6IG5vZGUubmV4dHMubWFwKChuZXh0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBuZXh0LmlkLFxuICAgICAgICAgICAgbmFtZTogbmV4dC5uYW1lLFxuICAgICAgICAgICAgbm9kZTogbnVsbCxcbiAgICAgICAgICAgIHBlZXI6IG51bGwsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSksXG4gICAgICB9O1xuXG4gICAgICBleHAubm9kZXMucHVzaChub2RlRXhwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgYSBpbm5lci1mdW5jdGlvbiB0aGF0IHByZXZlbnQgZHVwbGljYXRlcyBjb25uZWN0aW9uc1xuICAgICAqIEBwYXJhbSB7YW55fSBjb25uZWN0aW9uIFRoZSBjb25uZWN0aW9uIHRvIHB1c2hcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwdXNoQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGV4cC5jb25uZWN0aW9ucy5maW5kSW5kZXgoXG4gICAgICAgICAgKGMpID0+XG4gICAgICAgICAgICBjLnR5cGUgPT09IGNvbm5lY3Rpb24udHlwZSAmJlxuICAgICAgICAgICAgYy5zb3VyY2VOb2RlID09PSBjb25uZWN0aW9uLnNvdXJjZU5vZGUgJiZcbiAgICAgICAgICAgIGMuc291cmNlU29ja2V0ID09PSBjb25uZWN0aW9uLnNvdXJjZVNvY2tldCAmJlxuICAgICAgICAgICAgYy50YXJnZXROb2RlID09PSBjb25uZWN0aW9uLnRhcmdldE5vZGUgJiZcbiAgICAgICAgICAgIGMudGFyZ2V0U29ja2V0ID09PSBjb25uZWN0aW9uLnRhcmdldFNvY2tldFxuICAgICAgICApID09PSAtMVxuICAgICAgKSB7XG4gICAgICAgIGV4cC5jb25uZWN0aW9ucy5wdXNoKGNvbm5lY3Rpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IG5vZGUgb2YgcHJvZ3JhbS5ub2Rlcykge1xuICAgICAgaWYgKG5vZGUucHJldiAmJiBub2RlLnByZXYucGVlcnMgJiYgbm9kZS5wcmV2LnBlZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgcGVlciBvZiBub2RlLnByZXYucGVlcnMpIHtcbiAgICAgICAgICBsZXQgY29ubmVjdGlvbkV4cCA9IHtcbiAgICAgICAgICAgIHR5cGU6IFwicG5cIixcbiAgICAgICAgICAgIHNvdXJjZU5vZGU6IHBlZXIubm9kZS5pZCxcbiAgICAgICAgICAgIHNvdXJjZVNvY2tldDogcGVlci5pZCxcbiAgICAgICAgICAgIHRhcmdldE5vZGU6IG5vZGUuaWQsXG4gICAgICAgICAgICB0YXJnZXRTb2NrZXQ6IG5vZGUucHJldi5pZCxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHB1c2hDb25uZWN0aW9uKGNvbm5lY3Rpb25FeHApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpbnAgb2Ygbm9kZS5pbnB1dHMpIHtcbiAgICAgICAgaWYgKGlucC5wZWVyKSB7XG4gICAgICAgICAgbGV0IGNvbm5lY3Rpb25FeHAgPSB7XG4gICAgICAgICAgICB0eXBlOiBcImlvXCIsXG4gICAgICAgICAgICBzb3VyY2VOb2RlOiBpbnAucGVlci5ub2RlLmlkLFxuICAgICAgICAgICAgc291cmNlU29ja2V0OiBpbnAucGVlci5pZCxcbiAgICAgICAgICAgIHRhcmdldE5vZGU6IG5vZGUuaWQsXG4gICAgICAgICAgICB0YXJnZXRTb2NrZXQ6IGlucC5pZCxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHB1c2hDb25uZWN0aW9uKGNvbm5lY3Rpb25FeHApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBvdXRwIG9mIG5vZGUub3V0cHV0cykge1xuICAgICAgICBmb3IgKGxldCBwZWVyIG9mIG91dHAucGVlcnMpIHtcbiAgICAgICAgICBpZiAocGVlcikge1xuICAgICAgICAgICAgbGV0IGNvbm5lY3Rpb25FeHAgPSB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiaW9cIixcbiAgICAgICAgICAgICAgc291cmNlTm9kZTogbm9kZS5pZCxcbiAgICAgICAgICAgICAgc291cmNlU29ja2V0OiBvdXRwLmlkLFxuICAgICAgICAgICAgICB0YXJnZXROb2RlOiBwZWVyLm5vZGUuaWQsXG4gICAgICAgICAgICAgIHRhcmdldFNvY2tldDogcGVlci5pZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwdXNoQ29ubmVjdGlvbihjb25uZWN0aW9uRXhwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IG5leHQgb2Ygbm9kZS5uZXh0cykge1xuICAgICAgICBpZiAobmV4dC5wZWVyKSB7XG4gICAgICAgICAgbGV0IGNvbm5lY3Rpb25FeHAgPSB7XG4gICAgICAgICAgICB0eXBlOiBcInBuXCIsXG4gICAgICAgICAgICBzb3VyY2VOb2RlOiBub2RlLmlkLFxuICAgICAgICAgICAgc291cmNlU29ja2V0OiBuZXh0LmlkLFxuICAgICAgICAgICAgdGFyZ2V0Tm9kZTogbmV4dC5wZWVyLm5vZGUuaWQsXG4gICAgICAgICAgICB0YXJnZXRTb2NrZXQ6IG5leHQucGVlci5pZCxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHB1c2hDb25uZWN0aW9uKGNvbm5lY3Rpb25FeHApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBwcm9ncmFtIGluc3RhbmNlIGJhc2VkIG9uIGV4cG9ydCBkYXRhIGNyZWF0ZWQgd2l0aCBleHBvcnQoKSBtZXRob2RcbiAgICogQHBhcmFtIHthbnl9IGRhdGEgQSBvYmplY3Qgd2l0aCB0aGUgZXhwb3J0IGRhdGEgZm9ybWF0XG4gICAqL1xuICBzdGF0aWMgaW1wb3J0KGRhdGEpIHtcbiAgICBpZiAoZGF0YS52ZXJzaW9uICE9PSAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbXBvcnRlZCBkYXRhIG11c3QgaGF2ZSB2ZXJzaW9uIDFcIik7XG4gICAgfVxuXG4gICAgbGV0IHAgPSBuZXcgUHJvZ3JhbSgpO1xuXG4gICAgLy8gUmVtb3ZlcyBlbnRlciBhbmQgZXhpdCBhdXRvLW5vZGVzLCB0aGVzZVxuICAgIC8vIHdpbGwgYmUgcmUtY3JlYXRlZCBieSBpbXBvcnQgcHJvY2VkdXJlXG4gICAgcC5yZW1vdmVOb2RlKHAuZW50ZXIpO1xuICAgIHAucmVtb3ZlTm9kZShwLmV4aXQpO1xuXG4gICAgUHJvZ3JhbS52ZXJzaW9uID0gZGF0YS52ZXJzaW9uO1xuXG4gICAgLy8gTm93IGltcG9ydCBub2RlcyB3aXRob3V0IGNvbm5lY3Rpb25zXG4gICAgZm9yIChsZXQgbm9kZURhdGEgb2YgZGF0YS5ub2Rlcykge1xuICAgICAgbGV0IG5vZGU7XG5cbiAgICAgIC8vIElmIHRoaXMgbm9kZSBpcyBhIHByb2dyYW0gbm9kZSwgbGV0IHRoZSBpbXBvcnRcbiAgICAgIC8vIHByb2NlZHVyZSB0byBjcmVhdGUgdGhlIG5vZGVcbiAgICAgIGlmIChub2RlRGF0YS5wcm9ncmFtKSB7XG4gICAgICAgIG5vZGUgPSBFbnYuaW1wb3J0KG5vZGVEYXRhLnByb2dyYW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3RoZXJ3aXNlIGltcG9ydCB0aGUgbm9kZVxuICAgICAgICBub2RlID0gRW52LmdldEluc3RhbmNlKG5vZGVEYXRhLm5hbWUpO1xuICAgICAgfVxuICAgICAgLy8gRGVsZXRlIGRlZmF1bHQgc29ja2V0cyAoY3JlYXRlZCBieSBnZXRJbnN0YW5jZSgpKVxuICAgICAgbm9kZS5pbnB1dHMgPSBbXTtcbiAgICAgIG5vZGUub3V0cHV0cyA9IFtdO1xuICAgICAgbm9kZS5wcmV2ID0gbnVsbDtcbiAgICAgIG5vZGUubmV4dHMgPSBbXTtcblxuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm9kZSB0eXBlICcke25vZGVEYXRhLm5hbWV9JyBpcyBub3QgcmVnaXN0ZXJlZGApO1xuICAgICAgfVxuICAgICAgbm9kZS5pZCA9IG5vZGVEYXRhLmlkO1xuICAgICAgbm9kZS5mdW5jdGlvbmFsID0gbm9kZURhdGEuZnVuY3Rpb25hbDtcbiAgICAgIG5vZGUubWV0YSA9IG5vZGVEYXRhLm1ldGE7XG4gICAgICBmb3IgKGxldCBpbnBEYXRhIG9mIG5vZGVEYXRhLmlucHV0cykge1xuICAgICAgICBsZXQgaW5wID0gbmV3IElucHV0U29ja2V0KFxuICAgICAgICAgIGlucERhdGEubmFtZSxcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIG5ldyBUeXBlKGlucERhdGEudHlwZS50eXBlLCBpbnBEYXRhLnR5cGUuaXNBcnJheSksXG4gICAgICAgICAgaW5wRGF0YS52YWx1ZVxuICAgICAgICApO1xuICAgICAgICBpbnAuaWQgPSBpbnBEYXRhLmlkO1xuICAgICAgICBub2RlLmlucHV0cy5wdXNoKGlucCk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBvdXRwRGF0YSBvZiBub2RlRGF0YS5vdXRwdXRzKSB7XG4gICAgICAgIGxldCBvdXRwID0gbmV3IE91dHB1dFNvY2tldChcbiAgICAgICAgICBvdXRwRGF0YS5uYW1lLFxuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgbmV3IFR5cGUob3V0cERhdGEudHlwZS50eXBlLCBvdXRwRGF0YS50eXBlLmlzQXJyYXkpLFxuICAgICAgICAgIG91dHBEYXRhLnZhbHVlXG4gICAgICAgICk7XG4gICAgICAgIG91dHAuaWQgPSBvdXRwRGF0YS5pZDtcbiAgICAgICAgbm9kZS5vdXRwdXRzLnB1c2gob3V0cCk7XG4gICAgICB9XG4gICAgICBpZiAobm9kZURhdGEucHJldikge1xuICAgICAgICBsZXQgcHJldiA9IG5ldyBQcmV2U29ja2V0KG5vZGVEYXRhLnByZXYubmFtZSwgbm9kZSk7XG4gICAgICAgIHByZXYuaWQgPSBub2RlRGF0YS5wcmV2LmlkO1xuICAgICAgICBub2RlLnByZXYgPSBwcmV2O1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgbmV4dERhdGEgb2Ygbm9kZURhdGEubmV4dHMpIHtcbiAgICAgICAgbGV0IG5leHQgPSBuZXcgTmV4dFNvY2tldChuZXh0RGF0YS5uYW1lLCBub2RlKTtcbiAgICAgICAgbmV4dC5pZCA9IG5leHREYXRhLmlkO1xuICAgICAgICBub2RlLm5leHRzLnB1c2gobmV4dCk7XG4gICAgICB9XG5cbiAgICAgIHAuYWRkTm9kZShub2RlKTtcbiAgICB9XG5cbiAgICBwLmVudGVyID0gcC5ub2Rlcy5maW5kKChuKSA9PiBuLmlkID09PSBkYXRhLmVudGVyKTtcbiAgICBwLmV4aXQgPSBwLm5vZGVzLmZpbmQoKG4pID0+IG4uaWQgPT09IGRhdGEuZXhpdCk7XG5cbiAgICAvLyBOb3cgaW1wb3J0IGNvbm5lY3Rpb25zXG4gICAgZm9yIChsZXQgY29ubmVjdGlvbkRhdGEgb2YgZGF0YS5jb25uZWN0aW9ucykge1xuICAgICAgbGV0IHNvdXJjZU5vZGUgPSBwLm5vZGVzLmZpbmQoKG4pID0+IG4uaWQgPT09IGNvbm5lY3Rpb25EYXRhLnNvdXJjZU5vZGUpO1xuICAgICAgbGV0IHRhcmdldE5vZGUgPSBwLm5vZGVzLmZpbmQoKG4pID0+IG4uaWQgPT09IGNvbm5lY3Rpb25EYXRhLnRhcmdldE5vZGUpO1xuXG4gICAgICBsZXQgc291cmNlU29ja2V0ID1cbiAgICAgICAgY29ubmVjdGlvbkRhdGEudHlwZSA9PT0gXCJwblwiXG4gICAgICAgICAgPyBzb3VyY2VOb2RlLm5leHRzLmZpbmQoKG4pID0+IG4uaWQgPT09IGNvbm5lY3Rpb25EYXRhLnNvdXJjZVNvY2tldClcbiAgICAgICAgICA6IHNvdXJjZU5vZGUub3V0cHV0cy5maW5kKFxuICAgICAgICAgICAgICAobykgPT4gby5pZCA9PT0gY29ubmVjdGlvbkRhdGEuc291cmNlU29ja2V0XG4gICAgICAgICAgICApO1xuICAgICAgbGV0IHRhcmdldFNvY2tldCA9XG4gICAgICAgIGNvbm5lY3Rpb25EYXRhLnR5cGUgPT09IFwicG5cIlxuICAgICAgICAgID8gdGFyZ2V0Tm9kZS5wcmV2XG4gICAgICAgICAgOiB0YXJnZXROb2RlLmlucHV0cy5maW5kKChpKSA9PiBpLmlkID09PSBjb25uZWN0aW9uRGF0YS50YXJnZXRTb2NrZXQpO1xuXG4gICAgICBzb3VyY2VTb2NrZXQuY29ubmVjdCh0YXJnZXRTb2NrZXQpO1xuICAgIH1cblxuICAgIC8vIFRoZXNlIHR3byBzdGF0aWMgdmFyaWFibGUgbXVzdCBiZSBhc3NpZ25lZCBhdCB0aGUgZW5kIGJlY2F1c2VcbiAgICAvLyB0aGUgbmV3IElucHV0U29ja2V0KCksIG5ldyBPdXRwdXRTb2NrZXQoKSwgLi4uIGluY3JlbWVudCBpdCBkdXJpbmdcbiAgICAvLyB0aGUgaW1wb3J0IHBoYXNlXG4gICAgTm9kZS5sYXN0Tm9kZUlkSW5kZXggPSBkYXRhLmxhc3ROb2RlSW5kZXg7XG4gICAgU29ja2V0Lmxhc3RTb2NrZXRJZEluZGV4ID0gZGF0YS5sYXN0U29ja2V0SW5kZXg7XG5cbiAgICByZXR1cm4gcDtcbiAgfVxufVxuIiwiLyoqXG4gKiBjbm9kZXNcbiAqXG4gKiBBIHJlcHJlc2VudGF0aW9uLWFnbm9zdGljIGxpYnJhcnkgdG8gZGVmaW5lIGFuZCBleGVjdXRlIG5vZGVzIGJhc2VkIHByb2Nlc3Nlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgTm9kZSwgUmVzdWx0IH0gZnJvbSBcIi4vbm9kZS5qc1wiO1xuaW1wb3J0IHsgUHJldlNvY2tldCwgSW5wdXRTb2NrZXQsIE91dHB1dFNvY2tldCB9IGZyb20gXCIuL3NvY2tldC5qc1wiO1xuaW1wb3J0IHsgdHlwZSwgVHlwZXMgfSBmcm9tIFwiLi90eXBlLmpzXCI7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGEgY25vZGUgdGhhdCBpcyB0aGUgc3RhcnRpbmcgcG9pbnQgZm9yIGFcbiAqIHByb2dyYW0uIFRoZSBwcm9ncmFtIGNhbiBiZSB0b3AtbGV2ZWwgb3Igbm90XG4gKi9cbmV4cG9ydCBjbGFzcyBFeGl0IGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiRXhpdFwiKTtcbiAgICB0aGlzLnJlbW92YWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuY3JlYXRhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5pbnB1dHMgPSBbbmV3IElucHV0U29ja2V0KFwiVmFsXCIsIHRoaXMsIHR5cGUoVHlwZXMuQU5ZLCBmYWxzZSksIDApXTtcbiAgICB0aGlzLm91dHB1dHMgPSBbbmV3IE91dHB1dFNvY2tldChcIlZhbFwiLCB0aGlzLCB0eXBlKFR5cGVzLkFOWSwgZmFsc2UpLCAwKV07XG4gICAgdGhpcy5uZXh0cyA9IFtdO1xuICAgIHRoaXMucHJldiA9IG5ldyBQcmV2U29ja2V0KFwiRW5kXCIsIHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwcm9jZXNzIG1ldGhvZFxuICAgKi9cbiAgcHJvY2VzcygpIHtcbiAgICB0aGlzLmV2YWx1YXRlSW5wdXRzKCk7XG4gICAgdGhpcy5vdXRwdXQoXCJWYWxcIikudmFsdWUgPSB0aGlzLmlucHV0KFwiVmFsXCIpLnZhbHVlO1xuICAgIHRoaXMub3V0cHV0KFwiVmFsXCIpLnR5cGUgPSB0aGlzLmlucHV0KFwiVmFsXCIpLnR5cGU7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoKTsgLy8gRW5kIHByb2Nlc3NcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBmdWN0aW9uIHRvIGNyZWF0ZSB0aGUgbm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhpdE5vZGUoKSB7XG4gIHJldHVybiBuZXcgRXhpdCgpO1xufVxuIiwiLyoqXG4gKiBjbm9kZXNcbiAqXG4gKiBBIHJlcHJlc2VudGF0aW9uLWFnbm9zdGljIGxpYnJhcnkgdG8gZGVmaW5lIGFuZCBleGVjdXRlIG5vZGVzIGJhc2VkIHByb2Nlc3Nlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgSW5wdXRTb2NrZXQsIFNvY2tldCB9IGZyb20gXCIuL3NvY2tldC5qc1wiO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGJhc2Ugbm9kZSBjbGFzcy4gQSBub2RlIGhhdmUgc29tZSBpbnB1dCBhbmQgb3V0cHV0XG4gKiB0byBleGNoYW5nZSBkYXRhIHdpdGggb3RoZXIgbm9kZXMsIHNvbWUgbmV4dHMgdG8gZGV0ZXJtaW5lIG5leHRcbiAqIGV4ZWN1dGlvbiBub2RlcywgYW5kIGEgcHJldiB0byBpZGVudGlmeSB0aGUgZW50cnkgcG9pbnQuXG4gKiBBIG5vZGUgY2FuIGJlIGZ1bmN0aW9uYWwgb3IgaXRlcmF0aXZlLiBJZiB0aGUgbm9kZSBpcyBmdW5jaXRvbmFsXG4gKiB0aGUgZXhlY3V0aW9uIG9mIHRoZSBwcm9jZXNzIG1ldGhvZCBpcyByZXBlYXRlZCBlYWNoIHRpbWUgb3RoZXJcbiAqIG5vZGVzIHJlYWQgdGhlIG91dHB1dCB2YWx1ZXMsIG90aGVyd2lzZSBvdXRwdXQgbm9kZXMgcmVwb3J0c1xuICogdGhlIGxhc3QgY29tcHV0ZWQgdmFsdWUuIEVhY2ggbm9kZSBoYXMgYSB1bmlxdWUgaWQgdG8gaWRlbnRpZnkgaXRcbiAqL1xuZXhwb3J0IGNsYXNzIE5vZGUge1xuICAvKiogQW4gaW5jcmVtZW50YWwgaW5kZXggdG8gZ2VuZXJhdGUgdW5pcXVlIG5vZGUgSURzICovXG4gIHN0YXRpYyBsYXN0Tm9kZUlkSW5kZXggPSAwO1xuXG4gIC8qKiBUaGUgaW50ZXJuYWwgdW5pcXVlIGlkZW50aWZpZXIgKi9cbiAgI2lkID0gbnVsbDtcblxuICAvKiogVGhlIGludGVybmFsIG5hbWUgb2YgdGhlIG5vZGUgKi9cbiAgI25hbWUgPSBcIlwiO1xuXG4gIC8qKiBJcyB0aGlzIG5vZGUgYSBmdW5jdGlvbmFsIG5vZGU/ICovXG4gICNmdW5jdGlvbmFsID0gZmFsc2U7XG5cbiAgLyoqIExpc3Qgb2Ygbm9kZSdzIGlucHV0cyAqL1xuICAjaW5wdXRzID0gW107XG5cbiAgLyoqIExpc3Qgb2Ygbm9kZSdzIG91dHB1dHMgKi9cbiAgI291dHB1dHMgPSBbXTtcblxuICAvKiogTGlzdCBvZiBub2RlJ3MgbmV4dHMgaW4gZXhlY3V0aW9uICovXG4gICNuZXh0cyA9IFtdO1xuXG4gIC8qKiBUaGUgZXhlY3V0aW9uIGVudHJ5IHBvaW50ICovXG4gICNwcmV2ID0gbnVsbDtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBlbmNsb3NpbmcgcHJvZ3JhbSAqL1xuICAjcHJvZ3JhbSA9IG51bGw7XG5cbiAgLyoqIEFkZGl0aW9uYWwgaW5mbyAoVUlzIGNhbiB3cml0ZSBhbnl0aGluZyB0byBzdG9yZSBncmFwaGljYWwgYmVoYXZpb3JzKSAqL1xuICAjbWV0YSA9IG51bGw7XG5cbiAgLyoqIENhbiB0aGUgbm9kZSBiZSByZW1vdmVkIGJ5IHRoZSB1c2VyPyAqL1xuICAjcmVtb3ZhYmxlID0gdHJ1ZTtcblxuICAvKiogQ2FuIHRoZSBub2RlIGJlIGNyZWF0ZWQgYnkgdGhlIHVzZXI/ICovXG4gICNjcmVhdGFibGUgPSB0cnVlO1xuXG4gIC8qKiBDYW4gdGhlIHVzZXIgYWRkIGFuIGlucHV0PyAqL1xuICAjY2FuQWRkSW5wdXQgPSBmYWxzZTtcblxuICAvKiogQ2FuIHRoZSB1c2VyIGFkZCBhbiBvdXRwdXQ/ICovXG4gICNjYW5BZGRPdXRwdXQgPSBmYWxzZTtcblxuICAvKiogQ2FuIHRoZSB1c2VyIGFkZCBhIG5leHQ/ICovXG4gICNjYW5BZGROZXh0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuI25hbWUgPSBuYW1lO1xuICAgIHRoaXMuI2lkID0gXCJOSURfXCIgKyBOb2RlLmxhc3ROb2RlSWRJbmRleCsrO1xuICB9XG5cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLiNpZDtcbiAgfVxuICBzZXQgaWQodmFsKSB7XG4gICAgdGhpcy4jaWQgPSB2YWw7XG4gIH1cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsKSB7XG4gICAgdGhpcy4jbmFtZSA9IHZhbDtcbiAgfVxuICBnZXQgZnVuY3Rpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jZnVuY3Rpb25hbDtcbiAgfVxuICBzZXQgZnVuY3Rpb25hbCh2YWwpIHtcbiAgICB0aGlzLiNmdW5jdGlvbmFsID0gdmFsO1xuICB9XG4gIGdldCBpbnB1dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lucHV0cztcbiAgfVxuICBzZXQgaW5wdXRzKHZhbCkge1xuICAgIHRoaXMuI2lucHV0cyA9IHZhbDtcbiAgfVxuICBnZXQgb3V0cHV0cygpIHtcbiAgICByZXR1cm4gdGhpcy4jb3V0cHV0cztcbiAgfVxuICBzZXQgb3V0cHV0cyh2YWwpIHtcbiAgICB0aGlzLiNvdXRwdXRzID0gdmFsO1xuICB9XG4gIGdldCBuZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy4jbmV4dHM7XG4gIH1cbiAgc2V0IG5leHRzKHZhbCkge1xuICAgIHRoaXMuI25leHRzID0gdmFsO1xuICB9XG4gIGdldCBwcmV2KCkge1xuICAgIHJldHVybiB0aGlzLiNwcmV2O1xuICB9XG4gIHNldCBwcmV2KHZhbCkge1xuICAgIHRoaXMuI3ByZXYgPSB2YWw7XG4gIH1cbiAgZ2V0IHByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3Byb2dyYW07XG4gIH1cbiAgc2V0IHByb2dyYW0odmFsKSB7XG4gICAgdGhpcy4jcHJvZ3JhbSA9IHZhbDtcbiAgfVxuICBnZXQgcmVtb3ZhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLiNyZW1vdmFibGU7XG4gIH1cbiAgc2V0IHJlbW92YWJsZSh2YWwpIHtcbiAgICB0aGlzLiNyZW1vdmFibGUgPSB2YWw7XG4gIH1cbiAgZ2V0IGNyZWF0YWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jY3JlYXRhYmxlO1xuICB9XG4gIHNldCBjcmVhdGFibGUodmFsKSB7XG4gICAgdGhpcy4jY3JlYXRhYmxlID0gdmFsO1xuICB9XG4gIGdldCBjYW5BZGRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy4jY2FuQWRkSW5wdXQ7XG4gIH1cbiAgc2V0IGNhbkFkZElucHV0KHZhbCkge1xuICAgIHRoaXMuI2NhbkFkZElucHV0ID0gdmFsO1xuICB9XG4gIGdldCBjYW5BZGRPdXRwdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2NhbkFkZE91dHB1dDtcbiAgfVxuICBzZXQgY2FuQWRkT3V0cHV0KHZhbCkge1xuICAgIHRoaXMuI2NhbkFkZE91dHB1dCA9IHZhbDtcbiAgfVxuICBnZXQgY2FuQWRkTmV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy4jY2FuQWRkTmV4dDtcbiAgfVxuICBzZXQgY2FuQWRkTmV4dCh2YWwpIHtcbiAgICB0aGlzLiNjYW5BZGROZXh0ID0gdmFsO1xuICB9XG4gIGdldCBtZXRhKCkge1xuICAgIHJldHVybiB0aGlzLiNtZXRhO1xuICB9XG4gIHNldCBtZXRhKHZhbCkge1xuICAgIHRoaXMuI21ldGEgPSB2YWw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5wdXQgYnkgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBpbnB1dFxuICAgKi9cbiAgaW5wdXQobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmlucHV0cy5maW5kKChpKSA9PiBpLm5hbWUgPT09IG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG91dHB1dCBieSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBvdXRwdXRcbiAgICovXG4gIG91dHB1dChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMub3V0cHV0cy5maW5kKChvKSA9PiBvLm5hbWUgPT09IG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5leHQgYnkgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgbmV4dFxuICAgKi9cbiAgbmV4dChuYW1lKSB7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZXh0c1swXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubmV4dHMuZmluZCgobikgPT4gbi5uYW1lID09PSBuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBhbGwgaW1wdXRzIG9mIHRoaXMgbm9kZS4gSW5wdXRzIGFyZSBzb2NrZXRzLlxuICAgKiBJZiB0aGUgc29ja2V0IGlzIGNvbm5lY3RlZCB0aGUgZXZhbHVhdGlvbiB3aWxsIHNlYXJjaFxuICAgKiBmb3IgdGhlIHNvY2tldCdzIHBlZXIgYW5kIGV2YWx1YXRlIHRoZSBvdXRwdXQgY291bnRlcnBhcnRcbiAgICogZXZlbnR1YWxseSByZXByb2Nlc3MgdGhlIG91dHB1dCdzIG5vZCwgaWYgdGhlIG5vZGUgaXNcbiAgICogZnVuY3Rpb25hbFxuICAgKi9cbiAgZXZhbHVhdGVJbnB1dHMoKSB7XG4gICAgZm9yIChsZXQgaW5wIG9mIHRoaXMuaW5wdXRzKSB7XG4gICAgICBpbnAuZXZhbHVhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhbiBoZWxwZXIgbWV0aG9kIHRvIGNvbnN0cnVjdCBhIFJlc3VsdCBpbnN0YW5jZVxuICAgKiBieSBuYW1lXG4gICAqIEBwYXJhbSB7U29ja2V0fSBzb2NrZXQgVGhlIFNvY2tldCBvbiB3aGljaCBjb25zdHJ1Y3QgdGhlIFJlc3VsdCBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0Rmxvd1Jlc3VsdChzb2NrZXQpIHtcbiAgICBpZiAoc29ja2V0LnBlZXIpIHtcbiAgICAgIHJldHVybiBuZXcgUmVzdWx0KHNvY2tldC5wZWVyLm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFJlc3VsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBkaXNjb25uZWN0IGFsbCBzb2NrZXRzIGZyb20gdGhlIG5vZGVcbiAgICovXG4gIGRpc2Nvbm5lY3RBbGxTb2NrZXRzKCkge1xuICAgIGlmICh0aGlzLiNwcmV2KSB7XG4gICAgICB3aGlsZSAodGhpcy4jcHJldi5wZWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuI3ByZXYuZGlzY29ubmVjdCh0aGlzLiNwcmV2LnBlZXJzWzBdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSBvZiB0aGlzLiNpbnB1dHMpIHtcbiAgICAgIGlmIChpLnBlZXIpIHtcbiAgICAgICAgaS5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IG8gb2YgdGhpcy4jb3V0cHV0cykge1xuICAgICAgd2hpbGUgKG8ucGVlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBvLnBlZXJzWzBdLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgbiBvZiB0aGlzLiNuZXh0cykge1xuICAgICAgaWYgKG4ucGVlcikge1xuICAgICAgICBuLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSWYgdGhpcy4jY2FuQWRkSW5wdXQgaXMgdHJ1ZSwgdGhlIHVzZXIgY2FuIGFkZCBhbiBpbnB1dFxuICAgKiBlcXVhbCB0byB0aGUgKGF0IGxlYXN0IG9uZSkgaW5wdXQgdGhhdCBhbHJlYWR5IGV4aXN0c1xuICAgKi9cbiAgYWRkSW5wdXQoKSB7XG4gICAgaWYgKHRoaXMuY2FuQWRkSW5wdXQgJiYgdGhpcy4jaW5wdXRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuI2lucHV0cy5wdXNoKFxuICAgICAgICBuZXcgSW5wdXRTb2NrZXQoXCJcIiwgdGhpcywgdGhpcy4jaW5wdXRzWzBdLnR5cGUsIHRoaXMuI2lucHV0c1swXS52YWx1ZSlcbiAgICAgICk7XG5cbiAgICAgIC8vIFJlbmFtZSBhbGwgaW5wdXRzIHRvIGl0cyBvcmRpbmFsIG51bWJlciBpbiB0aGUgaW5wdXRzIGFycmF5XG4gICAgICBmb3IgKGxldCBbaWR4LCBpXSBvZiB0aGlzLiNpbnB1dHMuZW50cmllcygpKSB7XG4gICAgICAgIGkubmFtZSA9IFwiXCIgKyBpZHg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGFkZCBpbnB1dCFcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJlbW92ZXMgYSBzcGVjaWZpYyBpbnB1dCBmcm9tIHRoZSBub2RlLCBpZlxuICAgKiB0aGlzIGlzIHBvc3NpYmxlIHdoaXQgdGhpcyBpbnN0YW5jZVxuICAgKiBAcGFyYW0geyp9IGlucHV0IFRoZSBpbnB1dCB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUlucHV0KGlucHV0KSB7XG4gICAgaWYgKHRoaXMuY2FuUmVtb3ZlSW5wdXQoaW5wdXQpKSB7XG4gICAgICB0aGlzLiNpbnB1dHMgPSB0aGlzLiNpbnB1dHMuZmlsdGVyKChpKSA9PiBpICE9PSBpbnB1dCk7XG5cbiAgICAgIC8vIFJlbmFtZSBhbGwgaW5wdXRzIHRvIGl0cyBvcmRpbmFsIG51bWJlciBpbiB0aGUgaW5wdXRzIGFycmF5XG4gICAgICBmb3IgKGxldCBbaWR4LCBpXSBvZiB0aGlzLiNpbnB1dHMuZW50cmllcygpKSB7XG4gICAgICAgIGkubmFtZSA9IFwiXCIgKyBpZHg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHJlbW92ZSBpbnB1dFwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FuIHRoaXMgbm9kZSByZW1vdmUgYSBzcGVjaWZpYyBpbnB1dD9cbiAgICogU3ViY2xhc3Mgd2l0aCB2YXJpYWJsZSBudW1iZXIgb2YgaW5wdXQgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kXG4gICAqIEBwYXJhbSB7SW5wdXRzU29ja2V0fSBpbnB1dCBUaGUgaW5wdXQgdG8gcmVtb3ZlXG4gICAqL1xuICBjYW5SZW1vdmVJbnB1dChpbnB1dCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBUaGUgYmFzZSB2ZXJzaW9uIG9mIHRoZSBub2RlIGRvZXMgbm90aGluZyAqL1xuICBwcm9jZXNzKCkge1xuICAgIHJldHVybiBuZXcgUmVzdWx0KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgcmVzdWx0IGNsYXNzIHVzZWQgYnkgcHJvZ3JhbXMgdG8gcmVjZWl2ZVxuICogdGhlIG5leHQgXCJuZXh0XCIgaW4gdGhlIGZsb3dcbiAqL1xuZXhwb3J0IGNsYXNzIFJlc3VsdCB7XG4gIC8qKiBUaGUgbmV4dCBub2RlICovXG4gICNuZXh0ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihuZXh0ID0gbnVsbCkge1xuICAgIHRoaXMuI25leHQgPSBuZXh0O1xuICB9XG4gIGdldCBuZXh0KCkge1xuICAgIHJldHVybiB0aGlzLiNuZXh0O1xuICB9XG4gIHNldCBuZXh0KHZhbCkge1xuICAgIHRoaXMuI25leHQgPSB2YWw7XG4gIH1cbn1cbiIsIi8qKlxuICogY25vZGVzXG4gKlxuICogQSByZXByZXNlbnRhdGlvbi1hZ25vc3RpYyBsaWJyYXJ5IHRvIGRlZmluZSBhbmQgZXhlY3V0ZSBub2RlcyBiYXNlZCBwcm9jZXNzZXNcbiAqIExpY2Vuc2U6IE1JVFxuICogQXV0aG9yOiBNYXJjbyBKYWNvdm9uZVxuICogWWVhcjogMjAyMFxuICovXG5cbmltcG9ydCB7IEVudGVyIH0gZnJvbSBcIi4vZW50ZXIuanNcIjtcbmltcG9ydCB7IEV4aXQgfSBmcm9tIFwiLi9leGl0LmpzXCI7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZS5qc1wiO1xuaW1wb3J0IHsgSW5wdXRTb2NrZXQsIE5leHRTb2NrZXQsIE91dHB1dFNvY2tldCwgUHJldlNvY2tldCB9IGZyb20gXCIuL3NvY2tldC5qc1wiO1xuaW1wb3J0IHsgdHlwZSwgVHlwZXMgfSBmcm9tIFwiLi90eXBlLmpzXCI7XG5cbi8qKlxuICogQSBwcm9ncmFtIGlzIGEgc3BlY2lhbCBub2RlIHRoYXQgY29udGFpbnMgbm9kZXMuIFRoZSBwcm9ncmFtXG4gKiBtYW5hZ2VzIHRoZSBmbG93IG9mIHRoZSBnbG9iYWwgZXhlY3V0aW9uIGJ5IHN0YXJ0aW5nIGZyb20gdGhlXG4gKiBcIkVudGVyXCIgZGVmYXVsdCwgYXV0b2NyZWF0ZWQgbm9kZSwgY2FsbCBpdHMgcHJvY2VzcygpIG1ldGhvZCBhbmQgcmVjZWl2ZSB0aGUgbmV4dFxuICogXCJuZXh0XCIuIEEgcHJvZ3JhbSBhbHNvIHN0b3JlIGEgZ2xvYmFsIHZhcmlhYmxlIHNwYWNlXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9ncmFtIGV4dGVuZHMgTm9kZSB7XG4gIC8qKiBFbmdpbmUgdmVyc2lvbiAqL1xuICBzdGF0aWMgdmVyc2lvbiA9IDE7XG5cbiAgLyoqIFRoZSBub2RlcyBpbiB0aGlzIHByb2dyYW0gKi9cbiAgI25vZGVzID0gW107XG5cbiAgLyoqIFRoZSBFbnRlciBub2RlICovXG4gICNlbnRlciA9IG51bGw7XG5cbiAgLyoqIFRoZSBFeGl0IG5vZGUgKi9cbiAgI2V4aXQgPSBudWxsO1xuXG4gIC8qKiBUaGUgaW5zdHJ1Y3Rpb24gcG9pbnRlciBlcXVpdmFsZW50IDopICovXG4gICNjdXJyZW50Tm9kZSA9IG51bGw7XG5cbiAgLyoqIFRoZSB2YXJpYWJsZSBnbG9iYWwgc3BhY2UgKi9cbiAgI3ZhcnMgPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJQcm9ncmFtXCIpO1xuICAgIHRoaXMuaW5wdXRzID0gW25ldyBJbnB1dFNvY2tldChcIlZhbFwiLCB0aGlzLCB0eXBlKFR5cGVzLkFOWSwgZmFsc2UpLCAwKV07XG4gICAgdGhpcy5vdXRwdXRzID0gW25ldyBPdXRwdXRTb2NrZXQoXCJWYWxcIiwgdGhpcywgdHlwZShUeXBlcy5BTlksIGZhbHNlKSwgMCldO1xuICAgIHRoaXMubmV4dHMgPSBbbmV3IE5leHRTb2NrZXQoXCJPdXRcIiwgdGhpcyldO1xuICAgIHRoaXMucHJldiA9IG5ldyBQcmV2U29ja2V0KFwiSW5cIiwgdGhpcyk7XG5cbiAgICAvLyBDcmVhdGUgZGVmYXVsdCBlbnRlciwgZXhpdCBub2Rlc1xuICAgIHRoaXMuYWRkTm9kZSgodGhpcy4jZW50ZXIgPSBuZXcgRW50ZXIoKSkpLmFkZE5vZGUoXG4gICAgICAodGhpcy4jZXhpdCA9IG5ldyBFeGl0KCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldCB2YXJzKCkge1xuICAgIHJldHVybiB0aGlzLiN2YXJzO1xuICB9XG4gIHNldCB2YXJzKHZhbCkge1xuICAgIHRoaXMuI3ZhcnMgPSB2YWw7XG4gIH1cbiAgZ2V0IGVudGVyKCkge1xuICAgIHJldHVybiB0aGlzLiNlbnRlcjtcbiAgfVxuICBzZXQgZW50ZXIodmFsKSB7XG4gICAgdGhpcy4jZW50ZXIgPSB2YWw7XG4gIH1cbiAgZ2V0IGV4aXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2V4aXQ7XG4gIH1cbiAgc2V0IGV4aXQodmFsKSB7XG4gICAgdGhpcy4jZXhpdCA9IHZhbDtcbiAgfVxuICBnZXQgY3VycmVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2N1cnJlbnROb2RlO1xuICB9XG4gIHNldCBjdXJyZW50Tm9kZSh2YWwpIHtcbiAgICB0aGlzLiNjdXJyZW50Tm9kZSA9IHZhbDtcbiAgfVxuICBnZXQgbm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI25vZGVzO1xuICB9XG4gIHNldCBub2Rlcyh2YWwpIHtcbiAgICB0aGlzLiNub2RlcyA9IHZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgbm9kZSB0byB0aGlzIHByb2dyYW1cbiAgICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBub2RlIHRvIGFkZFxuICAgKi9cbiAgYWRkTm9kZShub2RlKSB7XG4gICAgdGhpcy4jbm9kZXMucHVzaChub2RlKTtcblxuICAgIC8vIFNldCB0aGlzIHByb2dyYW0gdG8gdGhlIG5vZGVcbiAgICBub2RlLnByb2dyYW0gPSB0aGlzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBub2RlIGZyb20gdGhpcyBwcm9ncmFtLCBkaXNjb25uZWN0IGFsbCBzb2NrZXRzXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZU5vZGUobm9kZSkge1xuICAgIC8vIERpc2Nvbm5lY3QgaXRzIHNvY2tldHNcbiAgICBub2RlLmRpc2Nvbm5lY3RBbGxTb2NrZXRzKCk7XG5cbiAgICB0aGlzLiNub2RlcyA9IHRoaXMuI25vZGVzLmZpbHRlcigobikgPT4gbi5pZCAhPT0gbm9kZS5pZCk7XG4gICAgbm9kZS5wcm9ncmFtID0gbnVsbDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcHJvY2VzcyBtZXRob2Qgd2lsbCBzdGFydCBmcm9tIHRoZSBFbnRlciBub2RlIGFuZFxuICAgKiBjeWNsZSBvdmVyIG5leHRzIHJldHVybmVkIGJ5IHRoZSBwcm9jZXNzIGZ1bmN0aW9ucyBvZiBub2Rlcy5cbiAgICogVGhlIFByb2dyYW0gbm9kZSBjb3VsZG4ndCBiZSBhIHRvcC1sZXZlbCBwcm9ncmFtLCBidXQgYSBzdWItbm9kXG4gICAqIG9mIGFub3RoZXIgcHJvZ3JhbS4gRm9yIHRoYXQgcmVhc29uLCB0aGUgcHJvY2VzcygpIG1ldGhvZCBjb3B5IHRoZVxuICAgKiB2YWx1ZSBvZiB0aGUgb25seSBpbnB1dCBpbiB0aGUgUHJvZ3JhbSBub2RlIHRvIHRoZSBvbmx5IG9uZVxuICAgKiBpbnB1dCBvZiB0aGUgXCJFbnRlclwiIGZvcnN0IG5vZGUuXG4gICAqIFRoaXMgaXMgYSBsaW1pdGF0aW9uOiBUaGUgUHJvZ3JhbSBub2RlIGNhbiBiZSBhY3R1YWxseSBvbmx5IDEgaW5wdXRcbiAgICogYW5kIG9ubHkgMSBvdXRwdXQuIEF0IHRoZSBzYW1lLCBFbnRlciBhbmQgRXhpdCBub2RlcyB3aWxsIGhhdmUgb25seVxuICAgKiAxIGlucHV0IGFuZCBvdXRwdXQgcmVzcGVjdGl2ZWx5LlxuICAgKiBBdCB0aGUgZW5kLCB0aGUgcHJvY2VzcygpIG1ldGhvcyBvZiB0aGUgUHJvZ3JhbSBub2RlLCB3aWxsIGNvcHkgdGhlXG4gICAqIHZhbHVlIG9mIHRoZSBFeGl0J3Mgb3V0cHV0IHRvIHRoZSB1bmlxdWUgb3V0cHV0IG9mIHRoZSBQcm9ncmFtIG5vZGVcbiAgICovXG4gIHByb2Nlc3MoKSB7XG4gICAgdGhpcy5ldmFsdWF0ZUlucHV0cygpO1xuXG4gICAgLy8gQ29weSBpbnB1dCB0byBlbnRlcidzIGlucHV0XG4gICAgdGhpcy4jZW50ZXIuaW5wdXQoXCJWYWxcIikudmFsdWUgPSB0aGlzLmlucHV0KFwiVmFsXCIpLnZhbHVlO1xuICAgIHRoaXMuI2VudGVyLmlucHV0KFwiVmFsXCIpLnR5cGUgPSB0aGlzLmlucHV0KFwiVmFsXCIpLnR5cGU7XG5cbiAgICB0aGlzLnByb2Nlc3NGcm9tKHRoaXMuI2VudGVyKTtcblxuICAgIC8vIENvcHkgb3V0cHV0IHRvIGV4aXQncyBvdXRwdXRcbiAgICB0aGlzLm91dHB1dChcIlZhbFwiKS52YWx1ZSA9IHRoaXMuI2V4aXQub3V0cHV0KFwiVmFsXCIpLnZhbHVlO1xuICAgIHRoaXMub3V0cHV0KFwiVmFsXCIpLnR5cGUgPSB0aGlzLiNleGl0Lm91dHB1dChcIlZhbFwiKS50eXBlO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0Rmxvd1Jlc3VsdCh0aGlzLm5leHQoXCJPdXRcIikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGUgYSBwcm9ncmFtIHVzZW5nIG5vZGUgYXMgc3RhcnRpbmcgcG9pbnRcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlIFN0YXJ0aW5nIHBvaW50IG5vZGVcbiAgICovXG4gIHByb2Nlc3NGcm9tKG5vZGUpIHtcbiAgICB0aGlzLmN1cnJlbnROb2RlID0gbm9kZTtcbiAgICB3aGlsZSAodGhpcy5jdXJyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuY3VycmVudE5vZGUucHJvY2VzcygpO1xuICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHJlc3VsdC5uZXh0O1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgcHJvZ3JhbVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb2dyYW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2dyYW0oKSB7XG4gIHJldHVybiBuZXcgUHJvZ3JhbSgpO1xufVxuIiwiLyoqXG4gKiBjbm9kZXNcbiAqXG4gKiBBIHJlcHJlc2VudGF0aW9uLWFnbm9zdGljIGxpYnJhcnkgdG8gZGVmaW5lIGFuZCBleGVjdXRlIG5vZGVzIGJhc2VkIHByb2Nlc3Nlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgVHlwZXMsIHR5cGUsIFR5cGUgfSBmcm9tIFwiLi90eXBlLmpzXCI7XG5cbi8qKlxuICogQSBzb2NrZXQgaXMgYW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50IGFuIGlucHV0LFxuICogb3V0cHV0LCBuZXh0IG9yIHByZXYgZm9yIHRoZSBub2RlXG4gKi9cbmV4cG9ydCBjbGFzcyBTb2NrZXQge1xuICAvKiogQW4gaW5jcmVtZW50YWwgaW5kZXggdG8gZ2VuZXJhdGUgdW5pcXVlIHNvY2tldCBJRHMgKi9cbiAgc3RhdGljIGxhc3RTb2NrZXRJZEluZGV4ID0gMDtcblxuICAvKiogVGhlIGludGVybmFsIGlkIG9mIHRoZSBzb2NrZXQgKi9cbiAgI2lkID0gXCJcIjtcblxuICAvKiogVGhlIG5hbWUgb2YgdGhpcyBzb2NrZXQgKi9cbiAgI25hbWUgPSBcIlwiO1xuXG4gIC8qKiBUaGUgcGFyZW50IG5vZGUgKi9cbiAgI25vZGUgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBuZXcgc29ja2V0IG9uIGEgbm9kZSB3aXRoIGEgZ2l2ZW4gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc29ja2V0XG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgcGFyZW50IG5vZGUgb2YgdGhlIHNvY2tldFxuICAgKi9cbiAgY29uc3RydWN0b3IobmFtZSwgbm9kZSkge1xuICAgIHRoaXMuI2lkID0gXCJTSURfXCIgKyBTb2NrZXQubGFzdFNvY2tldElkSW5kZXgrKztcblxuICAgIHRoaXMuI25hbWUgPSBuYW1lO1xuICAgIHRoaXMuI25vZGUgPSBub2RlO1xuICB9XG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaWQ7XG4gIH1cbiAgc2V0IGlkKHZhbCkge1xuICAgIHRoaXMuI2lkID0gdmFsO1xuICB9XG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiNuYW1lO1xuICB9XG4gIHNldCBuYW1lKHZhbCkge1xuICAgIHRoaXMuI25hbWUgPSB2YWw7XG4gIH1cbiAgZ2V0IG5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI25vZGU7XG4gIH1cbiAgc2V0IG5vZGUodmFsKSB7XG4gICAgdGhpcy4jbm9kZSA9IHZhbDtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSB2YWx1ZSBzb2NrZXQgcmVwcmVzZW50IGEgaW5wdXQgb3IgYSBvdXRwdXQgdmFsdWVcbiAqIGZvciB0aGUgbm9kZSwgc28gaXQgaGFzIGEgdmFsdWUgYW5kIGEgdHlwZVxuICovXG5leHBvcnQgY2xhc3MgVmFsdWVTb2NrZXQgZXh0ZW5kcyBTb2NrZXQge1xuICAvKiogVGhlIHR5cGUgZm9yIHRoZSBzb2NrZXQncyB2YWx1ZSAqL1xuICAjdHlwZSA9IHR5cGUoVHlwZXMuTlVNQkVSLCBmYWxzZSk7XG5cbiAgLyoqIFRoZSBzdG9yZWQgdmFsdWUgKi9cbiAgI3ZhbHVlID0gMDtcblxuICAvKipcbiAgICogQ29uc3RydWN0IGEgbmV3IFZhbHVlU29ja2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIHNvY2tldFxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIHBhcmVudCBub2RlXG4gICAqIEBwYXJhbSB7VHlwZX0gdHlwZSBUaGUgdHlwZSBvZiB0aGlzIHNvY2tldFxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIHNvY2tldFxuICAgKi9cbiAgY29uc3RydWN0b3IobmFtZSwgbm9kZSwgdHlwZSA9IHR5cGUoVHlwZXMuTlVNQkVSLCBmYWxzZSksIHZhbHVlID0gMCkge1xuICAgIHN1cGVyKG5hbWUsIG5vZGUpO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3R5cGU7XG4gIH1cbiAgc2V0IHR5cGUodmFsKSB7XG4gICAgdGhpcy4jdHlwZSA9IHZhbDtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICB0aGlzLiN2YWx1ZSA9IHZhbDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgaXMgYW4gaW5wdXQgc29ja2V0IHZhbHVlIGZvciB0aGUgbm9kZSwgaXRcbiAqIGNhbiBoYXZlIG9ubHkgYSBwZWVyIHNvY2tldCwgYmVjYXVzZSBpdHMgdmFsdWVcbiAqIGhhdmUgdG8gYmUgZGVmaW5lZCBpbiBhIGRldGVybWluaXN0aWMgd2F5XG4gKi9cbmV4cG9ydCBjbGFzcyBJbnB1dFNvY2tldCBleHRlbmRzIFZhbHVlU29ja2V0IHtcbiAgLyoqIFRoZSBvbmx5IHBlZXIgc29ja2V0ICovXG4gICNwZWVyID0gbnVsbDtcblxuICAvKipcbiAgICogQ29uc3RydWN0IGEgbmV3IElucHV0U29ja2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzb2NrZXRcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBwYXJlbnQgbm9kZVxuICAgKiBAcGFyYW0ge1R5cGV9IHR5cGUgVGhlIHR5cGUgb2YgdGhlIHNvY2tldFxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIHNvY2tldFxuICAgKi9cbiAgY29uc3RydWN0b3IobmFtZSwgbm9kZSwgdHlwZSA9IHR5cGUoVHlwZXMuTlVNQkVSLCBmYWxzZSksIHZhbHVlID0gMCkge1xuICAgIHN1cGVyKG5hbWUsIG5vZGUsIHR5cGUsIHZhbHVlKTtcbiAgfVxuICBnZXQgcGVlcigpIHtcbiAgICByZXR1cm4gdGhpcy4jcGVlcjtcbiAgfVxuICBzZXQgcGVlcih2YWwpIHtcbiAgICB0aGlzLiNwZWVyID0gdmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHRoZSBzb2NrZXQgdmFsdWUuIElmIHRoZSBzb2NrZXQgaXMgY29ubmVjdGVkLFxuICAgKiB0aGlzIG1ldGhvZCBnb2VzIHRvIHRoZSBwZWVyIHNvY2tldCBhbmQgdGFrZSB0aGUgdmFsdWUuXG4gICAqIElmIHRoZSBwZWVyIHNvY2tldCBpcyBwYXJ0IG9mIGEgZnVuY3Rpb25hbCBub2RlLCB0aGUgcHJvY2VzcygpXG4gICAqIG1ldGhvZCBpcyBleGVjdXRlZCBiZWZvcmUgdGFraW5nIHRoZSB2YWx1ZVxuICAgKi9cbiAgZXZhbHVhdGUoKSB7XG4gICAgaWYgKHRoaXMucGVlciAhPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMucGVlci5ub2RlICYmIHRoaXMucGVlci5ub2RlLmZ1bmN0aW9uYWwpIHtcbiAgICAgICAgdGhpcy5wZWVyLm5vZGUucHJvY2VzcygpO1xuICAgICAgfVxuICAgICAgdGhpcy50eXBlID0gdGhpcy5wZWVyLnR5cGU7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5wZWVyLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb25uZWN0IHRoaXMgc29ja2V0IHRvIGFub3RoZXIgKG91dHB1dCkgc29ja2V0XG4gICAqIEBwYXJhbSB7U29ja2V0fSBzb2NrZXQgVGhlIG91dHB1dCBzb2NrZXQgdG8gY29ubmVjdFxuICAgKi9cbiAgY29ubmVjdChzb2NrZXQpIHtcbiAgICB0aGlzLnBlZXIgPSBzb2NrZXQ7XG4gICAgaWYgKHNvY2tldC5wZWVycy5maW5kKChzKSA9PiBzID09PSB0aGlzKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzb2NrZXQucGVlcnMucHVzaCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGlzY29ubmVjdHMgdGhpcyBzb2NrZXQgZnJvbSBpdHMgcGVlclxuICAgKi9cbiAgZGlzY29ubmVjdCgpIHtcbiAgICBpZiAodGhpcy5wZWVyKSB7XG4gICAgICBsZXQgaW5kZXggPSB0aGlzLnBlZXIucGVlcnMuZmluZEluZGV4KChzKSA9PiBzID09PSB0aGlzKTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5wZWVyLnBlZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucGVlciA9IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGlzIGEgb3V0cHV0IHZhbHVlIHNvY2tldCBhbmQgcmVwcmVzZW50IGFuIG91dHB1dFxuICogdmFsdWUgZm9yIHRoZSBub2RlLiBPdXRwdXQgdmFsdWUgc29ja2V0IGNhbiBiZSBjb25uZWN0ZWQgdG9cbiAqIG1hbnkgcGVlciBpbnB1dCB2YWx1ZSBzb2NrZXRzLCBiZWNhdXNlIG1hbnkgc29ja2V0IHdvdWxkIGxpa2VcbiAqIHRvIHRha2UgdGhlIHZhbHVlIGZyb20gdGhpcy5cbiAqL1xuZXhwb3J0IGNsYXNzIE91dHB1dFNvY2tldCBleHRlbmRzIFZhbHVlU29ja2V0IHtcbiAgLyoqIEEgbGlzdCBvZiBpbnB1dCB2YWx1ZSBjb25uZWN0ZWQgc29ja2V0cyAqL1xuICAjcGVlcnMgPSBbXTtcblxuICAvKipcbiAgICogQ29uc3RydWN0IGEgbmV3IE91dHB1dFNvY2tldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc29ja2V0XG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgcGFyZW50IG5vZGVcbiAgICogQHBhcmFtIHtUeXBlfSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBzb2NrZXRcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlIFRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBzb2NrZXRcbiAgICovXG4gIGNvbnN0cnVjdG9yKG5hbWUsIG5vZGUsIHR5cGUgPSB0eXBlKFR5cGVzLk5VTUJFUiwgZmFsc2UpLCB2YWx1ZSA9IDApIHtcbiAgICBzdXBlcihuYW1lLCBub2RlLCB0eXBlLCB2YWx1ZSk7XG4gIH1cbiAgZ2V0IHBlZXJzKCkge1xuICAgIHJldHVybiB0aGlzLiNwZWVycztcbiAgfVxuICBzZXQgcGVlcnModmFsKSB7XG4gICAgdGhpcy4jcGVlcnMgPSB2YWw7XG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdHMgdGhpcyBzb2NrZXQgdG8gYSBpbnB1dCBzb2NrZXRcbiAgICogQHBhcmFtIHtTb2NrZXR9IHNvY2tldCBTb2NrZXQgdG8gY29ubmVjdCB0b1xuICAgKi9cbiAgY29ubmVjdChzb2NrZXQpIHtcbiAgICBpZiAodGhpcy5wZWVycy5maW5kKChzKSA9PiBzID09PSBzb2NrZXQpID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucGVlcnMucHVzaChzb2NrZXQpO1xuICAgIH1cbiAgICBzb2NrZXQucGVlciA9IHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogRGlzY29ubmVjdCB0aGlzIHNvY2tldCBmcm9tIGEgc3BlY2lmaWMgaW5wdXQgcGVlclxuICAgKiBAcGFyYW0ge1NvY2tldH0gc29ja2V0IFRoZSBzb2NrZXQgdG8gZGlzY29ubmVjdFxuICAgKi9cbiAgZGlzY29ubmVjdChzb2NrZXQpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnBlZXJzLmZpbmRJbmRleCgocykgPT4gcyA9PT0gc29ja2V0KTtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5wZWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgc29ja2V0LnBlZXIgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEEgZmxvdyBzb2NrZXQgaXMgYSBzb2NrZXQgdG8gY29ubmVjdCB0d28gbm9kZXMgaW5cbiAqIHRlcm1zIG9mIGV4ZWN1dGlvbiBmbG93XG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93U29ja2V0IGV4dGVuZHMgU29ja2V0IHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIG5ldyBGbG93U29ja2V0XG4gICAqIEBwYXJhbSB7c3Jpbmd9IG5hbWUgTmFtZSBvZiB0aGUgc29ja2V0XG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgcGFyZW50IG5vZGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG5hbWUsIG5vZGUpIHtcbiAgICBzdXBlcihuYW1lLCBub2RlKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50YSBhIHByZXYgc29ja2V0LCBhIHNvY2tldCB0aGF0XG4gKiBjYW4gYmUgY29ubmVjdGVkIHRvIG90aGVyIG5leHRzIHNvY2tldHMuIFRoZSBwcmV2IHNvY2tldFxuICogY2FiIGhhdmUgbWFueSBwZWVyIChuZXh0KSBzb2NrZXQgYmVjYXVzZSB0aGUgZXhlY3V0aW9uXG4gKiBjYW4gY29tZSBmcm9tIGFueXdoZXJlIGluIHRoZSBwcm9ncmFtXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmV2U29ja2V0IGV4dGVuZHMgRmxvd1NvY2tldCB7XG4gIC8qKiBMaXN0IG9mIChuZXh0KSBwZWVyIHNvY2tldHMgKi9cbiAgI3BlZXJzID0gW107XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIG5ldyBQcmV2U29ja2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIHNvY2tldFxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgUGFyZW50IG5vZGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG5hbWUsIG5vZGUpIHtcbiAgICBzdXBlcihuYW1lLCBub2RlKTtcbiAgfVxuICBnZXQgcGVlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BlZXJzO1xuICB9XG4gIHNldCBwZWVycyh2YWwpIHtcbiAgICB0aGlzLiNwZWVycyA9IHZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25uZWN0IHRoaXMgc29ja2V0IHRvIGEgbmV4dCBzb2NrZXRcbiAgICogQHBhcmFtIHtTb2NrZXR9IHNvY2tldCBUaGUgbmV4dCBzb2NrZXQgdG8gY29ubmVjdFxuICAgKi9cbiAgY29ubmVjdChzb2NrZXQpIHtcbiAgICBpZiAodGhpcy5wZWVycy5maW5kKChzKSA9PiBzID09PSBzb2NrZXQpID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucGVlcnMucHVzaChzb2NrZXQpO1xuICAgIH1cbiAgICBzb2NrZXQucGVlciA9IHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogRGlzY29ubmVjdCB0aGlzIHNvY2tldCBmcm9tIGEgbmV4dCBzb2NrZXRcbiAgICogQHBhcmFtIHtTb2NrZXR9IHNvY2tldCBUaGUgbmV4dCBzb2NrZXQgdG8gZGlzY29ubmVjdFxuICAgKi9cbiAgZGlzY29ubmVjdChzb2NrZXQpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnBlZXJzLmZpbmRJbmRleCgocykgPT4gcyA9PT0gc29ja2V0KTtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5wZWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgc29ja2V0LnBlZXIgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIHNvY2tldCB0byByZWRpcmVjdCB0aGUgZmxvd1xuICogdG8gYW5vdGhlciBub2RlIHZpYSBhIG5vZGUncyBwcmV2IHNvY2tldC4gVGhpcyBzb2NrZXQgY2FuXG4gKiBiZSBjb25uZWN0ZWQgdG8gb25seSBvbmUgKHByZXYpIHNvY2tldCwgYmVjYXVzZSB0aGUgcHJvZ3JhbVxuICogZmxvdyBoYXZlIHRvIGJlIHdlbGwgZGVmaW5lZFxuICovXG5leHBvcnQgY2xhc3MgTmV4dFNvY2tldCBleHRlbmRzIEZsb3dTb2NrZXQge1xuICAvKiogVGhlIHBlZXIgKHByZXYpIHNvY2tldCAqL1xuICAjcGVlciA9IG51bGw7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIG5ldyBOZXh0U29ja2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIHNvY2tldFxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIHBhcmVudCBub2RlIG9mIHRoZSBzb2NrZXRcbiAgICovXG4gIGNvbnN0cnVjdG9yKG5hbWUsIG5vZGUpIHtcbiAgICBzdXBlcihuYW1lLCBub2RlKTtcbiAgfVxuICBnZXQgcGVlcigpIHtcbiAgICByZXR1cm4gdGhpcy4jcGVlcjtcbiAgfVxuICBzZXQgcGVlcih2YWwpIHtcbiAgICB0aGlzLiNwZWVyID0gdmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbm5lY3QgdGhpcyBzb2NrZXQgdG8gYW5vdGhlciAocHJldikgc29ja2V0XG4gICAqIEBwYXJhbSB7U29ja2V0fSBzb2NrZXQgVGhlIHByZXYgc29ja2V0IHRvIGNvbm5lY3QgdG9cbiAgICovXG4gIGNvbm5lY3Qoc29ja2V0KSB7XG4gICAgdGhpcy5wZWVyID0gc29ja2V0O1xuICAgIGlmIChzb2NrZXQucGVlcnMuZmluZCgocykgPT4gcyA9PT0gdGhpcykgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc29ja2V0LnBlZXJzLnB1c2godGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2Nvbm5lY3QgdGhpcyBzb2NrZXQgZnJvbSB0aGUgcGVlclxuICAgKi9cbiAgZGlzY29ubmVjdCgpIHtcbiAgICBpZiAodGhpcy5wZWVyKSB7XG4gICAgICBsZXQgaW5kZXggPSB0aGlzLnBlZXIucGVlcnMuZmluZEluZGV4KChzKSA9PiBzID09PSB0aGlzKTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5wZWVyLnBlZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgICB0aGlzLnBlZXIgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBjbm9kZXNcbiAqXG4gKiBBIHJlcHJlc2VudGF0aW9uLWFnbm9zdGljIGxpYnJhcnkgdG8gZGVmaW5lIGFuZCBleGVjdXRlIG5vZGVzIGJhc2VkIHByb2Nlc3Nlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuLyoqXG4gKiBQb3NzaWJsZSB0eXBlcyBmb3IgdmFsdWVzXG4gKi9cbmV4cG9ydCBjb25zdCBUeXBlcyA9IHtcbiAgTlVNQkVSOiBcIm51bWJlclwiLFxuICBTVFJJTkc6IFwic3RyaW5nXCIsXG4gIEJPT0xFQU46IFwiYm9vbGVhblwiLFxuICBPQkpFQ1Q6IFwib2JqZWN0XCIsXG4gIEFOWTogXCJhbnlcIixcbn07XG5cbi8qKlxuICogQSB0eXBlIGlzIGEgdHlwZSBhbmQgYSBmbGFnIGluZGljYXRpbmcgdGhhdCB0aGVcbiAqIHR5cGUgaXMgYSBhcnJheSBvZiB0aGF0IGJhc2UgdHlwZVxuICovXG5leHBvcnQgY2xhc3MgVHlwZSB7XG4gIC8qKiBUaGUgYmFzZSB0eXBlICovXG4gICN0eXBlID0gVHlwZXMuTlVNQkVSO1xuXG4gIC8qKiBJcyB0aGlzIHR5cGUgYW4gYXJyYXkgb2YgYmFzZSB0eXBlPyAqL1xuICAjaXNBcnJheSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBuZXcgVHlwZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQXJyYXkgSXMgYXJyYXkgb2YgdGhpcyB0eXBlP1xuICAgKi9cbiAgY29uc3RydWN0b3IodHlwZSwgaXNBcnJheSkge1xuICAgIHRoaXMuI3R5cGUgPSB0eXBlO1xuICAgIHRoaXMuI2lzQXJyYXkgPSBpc0FycmF5O1xuICB9XG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLiN0eXBlO1xuICB9XG4gIHNldCB0eXBlKHZhbCkge1xuICAgIHRoaXMuI3R5cGUgPSB2YWw7XG4gIH1cbiAgZ2V0IGlzQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lzQXJyYXk7XG4gIH1cbiAgc2V0IGlzQXJyYXkodmFsKSB7XG4gICAgdGhpcy4jaXNBcnJheSA9IHZhbDtcbiAgfVxufVxuXG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgdHlwZVxuICogQHBhcmFtIHtUeXBlfSB0eXBlIFRoZSBiYXNlIHR5cGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNBcnJheSBUaGUgYXJyYXkgZmxhZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gdHlwZSh0eXBlLCBpc0FycmF5KSB7XG4gIHJldHVybiBuZXcgVHlwZSh0eXBlLCBpc0FycmF5KTtcbn1cbiIsIi8qKlxuICogY25vZGVzXG4gKlxuICogQSByZXByZXNlbnRhdGlvbi1hZ25vc3RpYyBsaWJyYXJ5IHRvIGRlZmluZSBhbmQgZXhlY3V0ZSBub2RlcyBiYXNlZCBwcm9jZXNzZXNcbiAqIExpY2Vuc2U6IE1JVFxuICogQXV0aG9yOiBNYXJjbyBKYWNvdm9uZVxuICogWWVhcjogMjAyMFxuICovXG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi4vLi4vY29yZS9ub2RlLmpzXCI7XG5pbXBvcnQgeyBJbnB1dFNvY2tldCwgT3V0cHV0U29ja2V0IH0gZnJvbSBcIi4uLy4uL2NvcmUvc29ja2V0LmpzXCI7XG5pbXBvcnQgeyB0eXBlLCBUeXBlcyB9IGZyb20gXCIuLi8uLi9jb3JlL3R5cGUuanNcIjtcblxuLyoqXG4gKiBTdXBwb3J0ZWQgY29tcGFyaXNpb24gdHlwZXNcbiAqL1xuZXhwb3J0IGNvbnN0IENvbXBhcmlzaW9uID0ge1xuICBFUVVBTDogXCJlcXVhbFwiLFxuICBHVDogXCJndFwiLFxuICBHVEU6IFwiZ3RlXCIsXG4gIExUOiBcImx0XCIsXG4gIExURTogXCJsdGVcIixcbiAgTk9UX0VRVUFMOiBcIm5vdF9lcXVhbFwiLFxufTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGltcGxlbWVudHMgYSBmdW5jdGlvbmFsIG5vZGUgZm9yIGNvbXBhaXJpbmcgbnVtZXJpYyB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBGQ29tcGFyZSBleHRlbmRzIE5vZGUge1xuICAvKiogQ29uZmlndXJlZCBjb21wYXJpc2lvbiBmb3IgdGhpcyBub2RlICovXG4gICNjb21wYXJpc2lvbiA9IENvbXBhcmlzaW9uLkVRVUFMO1xuXG4gIGNvbnN0cnVjdG9yKGNvbXBhcmlzaW9uID0gQ29tcGFyaXNpb24uRVFVQUwpIHtcbiAgICBzdXBlcihcIkZDb21wYXJlXCIpO1xuICAgIHRoaXMuI2NvbXBhcmlzaW9uID0gY29tcGFyaXNpb247XG5cbiAgICAvLyBUaGUgbm9kZSBpcyBwdXJlIGZ1bmN0aW9uYWxcbiAgICB0aGlzLmZ1bmN0aW9uYWwgPSB0cnVlO1xuICAgIC8vIERlZmF1bHQgdG8gdHdvIG51bWVyaWMgaW5wdXRzXG4gICAgdGhpcy5pbnB1dHMgPSBbXG4gICAgICBuZXcgSW5wdXRTb2NrZXQoXCJWYWwxXCIsIHRoaXMsIHR5cGUoVHlwZXMuTlVNQkVSLCBmYWxzZSksIDApLFxuICAgICAgbmV3IElucHV0U29ja2V0KFwiVmFsMlwiLCB0aGlzLCB0eXBlKFR5cGVzLk5VTUJFUiwgZmFsc2UpLCAwKSxcbiAgICBdO1xuICAgIHRoaXMub3V0cHV0cyA9IFtcbiAgICAgIG5ldyBPdXRwdXRTb2NrZXQoXCJWYWxcIiwgdGhpcywgdHlwZShUeXBlcy5CT09MRUFOLCBmYWxzZSksIDApLFxuICAgIF07XG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLm5leHRzID0gW107XG4gIH1cblxuICBnZXQgY29tcGFyaXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2NvbXBhcmlzaW9uO1xuICB9XG4gIHNldCBjb21wYXJpc2lvbih2YWwpIHtcbiAgICB0aGlzLiNjb21wYXJpc2lvbiA9IHZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcHJvY2VzcyBvdmVycmlkZVxuICAgKi9cbiAgcHJvY2VzcygpIHtcbiAgICB0aGlzLmV2YWx1YXRlSW5wdXRzKCk7XG4gICAgbGV0IHZhbDEgPSB0aGlzLmlucHV0KFwiVmFsMVwiKS52YWx1ZTtcbiAgICBsZXQgdmFsMiA9IHRoaXMuaW5wdXQoXCJWYWwyXCIpLnZhbHVlO1xuXG4gICAgbGV0IHJldDtcbiAgICBzd2l0Y2ggKHRoaXMuY29tcGFyaXNpb24pIHtcbiAgICAgIGNhc2UgQ29tcGFyaXNpb24uRVFVQUw6IHtcbiAgICAgICAgcmV0ID0gdmFsMSA9PT0gdmFsMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIENvbXBhcmlzaW9uLk5PVF9FUVVBTDoge1xuICAgICAgICByZXQgPSB2YWwxICE9PSB2YWwyO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgQ29tcGFyaXNpb24uR1Q6IHtcbiAgICAgICAgcmV0ID0gdmFsMSA+IHZhbDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBDb21wYXJpc2lvbi5HVEU6IHtcbiAgICAgICAgcmV0ID0gdmFsMSA+PSB2YWwyO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgQ29tcGFyaXNpb24uTFQ6IHtcbiAgICAgICAgcmV0ID0gdmFsMSA8IHZhbDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBDb21wYXJpc2lvbi5MVEU6IHtcbiAgICAgICAgcmV0ID0gdmFsMSA8PSB2YWwyO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgXCJDb21wYXJpc2lvbiB0eXBlIG5vdCB2YWxpZFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub3V0cHV0KFwiVmFsXCIpLnZhbHVlID0gcmV0O1xuICB9XG5cbiAgZ2V0IGNvbXBhcmlzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLiNjb21wYXJpc2lvbjtcbiAgfVxuICBzZXQgY29tcGFyaXNpb24odmFsKSB7XG4gICAgdGhpcy4jY29tcGFyaXNpb24gPSB2YWw7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVjdGlvbiB0byBjcmVhdGUgdGhlIG5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZjb21wYXJlTm9kZSgpIHtcbiAgcmV0dXJuIG5ldyBGQ29tcGFyZSgpO1xufVxuIiwiLyoqXG4gKiBjbm9kZXNcbiAqXG4gKiBBIHJlcHJlc2VudGF0aW9uLWFnbm9zdGljIGxpYnJhcnkgdG8gZGVmaW5lIGFuZCBleGVjdXRlIG5vZGVzIGJhc2VkIHByb2Nlc3Nlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgRkNvbXBhcmUgfSBmcm9tIFwiLi9mY29tcGFyZS5qc1wiO1xuaW1wb3J0IHsgQ29tcGFyaXNpb24gfSBmcm9tIFwiLi9mY29tcGFyZS5qc1wiO1xuXG4vKipcbiAqIFRoaXMgY2xhc3Mgb3ZlcnJpZGUgdGhlIEZDb21wYXJlIG5vZGUgd2l0aCBhIGNvbXBhcmlzaW9uIG9mIEVRVUFMXG4gKi9cbmV4cG9ydCBjbGFzcyBGRXF1YWwgZXh0ZW5kcyBGQ29tcGFyZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKENvbXBhcmlzaW9uLkVRVUFMKTtcbiAgICB0aGlzLm5hbWUgPSBcIkZFcXVhbFwiO1xuICB9XG59XG5cbi8qKlxuICogSGVscGVyIGZ1Y3Rpb24gdG8gY3JlYXRlIHRoZSBub2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmZXF1YWxOb2RlKCkge1xuICByZXR1cm4gbmV3IEZFcXVhbCgpO1xufVxuIiwiLyoqXG4gKiBjbm9kZXNcbiAqXG4gKiBBIHJlcHJlc2VudGF0aW9uLWFnbm9zdGljIGxpYnJhcnkgdG8gZGVmaW5lIGFuZCBleGVjdXRlIG5vZGVzIGJhc2VkIHByb2Nlc3Nlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgRkNvbXBhcmUgfSBmcm9tIFwiLi9mY29tcGFyZS5qc1wiO1xuaW1wb3J0IHsgQ29tcGFyaXNpb24gfSBmcm9tIFwiLi9mY29tcGFyZS5qc1wiO1xuXG4vKipcbiAqIFRoaXMgY2xhc3Mgb3ZlcnJpZGUgdGhlIEZDb21wYXJlIG5vZGUgd2l0aCBhIGNvbXBhcmlzaW9uIG9mIEdUXG4gKi9cbmV4cG9ydCBjbGFzcyBGR1QgZXh0ZW5kcyBGQ29tcGFyZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKENvbXBhcmlzaW9uLkdUKTtcbiAgICB0aGlzLm5hbWUgPSBcIkZHVFwiO1xuICB9XG59XG5cbi8qKlxuICogSGVscGVyIGZ1Y3Rpb24gdG8gY3JlYXRlIHRoZSBub2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmZ3ROb2RlKCkge1xuICByZXR1cm4gbmV3IEZHVCgpO1xufVxuIiwiLyoqXG4gKiBjbm9kZXNcbiAqXG4gKiBBIHJlcHJlc2VudGF0aW9uLWFnbm9zdGljIGxpYnJhcnkgdG8gZGVmaW5lIGFuZCBleGVjdXRlIG5vZGVzIGJhc2VkIHByb2Nlc3Nlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgRkNvbXBhcmUgfSBmcm9tIFwiLi9mY29tcGFyZS5qc1wiO1xuaW1wb3J0IHsgQ29tcGFyaXNpb24gfSBmcm9tIFwiLi9mY29tcGFyZS5qc1wiO1xuXG4vKipcbiAqIFRoaXMgY2xhc3Mgb3ZlcnJpZGUgdGhlIEZDb21wYXJlIG5vZGUgd2l0aCBhIGNvbXBhcmlzaW9uIG9mIEdURVxuICovXG5leHBvcnQgY2xhc3MgRkdURSBleHRlbmRzIEZDb21wYXJlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoQ29tcGFyaXNpb24uR1RFKTtcbiAgICB0aGlzLm5hbWUgPSBcIkZHVEVcIjtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBmdWN0aW9uIHRvIGNyZWF0ZSB0aGUgbm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmd0ZU5vZGUoKSB7XG4gIHJldHVybiBuZXcgRkdURSgpO1xufVxuIiwiLyoqXG4gKiBjbm9kZXNcbiAqXG4gKiBBIHJlcHJlc2VudGF0aW9uLWFnbm9zdGljIGxpYnJhcnkgdG8gZGVmaW5lIGFuZCBleGVjdXRlIG5vZGVzIGJhc2VkIHByb2Nlc3Nlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgRkNvbXBhcmUgfSBmcm9tIFwiLi9mY29tcGFyZS5qc1wiO1xuaW1wb3J0IHsgQ29tcGFyaXNpb24gfSBmcm9tIFwiLi9mY29tcGFyZS5qc1wiO1xuXG4vKipcbiAqIFRoaXMgY2xhc3Mgb3ZlcnJpZGUgdGhlIEZDb21wYXJlIG5vZGUgd2l0aCBhIGNvbXBhcmlzaW9uIG9mIEZMVFxuICovXG5leHBvcnQgY2xhc3MgRkxUIGV4dGVuZHMgRkNvbXBhcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihDb21wYXJpc2lvbi5MVCk7XG4gICAgdGhpcy5uYW1lID0gXCJGTFRcIjtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBmdWN0aW9uIHRvIGNyZWF0ZSB0aGUgbm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmx0Tm9kZSgpIHtcbiAgcmV0dXJuIG5ldyBGTFQoKTtcbn1cbiIsIi8qKlxuICogY25vZGVzXG4gKlxuICogQSByZXByZXNlbnRhdGlvbi1hZ25vc3RpYyBsaWJyYXJ5IHRvIGRlZmluZSBhbmQgZXhlY3V0ZSBub2RlcyBiYXNlZCBwcm9jZXNzZXNcbiAqIExpY2Vuc2U6IE1JVFxuICogQXV0aG9yOiBNYXJjbyBKYWNvdm9uZVxuICogWWVhcjogMjAyMFxuICovXG5cbmltcG9ydCB7IEZDb21wYXJlIH0gZnJvbSBcIi4vZmNvbXBhcmUuanNcIjtcbmltcG9ydCB7IENvbXBhcmlzaW9uIH0gZnJvbSBcIi4vZmNvbXBhcmUuanNcIjtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIG92ZXJyaWRlIHRoZSBGQ29tcGFyZSBub2RlIHdpdGggYSBjb21wYXJpc2lvbiBvZiBGTFRFXG4gKi9cbmV4cG9ydCBjbGFzcyBGTFRFIGV4dGVuZHMgRkNvbXBhcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihDb21wYXJpc2lvbi5MVEUpO1xuICAgIHRoaXMubmFtZSA9IFwiRkxURVwiO1xuICB9XG59XG5cbi8qKlxuICogSGVscGVyIGZ1Y3Rpb24gdG8gY3JlYXRlIHRoZSBub2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbHRlTm9kZSgpIHtcbiAgcmV0dXJuIG5ldyBGTFRFKCk7XG59XG4iLCIvKipcbiAqIGNub2Rlc1xuICpcbiAqIEEgcmVwcmVzZW50YXRpb24tYWdub3N0aWMgbGlicmFyeSB0byBkZWZpbmUgYW5kIGV4ZWN1dGUgbm9kZXMgYmFzZWQgcHJvY2Vzc2VzXG4gKiBMaWNlbnNlOiBNSVRcbiAqIEF1dGhvcjogTWFyY28gSmFjb3ZvbmVcbiAqIFllYXI6IDIwMjBcbiAqL1xuXG5pbXBvcnQgeyBGQ29tcGFyZSB9IGZyb20gXCIuL2Zjb21wYXJlLmpzXCI7XG5pbXBvcnQgeyBDb21wYXJpc2lvbiB9IGZyb20gXCIuL2Zjb21wYXJlLmpzXCI7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBvdmVycmlkZSB0aGUgRkNvbXBhcmUgbm9kZSB3aXRoIGEgY29tcGFyaXNpb24gb2YgTk9UX0VRVUFMXG4gKi9cbmV4cG9ydCBjbGFzcyBGTm90RXF1YWwgZXh0ZW5kcyBGQ29tcGFyZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKENvbXBhcmlzaW9uLk5PVF9FUVVBTCk7XG4gICAgdGhpcy5uYW1lID0gXCJGTm90RXF1YWxcIjtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBmdWN0aW9uIHRvIGNyZWF0ZSB0aGUgbm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm5vdGVxdWFsTm9kZSgpIHtcbiAgcmV0dXJuIG5ldyBGTm90RXF1YWwoKTtcbn1cbiIsIi8qKlxuICogY25vZGVzXG4gKlxuICogQSByZXByZXNlbnRhdGlvbi1hZ25vc3RpYyBsaWJyYXJ5IHRvIGRlZmluZSBhbmQgZXhlY3V0ZSBub2RlcyBiYXNlZCBwcm9jZXNzZXNcbiAqIExpY2Vuc2U6IE1JVFxuICogQXV0aG9yOiBNYXJjbyBKYWNvdm9uZVxuICogWWVhcjogMjAyMFxuICovXG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi4vY29yZS9ub2RlLmpzXCI7XG5pbXBvcnQgeyBOZXh0U29ja2V0LCBQcmV2U29ja2V0IH0gZnJvbSBcIi4uL2NvcmUvc29ja2V0LmpzXCI7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGEgc3Vicm91dGluZS9mdW5jdGlvbiBjYWxsXG4gKi9cbmV4cG9ydCBjbGFzcyBDYWxsIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiQ2FsbFwiKTtcbiAgICB0aGlzLmlucHV0cyA9IFtdO1xuICAgIHRoaXMub3V0cHV0cyA9IFtdO1xuICAgIHRoaXMubmV4dHMgPSBbbmV3IE5leHRTb2NrZXQoXCJPdXRcIiwgdGhpcyksIG5ldyBOZXh0U29ja2V0KFwiQ2FsbFwiLCB0aGlzKV07XG4gICAgdGhpcy5wcmV2ID0gbmV3IFByZXZTb2NrZXQoXCJJblwiLCB0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcHJvY2VzcyBmdW5jdGlvblxuICAgKi9cbiAgcHJvY2VzcygpIHtcbiAgICAvLyBTYXZlIHRoZSBjdXJyZW50IHByb2dyYW0ncyBub2RlXG4gICAgbGV0IHByZXZDdXJyZW50Tm9kZSA9IHRoaXMucHJvZ3JhbS5jdXJyZW50Tm9kZTtcblxuICAgIC8vIEV4ZWN1dGUgYSBzdWIgcHJvZ3JhbSBiZWdpbm5pbmcgb24gdGhhdCBub2RlXG4gICAgdGhpcy5wcm9ncmFtLnByb2Nlc3NGcm9tKHRoaXMubmV4dChcIkNhbGxcIikucGVlci5ub2RlKTtcblxuICAgIC8vIFJlc3RvcmUgdGhlIGN1cnJlbnQgcHJvZ3JhbSdzIG5vZGVcbiAgICB0aGlzLnByb2dyYW0uY3VycmVudE5vZGUgPSBwcmV2Q3VycmVudE5vZGU7XG5cbiAgICByZXR1cm4gdGhpcy5nZXRGbG93UmVzdWx0KHRoaXMubmV4dChcIk91dFwiKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIG5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGxOb2RlKCkge1xuICByZXR1cm4gbmV3IENhbGwoKTtcbn1cbiIsIi8qKlxuICogY25vZGVzXG4gKlxuICogQSByZXByZXNlbnRhdGlvbi1hZ25vc3RpYyBsaWJyYXJ5IHRvIGRlZmluZSBhbmQgZXhlY3V0ZSBub2RlcyBiYXNlZCBwcm9jZXNzZXNcbiAqIExpY2Vuc2U6IE1JVFxuICogQXV0aG9yOiBNYXJjbyBKYWNvdm9uZVxuICogWWVhcjogMjAyMFxuICovXG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi4vY29yZS9ub2RlLmpzXCI7XG5pbXBvcnQgeyBJbnB1dFNvY2tldCwgTmV4dFNvY2tldCwgUHJldlNvY2tldCB9IGZyb20gXCIuLi9jb3JlL3NvY2tldC5qc1wiO1xuaW1wb3J0IHsgdHlwZSwgVHlwZXMgfSBmcm9tIFwiLi4vY29yZS90eXBlLmpzXCI7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGEgY25vZGUgdGhhdCBwcmludCB0byB0aGVcbiAqIGNvbnNvbGUgdGhlIGlucHV0IHZhbHVlXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25zb2xlIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiQ29uc29sZVwiKTtcbiAgICB0aGlzLmlucHV0cyA9IFtuZXcgSW5wdXRTb2NrZXQoXCJWYWxcIiwgdGhpcywgdHlwZShUeXBlcy5BTlksIGZhbHNlKSwgMCldO1xuICAgIHRoaXMub3V0cHV0cyA9IFtdO1xuICAgIHRoaXMubmV4dHMgPSBbbmV3IE5leHRTb2NrZXQoXCJPdXRcIiwgdGhpcyldO1xuICAgIHRoaXMucHJldiA9IG5ldyBQcmV2U29ja2V0KFwiSW5cIiwgdGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHByb2Nlc3MgbWV0aG9kXG4gICAqL1xuICBwcm9jZXNzKCkge1xuICAgIHRoaXMuZXZhbHVhdGVJbnB1dHMoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0KFwiVmFsXCIpLnZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5nZXRGbG93UmVzdWx0KHRoaXMubmV4dChcIk91dFwiKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBub2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zb2xlTm9kZSgpIHtcbiAgcmV0dXJuIG5ldyBDb25zb2xlKCk7XG59XG4iLCIvKipcbiAqIGNub2Rlc1xuICpcbiAqIEEgcmVwcmVzZW50YXRpb24tYWdub3N0aWMgbGlicmFyeSB0byBkZWZpbmUgYW5kIGV4ZWN1dGUgbm9kZXMgYmFzZWQgcHJvY2Vzc2VzXG4gKiBMaWNlbnNlOiBNSVRcbiAqIEF1dGhvcjogTWFyY28gSmFjb3ZvbmVcbiAqIFllYXI6IDIwMjBcbiAqL1xuXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4uL2NvcmUvbm9kZS5qc1wiO1xuaW1wb3J0IHsgSW5wdXRTb2NrZXQsIE91dHB1dFNvY2tldCB9IGZyb20gXCIuLi9jb3JlL3NvY2tldC5qc1wiO1xuaW1wb3J0IHsgVHlwZSwgVHlwZXMgfSBmcm9tIFwiLi4vY29yZS90eXBlLmpzXCI7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGEgZnVuY3Rpb25hbCBHZXRWYXIgbm9kZSxcbiAqIGEgbm9kZSB0byByZWFkIGEgdmFyaWFibGUncyB2YWx1ZSBmcm9tIHRoZSBnbG9iYWxcbiAqIHByb2dyYW0ncyBzcGFjZVxuICovXG5leHBvcnQgY2xhc3MgRkdldHZhciBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkZHZXR2YXJcIik7XG4gICAgdGhpcy5mdW5jdGlvbmFsID0gdHJ1ZTtcbiAgICB0aGlzLmlucHV0cyA9IFtcbiAgICAgIG5ldyBJbnB1dFNvY2tldChcIk5hbWVcIiwgdGhpcywgbmV3IFR5cGUoVHlwZXMuU1RSSU5HLCBmYWxzZSksIFwiXCIpLFxuICAgIF07XG4gICAgdGhpcy5vdXRwdXRzID0gW1xuICAgICAgbmV3IE91dHB1dFNvY2tldChcIlZhbFwiLCB0aGlzLCBuZXcgVHlwZShUeXBlcy5BTlksIGZhbHNlKSwgXCJcIiksXG4gICAgXTtcbiAgICB0aGlzLm5leHRzID0gW107XG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcHJvY2VzcyBtZXRob2RcbiAgICovXG4gIHByb2Nlc3MoKSB7XG4gICAgdGhpcy5ldmFsdWF0ZUlucHV0cygpO1xuXG4gICAgbGV0IHZhck5hbWUgPSB0aGlzLmlucHV0KFwiTmFtZVwiKS52YWx1ZTtcbiAgICB0aGlzLm91dHB1dChcIlZhbFwiKS52YWx1ZSA9IHRoaXMucHJvZ3JhbS52YXJzLmdldCh2YXJOYW1lKTtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIG5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZnZXR2YXJOb2RlKCkge1xuICByZXR1cm4gbmV3IEZHZXR2YXIoKTtcbn1cbiIsIi8qKlxuICogY25vZGVzXG4gKlxuICogQSByZXByZXNlbnRhdGlvbi1hZ25vc3RpYyBsaWJyYXJ5IHRvIGRlZmluZSBhbmQgZXhlY3V0ZSBub2RlcyBiYXNlZCBwcm9jZXNzZXNcbiAqIExpY2Vuc2U6IE1JVFxuICogQXV0aG9yOiBNYXJjbyBKYWNvdm9uZVxuICogWWVhcjogMjAyMFxuICovXG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi4vY29yZS9ub2RlLmpzXCI7XG5pbXBvcnQge1xuICBJbnB1dFNvY2tldCxcbiAgTmV4dFNvY2tldCxcbiAgT3V0cHV0U29ja2V0LFxuICBQcmV2U29ja2V0LFxufSBmcm9tIFwiLi4vY29yZS9zb2NrZXQuanNcIjtcbmltcG9ydCB7IFR5cGUsIFR5cGVzIH0gZnJvbSBcIi4uL2NvcmUvdHlwZS5qc1wiO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaW1wbGVtZW50cyBhIG5vZGUgdGhhdCBpcyBhYmxlIHRvXG4gKiBpdGVyYXRlIG92ZXIgYSByYW5nZSBvZiBpbnRlZ2VycywgbGlrZSB0aGUgZm9ybVxuICogZm9yKGxldCBpPXN0YXJ0OyBpPGVuZDsgaSsrKSBkbygpO1xuICovXG5leHBvcnQgY2xhc3MgRm9yIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiRm9yXCIpO1xuICAgIHRoaXMuaW5wdXRzID0gW1xuICAgICAgbmV3IElucHV0U29ja2V0KFwiRnJvbVwiLCB0aGlzLCBuZXcgVHlwZShUeXBlcy5OVU1CRVIsIDApLCAwKSxcbiAgICAgIG5ldyBJbnB1dFNvY2tldChcIlRvXCIsIHRoaXMsIG5ldyBUeXBlKFR5cGVzLk5VTUJFUiwgMCksIDApLFxuICAgIF07XG4gICAgdGhpcy5vdXRwdXRzID0gW1xuICAgICAgbmV3IE91dHB1dFNvY2tldChcIkluZGV4XCIsIHRoaXMsIG5ldyBUeXBlKFR5cGVzLk5VTUJFUiwgZmFsc2UpLCAwKSxcbiAgICBdO1xuICAgIHRoaXMubmV4dHMgPSBbbmV3IE5leHRTb2NrZXQoXCJPdXRcIiwgdGhpcyksIG5ldyBOZXh0U29ja2V0KFwiRG9cIiwgdGhpcyldO1xuICAgIHRoaXMucHJldiA9IG5ldyBQcmV2U29ja2V0KFwiSW5cIiwgdGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHByb2Nlc3MgZnVuY3Rpb25cbiAgICovXG4gIHByb2Nlc3MoKSB7XG4gICAgdGhpcy5ldmFsdWF0ZUlucHV0cygpO1xuXG4gICAgLy8gU2F2ZSB0aGUgY3VycmVudCBwcm9ncmFtJ3Mgbm9kZVxuICAgIGxldCBwcmV2Q3VycmVudE5vZGUgPSB0aGlzLnByb2dyYW0uY3VycmVudE5vZGU7XG5cbiAgICAvLyBTZXQgdGhlIFwiSW5kZXhcIiBvdXRwdXQgdmFsdWUgdG8gSW5kZXhcbiAgICB0aGlzLm91dHB1dChcIkluZGV4XCIpLnZhbHVlID0gdGhpcy5pbnB1dChcIkZyb21cIikudmFsdWU7XG5cbiAgICAvLyBSZSBldmFsdWF0ZSBpbnB1dHMgaW4gY2FzZSBvZiBDb25kaXRpb24gZGVwZW5kcyBvbiBJbmRleCBvdXRwdXRcbiAgICB0aGlzLmV2YWx1YXRlSW5wdXRzKCk7XG5cbiAgICAvLyBMZXQncyBjeWNsZSBmcm9tIFwiRnJvbVwiIHRvIFwiVG9cIiB2YWx1ZXNcbiAgICBmb3IgKFxuICAgICAgbGV0IGluZGV4ID0gdGhpcy5pbnB1dChcIkZyb21cIikudmFsdWU7XG4gICAgICBpbmRleCA8IHRoaXMuaW5wdXQoXCJUb1wiKS52YWx1ZTtcbiAgICAgIGluZGV4KytcbiAgICApIHtcbiAgICAgIC8vIElmIHRoZXJlJ3MgYSBub2RlIGNvbm5lY3RlZCB0byB0aGUgXCJEb1wiIG5leHQgc29ja2V0Li4uXG4gICAgICBpZiAodGhpcy5uZXh0KFwiRG9cIikucGVlciAhPT0gbnVsbCAmJiB0aGlzLm5leHQoXCJEb1wiKS5wZWVyLm5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgLy8gU2V0IHRoZSBcIkluZGV4XCIgb3V0cHV0IHZhbHVlIHRvIEluZGV4XG4gICAgICAgIHRoaXMub3V0cHV0KFwiSW5kZXhcIikudmFsdWUgPSBpbmRleDtcblxuICAgICAgICAvLyBFeGVjdXRlIGEgc3ViIHByb2dyYW0gYmVnaW5uaW5nIG9uIHRoYXQgbm9kZVxuICAgICAgICB0aGlzLnByb2dyYW0ucHJvY2Vzc0Zyb20odGhpcy5uZXh0KFwiRG9cIikucGVlci5ub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXN0b3JlIHRoZSBjdXJyZW50IHByb2dyYW0ncyBub2RlXG4gICAgdGhpcy5wcm9ncmFtLmN1cnJlbnROb2RlID0gcHJldkN1cnJlbnROb2RlO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0Rmxvd1Jlc3VsdCh0aGlzLm5leHQoXCJPdXRcIikpO1xuICB9XG59XG5cbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBub2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JOb2RlKCkge1xuICByZXR1cm4gbmV3IEZvcigpO1xufVxuIiwiLyoqXG4gKiBjbm9kZXNcbiAqXG4gKiBBIHJlcHJlc2VudGF0aW9uLWFnbm9zdGljIGxpYnJhcnkgdG8gZGVmaW5lIGFuZCBleGVjdXRlIG5vZGVzIGJhc2VkIHByb2Nlc3Nlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuLi9jb3JlL25vZGUuanNcIjtcbmltcG9ydCB7XG4gIElucHV0U29ja2V0LFxuICBOZXh0U29ja2V0LFxuICBQcmV2U29ja2V0LFxuICBPdXRwdXRTb2NrZXQsXG59IGZyb20gXCIuLi9jb3JlL3NvY2tldC5qc1wiO1xuaW1wb3J0IHsgVHlwZSwgVHlwZXMgfSBmcm9tIFwiLi4vY29yZS90eXBlLmpzXCI7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGEgbm9kZSB0byBnZXQgYSB2YXJpYWJsZSdzIHZhbHVlXG4gKiBpbiB0aGUgcHJvZ3JhbSdzIGdsb2JhbCBzcGFjZS4gVGhpcyBub2RlIGhhcyBhIGZ1bmN0aW9uYWxcbiAqIGNvdW50ZXJwYXJ0IG5hYW1lZCBGR2V0dmFyXG4gKi9cbmV4cG9ydCBjbGFzcyBHZXR2YXIgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJHZXR2YXJcIik7XG4gICAgdGhpcy5pbnB1dHMgPSBbXG4gICAgICBuZXcgSW5wdXRTb2NrZXQoXCJOYW1lXCIsIHRoaXMsIG5ldyBUeXBlKFR5cGVzLlNUUklORywgZmFsc2UpLCBcIlwiKSxcbiAgICBdO1xuICAgIHRoaXMub3V0cHV0cyA9IFtcbiAgICAgIG5ldyBPdXRwdXRTb2NrZXQoXCJWYWxcIiwgdGhpcywgbmV3IFR5cGUoVHlwZXMuQU5ZLCBmYWxzZSksIFwiXCIpLFxuICAgIF07XG4gICAgdGhpcy5uZXh0cyA9IFtuZXcgTmV4dFNvY2tldChcIk91dFwiLCB0aGlzKV07XG4gICAgdGhpcy5wcmV2ID0gbmV3IFByZXZTb2NrZXQoXCJJblwiLCB0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcHJvY2VzcyBmdW5jdGlvblxuICAgKi9cbiAgcHJvY2VzcygpIHtcbiAgICB0aGlzLmV2YWx1YXRlSW5wdXRzKCk7XG5cbiAgICBsZXQgdmFyTmFtZSA9IHRoaXMuaW5wdXQoXCJOYW1lXCIpLnZhbHVlO1xuICAgIHRoaXMub3V0cHV0KFwiVmFsXCIpLnZhbHVlID0gdGhpcy5wcm9ncmFtLnZhcnMuZ2V0KHZhck5hbWUpO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0Rmxvd1Jlc3VsdCh0aGlzLm5leHQoXCJPdXRcIikpO1xuICB9XG59XG5cbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBub2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXR2YXJOb2RlKCkge1xuICByZXR1cm4gbmV3IEdldHZhcigpO1xufVxuIiwiLyoqXG4gKiBjbm9kZXNcbiAqXG4gKiBBIHJlcHJlc2VudGF0aW9uLWFnbm9zdGljIGxpYnJhcnkgdG8gZGVmaW5lIGFuZCBleGVjdXRlIG5vZGVzIGJhc2VkIHByb2Nlc3Nlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuLi9jb3JlL25vZGUuanNcIjtcbmltcG9ydCB7XG4gIElucHV0U29ja2V0LFxuICBOZXh0U29ja2V0IGFzIE5leHRTb2NrZXQsXG4gIFByZXZTb2NrZXQsXG59IGZyb20gXCIuLi9jb3JlL3NvY2tldC5qc1wiO1xuaW1wb3J0IHsgVHlwZSwgVHlwZXMgfSBmcm9tIFwiLi4vY29yZS90eXBlLmpzXCI7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGEgbm9kZSB0aGF0IGlzIGFibGUgdG9cbiAqIHJlZGlyZWN0IHRoZSBmbG93IG9mIGV4ZWN1dGlvbiBiYXNlZCBvbiB0aGVcbiAqIFwiY29uZGl0aW9uXCIgaW5wdXQgdmFsdWVcbiAqL1xuZXhwb3J0IGNsYXNzIElmIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiSWZcIik7XG4gICAgdGhpcy5pbnB1dHMgPSBbXG4gICAgICBuZXcgSW5wdXRTb2NrZXQoXCJDb25kaXRpb25cIiwgdGhpcywgbmV3IFR5cGUoVHlwZXMuQk9PTEVBTiwgZmFsc2UpLCBmYWxzZSksXG4gICAgXTtcbiAgICB0aGlzLm91dHB1dHMgPSBbXTtcbiAgICB0aGlzLm5leHRzID0gW25ldyBOZXh0U29ja2V0KFwiVGhlblwiLCB0aGlzKSwgbmV3IE5leHRTb2NrZXQoXCJFbHNlXCIsIHRoaXMpXTtcbiAgICB0aGlzLnByZXYgPSBuZXcgUHJldlNvY2tldChcIkluXCIsIHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwcm9jZXNzIGZ1bmN0aW9uXG4gICAqL1xuICBwcm9jZXNzKCkge1xuICAgIHRoaXMuZXZhbHVhdGVJbnB1dHMoKTtcbiAgICBsZXQgZmxvdyA9IG51bGw7XG4gICAgaWYgKHRoaXMuaW5wdXQoXCJDb25kaXRpb25cIikudmFsdWUpIHtcbiAgICAgIGZsb3cgPSB0aGlzLm5leHQoXCJUaGVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbG93ID0gdGhpcy5uZXh0KFwiRWxzZVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXRGbG93UmVzdWx0KGZsb3cpO1xuICB9XG59XG5cbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBub2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZk5vZGUoKSB7XG4gIHJldHVybiBuZXcgSWYoKTtcbn1cbiIsIi8qKlxuICogY25vZGVzXG4gKlxuICogQSByZXByZXNlbnRhdGlvbi1hZ25vc3RpYyBsaWJyYXJ5IHRvIGRlZmluZSBhbmQgZXhlY3V0ZSBub2RlcyBiYXNlZCBwcm9jZXNzZXNcbiAqIExpY2Vuc2U6IE1JVFxuICogQXV0aG9yOiBNYXJjbyBKYWNvdm9uZVxuICogWWVhcjogMjAyMFxuICovXG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi4vLi4vY29yZS9ub2RlLmpzXCI7XG5pbXBvcnQgeyBJbnB1dFNvY2tldCwgT3V0cHV0U29ja2V0IH0gZnJvbSBcIi4uLy4uL2NvcmUvc29ja2V0LmpzXCI7XG5pbXBvcnQgeyB0eXBlLCBUeXBlcyB9IGZyb20gXCIuLi8uLi9jb3JlL3R5cGUuanNcIjtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGltcGxlbWVudHMgYSBmdW5jdGlvbmFsIG5vZGUgZm9yIGFkZGluZyBudW1lcmljIHZhbHVlcy5cbiAqIFN1cHBvcnRzIGEgaW5kZWZpbml0ZSBudW1iZXIgb2YgdmFsdWUgaW5wdXRzIGFuZCBvbmUgc2luZ2xlIG91dHB1dFxuICovXG5leHBvcnQgY2xhc3MgRkFkZCBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkZBZGRcIik7XG4gICAgLy8gVGhlIG5vZGUgaXMgcHVyZSBmdW5jdGlvbmFsXG4gICAgdGhpcy5mdW5jdGlvbmFsID0gdHJ1ZTtcblxuICAgIC8vIFRoaXMgbm9kZSBoYXMgYSB2YXJpYWJsZSBudW1iZXIgb2YgaW5wdXRzXG4gICAgdGhpcy5jYW5BZGRJbnB1dCA9IHRydWU7XG5cbiAgICAvLyBEZWZhdWx0IHRvIHR3byBudW1lcmljIGlucHV0c1xuICAgIHRoaXMuaW5wdXRzID0gW1xuICAgICAgbmV3IElucHV0U29ja2V0KFwiMFwiLCB0aGlzLCB0eXBlKFR5cGVzLk5VTUJFUiwgZmFsc2UpLCAwKSxcbiAgICAgIG5ldyBJbnB1dFNvY2tldChcIjFcIiwgdGhpcywgdHlwZShUeXBlcy5OVU1CRVIsIGZhbHNlKSwgMCksXG4gICAgXTtcbiAgICB0aGlzLm91dHB1dHMgPSBbXG4gICAgICBuZXcgT3V0cHV0U29ja2V0KFwiVmFsXCIsIHRoaXMsIHR5cGUoVHlwZXMuTlVNQkVSLCBmYWxzZSksIDApLFxuICAgIF07XG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLm5leHRzID0gW107XG4gIH1cblxuICAvKipcbiAgICogVGhlIHByb2Nlc3Mgb3ZlcnJpZGVcbiAgICovXG4gIHByb2Nlc3MoKSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgdGhpcy5ldmFsdWF0ZUlucHV0cygpO1xuICAgIGZvciAobGV0IGlucCBvZiB0aGlzLmlucHV0cykge1xuICAgICAgc3VtICs9IHBhcnNlRmxvYXQoaW5wLnZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5vdXRwdXQoXCJWYWxcIikudmFsdWUgPSBzdW07XG4gIH1cblxuICAvKipcbiAgICogQ2FuIHRoaXMgbm9kZSByZW1vdmUgYSBzcGVjaWZpYyBpbnB1dD9cbiAgICogSW4gdGhpcyBjYXNlLCB0aGVyZSBtdXN0IGJlIGF0IGxlYXN0IDIgaW5wdXRzXG4gICAqIEBwYXJhbSB7SW5wdXRzU29ja2V0fSBpbnB1dCBUaGUgaW5wdXQgdG8gcmVtb3ZlXG4gICAqL1xuICBjYW5SZW1vdmVJbnB1dChpbnB1dCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0cy5sZW5ndGggPiAyO1xuICB9XG59XG5cbi8qKlxuICogSGVscGVyIGZ1Y3Rpb24gdG8gY3JlYXRlIHRoZSBub2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYWRkTm9kZSgpIHtcbiAgcmV0dXJuIG5ldyBGQWRkKCk7XG59XG4iLCIvKipcbiAqIGNub2Rlc1xuICpcbiAqIEEgcmVwcmVzZW50YXRpb24tYWdub3N0aWMgbGlicmFyeSB0byBkZWZpbmUgYW5kIGV4ZWN1dGUgbm9kZXMgYmFzZWQgcHJvY2Vzc2VzXG4gKiBMaWNlbnNlOiBNSVRcbiAqIEF1dGhvcjogTWFyY28gSmFjb3ZvbmVcbiAqIFllYXI6IDIwMjBcbiAqL1xuXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4uLy4uL2NvcmUvbm9kZS5qc1wiO1xuaW1wb3J0IHsgSW5wdXRTb2NrZXQsIE91dHB1dFNvY2tldCB9IGZyb20gXCIuLi8uLi9jb3JlL3NvY2tldC5qc1wiO1xuaW1wb3J0IHsgdHlwZSwgVHlwZXMgfSBmcm9tIFwiLi4vLi4vY29yZS90eXBlLmpzXCI7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGEgZnVuY3Rpb25hbCBub2RlIGZvciBkaXZpZGUgbnVtZXJpYyB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBGRGl2IGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiRkRpdlwiKTtcblxuICAgIC8vIFRoZSBub2RlIGlzIHB1cmUgZnVuY3Rpb25hbFxuICAgIHRoaXMuZnVuY3Rpb25hbCA9IHRydWU7XG5cbiAgICAvLyBEZWZhdWx0IHRvIHR3byBudW1lcmljIGlucHV0c1xuICAgIHRoaXMuaW5wdXRzID0gW1xuICAgICAgbmV3IElucHV0U29ja2V0KFwiVmFsMVwiLCB0aGlzLCB0eXBlKFR5cGVzLk5VTUJFUiwgZmFsc2UpLCAwKSxcbiAgICAgIG5ldyBJbnB1dFNvY2tldChcIlZhbDJcIiwgdGhpcywgdHlwZShUeXBlcy5OVU1CRVIsIGZhbHNlKSwgMCksXG4gICAgXTtcblxuICAgIHRoaXMub3V0cHV0cyA9IFtcbiAgICAgIG5ldyBPdXRwdXRTb2NrZXQoXCJWYWxcIiwgdGhpcywgdHlwZShUeXBlcy5OVU1CRVIsIGZhbHNlKSwgMCksXG4gICAgXTtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIHRoaXMubmV4dHMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcHJvY2VzcyBvdmVycmlkZVxuICAgKi9cbiAgcHJvY2VzcygpIHtcbiAgICB0aGlzLmV2YWx1YXRlSW5wdXRzKCk7XG4gICAgdGhpcy5vdXRwdXQoXCJWYWxcIikudmFsdWUgPVxuICAgICAgcGFyc2VGbG9hdCh0aGlzLmlucHV0KFwiVmFsMVwiKS52YWx1ZSkgL1xuICAgICAgcGFyc2VGbG9hdCh0aGlzLmlucHV0KFwiVmFsMlwiKS52YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVjdGlvbiB0byBjcmVhdGUgdGhlIG5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZkaXZOb2RlKCkge1xuICByZXR1cm4gbmV3IEZEaXYoKTtcbn1cbiIsIi8qKlxuICogY25vZGVzXG4gKlxuICogQSByZXByZXNlbnRhdGlvbi1hZ25vc3RpYyBsaWJyYXJ5IHRvIGRlZmluZSBhbmQgZXhlY3V0ZSBub2RlcyBiYXNlZCBwcm9jZXNzZXNcbiAqIExpY2Vuc2U6IE1JVFxuICogQXV0aG9yOiBNYXJjbyBKYWNvdm9uZVxuICogWWVhcjogMjAyMFxuICovXG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi4vLi4vY29yZS9ub2RlLmpzXCI7XG5pbXBvcnQgeyBJbnB1dFNvY2tldCwgT3V0cHV0U29ja2V0IH0gZnJvbSBcIi4uLy4uL2NvcmUvc29ja2V0LmpzXCI7XG5pbXBvcnQgeyB0eXBlLCBUeXBlcyB9IGZyb20gXCIuLi8uLi9jb3JlL3R5cGUuanNcIjtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGltcGxlbWVudHMgYSBmdW5jdGlvbmFsIG5vZGUgZm9yIG11bHRpcGx5IG51bWVyaWMgdmFsdWVzLlxuICogU3VwcG9ydHMgYSBpbmRlZmluaXRlIG51bWJlciBvZiB2YWx1ZSBpbnB1dHMgYW5kIG9uZSBzaW5nbGUgb3V0cHV0XG4gKi9cbmV4cG9ydCBjbGFzcyBGTXVsIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiRk11bFwiKTtcbiAgICAvLyBUaGUgbm9kZSBpcyBwdXJlIGZ1bmN0aW9uYWxcbiAgICB0aGlzLmZ1bmN0aW9uYWwgPSB0cnVlO1xuXG4gICAgLy8gVGhpcyBub2RlIGhhcyBhIHZhcmlhYmxlIG51bWJlciBvZiBpbnB1dHNcbiAgICB0aGlzLmNhbkFkZElucHV0ID0gdHJ1ZTtcblxuICAgIC8vIERlZmF1bHQgdG8gdHdvIG51bWVyaWMgaW5wdXRzXG4gICAgdGhpcy5pbnB1dHMgPSBbXG4gICAgICBuZXcgSW5wdXRTb2NrZXQoXCIwXCIsIHRoaXMsIHR5cGUoVHlwZXMuTlVNQkVSLCBmYWxzZSksIDApLFxuICAgICAgbmV3IElucHV0U29ja2V0KFwiMVwiLCB0aGlzLCB0eXBlKFR5cGVzLk5VTUJFUiwgZmFsc2UpLCAwKSxcbiAgICBdO1xuICAgIHRoaXMub3V0cHV0cyA9IFtcbiAgICAgIG5ldyBPdXRwdXRTb2NrZXQoXCJWYWxcIiwgdGhpcywgdHlwZShUeXBlcy5OVU1CRVIsIGZhbHNlKSwgMCksXG4gICAgXTtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIHRoaXMubmV4dHMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcHJvY2VzcyBvdmVycmlkZVxuICAgKi9cbiAgcHJvY2VzcygpIHtcbiAgICBsZXQgbXVsID0gMTtcbiAgICB0aGlzLmV2YWx1YXRlSW5wdXRzKCk7XG4gICAgZm9yIChsZXQgaW5wIG9mIHRoaXMuaW5wdXRzKSB7XG4gICAgICBtdWwgKj0gcGFyc2VGbG9hdChpbnAudmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLm91dHB1dChcIlZhbFwiKS52YWx1ZSA9IG11bDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW4gdGhpcyBub2RlIHJlbW92ZSBhIHNwZWNpZmljIGlucHV0P1xuICAgKiBJbiB0aGlzIGNhc2UsIHRoZXJlIG11c3QgYmUgYXQgbGVhc3QgMiBpbnB1dHNcbiAgICogQHBhcmFtIHtJbnB1dHNTb2NrZXR9IGlucHV0IFRoZSBpbnB1dCB0byByZW1vdmVcbiAgICovXG4gIGNhblJlbW92ZUlucHV0KGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRzLmxlbmd0aCA+IDI7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVjdGlvbiB0byBjcmVhdGUgdGhlIG5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZtdWxOb2RlKCkge1xuICByZXR1cm4gbmV3IEZNdWwoKTtcbn1cbiIsIi8qKlxuICogY25vZGVzXG4gKlxuICogQSByZXByZXNlbnRhdGlvbi1hZ25vc3RpYyBsaWJyYXJ5IHRvIGRlZmluZSBhbmQgZXhlY3V0ZSBub2RlcyBiYXNlZCBwcm9jZXNzZXNcbiAqIExpY2Vuc2U6IE1JVFxuICogQXV0aG9yOiBNYXJjbyBKYWNvdm9uZVxuICogWWVhcjogMjAyMFxuICovXG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi4vLi4vY29yZS9ub2RlLmpzXCI7XG5pbXBvcnQgeyBJbnB1dFNvY2tldCwgT3V0cHV0U29ja2V0IH0gZnJvbSBcIi4uLy4uL2NvcmUvc29ja2V0LmpzXCI7XG5pbXBvcnQgeyB0eXBlLCBUeXBlcyB9IGZyb20gXCIuLi8uLi9jb3JlL3R5cGUuanNcIjtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGltcGxlbWVudHMgYSBmdW5jdGlvbmFsIG5vZGUgZm9yIFNxdWFyZSBSb290LlxuICovXG5leHBvcnQgY2xhc3MgRlNxcnQgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJGU3FydFwiKTtcblxuICAgIC8vIFRoZSBub2RlIGlzIHB1cmUgZnVuY3Rpb25hbFxuICAgIHRoaXMuZnVuY3Rpb25hbCA9IHRydWU7XG5cbiAgICAvLyBEZWZhdWx0IHRvIG9uZSBudW1lcmljIGlucHV0c1xuICAgIHRoaXMuaW5wdXRzID0gW25ldyBJbnB1dFNvY2tldChcIlZhbFwiLCB0aGlzLCB0eXBlKFR5cGVzLk5VTUJFUiwgZmFsc2UpLCAwKV07XG5cbiAgICB0aGlzLm91dHB1dHMgPSBbXG4gICAgICBuZXcgT3V0cHV0U29ja2V0KFwiVmFsXCIsIHRoaXMsIHR5cGUoVHlwZXMuTlVNQkVSLCBmYWxzZSksIDApLFxuICAgIF07XG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLm5leHRzID0gW107XG4gIH1cblxuICAvKipcbiAgICogVGhlIHByb2Nlc3Mgb3ZlcnJpZGVcbiAgICovXG4gIHByb2Nlc3MoKSB7XG4gICAgdGhpcy5ldmFsdWF0ZUlucHV0cygpO1xuICAgIHRoaXMub3V0cHV0KFwiVmFsXCIpLnZhbHVlID0gTWF0aC5zcXJ0KHBhcnNlRmxvYXQodGhpcy5pbnB1dChcIlZhbFwiKS52YWx1ZSkpO1xuICB9XG59XG5cbi8qKlxuICogSGVscGVyIGZ1Y3Rpb24gdG8gY3JlYXRlIHRoZSBub2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmc3FydE5vZGUoKSB7XG4gIHJldHVybiBuZXcgRlNxcnQoKTtcbn1cbiIsIi8qKlxuICogY25vZGVzXG4gKlxuICogQSByZXByZXNlbnRhdGlvbi1hZ25vc3RpYyBsaWJyYXJ5IHRvIGRlZmluZSBhbmQgZXhlY3V0ZSBub2RlcyBiYXNlZCBwcm9jZXNzZXNcbiAqIExpY2Vuc2U6IE1JVFxuICogQXV0aG9yOiBNYXJjbyBKYWNvdm9uZVxuICogWWVhcjogMjAyMFxuICovXG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi4vY29yZS9ub2RlLmpzXCI7XG5pbXBvcnQge1xuICBJbnB1dFNvY2tldCxcbiAgTmV4dFNvY2tldCxcbiAgUHJldlNvY2tldCxcbiAgT3V0cHV0U29ja2V0LFxufSBmcm9tIFwiLi4vY29yZS9zb2NrZXQuanNcIjtcbmltcG9ydCB7IFR5cGUsIFR5cGVzIH0gZnJvbSBcIi4uL2NvcmUvdHlwZS5qc1wiO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaW1wbGVtZW50cyBhIG5vZGUgdG8gc2V0IGEgdmFyaWFibGVcbiAqIHZhbHVlIGluIHRoZSBwcm9ncmFtJ3MgZ2xvYmFsIHNwYWNlLiBJZiB0aGUgdmFyaWFibGVcbiAqIGRvbid0IGV4aXN0cywgdGhlIHByb2Nlc3NvIGZ1bmN0aW9uIHdpbGwgY3JlYXRlIGl0XG4gKi9cbmV4cG9ydCBjbGFzcyBTZXR2YXIgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJTZXR2YXJcIik7XG4gICAgdGhpcy5pbnB1dHMgPSBbXG4gICAgICBuZXcgSW5wdXRTb2NrZXQoXCJOYW1lXCIsIHRoaXMsIG5ldyBUeXBlKFR5cGVzLk5VTUJFUiwgZmFsc2UpLCAwKSxcbiAgICAgIG5ldyBJbnB1dFNvY2tldChcIlZhbFwiLCB0aGlzLCBuZXcgVHlwZShUeXBlcy5OVU1CRVIsIGZhbHNlKSwgMCksXG4gICAgXTtcbiAgICB0aGlzLm91dHB1dHMgPSBbbmV3IE91dHB1dFNvY2tldChcIlZhbFwiLCB0aGlzLCB0eXBlb2YgXCJcIiwgXCJcIildO1xuICAgIHRoaXMubmV4dHMgPSBbbmV3IE5leHRTb2NrZXQoXCJPdXRcIiwgdGhpcyldO1xuICAgIHRoaXMucHJldiA9IG5ldyBQcmV2U29ja2V0KFwiSW5cIiwgdGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHByb2Nlc3MgZm1ldGhvZFxuICAgKi9cbiAgcHJvY2VzcygpIHtcbiAgICB0aGlzLmV2YWx1YXRlSW5wdXRzKCk7XG5cbiAgICBsZXQgdmFyTmFtZSA9IHRoaXMuaW5wdXQoXCJOYW1lXCIpLnZhbHVlO1xuICAgIGxldCB2YXJWYWwgPSB0aGlzLmlucHV0KFwiVmFsXCIpLnZhbHVlO1xuICAgIHRoaXMucHJvZ3JhbS52YXJzLnNldCh2YXJOYW1lLCB2YXJWYWwpO1xuICAgIHRoaXMub3V0cHV0KFwiVmFsXCIpLnZhbHVlID0gdmFyVmFsO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0Rmxvd1Jlc3VsdCh0aGlzLm5leHQoXCJPdXRcIikpO1xuICB9XG59XG5cbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBub2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXR2YXJOb2RlKCkge1xuICByZXR1cm4gbmV3IFNldHZhcigpO1xufVxuIiwiLyoqXG4gKiBjbm9kZXNcbiAqXG4gKiBBIHJlcHJlc2VudGF0aW9uLWFnbm9zdGljIGxpYnJhcnkgdG8gZGVmaW5lIGFuZCBleGVjdXRlIG5vZGVzIGJhc2VkIHByb2Nlc3Nlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuLi9jb3JlL25vZGUuanNcIjtcbmltcG9ydCB7XG4gIElucHV0U29ja2V0LFxuICBOZXh0U29ja2V0LFxuICBPdXRwdXRTb2NrZXQsXG4gIFByZXZTb2NrZXQsXG59IGZyb20gXCIuLi9jb3JlL3NvY2tldC5qc1wiO1xuaW1wb3J0IHsgVHlwZSwgVHlwZXMgfSBmcm9tIFwiLi4vY29yZS90eXBlLmpzXCI7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGEgbm9kZSB0aGF0IGlzIGFibGUgdG9cbiAqIGl0ZXJhdGUgdW50aWwgYSBjb25kaXRpb24gYmVjb21lIGZhbHNlLCBsaWtlXG4gKiB3aGlsZShjb25kaXRpb24pIGRvKCk7XG4gKi9cbmV4cG9ydCBjbGFzcyBXaGlsZSBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIldoaWxlXCIpO1xuICAgIHRoaXMuaW5wdXRzID0gW1xuICAgICAgbmV3IElucHV0U29ja2V0KFwiSW5kZXhcIiwgdGhpcywgbmV3IFR5cGUoVHlwZXMuTlVNQkVSLCAwKSwgMCksXG4gICAgICBuZXcgSW5wdXRTb2NrZXQoXCJDb25kaXRpb25cIiwgdGhpcywgbmV3IFR5cGUoVHlwZXMuQk9PTEVBTiwgZmFsc2UpLCBmYWxzZSksXG4gICAgXTtcbiAgICB0aGlzLm91dHB1dHMgPSBbXG4gICAgICBuZXcgT3V0cHV0U29ja2V0KFwiSW5kZXhcIiwgdGhpcywgbmV3IFR5cGUoVHlwZXMuTlVNQkVSLCBmYWxzZSksIDApLFxuICAgIF07XG4gICAgdGhpcy5uZXh0cyA9IFtuZXcgTmV4dFNvY2tldChcIk91dFwiLCB0aGlzKSwgbmV3IE5leHRTb2NrZXQoXCJEb1wiLCB0aGlzKV07XG4gICAgdGhpcy5wcmV2ID0gbmV3IFByZXZTb2NrZXQoXCJJblwiLCB0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcHJvY2VzcyBmdW5jdGlvblxuICAgKi9cbiAgcHJvY2VzcygpIHtcbiAgICB0aGlzLmV2YWx1YXRlSW5wdXRzKCk7XG5cbiAgICAvLyBTYXZlIHRoZSBjdXJyZW50IHByb2dyYW0ncyBub2RlXG4gICAgbGV0IHByZXZDdXJyZW50Tm9kZSA9IHRoaXMucHJvZ3JhbS5jdXJyZW50Tm9kZTtcbiAgICAvLyBBIGJvdW5zIGluZGV4IHZhcmlhYmxlIDstKVxuICAgIGxldCBpbmRleCA9IHBhcnNlRmxvYXQodGhpcy5pbnB1dChcIkluZGV4XCIpLnZhbHVlKTtcblxuICAgIC8vIFNldCB0aGUgXCJJbmRleFwiIG91dHB1dCB2YWx1ZSB0byBJbmRleFxuICAgIHRoaXMub3V0cHV0KFwiSW5kZXhcIikudmFsdWUgPSBpbmRleDtcblxuICAgIC8vIFJlIGV2YWx1YXRlIGlucHV0cyBpbiBjYXNlIG9mIENvbmRpdGlvbiBkZXBlbmRzIG9uIEluZGV4IG91dHB1dFxuICAgIHRoaXMuZXZhbHVhdGVJbnB1dHMoKTtcblxuICAgIC8vIExldCdzIGN5Y2xlIHdoaWxlIGNvbmRpdGlvbiBpcyB0cnVlXG4gICAgd2hpbGUgKHRoaXMuaW5wdXQoXCJDb25kaXRpb25cIikudmFsdWUpIHtcbiAgICAgIC8vIElmIHRoZXJlJ3MgYSBub2RlIGNvbm5lY3RlZCB0byB0aGUgXCJEb1wiIG5leHQgc29ja2V0Li4uXG4gICAgICBpZiAodGhpcy5uZXh0KFwiRG9cIikucGVlciAhPT0gbnVsbCAmJiB0aGlzLm5leHQoXCJEb1wiKS5wZWVyLm5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgLy8gU2V0IHRoZSBcIkluZGV4XCIgb3V0cHV0IHZhbHVlIHRvIEluZGV4XG4gICAgICAgIHRoaXMub3V0cHV0KFwiSW5kZXhcIikudmFsdWUgPSBpbmRleCsrO1xuXG4gICAgICAgIC8vIEV4ZWN1dGUgYSBzdWIgcHJvZ3JhbSBiZWdpbm5pbmcgb24gdGhhdCBub2RlXG4gICAgICAgIHRoaXMucHJvZ3JhbS5wcm9jZXNzRnJvbSh0aGlzLm5leHQoXCJEb1wiKS5wZWVyLm5vZGUpO1xuXG4gICAgICAgIC8vIFJlLWNvbXB1dGUgdGhlIGd1YXJkLi4uXG4gICAgICAgIHRoaXMuZXZhbHVhdGVJbnB1dHMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXN0b3JlIHRoZSBjdXJyZW50cHJvZ3JhbSdzIG5vZGVcbiAgICB0aGlzLnByb2dyYW0uY3VycmVudE5vZGUgPSBwcmV2Q3VycmVudE5vZGU7XG5cbiAgICByZXR1cm4gdGhpcy5nZXRGbG93UmVzdWx0KHRoaXMubmV4dChcIk91dFwiKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIG5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdoaWxlTm9kZSgpIHtcbiAgcmV0dXJuIG5ldyBXaGlsZSgpO1xufVxuIiwiLyoqXG4gKiBjbm9kZXMtdWlcbiAqXG4gKiBBIEdVSSBmb3IgY25vZGVzXG4gKiBMaWNlbnNlOiBNSVRcbiAqIEF1dGhvcjogTWFyY28gSmFjb3ZvbmVcbiAqIFllYXI6IDIwMjBcbiAqL1xuXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3RoZW1lXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tIFwiLi9jb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBTb2NrZXRDb21wb25lbnQgfSBmcm9tIFwiLi9zb2NrZXRcIjtcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBtYWluIENhbnZhcyBjbGFzcy4gVGhpcyBjbGFzcyBpbXBsZW1lbnQgYSBnZW5lcmFsIHB1cnBvc2UgY2FudmFzXG4gKiB0aGF0IGNhbiBtYW5hZ2Ugbm9kZXMsIHNvY2tldHMgKGEgc3BlY2lhbCBzdWJzZXQgb2YgY29tcG9uZW50cykgYW5kIGNvbm5lY3Rpb25zXG4gKiBiZXR3ZWVuIHNvY2tldHMuIFRoZSBjYW52YXMgaXMgYWJsZSB0byB6b29tIGFuZCBwYW4gaXRzZWxmIGFzIHdlbGwgYXMgdG8gbW92ZVxuICogY29tcG9uZW50cy4gQ29tcG9uZW50cyBhcmUgb3JnYW5pemVkIGluIGEgaGllcmFyY2hpY2FsIHdheSwgc28gdGhhdCBtb3ZpbmcgYSBjb21wb25lbnRcbiAqIHdpbGwgbW92ZSBhbGwgaXRzIHN1YmNvbXBvbmVudHMsIGluY2x1ZGluZyBzb2NrZXRzLiBTb2NrZXRzIGFyZSAoc3ViKWNvbXBvbmVudHNcbiAqIHRoYXQgY2FuIGJlIGNvbm5lY3RlZCB0aHJvdWdoIGNvbm5lY3Rpb25zIHRvIG90aGVyIHNvY2tldHMuXG4gKiBUaGUgY2xhc3MgdXNlIFNWRyB0byByZW5kZXIgYWxsIGVsZW1lbnRzLlxuICovXG5leHBvcnQgY2xhc3MgQ2FudmFzIHtcbiAgLyoqIFRoZSBtYWluIHN2ZyBlbGVtZW50ICovXG4gICNzdmdFbCA9IG51bGw7XG5cbiAgLyoqIEEgZ3JvdXAgdW5kZXIgdGhlIG1haW4gc3ZnIGVsZW1lbnQgdG8gc3RvcmUgY29ubmVjdGlvbnMgKi9cbiAgI2Nvbm5lY3Rpb25zRWwgPSBudWxsO1xuXG4gIC8qKiBUaGUgY3VycmVudCBTVkcgYm94IHZpZXcgbGVmdCBjb29yZCAqL1xuICAjdmJYID0gMDtcblxuICAvKiogVGhlIGN1cnJlbnQgU1ZHIGJveCB2aWV3IHRvcCBjb29yZCAqL1xuICAjdmJZID0gMDtcblxuICAvKiogVGhlIGN1cnJlbnQgU1ZHIGJveCB2aWV3IHdpZHRoICovXG4gICN2YldpZHRoID0gMTAwO1xuXG4gIC8qKiBUaGUgY3VycmVudCBTVkcgYm94IHZpZXcgaGVpZ2h0ICovXG4gICN2YkhlaWdodCA9IDEwMDtcblxuICAvKiogVGhlIHVzZXIgaXMgZHJhZ2dpbmcgdGhlIGNhbnZhcyBiYWNrZ29ydW5kPyAqL1xuICAjZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAvKiogVGhlIHBvaW50IGluIHdoaWNoIHRoZSBkcmFnIHdhcyBzdGFydGVkICovXG4gICNzdGFydERyYWdQb3M7XG5cbiAgLyoqIFRoZSBjb21wb25lbnQgZm9yIHRoZSBjb250ZXh0dWFsIG1lbnUgKi9cbiAgI2NvbnRleHRNZW51Q29tcG9uZW50ID0gbnVsbDtcblxuICAvKiogVGhlIGxpc3Qgb2YgY29tcG9uZW50cyBpbiB0aGUgY2FudmFzICovXG4gICNjb21wb25lbnRzID0gW107XG5cbiAgLyoqIFRoZSBsaXN0IG9mIGNvbm5lY3Rpb25zIGJldHdlZW4gY29tcG9uZW50cyBpbiB0aGUgY2FudmFzICovXG4gICNjb25uZWN0aW9ucyA9IFtdO1xuXG4gIC8qKlxuICAgKiBUaGUgY29uc3RydWN0b3Igb2YgdGhlIENhbnZhcyBvYmplY3QuIEluaXRpYWxpemVzIHRoZSBTVkcgZWxlbWVudCxcbiAgICogc2V0IHVwIGFsbCBsaXN0ZW5lcnMgdG8gbWFuYWdlIHBhbm5pbmcsIHpvb21pbmcgYW5kIHNlbGVjdGlvbi5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgVGhlIHBhcmVudCBlbGVtZW50IGluIHdoaWNoIGNyZWF0ZSB0aGUgU1ZHIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgLy8gQ3JlYXRlIHRoZSBtYWluIFNWRyBlbGVtZW50XG4gICAgdGhpcy4jc3ZnRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcblxuICAgIHRoaXMuI3N2Z0VsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgdGhpcy4jc3ZnRWwuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgZWwuYXBwZW5kQ2hpbGQodGhpcy4jc3ZnRWwpO1xuXG4gICAgLy8gQmFja2dyb3VuZCBjb2xvclxuICAgIHRoaXMuI3N2Z0VsLnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IFRoZW1lLmN1cnJlbnQuQ0FOVkFTX0JBQ0tHUk9VTkRfQ09MT1I7XG5cbiAgICAvLyBOb3cgY3JlYXRlIGEgXCJnXCIgZWxlbWVudCB0aGF0IHdpbGwgYmUgdGhlIHBhcmVudCBvZiBhbGwgY29ubmVjdGlvbnMuIFRoaXMgaXNcbiAgICAvLyBpbXBvcnRhbnQgdG8gZ3VhcmFudGVlIHRoYXQgY29ubmVjdGlvbnMgd2lsbCBiZSBhbHdheXMgYmVoaW5kIGNvbXBvbmVudHNcbiAgICB0aGlzLiNjb25uZWN0aW9uc0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJnXCIpO1xuICAgIHRoaXMuI3N2Z0VsLmFwcGVuZENoaWxkKHRoaXMuI2Nvbm5lY3Rpb25zRWwpO1xuXG4gICAgdGhpcy4jYWRhcHRTVkdTaXplKCk7XG5cbiAgICAvLyBEZWZpbmUgYWxsIHBvaW50ZXIgZXZlbnRzIHRvIG1hbmFnZXIgcGFuIGFuZCB6b29tXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIHNlbGYuI2FkYXB0U1ZHU2l6ZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuI3N2Z0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCAoZSkgPT4ge1xuICAgICAgc2VsZi4jb25XaGVlbChlKTtcbiAgICB9KTtcbiAgICB0aGlzLiNzdmdFbC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgKGUpID0+IHtcbiAgICAgIHRoaXMuY2FuY2VsQ29udGV4dE1lbnUoKTtcbiAgICAgIHNlbGYuI29uUG9pbnRlckRvd24oZSk7XG4gICAgfSk7XG4gICAgdGhpcy4jc3ZnRWwuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCAoZSkgPT4ge1xuICAgICAgc2VsZi4jb25Qb2ludGVyVXAoZSk7XG4gICAgfSk7XG4gICAgdGhpcy4jc3ZnRWwuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIChlKSA9PiB7XG4gICAgICBzZWxmLiNvblBvaW50ZXJNb3ZlKGUpO1xuICAgIH0pO1xuICAgIHRoaXMuI3N2Z0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSkgPT4ge1xuICAgICAgc2VsZi4jb25Db250ZXh0TWVudShlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBjb21wb25lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLiNjb21wb25lbnRzO1xuICB9XG4gIHNldCBjb21wb25lbnRzKHZhbCkge1xuICAgIHRoaXMuI2NvbXBvbmVudHMgPSB2YWw7XG4gIH1cbiAgZ2V0IGNvbm5lY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLiNjb25uZWN0aW9ucztcbiAgfVxuICBzZXQgY29ubmVjdGlvbnModmFsKSB7XG4gICAgdGhpcy4jY29ubmVjdGlvbnMgPSB2YWw7XG4gIH1cbiAgZ2V0IGNvbnRleHRNZW51Q29tcG9uZW50KCkge1xuICAgIHJldHVybiB0aGlzLiNjb250ZXh0TWVudUNvbXBvbmVudDtcbiAgfVxuICBzZXQgY29udGV4dE1lbnVDb21wb25lbnQodmFsKSB7XG4gICAgdGhpcy4jY29udGV4dE1lbnVDb21wb25lbnQgPSB2YWw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBpbnRlcm5hbCBTVkcgZWxlbWVudFxuICAgKi9cbiAgZ2V0IHN2Z0VsKCkge1xuICAgIHJldHVybiB0aGlzLiNzdmdFbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGludGVybmFsIFNWRyBjb25uZWN0aW9ucyBlbGVtZW50XG4gICAqL1xuICBnZXQgY29ubmVjdGlvbnNFbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jY29ubmVjdGlvbnNFbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBib3ggdmlldyBjb29yZGluYXRlcyBiYXNlZCBvbiBjb29yZGluYXRlc1xuICAgKiBzdG9yZWQgaW4gcHJpdmF0ZSBmaWVsZHMgI3ZiWCwgI3ZiWSwgI3ZiV2lkdGggYW5kICN2YkhlaWdodFxuICAgKi9cbiAgI3VwZGF0ZVNWR1ZpZXdCb3goKSB7XG4gICAgdGhpcy4jc3ZnRWwuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBgJHt0aGlzLiN2Ylh9ICR7dGhpcy4jdmJZfSAke3RoaXMuI3ZiV2lkdGh9ICR7dGhpcy4jdmJIZWlnaHR9YCk7XG4gIH1cblxuICAvKipcbiAgICogQWRqdXN0IHRoZSB2aWV3IGJveCBvZiB0aGUgc3ZnIGVsZW1lbnQgYmFzZWQgb2YgdGhlIGNvbnRhaW5lclxuICAgKiBjdXJyZW50IHNpemUuIEl0J3MgY2FsbGVkIHdoZW4gYSByZXNpemUgZXZlbnQgaXMgcmVjZWl2ZWRcbiAgICovXG4gICNhZGFwdFNWR1NpemUoKSB7XG4gICAgdGhpcy4jdmJXaWR0aCA9IHRoaXMuI3N2Z0VsLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgdGhpcy4jdmJIZWlnaHQgPSB0aGlzLiNzdmdFbC5wYXJlbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB0aGlzLiN1cGRhdGVTVkdWaWV3Qm94KCk7XG4gIH1cblxuICAvKipcbiAgICogTWFuYWdlcyB0aGUgd2hlZWwgZXZlbnQgdG8gaW1sZW1lbnQgem9vbWluZ1xuICAgKiBAcGFyYW0ge0V2ZW50fSBlIFdoZWVsIGV2ZW50XG4gICAqL1xuICAjb25XaGVlbChlKSB7XG4gICAgbGV0IHAgPSB0aGlzLmNsaWVudFRvU3ZnUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuXG4gICAgbGV0IHpvb21GYWN0b3IgPSAwLjAwMztcbiAgICBsZXQgem9vbSA9IDEgKyBlLmRlbHRhWSAqIHpvb21GYWN0b3I7XG5cbiAgICBsZXQgbmV3V2lkdGggPSB0aGlzLiN2YldpZHRoICogem9vbTtcbiAgICBsZXQgbmV3SGVpZ2h0ID0gdGhpcy4jdmJIZWlnaHQgKiB6b29tO1xuXG4gICAgaWYgKG5ld0hlaWdodCA8IDEwKSByZXR1cm47XG4gICAgaWYgKG5ld1dpZHRoIDwgMTApIHJldHVybjtcbiAgICBpZiAobmV3SGVpZ2h0ID4gNTAwMDApIHJldHVybjtcbiAgICBpZiAobmV3V2lkdGggPiA1MDAwMCkgcmV0dXJuO1xuXG4gICAgbGV0IG5ld0xlZnQgPSB0aGlzLiN2YlggLSAobmV3V2lkdGggLSB0aGlzLiN2YldpZHRoKSAqICgocC54IC0gdGhpcy4jdmJYKSAvIHRoaXMuI3ZiV2lkdGgpO1xuICAgIGxldCBuZXdUb3AgPSB0aGlzLiN2YlkgLSAobmV3SGVpZ2h0IC0gdGhpcy4jdmJIZWlnaHQpICogKChwLnkgLSB0aGlzLiN2YlkpIC8gdGhpcy4jdmJIZWlnaHQpO1xuXG4gICAgdGhpcy4jdmJIZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgdGhpcy4jdmJXaWR0aCA9IG5ld1dpZHRoO1xuICAgIHRoaXMuI3ZiWCA9IG5ld0xlZnQ7XG4gICAgdGhpcy4jdmJZID0gbmV3VG9wO1xuXG4gICAgdGhpcy4jdXBkYXRlU1ZHVmlld0JveCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgcmVzcG9uc2libGUgZm9yIHRyYW5zbGF0ZSBjbGllbnQgKGJyb3dzZXIpIGNvb3JkaW5hdGVzXG4gICAqIHRvIFNWRyBzcGFjZSBjb29yZGluYXRlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gY2xpZW50WCBUaGUgY2xpZW50IHggY29vcmRpbmF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gY2xpZW50WSBUaGUgY2xpZW50IHkgY29vcmRpbmF0ZVxuICAgKi9cbiAgY2xpZW50VG9TdmdQb2ludChjbGllbnRYLCBjbGllbnRZKSB7XG4gICAgLy8gQ3JlYXRlIGEgcG9pbnQgaW4gU1ZHIHNwYWNlXG4gICAgbGV0IHAgPSB0aGlzLiNzdmdFbC5jcmVhdGVTVkdQb2ludCgpO1xuXG4gICAgcC54ID0gY2xpZW50WDtcbiAgICBwLnkgPSBjbGllbnRZO1xuXG4gICAgLy8gVHJhbnNsYXRlIGNvb3JkaW5hdGVzIHVzaW5nIHRoZSBTVkcgdHJhbnNvZnJtYXRpb24gbWF0cml4XG4gICAgbGV0IHBTVkcgPSBwLm1hdHJpeFRyYW5zZm9ybSh0aGlzLiNzdmdFbC5nZXRTY3JlZW5DVE0oKS5pbnZlcnNlKCkpO1xuICAgIHJldHVybiBwU1ZHO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hbmFnZSB0aGUgbW91c2Vkb3duIGV2ZW50IHRvIGltcGxlbWVudCBwYW5cbiAgICogQHBhcmFtIHtFdmVudH0gZSBUaGUgbW91c2Vkb3duIGV2ZW50XG4gICAqL1xuICAjb25Qb2ludGVyRG93bihlKSB7XG4gICAgaWYgKGUuYnV0dG9uID09PSAwKSB7XG4gICAgICB0aGlzLiNkcmFnZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLiNzdGFydERyYWdQb3MgPSB0aGlzLmNsaWVudFRvU3ZnUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgICAgdGhpcy4jc3ZnRWwuc2V0UG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYW5hZ2VzIHRoZSBtb3VzZXVwIGV2ZW50IHRvIGltcGxlbWVudCBwYW5cbiAgICogQHBhcmFtIHtFdmVudH0gZSBUaGUgbW91c2V1cCBldmVudFxuICAgKi9cbiAgI29uUG9pbnRlclVwKGUpIHtcbiAgICBpZiAoZS5idXR0b24gPT09IDApIHtcbiAgICAgIHRoaXMuI2RyYWdnaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLiNzdmdFbC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYW5hZ2VzIHRoZSBtb3VzZW1vdmUgZXZlbnQgdG8gaW1wbGVtZW50IHBhblxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIFRoZSBtb3VzZW1vdmUgZXZlbnRcbiAgICovXG4gICNvblBvaW50ZXJNb3ZlKGUpIHtcbiAgICBpZiAoIXRoaXMuI2RyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBtb3ZlUG9pbnQgPSB0aGlzLmNsaWVudFRvU3ZnUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgIGxldCB4RGlmZiA9IG1vdmVQb2ludC54IC0gdGhpcy4jc3RhcnREcmFnUG9zLng7XG4gICAgbGV0IHlEaWZmID0gbW92ZVBvaW50LnkgLSB0aGlzLiNzdGFydERyYWdQb3MueTtcbiAgICB0aGlzLiN2YlggLT0geERpZmY7XG4gICAgdGhpcy4jdmJZIC09IHlEaWZmO1xuICAgIHRoaXMuI3VwZGF0ZVNWR1ZpZXdCb3goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYW5hZ2VzIHRoZSBjb250ZXh0bWVudSBldmVudCB0byBpbXBsZW1lbnQgY3VzdG9tIG1lbnVcbiAgICogQHBhcmFtIHtFdmVudH0gZSBUaGUgY29udGV4dG1lbnUgZXZlbnRcbiAgICovXG4gICNvbkNvbnRleHRNZW51KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudEZyb21Qb3NpdGlvbihlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgbGV0IHAgPSB0aGlzLmNsaWVudFRvU3ZnUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuXG4gICAgbGV0IGl0ZW1zO1xuICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICBpdGVtcyA9IHRoaXMuZ2V0Q2FudmFzQ29udGV4dE1lbnVJdGVtcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtcyA9IGNvbXBvbmVudC5nZXRDb250ZXh0TWVudUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93Q29udGV4dE1lbnUoaXRlbXMsIHAueCwgcC55KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBkZXRlY3QgYSBjbm9kZXMtdWkgY29tcG9uZW50IGluc2lkZSB0aGUgY2FudmFzXG4gICAqIGF0IHNwZWNpZmllZCBsb2NhdGlvbiAoeCx5KS4gT3B0aW9uYWxseSB0aGUgdXNlciBjYW4gcmVxdWVzdFxuICAgKiBvbmx5IHNvY2tldHMgY29tcG9uZW50LCB0aGlzIGlzIHVzZWZ1bCB3aGVuIHlvdSB3YW50IHRvIHNlYXJjaFxuICAgKiBhIHBvc3NpYmxlIGNvbm5lY3Rpb24gcGVlciBkdXJpbmcgdGhlIGxpbmsgcHJvY2Vzc1xuICAgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBjb29yZGluYXRlIGluIHRoZSBjYW52YXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgVGUgeSBjb29yZGluYXRlIGluIHRoZSBjYW52YXNcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmx5U29ja2V0cyBJZiB0cnVlLCB0aGlzIG1ldGhvZCBzZWFyY2ggb25seSBmb3Igc29ja2V0IGNvbXBvbmVudHNcbiAgICovXG4gIGNvbXBvbmVudEZyb21Qb3NpdGlvbih4LCB5LCBvbmx5U29ja2V0cyA9IGZhbHNlKSB7XG4gICAgLy8gR2V0IHRoZSBET00gZWxlbWVudCBhdCB4LHkgaW4gY2xpZW50IHNwYWNlXG4gICAgbGV0IHBvaW50ZWRFbCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG5cbiAgICAvLyBTZWFyY2hpbmcgZm9yIGFuIGVsZW1lbnQgd2l0aCB0aGUgcHJvcGVydHkgXCJjb21wb25lbnRSZWZcIi4gV2hlbiBjbm9kZXMtdWlcbiAgICAvLyBhZGQgYSBjb21wb25lbnQsIGluc2VydCB0aGlzIHByb3BlcnR5IGluc2lkZSB0aGUgU1ZHIHJvb3QgZWxlbWVudCBvZiB0aGUgY29tcG9uZW50XG4gICAgd2hpbGUgKHBvaW50ZWRFbCkge1xuICAgICAgLy8gVHJhdmVyc2UgdGhlIERPTSB0cmVlXG4gICAgICBpZiAocG9pbnRlZEVsLmNvbXBvbmVudFJlZiAmJiAoIW9ubHlTb2NrZXRzIHx8IHBvaW50ZWRFbC5jb21wb25lbnRSZWYgaW5zdGFuY2VvZiBTb2NrZXRDb21wb25lbnQpKSB7XG4gICAgICAgIHJldHVybiBwb2ludGVkRWwuY29tcG9uZW50UmVmO1xuICAgICAgfVxuICAgICAgcG9pbnRlZEVsID0gcG9pbnRlZEVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBjb25uZWN0aW9uIHRvIHRoZSBjYW52YXMsIGFsc28gYWRkIHRoZSByZWxhdGVkIGVsZW1lbnQgdG9cbiAgICogdGhlIG1haW4gU1ZHIGdyb3VwIG9mIGNvbm5lY3Rpb25zXG4gICAqIEBwYXJhbSB7Q29ubmVjdGlvbn0gY29ubmVjdGlvbiBUaGUgY29ubmVjdGlvbiB0byBhZGRcbiAgICovXG4gIGFkZENvbm5lY3Rpb24oY29ubmVjdGlvbikge1xuICAgIHRoaXMuI2Nvbm5lY3Rpb25zLnB1c2goY29ubmVjdGlvbik7XG4gICAgY29ubmVjdGlvbi5jYW52YXMgPSB0aGlzO1xuICAgIHRoaXMuI2Nvbm5lY3Rpb25zRWwuYXBwZW5kQ2hpbGQoY29ubmVjdGlvbi5jb25uZWN0aW9uRWwpO1xuXG4gICAgLy8gVXBkYXRlIGNvbm5lY3RlZCBzb2NrZXRzXG4gICAgY29ubmVjdGlvbi5zb3VyY2UudXBkYXRlU1ZHRWxlbWVudCgpO1xuICAgIGNvbm5lY3Rpb24udGFyZ2V0LnVwZGF0ZVNWR0VsZW1lbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBjb25uZWN0aW9uIGZyb20gdGhlIGNhbnZhcywgYWxzbyByZW1vdmUgdGhlIHJlbGF0ZWQgU1ZHIGVsZW1lbnRcbiAgICogQHBhcmFtIHtDb25uZWN0aW9ufSBjb25uZWN0aW9uIFRoZSBjb25uZWN0aW9uIHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgLy8gU2lnbmFsIHRoZSBjb25uZWN0aW9uIHRoYXQgd2lsbCBiZSBkZXN0cm95ZWRcbiAgICBjb25uZWN0aW9uLmRlc3Ryb3koKTtcbiAgICB0aGlzLiNjb25uZWN0aW9ucyA9IHRoaXMuI2Nvbm5lY3Rpb25zLmZpbHRlcigoYykgPT4gYyAhPT0gY29ubmVjdGlvbik7XG4gICAgdGhpcy4jY29ubmVjdGlvbnNFbC5yZW1vdmVDaGlsZChjb25uZWN0aW9uLmNvbm5lY3Rpb25FbCk7XG5cbiAgICAvLyBVcGRhdGUgY29ubmVjdGVkIHNvY2tldHNcbiAgICBjb25uZWN0aW9uLnNvdXJjZS51cGRhdGVTVkdFbGVtZW50KCk7XG4gICAgY29ubmVjdGlvbi50YXJnZXQudXBkYXRlU1ZHRWxlbWVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIGNvbm5lY3Rpb24gYmV0d2VlbiBzb2NrZXRzIGFscmVhZHlcbiAgICogQHBhcmFtIHtTb2NrZXRDb21wb25lbnR9IHNvY2tldDEgRmlyc3Qgc29ja2V0IGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1NvY2tldENvbXBvbmVudH0gc29ja2V0MiBTZWNvbmQgc29ja2V0IGNvbXBvbmVudFxuICAgKi9cbiAgYWxyZWFkeUNvbm5lY3RlZChzb2NrZXQxLCBzb2NrZXQyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY29ubmVjdGlvbnMuZmluZEluZGV4KChjKSA9PiAoYy5zb3VyY2UgPT09IHNvY2tldDEgJiYgYy50YXJnZXQgPT09IHNvY2tldDIpIHx8IChjLnNvdXJjZSA9PT0gc29ja2V0MiAmJiBjLnRhcmdldCA9PT0gc29ja2V0MSkpICE9PSAtMVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGNvbXBvbmVudCB0byB0aGUgY2FudmFzXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnQgQ29tcG9uZW50IHRvIGFkZFxuICAgKi9cbiAgYWRkQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHRoaXMuI2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIGNvbXBvbmVudC5jYW52YXMgPSB0aGlzO1xuICAgIHRoaXMuI3N2Z0VsLmFwcGVuZENoaWxkKGNvbXBvbmVudC5jb21wb25lbnRFbCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgY29tcG9uZW50IGZyb20gdGhlIGNhbnZhc1xuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50IENvbXBvbmVudCB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAvLyBSZW1vdmUgcmVsYXRlZCBjb25uZWN0aW9uc1xuICAgIGZvciAobGV0IHMgb2YgY29tcG9uZW50LmNvbXBvbmVudHMpIHtcbiAgICAgIGlmIChzIGluc3RhbmNlb2YgU29ja2V0Q29tcG9uZW50KSB7XG4gICAgICAgIGZvciAobGV0IGMgb2YgdGhpcy5nZXRDb25uZWN0aW9uc0ZvcihzKSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlQ29ubmVjdGlvbihjKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNpZ25hbCBjb21wb25lbnQgdGhhdCB3aWxsIGJlIHJlbW92ZWRcbiAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuXG4gICAgLy8gUmVtb3ZlIHRoZSBjb21wb25lbnQgZnJvbSB0aGUgU1ZHIHNwYWNlXG4gICAgdGhpcy5jb21wb25lbnRzID0gdGhpcy4jY29tcG9uZW50cy5maWx0ZXIoKGMpID0+IGMgIT09IGNvbXBvbmVudCk7XG4gICAgdGhpcy4jc3ZnRWwucmVtb3ZlQ2hpbGQoY29tcG9uZW50LmNvbXBvbmVudEVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYWxsIGNvbm5lY3Rpb25zIGluIHRlcm1zIG9mIFNWRyBwcm9wZXJ0aWVzLiBUaGlzIGlzXG4gICAqIGltcG9ydGFudCBiZWNhdXNlIHdoZW4gY29tcG9uZW50cyBhcmUgbW92ZWQsIHRoaXMgZW5zdXJlcyB0aGF0XG4gICAqIGNvbm5lY3Rpb25zIHdpbGwgZm9sbG93IHRoZW1cbiAgICovXG4gIHVwZGF0ZUFsbENvbm5lY3Rpb25zKCkge1xuICAgIGZvciAobGV0IGNvbm5lY3Rpb24gb2YgdGhpcy4jY29ubmVjdGlvbnMpIHtcbiAgICAgIGNvbm5lY3Rpb24udXBkYXRlU1ZHRWxlbWVudCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBleHRyYWN0IGFsbCBjb25uZWN0aW9ucyBpbiB0aGUgY2FudmFzLCB0aGF0IGhhdmVcbiAgICogdGhlIHNvdXJjZSBvciB0aGUgdGFyZ2V0IFNvY2tldENvbXBvbmVudCBhcyBlbmRwb2ludFxuICAgKiBAcGFyYW0ge1NvY2tldENvbXBvbmVudH0gc29ja2V0IFRoZSBzb2NrZXQgY29tcG9uZW50IGZvciB3aGljaCBzZWFyY2ggdGhlIGNvbm5lY3Rpb25cbiAgICovXG4gIGdldENvbm5lY3Rpb25zRm9yKHNvY2tldCkge1xuICAgIHJldHVybiB0aGlzLiNjb25uZWN0aW9ucy5maWx0ZXIoKGMpID0+IGMuc291cmNlID09PSBzb2NrZXQgfHwgYy50YXJnZXQgPT09IHNvY2tldCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgY29ubmVjdGlvbnMgZnJvbSB0aGUgY2FudmFzXG4gICAqL1xuICByZW1vdmVBbGxDb25uZWN0aW9ucygpIHtcbiAgICB3aGlsZSAodGhpcy4jY29ubmVjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5yZW1vdmVDb25uZWN0aW9uKHRoaXMuI2Nvbm5lY3Rpb25zWzBdKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgY29tcG9uZW50cyBmcm9tIHRoZSBjYW52YXNcbiAgICovXG4gIHJlbW92ZUFsbENvbXBvbmVudHMoKSB7XG4gICAgd2hpbGUgKHRoaXMuI2NvbXBvbmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5yZW1vdmVDb21wb25lbnQodGhpcy4jY29tcG9uZW50c1swXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW9pdmVzIGFsbCBjb25uZWN0aW9ucyBhbmQgYWxsIGNvbXBvbmVudHMgZnJvbSB0aGUgY2FudmFzXG4gICAqL1xuICByZW1vdmVBbGwoKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxDb25uZWN0aW9ucygpO1xuICAgIHRoaXMucmVtb3ZlQWxsQ29tcG9uZW50cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIGxpc3Qgb2YgTWVudUl0ZW0gZm9yIHRoZSBjb250ZXh0IG1lbnVcbiAgICovXG4gIGdldENhbnZhc0NvbnRleHRNZW51SXRlbXMoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgdGhlIGNvbnRleHQgbWVudSByZXRhdGVkIHRvIHRoZSBjb21wb25lbnQgb3IgdGhlIGNhbnZhc1xuICAgKiBAcGFyYW0ge01lbnVJdGVtW119IGl0ZW1zIEl0ZW1zIHRoYXQgY29tcG9zZSB0aGUgbWVudVxuICAgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBjb29yZGluYXRlIGZvciB0aGUgbWVudVxuICAgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBjb29yZGluYXRlIGZvciB0aGUgbWVudVxuICAgKi9cbiAgc2hvd0NvbnRleHRNZW51KGl0ZW1zLCB4LCB5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaW4gYSBzdWJjbGFzcyFcIik7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VscyB0aGUgY3VycmVudCBvcGVuIGNvbnRleHQgbWVudSwgYW5kIGNsb3NlcyBpdFxuICAgKi9cbiAgY2FuY2VsQ29udGV4dE1lbnUoKSB7XG4gICAgaWYgKHRoaXMuI2NvbnRleHRNZW51Q29tcG9uZW50KSB7XG4gICAgICB0aGlzLnJlbW92ZUNvbXBvbmVudCh0aGlzLiNjb250ZXh0TWVudUNvbXBvbmVudCk7XG4gICAgICB0aGlzLmNvbnRleHRNZW51Q29tcG9uZW50ID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogY25vZGVzLXVpXG4gKlxuICogQSBHVUkgZm9yIGNub2Rlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi9wb3NpdGlvblwiO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdGhlIGJhc2UgY2xhc3MgZm9yIGFsbCBjb21wb25lbnRzIGluIHRoZSBjbm9kZXMtdWkgY2FudmFzLlxuICogVGhlIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBtYW5hZ2UgbW9iaWxpdHkgb2YgY29tcG9uZW50cy4gVGhpcyBpcyBub3RcbiAqIHlldCB0aGUgY2xhc3MgZm9yIHRoZSBjbm9kZXMgbm9kZXMsIGlzIG1vcmUgYWJzdHJhY3Qgc28gdGhhdCB0aGUgdXNlciBjYW5cbiAqIGRlcml2ZSBmcm9tIHRoYXQgdG8gaW1wbGVtZW50IGNvbXBvbmVudHMgdGhhdCBhcmUgbm90IGV4cGxpY2l0bHkgY29ubmVjdGVkXG4gKiB0byB0aGUgY25vZGVzIGxpYnJhcnksIHN1Y2ggYXMgZGVjb3JhdG9ycywgY29tbWVudHMsIGV0Yy5cbiAqIEluIGdlbmVyYWwgY29tcG9uZW50IGNhbiBoYXZlIHN1bWNvbXBvbmVudHMuIFNwZWNpYWwgZXhhbXBsZXMgb2Ygc3ViY29tcG9uZW50cyBhcmVcbiAqIGEgc29ja2V0cy4gVGhlIHNvY2tldCBpcyB0aGUgYSBjb21wb25lbnQgdGhhdCBjYW4gYmUgY29ubmVjdGVkIHRocm91Z2ggY29ubmVjdGlvbnMsXG4gKiBpbiB0aGUgY2FudmFzLXVpIGNsYXNzIG1vZGVsLlxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSBlbmNsb3NpbmcgY2FudmFzICovXG4gICNjYW52YXMgPSBudWxsO1xuXG4gIC8qKiBBIHJlZmVyZW5jZSB0byB0aGUgU1ZHIGVsZW1lbnQgdGhhdCBpbXBsZW1lbnQgdGhlIGNvbXBvbmVudCAqL1xuICAjY29tcG9uZW50RWwgPSBudWxsO1xuXG4gIC8qKiBUaGUgcGFyZW50IGNvbXBvbmVudCBpZiB0aGVyZSBpcyBvbmUgKi9cbiAgI3BhcmVudCA9IG51bGw7XG5cbiAgLyoqIElzIHRoaXMgY29tcG9uZW50IG1vdmVhYmxlPyAqL1xuICAjbW92ZWFibGUgPSB0cnVlO1xuXG4gIC8qKiBUaGUgcG9zaXRpb24gZm8gdGhpcyBjb21wb25lbnQgaW5zaWRlIHRoZSBjYW52YXMsIGluIFNWRyBjb29yZGluYXRlcyAqL1xuICAjcG9zID0gbmV3IFBvc2l0aW9uKDAsIDApO1xuXG4gIC8qKiBUaGUgY29tcG9uZW50IGlzIGFjdHVhbGx5IG1vdmluZyAqL1xuICAjbW92aW5nID0gZmFsc2U7XG5cbiAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSBwb3NpdGlvbiBvZiB0aGUgY29tcG9uZW50IGF0IHRoZSB0aW1lIGhpIHN0YXJ0cyBtb3ZpbmcgKi9cbiAgI3N0YXJ0TW92ZVBvcyA9IG51bGw7XG5cbiAgLyoqIFRoZSBwb2ludGVyIHBvc2l0aW9uIGF0IHRoZSB0aW1lIGluIHdoaWNoIHRoZSBjb21wb25lbnQgc3RhcnRzIG1vdmluZyAqL1xuICAjc3RhcnRNb3ZlUG9pbnRlclBvcyA9IG51bGw7XG5cbiAgLyoqIFRoZSBsaXN0IG9mIGV2ZW50dWFsIGNoaWxkIGNvbXBvbmVudHMgKi9cbiAgI2NvbXBvbmVudHMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdXAgdGhlIGNvbXBvbmVudC4gVGhlIGNvbXBvbmVudCBjcmVhdGlvbiBmb2xsb3cgYSBzcGVjaWZpYyBmbG93LlxuICAgKiBUaGUgdXNlciB0aGF0IGNyZWF0ZXMgdGhlIGNvbXBvbmVudCBoYXZlIHRvIGNhbGwgdGhpcyBtZXRob2QgYWZ0ZXIsIHRvXG4gICAqIGluaXRpYWxpemVzIHRoZSBpbnRlcm5hbCBTVkcgY29tcG9uZW50IGFuZCBvcHRpb25hbGx5IGluc3RhbGxzIHBvaW50ZXJcbiAgICogZXZlbnQgbGlzdGVuZXJzIHRvIG1hbmFnZSBtb3ZpbmcuXG4gICAqL1xuICBzZXR1cCgpIHtcbiAgICAvLyBDcmVhdGUgdGhlIFNWRyBlbGVtZW50LiBBIHN1YmNsYXNzIG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2RcbiAgICAvLyB0byBkZWZpbmUgdGhlIGdyYXBoaWNhbCBhc3BlY3Qgb2YgdGhlIGNvbXBvbmVudFxuICAgIHRoaXMuI2NvbXBvbmVudEVsID0gdGhpcy5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBSZWdpc3RlciBhIHJlZmVyZW5jZSBvZiB0aGlzIGNvbXBvbmVudCBpbnNpZGUgdGhlIEhUTUwgZWxlbWVudFxuICAgIHRoaXMuI2NvbXBvbmVudEVsLmNvbXBvbmVudFJlZiA9IHRoaXM7XG5cbiAgICAvLyBDYW5jZWwgY29udGV4dCBtZW51IG9uIGFueSBwb2ludGVyZG93biBldmVudFxuICAgIHRoaXMuI2NvbXBvbmVudEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCAoZSkgPT4ge1xuICAgICAgc2VsZi5jYW52YXMuY2FuY2VsQ29udGV4dE1lbnUoKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm1vdmVhYmxlKSB7XG4gICAgICB0aGlzLiNjb21wb25lbnRFbC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgc2VsZi4jb25Qb2ludGVyRG93bihlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy4jY29tcG9uZW50RWwuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCAoZSkgPT4ge1xuICAgICAgICBzZWxmLiNvblBvaW50ZXJVcChlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy4jY29tcG9uZW50RWwuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIChlKSA9PiB7XG4gICAgICAgIHNlbGYuI29uUG9pbnRlck1vdmUoZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXQgcG9zKCkge1xuICAgIHJldHVybiB0aGlzLiNwb3M7XG4gIH1cbiAgc2V0IHBvcyh2YWwpIHtcbiAgICB0aGlzLiNwb3MgPSB2YWw7XG4gICAgdGhpcy51cGRhdGVTVkdFbGVtZW50KCk7XG4gIH1cbiAgZ2V0IGNhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy4jY2FudmFzO1xuICB9XG4gIHNldCBjYW52YXModmFsKSB7XG4gICAgdGhpcy4jY2FudmFzID0gdmFsO1xuICB9XG4gIGdldCBjb21wb25lbnRFbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jY29tcG9uZW50RWw7XG4gIH1cbiAgZ2V0IGNvbXBvbmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2NvbXBvbmVudHM7XG4gIH1cbiAgc2V0IGNvbXBvbmVudHModmFsKSB7XG4gICAgdGhpcy4jY29tcG9uZW50cyA9IHZhbDtcbiAgfVxuXG4gIGdldCBzdmdFbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jY2FudmFzLnN2Z0VsO1xuICB9XG5cbiAgZ2V0IG1vdmVhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLiNtb3ZlYWJsZTtcbiAgfVxuICBzZXQgbW92ZWFibGUodmFsKSB7XG4gICAgdGhpcy4jbW92ZWFibGUgPSB2YWw7XG4gIH1cbiAgZ2V0IHBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsKSB7XG4gICAgdGhpcy4jcGFyZW50ID0gdmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hbmFnZXMgdGhlIG1vdXNlZG93biBldmVudCB0byBpbXBsZW1lbnQgbW92aW5nXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIG1vdXNlZG93biBldmVudFxuICAgKi9cbiAgI29uUG9pbnRlckRvd24oZSkge1xuICAgIGlmIChlLmJ1dHRvbiA9PT0gMCkge1xuICAgICAgaWYgKHRoaXMuI21vdmVhYmxlKSB7XG4gICAgICAgIHRoaXMuI21vdmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuI3N0YXJ0TW92ZVBvcyA9IHRoaXMuI2NhbnZhcy5jbGllbnRUb1N2Z1BvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICAgICAgdGhpcy4jc3RhcnRNb3ZlUG9pbnRlclBvcyA9IHRoaXMuI2NhbnZhcy5zdmdFbC5jcmVhdGVTVkdQb2ludCgpO1xuICAgICAgICB0aGlzLiNzdGFydE1vdmVQb2ludGVyUG9zLnggPSB0aGlzLiNwb3MueDtcbiAgICAgICAgdGhpcy4jc3RhcnRNb3ZlUG9pbnRlclBvcy55ID0gdGhpcy4jcG9zLnk7XG4gICAgICAgIHRoaXMuI2NvbXBvbmVudEVsLnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFuYWdlcyB0aGUgbW91c2V1cCBldmVudCB0byBpbXBsZW1lbnQgcGFuXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIG1vdXNldXAgZXZlbnRcbiAgICovXG4gICNvblBvaW50ZXJVcChlKSB7XG4gICAgaWYgKHRoaXMuI21vdmVhYmxlICYmIGUuYnV0dG9uID09PSAwKSB7XG4gICAgICB0aGlzLiNtb3ZpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuI2NvbXBvbmVudEVsLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYW5hZ2VzIHRoZSBtb3VzZW1vdmUgZXZlbnQgdG8gaW1wbGVtZW50IHBhblxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIFRoZSBtb3VzZW1vdmUgZXZlbnRcbiAgICovXG4gICNvblBvaW50ZXJNb3ZlKGUpIHtcbiAgICBpZiAodGhpcy4jbW92ZWFibGUpIHtcbiAgICAgIGlmICghdGhpcy4jbW92aW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBtb3ZlUG9pbnQgPSB0aGlzLiNjYW52YXMuY2xpZW50VG9TdmdQb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgICBsZXQgeERpZmYgPSBtb3ZlUG9pbnQueCAtIHRoaXMuI3N0YXJ0TW92ZVBvcy54O1xuICAgICAgbGV0IHlEaWZmID0gbW92ZVBvaW50LnkgLSB0aGlzLiNzdGFydE1vdmVQb3MueTtcblxuICAgICAgLy8gVGhpcyBlZmZlY3RpdmVseSBtb3ZlIHRoZSBlbGVtZW50XG4gICAgICB0aGlzLiNwb3MueCA9IHhEaWZmICsgdGhpcy4jc3RhcnRNb3ZlUG9pbnRlclBvcy54O1xuICAgICAgdGhpcy4jcG9zLnkgPSB5RGlmZiArIHRoaXMuI3N0YXJ0TW92ZVBvaW50ZXJQb3MueTtcbiAgICAgIHRoaXMudXBkYXRlU1ZHRWxlbWVudCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXJyYXkgb2YgY29udGV4dCBtZW51IGl0ZW1zLiBJZiB0aGUgY29tcG9uZW50XG4gICAqIHJldHVybnMgbnVsbCwgbm8gY29udGV4dHVhbCBtZW51IGlzIHNob3duXG4gICAqL1xuICBnZXRDb250ZXh0TWVudUl0ZW1zKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIG11c3QgYmUgb3ZlcnJpZGRlbiBpbiBhIGNoaWxkIGNvbmNyZXRlIGNsYXNzLlxuICAgKiBUaGUgc2V0dXAoKSBtdGhvZCBjYWxscyB0aGlzIG9uZSBkdXJpbmcgdGhlIGNyZWF0aW9uIHByb2Nlc3NcbiAgICovXG4gIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRWxlbWVudCBtdXN0IGJlIGRlZmluZWQgaW4gYSBzdWJjbGFzcyFcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhpcyBjb21wb25lbnQsIGluIHRlcm1zXG4gICAqIG9mIGNhbnZhcyBjb29yZGluYXRlcywgYnkgdHJhdmVyaW5nIHRoZSBjaGlsZC1wYXJlbnQgY29tcG9uZW50XG4gICAqIGhpZXJhcmNoeVxuICAgKi9cbiAgZ2V0IGFic1BvcygpIHtcbiAgICBsZXQgcG9zID0gbmV3IFBvc2l0aW9uKHRoaXMuI3Bvcy54LCB0aGlzLiNwb3MueSk7XG4gICAgaWYgKHRoaXMuI3BhcmVudCkge1xuICAgICAgbGV0IHBhcmVudFBvcyA9IHRoaXMuI3BhcmVudC5hYnNQb3M7XG4gICAgICBwb3MgPSBwb3MuYWRkKHBhcmVudFBvcyk7XG4gICAgfVxuICAgIHJldHVybiBwb3M7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBjb21wb25lbnQgZWxlbWVudCBhY2NvcmRpbmcgdG8geCBhbmQgeSBsb2NhbCBjb29yZGluYXRlcyxcbiAgICogaWYgdGhpcyBjb21wb25lbnQgaXMgYSBjaGlsZCBjb21wb25lbnQsIGNvb3JkaW5hdGVzIGluIGNhbnZhcyBzcGFjZVxuICAgKiBhcmUgY29tcHV0ZWRcbiAgICovXG4gIHVwZGF0ZVNWR0VsZW1lbnQoKSB7XG4gICAgbGV0IHBvcyA9IHRoaXMuYWJzUG9zO1xuICAgIHRoaXMuI2NvbXBvbmVudEVsLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7cG9zLnh9LCR7cG9zLnl9KWApO1xuXG4gICAgLy8gQWxzbyB1cGRhdGUgYWxsIGNoaWxkcmVuXG4gICAgZm9yIChsZXQgYyBvZiB0aGlzLiNjb21wb25lbnRzKSB7XG4gICAgICBjLnVwZGF0ZVNWR0VsZW1lbnQoKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgYWxsIGNvbm5lY3Rpb25zXG4gICAgaWYgKHRoaXMuY2FudmFzKSB7XG4gICAgICB0aGlzLmNhbnZhcy51cGRhdGVBbGxDb25uZWN0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgY29tcG9uZW50IGFzIGNoaWxkIGNvbXBvbmVudC5cbiAgICogV0FSTklORzogYmVmb3JlIGF0dGFjaCBjaGlsZCBjb21wb25lbnRzLCB0aGlzIGNvbXBvbmVudFxuICAgKiBtdXN0IHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBjYW52YXMgaXRzZWxmLCBvdGhlcndpc2UgdGhlIG1ldGhvZFxuICAgKiBmYWlsc1xuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50IENvbXBvbmVudCB0byBhZGRcbiAgICovXG4gIGFkZENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICB0aGlzLiNjb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICBjb21wb25lbnQucGFyZW50ID0gdGhpcztcbiAgICBjb21wb25lbnQuY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgdGhpcy5zdmdFbC5hcHBlbmRDaGlsZChjb21wb25lbnQuY29tcG9uZW50RWwpO1xuICAgIGNvbXBvbmVudC51cGRhdGVTVkdFbGVtZW50KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgY2hpbGQgc3ViY29tcG9uZW50XG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB0aGlzLiNjb21wb25lbnRzLmZpbHRlcigoYykgPT4gYyAhPT0gY29tcG9uZW50KTtcbiAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgIHRoaXMuc3ZnRWwucmVtb3ZlQ2hpbGQoY29tcG9uZW50LmNvbXBvbmVudEVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW1vdmVkXG4gICAqIGZyb20gdGhlIGNhbnZhcyBvZiBmcm9tIGl0cyBwYXJlbnQgY29tcG9uZW50XG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIC8vIFJlbW92ZXMgYWxsIHN1YmNvbXBvbmVudHNcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoYykgPT4gdGhpcy5yZW1vdmVDb21wb25lbnQoYykpO1xuICB9XG59XG4iLCIvKipcbiAqIGNub2Rlcy11aVxuICpcbiAqIEEgR1VJIGZvciBjbm9kZXNcbiAqIExpY2Vuc2U6IE1JVFxuICogQXV0aG9yOiBNYXJjbyBKYWNvdm9uZVxuICogWWVhcjogMjAyMFxuICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGEgYmFzZSBjbGFzcyBvZiBhbGwgY29ubmVjdGlvbnMuIEEgQ29ubmVjdGlvbiBpcyBhbHdheXMgYVxuICogbGluayBmcm9tIHR3byBzb2NrZXRzLiBTb2NrZXRzIGFyZSBzcGVjaWFsIHN1YmNsYXNzIG9mIGNvbXBvbmVudHMsIHRpcGljYWxseVxuICogY2hpbGQgb2YgYmFzZSBjb21wb25lbnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25uZWN0aW9uIHtcbiAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSBlbmNsb3NpbmcgY2FudmFzICovXG4gICNjYW52YXMgPSBudWxsO1xuXG4gIC8qKiBBIHJlZmVyZW5jZSB0byB0aGUgU1ZHIGVsZW1lbnQgb2YgdGhpcyBjb25uZWN0aW9uICovXG4gICNjb25uZWN0aW9uRWwgPSBudWxsO1xuXG4gIC8qKiBUaGUgc291cmNlIHNvY2tldCBjb21wb25lbnQgZm9yIHRoZSBsaW5rICovXG4gICNzb3VyY2UgPSBudWxsO1xuXG4gIC8qKiBZaGUgZGVzdGluYXRpb24gc29ja2V0IGNvbXBvbmVudCBmb3IgdGhlIGxpbmsgKi9cbiAgI3RhcmdldCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIGNvbm5lY3Rpb24gaW5zdGFuY2UgYnkgc2V0dGluZyBpdHMgc291cmNlIGFuZCB0YXJnZXRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgdGhpcy4jc291cmNlID0gc291cmNlO1xuICAgIHRoaXMuI3RhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLnNvdXJjZS51cGRhdGVTVkdFbGVtZW50KCk7XG4gICAgdGhpcy50YXJnZXQudXBkYXRlU1ZHRWxlbWVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXAgdGhpcyBjb25uZWN0aW9uLiBJbiB0ZXJtcyBvZiBjb25zdHJ1Y3Rpb24gZmxvd1xuICAgKiB0aGlzIG1lYW5zIGNyZWF0ZSB0aGUgU1ZHIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHNob3duXG4gICAqL1xuICBzZXR1cCgpIHtcbiAgICB0aGlzLiNjb25uZWN0aW9uRWwgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIGdldCBjYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2NhbnZhcztcbiAgfVxuICBzZXQgY2FudmFzKHZhbCkge1xuICAgIHRoaXMuI2NhbnZhcyA9IHZhbDtcbiAgfVxuICBnZXQgc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLiNzb3VyY2U7XG4gIH1cbiAgc2V0IHNvdXJjZSh2YWwpIHtcbiAgICB0aGlzLiNzb3VyY2UgPSB2YWw7XG4gIH1cbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy4jdGFyZ2V0O1xuICB9XG4gIHNldCB0YXJnZXQodmFsKSB7XG4gICAgdGhpcy4jdGFyZ2V0ID0gdmFsO1xuICB9XG4gIGdldCBjb25uZWN0aW9uRWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Nvbm5lY3Rpb25FbDtcbiAgfVxuICBnZXQgc3ZnRWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2NhbnZhcy5zdmdFbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyByZXNwb25zaWJsZSB0byBjcmVhdGUgdGhlIFNWRyBlbGVtZW50XG4gICAqIGZvciBkaXNwbGF5IHRoZSBjb25uZXRpb24uIFN1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSB0aGlzIG1ldGhvZFxuICAgKi9cbiAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbGVtZW50IG11c3QgYmUgZGVmaW5lZCBpbiBhIHN1YmNsYXNzIVwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgY29ubmV0aW9uIG5lZWRzIHRvIGJlIHVwZGF0ZWQuXG4gICAqIFRoaXMgaGFwcGVucyB3aGVuIHNvY2tldHMgYW5kL29yIGNvbXBvbmVudHMgY29ubmVjdGVkIHRvIHRoaXNcbiAgICogb2JqZWN0IHdoZXJlIG1vdmVkXG4gICAqL1xuICB1cGRhdGVTVkdFbGVtZW50KCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgbXVzdCBiZSBkZWZpbmVkIGluIGEgc3ViY2xhc3MhXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIHJlbW92ZWQgZnJvbSB0aGUgY2FudmFzXG4gICAqL1xuICBkZXN0cm95KCkge31cbn1cbiIsIi8qKlxuICogY25vZGVzLXVpXG4gKlxuICogQSBHVUkgZm9yIGNub2Rlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vcG9zaXRpb25cIjtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBzaW5nbGUgTWVudSBpdGVtLlxuICogQSBtZW51IGl0ZW1oYXMgYSB0ZXh0LCBhbmQgYSBjYWxsYmFjayB0byBjYWxsIG9uIGNsaWNrXG4gKi9cbmV4cG9ydCBjbGFzcyBNZW51SXRlbSB7XG4gIC8qKiBUaGUgXCJjbGlja1wiIGNhbGxiYWNrICovXG4gICNjYWxsYmFjayA9IG51bGw7XG5cbiAgLyoqIFRoZSB0ZXh0IGZvciB0aGUgaXRlbSAqL1xuICAjdGV4dCA9IFwiXCI7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdHMgYSBtZW51IGl0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGl0bGUgb2YgdGhlIG1lbnUgaXRlbVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCBvbiBjbGljayBldmVudFxuICAgKi9cbiAgY29uc3RydWN0b3IodGV4dCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLiN0ZXh0ID0gdGV4dDtcbiAgICB0aGlzLiNjYWxsYmFjayA9IGNhbGxiYWNrO1xuICB9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsKSB7XG4gICAgdGhpcy4jdGV4dCA9IHZhbDtcbiAgfVxuICBnZXQgY2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuI2NhbGxiYWNrO1xuICB9XG4gIHNldCBjYWxsYmFjayh2YWwpIHtcbiAgICB0aGlzLiNjYWxsYmFjayA9IHZhbDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaW1wbGVtZW50cyBhIG1lbnVcbiAqL1xuZXhwb3J0IGNsYXNzIE1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKiogTWVudSBpdGVtcyAqL1xuICAjaXRlbXMgPSBbXTtcblxuICAvKipcbiAgICogQ29uc3RydWN0IGEgbmV3IE1lbnUgZm9yIHRoZSBjYW52YXNcbiAgICogQHBhcmFtIHtDYW52YXN9IGNhbnZhcyBUaGUgY2FudmFzXG4gICAqIEBwYXJhbSB7TWVudUl0ZW1bXX0gaXRlbXMgVGhlIG1lbnUgaXRlbXNcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgaXRlbXMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW92ZWFibGUgPSBmYWxzZTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLiNpdGVtcyA9IGl0ZW1zO1xuICB9XG5cbiAgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLiNpdGVtcztcbiAgfVxuICBzZXQgaXRlbXModmFsKSB7XG4gICAgdGhpcy4jaXRlbXMgPSB2YWw7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgbWVudVxuICAgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBjb29yZGluYXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IGNvb3JkaW5hdGVcbiAgICovXG4gIHNob3coeCwgeSkge1xuICAgIHRoaXMuc2V0dXAoKTtcblxuICAgIGNhbnZhcy5hZGRDb21wb25lbnQodGhpcyk7XG4gICAgdGhpcy5wb3MgPSBuZXcgUG9zaXRpb24oeCwgeSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHVwIHRoZSBjb250YWluZXJcbiAgICovXG4gIHNldHVwKCkge1xuICAgIHN1cGVyLnNldHVwKCk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgdGhlIG1lbnUgdmVydGljYWwgc2l6ZSwgYmFzZWQgb24gbWVudSBpdGVtc1xuICAgKi9cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIHN1YmNsYXNzIG11c3QgaW1wbGVtZW50IHRoaXMgbWV0aG9kIVwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMZXRzIGNyZWF0ZSB0aGUgU1ZHIGVsZW1lbnRcbiAgICovXG4gIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBzdWJjbGFzcyBtdXN0IGltcGxlbWVudCB0aGlzIG1ldGhvZCFcIik7XG4gIH1cbn1cbiIsIi8qKlxuICogY25vZGVzLXVpXG4gKlxuICogQSBHVUkgZm9yIGNub2Rlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuLyoqXG4gKiBBIGNsYXNzIHRoYXQgcmVwcmVzZW50cyBhIHBvc2l0aW9uIGluIFNWRyBzcGFjZVxuICovXG5leHBvcnQgY2xhc3MgUG9zaXRpb24ge1xuICAvKiogVGhlIHggY29vcmRpbmF0ZSAqL1xuICAjeCA9IDA7XG5cbiAgLyoqIFRoZSB5IGNvb3JkaW5hdGUgKi9cbiAgI3kgPSAwO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBuZXcgUG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHggY29vcmRpbmF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBjb29yZGluYXRlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy4jeCA9IHg7XG4gICAgdGhpcy4jeSA9IHk7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy4jeDtcbiAgfVxuICBzZXQgeCh2YWwpIHtcbiAgICB0aGlzLiN4ID0gdmFsO1xuICB9XG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLiN5O1xuICB9XG4gIHNldCB5KHZhbCkge1xuICAgIHRoaXMuI3kgPSB2YWw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbmV3IHBvc2l0aW9uIGJ5IGFkZGluZyBhbm90aGVyIGluc3RhbmNlIG9mXG4gICAqIHBvc2l0aW9uIGNvb3JkaW5hdGUgYnkgY29vcmRpbmF0ZVxuICAgKiBAcGFyYW0ge1Bvc2l0aW9ufSBwb3NcbiAgICovXG4gIGFkZChwb3MpIHtcbiAgICByZXR1cm4gbmV3IFBvc2l0aW9uKHRoaXMuI3ggKyBwb3MueCwgdGhpcy4jeSArIHBvcy55KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBuZXcgcG9zaXRpb24gYnkgc3VidHJhY3RpbmcgYW5vdGhlciBpbnN0YW5jZSBvZlxuICAgKiBwb3NpdGlvbiBjb29yZGluYXRlIGJ5IGNvb3JkaW5hdGVcbiAgICogQHBhcmFtIHtQb3NpdGlvbn0gcG9zXG4gICAqL1xuICBzdWIocG9zKSB7XG4gICAgcmV0dXJuIG5ldyBQb3NpdGlvbih0aGlzLiN4IC0gcG9zLngsIHRoaXMuI3kgLSBwb3MueSk7XG4gIH1cbn1cbiIsIi8qKlxuICogY25vZGVzLXVpXG4gKlxuICogQSBHVUkgZm9yIGNub2Rlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XG5cbi8qKlxuICogQSBTb2NrZXQgaXMgYSBzcGVjaWFsIGNhc2Ugb2YgY29tcG9uZW50LiBUaXBpY2FsbHksIHRvIGRlc2lnblxuICogYSBjb21wb25lbnQgbm9kZSBpbiBjYW52YXMtdWksIHlvdSBkZWZpbmUgYSBiYXNlIGNvbXBvbmVudCwgYW5kIGF0dGFjaFxuICogdG8gaXQgYSBsaXN0IG9mIHN1YmNvbXBvbmVudHMgdGhhdCBkZXJpdmVzIGZyb20gU29ja2V0IGNsYXNzLCBmb3JcbiAqIGdpdmUgdGhlIHVzZXIgdGhlIGNoYW5jZSB0byBsaW5rIG5vZGVzXG4gKi9cbmV4cG9ydCBjbGFzcyBTb2NrZXRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKiogVGhpcyBzb2NrZXQgaXMgY29ubmVjdGluZywgdGhlIHVzZXIgaXMgZHJhZ2dpbmcgd2l0aCB0aGUgbW91c2UgKi9cbiAgI2Nvbm5lY3RpbmcgPSBmYWxzZTtcblxuICAvKiogVGhlIGxhc3QgKG90aGVyKSBzb2NrZXQgcG9pbnRlZCBieSB0aGUgbW91c2UgY3Vyc29yIHdoaWxlIGNvbm5lY3RpbmcgKi9cbiAgI2N1cnJlbnRQZWVyU29ja2V0Q29tcG9uZW50ID0gbnVsbDtcblxuICAvKiogVGhpcyBTVkcgY29tcG9uZW50IGlzIHVzZWQgdG8gZGlzcGxheSBhIHRlbXBvcmFyeSBmbG9hdGluZyBsaW5rIGR1cmluZyB0aGUgY29ubmVjdGlvbiAqL1xuICAjdGVtcENvbm5lY3Rpb25FbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGdldCBjb25uZWN0aW5nKCkge1xuICAgIHJldHVybiB0aGlzLiNjb25uZWN0aW5nO1xuICB9XG4gIHNldCBjb25uZWN0aW5nKHZhbCkge1xuICAgIHRoaXMuI2Nvbm5lY3RpbmcgPSB2YWw7XG4gIH1cbiAgZ2V0IGN1cnJlbnRQZWVyU29ja2V0Q29tcG9uZW50KCkge1xuICAgIHJldHVybiB0aGlzLiNjdXJyZW50UGVlclNvY2tldENvbXBvbmVudDtcbiAgfVxuICBnZXQgdGVtcENvbm5lY3Rpb25FbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jdGVtcENvbm5lY3Rpb25FbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVwIGEgc29ja2V0LiBBIHNvY2tldCBpcyBub3QgbW92YWJsZSBieSBkZWZhdWx0IGFuZFxuICAgKiBjYWxscyB0aGUgY3JlYXRlRWxlbWVudCgpIG1ldGhvZCB0byBwcmVwYXJlIHRoZSBTVkcgZWxlbWVudFxuICAgKi9cbiAgc2V0dXAoKSB7XG4gICAgdGhpcy5tb3ZlYWJsZSA9IGZhbHNlO1xuICAgIHN1cGVyLnNldHVwKCk7XG5cbiAgICAvLyBBbGwgc29ja2V0cyBkb2VzIG5vdCBtYW5hZ2UgcG9pbnRlciBldmVudHMgc28gZXZlbnRzXG4gICAgLy8gY2FuIHBhc3MgdGhyb3VnaCB0byB0aGUgYmFzZSBjb21wb25lbnRFbCBlbGVtZW50Li4uLlxuICAgIHRoaXMuY29tcG9uZW50RWwuc3R5bGVbXCJwb2ludGVyLWV2ZW50c1wiXSA9IFwibm9uZVwiO1xuICAgIC8vIC4uLiBidXQgdGhlIGRyYWdFbGUgZWxlbWVudCAodGhhdCBieSBkZWZhdWx0IGlzIHRoZSBlbnRpcmUgY29tcG9uZW50RWwgOy0pXG4gICAgdGhpcy5kcmFnRWxlbWVudC5zdHlsZVtcInBvaW50ZXItZXZlbnRzXCJdID0gXCJhdXRvXCI7XG5cbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmRyYWdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCAoZSkgPT4ge1xuICAgICAgc2VsZi5vblBvaW50ZXJEb3duKGUpO1xuICAgIH0pO1xuICAgIHRoaXMuZHJhZ0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCAoZSkgPT4ge1xuICAgICAgc2VsZi5vblBvaW50ZXJVcChlKTtcbiAgICB9KTtcbiAgICB0aGlzLmRyYWdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCAoZSkgPT4ge1xuICAgICAgc2VsZi5vblBvaW50ZXJNb3ZlKGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQgdGhhdCByZXNwb25kcyB0byBwb2ludGVyIGV2ZW50cy4gQnlcbiAgICogZGVmYXVsdCB0aGlzIGlzIHRoZSBlbnRpcmUgcm9vdCBlbGVtZW50XG4gICAqL1xuICBnZXQgZHJhZ0VsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RWw7XG4gIH1cblxuICAvKipcbiAgICogTWFuYWdlcyB0aGUgcG9pbnRlcmRvd24gZXZlbnQgdG8gaW1wbGVtZW50IHRoZSBzdGFydCBvZiB0aGVcbiAgICogZHJhZy1hbmQtbGluayBwcm9jZXNzLiBJZiB0aGUgc29ja2V0IGlzIGEgb25lLWxpbmsgc29ja2V0LCBzdWNoIGFzXG4gICAqIGEgXCJuZXh0XCIgY29ubmVjdGlvbiB0byBhbm90aGVyIG5vZGUsIGEgcG9pbnRlcmRvd24gc2hvdWxkIGRpc2Nvbm5lY3RcbiAgICogdGhlIG9sZCBjb25uZWN0aW9uIGFuZCByZXN0YXJ0IHRoZSBkcmFnZ2luZyBvZiB0aGUgcGVlayBzb2NrZXQsIHRvIGdpdmVcbiAgICogdGhlIHVzZXIgdGhlIGNoYW5jZSB0byBjb25uZWN0IHRoZSBwZWVyIHNvY2tldCB0byBhbm90aGVyIG9uZS5cbiAgICogSWYgdGhlIHNvY2tldCB3YXMgbm90IGFscmVhZHkgY29ubmVjdGVkLCBjYWxsIHRoZSBjb25uZWN0aW9uU3RhcnRlZCgpXG4gICAqIG1ldGhvZCB0aGF0IHdpbGwgYmUgb3ZlcnJpZGRlbiBpbiBzdWJjbGFzc2VzXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIHBvaW50ZXJkb3duIGV2ZW50XG4gICAqL1xuICBvblBvaW50ZXJEb3duKGUpIHtcbiAgICBpZiAoZS5idXR0b24gPT09IDApIHtcbiAgICAgIGlmICghdGhpcy5oYXNTaW5nbGVDb25uZWN0aW9uIHx8ICF0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHRoaXMuI2Nvbm5lY3RpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmRyYWdFbGVtZW50LnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBDb25uZWN0IGFjdGlvbiBpcyBzdGFydGVkXG4gICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXJ0ZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwZWVyQ29tcG9uZW50ID0gdGhpcy5nZXRTaW5nbGVQZWVyQ29tcG9uZW50KCk7XG4gICAgICAgIHBlZXJDb21wb25lbnQub25Qb2ludGVyRG93bihlKTtcblxuICAgICAgICBsZXQgY29uID0gdGhpcy5jYW52YXMuZ2V0Q29ubmVjdGlvbnNGb3IodGhpcylbMF07XG4gICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUNvbm5lY3Rpb24oY29uKTtcblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBtYW5hZ2VzIHRoZSBwb2ludGVydXAgZXZlbnQgdG8gaW1wbGVtZW50XG4gICAqIHRoZSBmaW5hbCBwYXJ0IG9mIHRoZSBjb25uZWN0aW9uLiBJZiB0aGUgcG9pbnRlciBpcyBvdmVyaW5nIGFcbiAgICogdmFsaWQgcGVlciBzb2NrZXQsIHRoZW4gdGhlIGNvbm5lY3Rpb24gY2EgYmUgZG9uZSwgYW5kIHRoZVxuICAgKiBjb25uZWN0aW9uRG9uZSgpIG1ldGhvZCBjYW4gYmUgY2FsbC4gT3RoZXJ3aXNlIHRoZVxuICAgKiBjb25uZWN0aW9uRW5kZWRPdXRPZlNvY2tldCgpIGlzIGNhbGxlZC5cbiAgICogQHBhcmFtIHtFdmVudH0gZSBUaGUgcG9pbnRlcnVwIGV2ZW50XG4gICAqL1xuICBvblBvaW50ZXJVcChlKSB7XG4gICAgaWYgKGUuYnV0dG9uID09PSAwKSB7XG4gICAgICB0aGlzLiNjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRyYWdFbGVtZW50LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBpZiAodGhpcy4jY3VycmVudFBlZXJTb2NrZXRDb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGNvbm5lY3RpbmdTb2NrZXRDb21wb25lbnQgPSB0aGlzLiNjdXJyZW50UGVlclNvY2tldENvbXBvbmVudDtcbiAgICAgICAgdGhpcy4jY3VycmVudFBlZXJTb2NrZXRDb21wb25lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25Eb25lKGNvbm5lY3RpbmdTb2NrZXRDb21wb25lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uRW5kZWRPdXRPZlNvY2tldChlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgbWFuYWdlcyB0aGUgcG9pbnRlcm1vdmUgZXZlbnQgdG8gaW1wbGVtZW50IHRoZVxuICAgKiBtaWRkbGUgcGFydCBvZiB0aGUgY29ubmVjdGlvbiBwcm9jZXNzLiBEdXJpbmcgdGhpcyBwaGFzZSwgY25vZGVzLXVpXG4gICAqIGNoZWNrIGlmIHRoZSBwb2ludGVyIGlzIG92ZXJpbmcgYSB2YWxpZCBwZWVyIHNvY2tldCBjb21wb25lbnQsIGFuZFxuICAgKiBpZiB0cnVlLCBzaG93IHRoZSB0ZW1wcmFyeSBsaW5rIGluIGEgXCJ2YWxpZCBzdGF0ZVwiLCBzdWNoIGFzIGEgc3BlY2lhbCBjb2xvclxuICAgKiBvZiB0aGUgc3Ryb2tlIHN0cm9rZSwgYW5kIHN0b3JlIHRoZSBwZWVyIGNvbXBvbmVudCBpbiB0aGUgY3VycmVudFBlZXJTb2NrZXRDb21wb25lbnRcbiAgICogZm9yIGZ1dHVyZSB1c2UuXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIHBvaW50ZXJtb3ZlIGV2ZW50XG4gICAqL1xuICBvblBvaW50ZXJNb3ZlKGUpIHtcbiAgICBpZiAodGhpcy4jY29ubmVjdGluZykge1xuICAgICAgLy8gVGVzdCBpZiBhIHNvY2tldCBpcyBwb2ludGVkXG4gICAgICBsZXQgcG9pbnRlZENvbXBvbmVudCA9IHRoaXMuY2FudmFzLmNvbXBvbmVudEZyb21Qb3NpdGlvbihlLmNsaWVudFgsIGUuY2xpZW50WSwgdHJ1ZSk7XG5cbiAgICAgIGxldCBwID0gdGhpcy5jYW52YXMuY2xpZW50VG9TdmdQb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgICBpZiAocG9pbnRlZENvbXBvbmVudCkge1xuICAgICAgICBpZiAodGhpcy5jYW5BY2NlcHRQZWVyU29ja2V0KHBvaW50ZWRDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhpcy5jb25uZWN0aW9uTW92aW5nKHAueCwgcC55LCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy4jY3VycmVudFBlZXJTb2NrZXRDb21wb25lbnQgPSBwb2ludGVkQ29tcG9uZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29ubmVjdGlvbk1vdmluZyhwLngsIHAueSwgdHJ1ZSk7XG4gICAgICAgICAgdGhpcy4jY3VycmVudFBlZXJTb2NrZXRDb21wb25lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25Nb3ZpbmcocC54LCBwLnksIGZhbHNlKTtcbiAgICAgICAgdGhpcy4jY3VycmVudFBlZXJTb2NrZXRDb21wb25lbnQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhcnJheSBvZiBjb250ZXh0IG1lbnUgaXRlbXMuIElmIHRoZSBjb21wb25lbnRcbiAgICogcmV0dXJucyBudWxsLCBubyBjb250ZXh0dWFsIG1lbnUgaXMgc2hvd25cbiAgICovXG4gIGdldENvbnRleHRNZW51SXRlbXMoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHVzZXIgaGFzIGJlZ2FuIGRyYWdnaW5nIHRoZSBzb2NrZXQgdG8gY3JlYXRlIGEgY29ubmVjdGlvblxuICAgKi9cbiAgY29ubmVjdGlvblN0YXJ0ZWQoKSB7XG4gICAgdGhpcy4jdGVtcENvbm5lY3Rpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcblxuICAgIHRoaXMuI3RlbXBDb25uZWN0aW9uRWwuc2V0QXR0cmlidXRlKFxuICAgICAgXCJkXCIsXG4gICAgICBgXG4gICAgICBNICR7dGhpcy5hYnNQb3MueH0gJHt0aGlzLmFic1Bvcy55fVxuICAgIGBcbiAgICApO1xuXG4gICAgdGhpcy5jYW52YXMuY29ubmVjdGlvbnNFbC5hcHBlbmRDaGlsZCh0aGlzLiN0ZW1wQ29ubmVjdGlvbkVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdXNlciBpcyBtb3ZpbmcgdGhlIHBvaW50ZXIgYXJvdW5kLCB3aXRoIGEgY29ubmVjdGlvbiBwZW5kaW5nXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IGNvb3JkaW5hdGUgaW4gU1ZHIHNwYWNlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IGNvb3JkaW5hdGUgaW4gU1ZHIHNwYWNlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW52YWxpZCB0cnVlIGlmIHRoZSBwb2ludGVyIGlzIG92ZXJpbmcgYSB1bmFjY2VwdGFibGUgc29ja2V0XG4gICAqL1xuICBjb25uZWN0aW9uTW92aW5nKHgsIHksIGludmFsaWQpIHtcbiAgICBsZXQgc291cmNlUG9pbnQgPSBuZXcgUG9zaXRpb24odGhpcy5hYnNQb3MueCwgdGhpcy5hYnNQb3MueSk7XG4gICAgbGV0IHRhcmdldFBvaW50ID0gbmV3IFBvc2l0aW9uKFxuICAgICAgdGhpcy5jdXJyZW50UGVlclNvY2tldENvbXBvbmVudCA/IHRoaXMuY3VycmVudFBlZXJTb2NrZXRDb21wb25lbnQuYWJzUG9zLnggOiB4LFxuICAgICAgdGhpcy5jdXJyZW50UGVlclNvY2tldENvbXBvbmVudCA/IHRoaXMuY3VycmVudFBlZXJTb2NrZXRDb21wb25lbnQuYWJzUG9zLnkgOiB5XG4gICAgKTtcblxuICAgIHRoaXMuI3RlbXBDb25uZWN0aW9uRWwuc2V0QXR0cmlidXRlKFxuICAgICAgXCJkXCIsXG4gICAgICBgXG4gICAgICBNICR7c291cmNlUG9pbnQueH0gJHtzb3VyY2VQb2ludC55fVxuICAgICAgTCAke3RhcmdldFBvaW50Lnh9ICR7dGFyZ2V0UG9pbnQueX1cbiAgICBgXG4gICAgKTtcblxuICAgIHRoaXMuI3RlbXBDb25uZWN0aW9uRWwuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIDIpO1xuICAgIHRoaXMuI3RlbXBDb25uZWN0aW9uRWwuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwiYmxhY2tcIik7XG4gICAgdGhpcy4jdGVtcENvbm5lY3Rpb25FbC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwidHJhbnNwYXJlbnRcIik7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHVzZXIgaGFzIGNvbXBsZXRlZCBhIHZhbGlkIGNvbm5lY3Rpb25cbiAgICogQHBhcmFtIHtTb2NrZXRDb21wb25lbnR9IHNvY2tldENvbXAgUGVlciBzb2NrZXQgdG8gY29ubmVjdFxuICAgKi9cbiAgY29ubmVjdGlvbkRvbmUoc29ja2V0Q29tcCkge1xuICAgIHRoaXMuY2FudmFzLmNvbm5lY3Rpb25zRWwucmVtb3ZlQ2hpbGQodGhpcy4jdGVtcENvbm5lY3Rpb25FbCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHVzZXIgaGFzIHJlbGVhc2VkIHRoZSBwb2ludGVyIGJ1dHRvbiBvdXQgb2YgYSB2YWxpZCBzb2NrZXQsXG4gICAqIHNvIGJ5IGRlZmF1bHQsIGNhbmNlbCB0aGUgY29ubmVjdGlvblxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIFRoZSBldmVudCBwb2ludGVydXBcbiAgICovXG4gIGNvbm5lY3Rpb25FbmRlZE91dE9mU29ja2V0KGUpIHtcbiAgICB0aGlzLmNhbnZhcy5jb25uZWN0aW9uc0VsLnJlbW92ZUNoaWxkKHRoaXMuI3RlbXBDb25uZWN0aW9uRWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFF1ZXJ5IGlmIHRoaXMgc29ja2V0IGNvdWxkIGFjY2VwdCBhIGNvbm5lY3Rpb24gd2l0aFxuICAgKiBhIHBlZXIgc29ja2V0IHBhc3NlZCBhcyBwYXJtZXRlclxuICAgKiBAcGFyYW0ge1NvY2tldENvbXBvbmVudH0gc29ja2V0Q29tcCBQZWVyIHNvY2tldCB0byBjb25uZWN0XG4gICAqL1xuICBjYW5BY2NlcHRQZWVyU29ja2V0KHNvY2tldENvbXApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIG1ldGhvZCBtdXN0IGJlIG92ZXJyaWRkZW4gaW4gYSBzdWJjbGFzcyFcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRydWUgaWYgdGhpcyBzb2NrZXQgb25seSBzdXBwb3J0IG9uZSBjb25uZWN0aW9uIGF0IG1vc3RcbiAgICovXG4gIGdldCBoYXNTaW5nbGVDb25uZWN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIG11c3QgYmUgb3ZlcnJpZGRlbiBpbiBhIHN1YmNsYXNzIVwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJcyB0aGlzIHNvY2tldCBhY3R1YWxseSBjb25uZWN0ZWQ/XG4gICAqL1xuICBnZXQgaXNDb25uZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLmdldENvbm5lY3Rpb25zRm9yKHRoaXMpLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBwZWVyIGNvbXBvbmVudCBvZiB0aGUgc29ja2V0IGluIGNhc2VcbiAgICogb2YgdGhpcyBzb2NrZXQgaXMgYSBzaW5nbGUgY29ubmVjdGlvbi4gT3RoZXJ3aXNlIHJldHVybiBudWxsXG4gICAqL1xuICBnZXRTaW5nbGVQZWVyQ29tcG9uZW50KCkge1xuICAgIGlmICghdGhpcy5oYXNTaW5nbGVDb25uZWN0aW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvbiA9IHRoaXMuY2FudmFzLmdldENvbm5lY3Rpb25zRm9yKHRoaXMpWzBdO1xuICAgICAgaWYgKHRoaXMgPT09IGNvbi5zb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIGNvbi50YXJnZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29uLnNvdXJjZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogY25vZGVzLXVpXG4gKlxuICogQSBHVUkgZm9yIGNub2Rlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NhbnZhcy9jb21wb25lbnRcIjtcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4uL2NhbnZhcy9wb3NpdGlvblwiO1xuaW1wb3J0IHsgUHJldlNvY2tldENvbXBvbmVudCB9IGZyb20gXCIuL3ByZXZcIjtcbmltcG9ydCB7IE5leHRTb2NrZXRDb21wb25lbnQgfSBmcm9tIFwiLi9uZXh0XCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuL3RoZW1lXCI7XG5pbXBvcnQgeyBPdXRwdXRTb2NrZXRDb21wb25lbnQgfSBmcm9tIFwiLi9vdXRwdXRcIjtcbmltcG9ydCB7IElucHV0U29ja2V0Q29tcG9uZW50IH0gZnJvbSBcIi4vaW5wdXRcIjtcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSBcIi4uL2NhbnZhcy9tZW51XCI7XG5pbXBvcnQgeyBTb2NrZXRDb21wb25lbnQgfSBmcm9tIFwiLi4vY2FudmFzL3NvY2tldFwiO1xuaW1wb3J0IHsgUHJvZ3JhbSB9IGZyb20gXCJAbWFyY28uamFjb3ZvbmUvY25vZGVzL2Nub2Rlc1wiO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIG1haW4gY2xhc3MgZm9yIG1hbmFnaW5nIGEgc2luZ2xlIENOb2RlXG4gKiBpbnNpZGUgdGhlIGNub2Rlcy11aSBjYW52YXMuIEl0IGVtYmVkIGEgY25vZGVzIG5vZGUgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIENub2RlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLyoqIFRoZSBjbm9kZXMgbm9kIGluc3RhbmNlICovXG4gICNub2RlO1xuXG4gIC8qKiBBbiBTVkcgZWxlbWVudCB0byBkcmF3IHRoZSBjb250YWluZXIgb2YgdGhlIG5vZGUgKi9cbiAgI2NvbnRhaW5lckVsO1xuXG4gIC8qKiBBbiBTVkcgZWxlbWVudCB0byBkcmF3IHRoZSB0aXRsZSBvZiB0aGUgbm9kZSAqL1xuICAjdGl0bGVFbDtcblxuICAvKiogQW4gU1ZHIGVsZW1lbnQgdG8gZHJhdyB0aGUgdG9wLWxlZnQgc3ltYm9sIGZvciB0aGUgbm9kZSAqL1xuICAjc3ltYm9sRWw7XG5cbiAgLyoqIEFuIFNWRyBlbGVtZW50IHRvIGRyYXcgdGhlIHRvcC1sZWZ0IHNpZ24gZm9yIHRoZSBub2RlICovXG4gICNzaWduRWw7XG5cbiAgY29uc3RydWN0b3Iobm9kZSwgY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLiNub2RlID0gbm9kZTtcblxuICAgIC8vIHdyaXRlIGEgYmFjay1yZWZlcmVuY2VcbiAgICB0aGlzLiNub2RlLl9fY29tcCA9IHRoaXM7XG5cbiAgICBzdXBlci5zZXR1cCgpO1xuICAgIGNhbnZhcy5hZGRDb21wb25lbnQodGhpcyk7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhbiBhY3RpdmUgcHJvZ3JhbSwgYWRkIHRoaXMgbm9kZSB0byBpdFxuICAgIGlmICh0aGlzLmNhbnZhcy5wcm9ncmFtKSB7XG4gICAgICB0aGlzLmNhbnZhcy5wcm9ncmFtLmFkZE5vZGUodGhpcy4jbm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVTdWJjb21wb25lbnRzKCk7XG4gIH1cblxuICBnZXQgbm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgbm9kZSB2ZXJ0aWNhbCBzaXplLCBiYXNlZCBvbiBub2RlXG4gICAqIGNoYXJhY3RlcmlzdGljcyBpbiB0ZXJtcyBvZiBudW1iZXIgb2YgaW5wdXQsIG91dHB1dCxcbiAgICogYW5kIG5leHRzLiBJdCB0YWtlcyBhY2NvdW50IG9mIHRoZSBjdXJyZW50IHRoZW1lXG4gICAqL1xuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiAoXG4gICAgICBUaGVtZS5jdXJyZW50Lk5PREVfQk9SREVSX1JBRElVUyAqIDAuNSArXG4gICAgICA0MCArIC8vIFRpdGxlXG4gICAgICAzMCAqIE1hdGgubWF4KHRoaXMubm9kZS5mdW5jdGlvbmFsID8gMCA6IDEsIHRoaXMubm9kZS5uZXh0cy5sZW5ndGgpICsgLy8gTmV4dHMvcHJldnMsIGF0IGxlYXN0IDEgcHJldlxuICAgICAgMzAgKiBNYXRoLm1heCgwLCB0aGlzLm5vZGUub3V0cHV0cy5sZW5ndGgpICsgLy8gT3V0cHV0c1xuICAgICAgMzAgKiBNYXRoLm1heCgwLCB0aGlzLm5vZGUuaW5wdXRzLmxlbmd0aCkgKyAvLyBJbnB1dHNcbiAgICAgIDE1IC8vIFBhZGRpbmdcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExldHMgY3JlYXRlIHRoZSBTVkcgZWxlbWVudFxuICAgKi9cbiAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBsZXQgbm9kZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJnXCIpO1xuICAgIHRoaXMuI2NvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJwYXRoXCIpO1xuICAgIHRoaXMuI3RpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImZvcmVpZ25PYmplY3RcIik7XG4gICAgdGhpcy4jc3ltYm9sRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImNpcmNsZVwiKTtcbiAgICB0aGlzLiNzaWduRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInBhdGhcIik7XG5cbiAgICBub2RlRWwuYXBwZW5kQ2hpbGQodGhpcy4jY29udGFpbmVyRWwpO1xuICAgIG5vZGVFbC5hcHBlbmRDaGlsZCh0aGlzLiN0aXRsZUVsKTtcbiAgICBub2RlRWwuYXBwZW5kQ2hpbGQodGhpcy4jc3ltYm9sRWwpO1xuICAgIG5vZGVFbC5hcHBlbmRDaGlsZCh0aGlzLiNzaWduRWwpO1xuXG4gICAgdGhpcy4jdGl0bGVFbC5pbm5lckhUTUwgPSB0aGlzLm5vZGUubmFtZTtcbiAgICB0aGlzLiN0aXRsZUVsLnN0eWxlID0gYFxuICAgICAgZm9udDogJHtUaGVtZS5jdXJyZW50Lk5PREVfVElUTEVfRk9OVH07IFxuICAgICAgY29sb3I6ICR7IXRoaXMubm9kZS5mdW5jdGlvbmFsID8gVGhlbWUuY3VycmVudC5OT0RFX1RJVExFX0NPTE9SIDogVGhlbWUuY3VycmVudC5OT0RFX0ZVTkNUSU9OQUxfVElUTEVfQ09MT1J9OyBcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZWA7XG4gICAgdGhpcy4jdGl0bGVFbC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFRoZW1lLmN1cnJlbnQuTk9ERV9CT1JERVJfUkFESVVTICogMC41KTtcbiAgICB0aGlzLiN0aXRsZUVsLnNldEF0dHJpYnV0ZShcInlcIiwgVGhlbWUuY3VycmVudC5OT0RFX0JPUkRFUl9SQURJVVMgKiAwLjUpO1xuICAgIHRoaXMuI3RpdGxlRWwuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgVGhlbWUuY3VycmVudC5OT0RFX1dJRFRIIC0gVGhlbWUuY3VycmVudC5OT0RFX0JPUkRFUl9SQURJVVMgKiAwLjUgKiAyKTtcbiAgICB0aGlzLiN0aXRsZUVsLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCAzMCk7XG5cbiAgICB0aGlzLiNjb250YWluZXJFbC5zZXRBdHRyaWJ1dGUoXG4gICAgICBcInN0cm9rZVwiLFxuICAgICAgIXRoaXMubm9kZS5mdW5jdGlvbmFsID8gVGhlbWUuY3VycmVudC5OT0RFX1NUUk9LRV9DT0xPUiA6IFRoZW1lLmN1cnJlbnQuTk9ERV9GVU5DVElPTkFMX1NUUk9LRV9DT0xPUlxuICAgICk7XG4gICAgdGhpcy4jY29udGFpbmVyRWwuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFRoZW1lLmN1cnJlbnQuTk9ERV9TVFJPS0VfV0lEVEgpO1xuICAgIHRoaXMuI2NvbnRhaW5lckVsLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgdGhpcy5ub2RlLmZ1bmN0aW9uYWwgPyBUaGVtZS5jdXJyZW50Lk5PREVfRlVOQ1RJT05BTF9GSUxMX0NPTE9SIDogVGhlbWUuY3VycmVudC5OT0RFX0ZJTExfQ09MT1IpO1xuICAgIHRoaXMuI2NvbnRhaW5lckVsLnNldEF0dHJpYnV0ZShcInhcIiwgXCIwXCIpO1xuICAgIHRoaXMuI2NvbnRhaW5lckVsLnNldEF0dHJpYnV0ZShcInlcIiwgXCIwXCIpO1xuXG4gICAgdGhpcy4jc3ltYm9sRWwuc2V0QXR0cmlidXRlKFwiY3hcIiwgMCk7XG4gICAgdGhpcy4jc3ltYm9sRWwuc2V0QXR0cmlidXRlKFwiY3lcIiwgMCk7XG4gICAgdGhpcy4jc3ltYm9sRWwuc2V0QXR0cmlidXRlKFwiclwiLCBUaGVtZS5jdXJyZW50Lk5PREVfQk9SREVSX1JBRElVUyAqIDAuOSk7XG4gICAgdGhpcy4jc3ltYm9sRWwuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFRoZW1lLmN1cnJlbnQuTk9ERV9TWU1CT0xfU1RST0tFX0NPTE9SKTtcbiAgICB0aGlzLiNzeW1ib2xFbC5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgVGhlbWUuY3VycmVudC5OT0RFX1NZTUJPTF9TVFJPS0VfV0lEVEgpO1xuICAgIHRoaXMuI3N5bWJvbEVsLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgVGhlbWUuY3VycmVudC5OT0RFX1NZTUJPTF9GSUxMX0NPTE9SKTtcblxuICAgIGxldCBzaWduUmFkaXVzID0gVGhlbWUuY3VycmVudC5OT0RFX0JPUkRFUl9SQURJVVMgKiAwLjc7XG4gICAgdGhpcy4jc2lnbkVsLnNldEF0dHJpYnV0ZShcbiAgICAgIFwiZFwiLFxuICAgICAgIXRoaXMubm9kZS5mdW5jdGlvbmFsXG4gICAgICAgID8gYFxuICAgICAgTSAke3NpZ25SYWRpdXMgKiAwLjV9IDBcbiAgICAgIEwgJHstc2lnblJhZGl1cyAqIDAuM30gJHstc2lnblJhZGl1cyAvIDJ9XG4gICAgICBMICR7LXNpZ25SYWRpdXMgKiAwLjN9ICR7c2lnblJhZGl1cyAvIDJ9XG4gICAgICBaXG4gICAgICBgXG4gICAgICAgIDogYFxuICAgICAgTSAke3NpZ25SYWRpdXMgKiAwLjZ9IDBcbiAgICAgIEwgJHstc2lnblJhZGl1cyAqIDAuNX0gMFxuXG4gICAgICBNIDAgJHstc2lnblJhZGl1cyAqIDAuNn1cbiAgICAgIEwgJHstc2lnblJhZGl1cyAqIDAuNX0gMFxuICAgICAgTCAwICR7K3NpZ25SYWRpdXMgKiAwLjZ9XG4gICAgICBgXG4gICAgKTtcbiAgICB0aGlzLiNzaWduRWwuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsICF0aGlzLm5vZGUuZnVuY3Rpb25hbCA/IFRoZW1lLmN1cnJlbnQuTk9ERV9TSUdOX0NPTE9SIDogVGhlbWUuY3VycmVudC5OT0RFX0ZVTkNUSU9OQUxfU0lHTl9DT0xPUik7XG4gICAgdGhpcy4jc2lnbkVsLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCAhdGhpcy5ub2RlLmZ1bmN0aW9uYWwgPyAxIDogMyk7XG4gICAgdGhpcy4jc2lnbkVsLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgIXRoaXMubm9kZS5mdW5jdGlvbmFsID8gVGhlbWUuY3VycmVudC5OT0RFX1NJR05fQ09MT1IgOiBcInRyYW5zcGFyZW50XCIpO1xuICAgIHRoaXMuI3NpZ25FbC5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWpvaW5cIiwgXCJudWxsXCIpO1xuICAgIHRoaXMuI3NpZ25FbC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiMFwiKTtcbiAgICB0aGlzLiNzaWduRWwuc2V0QXR0cmlidXRlKFwieVwiLCBcIjBcIik7XG5cbiAgICBub2RlRWwuc2V0QXR0cmlidXRlKFwieFwiLCBcIjBcIik7XG4gICAgbm9kZUVsLnNldEF0dHJpYnV0ZShcInlcIiwgXCIwXCIpO1xuXG4gICAgcmV0dXJuIG5vZGVFbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBjb25zdHJ1Y3QgYW5kL29yIHVwZGF0ZSBhbGwgc3ViIGNvbXBvbmVudHMuIFRoZXkgYXJlIGFsbCBzb2NrZXRzXG4gICAqIHJlcHJlc2VudGluZyBpbnB1dCwgb3V0cHV0cywgcHJldiBhbmQgbmV4dHMuXG4gICAqL1xuICB1cGRhdGVTdWJjb21wb25lbnRzKCkge1xuICAgIGxldCBwb3NZID0gNDAgKyAwLjUgKiBUaGVtZS5jdXJyZW50Lk5PREVfQk9SREVSX1JBRElVUztcblxuICAgIC8vIFByZXZcbiAgICBpZiAodGhpcy5ub2RlLnByZXYpIHtcbiAgICAgIGxldCBuQ29tcCA9IHRoaXMubm9kZS5wcmV2Ll9fY29tcDtcbiAgICAgIGlmICghbkNvbXApIHtcbiAgICAgICAgbkNvbXAgPSBuZXcgUHJldlNvY2tldENvbXBvbmVudCh0aGlzLm5vZGUucHJldik7XG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KG5Db21wKTtcblxuICAgICAgICAvLyB3cml0ZSBhIGJhY2tfcmVmZXJlbmNlXG4gICAgICAgIHRoaXMubm9kZS5wcmV2Ll9fY29tcCA9IG5Db21wO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgcG9zaXRpb25cbiAgICAgIG5Db21wLnBvcyA9IG5ldyBQb3NpdGlvbigwLCBwb3NZKTtcbiAgICB9XG5cbiAgICAvLyBOZXh0c1xuICAgIGZvciAoY29uc3QgbmV4dCBvZiB0aGlzLm5vZGUubmV4dHMpIHtcbiAgICAgIGxldCBuQ29tcCA9IG5leHQuX19jb21wO1xuICAgICAgaWYgKCFuQ29tcCkge1xuICAgICAgICBuQ29tcCA9IG5ldyBOZXh0U29ja2V0Q29tcG9uZW50KG5leHQpO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudChuQ29tcCk7XG5cbiAgICAgICAgLy8gd3JpdGUgYSBiYWNrLXJlZmVyZW5jZVxuICAgICAgICBuZXh0Ll9fY29tcCA9IG5Db21wO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgcG9zaXRpb25cbiAgICAgIG5Db21wLnBvcyA9IG5ldyBQb3NpdGlvbihUaGVtZS5jdXJyZW50Lk5PREVfV0lEVEgsIHBvc1kpO1xuICAgICAgcG9zWSArPSAzMDtcbiAgICB9XG5cbiAgICAvLyBPdXRwdXRcbiAgICBmb3IgKGNvbnN0IG91dHB1dCBvZiB0aGlzLm5vZGUub3V0cHV0cykge1xuICAgICAgbGV0IG5Db21wID0gb3V0cHV0Ll9fY29tcDtcbiAgICAgIGlmICghbkNvbXApIHtcbiAgICAgICAgbkNvbXAgPSBuZXcgT3V0cHV0U29ja2V0Q29tcG9uZW50KG91dHB1dCk7XG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KG5Db21wKTtcblxuICAgICAgICAvLyB3cml0ZSBhIGJhY2stcmVmZXJlbmNlXG4gICAgICAgIG91dHB1dC5fX2NvbXAgPSBuQ29tcDtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIHBvc2l0aW9uXG4gICAgICBuQ29tcC5wb3MgPSBuZXcgUG9zaXRpb24oVGhlbWUuY3VycmVudC5OT0RFX1dJRFRILCBwb3NZKTtcbiAgICAgIHBvc1kgKz0gMzA7XG4gICAgfVxuXG4gICAgLy8gSW5wdXRcbiAgICBmb3IgKGNvbnN0IGlucHV0IG9mIHRoaXMubm9kZS5pbnB1dHMpIHtcbiAgICAgIGxldCBuQ29tcCA9IGlucHV0Ll9fY29tcDtcbiAgICAgIGlmICghbkNvbXApIHtcbiAgICAgICAgbkNvbXAgPSBuZXcgSW5wdXRTb2NrZXRDb21wb25lbnQoaW5wdXQpO1xuICAgICAgICB0aGlzLmFkZENvbXBvbmVudChuQ29tcCk7XG5cbiAgICAgICAgLy8gd3JpdGUgYSBiYWNrLXJlZmVyZW5jZVxuICAgICAgICBpbnB1dC5fX2NvbXAgPSBuQ29tcDtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIHN0YXR1c1xuICAgICAgbkNvbXAudXBkYXRlU1ZHRWxlbWVudCgpO1xuICAgICAgbkNvbXAucG9zID0gbmV3IFBvc2l0aW9uKDAsIHBvc1kpO1xuICAgICAgcG9zWSArPSAzMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJjZXB0IGJ5IG92ZXJyaWRpbmcgdGhpcyBtZXRob2QgdG8gdXBkYXRlXG4gICAqIGdyYXBoaWNhbCBjb29vcmRpbmF0ZXMgaW4gdGhlIHByb2dyYW0gc3RydWN0dXJlXG4gICAqL1xuICB1cGRhdGVTVkdFbGVtZW50KCkge1xuICAgIHN1cGVyLnVwZGF0ZVNWR0VsZW1lbnQoKTtcblxuICAgIHRoaXMuI2NvbnRhaW5lckVsLnNldEF0dHJpYnV0ZShcbiAgICAgIFwiZFwiLFxuICAgICAgYFxuICAgICAgTSAwICR7VGhlbWUuY3VycmVudC5OT0RFX0JPUkRFUl9SQURJVVMgKiAxLjN9IFxuICAgICAgQSAke1RoZW1lLmN1cnJlbnQuTk9ERV9CT1JERVJfUkFESVVTICogMS4zfSAke1RoZW1lLmN1cnJlbnQuTk9ERV9CT1JERVJfUkFESVVTICogMS4zfSAwIDAgMCAke1RoZW1lLmN1cnJlbnQuTk9ERV9CT1JERVJfUkFESVVTICogMS4zfSAwIFxuICAgICAgTCAke1RoZW1lLmN1cnJlbnQuTk9ERV9XSURUSCAtIFRoZW1lLmN1cnJlbnQuTk9ERV9CT1JERVJfUkFESVVTfSAwIFxuICAgICAgQSAke1RoZW1lLmN1cnJlbnQuTk9ERV9CT1JERVJfUkFESVVTfSAke1RoZW1lLmN1cnJlbnQuTk9ERV9CT1JERVJfUkFESVVTfSAwIDAgMSAke1RoZW1lLmN1cnJlbnQuTk9ERV9XSURUSH0gJHtcbiAgICAgICAgVGhlbWUuY3VycmVudC5OT0RFX0JPUkRFUl9SQURJVVNcbiAgICAgIH0gXG4gICAgICBMICR7VGhlbWUuY3VycmVudC5OT0RFX1dJRFRIfSAke3RoaXMuaGVpZ2h0IC0gVGhlbWUuY3VycmVudC5OT0RFX0JPUkRFUl9SQURJVVN9IFxuICAgICAgQSAke1RoZW1lLmN1cnJlbnQuTk9ERV9CT1JERVJfUkFESVVTfSAke1RoZW1lLmN1cnJlbnQuTk9ERV9CT1JERVJfUkFESVVTfSAwIDAgMSAke1xuICAgICAgICBUaGVtZS5jdXJyZW50Lk5PREVfV0lEVEggLSBUaGVtZS5jdXJyZW50Lk5PREVfQk9SREVSX1JBRElVU1xuICAgICAgfSAke3RoaXMuaGVpZ2h0fSBcbiAgICAgIEwgJHtUaGVtZS5jdXJyZW50Lk5PREVfQk9SREVSX1JBRElVU30gJHt0aGlzLmhlaWdodH0gXG4gICAgICBBICR7VGhlbWUuY3VycmVudC5OT0RFX0JPUkRFUl9SQURJVVN9ICR7VGhlbWUuY3VycmVudC5OT0RFX0JPUkRFUl9SQURJVVN9IDAgMCAxIDAgJHt0aGlzLmhlaWdodCAtIFRoZW1lLmN1cnJlbnQuTk9ERV9CT1JERVJfUkFESVVTfSBcbiAgICAgIFpcbiAgICAgIGBcbiAgICApO1xuXG4gICAgdGhpcy51cGRhdGVTdWJjb21wb25lbnRzKCk7XG5cbiAgICAvLyBVcGRhdGUgVUkgZGF0YSBpbiBtZXRhIGluZm9cbiAgICBpZiAoIXRoaXMuI25vZGUubWV0YSkge1xuICAgICAgdGhpcy5ub2RlLm1ldGEgPSB7fTtcbiAgICB9XG4gICAgdGhpcy4jbm9kZS5tZXRhLnBvcyA9IHtcbiAgICAgIHg6IHRoaXMucG9zLngsXG4gICAgICB5OiB0aGlzLnBvcy55LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXJyYXkgb2YgY29udGV4dCBtZW51IGl0ZW1zLiBJZiB0aGUgY29tcG9uZW50XG4gICAqIHJldHVybnMgbnVsbCwgbm8gY29udGV4dHVhbCBtZW51IGlzIHNob3duXG4gICAqL1xuICBnZXRDb250ZXh0TWVudUl0ZW1zKCkge1xuICAgIGxldCBpdGVtcyA9IFtdO1xuXG4gICAgaWYgKHRoaXMubm9kZSBpbnN0YW5jZW9mIFByb2dyYW0pIHtcbiAgICAgIGl0ZW1zLnB1c2goXG4gICAgICAgIG5ldyBNZW51SXRlbShgPHRzcGFuIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiPkVkaXQuLi48L3RzcGFuPmAsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmNhbnZhcy5wdXNoUHJvZ3JhbSh0aGlzLm5vZGUpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgbm9kZSBjYW4gYWRkIGlucHV0cz9cbiAgICBpZiAodGhpcy5ub2RlLmNhbkFkZElucHV0KSB7XG4gICAgICBpdGVtcy5wdXNoKFxuICAgICAgICBuZXcgTWVudUl0ZW0oYDx0c3BhbiBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIj5BZGQgaW5wdXQ8L3RzcGFuPmAsICgpID0+IHtcbiAgICAgICAgICB0aGlzLm5vZGUuYWRkSW5wdXQoKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVNWR0VsZW1lbnQoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaXRlbXMucHVzaChcbiAgICAgIG5ldyBNZW51SXRlbShgPHRzcGFuIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiPkRpc2Nvbm5lY3QgYWxsPC90c3Bhbj5gLCAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGNvbXAgb2YgdGhpcy5jb21wb25lbnRzKSB7XG4gICAgICAgICAgaWYgKGNvbXAgaW5zdGFuY2VvZiBTb2NrZXRDb21wb25lbnQgJiYgY29tcC5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgY29ubiBvZiB0aGlzLmNhbnZhcy5nZXRDb25uZWN0aW9uc0Zvcihjb21wKSkge1xuICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVDb25uZWN0aW9uKGNvbm4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gVGhlIG5vZGUgY2FuIGJlIHJlbW92ZWQ/XG4gICAgaWYgKHRoaXMubm9kZS5yZW1vdmFibGUpIHtcbiAgICAgIGl0ZW1zLnB1c2goXG4gICAgICAgIG5ldyBNZW51SXRlbShgPHRzcGFuIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiPkRlbGV0ZTwvdHNwYW4+YCwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUNvbXBvbmVudCh0aGlzKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgaW50ZXJuYWwgbm9kZSByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudFxuICAgKiB1cG9uIGRlc3Ryb3lcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5ub2RlLl9fY29tcCA9IG51bGw7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhY3JpdmUgcHJvZ3JhbSwgcmVtb3ZlIHRoZSBub2RlIGZyb20gaXRcbiAgICBpZiAodGhpcy5jYW52YXMucHJvZ3JhbSkge1xuICAgICAgdGhpcy5jYW52YXMucHJvZ3JhbS5yZW1vdmVOb2RlKHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICB9XG59XG4iLCIvKipcbiAqIGNub2Rlcy11aVxuICpcbiAqIEEgR1VJIGZvciBjbm9kZXNcbiAqIExpY2Vuc2U6IE1JVFxuICogQXV0aG9yOiBNYXJjbyBKYWNvdm9uZVxuICogWWVhcjogMjAyMFxuICovXG5cbmltcG9ydCB7IEVudiB9IGZyb20gXCJAbWFyY28uamFjb3ZvbmUvY25vZGVzL2Nub2Rlc1wiO1xuaW1wb3J0IHsgUHJvZ3JhbSB9IGZyb20gXCJAbWFyY28uamFjb3ZvbmUvY25vZGVzL2Nub2Rlc1wiO1xuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4uL2NhbnZhcy9jYW52YXNcIjtcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSBcIi4uL2NhbnZhcy9tZW51XCI7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuLi9jYW52YXMvcG9zaXRpb25cIjtcbmltcG9ydCB7IElPQ29ubmVjdGlvbiB9IGZyb20gXCIuLi9jb25uZWN0aW9ucy9pb19jb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBQcmV2TmV4dENvbm5lY3Rpb24gfSBmcm9tIFwiLi4vY29ubmVjdGlvbnMvcHJldm5leHRfY29ubmVjdGlvblwiO1xuaW1wb3J0IHsgQ25vZGVDb21wb25lbnQgfSBmcm9tIFwiLi9jbm9kZVwiO1xuaW1wb3J0IHsgQ25vZGVzTWVudSB9IGZyb20gXCIuL2Nub2Rlc21lbnVcIjtcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4vdGhlbWVcIjtcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBlbnRyeS1wb2ludCBjbGFzcyBmb3IgbWFuYWdpbmcgdGhlIGNhbnZhc1xuICogcmVsYXRpdmUgdG8gYSBjbm9kZXMgcHJvZ3JhbS5cbiAqL1xuZXhwb3J0IGNsYXNzIENub2Rlc0NhbnZhcyBleHRlbmRzIENhbnZhcyB7XG4gIC8qKiBUaGUgZWRpdGVkIHByb2dyYW0gKi9cbiAgI3Byb2dyYW0gPSBudWxsO1xuXG4gIC8qKiBUaGUgc3RhY2sgb2YgZWRpdGVkIHByb2dyYW1zICovXG4gICNzdGFjayA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgc3VwZXIoZWwpO1xuXG4gICAgbGV0IGRlZnNFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZGVmc1wiKTtcblxuICAgIGRlZnNFbC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZmlsdGVyIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBpZD1cImRyb3BzaGFkb3dcIiBoZWlnaHQ9XCIxMzAlXCI+XG4gICAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj1cIlNvdXJjZUFscGhhXCIgc3RkRGV2aWF0aW9uPVwiM1wiLz4gXG4gICAgICAgIDxmZU9mZnNldCBkeD1cIjBcIiBkeT1cIjBcIiByZXN1bHQ9XCJvZmZzZXRibHVyXCIvPiBcbiAgICAgICAgPGZlQ29tcG9uZW50VHJhbnNmZXI+XG4gICAgICAgICAgPGZlRnVuY0EgdHlwZT1cImxpbmVhclwiIHNsb3BlPVwiMC4zXCIvPlxuICAgICAgICA8L2ZlQ29tcG9uZW50VHJhbnNmZXI+XG4gICAgICAgIDxmZU1lcmdlPiBcbiAgICAgICAgICA8ZmVNZXJnZU5vZGUvPlxuICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj1cIlNvdXJjZUdyYXBoaWNcIi8+IFxuICAgICAgICA8L2ZlTWVyZ2U+XG4gICAgICA8L2ZpbHRlcj5cbiAgICAgIDxtYXJrZXIgaWQ9XCJpby1hcnJvd1wiIHZpZXdCb3g9XCIwIDAgMTAgMTBcIiByZWZYPVwiN1wiIHJlZlk9XCI1XCIgbWFya2VyV2lkdGg9XCI1XCIgbWFya2VySGVpZ2h0PVwiNVwiIGZpbGw9XCIke1RoZW1lLmN1cnJlbnQuQ09OTkVDVElPTl9JT19DT0xPUn1cIiBvcmllbnQ9XCJhdXRvLXN0YXJ0LXJldmVyc2VcIj5cbiAgICAgICAgPHBhdGggZD1cIk0gMCAwIEwgMTAgNSBMIDAgMTAgWlwiPlxuICAgICAgICA8L3BhdGg+XG4gICAgICA8L21hcmtlcj5cbiAgICAgIDxtYXJrZXIgaWQ9XCJwcmV2bmV4dC1hcnJvd1wiIHZpZXdCb3g9XCIwIDAgMTAgMTBcIiByZWZYPVwiN1wiIHJlZlk9XCI1XCIgbWFya2VyV2lkdGg9XCI1XCIgbWFya2VySGVpZ2h0PVwiNVwiIGZpbGw9XCIke1RoZW1lLmN1cnJlbnQuQ09OTkVDVElPTl9QUkVWX05FWFRfQ09MT1J9XCIgb3JpZW50PVwiYXV0by1zdGFydC1yZXZlcnNlXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDAgMCBMIDEwIDUgTCAwIDEwIFpcIj5cbiAgICAgICAgPC9wYXRoPlxuICAgICAgPC9tYXJrZXI+ICAgICAgXG4gICAgYDtcblxuICAgIHRoaXMuc3ZnRWwuYXBwZW5kQ2hpbGQoZGVmc0VsKTtcbiAgfVxuXG4gIGdldCBwcm9ncmFtKCkge1xuICAgIHJldHVybiB0aGlzLiNwcm9ncmFtO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgc2V0dGVyIGlzIGEgdHJpZ2dlciBmb3IgdGhlIGltcG9ydCBwcm9jZWR1cmVcbiAgICovXG4gIHNldCBwcm9ncmFtKHZhbCkge1xuICAgIHRoaXMuaW1wb3J0Q25vZGVzUHJvZ3JhbSh2YWwpO1xuICAgIHRoaXMuI3Byb2dyYW0gPSB2YWw7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgdGhlIHByb2dyYW1cbiAgICovXG4gIHJ1bigpIHtcbiAgICB0aGlzLiNwcm9ncmFtLnByb2Nlc3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEdW1wIHRoZSBpbnRlcm5hbCBDTk9ERVMgcHJvZ3JhbSB0byB0aGUgY29uc29sZVxuICAgKi9cbiAgZHVtcCgpIHtcbiAgICBjb25zb2xlLmxvZyhFbnYuZXhwb3J0KHRoaXMuI3Byb2dyYW0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBsaXN0IG9mIE1lbnVJdGVtIGZvciB0aGUgY29udGV4dCBtZW51XG4gICAqL1xuICBnZXRDYW52YXNDb250ZXh0TWVudUl0ZW1zKCkge1xuICAgIGxldCBpdGVtcyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuY2FuUG9wUHJvZ3JhbSgpKSB7XG4gICAgICBpdGVtcy5wdXNoKFxuICAgICAgICBuZXcgTWVudUl0ZW0oXG4gICAgICAgICAgYFxuICAgICAgICAgIDx0c3BhbiBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIiBzdHlsZT1cIiR7VGhlbWUuY3VycmVudC5NRU5VX0lURU1fRk9OVH1cIiBmaWxsPVwiJHtUaGVtZS5jdXJyZW50Lk1FTlVfSVRFTV9DT0xPUn1cIj5cbiAgICAgICAgICAgIFJldHVybiB0byBwYXJlbnQuLi5cbiAgICAgICAgICA8L3RzcGFuPlxuICAgICAgICAgIGAsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb3BQcm9ncmFtKCk7XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIGZvciAobGV0IGNhdCBvZiBFbnYuZ2V0Q2F0ZWdvcmllcygpKSB7XG4gICAgICBmb3IgKGxldCBub2RlRGVmIG9mIEVudi5nZXRDYXRlZ29yeU5vZGVzKGNhdCkpIHtcbiAgICAgICAgbGV0IG4gPSBFbnYuZ2V0SW5zdGFuY2Uobm9kZURlZi5uYW1lKTtcbiAgICAgICAgaWYgKG4uY3JlYXRhYmxlKSB7XG4gICAgICAgICAgaXRlbXMucHVzaChcbiAgICAgICAgICAgIG5ldyBNZW51SXRlbShcbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA8dHNwYW4gYWxpZ25tZW50LWJhc2VsaW5lPVwibWlkZGxlXCIgc3R5bGU9XCIke1RoZW1lLmN1cnJlbnQuTUVOVV9JVEVNX0ZPTlR9XCIgZmlsbD1cIiR7VGhlbWUuY3VycmVudC5NRU5VX0lURU1fQ09MT1J9XCI+XG4gICAgICAgICAgICAgICAgTmV3XG4gICAgICAgICAgICAgIDwvdHNwYW4+XG4gICAgICAgICAgICAgIDx0c3BhbiBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIiBzdHlsZT1cIiR7VGhlbWUuY3VycmVudC5NRU5VX0lURU1fRk9OVH1cIiBmaWxsPVwiJHtUaGVtZS5jdXJyZW50Lk1FTlVfSVRFTV9DT0xPUn1cIj5cbiAgICAgICAgICAgICAgICAke25vZGVEZWYubmFtZX1cbiAgICAgICAgICAgICAgPC90c3Bhbj5cbiAgICAgICAgICAgICAgPHRzcGFuIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiIHN0eWxlPVwiJHtUaGVtZS5jdXJyZW50Lk1FTlVfSVRFTV9DQVRFR09SWV9GT05UfVwiIGZpbGw9XCIke1RoZW1lLmN1cnJlbnQuTUVOVV9JVEVNX0NBVEVHT1JZX0NPTE9SfVwiPlxuICAgICAgICAgICAgICAgICR7bm9kZURlZi5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgPC90c3Bhbj5cbiAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBDbm9kZUNvbXBvbmVudChuLCB0aGlzKTtcbiAgICAgICAgICAgICAgICBub2RlLnBvcyA9IG5ldyBQb3NpdGlvbih4LCB5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIHRoZSBjdXJyZW50IG9wZW4gY29udGV4dCBtZW51LCBhbmQgY2xvc2VzIGl0LlxuICAgKiBPdmVycmlkZSB0aGlzIHRvIGVuc3VyZSBjYW5jZWwgbWVudSBpbmZvcm0gbWVudSBjYWxsYmFjayBjbGllbnRzXG4gICAqL1xuICBjYW5jZWxDb250ZXh0TWVudSgpIHtcbiAgICBpZiAodGhpcy5jb250ZXh0TWVudUNvbXBvbmVudCAmJiB0aGlzLmNvbnRleHRNZW51Q29tcG9uZW50Lm1lbnVDYWxsYmFjaykge1xuICAgICAgdGhpcy5jb250ZXh0TWVudUNvbXBvbmVudC5tZW51Q2FsbGJhY2sobnVsbCk7XG4gICAgICB0aGlzLmNvbnRleHRNZW51Q29tcG9uZW50Lm1lbnVDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICAgIHN1cGVyLmNhbmNlbENvbnRleHRNZW51KCk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgdGhlIGNvbnRleHQgbWVudSByZXRhdGVkIHRvIHRoZSBjb21wb25lbnQgb3IgdG8gdGhlIGNhbnZhc1xuICAgKiBAcGFyYW0ge01lbnVJdGVtW119IGl0ZW1zIEl0ZW1zIHRoYXQgY29tcG9zZSB0aGUgbWVudVxuICAgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBjb29yZGluYXRlIGZvciB0aGUgbWVudVxuICAgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBjb29yZGluYXRlIGZvciB0aGUgbWVudVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBtZW51Q2FsbGJhY2sgSWYgdGhlIGNsaWVudCBpcyBpbnRlcmVzdGVkIHRvIHRoZSB1c2VyIHNlbGVjdGlvbiBvciBjYW5jZWxcbiAgICovXG4gIHNob3dDb250ZXh0TWVudShpdGVtcywgeCwgeSwgbWVudUNhbGxiYWNrKSB7XG4gICAgaWYgKGl0ZW1zKSB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0TWVudUNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmNhbmNlbENvbnRleHRNZW51KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGV4dE1lbnVDb21wb25lbnQgPSBuZXcgQ25vZGVzTWVudSh0aGlzLCBpdGVtcyk7XG4gICAgICB0aGlzLmNvbnRleHRNZW51Q29tcG9uZW50Lm1lbnVDYWxsYmFjayA9IG1lbnVDYWxsYmFjaztcbiAgICAgIHRoaXMuY29udGV4dE1lbnVDb21wb25lbnQuc2hvdyh4LCB5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaW1wb3J0cyBhbiBlbnRpcmUgY25vZGVzIHByb2dyYW1cbiAgICogQHBhcmFtIHtQcm9ncmFtfSBwcm9ncmFtIFByb2dyYW0gdG8gaW1wb3J0XG4gICAqL1xuICBpbXBvcnRDbm9kZXNQcm9ncmFtKHByb2dyYW0pIHtcbiAgICAvLyBCeSB0ZW1wb3JhcnkgY2xlYXJpbmcgdGhlIGluc3RhbmNlIG9mIHRoZSBwcm9ncmFtLCB3ZSBpbmZvcm1cbiAgICAvLyBjb21wb25lbnRzIHRoYXQgYWxsIGNyZWF0aW9uL2Rlc3RydWN0aW9uIHdpbGwgbm90IGhhdmUgZWZmZWN0XG4gICAgLy8gb24gdGhlIHByb2dyYW0gaW5zdGFuY2VcbiAgICB0aGlzLiNwcm9ncmFtID0gbnVsbDtcblxuICAgIHRoaXMucmVtb3ZlQWxsKCk7XG5cbiAgICAvLyBJbXBvcnQgdGhlIHByb2dyYW1cbiAgICBmb3IgKGxldCBuIG9mIHByb2dyYW0ubm9kZXMpIHtcbiAgICAgIGxldCBjb21wID0gbmV3IENub2RlQ29tcG9uZW50KG4sIHRoaXMpO1xuICAgICAgY29tcC5tb3ZlYWJsZSA9IHRydWU7XG5cbiAgICAgIC8vIEV4dHJhY3QgbWV0YSBpbmZvXG4gICAgICBpZiAoIW4ubWV0YSkge1xuICAgICAgICBuLm1ldGEgPSB7fTtcbiAgICAgIH1cbiAgICAgIGlmIChuLm1ldGEucG9zKSB7XG4gICAgICAgIGNvbXAucG9zID0gbmV3IFBvc2l0aW9uKG4ubWV0YS5wb3MueCwgbi5tZXRhLnBvcy55KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXAucG9zID0gbmV3IFBvc2l0aW9uKDEwMCwgMTAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXR1cCBjb25uZWN0aW9uc1xuICAgIGZvciAobGV0IG4gb2YgcHJvZ3JhbS5ub2Rlcykge1xuICAgICAgLy8gU2V0dXAgcHJldlxuICAgICAgaWYgKG4ucHJldiAmJiBuLnByZXYucGVlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBwZWVyIG9mIG4ucHJldi5wZWVycykge1xuICAgICAgICAgIGlmICghdGhpcy5hbHJlYWR5Q29ubmVjdGVkKHBlZXIuX19jb21wLCBuLnByZXYuX19jb21wKSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGNvbm5lY3Rpb24gY29tcG9uZW50XG4gICAgICAgICAgICBuZXcgUHJldk5leHRDb25uZWN0aW9uKHBlZXIuX19jb21wLCBuLnByZXYuX19jb21wLCB0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFNldHVwIG5leHRzXG4gICAgICBmb3IgKGxldCBuZXh0IG9mIG4ubmV4dHMpIHtcbiAgICAgICAgaWYgKG5leHQucGVlcikge1xuICAgICAgICAgIGlmICghdGhpcy5hbHJlYWR5Q29ubmVjdGVkKG5leHQucGVlci5fX2NvbXAsIG5leHQuX19jb21wKSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGNvbm5lY3Rpb24gY29tcG9uZW50XG4gICAgICAgICAgICBuZXcgUHJldk5leHRDb25uZWN0aW9uKG5leHQuX19jb21wLCBuZXh0LnBlZXIuX19jb21wLCB0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFNldHVwIGlucHV0c1xuICAgICAgZm9yIChsZXQgaW5wIG9mIG4uaW5wdXRzKSB7XG4gICAgICAgIGlmIChpbnAucGVlcikge1xuICAgICAgICAgIGlmICghdGhpcy5hbHJlYWR5Q29ubmVjdGVkKGlucC5wZWVyLl9fY29tcCwgaW5wLl9fY29tcCkpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBjb25uZWN0aW9uIGNvbXBvbmVudFxuICAgICAgICAgICAgbmV3IElPQ29ubmVjdGlvbihpbnAucGVlci5fX2NvbXAsIGlucC5fX2NvbXAsIHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gU2V0dXAgb3V0cHV0c1xuICAgICAgZm9yIChsZXQgb3V0cCBvZiBuLm91dHB1dHMpIHtcbiAgICAgICAgaWYgKG91dHAucGVlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvciAobGV0IHBlZXIgb2Ygb3V0cC5wZWVycykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFscmVhZHlDb25uZWN0ZWQob3V0cC5fX2NvbXAsIHBlZXIuX19jb21wKSkge1xuICAgICAgICAgICAgICAvLyBDcmVhdGUgY29ubmVjdGlvbiBjb21wb25lbnRcbiAgICAgICAgICAgICAgbmV3IElPQ29ubmVjdGlvbihvdXRwLl9fY29tcCwgcGVlci5fX2NvbXAsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlc3RvcmUgdGhlIHByb2dyYW0gaW5zdGFuY2VcbiAgICB0aGlzLiNwcm9ncmFtID0gcHJvZ3JhbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXNoIGEgc3VicHJvZ3JhbSBvbiB0aGUgY2FudmFzLiBUaGUgY3VycmVudCBwcm9ncmFtXG4gICAqIGlzIHB1c2hlZCBvbiB0byB0aGUgc3RhY2sgYW5kIHRoZSBuZXcgb25lIGlzIHBsYWNlZCBvbiB0aGUgY2FudmFzXG4gICAqIEBwYXJhbSB7Kn0gcHJvZ3JhbSBUaGUgbmV3IHByb2dyYW0gdG8gZWRpdFxuICAgKi9cbiAgcHVzaFByb2dyYW0ocHJvZ3JhbSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gUHVzaCB0aGlzIGN1cnJlbnQgcHJvZ3JhbSB0byB0aGUgc3RhY2tcbiAgICAgIHRoaXMuI3N0YWNrLnVuc2hpZnQodGhpcy5wcm9ncmFtKTtcblxuICAgICAgLy8gU2V0IHRoZSBuZXcgUHJvZ3JhbVxuICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQb3BzIHRoZSBsYXN0IHByb2dyYW0gYW5kIHBsYWNlIGl0IG9uIHRoZSBjYW52YXMuIFRoZSBhY3R1YWxcbiAgICogcHJvZ3JhbSAodGhhdCBpcyBhIHN1YnByb2dyYW0gb2YgdGhlIHBvcHBlZCkgaXMgYWJhbmRvbmVkXG4gICAqL1xuICBwb3BQcm9ncmFtKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5wcm9ncmFtID0gdGhpcy4jc3RhY2suc2hpZnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW4gdGhpcyBjYW52YXMgcG9wIGEgcHJvZ3JhbSBmcm9tIHRoZSBzdGFjaywgdGhhdCBpczpcbiAgICogdGhlcmUgaXMgYXQgbGVhc3Qgb25lIHByb2dyYW0gb24gdGhlIHN0YWNrP1xuICAgKi9cbiAgY2FuUG9wUHJvZ3JhbSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3RhY2subGVuZ3RoID4gMDtcbiAgfVxufVxuIiwiLyoqXG4gKiBjbm9kZXMtdWlcbiAqXG4gKiBBIEdVSSBmb3IgY25vZGVzXG4gKiBMaWNlbnNlOiBNSVRcbiAqIEF1dGhvcjogTWFyY28gSmFjb3ZvbmVcbiAqIFllYXI6IDIwMjBcbiAqL1xuXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4uL2NhbnZhcy9tZW51XCI7XG5pbXBvcnQgeyBDbm9kZXNDYW52YXMgfSBmcm9tIFwiLi9jbm9kZXNjYW52YXNcIjtcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4vdGhlbWVcIjtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGltcGxlbWVudHMgYSBjb250ZXh0IG1lbnUgZm9yIGNub2RlcyBjYW52YXNcbiAqL1xuZXhwb3J0IGNsYXNzIENub2Rlc01lbnUgZXh0ZW5kcyBNZW51IHtcbiAgLyoqIFRoZSBpbnB1dCBlbGVtZW50IGZvciB0aGUgc2VhcmNoICovXG4gICNpbnB1dEVsZW1lbnQgPSBudWxsO1xuXG4gIC8qKiBDb250YWluZXIgZWxlbWVudCBhcm91bmQgaXRlbXMqL1xuICAjY29udGFpbmVyRWwgPSBudWxsO1xuXG4gIC8qKiBDdXJyZW50IHNlYXJjaCByZXN1bHQgaXRlbXMgKi9cbiAgI2l0ZW1zRWxzID0gW107XG5cbiAgLyoqIFRoZSBzZWFyY2ggZmlsdGVyICh2YWx1ZSBvZiB0aGUgc2VhcmNoIGlucHV0KSAqL1xuICAjc2VhcmNoRmlsdGVyID0gXCJcIjtcblxuICAvKipcbiAgICogVGhlIHJlc3VsdCBvZiB0aGUgc2VsZWN0aW9uIG9mIHRoZSB1c2VyLiBJZiB3aG8gcmVxdWVzdCB0aGUgbWVudSBpcyBpbnRlcmVzdGVkLlxuICAgKiBTb21lIGNvbXBvbmVudHMsIGxpa2Ugc29ja2V0cywgY2FuIG9wZW4gYSBjb250ZXh0IG1lbnUgdG8gc2VsZWN0IGl0ZW1zLCBpbnN0ZWFkIG9mXG4gICAqIHRoZSBjYW52YXMuIEluIHN1Y2ggY2FzZSwgdGhlIG9yaWdpbmF0aW5nIGNvbXBvbmVudCBoYXZlIHRvIGtub3cgdGhlIGZpbmFsXG4gICAqIHJlc3VsdCBvZiB0aGUgbWVudSBzZWxlY3Rpb24uIEluIHRoaXMgY2FzZSwgdGhvIHZhcmlhYmxlIGNvbnRhaW5zIGEgY2FsbGJhY2sgdG9cbiAgICogdGhlIG1lbnUgXCJjbGllbnRcIiwgYW5kIHRoZSBtZW51LCB1cG9uIGEgdXNlciBzZWxlY3Rpb24sIGNhbGxzIHRoaXMgY2FsbGJhY2sgcGFzc2luZ1xuICAgKiB0aGUgcmVzdWx0IHZhbHVlIG9mIHRoZSBjb250ZXh0IG1lbnUgaXRlbSBjYWxsYmFjaywgYXMgcGFyYW1ldGVyLlxuICAgKiBQbGVhc2Ugc2VlIHRoZSBjbGFzcyBDbm9kZXNTb2NrZXQgY29tcG9uZW50IHRvIGNoZWNrIHRoaXMgYmVoYXZpb3IuXG4gICAqL1xuICAjbWVudUNhbGxiYWNrID0gbnVsbDtcblxuICAvKipcbiAgICogQ29uc3RydWN0IGEgbmV3IE1lbnUgZm9yIHRoZSBjYW52YXNcbiAgICogQHBhcmFtIHtDbm9kZXNDYW52YXN9IGNhbnZhcyBUaGUgY2FudmFzXG4gICAqIEBwYXJhbSB7TWVudUl0ZW1bXX0gaXRlbXMgVGhlIG1lbnUgaXRlbXNcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgaXRlbXMpIHtcbiAgICBzdXBlcihjYW52YXMsIGl0ZW1zKTtcbiAgfVxuXG4gIGdldCBzZWFyY2hGaWx0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NlYXJjaEZpbHRlcjtcbiAgfVxuICBzZXQgc2VhcmNoRmlsdGVyKHZhbCkge1xuICAgIHRoaXMuI3NlYXJjaEZpbHRlciA9IHZhbDtcbiAgfVxuICBnZXQgbWVudUNhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLiNtZW51Q2FsbGJhY2s7XG4gIH1cbiAgc2V0IG1lbnVDYWxsYmFjayh2YWwpIHtcbiAgICB0aGlzLiNtZW51Q2FsbGJhY2sgPSB2YWw7XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgZmlsdGVyZWQgaXRlbXMgb2YgdGhlIG1lbnUgKi9cbiAgZ2V0IGZpbHRlcmVkRWxlbWVudHMoKSB7XG4gICAgbGV0IGZpbHRlckVsZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoKGksIGlkeCkgPT4gaS50ZXh0LnRvVXBwZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hGaWx0ZXIudG9VcHBlckNhc2UoKSkpO1xuICAgIHJldHVybiBmaWx0ZXJFbGVtcy5maWx0ZXIoKGksIGlkeCkgPT4gaWR4IDw9IDEwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgbWVudSB2ZXJ0aWNhbCBzaXplLCBiYXNlZCBvbiBtZW51IGl0ZW1zXG4gICAqIGZpbHRlcmVkIGJ5IHNlYXJjaCBmaWx0ZXJcbiAgICovXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFRoZW1lLmN1cnJlbnQuTUVOVV9CT1JERVJfUkFESVVTICogMiArIC8vIFBhZGRpbmdcbiAgICAgIDMwICsgLy8gU2VhcmNoIGlucHV0XG4gICAgICBUaGVtZS5jdXJyZW50Lk1FTlVfSVRFTV9IRUlHSFQgKiB0aGlzLmZpbHRlcmVkRWxlbWVudHMubGVuZ3RoIC8vIEl0ZW1zXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyB0aGUgbWVudVxuICAgKiBAcGFyYW0geyp9IHggVGhlIHggY29vcmRpbmF0ZVxuICAgKiBAcGFyYW0geyp9IHkgVGhlIHkgY29vcmRpbmF0ZVxuICAgKi9cbiAgc2hvdyh4LCB5KSB7XG4gICAgc3VwZXIuc2hvdyh4LCB5KTtcbiAgICB0aGlzLiNpbnB1dEVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLmNyZWF0ZU1lbnVJdGVtc0VsZW1lbnRzKCk7XG4gIH1cblxuICAvKipcbiAgICogTGV0cyBjcmVhdGUgdGhlIFNWRyBlbGVtZW50XG4gICAqL1xuICBjcmVhdGVFbGVtZW50KCkge1xuICAgIGxldCBtZW51RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImdcIik7XG5cbiAgICBsZXQgdGV4dElucHV0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZm9yZWlnbk9iamVjdFwiKTtcbiAgICB0ZXh0SW5wdXRFbGVtLnN0eWxlID0gYFxuICAgICAgZm9udDogJHtUaGVtZS5jdXJyZW50Lk1FTlVfU0VBUkNIX0ZPTlR9OyBcbiAgICAgIGNvbG9yOiAke1RoZW1lLmN1cnJlbnQuTk9ERV9JT19OQU1FX0NPTE9SfTsgXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGA7XG5cbiAgICB0ZXh0SW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInhcIiwgMCk7XG4gICAgdGV4dElucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ5XCIsIDApO1xuICAgIHRleHRJbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHtUaGVtZS5jdXJyZW50Lk1FTlVfQk9SREVSX1JBRElVU30sICR7VGhlbWUuY3VycmVudC5NRU5VX0JPUkRFUl9SQURJVVN9KWApO1xuICAgIHRleHRJbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgVGhlbWUuY3VycmVudC5NRU5VX01JTl9XSURUSCAtIDIgKiBUaGVtZS5jdXJyZW50Lk1FTlVfQk9SREVSX1JBRElVUyk7XG4gICAgdGV4dElucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgVGhlbWUuY3VycmVudC5NRU5VX0lURU1fSEVJR0hUKTtcblxuICAgIHRoaXMuI2lucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aGlzLiNpbnB1dEVsZW1lbnQuc3R5bGUgPSBgXG4gICAgICBmb250OiAke1RoZW1lLmN1cnJlbnQuTk9ERV9JT19OQU1FX0ZPTlR9OyBcbiAgICAgIGNvbG9yOiAke1RoZW1lLmN1cnJlbnQuTk9ERV9JT19OQU1FX0NPTE9SfTsgXG4gICAgICB3aWR0aDogJHt0ZXh0SW5wdXRFbGVtLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpIC0gMTB9cHg7IC8vIDEwcHggbGVzcyB0aGFuIGZvcmVpZ25PYmplY3RcbiAgICAgIGhlaWdodDogJHsyMH1weDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgIG1hcmdpbjogMnB4O1xuICAgIGA7XG4gICAgdGhpcy4jaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiXCIpO1xuICAgIHRoaXMuI2lucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICB0aGlzLiNpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICBzZWxmLiNzZWFyY2hGaWx0ZXIgPSB0aGlzLiNpbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgICBzZWxmLmNyZWF0ZU1lbnVJdGVtc0VsZW1lbnRzKCk7XG4gICAgfSk7XG4gICAgdGhpcy4jaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICBzZWxmLmNhbnZhcy5jYW5jZWxDb250ZXh0TWVudSgpO1xuXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGNsaWVudCBvZiB0aGUgbWVudSBpbnRlcmVzdGVkIHRvIHVzZXIgc2VsZWN0aW9uIG9yIGFib3J0XG4gICAgICAgIGlmIChzZWxmLm1lbnVDYWxsYmFjaykge1xuICAgICAgICAgIHNlbGYubWVudUNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgIHNlbGYubWVudUNhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBpZiAoc2VsZi5maWx0ZXJlZEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgbWVudUVsID0gdGhpcy5jYW52YXMuY29udGV4dE1lbnVDb21wb25lbnQuY29tcG9uZW50RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgbGV0IHAgPSB0aGlzLmNhbnZhcy5jbGllbnRUb1N2Z1BvaW50KG1lbnVFbC5sZWZ0LCBtZW51RWwudG9wKTtcblxuICAgICAgICAgIC8vIEl0ZW1zIGNhbiByZXR1cm4gYSByZXN1bHQgdG8gaW5mb3JtIHRoZSBtZW51IGNsaWVudCBhYm91dCB0aGUgaXRlbSBzZWxlY3Rpb25cbiAgICAgICAgICBsZXQgaXRlbVJlc3VsdCA9IHNlbGYuZmlsdGVyZWRFbGVtZW50c1swXS5jYWxsYmFjayhwLngsIHAueSk7XG5cbiAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBjbGllbnQgb2YgdGhlIG1lbnUgaW50ZXJlc3RlZCB0byB1c2VyIHNlbGVjdGlvbiBvciBhYm9ydFxuICAgICAgICAgIGlmIChzZWxmLm1lbnVDYWxsYmFjaykge1xuICAgICAgICAgICAgc2VsZi5tZW51Q2FsbGJhY2soaXRlbVJlc3VsdCk7XG4gICAgICAgICAgICBzZWxmLm1lbnVDYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5jYW52YXMuY2FuY2VsQ29udGV4dE1lbnUoKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGV4dElucHV0RWxlbS5hcHBlbmRDaGlsZCh0aGlzLiNpbnB1dEVsZW1lbnQpO1xuXG4gICAgdGhpcy4jY29udGFpbmVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInBhdGhcIik7XG5cbiAgICB0aGlzLiNjb250YWluZXJFbC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFRoZW1lLmN1cnJlbnQuTUVOVV9GSUxMX0NPTE9SKTtcbiAgICB0aGlzLiNjb250YWluZXJFbC5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgVGhlbWUuY3VycmVudC5NRU5VX1NUUk9LRV9DT0xPUik7XG4gICAgdGhpcy4jY29udGFpbmVyRWwuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFRoZW1lLmN1cnJlbnQuTUVOVV9TVFJPS0VfV0lEVEgpO1xuICAgIHRoaXMuI2NvbnRhaW5lckVsLnNldEF0dHJpYnV0ZShcImZpbHRlclwiLCBcInVybCgjZHJvcHNoYWRvdylcIik7XG5cbiAgICBtZW51RWwuYXBwZW5kQ2hpbGQodGhpcy4jY29udGFpbmVyRWwpO1xuICAgIG1lbnVFbC5hcHBlbmRDaGlsZCh0ZXh0SW5wdXRFbGVtKTtcblxuICAgIHJldHVybiBtZW51RWw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcy9VcGRhdGVzIG1lbnUgaXRlbXMgYmFzZWQgb24gdGhlIHNlYXJjaCBpbnB1dCBmaWVsZCwgYW5kXG4gICAqIGFkanVzdCB0aGUgc2l6ZSBvZiB0aGUgY29udGFpbmVyIGVsZW1lbnRcbiAgICovXG4gIGNyZWF0ZU1lbnVJdGVtc0VsZW1lbnRzKCkge1xuICAgIHRoaXMuI2NvbnRhaW5lckVsLnNldEF0dHJpYnV0ZShcbiAgICAgIFwiZFwiLFxuICAgICAgYFxuICAgICAgTSAwICR7VGhlbWUuY3VycmVudC5NRU5VX0JPUkRFUl9SQURJVVMgKiAxLjN9IFxuICAgICAgQSAke1RoZW1lLmN1cnJlbnQuTUVOVV9CT1JERVJfUkFESVVTICogMS4zfSAke1RoZW1lLmN1cnJlbnQuTUVOVV9CT1JERVJfUkFESVVTICogMS4zfSAwIDAgMSAke1RoZW1lLmN1cnJlbnQuTUVOVV9CT1JERVJfUkFESVVTICogMS4zfSAwIFxuICAgICAgTCAke1RoZW1lLmN1cnJlbnQuTUVOVV9NSU5fV0lEVEggLSBUaGVtZS5jdXJyZW50Lk1FTlVfQk9SREVSX1JBRElVU30gMCBcbiAgICAgIEEgJHtUaGVtZS5jdXJyZW50Lk1FTlVfQk9SREVSX1JBRElVU30gJHtUaGVtZS5jdXJyZW50Lk1FTlVfQk9SREVSX1JBRElVU30gMCAwIDEgJHtUaGVtZS5jdXJyZW50Lk1FTlVfTUlOX1dJRFRIfSAke1xuICAgICAgICBUaGVtZS5jdXJyZW50Lk1FTlVfQk9SREVSX1JBRElVU1xuICAgICAgfSBcbiAgICAgIEwgJHtUaGVtZS5jdXJyZW50Lk1FTlVfTUlOX1dJRFRIfSAke3RoaXMuaGVpZ2h0IC0gVGhlbWUuY3VycmVudC5NRU5VX0JPUkRFUl9SQURJVVN9IFxuICAgICAgQSAke1RoZW1lLmN1cnJlbnQuTUVOVV9CT1JERVJfUkFESVVTfSAke1RoZW1lLmN1cnJlbnQuTUVOVV9CT1JERVJfUkFESVVTfSAwIDAgMSAke1xuICAgICAgICBUaGVtZS5jdXJyZW50Lk1FTlVfTUlOX1dJRFRIIC0gVGhlbWUuY3VycmVudC5NRU5VX0JPUkRFUl9SQURJVVNcbiAgICAgIH0gJHt0aGlzLmhlaWdodH0gXG4gICAgICBMICR7VGhlbWUuY3VycmVudC5NRU5VX0JPUkRFUl9SQURJVVN9ICR7dGhpcy5oZWlnaHR9IFxuICAgICAgQSAke1RoZW1lLmN1cnJlbnQuTUVOVV9CT1JERVJfUkFESVVTfSAke1RoZW1lLmN1cnJlbnQuTUVOVV9CT1JERVJfUkFESVVTfSAwIDAgMSAwICR7dGhpcy5oZWlnaHQgLSBUaGVtZS5jdXJyZW50Lk1FTlVfQk9SREVSX1JBRElVU30gXG4gICAgICBaXG4gICAgICBgXG4gICAgKTtcblxuICAgIHdoaWxlICh0aGlzLiNpdGVtc0Vscy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudEVsLnJlbW92ZUNoaWxkKHRoaXMuI2l0ZW1zRWxzWzBdLml0ZW1FbCk7XG4gICAgICB0aGlzLmNvbXBvbmVudEVsLnJlbW92ZUNoaWxkKHRoaXMuI2l0ZW1zRWxzWzBdLml0ZW1UZXh0RWwpO1xuICAgICAgdGhpcy4jaXRlbXNFbHMuc3BsaWNlKDAsIDEpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBtZW51IGl0ZW1zXG4gICAgZm9yIChsZXQgW2ksIGl0ZW1dIG9mIHRoaXMuZmlsdGVyZWRFbGVtZW50cy5lbnRyaWVzKCkpIHtcbiAgICAgIGxldCBpdGVtWCA9IFRoZW1lLmN1cnJlbnQuTUVOVV9CT1JERVJfUkFESVVTO1xuICAgICAgbGV0IGl0ZW1ZID0gVGhlbWUuY3VycmVudC5NRU5VX0JPUkRFUl9SQURJVVMgKyBUaGVtZS5jdXJyZW50Lk1FTlVfSVRFTV9IRUlHSFQgKiAoaSArIDEpO1xuICAgICAgbGV0IGl0ZW1XaWR0aCA9IFRoZW1lLmN1cnJlbnQuTUVOVV9NSU5fV0lEVEggLSAyICogVGhlbWUuY3VycmVudC5NRU5VX0JPUkRFUl9SQURJVVM7XG4gICAgICBsZXQgaXRlbUhlaWdodCA9IFRoZW1lLmN1cnJlbnQuTUVOVV9JVEVNX0hFSUdIVDtcblxuICAgICAgbGV0IGl0ZW1FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicmVjdFwiKTtcbiAgICAgIGl0ZW1FbC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIGl0ZW1YKTtcbiAgICAgIGl0ZW1FbC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIGl0ZW1ZKTtcbiAgICAgIGl0ZW1FbC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBpdGVtV2lkdGgpO1xuICAgICAgaXRlbUVsLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBpdGVtSGVpZ2h0KTtcbiAgICAgIGl0ZW1FbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBUaGVtZS5jdXJyZW50Lk1FTlVfSVRFTV9GT05UKTtcbiAgICAgIGl0ZW1FbC5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgIGl0ZW1FbC5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgMCk7XG4gICAgICBpdGVtRWwuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInRyYW5zcGFyZW50XCIpO1xuXG4gICAgICBsZXQgaXRlbVRleHRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwidGV4dFwiKTtcbiAgICAgIGl0ZW1UZXh0RWwuc2V0QXR0cmlidXRlKFwieFwiLCBpdGVtWCArIDUpO1xuICAgICAgaXRlbVRleHRFbC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIGl0ZW1ZICsgVGhlbWUuY3VycmVudC5NRU5VX0lURU1fSEVJR0hUIC8gMik7XG4gICAgICBpdGVtVGV4dEVsLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIGl0ZW1XaWR0aCAtIDEwKTtcbiAgICAgIGl0ZW1UZXh0RWwuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGl0ZW1IZWlnaHQgLSAxMCk7XG4gICAgICBpdGVtVGV4dEVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFRoZW1lLmN1cnJlbnQuTUVOVV9JVEVNX0ZPTlQpO1xuICAgICAgLy8gaXRlbVRleHRFbC5zZXRBdHRyaWJ1dGUoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIik7XG4gICAgICBpdGVtVGV4dEVsLnN0eWxlW1wicG9pbnRlci1ldmVudHNcIl0gPSBcIm5vbmVcIjtcbiAgICAgIGl0ZW1UZXh0RWwuc3R5bGVbXCJ1c2VyLXNlbGVjdFwiXSA9IFwibm9uZVwiO1xuICAgICAgaXRlbVRleHRFbC5pbm5lckhUTUwgPSBpdGVtLnRleHQ7XG5cbiAgICAgIGl0ZW1FbC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmVudGVyXCIsIChlKSA9PiB7XG4gICAgICAgIGl0ZW1FbC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFRoZW1lLmN1cnJlbnQuTUVOVV9JVEVNX0hJR0hMSUdIVCk7XG4gICAgICB9KTtcbiAgICAgIGl0ZW1FbC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmxlYXZlXCIsIChlKSA9PiB7XG4gICAgICAgIGl0ZW1FbC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwidHJhbnNwYXJlbnRcIik7XG4gICAgICB9KTtcbiAgICAgIGl0ZW1FbC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgbGV0IG1lbnVFbCA9IHRoaXMuY2FudmFzLmNvbnRleHRNZW51Q29tcG9uZW50LmNvbXBvbmVudEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgcCA9IHRoaXMuY2FudmFzLmNsaWVudFRvU3ZnUG9pbnQobWVudUVsLmxlZnQsIG1lbnVFbC50b3ApO1xuXG4gICAgICAgIGxldCByZXN1bHQgPSBpdGVtLmNhbGxiYWNrKHAueCwgcC55KTtcblxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBjbGllbnQgb2YgdGhlIG1lbnUgaW50ZXJlc3RlZCB0byB1c2VyIHNlbGVjdGlvbiBvciBhYm9ydFxuICAgICAgICBpZiAodGhpcy5tZW51Q2FsbGJhY2spIHtcbiAgICAgICAgICB0aGlzLm1lbnVDYWxsYmFjayhyZXN1bHQpO1xuICAgICAgICAgIHRoaXMubWVudUNhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbnZhcy5jYW5jZWxDb250ZXh0TWVudSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY29tcG9uZW50RWwuYXBwZW5kQ2hpbGQoaXRlbUVsKTtcbiAgICAgIHRoaXMuY29tcG9uZW50RWwuYXBwZW5kQ2hpbGQoaXRlbVRleHRFbCk7XG4gICAgICB0aGlzLiNpdGVtc0Vscy5wdXNoKHsgaXRlbUVsOiBpdGVtRWwsIGl0ZW1UZXh0RWw6IGl0ZW1UZXh0RWwgfSk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIGNub2Rlcy11aVxuICpcbiAqIEEgR1VJIGZvciBjbm9kZXNcbiAqIExpY2Vuc2U6IE1JVFxuICogQXV0aG9yOiBNYXJjbyBKYWNvdm9uZVxuICogWWVhcjogMjAyMFxuICovXG5cbmltcG9ydCB7IFNvY2tldCB9IGZyb20gXCJAbWFyY28uamFjb3ZvbmUvY25vZGVzL2Nub2Rlc1wiO1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi4vY2FudmFzL3Bvc2l0aW9uXCI7XG5pbXBvcnQgeyBTb2NrZXRDb21wb25lbnQgfSBmcm9tIFwiLi4vY2FudmFzL3NvY2tldFwiO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi90aGVtZVwiO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdGhlIGJhc2UgY2xhc3MgZm9yIGFsbCBzb2NrZXRzIGNvbXBvbmVudHNcbiAqIG9mIGNub2Rlcy4gVGhlIGNsYXNzIGludHJvZHVjZXMgdGhlIHNvY2tldCBmaWVsZCB0aGF0IGlzXG4gKiBhIFwiY25vZGVzXCIgc29ja2V0IHRoZSBpbnRlcm5hbCBzdHJ1Y3R1cmUgdG8gc3RvcmUgbGlua3NcbiAqIGJldHdlZW4gY25vZGVzIG5vZGVzLiBJbiBhZGRpdGlvbiBpbXBsZW1lbnRzIHRoZSBiYXNlIGZ1bmN0aW9uYWxpdHlcbiAqIG9mIHRoZSBcInNtYXJ0XCIgY29ubmVjdGlvbiBmbG93LCBpbiBjYXNlIHRoZSB1c2VyIGRyYWcgb3V0XG4gKiBvZiBhIHNvY2tldCBjb21wb25lbnQgYW5kIHJlbGVhc2UgdGhlIHBvaW50ZXIgb3V0c2lkZSBvZlxuICogYSBkZXN0aW5hdGlvbiBzb2NrZXRcbiAqL1xuZXhwb3J0IGNsYXNzIENub2Rlc1NvY2tldENvbXBvbmVudCBleHRlbmRzIFNvY2tldENvbXBvbmVudCB7XG4gIC8qKiBUaGUgY25vZGVzIHNvY2tldCBvYmplY3QgKi9cbiAgI3NvY2tldCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIG5ldyBDbm9kZXNTb2NrZXQgb2JqZWN0XG4gICAqIEBwYXJhbSB7U29ja2V0fSBzb2NrZXQgVGhlIGludGVybmFsIGNub2RlcyBzb2NrZXQgb2JqZWN0XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihzb2NrZXQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuI3NvY2tldCA9IHNvY2tldDtcbiAgfVxuXG4gIGdldCBzb2NrZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NvY2tldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdXNlciBoYXMgcmVsZWFzZWQgdGhlIHBvaW50ZXIgYnV0dG9uIG91dCBvZiBhIHZhbGlkIHNvY2tldCxcbiAgICogZGlzcGxheSBhIGNvbnRleHQgbWVudSB0aGF0IHByZXNlbnRzIGFsbCB2YWxpZCBwb3NzaWJsZSBub2Rlc1xuICAgKiBhbmQgcmVsYXRpdmUgc29ja2V0cyB0byBjb25uZWN0Li4uXG4gICAqIFBvc3NpYmxlIG5vZGVzIGl0ZW1zIGFyZSByZXR1cm5lZCBieSBzdWJjbGFzc2VzOyB0aGlzIG1ldGhvZCBkaXNwbGF5IHRoZVxuICAgKiBjb250ZXh0IG1lbnUgdmlhIGNhbnZhcy5zaG93Q29udGV4dE1lbnUoLi4uKSBhbmQgc3BlY2lmeWluZyBhIG1lbnVDYWxsYmFja1xuICAgKiB0aGF0IGluZm9ybSB0aGlzIGNsaWVudCBhYm91dCB0aGUgZmluYWwgc2VsZWN0aW9uIG9mIHRoZSB1c2VyLCBzb1xuICAgKiBjb21wbGV0ZSB0aGUgY29ubmVjdGlvbiBvciBhYm9ydCB0aGF0XG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIGV2ZW50IHBvaW50ZXJ1cFxuICAgKi9cbiAgY29ubmVjdGlvbkVuZGVkT3V0T2ZTb2NrZXQoZSkge1xuICAgIC8vIEVudW1lcmF0ZXMgYWxsIHBvc3NpYmxlIHNvY2tldCB0byBjb25uZWN0XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5nZXRSZWdpc3RlcmVkUG9zc2libGVQZWVycygpO1xuXG4gICAgbGV0IHAgPSB0aGlzLmNhbnZhcy5jbGllbnRUb1N2Z1BvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICB0aGlzLmNhbnZhcy5zaG93Q29udGV4dE1lbnUoaXRlbXMsIHAueCwgcC55LCAoc29ja2V0Q29tcCkgPT4ge1xuICAgICAgaWYgKCFzb2NrZXRDb21wKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLmNvbm5lY3Rpb25zRWwucmVtb3ZlQ2hpbGQodGhpcy50ZW1wQ29ubmVjdGlvbkVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbkRvbmUoc29ja2V0Q29tcCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHVzZXIgaXMgbW92aW5nIHRoZSBwb2ludGVyIGFyb3VuZCwgd2l0aCBhIGNvbm5lY3Rpb24gcGVuZGluZ1xuICAgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBjb29yZGluYXRlIGluIFNWRyBzcGFjZVxuICAgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBjb29yZGluYXRlIGluIFNWRyBzcGFjZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGludmFsaWQgdHJ1ZSBpZiB0aGUgcG9pbnRlciBpcyBvdmVyaW5nIGEgdW5hY2NlcHRhYmxlIHNvY2tldFxuICAgKi9cbiAgY29ubmVjdGlvbk1vdmluZyh4LCB5LCBpbnZhbGlkKSB7XG4gICAgbGV0IHNvdXJjZVBvaW50ID0gbmV3IFBvc2l0aW9uKHRoaXMuYWJzUG9zLngsIHRoaXMuYWJzUG9zLnkpO1xuICAgIGxldCB0YXJnZXRQb2ludCA9IG5ldyBQb3NpdGlvbihcbiAgICAgIHRoaXMuY3VycmVudFBlZXJTb2NrZXRDb21wb25lbnQgPyB0aGlzLmN1cnJlbnRQZWVyU29ja2V0Q29tcG9uZW50LmFic1Bvcy54IDogeCxcbiAgICAgIHRoaXMuY3VycmVudFBlZXJTb2NrZXRDb21wb25lbnQgPyB0aGlzLmN1cnJlbnRQZWVyU29ja2V0Q29tcG9uZW50LmFic1Bvcy55IDogeVxuICAgICk7XG5cbiAgICBsZXQgY3BYRGlzdGFuY2UgPSBNYXRoLm1heCgwLjggKiBNYXRoLmFicyhzb3VyY2VQb2ludC54IC0gdGFyZ2V0UG9pbnQueCksIDEwMCk7XG4gICAgbGV0IGNwMSA9IHNvdXJjZVBvaW50LmFkZChuZXcgUG9zaXRpb24oY3BYRGlzdGFuY2UgKiB0aGlzLmdldFNvdXJjZVBvaW50RGlyZWN0aW9uKCksIC0wLjEgKiAoc291cmNlUG9pbnQueSAtIHRhcmdldFBvaW50LnkpKSk7XG4gICAgbGV0IGNwMiA9IHRhcmdldFBvaW50LmFkZChuZXcgUG9zaXRpb24oLWNwWERpc3RhbmNlICogdGhpcy5nZXRTb3VyY2VQb2ludERpcmVjdGlvbigpLCAwLjEgKiAoc291cmNlUG9pbnQueSAtIHRhcmdldFBvaW50LnkpKSk7XG5cbiAgICB0aGlzLnRlbXBDb25uZWN0aW9uRWwuc2V0QXR0cmlidXRlKFxuICAgICAgXCJkXCIsXG4gICAgICBgXG4gICAgICBNICR7dGhpcy5hYnNQb3MueH0gJHt0aGlzLmFic1Bvcy55fVxuICAgICAgQyAke2NwMS54fSAke2NwMS55fSAke2NwMi54fSAke2NwMi55fSAke3RhcmdldFBvaW50Lnh9ICR7dGFyZ2V0UG9pbnQueX1cbiAgICBgXG4gICAgKTtcblxuICAgIHRoaXMudGVtcENvbm5lY3Rpb25FbC5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgVGhlbWUuY3VycmVudC5DT05ORUNUSU9OX1RFTVBfV0lEVEgpO1xuICAgIHRoaXMudGVtcENvbm5lY3Rpb25FbC5zZXRBdHRyaWJ1dGUoXG4gICAgICBcInN0cm9rZVwiLFxuICAgICAgaW52YWxpZFxuICAgICAgICA/IFRoZW1lLmN1cnJlbnQuQ09OTkVDVElPTl9URU1QX0lOVkFMSURfQ09MT1JcbiAgICAgICAgOiB0aGlzLmN1cnJlbnRQZWVyU29ja2V0Q29tcG9uZW50XG4gICAgICAgID8gVGhlbWUuY3VycmVudC5DT05ORUNUSU9OX1RFTVBfVkFMSURfQ09MT1JcbiAgICAgICAgOiBUaGVtZS5jdXJyZW50LkNPTk5FQ1RJT05fVEVNUF9DT0xPUlxuICAgICk7XG4gICAgdGhpcy50ZW1wQ29ubmVjdGlvbkVsLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCI1IDVcIik7XG4gICAgdGhpcy50ZW1wQ29ubmVjdGlvbkVsLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJ0cmFuc3BhcmVudFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGludGVybmFsIHNvY2tldCByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudFxuICAgKiB1cG9uIGRlc3Ryb3lcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zb2NrZXQuX19jb21wID0gbnVsbDtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cbn1cbiIsIi8qKlxuICogY25vZGVzLXVpXG4gKlxuICogQSBHVUkgZm9yIGNub2Rlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi90aGVtZVwiO1xuaW1wb3J0IHsgT3V0cHV0U29ja2V0IH0gZnJvbSBcIkBtYXJjby5qYWNvdm9uZS9jbm9kZXMvY25vZGVzXCI7XG5pbXBvcnQgeyBFbnYgfSBmcm9tIFwiQG1hcmNvLmphY292b25lL2Nub2Rlcy9jbm9kZXNcIjtcbmltcG9ydCB7IElPQ29ubmVjdGlvbiB9IGZyb20gXCIuLi9jb25uZWN0aW9ucy9pb19jb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBDbm9kZXNTb2NrZXRDb21wb25lbnQgfSBmcm9tIFwiLi9jbm9kZXNzb2NrZXRcIjtcbmltcG9ydCB7IFNvY2tldENvbXBvbmVudCB9IGZyb20gXCIuLi9jYW52YXMvc29ja2V0XCI7XG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gXCIuLi9jYW52YXMvbWVudVwiO1xuaW1wb3J0IHsgQ25vZGVDb21wb25lbnQgfSBmcm9tIFwiLi9jbm9kZVwiO1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi4vY2FudmFzL3Bvc2l0aW9uXCI7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnQgYSBzb2NrZXQgdG8gZHJhdyBhIElucHV0IGVsZW1lbnRcbiAqIGluIHRoZSBjbm9kZXMgd29ybGRcbiAqL1xuZXhwb3J0IGNsYXNzIElucHV0U29ja2V0Q29tcG9uZW50IGV4dGVuZHMgQ25vZGVzU29ja2V0Q29tcG9uZW50IHtcbiAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSBpbXB1dCBlbGVtZW50ICovXG4gICNpbnB1dEVsZW1lbnQgPSBudWxsO1xuXG4gIC8qKiBBIHJlZmVyZW5jZSB0byB0aGUgbGFiZWwgZWxlbWVudCAqL1xuICAjbGFiZWxFbGVtZW50ID0gbnVsbDtcblxuICAvKiogVGhlIHN5bWJvbCBlbGVtZW50ICovXG4gICNzb2NrZXRTeW1ib2wgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHNvY2tldCkge1xuICAgIHN1cGVyKHNvY2tldCk7XG4gICAgc3VwZXIuc2V0dXAoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDdXN0b21pemUgdGhlIGRyYWcgZWxlbWVudFxuICAgKi9cbiAgZ2V0IGRyYWdFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLiNzb2NrZXRTeW1ib2w7XG4gIH1cblxuICAvKipcbiAgICogTGV0cyBjcmVhdGUgdGhlIGVsZW1lbnRcbiAgICovXG4gIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgdGhpcy4jc29ja2V0U3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjaXJjbGVcIik7XG5cbiAgICB0aGlzLiNzb2NrZXRTeW1ib2wuc2V0QXR0cmlidXRlKFwiY3hcIiwgMCk7XG4gICAgdGhpcy4jc29ja2V0U3ltYm9sLnNldEF0dHJpYnV0ZShcImN5XCIsIDApO1xuICAgIHRoaXMuI3NvY2tldFN5bWJvbC5zZXRBdHRyaWJ1dGUoXCJyXCIsIFRoZW1lLmN1cnJlbnQuTk9ERV9JT19QT0lOVF9SQURJVVMpO1xuICAgIHRoaXMuI3NvY2tldFN5bWJvbC5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgVGhlbWUuY3VycmVudC5OT0RFX0lPX1NUUk9LRV9XSURUSCk7XG4gICAgdGhpcy4jc29ja2V0U3ltYm9sLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBUaGVtZS5jdXJyZW50Lk5PREVfSU9fU1RST0tFX0NPTE9SKTtcbiAgICB0aGlzLiNzb2NrZXRTeW1ib2wuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBUaGVtZS5jdXJyZW50Lk5PREVfSU9fRklMTF9DT0xPUik7XG5cbiAgICB0aGlzLiNsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImZvcmVpZ25PYmplY3RcIik7XG4gICAgdGhpcy4jbGFiZWxFbGVtZW50LnN0eWxlID0gYFxuICAgICAgZm9udDogJHtUaGVtZS5jdXJyZW50Lk5PREVfSU9fTkFNRV9GT05UfTsgXG4gICAgICBjb2xvcjogJHtUaGVtZS5jdXJyZW50Lk5PREVfSU9fTkFNRV9DT0xPUn07IFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHdpZHRoOiAke1RoZW1lLmN1cnJlbnQuTk9ERV9XSURUSCAvIDIgLSAxNX1weDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgYDtcblxuICAgIHRoaXMuI2xhYmVsRWxlbWVudC5pbm5lckhUTUwgPSBgJHt0aGlzLnNvY2tldC5uYW1lfWA7XG5cbiAgICB0aGlzLiNsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKFwieFwiLCAwKTtcbiAgICB0aGlzLiNsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKFwieVwiLCAwKTtcbiAgICB0aGlzLiNsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHsxNX0sICR7LTE1fSlgKTtcbiAgICB0aGlzLiNsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgVGhlbWUuY3VycmVudC5OT0RFX1dJRFRIIC8gMiAtIDE1KTtcbiAgICB0aGlzLiNsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIDMwKTtcblxuICAgIGxldCB0ZXh0SW5wdXRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJmb3JlaWduT2JqZWN0XCIpO1xuICAgIHRleHRJbnB1dEVsZW0uc3R5bGUgPSBgXG4gICAgICBmb250OiAke1RoZW1lLmN1cnJlbnQuTk9ERV9JT19OQU1FX0ZPTlR9OyBcbiAgICAgIGNvbG9yOiAke1RoZW1lLmN1cnJlbnQuTk9ERV9JT19OQU1FX0NPTE9SfTsgXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGA7XG5cbiAgICB0ZXh0SW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInhcIiwgMCk7XG4gICAgdGV4dElucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ5XCIsIDApO1xuICAgIHRleHRJbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHtUaGVtZS5jdXJyZW50Lk5PREVfV0lEVEggLyAyfSwgJHstMTV9KWApO1xuICAgIHRleHRJbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgVGhlbWUuY3VycmVudC5OT0RFX1dJRFRIIC8gMiAtIDE1KTtcbiAgICB0ZXh0SW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCAzMCk7XG5cbiAgICB0aGlzLiNpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGhpcy4jaW5wdXRFbGVtZW50LnN0eWxlID0gYFxuICAgICAgZm9udDogJHtUaGVtZS5jdXJyZW50Lk5PREVfSU9fTkFNRV9GT05UfTsgXG4gICAgICBjb2xvcjogJHtUaGVtZS5jdXJyZW50Lk5PREVfSU9fTkFNRV9DT0xPUn07IFxuICAgICAgd2lkdGg6ICR7VGhlbWUuY3VycmVudC5OT0RFX1dJRFRIIC8gMiAtIDI1fXB4OyAvLyA1cHggbGVzcyB0aGFuIGZvcmVpZ25PYmplY3RcbiAgICAgIGhlaWdodDogJHsyMH1weDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgIG1hcmdpbjogMnB4O1xuICAgIGA7XG5cbiAgICB0aGlzLiNpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xuXG4gICAgdGhpcy4jaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRoaXMuc29ja2V0LnZhbHVlKTtcbiAgICB0aGlzLiNpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgICB0ZXh0SW5wdXRFbGVtLmFwcGVuZENoaWxkKHRoaXMuI2lucHV0RWxlbWVudCk7XG5cbiAgICBsZXQgaW5wdXRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJnXCIpO1xuICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ4XCIsIDApO1xuICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ5XCIsIDApO1xuICAgIGlucHV0RWxlbS5hcHBlbmRDaGlsZCh0aGlzLiNzb2NrZXRTeW1ib2wpO1xuICAgIGlucHV0RWxlbS5hcHBlbmRDaGlsZCh0aGlzLiNsYWJlbEVsZW1lbnQpO1xuICAgIGlucHV0RWxlbS5hcHBlbmRDaGlsZCh0ZXh0SW5wdXRFbGVtKTtcblxuICAgIHJldHVybiBpbnB1dEVsZW07XG4gIH1cblxuICAvKipcbiAgICogVGhlIHVzZXIgaGFzIGNvbXBsZXRlZCBhIHZhbGlkIGNvbm5lY3Rpb25cbiAgICogQHBhcmFtIHtTb2NrZXRDb21wb25lbnR9IHNvY2tldENvbXAgUGVlciBzb2NrZXQgdG8gY29ubmVjdFxuICAgKi9cbiAgY29ubmVjdGlvbkRvbmUoc29ja2V0Q29tcCkge1xuICAgIHN1cGVyLmNvbm5lY3Rpb25Eb25lKHNvY2tldENvbXApO1xuXG4gICAgLy8gVGhpcyBjcmVhdGVzIHRoZSBjb25uZWN0aW9uIGFuZCBjb25uZWN0cyBzb2NrZXRzXG4gICAgbmV3IElPQ29ubmVjdGlvbihzb2NrZXRDb21wLCB0aGlzLCB0aGlzLmNhbnZhcyk7XG4gIH1cblxuICAvKipcbiAgICogUXVlcnkgaWYgdGhpcyBzb2NrZXQgY291bGQgYWNjZXB0IGEgY29ubmVjdGlvbiB3aXRoXG4gICAqIGEgcGVlciBzb2NrZXQgcGFzc2VkIGFzIHBhcm1ldGVyXG4gICAqIEBwYXJhbSB7U29ja2V0Q29tcG9uZW50fSBzb2NrZXRDb21wIFBlZXIgc29ja2V0IHRvIGNvbm5lY3RcbiAgICovXG4gIGNhbkFjY2VwdFBlZXJTb2NrZXQoc29ja2V0Q29tcCkge1xuICAgIHJldHVybiBzb2NrZXRDb21wLnNvY2tldCBpbnN0YW5jZW9mIE91dHB1dFNvY2tldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHNvY2tldCBzdXBwb3J0cyBzaW5nbGUgY29ubmVjdGlvbiwgc28gaWYgdGhlIHVzZXJcbiAgICogY29ubmVjdHMgYW5vdGhlciBzb2NrZXQgdG8gaXQsIHdlIGhhdmUgdG8gZGVsZXRlIHByZXZpb3VzIGNvbm5lY3Rpb25zXG4gICAqL1xuICBnZXQgaGFzU2luZ2xlQ29ubmVjdGlvbigpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHNvdXJjZSBwb2ludCBmb3IgdGhpcyBzb2NrZXQgY29tcG9uZW50OlxuICAgKiAtMSA9IExlZnRcbiAgICogMSA9IFJpZ2h0XG4gICAqL1xuICBnZXRTb3VyY2VQb2ludERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBjb21wb25lbnQgZWxlbWVudCBhY2NvcmRpbmcgdG8geCBhbmQgeSBsb2NhbCBjb29yZGluYXRlcyxcbiAgICogaWYgdGhpcyBjb21wb25lbnQgaXMgYSBjaGlsZCBjb21wb25lbnQsIGNvb3JkaW5hdGVzIGluIGNhbnZhcyBzcGFjZVxuICAgKiBhcmUgY29tcHV0ZWQuIEluIGFkZGl0aW9uLCB0aGlzIG92ZXJyaWRlIHdpbGwgcmVmbGVjdCB0aGUgc3RhdHVzIG9mIHRoZVxuICAgKiBzb2NrZXQgYnkgaGlkaW5nL3Nob3dpbmcgdGhlIHRleHQgZmllbGQgcmVsYXRlZCB0byB0aGUgaW5wdXQgc29ja2V0XG4gICAqL1xuICB1cGRhdGVTVkdFbGVtZW50KCkge1xuICAgIHN1cGVyLnVwZGF0ZVNWR0VsZW1lbnQoKTtcblxuICAgIC8vIFNob3cvSGlkZSB0aGUgaW1wdXQgY29tcG9uZW50XG4gICAgdGhpcy4jaW5wdXRFbGVtZW50LnN0eWxlW1wiZGlzcGxheVwiXSA9IHRoaXMuaXNDb25uZWN0ZWQgPyBcIm5vbmVcIiA6IFwidGFibGUtY2VsbFwiO1xuICAgIHRoaXMuI2xhYmVsRWxlbWVudC5pbm5lckhUTUwgPSBgJHt0aGlzLnNvY2tldC5uYW1lfWA7XG4gICAgdGhpcy5zb2NrZXQudmFsdWUgPSB0aGlzLiNpbnB1dEVsZW1lbnQudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgcmVzcG9uc2libGUgdG8gZW51bWVyYXRlIGFsbCBzb2NrZXQgb2YgcmVnaXN0ZXJlZCBub2Rlc1xuICAgKiB0aGF0IGNhbiBlbnN0YWJpbGlzaCBhIHZhbGlkIGNvbm5lY3Rpb24gd2l0aCB0aGlzIHNvY2tldCBhbmQgY29uc3RydWN0XG4gICAqIGEgbWVudSBpdGVtcyBhcnJheSB0aHN0IGRlZmluZSBjYWxsYmFjayB0byBjcmVhdGUgdGhlIHJlbGF0ZWQgbm9kZSBhbmRcbiAgICogcmV0dXJuIHRoZSBwYXJ0aWN1bGFyIHNvY2tldC4gSXQgaXMgdXNlZCBieSB0aGUgc21hcnQgY29ubmVjdGlvbiBwcm9jZXNzXG4gICAqIHZpYSB0aGUgY29udGV4dCBtZW51XG4gICAqL1xuICBnZXRSZWdpc3RlcmVkUG9zc2libGVQZWVycygpIHtcbiAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICBmb3IgKGxldCBjYXQgb2YgRW52LmdldENhdGVnb3JpZXMoKSkge1xuICAgICAgZm9yIChsZXQgbm9kZURlZiBvZiBFbnYuZ2V0Q2F0ZWdvcnlOb2RlcyhjYXQpKSB7XG4gICAgICAgIC8vIEluc3RhbnRpYXRlIHRoZSBub2RlIHRvIGVudW1lcmF0ZSBpdHMgc29ja2V0c1xuICAgICAgICBsZXQgbiA9IEVudi5nZXRJbnN0YW5jZShub2RlRGVmLm5hbWUpO1xuICAgICAgICBpZiAobi5jcmVhdGFibGUpIHtcbiAgICAgICAgICBmb3IgKGxldCBvdXQgb2Ygbi5vdXRwdXRzKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKFxuICAgICAgICAgICAgICBuZXcgTWVudUl0ZW0oXG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIDx0c3BhbiBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIiBmaWxsPVwiJHtUaGVtZS5jdXJyZW50Lk5PREVfSU9fRklMTF9DT0xPUn1cIj5cbiAgICAgICAgICAgICAgICAgICR7b3V0Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC90c3Bhbj5cbiAgICAgICAgICAgICAgICA8dHNwYW4gYWxpZ25tZW50LWJhc2VsaW5lPVwibWlkZGxlXCIgc3R5bGU9XCIke1RoZW1lLmN1cnJlbnQuTUVOVV9JVEVNX0ZPTlR9XCIgZmlsbD1cIiR7VGhlbWUuY3VycmVudC5NRU5VX0lURU1fQ09MT1J9XCI+XG4gICAgICAgICAgICAgICAgICAke25vZGVEZWYubmFtZX1cbiAgICAgICAgICAgICAgICA8L3RzcGFuPlxuICAgICAgICAgICAgICAgIDx0c3BhbiBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIiBzdHlsZT1cIiR7VGhlbWUuY3VycmVudC5NRU5VX0lURU1fQ0FURUdPUllfRk9OVH1cIiBmaWxsPVwiJHtUaGVtZS5jdXJyZW50Lk1FTlVfSVRFTV9DQVRFR09SWV9DT0xPUn1cIj5cbiAgICAgICAgICAgICAgICAgICR7bm9kZURlZi5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICA8L3RzcGFuPlxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgbm9kZSBhbmQgcmV0dXJuIHRoZSBzcGVjaWZpYyBzb2NrZXQgY29tcG9uZW50IHRvXG4gICAgICAgICAgICAgICAgICAvLyB0aGUgY29udGV4dCBtZW51IGNsaWVudFxuICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgQ25vZGVDb21wb25lbnQobiwgdGhpcy5jYW52YXMpO1xuICAgICAgICAgICAgICAgICAgbm9kZS5wb3MgPSBuZXcgUG9zaXRpb24oeCwgeSk7XG4gICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGNvbm5lY3RlZCBjb21wb25lbnQgaW5zdGVhZFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dC5fX2NvbXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXJyYXkgb2YgY29udGV4dCBtZW51IGl0ZW1zLiBJZiB0aGUgY29tcG9uZW50XG4gICAqIHJldHVybnMgbnVsbCwgbm8gY29udGV4dHVhbCBtZW51IGlzIHNob3duXG4gICAqL1xuICBnZXRDb250ZXh0TWVudUl0ZW1zKCkge1xuICAgIGxldCBpdGVtcyA9IFtdO1xuXG4gICAgbGV0IGNvbm4gPSB0aGlzLmNhbnZhcy5nZXRDb25uZWN0aW9uc0Zvcih0aGlzKVswXTtcbiAgICBpZiAoY29ubikge1xuICAgICAgaXRlbXMucHVzaChcbiAgICAgICAgbmV3IE1lbnVJdGVtKGA8dHNwYW4gYWxpZ25tZW50LWJhc2VsaW5lPVwibWlkZGxlXCI+RGlzY29ubmVjdDwvdHNwYW4+YCwgKCkgPT4ge1xuICAgICAgICAgIC8vIERpc2Nvbm5lY3QgdGhpcyBzb2NrZXRcbiAgICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVDb25uZWN0aW9uKGNvbm4pO1xuICAgICAgICAgIHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNvY2tldC5ub2RlLmNhblJlbW92ZUlucHV0KHRoaXMuc29ja2V0KSkge1xuICAgICAgaXRlbXMucHVzaChcbiAgICAgICAgbmV3IE1lbnVJdGVtKGA8dHNwYW4gYWxpZ25tZW50LWJhc2VsaW5lPVwibWlkZGxlXCI+RGVsZXRlIGlucHV0PC90c3Bhbj5gLCAoKSA9PiB7XG4gICAgICAgICAgLy8gRmlyc3QsIGRpc2Nvbm5lY3QgaWYgY29ubmVjdGVkXG4gICAgICAgICAgbGV0IGNvbm4gPSB0aGlzLmNhbnZhcy5nZXRDb25uZWN0aW9uc0Zvcih0aGlzKVswXTtcbiAgICAgICAgICBpZiAoY29ubikge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlQ29ubmVjdGlvbihjb25uKTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zb2NrZXQubm9kZS5yZW1vdmVJbnB1dCh0aGlzLnNvY2tldCk7XG4gICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlQ29tcG9uZW50KHRoaXMpO1xuICAgICAgICAgIHRoaXMucGFyZW50LnVwZGF0ZVNWR0VsZW1lbnQoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1zLmxlbmd0aCA+IDAgPyBpdGVtcyA6IG51bGw7XG4gIH1cbn1cbiIsIi8qKlxuICogY25vZGVzLXVpXG4gKlxuICogQSBHVUkgZm9yIGNub2Rlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgUHJldlNvY2tldCB9IGZyb20gXCJAbWFyY28uamFjb3ZvbmUvY25vZGVzL2Nub2Rlc1wiO1xuaW1wb3J0IHsgRW52IH0gZnJvbSBcIkBtYXJjby5qYWNvdm9uZS9jbm9kZXMvY25vZGVzXCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuL3RoZW1lXCI7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuLi9jYW52YXMvcG9zaXRpb25cIjtcbmltcG9ydCB7IFByZXZOZXh0Q29ubmVjdGlvbiB9IGZyb20gXCIuLi9jb25uZWN0aW9ucy9wcmV2bmV4dF9jb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBDbm9kZXNTb2NrZXRDb21wb25lbnQgfSBmcm9tIFwiLi9jbm9kZXNzb2NrZXRcIjtcbmltcG9ydCB7IFNvY2tldENvbXBvbmVudCB9IGZyb20gXCIuLi9jYW52YXMvc29ja2V0XCI7XG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gXCIuLi9jYW52YXMvbWVudVwiO1xuaW1wb3J0IHsgQ25vZGVDb21wb25lbnQgfSBmcm9tIFwiLi9jbm9kZVwiO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaW1wbGVtZW50cyBhIHNvY2tldCByZXByZXNlbnRpbmcgdGhlIE5leHQgc29ja2V0IGluIHRoZVxuICogY25vZGVzIGNvbnRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIE5leHRTb2NrZXRDb21wb25lbnQgZXh0ZW5kcyBDbm9kZXNTb2NrZXRDb21wb25lbnQge1xuICAvKiogVGhlIHNvY2tldCBzeW1ib2wgZWxlbWVudCAqL1xuICAjc29ja2V0U3ltYm9sID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihzb2NrZXQpIHtcbiAgICBzdXBlcihzb2NrZXQpO1xuICAgIHN1cGVyLnNldHVwKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3VzdG9taXplIHRoZSBkcmFnIGVsZW1lbnRcbiAgICovXG4gIGdldCBkcmFnRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc29ja2V0U3ltYm9sO1xuICB9XG5cbiAgLyoqXG4gICAqIExldHMgY3JlYXRlIHRoZSBlbGVtZW50XG4gICAqL1xuICBjcmVhdGVFbGVtZW50KCkge1xuICAgIHRoaXMuI3NvY2tldFN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcblxuICAgIHRoaXMuI3NvY2tldFN5bWJvbC5zZXRBdHRyaWJ1dGUoXG4gICAgICBcImRcIixcbiAgICAgIGBcbiAgICAgIE0gLTcgLThcbiAgICAgIEwgNyAtOFxuICAgICAgTCAxMiAwXG4gICAgICBMIDcgOFxuICAgICAgTCAtNyA4XG4gICAgICBaXG4gICAgICBgXG4gICAgKTtcbiAgICB0aGlzLiNzb2NrZXRTeW1ib2wuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFRoZW1lLmN1cnJlbnQuTk9ERV9QUkVWX05FWFRfU1RST0tFX0NPTE9SKTtcbiAgICB0aGlzLiNzb2NrZXRTeW1ib2wuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFRoZW1lLmN1cnJlbnQuTk9ERV9QUkVWX05FWFRfU1RST0tFX1dJRFRIKTtcbiAgICB0aGlzLiNzb2NrZXRTeW1ib2wuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBUaGVtZS5jdXJyZW50Lk5PREVfUFJFVl9ORVhUX0ZJTExfQ09MT1IpO1xuXG4gICAgbGV0IGxhYmVsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZm9yZWlnbk9iamVjdFwiKTtcbiAgICBsYWJlbEVsZW0uc3R5bGUgPSBgXG4gICAgICBmb250OiAke1RoZW1lLmN1cnJlbnQuTk9ERV9QUkVWX05FWFRfTkFNRV9GT05UfTsgXG4gICAgICBjb2xvcjogJHtUaGVtZS5jdXJyZW50Lk5PREVfUFJFVl9ORVhUX05BTUVfQ09MT1J9OyBcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgd2lkdGg6ICR7VGhlbWUuY3VycmVudC5OT0RFX1dJRFRIIC8gMiAtIDE1fXB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIGA7XG5cbiAgICBsYWJlbEVsZW0uaW5uZXJIVE1MID0gYCR7dGhpcy5zb2NrZXQubmFtZX1gO1xuXG4gICAgbGFiZWxFbGVtLnNldEF0dHJpYnV0ZShcInhcIiwgMCk7XG4gICAgbGFiZWxFbGVtLnNldEF0dHJpYnV0ZShcInlcIiwgMCk7XG4gICAgbGFiZWxFbGVtLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7LVRoZW1lLmN1cnJlbnQuTk9ERV9XSURUSCAvIDJ9LCAkey0xNX0pYCk7XG4gICAgbGFiZWxFbGVtLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFRoZW1lLmN1cnJlbnQuTk9ERV9XSURUSCAvIDIgLSAxNSk7XG4gICAgbGFiZWxFbGVtLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCAzMCk7XG5cbiAgICBsZXQgcHJldkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImdcIik7XG4gICAgcHJldkVsZW0uc2V0QXR0cmlidXRlKFwieFwiLCAwKTtcbiAgICBwcmV2RWxlbS5zZXRBdHRyaWJ1dGUoXCJ5XCIsIDApO1xuICAgIHByZXZFbGVtLmFwcGVuZENoaWxkKHRoaXMuI3NvY2tldFN5bWJvbCk7XG4gICAgcHJldkVsZW0uYXBwZW5kQ2hpbGQobGFiZWxFbGVtKTtcblxuICAgIHJldHVybiBwcmV2RWxlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBRdWVyeSBpZiB0aGlzIHNvY2tldCBjb3VsZCBhY2NlcHQgYSBjb25uZWN0aW9uIHdpdGhcbiAgICogYSBwZWVyIHNvY2tldCBwYXNzZWQgYXMgcGFybWV0ZXJcbiAgICogQHBhcmFtIHtTb2NrZXRDb21wb25lbnR9IHNvY2tldENvbXAgUGVlciBzb2NrZXQgdG8gY29ubmVjdFxuICAgKi9cbiAgY2FuQWNjZXB0UGVlclNvY2tldChzb2NrZXRDb21wKSB7XG4gICAgcmV0dXJuIHNvY2tldENvbXAuc29ja2V0IGluc3RhbmNlb2YgUHJldlNvY2tldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdXNlciBoYXMgY29tcGxldGVkIGEgdmFsaWQgY29ubmVjdGlvblxuICAgKiBAcGFyYW0ge1NvY2tldENvbXBvbmVudH0gc29ja2V0Q29tcCBQZWVyIHNvY2tldCB0byBjb25uZWN0XG4gICAqL1xuICBjb25uZWN0aW9uRG9uZShzb2NrZXRDb21wKSB7XG4gICAgc3VwZXIuY29ubmVjdGlvbkRvbmUoc29ja2V0Q29tcCk7XG5cbiAgICAvLyBUaGlzIGNyZWF0ZXMgdGhlIGNvbm5lY3Rpb24gYW5kIGNvbm5lY3RzIHNvY2tldHNcbiAgICBuZXcgUHJldk5leHRDb25uZWN0aW9uKHRoaXMsIHNvY2tldENvbXAsIHRoaXMuY2FudmFzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBRdWVzcnkgaWYgdGhpcyBzb2NrZXQgY291bGQgYWNjZXB0IGEgY29ubmVjdGlvbiB3aXRoXG4gICAqIGEgcGVlciBzb2NrZXQgcGFzc2VkIGFzIHBhcm1ldGVyXG4gICAqIEBwYXJhbSB7U29ja2V0Q29tcG9uZW50fSBzb2NrZXRDb21wIFBlZXIgc29ja2V0IHRvIGNvbm5lY3RcbiAgICovXG4gIGNhbkFjY2VwdFBlZXJTb2NrZXQoc29ja2V0Q29tcCkge1xuICAgIHJldHVybiBzb2NrZXRDb21wLnNvY2tldCBpbnN0YW5jZW9mIFByZXZTb2NrZXQ7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBzb2NrZXQgc3VwcG9ydHMgc2luZ2xlIGNvbm5lY3Rpb24sIHNvIGlmIHRoZSB1c2VyXG4gICAqIGNvbm5lY3RzIGFub3RoZXIgc29ja2V0IHRvIGl0LCB3ZSBoYXZlIHRvIGRlbGV0ZSBwcmV2aW91cyBjb25uZWN0aW9uc1xuICAgKi9cbiAgZ2V0IGhhc1NpbmdsZUNvbm5lY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGlyZWN0aW9uIG9mIHRoZSBzb3VyY2UgcG9pbnQgZm9yIHRoaXMgc29ja2V0IGNvbXBvbmVudDpcbiAgICogLTEgPSBMZWZ0XG4gICAqIDEgPSBSaWdodFxuICAgKi9cbiAgZ2V0U291cmNlUG9pbnREaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgcmVzcG9uc2libGUgdG8gZW51bWVyYXRlIGFsbCBzb2NrZXQgb2YgcmVnaXN0ZXJlZCBub2Rlc1xuICAgKiB0aGF0IGNhbiBlbnN0YWJpbGlzaCBhIHZhbGlkIGNvbm5lY3Rpb24gd2l0aCB0aGlzIHNvY2tldCBhbmQgY29uc3RydWN0XG4gICAqIGEgbWVudSBpdGVtcyBhcnJheSB0aHN0IGRlZmluZSBjYWxsYmFjayB0byBjcmVhdGUgdGhlIHJlbGF0ZWQgbm9kZSBhbmRcbiAgICogcmV0dXJuIHRoZSBwYXJ0aWN1bGFyIHNvY2tldC4gSXQgaXMgdXNlZCBieSB0aGUgc21hcnQgY29ubmVjdGlvbiBwcm9jZXNzXG4gICAqIHZpYSB0aGUgY29udGV4dCBtZW51XG4gICAqL1xuICBnZXRSZWdpc3RlcmVkUG9zc2libGVQZWVycygpIHtcbiAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICBmb3IgKGxldCBjYXQgb2YgRW52LmdldENhdGVnb3JpZXMoKSkge1xuICAgICAgZm9yIChsZXQgbm9kZURlZiBvZiBFbnYuZ2V0Q2F0ZWdvcnlOb2RlcyhjYXQpKSB7XG4gICAgICAgIC8vIEluc3RhbnRpYXRlIHRoZSBub2RlIHRvIGVudW1lcmF0ZSBpdHMgc29ja2V0c1xuICAgICAgICBsZXQgbiA9IEVudi5nZXRJbnN0YW5jZShub2RlRGVmLm5hbWUpO1xuICAgICAgICBpZiAobi5jcmVhdGFibGUgJiYgbi5wcmV2KSB7XG4gICAgICAgICAgaXRlbXMucHVzaChcbiAgICAgICAgICAgIG5ldyBNZW51SXRlbShcbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA8dHNwYW4gYWxpZ25tZW50LWJhc2VsaW5lPVwibWlkZGxlXCIgZmlsbD1cIiR7VGhlbWUuY3VycmVudC5OT0RFX1BSRVZfTkVYVF9GSUxMX0NPTE9SfVwiPlxuICAgICAgICAgICAgICAgICR7bi5wcmV2Lm5hbWV9XG4gICAgICAgICAgICAgIDwvdHNwYW4+XG4gICAgICAgICAgICAgIDx0c3BhbiBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIiBzdHlsZT1cIiR7VGhlbWUuY3VycmVudC5NRU5VX0lURU1fRk9OVH1cIiBmaWxsPVwiJHtUaGVtZS5jdXJyZW50Lk1FTlVfSVRFTV9DT0xPUn1cIj5cbiAgICAgICAgICAgICAgJHtub2RlRGVmLm5hbWV9XG4gICAgICAgICAgICAgIDwvdHNwYW4+XG4gICAgICAgICAgICAgIDx0c3BhbiBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIiBzdHlsZT1cIiR7VGhlbWUuY3VycmVudC5NRU5VX0lURU1fQ0FURUdPUllfRk9OVH1cIiBmaWxsPVwiJHtUaGVtZS5jdXJyZW50Lk1FTlVfSVRFTV9DQVRFR09SWV9DT0xPUn1cIj5cbiAgICAgICAgICAgICAgJHtub2RlRGVmLmNhdGVnb3J5fVxuICAgICAgICAgICAgICA8L3RzcGFuPlxuICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgbm9kZSBhbmQgcmV0dXJuIHRoZSBzcGVjaWZpYyBzb2NrZXQgY29tcG9uZW50IHRvXG4gICAgICAgICAgICAgICAgLy8gdGhlIGNvbnRleHQgbWVudSBjbGllbnRcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBDbm9kZUNvbXBvbmVudChuLCB0aGlzLmNhbnZhcyk7XG4gICAgICAgICAgICAgICAgbm9kZS5wb3MgPSBuZXcgUG9zaXRpb24oeCwgeSk7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBjb25uZWN0ZWQgY29tcG9uZW50IGluc3RlYWRcbiAgICAgICAgICAgICAgICByZXR1cm4gbi5wcmV2Ll9fY29tcDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFycmF5IG9mIGNvbnRleHQgbWVudSBpdGVtcy4gSWYgdGhlIGNvbXBvbmVudFxuICAgKiByZXR1cm5zIG51bGwsIG5vIGNvbnRleHR1YWwgbWVudSBpcyBzaG93blxuICAgKi9cbiAgZ2V0Q29udGV4dE1lbnVJdGVtcygpIHtcbiAgICBsZXQgaXRlbXMgPSBbXTtcblxuICAgIGxldCBjb25uID0gdGhpcy5jYW52YXMuZ2V0Q29ubmVjdGlvbnNGb3IodGhpcylbMF07XG4gICAgaWYgKGNvbm4pIHtcbiAgICAgIGl0ZW1zLnB1c2goXG4gICAgICAgIG5ldyBNZW51SXRlbShgPHRzcGFuIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiPkRpc2Nvbm5lY3Q8L3RzcGFuPmAsICgpID0+IHtcbiAgICAgICAgICAvLyBEaXNjb25uZWN0IHRoaXMgc29ja2V0XG4gICAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlQ29ubmVjdGlvbihjb25uKTtcbiAgICAgICAgICB0aGlzLnNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtcy5sZW5ndGggPiAwID8gaXRlbXMgOiBudWxsO1xuICB9XG59XG4iLCIvKipcbiAqIGNub2Rlcy11aVxuICpcbiAqIEEgR1VJIGZvciBjbm9kZXNcbiAqIExpY2Vuc2U6IE1JVFxuICogQXV0aG9yOiBNYXJjbyBKYWNvdm9uZVxuICogWWVhcjogMjAyMFxuICovXG5cbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4vdGhlbWVcIjtcbmltcG9ydCB7IElucHV0U29ja2V0IH0gZnJvbSBcIkBtYXJjby5qYWNvdm9uZS9jbm9kZXMvY25vZGVzXCI7XG5pbXBvcnQgeyBFbnYgfSBmcm9tIFwiQG1hcmNvLmphY292b25lL2Nub2Rlcy9jbm9kZXNcIjtcbmltcG9ydCB7IElPQ29ubmVjdGlvbiB9IGZyb20gXCIuLi9jb25uZWN0aW9ucy9pb19jb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBDbm9kZXNTb2NrZXRDb21wb25lbnQgfSBmcm9tIFwiLi9jbm9kZXNzb2NrZXRcIjtcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSBcIi4uL2NhbnZhcy9tZW51XCI7XG5pbXBvcnQgeyBDbm9kZUNvbXBvbmVudCB9IGZyb20gXCIuL2Nub2RlXCI7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuLi9jYW52YXMvcG9zaXRpb25cIjtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGltcGxlbWVudHMgYSBzb2NrZXQgcmVwcmVzZW50aW5nIGEgT3V0cHV0IGluIHRoZVxuICogY25vZGVzIHdvcmxkXG4gKi9cbmV4cG9ydCBjbGFzcyBPdXRwdXRTb2NrZXRDb21wb25lbnQgZXh0ZW5kcyBDbm9kZXNTb2NrZXRDb21wb25lbnQge1xuICAvKiogVGhlIHNvY2tldCBzeW1ib2wgZWxlbWVudCAqL1xuICAjc29ja2V0U3ltYm9sID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihzb2NrZXQpIHtcbiAgICBzdXBlcihzb2NrZXQpO1xuICAgIHN1cGVyLnNldHVwKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3VzdG9taXplIHRoZSBkcmFnIGVsZW1lbnRcbiAgICovXG4gIGdldCBkcmFnRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc29ja2V0U3ltYm9sO1xuICB9XG5cbiAgLyoqXG4gICAqIExldHMgY3JlYXRlIHRoZSBlbGVtZW50XG4gICAqL1xuICBjcmVhdGVFbGVtZW50KCkge1xuICAgIHRoaXMuI3NvY2tldFN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiY2lyY2xlXCIpO1xuXG4gICAgdGhpcy4jc29ja2V0U3ltYm9sLnNldEF0dHJpYnV0ZShcImN4XCIsIDApO1xuICAgIHRoaXMuI3NvY2tldFN5bWJvbC5zZXRBdHRyaWJ1dGUoXCJjeVwiLCAwKTtcbiAgICB0aGlzLiNzb2NrZXRTeW1ib2wuc2V0QXR0cmlidXRlKFwiclwiLCBUaGVtZS5jdXJyZW50Lk5PREVfSU9fUE9JTlRfUkFESVVTKTtcbiAgICB0aGlzLiNzb2NrZXRTeW1ib2wuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFRoZW1lLmN1cnJlbnQuTk9ERV9JT19TVFJPS0VfV0lEVEgpO1xuICAgIHRoaXMuI3NvY2tldFN5bWJvbC5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgVGhlbWUuY3VycmVudC5OT0RFX0lPX1NUUk9LRV9DT0xPUik7XG4gICAgdGhpcy4jc29ja2V0U3ltYm9sLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgVGhlbWUuY3VycmVudC5OT0RFX0lPX0ZJTExfQ09MT1IpO1xuXG4gICAgbGV0IGxhYmVsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZm9yZWlnbk9iamVjdFwiKTtcbiAgICBsYWJlbEVsZW0uc3R5bGUgPSBgXG4gICAgICBmb250OiAke1RoZW1lLmN1cnJlbnQuTk9ERV9JT19OQU1FX0ZPTlR9OyBcbiAgICAgIGNvbG9yOiAke1RoZW1lLmN1cnJlbnQuTk9ERV9JT19OQU1FX0NPTE9SfTsgXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHdpZHRoOiAke1RoZW1lLmN1cnJlbnQuTk9ERV9XSURUSCAtIDMwfXB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIGA7XG5cbiAgICBsYWJlbEVsZW0uaW5uZXJIVE1MID0gYCR7dGhpcy5zb2NrZXQubmFtZX1gO1xuXG4gICAgbGFiZWxFbGVtLnNldEF0dHJpYnV0ZShcInhcIiwgMCk7XG4gICAgbGFiZWxFbGVtLnNldEF0dHJpYnV0ZShcInlcIiwgMCk7XG4gICAgbGFiZWxFbGVtLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7LVRoZW1lLmN1cnJlbnQuTk9ERV9XSURUSCArIDE1fSwgJHstMTV9KWApO1xuICAgIGxhYmVsRWxlbS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBUaGVtZS5jdXJyZW50Lk5PREVfV0lEVEggLSAzMCk7XG4gICAgbGFiZWxFbGVtLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCAzMCk7XG5cbiAgICBsZXQgb3V0cHV0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZ1wiKTtcbiAgICBvdXRwdXRFbGVtLnNldEF0dHJpYnV0ZShcInhcIiwgMCk7XG4gICAgb3V0cHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ5XCIsIDApO1xuICAgIG91dHB1dEVsZW0uYXBwZW5kQ2hpbGQodGhpcy4jc29ja2V0U3ltYm9sKTtcbiAgICBvdXRwdXRFbGVtLmFwcGVuZENoaWxkKGxhYmVsRWxlbSk7XG5cbiAgICByZXR1cm4gb3V0cHV0RWxlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdXNlciBoYXMgY29tcGxldGVkIGEgdmFsaWQgY29ubmVjdGlvblxuICAgKiBAcGFyYW0ge1NvY2tldENvbXBvbmVudH0gc29ja2V0Q29tcCBQZWVyIHNvY2tldCB0byBjb25uZWN0XG4gICAqL1xuICBjb25uZWN0aW9uRG9uZShzb2NrZXRDb21wKSB7XG4gICAgc3VwZXIuY29ubmVjdGlvbkRvbmUoc29ja2V0Q29tcCk7XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBhbm90aGVyIGNvbm5lY3Rpb24gZm9yIHRoZSB0YXJnZXQgY29tcG9uZW50LFxuICAgIC8vIGRlbGV0ZSB0aGUgb2xkZXN0IG9uZVxuICAgIGlmIChzb2NrZXRDb21wLmlzQ29ubmVjdGVkKSB7XG4gICAgICB0aGlzLmNhbnZhcy5yZW1vdmVDb25uZWN0aW9uKHRoaXMuY2FudmFzLmdldENvbm5lY3Rpb25zRm9yKHNvY2tldENvbXApWzBdKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGNyZWF0ZXMgdGhlIGNvbm5lY3Rpb24gYW5kIGNvbm5lY3RzIHNvY2tldHNcbiAgICBuZXcgSU9Db25uZWN0aW9uKHRoaXMsIHNvY2tldENvbXAsIHRoaXMuY2FudmFzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBRdWVyeSBpZiB0aGlzIHNvY2tldCBjb3VsZCBhY2NlcHQgYSBjb25uZWN0aW9uIHdpdGhcbiAgICogYSBwZWVyIHNvY2tldCBwYXNzZWQgYXMgcGFybWV0ZXJcbiAgICogQHBhcmFtIHtTb2NrZXRDb21wb25lbnR9IHNvY2tldENvbXAgUGVlciBzb2NrZXQgdG8gY29ubmVjdFxuICAgKi9cbiAgY2FuQWNjZXB0UGVlclNvY2tldChzb2NrZXRDb21wKSB7XG4gICAgcmV0dXJuIHNvY2tldENvbXAuc29ja2V0IGluc3RhbmNlb2YgSW5wdXRTb2NrZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGlyZWN0aW9uIG9mIHRoZSBzb3VyY2UgcG9pbnQgZm9yIHRoaXMgc29ja2V0IGNvbXBvbmVudDpcbiAgICogLTEgPSBMZWZ0XG4gICAqIDEgPSBSaWdodFxuICAgKi9cbiAgZ2V0U291cmNlUG9pbnREaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBzb2NrZXQgaXMgYSBtdWx0aS1jb25uZWN0aW9uIHNvY2tldC4gVGhpcyBtZWFucyB0aGF0XG4gICAqIG1hbnkgc29ja2V0cyBjYW4gYmUgY29ubmVjdGVkIHRvIGl0XG4gICAqL1xuICBnZXQgaGFzU2luZ2xlQ29ubmVjdGlvbigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgcmVzcG9uc2libGUgdG8gZW51bWVyYXRlIGFsbCBzb2NrZXQgb2YgcmVnaXN0ZXJlZCBub2Rlc1xuICAgKiB0aGF0IGNhbiBlbnN0YWJpbGlzaCBhIHZhbGlkIGNvbm5lY3Rpb24gd2l0aCB0aGlzIHNvY2tldCBhbmQgY29uc3RydWN0XG4gICAqIGEgbWVudSBpdGVtcyBhcnJheSB0aHN0IGRlZmluZSBjYWxsYmFjayB0byBjcmVhdGUgdGhlIHJlbGF0ZWQgbm9kZSBhbmRcbiAgICogcmV0dXJuIHRoZSBwYXJ0aWN1bGFyIHNvY2tldC4gSXQgaXMgdXNlZCBieSB0aGUgc21hcnQgY29ubmVjdGlvbiBwcm9jZXNzXG4gICAqIHZpYSB0aGUgY29udGV4dCBtZW51XG4gICAqL1xuICBnZXRSZWdpc3RlcmVkUG9zc2libGVQZWVycygpIHtcbiAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICBmb3IgKGxldCBjYXQgb2YgRW52LmdldENhdGVnb3JpZXMoKSkge1xuICAgICAgZm9yIChsZXQgbm9kZURlZiBvZiBFbnYuZ2V0Q2F0ZWdvcnlOb2RlcyhjYXQpKSB7XG4gICAgICAgIC8vIEluc3RhbnRpYXRlIHRoZSBub2RlIHRvIGVudW1lcmF0ZSBpdHMgc29ja2V0c1xuICAgICAgICBsZXQgbiA9IEVudi5nZXRJbnN0YW5jZShub2RlRGVmLm5hbWUpO1xuICAgICAgICBpZiAobi5jcmVhdGFibGUpIHtcbiAgICAgICAgICBmb3IgKGxldCBpbnAgb2Ygbi5pbnB1dHMpIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goXG4gICAgICAgICAgICAgIG5ldyBNZW51SXRlbShcbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgPHRzcGFuIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiIGZpbGw9XCIke1RoZW1lLmN1cnJlbnQuTk9ERV9JT19GSUxMX0NPTE9SfVwiPlxuICAgICAgICAgICAgICAgICAgJHtpbnAubmFtZX1cbiAgICAgICAgICAgICAgICA8L3RzcGFuPlxuICAgICAgICAgICAgICAgIDx0c3BhbiBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIiBzdHlsZT1cIiR7VGhlbWUuY3VycmVudC5NRU5VX0lURU1fRk9OVH1cIiBmaWxsPVwiJHtUaGVtZS5jdXJyZW50Lk1FTlVfSVRFTV9DT0xPUn1cIj5cbiAgICAgICAgICAgICAgICAgICR7bm9kZURlZi5uYW1lfVxuICAgICAgICAgICAgICAgIDwvdHNwYW4+XG4gICAgICAgICAgICAgICAgPHRzcGFuIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiIHN0eWxlPVwiJHtUaGVtZS5jdXJyZW50Lk1FTlVfSVRFTV9DQVRFR09SWV9GT05UfVwiIGZpbGw9XCIke1RoZW1lLmN1cnJlbnQuTUVOVV9JVEVNX0NBVEVHT1JZX0NPTE9SfVwiPlxuICAgICAgICAgICAgICAgICAgJHtub2RlRGVmLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgIDwvdHNwYW4+XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICAoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBub2RlIGFuZCByZXR1cm4gdGhlIHNwZWNpZmljIHNvY2tldCBjb21wb25lbnQgdG9cbiAgICAgICAgICAgICAgICAgIC8vIHRoZSBjb250ZXh0IG1lbnUgY2xpZW50XG4gICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBDbm9kZUNvbXBvbmVudChuLCB0aGlzLmNhbnZhcyk7XG4gICAgICAgICAgICAgICAgICBub2RlLnBvcyA9IG5ldyBQb3NpdGlvbih4LCB5KTtcbiAgICAgICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgY29ubmVjdGVkIGNvbXBvbmVudCBpbnN0ZWFkXG4gICAgICAgICAgICAgICAgICByZXR1cm4gaW5wLl9fY29tcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhcnJheSBvZiBjb250ZXh0IG1lbnUgaXRlbXMuIElmIHRoZSBjb21wb25lbnRcbiAgICogcmV0dXJucyBudWxsLCBubyBjb250ZXh0dWFsIG1lbnUgaXMgc2hvd25cbiAgICovXG4gIGdldENvbnRleHRNZW51SXRlbXMoKSB7XG4gICAgbGV0IGl0ZW1zID0gW107XG5cbiAgICBsZXQgY29ubnMgPSB0aGlzLmNhbnZhcy5nZXRDb25uZWN0aW9uc0Zvcih0aGlzKTtcbiAgICBpZiAoY29ubnMubGVuZ3RoID4gMCkge1xuICAgICAgaXRlbXMucHVzaChcbiAgICAgICAgbmV3IE1lbnVJdGVtKGA8dHNwYW4gYWxpZ25tZW50LWJhc2VsaW5lPVwibWlkZGxlXCI+RGlzY29ubmVjdCBhbGw8L3RzcGFuPmAsICgpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBjIG9mIGNvbm5zKSB7XG4gICAgICAgICAgICAvLyBEaXNjb25uZWN0IHRoaXMgc29ja2V0XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVDb25uZWN0aW9uKGMpO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZGlzY29ubmVjdChjLnRhcmdldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbXMubGVuZ3RoID4gMCA/IGl0ZW1zIDogbnVsbDtcbiAgfVxufVxuIiwiLyoqXG4gKiBjbm9kZXMtdWlcbiAqXG4gKiBBIEdVSSBmb3IgY25vZGVzXG4gKiBMaWNlbnNlOiBNSVRcbiAqIEF1dGhvcjogTWFyY28gSmFjb3ZvbmVcbiAqIFllYXI6IDIwMjBcbiAqL1xuXG5pbXBvcnQgeyBOZXh0U29ja2V0IH0gZnJvbSBcIkBtYXJjby5qYWNvdm9uZS9jbm9kZXMvY25vZGVzXCI7XG5pbXBvcnQgeyBFbnYgfSBmcm9tIFwiQG1hcmNvLmphY292b25lL2Nub2Rlcy9jbm9kZXNcIjtcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4vdGhlbWVcIjtcbmltcG9ydCB7IFByZXZOZXh0Q29ubmVjdGlvbiB9IGZyb20gXCIuLi9jb25uZWN0aW9ucy9wcmV2bmV4dF9jb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBDbm9kZXNTb2NrZXRDb21wb25lbnQgfSBmcm9tIFwiLi9jbm9kZXNzb2NrZXRcIjtcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSBcIi4uL2NhbnZhcy9tZW51XCI7XG5pbXBvcnQgeyBDbm9kZUNvbXBvbmVudCB9IGZyb20gXCIuL2Nub2RlXCI7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuLi9jYW52YXMvcG9zaXRpb25cIjtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGltcGxlbWVudHMgYSBzb2NrZXQgdGhhdCByZXByZXNlbnRzIGEgUHJldiBvYmplY3RcbiAqIGluIHRoZSBjbm9kZXMgd29ybGRcbiAqL1xuZXhwb3J0IGNsYXNzIFByZXZTb2NrZXRDb21wb25lbnQgZXh0ZW5kcyBDbm9kZXNTb2NrZXRDb21wb25lbnQge1xuICAvKiogVGhlIHNvY2tldCBzeW1ib2wgZWxlbWVudCAqL1xuICAjc29ja2V0U3ltYm9sID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihzb2NrZXQpIHtcbiAgICBzdXBlcihzb2NrZXQpO1xuICAgIHN1cGVyLnNldHVwKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3VzdG9taXplIHRoZSBkcmFnIGVsZW1lbnRcbiAgICovXG4gIGdldCBkcmFnRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc29ja2V0U3ltYm9sO1xuICB9XG5cbiAgLyoqXG4gICAqIExldHMgY3JlYXRlIHRoZSBlbGVtZW50XG4gICAqL1xuICBjcmVhdGVFbGVtZW50KCkge1xuICAgIHRoaXMuI3NvY2tldFN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcblxuICAgIHRoaXMuI3NvY2tldFN5bWJvbC5zZXRBdHRyaWJ1dGUoXG4gICAgICBcImRcIixcbiAgICAgIGBcbiAgICAgIE0gJHstVGhlbWUuY3VycmVudC5OT0RFX1BSRVZfTkVYVF9QT0lOVF9SQURJVVN9ICR7LVRoZW1lLmN1cnJlbnQuTk9ERV9QUkVWX05FWFRfUE9JTlRfUkFESVVTfVxuICAgICAgTCAke1RoZW1lLmN1cnJlbnQuTk9ERV9QUkVWX05FWFRfUE9JTlRfUkFESVVTfSAkey1UaGVtZS5jdXJyZW50Lk5PREVfUFJFVl9ORVhUX1BPSU5UX1JBRElVU31cbiAgICAgIEwgJHtUaGVtZS5jdXJyZW50Lk5PREVfUFJFVl9ORVhUX1BPSU5UX1JBRElVU30gJHtUaGVtZS5jdXJyZW50Lk5PREVfUFJFVl9ORVhUX1BPSU5UX1JBRElVU31cbiAgICAgIEwgJHstVGhlbWUuY3VycmVudC5OT0RFX1BSRVZfTkVYVF9QT0lOVF9SQURJVVN9ICR7VGhlbWUuY3VycmVudC5OT0RFX1BSRVZfTkVYVF9QT0lOVF9SQURJVVN9XG4gICAgICBaXG4gICAgICBgXG4gICAgKTtcbiAgICB0aGlzLiNzb2NrZXRTeW1ib2wuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFRoZW1lLmN1cnJlbnQuTk9ERV9QUkVWX05FWFRfU1RST0tFX0NPTE9SKTtcbiAgICB0aGlzLiNzb2NrZXRTeW1ib2wuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFRoZW1lLmN1cnJlbnQuTk9ERV9QUkVWX05FWFRfU1RST0tFX1dJRFRIKTtcbiAgICB0aGlzLiNzb2NrZXRTeW1ib2wuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBUaGVtZS5jdXJyZW50Lk5PREVfUFJFVl9ORVhUX0ZJTExfQ09MT1IpO1xuXG4gICAgbGV0IGxhYmVsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZm9yZWlnbk9iamVjdFwiKTtcbiAgICBsYWJlbEVsZW0uc3R5bGUgPSBgXG4gICAgICBmb250OiAke1RoZW1lLmN1cnJlbnQuTk9ERV9QUkVWX05FWFRfTkFNRV9GT05UfTsgXG4gICAgICBjb2xvcjogJHtUaGVtZS5jdXJyZW50Lk5PREVfUFJFVl9ORVhUX05BTUVfQ09MT1J9OyBcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB3aWR0aDogJHtUaGVtZS5jdXJyZW50Lk5PREVfV0lEVEggLyAyIC0gMTV9cHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgYDtcblxuICAgIGxhYmVsRWxlbS5pbm5lckhUTUwgPSBgJHt0aGlzLnNvY2tldC5uYW1lfWA7XG5cbiAgICBsYWJlbEVsZW0uc2V0QXR0cmlidXRlKFwieFwiLCAwKTtcbiAgICBsYWJlbEVsZW0uc2V0QXR0cmlidXRlKFwieVwiLCAwKTtcbiAgICBsYWJlbEVsZW0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHsxNX0sICR7LTE1fSlgKTtcbiAgICBsYWJlbEVsZW0uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgVGhlbWUuY3VycmVudC5OT0RFX1dJRFRIIC8gMiAtIDE1KTtcbiAgICBsYWJlbEVsZW0uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIDMwKTtcblxuICAgIGxldCBwcmV2RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZ1wiKTtcbiAgICBwcmV2RWxlbS5zZXRBdHRyaWJ1dGUoXCJ4XCIsIDApO1xuICAgIHByZXZFbGVtLnNldEF0dHJpYnV0ZShcInlcIiwgMCk7XG4gICAgcHJldkVsZW0uYXBwZW5kQ2hpbGQodGhpcy4jc29ja2V0U3ltYm9sKTtcbiAgICBwcmV2RWxlbS5hcHBlbmRDaGlsZChsYWJlbEVsZW0pO1xuXG4gICAgcmV0dXJuIHByZXZFbGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB1c2VyIGhhcyBjb21wbGV0ZWQgYSB2YWxpZCBjb25uZWN0aW9uXG4gICAqIEBwYXJhbSB7U29ja2V0Q29tcG9uZW50fSBzb2NrZXRDb21wIFBlZXIgc29ja2V0IHRvIGNvbm5lY3RcbiAgICovXG4gIGNvbm5lY3Rpb25Eb25lKHNvY2tldENvbXApIHtcbiAgICBzdXBlci5jb25uZWN0aW9uRG9uZShzb2NrZXRDb21wKTtcblxuICAgIC8vIGlmIHRoZXJlIGlzIGFub3RoZXIgY29ubmVjdGlvbiBmb3IgdGhlIHRhcmdldCBjb21wb25lbnQsXG4gICAgLy8gZGVsZXRlIHRoZSBvbGRlc3Qgb25lXG4gICAgaWYgKHNvY2tldENvbXAuaXNDb25uZWN0ZWQpIHtcbiAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUNvbm5lY3Rpb24odGhpcy5jYW52YXMuZ2V0Q29ubmVjdGlvbnNGb3Ioc29ja2V0Q29tcClbMF0pO1xuICAgIH1cblxuICAgIC8vIFRoaXMgY3JlYXRlcyB0aGUgY29ubmVjdGlvbiBhbmQgY29ubmVjdHMgc29ja2V0c1xuICAgIG5ldyBQcmV2TmV4dENvbm5lY3Rpb24oc29ja2V0Q29tcCwgdGhpcywgdGhpcy5jYW52YXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFF1ZXNyeSBpZiB0aGlzIHNvY2tldCBjb3VsZCBhY2NlcHQgYSBjb25uZWN0aW9uIHdpdGhcbiAgICogYSBwZWVyIHNvY2tldCBwYXNzZWQgYXMgcGFybWV0ZXJcbiAgICogQHBhcmFtIHtTb2NrZXRDb21wb25lbnR9IHNvY2tldENvbXAgUGVlciBzb2NrZXQgdG8gY29ubmVjdFxuICAgKi9cbiAgY2FuQWNjZXB0UGVlclNvY2tldChzb2NrZXRDb21wKSB7XG4gICAgcmV0dXJuIHNvY2tldENvbXAuc29ja2V0IGluc3RhbmNlb2YgTmV4dFNvY2tldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHNvdXJjZSBwb2ludCBmb3IgdGhpcyBzb2NrZXQgY29tcG9uZW50OlxuICAgKiAtMSA9IExlZnRcbiAgICogMSA9IFJpZ2h0XG4gICAqL1xuICBnZXRTb3VyY2VQb2ludERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBzb2NrZXQgaXMgYSBtdWx0aS1jb25uZWN0aW9uIHNvY2tldC4gVGhpcyBtZWFucyB0aGF0XG4gICAqIG1hbnkgc29ja2V0cyBjYW4gYmUgY29ubmVjdGVkIHRvIGl0XG4gICAqL1xuICBnZXQgaGFzU2luZ2xlQ29ubmVjdGlvbigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgcmVzcG9uc2libGUgdG8gZW51bWVyYXRlIGFsbCBzb2NrZXQgb2YgcmVnaXN0ZXJlZCBub2Rlc1xuICAgKiB0aGF0IGNhbiBlbnN0YWJpbGlzaCBhIHZhbGlkIGNvbm5lY3Rpb24gd2l0aCB0aGlzIHNvY2tldCBhbmQgY29uc3RydWN0XG4gICAqIGEgbWVudSBpdGVtcyBhcnJheSB0aHN0IGRlZmluZSBjYWxsYmFjayB0byBjcmVhdGUgdGhlIHJlbGF0ZWQgbm9kZSBhbmRcbiAgICogcmV0dXJuIHRoZSBwYXJ0aWN1bGFyIHNvY2tldC4gSXQgaXMgdXNlZCBieSB0aGUgc21hcnQgY29ubmVjdGlvbiBwcm9jZXNzXG4gICAqIHZpYSB0aGUgY29udGV4dCBtZW51XG4gICAqL1xuICBnZXRSZWdpc3RlcmVkUG9zc2libGVQZWVycygpIHtcbiAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICBmb3IgKGxldCBjYXQgb2YgRW52LmdldENhdGVnb3JpZXMoKSkge1xuICAgICAgZm9yIChsZXQgbm9kZURlZiBvZiBFbnYuZ2V0Q2F0ZWdvcnlOb2RlcyhjYXQpKSB7XG4gICAgICAgIC8vIEluc3RhbnRpYXRlIHRoZSBub2RlIHRvIGVudW1lcmF0ZSBpdHMgc29ja2V0c1xuICAgICAgICBsZXQgbiA9IEVudi5nZXRJbnN0YW5jZShub2RlRGVmLm5hbWUpO1xuICAgICAgICBpZiAobi5jcmVhdGFibGUpIHtcbiAgICAgICAgICBmb3IgKGxldCBuZXh0IG9mIG4ubmV4dHMpIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goXG4gICAgICAgICAgICAgIG5ldyBNZW51SXRlbShcbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgPHRzcGFuIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiIGZpbGw9XCIke1RoZW1lLmN1cnJlbnQuTk9ERV9QUkVWX05FWFRfRklMTF9DT0xPUn1cIj5cbiAgICAgICAgICAgICAgICAgICR7bmV4dC5uYW1lfVxuICAgICAgICAgICAgICAgIDwvdHNwYW4+XG4gICAgICAgICAgICAgICAgPHRzcGFuIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiIHN0eWxlPVwiJHtUaGVtZS5jdXJyZW50Lk1FTlVfSVRFTV9GT05UfVwiIGZpbGw9XCIke1RoZW1lLmN1cnJlbnQuTUVOVV9JVEVNX0NPTE9SfVwiPlxuICAgICAgICAgICAgICAgICAgJHtub2RlRGVmLm5hbWV9XG4gICAgICAgICAgICAgICAgPC90c3Bhbj5cbiAgICAgICAgICAgICAgICA8dHNwYW4gYWxpZ25tZW50LWJhc2VsaW5lPVwibWlkZGxlXCIgc3R5bGU9XCIke1RoZW1lLmN1cnJlbnQuTUVOVV9JVEVNX0NBVEVHT1JZX0ZPTlR9XCIgZmlsbD1cIiR7VGhlbWUuY3VycmVudC5NRU5VX0lURU1fQ0FURUdPUllfQ09MT1J9XCI+XG4gICAgICAgICAgICAgICAgICAke25vZGVEZWYuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgPC90c3Bhbj5cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICh4LCB5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIG5vZGUgYW5kIHJldHVybiB0aGUgc3BlY2lmaWMgc29ja2V0IGNvbXBvbmVudCB0b1xuICAgICAgICAgICAgICAgICAgLy8gdGhlIGNvbnRleHQgbWVudSBjbGllbnRcbiAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gbmV3IENub2RlQ29tcG9uZW50KG4sIHRoaXMuY2FudmFzKTtcbiAgICAgICAgICAgICAgICAgIG5vZGUucG9zID0gbmV3IFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBjb25uZWN0ZWQgY29tcG9uZW50IGluc3RlYWRcbiAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0Ll9fY29tcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhcnJheSBvZiBjb250ZXh0IG1lbnUgaXRlbXMuIElmIHRoZSBjb21wb25lbnRcbiAgICogcmV0dXJucyBudWxsLCBubyBjb250ZXh0dWFsIG1lbnUgaXMgc2hvd25cbiAgICovXG4gIGdldENvbnRleHRNZW51SXRlbXMoKSB7XG4gICAgbGV0IGl0ZW1zID0gW107XG5cbiAgICBsZXQgY29ubnMgPSB0aGlzLmNhbnZhcy5nZXRDb25uZWN0aW9uc0Zvcih0aGlzKTtcbiAgICBpZiAoY29ubnMubGVuZ3RoID4gMCkge1xuICAgICAgaXRlbXMucHVzaChcbiAgICAgICAgbmV3IE1lbnVJdGVtKGA8dHNwYW4gYWxpZ25tZW50LWJhc2VsaW5lPVwibWlkZGxlXCI+RGlzY29ubmVjdCBhbGw8L3RzcGFuPmAsICgpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBjIG9mIGNvbm5zKSB7XG4gICAgICAgICAgICAvLyBEaXNjb25uZWN0IHRoaXMgc29ja2V0XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVDb25uZWN0aW9uKGMpO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZGlzY29ubmVjdChjLnNvdXJjZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbXMubGVuZ3RoID4gMCA/IGl0ZW1zIDogbnVsbDtcbiAgfVxufVxuIiwiLyoqXG4gKiBjbm9kZXMtdWlcbiAqXG4gKiBBIEdVSSBmb3IgY25vZGVzXG4gKiBMaWNlbnNlOiBNSVRcbiAqIEF1dGhvcjogTWFyY28gSmFjb3ZvbmVcbiAqIFllYXI6IDIwMjBcbiAqL1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgYWxsIHZhbHVlcyBuZWVkZWQgdG8gZHJhdyBhbGwgZWxlbWVudHNcbiAqIG9mIGRlc2lnbiBmb3IgY25vZGVzLXVpLiBUaGUgdXNlciBjYW4gY3VzdG9taXplIHRoZSBncmFwaGljXG4gKiBhc3BlY3Qgb2YgZWxlbWVudCBieSBkZWZpbmluZyBhIHRoZW1lLlxuICogRm9yIGV4ZW1wbGUgdG8gbW9kaWZ5IHRoZSBub2RlIHdpdGggeW91IGNhbiBkZWZpbmUgeW91ciBvd25cbiAqIHByb3BlcnR5IGluc2lkZSBhIGN1c3RvbSB0aGVtZTpcbiAqXG4gKiBjbGFzcyBNeVRoZW1lIGV4dGVuZHMgY251aS5UaGVtZSB7XG4gKiAgIGdldCBOT0RFX1dJRFRIKCkge1xuICogICAgIHJldHVybiA0MDA7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBOb3cgYWN0aXZhdGUgdGhlIHRoZW1lIGJ5IHNldHRpbmc6XG4gKlxuICogY251aS5UaGVtZS5jdXJyZW50ID0gbmV3IE15VGhlbWUoKTtcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBUaGVtZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvLyBDYW52YXNcblxuICBnZXQgQ0FOVkFTX0JBQ0tHUk9VTkRfQ09MT1IoKSB7XG4gICAgcmV0dXJuIFwid2hpdGVcIjtcbiAgfVxuXG4gIC8vIE5vZGUgY29udGFpbmVyXG5cbiAgZ2V0IE5PREVfV0lEVEgoKSB7XG4gICAgcmV0dXJuIDIwMDtcbiAgfVxuXG4gIGdldCBOT0RFX0JPUkRFUl9SQURJVVMoKSB7XG4gICAgcmV0dXJuIDE1O1xuICB9XG4gIGdldCBOT0RFX0ZJTExfQ09MT1IoKSB7XG4gICAgcmV0dXJuIFwiI0ZBRDdBMFwiO1xuICB9XG4gIGdldCBOT0RFX0ZVTkNUSU9OQUxfRklMTF9DT0xPUigpIHtcbiAgICByZXR1cm4gXCIjQzVGMEZGXCI7XG4gIH1cbiAgZ2V0IE5PREVfU1RST0tFX0NPTE9SKCkge1xuICAgIHJldHVybiBcIiNGRkZGRkZcIjtcbiAgfVxuICBnZXQgTk9ERV9GVU5DVElPTkFMX1NUUk9LRV9DT0xPUigpIHtcbiAgICByZXR1cm4gXCIjRkZGRkZGXCI7XG4gIH1cbiAgZ2V0IE5PREVfU1RST0tFX1dJRFRIKCkge1xuICAgIHJldHVybiAzO1xuICB9XG5cbiAgZ2V0IE5PREVfVElUTEVfQ09MT1IoKSB7XG4gICAgcmV0dXJuIFwiYnJvd25cIjtcbiAgfVxuICBnZXQgTk9ERV9GVU5DVElPTkFMX1RJVExFX0NPTE9SKCkge1xuICAgIHJldHVybiBcIiMwNjlERDFcIjtcbiAgfVxuICBnZXQgTk9ERV9USVRMRV9GT05UKCkge1xuICAgIHJldHVybiBcImJvbGQgMThweCB2ZXJkYW5hXCI7XG4gIH1cblxuICBnZXQgTk9ERV9TWU1CT0xfU1RST0tFX1dJRFRIKCkge1xuICAgIHJldHVybiAzO1xuICB9XG4gIGdldCBOT0RFX1NZTUJPTF9TVFJPS0VfQ09MT1IoKSB7XG4gICAgcmV0dXJuIFwiI0ZFRjlFN1wiO1xuICB9XG4gIGdldCBOT0RFX1NZTUJPTF9GSUxMX0NPTE9SKCkge1xuICAgIHJldHVybiBcIiNGRUY5RTdcIjtcbiAgfVxuXG4gIGdldCBOT0RFX1NJR05fQ09MT1IoKSB7XG4gICAgcmV0dXJuIFwiIzMxQTIwMFwiO1xuICB9XG5cbiAgZ2V0IE5PREVfRlVOQ1RJT05BTF9TSUdOX0NPTE9SKCkge1xuICAgIHJldHVybiBcIiMwMDhFQkZcIjtcbiAgfVxuXG4gIC8vIFNvY2tldHNcblxuICBnZXQgTk9ERV9QUkVWX05FWFRfU1RST0tFX1dJRFRIKCkge1xuICAgIHJldHVybiAyO1xuICB9XG4gIGdldCBOT0RFX1BSRVZfTkVYVF9TVFJPS0VfQ09MT1IoKSB7XG4gICAgcmV0dXJuIFwiIzMxQTIwMFwiO1xuICB9XG4gIGdldCBOT0RFX1BSRVZfTkVYVF9GSUxMX0NPTE9SKCkge1xuICAgIHJldHVybiBcIiMzMUEyMDBcIjtcbiAgfVxuICBnZXQgTk9ERV9QUkVWX05FWFRfTkFNRV9GT05UKCkge1xuICAgIHJldHVybiBcImJvbGQgMTFweCB2ZXJkYW5hXCI7XG4gIH1cbiAgZ2V0IE5PREVfUFJFVl9ORVhUX05BTUVfQ09MT1IoKSB7XG4gICAgcmV0dXJuIFwiYm9sZCAxMXB4IGJsYWNrXCI7XG4gIH1cbiAgZ2V0IE5PREVfUFJFVl9ORVhUX1BPSU5UX1JBRElVUygpIHtcbiAgICByZXR1cm4gODtcbiAgfVxuXG4gIGdldCBOT0RFX0lPX1NUUk9LRV9XSURUSCgpIHtcbiAgICByZXR1cm4gMjtcbiAgfVxuICBnZXQgTk9ERV9JT19TVFJPS0VfQ09MT1IoKSB7XG4gICAgcmV0dXJuIFwiIzAwOEVCRlwiO1xuICB9XG4gIGdldCBOT0RFX0lPX0ZJTExfQ09MT1IoKSB7XG4gICAgcmV0dXJuIFwiIzAwOEVCRlwiO1xuICB9XG4gIGdldCBOT0RFX0lPX05BTUVfRk9OVCgpIHtcbiAgICByZXR1cm4gXCJib2xkIDExcHggdmVyZGFuYVwiO1xuICB9XG4gIGdldCBOT0RFX0lPX05BTUVfQ09MT1IoKSB7XG4gICAgcmV0dXJuIFwiYm9sZCAxMXB4IGJsYWNrXCI7XG4gIH1cbiAgZ2V0IE5PREVfSU9fUE9JTlRfUkFESVVTKCkge1xuICAgIHJldHVybiAxMDtcbiAgfVxuXG4gIC8vIElPIENvbm5lY3Rpb25zXG5cbiAgZ2V0IENPTk5FQ1RJT05fVEVNUF9XSURUSCgpIHtcbiAgICByZXR1cm4gNDtcbiAgfVxuICBnZXQgQ09OTkVDVElPTl9URU1QX0lOVkFMSURfQ09MT1IoKSB7XG4gICAgcmV0dXJuIFwicmVkXCI7XG4gIH1cbiAgZ2V0IENPTk5FQ1RJT05fVEVNUF9WQUxJRF9DT0xPUigpIHtcbiAgICByZXR1cm4gXCJncmF5XCI7XG4gIH1cbiAgZ2V0IENPTk5FQ1RJT05fVEVNUF9DT0xPUigpIHtcbiAgICByZXR1cm4gXCIjREREREREXCI7XG4gIH1cbiAgZ2V0IENPTk5FQ1RJT05fSU9fV0lEVEgoKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH1cbiAgZ2V0IENPTk5FQ1RJT05fSU9fQ09MT1IoKSB7XG4gICAgcmV0dXJuIFwiIzAwOEVCRlwiO1xuICB9XG4gIGdldCBDT05ORUNUSU9OX1BSRVZfTkVYVF9XSURUSCgpIHtcbiAgICByZXR1cm4gNDtcbiAgfVxuICBnZXQgQ09OTkVDVElPTl9QUkVWX05FWFRfQ09MT1IoKSB7XG4gICAgcmV0dXJuIFwiIzMxQTIwMFwiO1xuICB9XG5cbiAgLy8gTWVudVxuXG4gIGdldCBNRU5VX01JTl9XSURUSCgpIHtcbiAgICByZXR1cm4gMjAwO1xuICB9XG4gIGdldCBNRU5VX0JPUkRFUl9SQURJVVMoKSB7XG4gICAgcmV0dXJuIDEwO1xuICB9XG4gIGdldCBNRU5VX0ZJTExfQ09MT1IoKSB7XG4gICAgcmV0dXJuIFwiI0YzRjNGM1wiO1xuICB9XG4gIGdldCBNRU5VX1NUUk9LRV9DT0xPUigpIHtcbiAgICByZXR1cm4gXCIjRUVFRUVFXCI7XG4gIH1cbiAgZ2V0IE1FTlVfU1RST0tFX1dJRFRIKCkge1xuICAgIHJldHVybiAyO1xuICB9XG4gIGdldCBNRU5VX0lURU1fSEVJR0hUKCkge1xuICAgIHJldHVybiAzMztcbiAgfVxuICBnZXQgTUVOVV9JVEVNX0ZPTlQoKSB7XG4gICAgcmV0dXJuIFwiZm9udDogYm9sZCAxNHB4IHNhbnMtc2VyaWZcIjtcbiAgfVxuICBnZXQgTUVOVV9JVEVNX0NBVEVHT1JZX0ZPTlQoKSB7XG4gICAgcmV0dXJuIFwiZm9udDogYm9sZCAxMHB4IHNhbnMtc2VyaWZcIjtcbiAgfVxuICBnZXQgTUVOVV9JVEVNX0NPTE9SKCkge1xuICAgIHJldHVybiBcImJsYWNrXCI7XG4gIH1cbiAgZ2V0IE1FTlVfSVRFTV9DQVRFR09SWV9DT0xPUigpIHtcbiAgICByZXR1cm4gXCJsaWdodGdyYXlcIjtcbiAgfVxuICBnZXQgTUVOVV9JVEVNX0hJR0hMSUdIVCgpIHtcbiAgICByZXR1cm4gXCJ3aGl0ZVwiO1xuICB9XG4gIGdldCBNRU5VX1NFQVJDSF9GT05UKCkge1xuICAgIHJldHVybiBcImJvbGQgMTFweCB2ZXJkYW5hXCI7XG4gIH1cblxuICBzdGF0aWMgY3VycmVudCA9IG5ldyBUaGVtZSgpO1xufVxuXG4vKiogRGVmYXVsdCBMaWdodCBUaGVtZSAqL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRMaWdodCA9IG5ldyBUaGVtZSgpO1xuIiwiLyoqXG4gKiBjbm9kZXMtdWlcbiAqXG4gKiBBIEdVSSBmb3IgY25vZGVzXG4gKiBMaWNlbnNlOiBNSVRcbiAqIEF1dGhvcjogTWFyY28gSmFjb3ZvbmVcbiAqIFllYXI6IDIwMjBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSBcIi4uL2NhbnZhcy9jb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuLi9jYW52YXMvcG9zaXRpb25cIjtcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGhlbWVcIjtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGltcGxlbWVudHMgYSBjb25uZWN0aW9uIGZvciBJbnB1dC0+T3V0cHV0IGNvbm5lY3Rpb25cbiAqIGluIHRoZSBjbm9kZXMgd29ybGQuIEl0IGVtYmVkIGJvdGggc291cmNlIGFuZCB0YXJnZXQgc29ja2V0cyB0aGF0XG4gKiBtdXN0IGJlIG9mIHR5cGUgSW5wdXRTb2NrZXRDb21wb25lbnQgYW5kIE91dHB1dFNvY2tldENvbXBvbmVudCwgYW5kIG1hbmFnZXNcbiAqIHRoZSBjb25uZWN0aW9uIHN0YXR1cyBvZiB0aGUgZW1iZWRkZWQgY25vZGVzJ3Mgc29ja2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBJT0Nvbm5lY3Rpb24gZXh0ZW5kcyBDb25uZWN0aW9uIHtcbiAgY29uc3RydWN0b3Ioc291cmNlLCB0YXJnZXQsIGNhbnZhcykge1xuICAgIHN1cGVyKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICBzdXBlci5zZXR1cCgpO1xuICAgIGNhbnZhcy5hZGRDb25uZWN0aW9uKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlU1ZHRWxlbWVudCgpO1xuXG4gICAgaWYgKGNhbnZhcy5wcm9ncmFtKSB7XG4gICAgICAvLyBDb25uZWN0IGNub2RlcyBzb2NrZXRzXG4gICAgICB0aGlzLnNvdXJjZS5zb2NrZXQuY29ubmVjdCh0aGlzLnRhcmdldC5zb2NrZXQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMZXRzIGNyZWF0ZSB0aGUgZWxlbWVudFxuICAgKi9cbiAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInBhdGhcIik7XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBhc3BlY3Qgb2YgdGhlIGNvbm5lY3Rpb25cbiAgICovXG4gIHVwZGF0ZVNWR0VsZW1lbnQoKSB7XG4gICAgbGV0IHNvdXJjZVBvaW50ID0gbmV3IFBvc2l0aW9uKHRoaXMuc291cmNlLmFic1Bvcy54LCB0aGlzLnNvdXJjZS5hYnNQb3MueSk7XG4gICAgbGV0IHRhcmdldFBvaW50ID0gbmV3IFBvc2l0aW9uKHRoaXMudGFyZ2V0LmFic1Bvcy54IC0gVGhlbWUuY3VycmVudC5OT0RFX0lPX1BPSU5UX1JBRElVUywgdGhpcy50YXJnZXQuYWJzUG9zLnkpO1xuXG4gICAgbGV0IGNwWERpc3RhbmNlID0gTWF0aC5tYXgoMC44ICogTWF0aC5hYnMoc291cmNlUG9pbnQueCAtIHRhcmdldFBvaW50LngpLCAxMDApO1xuICAgIGxldCBjcDEgPSBzb3VyY2VQb2ludC5hZGQobmV3IFBvc2l0aW9uKGNwWERpc3RhbmNlLCAtMC4xICogKHNvdXJjZVBvaW50LnkgLSB0YXJnZXRQb2ludC55KSkpO1xuICAgIGxldCBjcDIgPSB0YXJnZXRQb2ludC5hZGQobmV3IFBvc2l0aW9uKC1jcFhEaXN0YW5jZSwgMC4xICogKHNvdXJjZVBvaW50LnkgLSB0YXJnZXRQb2ludC55KSkpO1xuXG4gICAgdGhpcy5jb25uZWN0aW9uRWwuc2V0QXR0cmlidXRlKFxuICAgICAgXCJkXCIsXG4gICAgICBgXG4gICAgICBNICR7c291cmNlUG9pbnQueH0gJHtzb3VyY2VQb2ludC55fVxuICAgICAgQyAke2NwMS54fSAke2NwMS55fSAke2NwMi54fSAke2NwMi55fSAke3RhcmdldFBvaW50Lnh9ICR7dGFyZ2V0UG9pbnQueX1cbiAgICBgXG4gICAgKTtcblxuICAgIHRoaXMuY29ubmVjdGlvbkVsLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBUaGVtZS5jdXJyZW50LkNPTk5FQ1RJT05fSU9fV0lEVEgpO1xuICAgIHRoaXMuY29ubmVjdGlvbkVsLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBUaGVtZS5jdXJyZW50LkNPTk5FQ1RJT05fSU9fQ09MT1IpO1xuICAgIHRoaXMuY29ubmVjdGlvbkVsLnNldEF0dHJpYnV0ZShcIm1hcmtlci1lbmRcIiwgXCJ1cmwoI2lvLWFycm93KVwiKTtcbiAgICB0aGlzLmNvbm5lY3Rpb25FbC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwidHJhbnNwYXJlbnRcIik7XG4gIH1cblxuICAvKipcbiAgICogRGljb25uZWN0IHRoZSBpbnRlcm5hbCBjbm9kZXMgc29ja2V0c1xuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBJZiB0aGVyZSBpcyBhbiBhY3RpdmUgcHJvZ3JhbSwgcmVtb3ZlIHRoZSBjb25uZWN0aW9uXG4gICAgaWYgKHRoaXMuY2FudmFzLnByb2dyYW0pIHtcbiAgICAgIHRoaXMuc291cmNlLnNvY2tldC5kaXNjb25uZWN0KHRoaXMudGFyZ2V0LnNvY2tldCk7XG4gICAgfVxuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBjbm9kZXMtdWlcbiAqXG4gKiBBIEdVSSBmb3IgY25vZGVzXG4gKiBMaWNlbnNlOiBNSVRcbiAqIEF1dGhvcjogTWFyY28gSmFjb3ZvbmVcbiAqIFllYXI6IDIwMjBcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSBcIi4uL2NhbnZhcy9jb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuLi9jYW52YXMvcG9zaXRpb25cIjtcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGhlbWVcIjtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGltcGxlbWVudHMgYSBjb25uZWN0aW9uIGZvciBJbnB1dC0+T3V0cHV0IGNvbm5lY3Rpb25cbiAqIGluIHRoZSBjbm9kZXMgd29ybGQuIEl0IGVtYmVkIGJvdGggc291cmNlIGFuZCB0YXJnZXQgc29ja2V0cyB0aGF0XG4gKiBtdXN0IGJlIG9mIHR5cGUgSW5wdXRTb2NrZXRDb21wb25lbnQgYW5kIE91dHB1dFNvY2tldENvbXBvbmVudCwgYW5kIG1hbmFnZXNcbiAqIHRoZSBjb25uZWN0aW9uIHN0YXR1cyBvZiB0aGUgZW1iZWRkZWQgY25vZGVzJ3Mgc29ja2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBQcmV2TmV4dENvbm5lY3Rpb24gZXh0ZW5kcyBDb25uZWN0aW9uIHtcbiAgY29uc3RydWN0b3Ioc291cmNlLCB0YXJnZXQsIGNhbnZhcywgY29ubmVjdCA9IHRydWUpIHtcbiAgICBzdXBlcihzb3VyY2UsIHRhcmdldCk7XG4gICAgc3VwZXIuc2V0dXAoKTtcbiAgICBjYW52YXMuYWRkQ29ubmVjdGlvbih0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVNWR0VsZW1lbnQoKTtcblxuICAgIGlmIChjb25uZWN0KSB7XG4gICAgICAvLyBDb25uZWN0IGNub2RlcyBzb2NrZXRzXG4gICAgICB0aGlzLnNvdXJjZS5zb2NrZXQuY29ubmVjdCh0aGlzLnRhcmdldC5zb2NrZXQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMZXRzIGNyZWF0ZSB0aGUgZWxlbWVudFxuICAgKi9cbiAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInBhdGhcIik7XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgYXNwZWN0IG9mIHRoZSBjb25uZWN0aW9uXG4gICAqL1xuICB1cGRhdGVTVkdFbGVtZW50KCkge1xuICAgIGxldCBzb3VyY2VQb2ludCA9IG5ldyBQb3NpdGlvbih0aGlzLnNvdXJjZS5hYnNQb3MueCwgdGhpcy5zb3VyY2UuYWJzUG9zLnkpO1xuICAgIGxldCB0YXJnZXRQb2ludCA9IG5ldyBQb3NpdGlvbih0aGlzLnRhcmdldC5hYnNQb3MueCAtIFRoZW1lLmN1cnJlbnQuTk9ERV9QUkVWX05FWFRfUE9JTlRfUkFESVVTLCB0aGlzLnRhcmdldC5hYnNQb3MueSk7XG5cbiAgICBsZXQgY3BYRGlzdGFuY2UgPSBNYXRoLm1heCgwLjggKiBNYXRoLmFicyhzb3VyY2VQb2ludC54IC0gdGFyZ2V0UG9pbnQueCksIDEwMCk7XG4gICAgbGV0IGNwMSA9IHNvdXJjZVBvaW50LmFkZChuZXcgUG9zaXRpb24oY3BYRGlzdGFuY2UsIC0wLjEgKiAoc291cmNlUG9pbnQueSAtIHRhcmdldFBvaW50LnkpKSk7XG4gICAgbGV0IGNwMiA9IHRhcmdldFBvaW50LmFkZChuZXcgUG9zaXRpb24oLWNwWERpc3RhbmNlLCAwLjEgKiAoc291cmNlUG9pbnQueSAtIHRhcmdldFBvaW50LnkpKSk7XG5cbiAgICB0aGlzLmNvbm5lY3Rpb25FbC5zZXRBdHRyaWJ1dGUoXG4gICAgICBcImRcIixcbiAgICAgIGBcbiAgICAgIE0gJHtzb3VyY2VQb2ludC54fSAke3NvdXJjZVBvaW50Lnl9XG4gICAgICBDICR7Y3AxLnh9ICR7Y3AxLnl9ICR7Y3AyLnh9ICR7Y3AyLnl9ICR7dGFyZ2V0UG9pbnQueH0gJHt0YXJnZXRQb2ludC55fVxuICAgIGBcbiAgICApO1xuXG4gICAgdGhpcy5jb25uZWN0aW9uRWwuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFRoZW1lLmN1cnJlbnQuQ09OTkVDVElPTl9QUkVWX05FWFRfV0lEVEgpO1xuICAgIHRoaXMuY29ubmVjdGlvbkVsLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBUaGVtZS5jdXJyZW50LkNPTk5FQ1RJT05fUFJFVl9ORVhUX0NPTE9SKTtcbiAgICB0aGlzLmNvbm5lY3Rpb25FbC5zZXRBdHRyaWJ1dGUoXCJtYXJrZXItZW5kXCIsIFwidXJsKCNwcmV2bmV4dC1hcnJvdylcIik7XG4gICAgdGhpcy5jb25uZWN0aW9uRWwuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInRyYW5zcGFyZW50XCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpY29ubmVjdCB0aGUgaW50ZXJuYWwgY25vZGVzIHNvY2tldHNcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gSWYgdGhlcmUgaXMgYW4gYWN0aXZlIHByb2dyYW0sIHJlbW92ZSB0aGUgY29ubmVjdGlvblxuICAgIGlmICh0aGlzLmNhbnZhcy5wcm9ncmFtKSB7XG4gICAgICB0aGlzLnNvdXJjZS5zb2NrZXQuZGlzY29ubmVjdCh0aGlzLnRhcmdldC5zb2NrZXQpO1xuICAgIH1cbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cbn1cbiIsIi8qKlxuICogY25vZGVzLXVpXG4gKlxuICogQSBHVUkgZm9yIGNub2Rlc1xuICogTGljZW5zZTogTUlUXG4gKiBBdXRob3I6IE1hcmNvIEphY292b25lXG4gKiBZZWFyOiAyMDIwXG4gKi9cblxuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzL2NhbnZhc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vY2FudmFzL2NvbXBvbmVudFwiO1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi9jYW52YXMvcG9zaXRpb25cIjtcbmltcG9ydCB7IENub2RlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jbm9kZVwiO1xuaW1wb3J0IHsgVGhlbWUsIGRlZmF1bHRMaWdodCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdGhlbWVcIjtcbmltcG9ydCB7IENub2Rlc0NhbnZhcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvY25vZGVzY2FudmFzXCI7XG5pbXBvcnQgeyBFbnYgfSBmcm9tIFwiQG1hcmNvLmphY292b25lL2Nub2Rlcy9jbm9kZXNcIjtcblxuZXhwb3J0IHsgQ2FudmFzLCBDb21wb25lbnQsIENub2RlQ29tcG9uZW50LCBQb3NpdGlvbiwgVGhlbWUsIGRlZmF1bHRMaWdodCwgQ25vZGVzQ2FudmFzIH07XG5cbmV4cG9ydCAqIGZyb20gXCJAbWFyY28uamFjb3ZvbmUvY25vZGVzL2Nub2Rlc1wiO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIG1haW4gZW50cnlwb2ludCBmdW5jdGlvbi4gWW91IGNhbiBwYXNzIGFuIElEIG9mIGFcbiAqIERPTSBlbGVtZW50IGJ5IHBhcmFtZXRlciAodGlwaWNhbGx5IGEgRElWIGVsZW1lbnQpLlxuICogRm9yIGV4YW1wbGUsIGhhdmluZyBhIHNpbXBsZSBET00gZWxlbWVudCBsaWtlXG4gKlxuICogPGRpdiBpZD1cIm15Y2FudmFzXCIgY2xhc3M9XCJmdWxsc2NyZWVuXCI+PC9kaXY+XG4gKlxuICogWW91IGNhbiBkb1xuICpcbiAqIDxzY3JpcHQ+XG4gKiAgbGV0IGNhbnZhcyA9IGNudWkuY2FudmFzKCdteWNhbnZhcycpO1xuICogIGxldCBwcmcgPSBjbnVpLkVudi5pbXBvcnQoSlNPTi5wYXJzZSgnLi4uJykpO1xuICogIGNhbnZhcy5wcm9ncmFtID0gcHJnO1xuICogPC9zY3JpcHQ+XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGVsSWQgVGhlIGlkIG9mIHRoZSBET00gZWxlbWVudCB5b3Ugd2FudCB0byBiZWNvbWUgYSBDTk9ERVMtVUkgY2FudmFzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYW52YXMoZWxJZCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbElkKTtcbiAgaWYgKCFlbCkge1xuICAgIGNvbnNvbGUubG9nKGBObyBlbGVtZW50IHdpdGggaWQgJyR7ZWxJZH0nYCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgRW52LmluaXQoKTtcbiAgcmV0dXJuIG5ldyBDbm9kZXNDYW52YXMoZWwpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9