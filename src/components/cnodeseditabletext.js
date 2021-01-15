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

  /** The width of the text / editor */
  #width = 100;

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
   * The text input element container
   */
  #textInputEl = null;

  /**
   * The text input element
   */
  #inputEl = null;

  /**
   * Construct a new Text object with  particular text, and an
   * option for multiline
   * @param {string} text The text to show
   */
  constructor(text, initialEdit = false) {
    super();
    this.#text = text;
  }

  get textEl() {
    return this.#textEl;
  }
  get text() {
    return this.#text;
  }
  set text(val) {
    this.#text = val;
    this.#inputEl.value = val;
    this.updateSVGElement();
  }
  get width() {
    return this.#width;
  }
  set width(val) {
    this.#width = val;
    this.updateSVGElement();
  }
  get color() {
    return this.#color;
  }
  set color(val) {
    this.#color = val;
    this.updateSVGElement();
  }
  get font() {
    return this.#font;
  }
  set font(val) {
    this.#font = val;
    this.updateSVGElement();
  }
  get textInputEl() {
    return this.#textInputEl;
  }
  get inputEl() {
    return this.#inputEl;
  }
  get state() {
    return this.#state;
  }

  /**
   * Returns the array of context menu items. If the component
   * returns null, no contextual menu is shown
   */
  getContextMenuItems() {
    return [
      new MenuItem(
        `
      <tspan alignment-baseline="middle" style="${Theme.current.MENU_ITEM_STYLE}" fill="${Theme.current.MENU_ITEM_COLOR}">
        Edit text...
      </tspan>
      `,
        () => {
          this.setEditing(true);
        }
      ),
    ];
  }

  /**
   * Sets the editing mode
   * @param {boolean} editMode true = Edit Mode, false = View Mode
   */
  setEditing(editMode) {
    if (editMode) {
      this.#state = 1;
      this.#inputEl.value = this.#text;

      this.#textEl.style["display"] = "none";
      this.#textInputEl.style["display"] = "block";

      setTimeout(() => {
        this.#inputEl.focus();
        this.#inputEl.select();
      });

      this.events.emit("cnui:edit");
    } else {
      this.#state = 0;
      this.#text = this.#inputEl.value;
      this.#textEl.style["display"] = "block";
      this.#textInputEl.style["display"] = "none";

      this.events.emit("cnui:change", this);
    }

    this.updateSVGElement();
  }

  /**
   * Lets create the element
   */
  createElement() {
    let groupEl = document.createElementNS("http://www.w3.org/2000/svg", "g");

    this.#textEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "foreignObject"
    );
    this.#textInputEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "foreignObject"
    );

    this.#inputEl = document.createElement("textarea");
    this.#inputEl.value = this.#text;
    this.#inputEl.style["resize"] = "none";
    this.#inputEl.style["height"] = "100px";
    this.#inputEl.style["width"] = this.#width + "px";
    this.#inputEl.style["outline-width"] = "0";
    this.#inputEl.style["border"] = "1px dashed lightgray";
    this.#inputEl.style["padding"] = "0";
    this.#inputEl.style["margin"] = "-1px";
    this.#inputEl.style["background-color"] =
      Theme.current.NODE_EDITORS_BACKGROUND;
    this.#inputEl.style["overflow"] = "hidden";
    this.#inputEl.style["color"] = Theme.current.NODE_EDITORS_COLOR;

    /** Simply disable pointer events */
    this.#inputEl.addEventListener("pointerdown", (e) => {
      e.stopPropagation();
    });
    /** Simply disable wheel events */
    this.#inputEl.addEventListener("wheel", (e) => {
      e.stopPropagation();
    });
    this.#inputEl.addEventListener("blur", () => {
      this.setEditing(false);
    });
    this.#inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.setEditing(false);
      }
    });

    this.textEl.setAttribute("x", 0);
    this.textEl.setAttribute("y", 0);
    this.textEl.setAttribute("height", 1);
    this.textEl.setAttribute("width", this.#width);
    this.textEl.style["overflow"] = "visible";
    this.textEl.style["color"] = this.#color;
    this.textEl.style["display"] = "block";
    this.textEl.style["user-select"] = "none";
    this.textEl.style["cursor"] = "move";
    this.textEl.innerHTML = this.text;

    this.textInputEl.setAttribute("x", 0);
    this.textInputEl.setAttribute("y", 0);
    this.textInputEl.setAttribute("width", this.#width);
    this.textInputEl.setAttribute("height", 100);
    this.textInputEl.style["overflow"] = "visible";
    this.textInputEl.style["display"] = "none";
    this.textInputEl.setAttribute("hidden", "1");

    this.textInputEl.appendChild(this.#inputEl);

    groupEl.setAttribute("x", 0);
    groupEl.setAttribute("y", 0);
    groupEl.addEventListener("dblclick", () => {
      this.setEditing(true);
    });
    groupEl.appendChild(this.textEl);
    groupEl.appendChild(this.textInputEl);
    return groupEl;
  }

  /**
   * Update the component element according to x and y local coordinates,
   * if this component is a child component, coordinates in canvas space
   * are computed. Also update svg attributes
   */
  updateSVGElement() {
    super.updateSVGElement();

    this.textEl.setAttribute("width", this.#width);
    this.textEl.innerHTML = this.#text;
    this.textEl.style["font"] = this.#font;
    this.textEl.style["color"] = this.#color;
    this.inputEl.style["width"] = this.#width + "px";
    this.inputEl.style["font"] = this.#font;
    this.textInputEl.setAttribute("width", this.#width);
  }
}
