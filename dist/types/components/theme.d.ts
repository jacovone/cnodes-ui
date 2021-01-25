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
    static current: Theme;
    get CANVAS_BACKGROUND_COLOR(): string;
    get CANVAS_SELECTION_FILL_COLOR(): string;
    get CANVAS_SELECTION_STROKE_COLOR(): string;
    get CANVAS_SELECTION_STROKE_WIDTH(): string;
    get DEFS(): string;
    get NODE_WIDTH(): number;
    get NODE_BORDER_RADIUS(): number;
    get NODE_FILL_COLOR(): string;
    get NODE_FUNCTIONAL_FILL_COLOR(): string;
    get NODE_SELECTED_FILL_COLOR(): string;
    get NODE_SELECTED_FUNCTIONAL_FILL_COLOR(): string;
    get NODE_STROKE_COLOR(): string;
    get NODE_FUNCTIONAL_STROKE_COLOR(): string;
    get NODE_SELECTED_STROKE_COLOR(): string;
    get NODE_STROKE_WIDTH(): number;
    get NODE_TITLE_COLOR(): string;
    get NODE_FUNCTIONAL_TITLE_COLOR(): string;
    get NODE_TITLE_FONT(): string;
    get NODE_SYMBOL_STROKE_WIDTH(): number;
    get NODE_SYMBOL_STROKE_COLOR(): string;
    get NODE_SYMBOL_FILL_COLOR(): string;
    get NODE_SIGN_COLOR(): string;
    get NODE_FUNCTIONAL_SIGN_COLOR(): string;
    get NODE_EDITORS_COLOR(): string;
    get NODE_EDITORS_BACKGROUND(): string;
    get NODE_PREV_NEXT_STROKE_WIDTH(): number;
    get NODE_PREV_NEXT_STROKE_COLOR(): string;
    get NODE_PREV_NEXT_FILL_COLOR(): string;
    get NODE_PREV_NEXT_NAME_FONT(): string;
    get NODE_PREV_NEXT_NAME_COLOR(): string;
    get NODE_PREV_NEXT_POINT_RADIUS(): number;
    get NODE_IO_STROKE_WIDTH(): number;
    get NODE_IO_STROKE_COLOR(): string;
    get NODE_IO_NAME_FONT(): string;
    get NODE_IO_POINT_RADIUS(): number;
    get NODE_COMMENT_FONT(): string;
    get NODE_COMMENT_COLOR(): string;
    get CONNECTION_TEMP_WIDTH(): number;
    get CONNECTION_TEMP_INVALID_COLOR(): string;
    get CONNECTION_TEMP_VALID_COLOR(): string;
    get CONNECTION_TEMP_COLOR(): string;
    get CONNECTION_IO_WIDTH(): number;
    get CONNECTION_IO_COLOR(): string;
    get CONNECTION_PREV_NEXT_WIDTH(): number;
    get CONNECTION_PREV_NEXT_COLOR(): string;
    get MENU_MIN_WIDTH(): number;
    get MENU_BORDER_RADIUS(): number;
    get MENU_FILL_COLOR(): string;
    get MENU_STROKE_COLOR(): string;
    get MENU_STROKE_WIDTH(): number;
    get MENU_ITEM_HEIGHT(): number;
    get MENU_ITEM_STYLE(): string;
    get MENU_SPECIAL_ITEM_STYLE(): string;
    get MENU_ITEM_CATEGORY_STYLE(): string;
    get MENU_ITEM_COLOR(): string;
    get MENU_ITEM_CATEGORY_COLOR(): string;
    get MENU_ITEM_HIGHLIGHT(): string;
    get MENU_SEARCH_FONT(): string;
    get TYPE_ARRAY_COLOR(): string;
    get TYPE_OBJECT_COLOR(): string;
    get TYPE_NUMBER_COLOR(): string;
    get TYPE_STRING_COLOR(): string;
    get TYPE_BOOLEAN_COLOR(): string;
    get TYPE_ANY_COLOR(): string;
}
/** Default Light Theme */
export const defaultLight: Theme;
