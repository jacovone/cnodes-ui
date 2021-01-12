/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { Component } from "../canvas/component";
import { MenuItem } from "../canvas/menu";
import { Theme } from "./theme";

/**
 * This is component to draw a simple SVG Text that let the user
 * to change the text by implementing an "edit" action via context
 * menu item
 */
export class CnodesEditableTextComponent extends Component {
  /** Font of the text component */
  #font = "24px sans-serif;";

  /** Content of the component */
  #text = "";

  /** Color of the text */
  #color = "black";

  /**
   * The text component
   */
  #textEl = null;

  /**
   * The state of the text:
   *  0: View - The text is rendered as HTML
   *  1: Edit - The text is editing within a INPUT/TEXTAREA
   */
  #state = 0;

  /**
   * If the component is moultiLine will present a TEXTAREA
   * during EDIT and generate a <pre> HTML tag to preserve
   * carriage returns
   */
  #multiLine = false;

  /**
   * The text input element container
   */
  #textInputEl = null;

  /**
   * The text input element
   */
  #inputEl = null;

  constructor(text) {
    super();
    this.text = text;
  }

  get textEl() {
    return this.#textEl;
  }
  set textEl(val) {
    return (this.#textEl = val);
  }
  get text() {
    return this.#text;
  }
  set text(val) {
    this.#text = val;
    if (this.textEl) {
      this.textEl.innerHTML = this.#text;
    }
  }
  get color() {
    return this.#color;
  }
  set color(val) {
    this.#color = val;
    this.textEl.setAttribute("fill", this.#color);
  }
  get font() {
    return this.#font;
  }
  set font(val) {
    this.#font = val;
    this.textEl.style["font"] = this.#font;
  }
  get textInputEl() {
    return this.#textInputEl;
  }
  set textInputEl(val) {
    this.#textInputEl = val;
  }
  get inputEl() {
    return this.#inputEl;
  }
  set inputEl(val) {
    this.#inputEl = val;
  }
  get state() {
    return this.#state;
  }
  set state(val) {
    this.#state = val;
  }
  get multiLine() {
    return this.#multiLine;
  }
  set multiLine(val) {
    this.#multiLine = val;
  }

  /**
   * Sets up this component
   */
  setup() {
    super.setup();
    this.textEl.style = "user-select: none; cursor: move";
    this.textEl.setAttribute("fill", this.#color);
    this.textEl.setAttribute("x", "0");
    this.textEl.setAttribute("y", "0");
    this.textEl.innerHTML = this.text;

    return this;
  }

  /**
   * Returns the array of context menu items. If the component
   * returns null, no contextual menu is shown
   */
  getContextMenuItems() {
    return [
      new MenuItem(
        `
      <tspan alignment-baseline="middle" style="${Theme.current.MENU_ITEM_FONT}" fill="${Theme.current.MENU_ITEM_COLOR}">
        Edit text...
      </tspan>
      `,
        () => {
          setTimeout(() => {
            this.state = 1;
            this.updateSVGElement();
            this.#inputEl.focus();
            this.#inputEl.select();
            this.events.emit("cnui:edit");
          });
        }
      ),
    ];
  }

  /**
   * Lets create the element
   */
  createElement() {
    let groupEl = document.createElementNS("http://www.w3.org/2000/svg", "g");
    this.textEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    this.textInputEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "foreignObject"
    );
    this.#inputEl = document.createElement("input");
    this.#inputEl.setAttribute("type", "text");
    this.#inputEl.setAttribute("value", this.text);

    this.#inputEl.addEventListener("blur", () => {
      this.state = 0;
      this.text = this.#inputEl.value;
      this.updateSVGElement();
    });
    this.#inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.state = 0;
        this.text = this.#inputEl.value;
        this.updateSVGElement();
      }
    });

    this.textInputEl.appendChild(this.#inputEl);

    this.textEl.setAttribute("x", 0);
    this.textEl.setAttribute("y", 0);
    this.textEl.setAttribute("width", 300);
    this.textEl.setAttribute("height", 30);
    this.textEl.style["display"] = "block";

    groupEl.addEventListener("dblclick", () => {
      this.state = 1;
      this.updateSVGElement();
      this.#inputEl.focus();
      this.#inputEl.select();
      this.events.emit("cnui:edit");
    });

    this.textInputEl.setAttribute("x", 0);
    this.textInputEl.setAttribute("y", -20);
    this.textInputEl.setAttribute("width", 300);
    this.textInputEl.setAttribute("height", 30);
    this.textInputEl.style["display"] = "none";

    groupEl.appendChild(this.textEl);
    groupEl.appendChild(this.textInputEl);
    return groupEl;
  }

  /**
   * Update the component element according to x and y local coordinates,
   * if this component is a child component, coordinates in canvas space
   * are computed. This particular ovverride is made to manage the "edit"
   * phase
   */
  updateSVGElement() {
    super.updateSVGElement();

    if (this.state === 0) {
      // View state
      this.textEl.style["display"] = "block";
      this.textInputEl.style["display"] = "none";
    } else {
      // Edit state
      this.textEl.style["display"] = "none";
      this.textInputEl.style["display"] = "block";
    }
  }
}
