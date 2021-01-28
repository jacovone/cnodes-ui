/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020/2021
 */

import { Menu } from "../canvas/menu.mjs";
import { CnodesCanvas } from "./cnodescanvas.mjs";
import { Theme } from "./theme.mjs";

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
  #searchFilter = "";

  /**
   * The result of the selection of the user. If who request the menu is interested.
   * Some components, like sockets, can open a context menu to select items, instead of
   * the canvas. In such case, the originating component have to know the final
   * result of the menu selection. In this case, tho variable contains a callback to
   * the menu "client", and the menu, upon a user selection, calls this callback passing
   * the result value of the context menu item callback, as parameter.
   * Please see the class CnodesSocket component to check this behavior.
   */
  #menuCallback = null;

  /**
   * Construct a new Menu for the canvas
   * @param {CnodesCanvas} canvas The canvas
   * @param {MenuItem[]} items The menu items
   */
  constructor(canvas, items) {
    super(canvas, items);
  }

  get searchFilter() {
    return this.#searchFilter;
  }
  set searchFilter(val) {
    this.#searchFilter = val;
  }
  get menuCallback() {
    return this.#menuCallback;
  }
  set menuCallback(val) {
    this.#menuCallback = val;
  }

  /** Returns the filtered items of the menu */
  get filteredElements() {
    let filterElems = this.items.filter((i) =>
      i.searchText.toUpperCase().includes(this.searchFilter.toUpperCase())
    );
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

    let textInputElem = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "foreignObject"
    );
    textInputElem.style = `
      font: ${Theme.current.MENU_SEARCH_FONT}; 
      color: black; 
      text-align: left;
      line-height: 30px;
      user-select: none;
      pointer-events: auto;
    `;

    textInputElem.setAttribute("x", 0);
    textInputElem.setAttribute("y", 0);
    textInputElem.setAttribute(
      "transform",
      `translate(${Theme.current.MENU_BORDER_RADIUS}, ${Theme.current.MENU_BORDER_RADIUS})`
    );
    textInputElem.setAttribute(
      "width",
      Theme.current.MENU_MIN_WIDTH - 2 * Theme.current.MENU_BORDER_RADIUS
    );
    textInputElem.setAttribute("height", Theme.current.MENU_ITEM_HEIGHT);

    this.#inputElement = document.createElement("input");
    this.#inputElement.style = `
      font: ${Theme.current.NODE_IO_NAME_FONT}; 
      color: ${Theme.current.NODE_IO_NAME_COLOR}; 
      width: ${
        textInputElem.getAttribute("width") - 10
      }px; // 10px less than foreignObject
      height: ${20}px;
      border: 0;
      padding: 2px;
      margin: 2px;
    `;
    this.#inputElement.setAttribute("value", "");
    this.#inputElement.setAttribute("type", "text");

    let self = this;
    this.#inputElement.addEventListener("input", (e) => {
      self.#searchFilter = this.#inputElement.value;
      self.createMenuItemsElements();
    });
    this.#inputElement.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        self.canvas.cancelContextMenu();

        // If there is client of the menu interested to user selection or abort
        if (self.menuCallback) {
          self.menuCallback(null);
          self.menuCallback = null;
        }
        return;
      }
      if (e.key === "Enter") {
        if (self.filteredElements.length > 0) {
          let bbox = menuEl.getBoundingClientRect();
          let p = this.canvas.clientToSvgPoint(bbox.left, bbox.top);

          // Items can return a result to inform the menu client about the item selection
          let itemResult = self.filteredElements[0].callback(p.x, p.y);

          // If there is client of the menu interested to user selection or abort
          if (self.menuCallback) {
            self.menuCallback(itemResult);
            self.menuCallback = null;
          }

          self.canvas.cancelContextMenu();

          return;
        }
      }
    });

    textInputElem.appendChild(this.#inputElement);

    this.#containerEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );

    this.#containerEl.setAttribute("fill", Theme.current.MENU_FILL_COLOR);
    this.#containerEl.setAttribute("stroke", Theme.current.MENU_STROKE_COLOR);
    this.#containerEl.setAttribute(
      "stroke-width",
      Theme.current.MENU_STROKE_WIDTH
    );
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
    while (this.#itemsEls.length > 0) {
      this.componentEl.removeChild(this.#itemsEls[0].itemEl);
      this.componentEl.removeChild(this.#itemsEls[0].itemTextEl);
      this.#itemsEls.splice(0, 1);
    }

    let maxWidth = Theme.current.MENU_MIN_WIDTH;

    // Create menu items
    for (let [i, item] of this.filteredElements.entries()) {
      let itemEl = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      let itemTextEl = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );

      let itemX = Theme.current.MENU_BORDER_RADIUS;
      let itemY =
        Theme.current.MENU_BORDER_RADIUS +
        Theme.current.MENU_ITEM_HEIGHT * (i + 1);

      itemEl.setAttribute("x", itemX);
      itemEl.setAttribute("y", itemY);

      itemTextEl.setAttribute("x", itemX + 5);
      itemTextEl.setAttribute("y", itemY + Theme.current.MENU_ITEM_HEIGHT / 2);
      itemTextEl.setAttribute("style", Theme.current.MENU_ITEM_STYLE);
      // itemTextEl.setAttribute("alignment-baseline", "middle");
      itemTextEl.style["pointer-events"] = "none";
      itemTextEl.style["user-select"] = "none";
      itemTextEl.innerHTML = item.text;

      this.componentEl.appendChild(itemEl);
      this.componentEl.appendChild(itemTextEl);

      // Set event listeners
      itemEl.addEventListener("pointerenter", (e) => {
        itemEl.setAttribute("fill", Theme.current.MENU_ITEM_HIGHLIGHT);
      });
      itemEl.addEventListener("pointerleave", (e) => {
        itemEl.setAttribute("fill", "transparent");
      });
      itemEl.addEventListener("pointerdown", (e) => {
        let bbox = itemEl.getBoundingClientRect();
        let p = this.canvas.clientToSvgPoint(bbox.left, bbox.top);

        let result = item.callback(p.x, p.y);

        // If there is client of the menu interested to user selection or abort
        if (this.menuCallback) {
          this.menuCallback(result);
          this.menuCallback = null;
        }
        this.canvas.cancelContextMenu();
        e.stopPropagation();
      });

      // Compute text sizes
      maxWidth = Math.max(
        itemTextEl.getBBox().width + 10 + 2 * Theme.current.MENU_BORDER_RADIUS,
        maxWidth
      );

      // register items
      this.#itemsEls.push({ itemEl: itemEl, itemTextEl: itemTextEl });
    }

    // Now adjust geometry to size
    for (let [i, item] of this.#itemsEls.entries()) {
      let itemEl = item.itemEl;
      let itemTextEl = item.itemTextEl;

      let itemWidth = maxWidth - 2 * Theme.current.MENU_BORDER_RADIUS;
      let itemHeight = Theme.current.MENU_ITEM_HEIGHT;

      itemTextEl.setAttribute("width", itemWidth - 10);
      itemTextEl.setAttribute("height", itemHeight - 10);

      itemEl.setAttribute("width", itemWidth);
      itemEl.setAttribute("height", itemHeight);
      itemEl.setAttribute("style", Theme.current.MENU_ITEM_STYLE);
      itemEl.setAttribute("stroke", "transparent");
      itemEl.setAttribute("stroke-width", 0);
      itemEl.setAttribute("fill", "transparent");
    }

    // Update container geometry
    this.#containerEl.setAttribute(
      "d",
      `
      M 0 ${Theme.current.MENU_BORDER_RADIUS * 1.3} 
      A ${Theme.current.MENU_BORDER_RADIUS * 1.3} ${
        Theme.current.MENU_BORDER_RADIUS * 1.3
      } 0 0 1 ${Theme.current.MENU_BORDER_RADIUS * 1.3} 0 
      L ${maxWidth - Theme.current.MENU_BORDER_RADIUS} 0 
      A ${Theme.current.MENU_BORDER_RADIUS} ${
        Theme.current.MENU_BORDER_RADIUS
      } 0 0 1 ${maxWidth} ${Theme.current.MENU_BORDER_RADIUS} 
      L ${maxWidth} ${this.height - Theme.current.MENU_BORDER_RADIUS} 
      A ${Theme.current.MENU_BORDER_RADIUS} ${
        Theme.current.MENU_BORDER_RADIUS
      } 0 0 1 ${maxWidth - Theme.current.MENU_BORDER_RADIUS} ${this.height} 
      L ${Theme.current.MENU_BORDER_RADIUS} ${this.height} 
      A ${Theme.current.MENU_BORDER_RADIUS} ${
        Theme.current.MENU_BORDER_RADIUS
      } 0 0 1 0 ${this.height - Theme.current.MENU_BORDER_RADIUS} 
      Z
      `
    );
  }
}
