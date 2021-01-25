/**
 * This class implements a context menu for cnodes canvas
 */
export class CnodesMenu extends Menu {
    /**
     * Construct a new Menu for the canvas
     * @param {CnodesCanvas} canvas The canvas
     * @param {MenuItem[]} items The menu items
     */
    constructor(canvas: CnodesCanvas, items: any[]);
    set searchFilter(arg: string);
    get searchFilter(): string;
    set menuCallback(arg: any);
    get menuCallback(): any;
    /** Returns the filtered items of the menu */
    get filteredElements(): any[];
    /**
     * Creates/Updates menu items based on the search input field, and
     * adjust the size of the container element
     */
    createMenuItemsElements(): void;
    #private;
}
import { Menu } from "../canvas/menu";
import { CnodesCanvas } from "./cnodescanvas";
