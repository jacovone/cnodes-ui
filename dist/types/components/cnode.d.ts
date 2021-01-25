/**
 * This is the main class for managing a single CNode
 * inside the cnodes-ui canvas. It embed a cnodes node instance
 */
export class CnodeComponent extends Component {
    constructor(node: any, canvas: any);
    set node(arg: any);
    get node(): any;
    set titleComp(arg: any);
    get titleComp(): any;
    set commentComp(arg: any);
    get commentComp(): any;
    /**
     * This method construct and/or update all sub components. They are all sockets
     * representing input, outputs, prev and nexts.
     */
    updateSubcomponents(): void;
    /**
     * This method creates a comment component and attach it to the
     * node component. Take the x,y coordinates in input to place this
     * component, by default at the bottom of the node
     * @param {string} comment The text for the comment
     * @param {number} x The x coordinate for the comment component
     * @param {number} y The y coordinate for the comment component
     * @param {boolean} initialEdit The comment starts in edit mode?
     */
    createCommentComponent(comment?: string, x?: number, y?: number, initialEdit?: boolean): void;
    #private;
}
import { Component } from "../canvas/component";
