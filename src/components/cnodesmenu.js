import { Menu } from "../canvas/menu";
import { CnodesCanvas } from "./cnodescanvas";
import { Theme } from "./theme";

export class CnodesMenu extends Menu {
  /**
   * Construct a new Menu for the canvas
   * @param {CnodesCanvas} canvas The canvas
   * @param {MenuItem[]} items The menu items
   * @param {number} x The x coordinate
   * @param {number} y The y coordinate
   */
  constructor(canvas, items, x, y) {
    super(canvas, items, x, y);
  }

  /**
   * Computes the menu vertical size, based on menu items
   */
  get height() {
    return Theme.current.MENU_BORDER_RADIUS * 2 + Theme.current.MENU_ITEM_HEIGHT * this.items.length;
  }

  /**
   * Lets create the SVG element
   */
  createElement() {
    let menuEl = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let containerEl = document.createElementNS("http://www.w3.org/2000/svg", "path");

    containerEl.setAttribute(
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

    containerEl.setAttribute("fill", Theme.current.MENU_FILL_COLOR);
    containerEl.setAttribute("stroke", Theme.current.MENU_STROKE_COLOR);
    containerEl.setAttribute("stroke-width", Theme.current.MENU_STROKE_WIDTH);
    containerEl.setAttribute("filter", "url(#dropshadow)");

    menuEl.appendChild(containerEl);

    // Create menu items
    for (let [i, item] of this.items.entries()) {
      let itemX = Theme.current.MENU_BORDER_RADIUS;
      let itemY = Theme.current.MENU_BORDER_RADIUS + Theme.current.MENU_ITEM_HEIGHT * i;
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
        item.callback();
        this.canvas.cancelContextMenu();
      });

      menuEl.appendChild(itemEl);
      menuEl.appendChild(itemTextEl);
    }

    return menuEl;
  }
}
