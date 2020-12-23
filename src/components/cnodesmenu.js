/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { Menu } from "../canvas/menu";
import { CnodesCanvas } from "./cnodescanvas";
import { Theme } from "./theme";

/**
 * This class implements a context menu for cnodes canvas
 */
export class CnodesMenu extends Menu {
  /** The input element for the search */
  #inputElement = null;

  /** Container element around items*/
  #containerEl = null;

  /** Current search result items */
  #itemsEls = [];

  /** The search filter (value of the search input) */
  #serachFilter = "";

  /**
   * Construct a new Menu for the canvas
   * @param {CnodesCanvas} canvas The canvas
   * @param {MenuItem[]} items The menu items
   */
  constructor(canvas, items) {
    super(canvas, items);
  }

  get searchFilter() {
    return this.#serachFilter;
  }
  set searchFilter(val) {
    this.#serachFilter = val;
  }

  /** Returns the filtered items of the menu */
  get filteredElements() {
    let filterElems = this.items.filter((i, idx) => i.text.toUpperCase().includes(this.searchFilter.toUpperCase()));
    return filterElems.filter((i, idx) => idx <= 10);
  }

  /**
   * Computes the menu vertical size, based on menu items
   * filtered by search filter
   */
  get height() {
    return (
      Theme.current.MENU_BORDER_RADIUS * 2 + // Padding
      30 + // Search input
      Theme.current.MENU_ITEM_HEIGHT * this.filteredElements.length // Items
    );
  }

  /**
   * Shows the menu
   * @param {*} x The x coordinate
   * @param {*} y The y coordinate
   */
  show(x, y) {
    super.show(x, y);
    this.#inputElement.focus();
    this.createMenuItemsElements();
  }

  /**
   * Lets create the SVG element
   */
  createElement() {
    let menuEl = document.createElementNS("http://www.w3.org/2000/svg", "g");

    let textInputElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    textInputElem.style = `
      font: ${Theme.current.MENU_SEARCH_FONT}; 
      color: ${Theme.current.NODE_IO_NAME_COLOR}; 
      text-align: left;
      line-height: 30px;
      user-select: none;
      pointer-events: auto;
    `;

    textInputElem.setAttribute("x", 0);
    textInputElem.setAttribute("y", 0);
    textInputElem.setAttribute("transform", `translate(${Theme.current.MENU_BORDER_RADIUS}, ${Theme.current.MENU_BORDER_RADIUS})`);
    textInputElem.setAttribute("width", Theme.current.MENU_MIN_WIDTH - 2 * Theme.current.MENU_BORDER_RADIUS);
    textInputElem.setAttribute("height", Theme.current.MENU_ITEM_HEIGHT);

    this.#inputElement = document.createElement("input");
    this.#inputElement.style = `
      font: ${Theme.current.NODE_IO_NAME_FONT}; 
      color: ${Theme.current.NODE_IO_NAME_COLOR}; 
      width: ${textInputElem.getAttribute("width") - 10}px; // 10px less than foreignObject
      height: ${20}px;
      border: 0;
      padding: 2px;
      margin: 2px;
    `;
    this.#inputElement.setAttribute("value", "");
    this.#inputElement.setAttribute("type", "text");

    let self = this;
    this.#inputElement.addEventListener("input", (e) => {
      self.#serachFilter = this.#inputElement.value;
      self.createMenuItemsElements();
    });
    this.#inputElement.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        self.canvas.cancelContextMenu();
        return;
      }
      if (e.keyCode === 13) {
        if (self.filteredElements.length > 0) {
          let menuEl = this.canvas.contextMenuComponent.componentEl.getBoundingClientRect();

          let p = this.canvas.clientToSvgPoint(menuEl.left, menuEl.top);

          self.filteredElements[0].callback(p.x, p.y);
          self.canvas.cancelContextMenu();
          return;
        }
      }
    });

    textInputElem.appendChild(this.#inputElement);

    this.#containerEl = document.createElementNS("http://www.w3.org/2000/svg", "path");

    this.#containerEl.setAttribute("fill", Theme.current.MENU_FILL_COLOR);
    this.#containerEl.setAttribute("stroke", Theme.current.MENU_STROKE_COLOR);
    this.#containerEl.setAttribute("stroke-width", Theme.current.MENU_STROKE_WIDTH);
    this.#containerEl.setAttribute("filter", "url(#dropshadow)");

    menuEl.appendChild(this.#containerEl);
    menuEl.appendChild(textInputElem);

    return menuEl;
  }

  /**
   * Creates/Updates menu items based on the search input field, and
   * adjust the size of the container element
   */
  createMenuItemsElements() {
    this.#containerEl.setAttribute(
      "d",
      `
      M 0 ${Theme.current.MENU_BORDER_RADIUS * 1.3} 
      A ${Theme.current.MENU_BORDER_RADIUS * 1.3} ${Theme.current.MENU_BORDER_RADIUS * 1.3} 0 0 1 ${Theme.current.MENU_BORDER_RADIUS * 1.3} 0 
      L ${Theme.current.MENU_MIN_WIDTH - Theme.current.MENU_BORDER_RADIUS} 0 
      A ${Theme.current.MENU_BORDER_RADIUS} ${Theme.current.MENU_BORDER_RADIUS} 0 0 1 ${Theme.current.MENU_MIN_WIDTH} ${
        Theme.current.MENU_BORDER_RADIUS
      } 
      L ${Theme.current.MENU_MIN_WIDTH} ${this.height - Theme.current.MENU_BORDER_RADIUS} 
      A ${Theme.current.MENU_BORDER_RADIUS} ${Theme.current.MENU_BORDER_RADIUS} 0 0 1 ${
        Theme.current.MENU_MIN_WIDTH - Theme.current.MENU_BORDER_RADIUS
      } ${this.height} 
      L ${Theme.current.MENU_BORDER_RADIUS} ${this.height} 
      A ${Theme.current.MENU_BORDER_RADIUS} ${Theme.current.MENU_BORDER_RADIUS} 0 0 1 0 ${this.height - Theme.current.MENU_BORDER_RADIUS} 
      Z
      `
    );

    while (this.#itemsEls.length > 0) {
      this.componentEl.removeChild(this.#itemsEls[0].itemEl);
      this.componentEl.removeChild(this.#itemsEls[0].itemTextEl);
      this.#itemsEls.splice(0, 1);
    }

    // Create menu items
    for (let [i, item] of this.filteredElements.entries()) {
      let itemX = Theme.current.MENU_BORDER_RADIUS;
      let itemY = Theme.current.MENU_BORDER_RADIUS + Theme.current.MENU_ITEM_HEIGHT * (i + 1);
      let itemWidth = Theme.current.MENU_MIN_WIDTH - 2 * Theme.current.MENU_BORDER_RADIUS;
      let itemHeight = Theme.current.MENU_ITEM_HEIGHT;

      let itemEl = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      itemEl.setAttribute("x", itemX);
      itemEl.setAttribute("y", itemY);
      itemEl.setAttribute("width", itemWidth);
      itemEl.setAttribute("height", itemHeight);
      itemEl.setAttribute("style", Theme.current.MENU_ITEM_FONT);
      itemEl.setAttribute("stroke", "transparent");
      itemEl.setAttribute("stroke-width", 0);
      itemEl.setAttribute("fill", "transparent");

      let itemTextEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
      itemTextEl.setAttribute("x", itemX + 5);
      itemTextEl.setAttribute("y", itemY + Theme.current.MENU_ITEM_HEIGHT / 2);
      itemTextEl.setAttribute("width", itemWidth - 10);
      itemTextEl.setAttribute("height", itemHeight - 10);
      itemTextEl.setAttribute("style", Theme.current.MENU_ITEM_FONT);
      itemTextEl.setAttribute("alignment-baseline", "middle");
      itemTextEl.style["pointer-events"] = "none";
      itemTextEl.style["user-select"] = "none";
      itemTextEl.innerHTML = item.text;

      itemEl.addEventListener("pointerenter", (e) => {
        itemEl.setAttribute("fill", Theme.current.MENU_ITEM_HIGHLIGHT);
      });
      itemEl.addEventListener("pointerleave", (e) => {
        itemEl.setAttribute("fill", "transparent");
      });
      itemEl.addEventListener("pointerdown", (e) => {
        let p = this.canvas.clientToSvgPoint(e.clientX, e.clientY);

        item.callback(p.x, p.y);
        this.canvas.cancelContextMenu();
      });

      this.componentEl.appendChild(itemEl);
      this.componentEl.appendChild(itemTextEl);
      this.#itemsEls.push({ itemEl: itemEl, itemTextEl: itemTextEl });
    }
  }
}
