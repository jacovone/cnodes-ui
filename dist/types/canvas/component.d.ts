/**
 * This class is the base class for all components in the cnodes-ui canvas.
 * The class is responsible for manage mobility of components. This is not
 * yet the class for the cnodes nodes, is more abstract so that the user can
 * derive from that to implement components that are not explicitly connected
 * to the cnodes library, such as decorators, comments, etc.
 * In general component can have subcomponents. Special examples of subcomponents are
 * sockets. The socket is a component that can be connected through connections,
 * in the canvas-ui class model.
 */
export class Component {
    /**
     * Events connected to the component:
     */
    events: EventEmitter;
    /**
     * Sets up the component. The component creation follow a specific flow.
     * The user that creates the component have to call this method after, to
     * initializes the internal SVG component and optionally installs pointer
     * event listeners to manage moving.
     * By default setup() return this, so you can concatenate construction such as
     * new Component(...).setup();
     */
    setup(): Component;
    set pos(arg: Position);
    get pos(): Position;
    get width(): number;
    get height(): number;
    set canvas(arg: any);
    get canvas(): any;
    get componentEl(): any;
    get svgEl(): any;
    set moveable(arg: boolean);
    get moveable(): boolean;
    set selectable(arg: boolean);
    get selectable(): boolean;
    set clonable(arg: boolean);
    get clonable(): boolean;
    set parent(arg: any);
    get parent(): any;
    /**
     * Returns the array of context menu items. If the component
     * returns null, no contextual menu is shown
     */
    getContextMenuItems(): any;
    /**
     * This method must be overridden in a child concrete class.
     * The setup() mthod calls this one during the creation process
     */
    createElement(): void;
    /**
     * Returns the absolute position of this component, in terms
     * of canvas coordinates, by travering the child-parent component
     * hierarchy
     */
    get absPos(): Position;
    /**
     * Update the component element according to x and y local coordinates,
     * if this component is a child component, coordinates in canvas space
     * are computed
     */
    updateSVGElement(): void;
    /**
     * This method add this component as a child of another component. This means
     * tht this component register itself for receive parent component events, to
     * react on them. The addTo() method return this, to allow user to chain calls
     * during creation process
     * @param {Component} component
     */
    addTo(component: Component): Component;
    /**
     * This method is called when this component is removed
     * from the canvas of from its parent component
     */
    destroy(): void;
    #private;
}
import { EventEmitter } from "node/events";
import { Position } from "./position";
