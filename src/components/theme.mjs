/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020/2021
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
export class Theme {
  constructor() {}

  // Canvas

  get CANVAS_BACKGROUND_COLOR() {
    return "white";
  }
  get CANVAS_SELECTION_FILL_COLOR() {
    return "#99999922";
  }
  get CANVAS_SELECTION_STROKE_COLOR() {
    return "#99999999";
  }
  get CANVAS_SELECTION_STROKE_WIDTH() {
    return "1";
  }

  // Node container

  get DEFS() {
    return `
        <linearGradient id='stripe-gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%'  stop-color='#FAD7A0'></stop>
        <stop offset='12.45%'  stop-color='#FAD7A0'></stop>
        <stop offset='12.5%' stop-color='#F9C879'></stop>
        <stop offset='24.45%' stop-color='#F9C879'></stop>
        <stop offset='25.5%'  stop-color='#FAD7A0'></stop>
        <stop offset='37.45%'  stop-color='#FAD7A0'></stop>
        <stop offset='37.5%' stop-color='#F9C879'></stop>
        <stop offset='49.9%' stop-color='#F9C879'></stop>
        <stop offset='50%' stop-color='#FAD7A0'></stop>
        <stop offset='62.45%' stop-color='#FAD7A0'></stop>
        <stop offset='62.5%' stop-color='#F9C879'></stop>
        <stop offset='74.95%' stop-color='#F9C879'></stop>
        <stop offset='75%' stop-color='#FAD7A0'></stop>
        <stop offset='87.45%' stop-color='#FAD7A0'></stop>
        <stop offset='87.5%' stop-color='#F9C879'></stop>
        <stop offset='100%' stop-color='#F9C879'></stop>
    </linearGradient>
    <linearGradient id='stripe-functional-gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%'  stop-color='#C5F0FF'></stop>
        <stop offset='12.45%'  stop-color='#C5F0FF'></stop>
        <stop offset='12.5%' stop-color='#AEEDFF'></stop>
        <stop offset='24.45%' stop-color='#AEEDFF'></stop>
        <stop offset='25.5%'  stop-color='#C5F0FF'></stop>
        <stop offset='37.45%'  stop-color='#C5F0FF'></stop>
        <stop offset='37.5%' stop-color='#AEEDFF'></stop>
        <stop offset='49.9%' stop-color='#AEEDFF'></stop>
        <stop offset='50%' stop-color='#C5F0FF'></stop>
        <stop offset='62.45%' stop-color='#C5F0FF'></stop>
        <stop offset='62.5%' stop-color='#AEEDFF'></stop>
        <stop offset='74.95%' stop-color='#AEEDFF'></stop>
        <stop offset='75%' stop-color='#C5F0FF'></stop>
        <stop offset='87.45%' stop-color='#C5F0FF'></stop>
        <stop offset='87.5%' stop-color='#AEEDFF'></stop>
        <stop offset='100%' stop-color='#AEEDFF'></stop>
    </linearGradient>
    <pattern id='selection-pattern' width='40' height='40' patternUnits='userSpaceOnUse' >
        <rect x='-20' y='0' width='80' height='80' fill='url(#stripe-gradient)' stroke-width='0' stroke='none'>
            <animate attributeName='x' from='-40' to='0' dur='2s' repeatCount='indefinite'></animate>
        </rect>
    </pattern>
    <pattern id='selection-functional-pattern' width='40' height='40' patternUnits='userSpaceOnUse' >
        <rect x='-20' y='0' width='80' height='80' fill='url(#stripe-functional-gradient)' stroke-width='0' stroke='none'>
            <animate attributeName='x' from='-40' to='0' dur='2s' repeatCount='indefinite'></animate>
        </rect>
    </pattern>
    `;
  }

  get NODE_WIDTH() {
    return 200;
  }
  get NODE_BORDER_RADIUS() {
    return 15;
  }
  get NODE_FILL_COLOR() {
    return "#FAD7A0";
  }
  get NODE_FUNCTIONAL_FILL_COLOR() {
    return "#C5F0FF";
  }
  get NODE_SELECTED_FILL_COLOR() {
    return "url(#selection-pattern)";
  }
  get NODE_SELECTED_FUNCTIONAL_FILL_COLOR() {
    return "url(#selection-functional-pattern)";
  }
  get NODE_STROKE_COLOR() {
    return "#FFFFFF";
  }
  get NODE_FUNCTIONAL_STROKE_COLOR() {
    return "#FFFFFF";
  }
  get NODE_SELECTED_STROKE_COLOR() {
    return "#00000055";
  }
  get NODE_STROKE_WIDTH() {
    return 3;
  }

  get NODE_TITLE_COLOR() {
    return "brown";
  }
  get NODE_FUNCTIONAL_TITLE_COLOR() {
    return "#069DD1";
  }
  get NODE_TITLE_FONT() {
    return "bold 16px verdana";
  }

  get NODE_SYMBOL_STROKE_WIDTH() {
    return 3;
  }
  get NODE_SYMBOL_STROKE_COLOR() {
    return "#FEF9E7";
  }
  get NODE_SYMBOL_FILL_COLOR() {
    return "#FEF9E7";
  }

  get NODE_SIGN_COLOR() {
    return "#31A200";
  }

  get NODE_FUNCTIONAL_SIGN_COLOR() {
    return "#008EBF";
  }

  get NODE_EDITORS_COLOR() {
    return "black";
  }

  get NODE_EDITORS_BACKGROUND() {
    return "rgba(250,250,250,0.7)";
  }

  // Sockets

  get NODE_PREV_NEXT_STROKE_WIDTH() {
    return 2;
  }
  get NODE_PREV_NEXT_STROKE_COLOR() {
    return "#31A200";
  }
  get NODE_PREV_NEXT_FILL_COLOR() {
    return "#31A200";
  }
  get NODE_PREV_NEXT_NAME_FONT() {
    return "bold 11px verdana";
  }
  get NODE_PREV_NEXT_NAME_COLOR() {
    return "bold 11px black";
  }
  get NODE_PREV_NEXT_POINT_RADIUS() {
    return 8;
  }

  get NODE_IO_STROKE_WIDTH() {
    return 4;
  }
  get NODE_IO_STROKE_COLOR() {
    return "white";
  }
  get NODE_IO_NAME_FONT() {
    return "bold 11px verdana";
  }
  get NODE_IO_NAME_FONT() {
    return "black";
  }
  get NODE_IO_POINT_RADIUS() {
    return 10;
  }

  // Comments

  get NODE_COMMENT_FONT() {
    return "italic 16px sans-serif";
  }
  get NODE_COMMENT_COLOR() {
    return "lightgray";
  }

  // IO Connections

  get CONNECTION_TEMP_WIDTH() {
    return 4;
  }
  get CONNECTION_TEMP_INVALID_COLOR() {
    return "red";
  }
  get CONNECTION_TEMP_VALID_COLOR() {
    return "gray";
  }
  get CONNECTION_TEMP_COLOR() {
    return "#DDDDDD";
  }
  get CONNECTION_IO_WIDTH() {
    return 4;
  }
  get CONNECTION_IO_COLOR() {
    return "#008EBF";
  }
  get CONNECTION_PREV_NEXT_WIDTH() {
    return 4;
  }
  get CONNECTION_PREV_NEXT_COLOR() {
    return "#31A200";
  }

  // Menu

  get MENU_MIN_WIDTH() {
    return 200;
  }
  get MENU_BORDER_RADIUS() {
    return 10;
  }
  get MENU_FILL_COLOR() {
    return "#FFFFFF";
  }
  get MENU_STROKE_COLOR() {
    return "#FFFFFF";
  }
  get MENU_STROKE_WIDTH() {
    return 2;
  }
  get MENU_ITEM_HEIGHT() {
    return 26;
  }
  get MENU_ITEM_STYLE() {
    return "font: bold 12px sans-serif";
  }
  get MENU_SPECIAL_ITEM_STYLE() {
    return "font: bold 12px sans-serif; fill: brown";
  }
  get MENU_ITEM_CATEGORY_STYLE() {
    return "font: bold 8px sans-serif";
  }
  get MENU_ITEM_COLOR() {
    return "black";
  }
  get MENU_ITEM_CATEGORY_COLOR() {
    return "lightgray";
  }
  get MENU_ITEM_HIGHLIGHT() {
    return "#F0F0F0";
  }
  get MENU_SEARCH_FONT() {
    return "bold 11px verdana";
  }

  // Types

  get TYPE_ARRAY_COLOR() {
    return "orange";
  }
  get TYPE_OBJECT_COLOR() {
    return "#008EBF";
  }
  get TYPE_NUMBER_COLOR() {
    return "green";
  }
  get TYPE_STRING_COLOR() {
    return "#CB4335";
  }
  get TYPE_BOOLEAN_COLOR() {
    return "#F5B7B1";
  }
  get TYPE_ANY_COLOR() {
    return "#d9d9d9";
  }

  static current = new Theme();
}

/** Default Light Theme */
export const defaultLight = new Theme();
