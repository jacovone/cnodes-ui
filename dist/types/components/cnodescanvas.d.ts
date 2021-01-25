/**
 * This is the entry-point class for managing the canvas
 * relative to a cnodes program.
 */
export class CnodesCanvas extends Canvas {
    /** The static registry of (cnodes NDOE) <--> (CnodeComponent) map */
    static "__#10@#nodesUIRegistry": Map<any, any>;
    /** The clipboard of the canvas */
    static clipboard: any;
    /**
     * Register a UI class, that extends CnodeComponent for managing
     * a specific node passed as parameter, by registering the instance
     * in the canvas registry
     * @param {Node} node The node instance (cnodes)
     * @param {Function} factory The factory, that is a function that creates the UI component
     */
    static registerNodeUI(node: any, factory: Function): void;
    /**
     * Returns the instance of the UI component registered in the canvas registry
     * that is able to manage a cnode specific instance passed as parameter
     * @param {Node} node The node instance (cnodes)
     * @param {CnodesCanvas} canvas The canvas instance, to create the node UI component
     */
    static getNodeUIInstance(node: any, canvas: CnodesCanvas): any;
    constructor(el: any);
    /** The event emitter connected to the canvas */
    events: EventEmitter;
    /**
     * This setter is a trigger for the import procedure
     */
    set program(arg: any);
    get program(): any;
    /**
     * Executes the program
     */
    run(): Promise<void>;
    /**
     * Dump the internal CNODES program to the console
     */
    dump(): void;
    /**
     * This method imports an entire cnodes program
     * @param {Program} program Program to import
     */
    importCnodesProgram(program: any): void;
    /**
     * This method import a list of nodes inside the current program
     * by reconstructing all connection between nodes
     * @param {Node[]} nodes A list of nodes to import
     */
    importNodes(nodes: any[]): any[];
    /**
     * This method clones selected nodes and add them to the canvas
     * at a position a bit doifferent from it source set
     */
    cloneSelectedNodes(): void;
    /**
     * This method copy all selected nodes to a property of the canvas
     */
    copySelectedNodes(): void;
    /**
     * Paste copied nodes to the canvas, at a position
     * @param {number} x X Position to which paste nodes
     * @param {number} y Y Position to which paste nodes
     */
    pasteNodes(x: number, y: number): void;
    /**
     * Push a subprogram on the canvas. The current program
     * is pushed on to the stack and the new one is placed on the canvas
     * @param {Program} program The new program to edit
     */
    pushProgram(program: any): void;
    /**
     * Pops the last program and place it on the canvas. The actual
     * program (that is a subprogram of the popped) is abandoned
     */
    popProgram(): void;
    /**
     * Can this canvas pop a program from the stack, that is:
     * there is at least one program on the stack?
     */
    canPopProgram(): boolean;
    #private;
}
import { Canvas } from "../canvas/canvas";
import { EventEmitter } from "node/events";
