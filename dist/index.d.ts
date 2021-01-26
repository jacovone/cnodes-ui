declare module cnui {
  /**
   * This is the main entrypoint function. You can pass an ID of a
   * DOM element by parameter (tipically a DIV element).
   * For example, having a simple DOM element like
   *
   * <div id="mycanvas" class="fullscreen"></div>
   *
   * You can do
   *
   * <script>
   *  let canvas = cnui.canvas('mycanvas');
   *  let prg = cnui.Env.import(JSON.parse('...'));
   *  canvas.program = prg;
   * </script>
   *
   * @param {string} elId The id of the DOM element you want to become a CNODES-UI canvas
   */
  export function canvas(elId: string): CnodesCanvas;

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
    events: any;
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
     * This method deletes selected nodes
     */
    deleteSelectedNodes(): void;
    /**
     * This method unselect all nodes
     */
    unselectAllNodes(): void;
    /**
     * This method select all nodes
     */
    selectAllNodes(): void;
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
  /**
   * This class implements a socket that represents a Prev object
   * in the cnodes world
   */
  export class PrevSocketComponent extends CnodesSocketComponent {
    constructor(socket: any);
    /**
     * Returns the direction of the source point for this socket component:
     * -1 = Left
     * 1 = Right
     */
    getSourcePointDirection(): number;
    /**
     * This method is responsible to enumerate all socket of registered nodes
     * that can enstabilish a valid connection with this socket and construct
     * a menu items array thst define callback to create the related node and
     * return the particular socket. It is used by the smart connection process
     * via the context menu
     */
    getRegisteredPossiblePeers(): MenuItem[];
    #private;
  }
  /**
   * This class implements a socket representing a Output in the
   * cnodes world
   */
  export class OutputSocketComponent extends CnodesSocketComponent {
    constructor(socket: any);
    /**
     * Returns the direction of the source point for this socket component:
     * -1 = Left
     * 1 = Right
     */
    getSourcePointDirection(): number;
    /**
     * This method is responsible to enumerate all socket of registered nodes
     * that can enstabilish a valid connection with this socket and construct
     * a menu items array thst define callback to create the related node and
     * return the particular socket. It is used by the smart connection process
     * via the context menu
     */
    getRegisteredPossiblePeers(): MenuItem[];
    #private;
  }
  /**
   * This class implements a socket representing the Next socket in the
   * cnodes context
   */
  export class NextSocketComponent extends CnodesSocketComponent {
    constructor(socket: any);
    /**
     * Returns the direction of the source point for this socket component:
     * -1 = Left
     * 1 = Right
     */
    getSourcePointDirection(): number;
    /**
     * This method is responsible to enumerate all socket of registered nodes
     * that can enstabilish a valid connection with this socket and construct
     * a menu items array thst define callback to create the related node and
     * return the particular socket. It is used by the smart connection process
     * via the context menu
     */
    getRegisteredPossiblePeers(): MenuItem[];
    #private;
  }
  /**
   * This class implement a socket to draw a Input element
   * in the cnodes world
   */
  export class InputSocketComponent extends CnodesSocketComponent {
    constructor(socket: any);
    /**
     * Returns the direction of the source point for this socket component:
     * -1 = Left
     * 1 = Right
     */
    getSourcePointDirection(): number;
    /**
     * This method is responsible to enumerate all socket of registered nodes
     * that can enstabilish a valid connection with this socket and construct
     * a menu items array thst define callback to create the related node and
     * return the particular socket. It is used by the smart connection process
     * via the context menu
     */
    getRegisteredPossiblePeers(): MenuItem[];
    #private;
  }
  /**
   * This class is the base class for all sockets components
   * of cnodes. The class introduces the socket field that is
   * a "cnodes" socket the internal structure to store links
   * between cnodes nodes. In addition implements the base functionality
   * of the "smart" connection flow, in case the user drag out
   * of a socket component and release the pointer outside of
   * a destination socket
   */
  export class CnodesSocketComponent extends SocketComponent {
    /**
     * Return a color code in CSS for a given cndoes data type
     * @param {string} type CNODES data type
     */
    static getColorForType(type: string): string;
    /**
     * Construct a new CnodesSocket object
     * @param {Socket} socket The internal cnodes socket object
     */
    constructor(socket: any);
    get socket(): any;
    #private;
  }
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
  /**
   * This class implements a connection for the cnodes system
   * It embed both source and target sockets
   */
  export class CnodesConnection extends Connection {
    constructor(source: any, target: any, canvas: any);
    /**
     * Return a relevant type between two types passed as parameter
     * @param {string} type1 CNODES source type
     * @param {string} type2 CNODES target type
     */
    getRelevantType(type1: string, type2: string): string;
    #private;
  }
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
    createCommentComponent(
      comment?: string,
      x?: number,
      y?: number,
      initialEdit?: boolean
    ): void;
    #private;
  }
  export class CnodeProgramComponent extends CnodeComponent {
    static instance: (node: any, canvas: any) => CnodeProgramComponent;
    constructor(node: any, canvas: any);
    #private;
  }
  export class CnodeBreakComponent extends CnodeComponent {
    static instance: (node: any, canvas: any) => CnodeBreakComponent;
    constructor(node: any, canvas: any);
    #private;
  }
  /**
   * A Socket is a special case of component. Tipically, to design
   * a component node in canvas-ui, you define a base component, and attach
   * to it a list of subcomponents that derives from Socket class, for
   * give the user the chance to link nodes
   */
  export class SocketComponent extends Component {
    set connecting(arg: boolean);
    get connecting(): boolean;
    get currentPeerSocketComponent(): any;
    set tempConnectionEl(arg: any);
    get tempConnectionEl(): any;
    /**
     * Returns the element that responds to pointer events. By
     * default this is the entire root element
     */
    get dragElement(): any;
    /**
     * Manages the pointerdown event to implement the start of the
     * drag-and-link process. If the socket is a one-link socket, such as
     * a "next" connection to another node, a pointerdown should disconnect
     * the old connection and restart the dragging of the peek socket, to give
     * the user the chance to connect the peer socket to another one.
     * If the socket was not already connected, call the connectionStarted()
     * method that will be overridden in subclasses
     * @param {Event} e The pointerdown event
     */
    onPointerDown(e: Event): void;
    /**
     * This method manages the pointerup event to implement
     * the final part of the connection. If the pointer is overing a
     * valid peer socket, then the connection ca be done, and the
     * connectionDone() method can be call. Otherwise the
     * connectionEndedOutOfSocket() is called.
     * @param {Event} e The pointerup event
     */
    onPointerUp(e: Event): void;
    /**
     * This method manages the pointermove event to implement the
     * middle part of the connection process. During this phase, cnodes-ui
     * check if the pointer is overing a valid peer socket component, and
     * if true, show the temprary link in a "valid state", such as a special color
     * of the stroke stroke, and store the peer component in the currentPeerSocketComponent
     * for future use.
     * @param {Event} e The pointermove event
     */
    onPointerMove(e: Event): void;
    /**
     * The user has began dragging the socket to create a connection
     */
    connectionStarted(): void;
    /**
     * The user is moving the pointer around, with a connection pending
     * @param {number} x The x coordinate in SVG space
     * @param {number} y The y coordinate in SVG space
     * @param {boolean} invalid true if the pointer is overing a unacceptable socket
     */
    connectionMoving(x: number, y: number, invalid: boolean): void;
    /**
     * The user has completed a valid connection
     * @param {SocketComponent} socketComp Peer socket to connect
     */
    connectionDone(socketComp: SocketComponent): void;
    /**
     * The user has released the pointer button out of a valid socket,
     * so by default, cancel the connection
     * @param {Event} e The event pointerup
     */
    connectionEndedOutOfSocket(e: Event): void;
    /**
     * Query if this socket could accept a connection with
     * a peer socket passed as parmeter
     * @param {SocketComponent} socketComp Peer socket to connect
     */
    canAcceptPeerSocket(socketComp: SocketComponent): void;
    /**
     * Return true if this socket only support one connection at most
     */
    get hasSingleConnection(): void;
    /**
     * Is this socket actually connected?
     */
    get isConnected(): boolean;
    /**
     * Return the peer component of the socket in case
     * of this socket is a single connection. Otherwise return null
     */
    getSinglePeerComponent(): any;
    #private;
  }
  /**
   * cnodes-ui
   *
   * A GUI for cnodes
   * License: MIT
   * Author: Marco Jacovone
   * Year: 2020/2021
   */
  /**
   * A class that represents a position in SVG space
   */
  export class Position {
    /**
     * Construct a new Position
     * @param {number} x The x coordinate
     * @param {number} y The y coordinate
     */
    constructor(x: number, y: number);
    set x(arg: number);
    get x(): number;
    set y(arg: number);
    get y(): number;
    /**
     * Return a new position by adding another instance of
     * position coordinate by coordinate
     * @param {Position} pos
     */
    add(pos: Position): Position;
    /**
     * Return a new position by subtracting another instance of
     * position coordinate by coordinate
     * @param {Position} pos
     */
    sub(pos: Position): Position;
    #private;
  }
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
  /**
   * This is tha base class of all connections. A Connection is always a
   * link from two sockets. Sockets are special subclass of components, tipically
   * child of base components
   */
  export class Connection {
    /**
     * Construct a connection instance by setting its source and target.
     * This method takes also the opportunity to register itself to
     * source and target events, and react accordingly
     */
    constructor(source: any, target: any);
    /**
     * Events connected to the component:
     */
    events: any;
    /**
     * Sets up this connection. In terms of construction flow
     * this means create the SVG element that will be shown
     */
    setup(): Connection;
    set canvas(arg: any);
    get canvas(): any;
    set source(arg: any);
    get source(): any;
    set target(arg: any);
    get target(): any;
    get connectionEl(): any;
    get svgEl(): any;
    /**
     * This method is responsible to create the SVG element
     * for display the connetion. Subclasses must override this method
     */
    createElement(): void;
    /**
     * This method is called when the connetion needs to be updated.
     * This happens when sockets and/or components connected to this
     * object where moved
     */
    updateSVGElement(): void;
    /**
     * This method is called when the connection is removed from the canvas
     */
    destroy(): void;
    #private;
  }
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
    events: any;
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
    alreadyConnected(
      socket1: SocketComponent,
      socket2: SocketComponent
    ): boolean;
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
    fitGraph(padding: { x: number; y: number }): void;
    #private;
  }
}
