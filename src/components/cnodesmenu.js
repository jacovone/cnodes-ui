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

    menuEl.appendChild(containerEl);

    // Create menu items
    for (let [i, item] of this.items.entries()) {
      let itemEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
      itemEl.setAttribute("x", Theme.current.MENU_BORDER_RADIUS);
      itemEl.setAttribute("y", Theme.current.MENU_BORDER_RADIUS + Theme.current.MENU_ITEM_HEIGHT * i + Theme.current.MENU_ITEM_HEIGHT / 2);
      itemEl.setAttribute("width", Theme.current.MENU_MIN_WIDTH - Theme.current.MENU_BORDER_RADIUS * 2);
      itemEl.setAttribute("height", Theme.current.MENU_ITEM_HEIGHT);
      itemEl.setAttribute("style", Theme.current.MENU_ITEM_FONT);
      itemEl.setAttribute("alignment-baseline", "middle");
      itemEl.innerHTML = item.text;

      console.log(item);
      menuEl.appendChild(itemEl);
    }

    return menuEl;
  }
}
