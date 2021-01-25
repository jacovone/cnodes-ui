/**
 * This is component to draw a simple SVG Text that let the user
 * to change the text by implementing an "edit" action via context
 * menu item
 */
export class CnodesEditableTextComponent extends Component {
    /**
     * Construct a new Text object with  particular text, and an
     * option for multiline
     * @param {string} text The text to show
     */
    constructor(text: string);
    get textEl(): any;
    set text(arg: string);
    get text(): string;
    set color(arg: string);
    get color(): string;
    set font(arg: string);
    get font(): string;
    get textInputEl(): any;
    get inputEl(): any;
    get state(): number;
    /**
     * Sets the editing mode
     * @param {boolean} editMode true = Edit Mode, false = View Mode
     */
    setEditing(editMode: boolean): void;
    #private;
}
import { Component } from "../canvas/component";
