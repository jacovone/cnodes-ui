/**
 * This is the main Canvas class. This class implement a general purpose canvas
 * that can manage nodes, components, sockets (a special subset of components) and connections
 * between sockets. The canvas is able to zoom and pan itself as well as to move
 * components. Components are organized in a hierarchical way, so that moving a component
 * will move all its subcomponents, including sockets. Sockets are (sub)components
 * that can be connected through connections to other sockets.
 * The class use SVG elements to render all elements.
 */
export class Canvas {
    /**
     * The constructor of the Canvas object. Initializes the SVG element,
     * set up all listeners to manage panning, zooming and selection.
     * @param {HTMLElement} el The parent element in which create the SVG element
     */
    constructor(el: HTMLElement);
    /**
     * Sets the minimum SVG View Box size, actually means
     * the max level of zoom (in)
     */
    set minVBSize(arg: number);
    /**
     * Returns the minimum SVG View Box size, actually means
     * the max level of zoom (in)
     */
    get minVBSize(): number;
    /**
     * Sets the minimum SVG View Box size, actually means
     * the max level of zoom (out)
     */
    set maxVBSize(arg: number);
    /**
     * Returns the minimum SVG View Box size, actually means
     * the max level of zoom (out)
     */
    get maxVBSize(): number;
    set components(arg: any[]);
    get components(): any[];
    set selectedComponents(arg: any[]);
    get selectedComponents(): any[];
    set connections(arg: any[]);
    get connections(): any[];
    set contextMenuComponent(arg: any);
    get contextMenuComponent(): any;
    /**
     * Return the internal SVG element
     */
    get svgEl(): any;
    /**
     * Return the internal SVG connections element
     */
    get connectionsEl(): any;
    /**
     * This method is responsible for translate client (browser) coordinates
     * to SVG space coordinates
     * @param {number} clientX The client x coordinate
     * @param {number} clientY The client y coordinate
     */
    clientToSvgPoint(clientX: number, clientY: number): any;
    /**
     * This method extract all common menu items from an
     * array of components. Menu items are considered the same
     * if it have the same text and the same search text. The returned
     * array is an array of menu items in which text and search text is preserved
     * while callback are a composition of original callbacks, so by selecting
     * a menu item, all action of all components are executed
     * @param {Component[]} components The array of components
     */
    getAllCommonMenuItems(components: Component[]): MenuItem[];
    /**
     * This method detect a cnodes-ui component inside the canvas
     * at specified location (x,y). Optionally the user can request
     * only sockets component, this is useful when you want to search
     * a possible connection peer during the link process
     * @param {number} x The x coordinate in the canvas
     * @param {number} y Te y coordinate in the canvas
     * @param {boolean} onlySockets If true, this method search only for socket components
     */
    componentFromPosition(x: number, y: number, onlySockets?: boolean): any;
    /**
     * Add a new connection to the canvas, also add the related element to
     * the main SVG group of connections
     * @param {Connection} connection The connection to add
     */
    addConnection(connection: Connection): void;
    /**
     * Remove a connection from the canvas, also remove the related SVG element
     * @param {Connection} connection The connection to remove
     */
    removeConnection(connection: Connection): void;
    /**
     * Checks if there is a connection between sockets already
     * @param {SocketComponent} socket1 First socket component
     * @param {SocketComponent} socket2 Second socket component
     */
    alreadyConnected(socket1: SocketComponent, socket2: SocketComponent): boolean;
    /**
     * Add a new component to the canvas
     * @param {Component} component Component to add
     */
    addComponent(component: Component): void;
    /**
     * Remove a component from the canvas
     * @param {Component} component Component to remove
     */
    removeComponent(component: Component): void;
    /**
     * True if the component passed as parameter is in the selection list
     * @param {Component} component Component to be consider
     */
    isComponentSelected(component: Component): boolean;
    /**
     * This method extract all connections in the canvas, that have
     * the source or the target SocketComponent as endpoint
     * @param {SocketComponent} socket The socket component for which search the connection
     */
    getConnectionsFor(socket: SocketComponent): any[];
    /**
     * Destroy all connections from the canvas
     */
    destroyAllConnections(): void;
    /**
     * Destroy all components from the canvas
     */
    destroyAllComponents(): void;
    /**
     * Destroy all connections and all components from the canvas
     */
    destroyAll(): void;
    /**
     * Return a list of MenuItem for the context menu
     */
    getCanvasContextMenuItems(): any;
    /**
     * Shows the context menu retated to the component or the canvas
     * @param {MenuItem[]} items Items that compose the menu
     * @param {number} x The x coordinate for the menu
     * @param {number} y The y coordinate for the menu
     */
    showContextMenu(items: MenuItem[], x: number, y: number): void;
    /**
     * Cancels the current open context menu, and closes it
     */
    cancelContextMenu(): void;
    /**
     * Set view box of the canvas to fit the entire graph
     * with a padding
     * @param { {x: number, y: number} } padding
     */
    fitGraph(padding: {
        x: number;
        y: number;
    }): void;
    #private;
}
import { Component } from "./component";
import { MenuItem } from "./menu";
import { Connection } from "./connection";
import { SocketComponent } from "./socket";
