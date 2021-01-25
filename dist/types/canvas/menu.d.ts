/**
 * This class represents a single Menu item.
 * A menu itemhas a text, and a callback to call on click
 */
export class MenuItem {
    /**
     * Constructs a menu item
     * @param {string} text Title of the menu item
     * @param {function} callback The callback function to call on click event
     */
    constructor(text: string, callback: Function, searchText?: string);
    set text(arg: string);
    get text(): string;
    set callback(arg: any);
    get callback(): any;
    set searchText(arg: string);
    get searchText(): string;
    #private;
}
/**
 * This class implements a menu
 */
export class Menu extends Component {
    /**
     * Construct a new Menu for the canvas
     * @param {Canvas} canvas The canvas
     * @param {MenuItem[]} items The menu items
     */
    constructor(canvas: Canvas, items: MenuItem[]);
    set items(arg: any[]);
    get items(): any[];
    /**
     * Show the menu
     * @param {number} x The x coordinate
     * @param {number} y The y coordinate
     */
    show(x: number, y: number): void;
    #private;
}
import { Component } from "./component";
import { Canvas } from "./canvas";
