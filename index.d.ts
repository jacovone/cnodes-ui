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
    static getNodeUIInstance(node: Node, canvas: CnodesCanvas): any;
    /**
     * Creates a new CnodesCanvas object and install it on top of an HTML element
     * @param el The HTML id of the element on which create the canvas
     */
    constructor(el: string);
    /** The event emitter connected to the canvas */
    events: import("events").EventEmitter;
    /**
     * This setter is a trigger for the import procedure
     */
    set program(arg: Program);
    get program(): Program;
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
    importCnodesProgram(program: Program): void;
    /**
     * This method import a list of nodes inside the current program
     * by reconstructing all connection between nodes
     * @param {Node[]} nodes A list of nodes to import
     */
    importNodes(nodes: Node[]): Node[];
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
    pushProgram(program: Program): void;
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
    constructor(socket: PrevSocket);
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
    constructor(socket: OutputSocket);
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
    constructor(socket: NextSocket);
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
    constructor(socket: InputSocket);
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
    constructor(socket: Socket);
    get socket(): Socket;
    #private;
  }

  /**
   * This is the menu callback. When the user selects an item
   * the related callback is invoked, the result of that callback
   * if routed into this menu callback
   */
  export type MenuCallbackFn = (result: any) => void;

  /**
   * This class implements a context menu for cnodes canvas
   */
  export class CnodesMenu extends Menu {
    /**
     * Construct a new Menu for the canvas
     * @param {CnodesCanvas} canvas The canvas
     * @param {MenuItem[]} items The menu items
     */
    constructor(canvas: CnodesCanvas, items: MenuItem[]);
    set searchFilter(arg: string);
    get searchFilter(): string;
    set menuCallback(arg: MenuCallbackFn);
    get menuCallback(): MenuCallbackFn;
    /** Returns the filtered items of the menu */
    get filteredElements(): MenuItem[];
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
    get textInputEl(): HTMLElement;
    get inputEl(): HTMLElement;
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
    /**
     * Constructs a new generic connection from CnodesSockets
     * @param source Starting socket
     * @param target Ending socket
     * @param canvas The canvas
     */
    constructor(source: Socket, target: Socket, canvas: CnodesCanvas);
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

    /**
     * Constructs a new CnodeComponent, a special component that
     * represents a node in the cnodes world
     * @param node The encapsulated cnodes Node
     * @param canvas The canvas of this component
     */
    constructor(node: Node, canvas: CnodesCanvas);
    set node(arg: Node);
    get node(): Node;
    set titleComp(arg: CnodesEditableTextComponent);
    get titleComp(): CnodesEditableTextComponent;
    set commentComp(arg: CnodesEditableTextComponent);
    get commentComp(): CnodesEditableTextComponent;
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
  /**
   * This is a particular subclass of CnodeComponent that override
   * the default behaviors to implement a Component for the Program
   * node in the cnodes world
   */
  export class CnodeProgramComponent extends CnodeComponent {
    static instance: (node: Node, canvas: CnodesCanvas) => CnodeProgramComponent;
    /**
     * Constructs a new CnodeProgramComponent
     * @param node The cnodes Node
     * @param canvas The reference canvas
     */
    constructor(node: Node, canvas: CnodesCanvas);
    #private;
  }
  /**
   * This is a particular subclass of CnodeComponent that override
   * the default behaviors to implement a Component for the FOBreak
   * node in the cnodes world
   */
  export class CnodeBreakComponent extends CnodeComponent {
    static instance: (node: Node, canvas: CnodesCanvas) => CnodeBreakComponent;
    /**
     * Constructs a new CnodeBreakComponent
     * @param node The cnodes Node
     * @param canvas The reference canvas
     */
    constructor(node: Node, canvas: CnodesCanvas);
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
    get currentPeerSocketComponent(): CnodesSocketComponent;
    set tempConnectionEl(arg: HTMLElement);
    get tempConnectionEl(): HTMLElement;
    /**
     * Returns the element that responds to pointer events. By
     * default this is the entire root element
     */
    get dragElement(): HTMLElement;
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
    get hasSingleConnection(): boolean;
    /**
     * Is this socket actually connected?
     */
    get isConnected(): boolean;
    /**
     * Return the peer component of the socket in case
     * of this socket is a single connection. Otherwise return null
     */
    getSinglePeerComponent(): SocketComponent;
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
   * This callback is a function that will be called when the user clicks
   * on a menu item. It takes a couple of canvas coordinates, and, optionally,
   * returns a generic object. This object will be passed back to the MenuCallbackFn
   * set from the client that created the menu
   */
  export type ItemCallbackFn = (x: number, y: number) => any;

  /**
   * This class represents a single Menu item.
   * A menu itemhas a text, and a callback to call on click
   */
  export class MenuItem {
    /**
     * Constructs a menu item
     * @param {string} text Title of the menu item
     * @param {ItemCallbackFn} callback The callback function to call on click event
     * @param {string} searchText The text used during text search in the menu
     */
    constructor(text: string, callback: ItemCallbackFn, searchText?: string);
    set text(arg: string);
    get text(): string;
    set callback(arg: ItemCallbackFn);
    get callback(): ItemCallbackFn;
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
    set items(arg: MenuItem[]);
    get items(): MenuItem[];
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
    events: import("events").EventEmitter;
    /**
     * Sets up this connection. In terms of construction flow
     * this means create the SVG element that will be shown
     */
    setup(): Connection;
    set canvas(arg: Canvas);
    get canvas(): Canvas;
    set source(arg: SocketComponent);
    get source(): SocketComponent;
    set target(arg: SocketComponent);
    get target(): SocketComponent;
    get connectionEl(): HTMLElement;
    get svgEl(): HTMLElement;
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
    events: import("events").EventEmitter;
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
    set canvas(arg: Canvas);
    get canvas(): Canvas;
    get componentEl(): HTMLElement;
    get svgEl(): HTMLElement;
    set moveable(arg: boolean);
    get moveable(): boolean;
    set selectable(arg: boolean);
    get selectable(): boolean;
    set clonable(arg: boolean);
    get clonable(): boolean;
    set parent(arg: Component);
    get parent(): Component;
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
    set components(arg: Component[]);
    get components(): Component[];
    set selectedComponents(arg: Component[]);
    get selectedComponents(): Component[];
    set connections(arg: Connection[]);
    get connections(): Connection[];
    set contextMenuComponent(arg: Menu);
    get contextMenuComponent(): Menu;
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

  //////////////////////////////////////////////////////////////////
  // CNODES typings definitions

  export namespace Types {
    const NUMBER: string;
    const STRING: string;
    const BOOLEAN: string;
    const OBJECT: string;
    const ARRAY: string;
    const ANY: string;
  }
  /**
   * A socket is an object that represent an input,
   * output, next or prev for the node
   */
  export class Socket {
    /** An incremental index to generate unique socket IDs */
    static lastSocketIdIndex: number;
    /**
     * Construct a new socket on a node with a given name
     * @param {string} name The name of the socket
     * @param {Node} node The parent node of the socket
     */
    constructor(name: string, node: Node);
    set id(arg: string);
    get id(): string;
    set name(arg: string);
    get name(): string;
    set node(arg: Node);
    get node(): Node;
    /** Clone the spcket */
    clone(): Socket;
    #private;
  }
  /**
   * The value socket represent a input or a output value
   * for the node, so it has a value and a type
   */
  export class ValueSocket extends Socket {
    /**
     * Construct a new ValueSocket
     * @param {string} name Name of the socket
     * @param {Node} node The parent node
     * @param {string} type The type of this socket
     * @param {any} value The default value of the socket
     */
    constructor(name: string, node: Node, type?: string, value?: any);
    set type(arg: string);
    get type(): string;
    set value(arg: number);
    get value(): number;
    set canEditName(arg: boolean);
    get canEditName(): boolean;
    set canEditType(arg: boolean);
    get canEditType(): boolean;
    /**
     * This method evaluates a socket in terms of the real value
     * that is staying inside. The meaning is different in case of
     * InputSocket and OutputSocket, that re-defines this method
     */
    evaluate(): Promise<void>;
    #private;
  }
  /**
   * This is an input socket value for the node, it
   * can have only a peer socket, because its value
   * have to be defined in a deterministic way
   */
  export class InputSocket extends ValueSocket {
    /**
     * Construct a new InputSocket
     * @param {string} name The name of the socket
     * @param {Node} node The parent node
     * @param {string} type The type of the socket
     * @param {any} value The default value of the socket
     */
    constructor(name: string, node: Node, type?: string, value?: any);
    set peer(arg: Socket);
    get peer(): Socket;
    /**
     * Connect this socket to another (output) socket
     * @param {Socket} socket The output socket to connect
     */
    connect(socket: Socket): void;
    /**
     * Disconnects this socket from its peer
     */
    disconnect(): void;
    #private;
  }
  /**
   * This is a output value socket and represent an output
   * value for the node. Output value socket can be connected to
   * many peer input value sockets, because many socket would like
   * to take the value from this.
   */
  export class OutputSocket extends ValueSocket {
    /**
     * Construct a new OutputSocket
     * @param {string} name The name of the socket
     * @param {Node} node The parent node
     * @param {string} type The type of the socket
     * @param {any} value The default value of the socket
     * @param {boolean} cached The default value of the socket
     */
    constructor(name: string, node: Node, type: string, value: any, cached?: boolean);
    set peers(arg: Socket[]);
    get peers(): Socket[];
    set cached(arg: boolean);
    get cached(): boolean;
    /**
     * Connects this socket to a input socket
     * @param {Socket} socket Socket to connect to
     */
    connect(socket: Socket): void;
    /**
     * Disconnect this socket from a specific input peer
     * @param {Socket} socket The socket to disconnect
     */
    disconnect(socket: Socket): void;
    #private;
  }
  /**
   * A flow socket is a socket to connect two nodes in
   * terms of execution flow
   */
  export class FlowSocket extends Socket {
    /**
     * Construct a new FlowSocket
     * @param {sring} name Name of the socket
     * @param {Node} node The parent node
     */
    constructor(name: string, node: Node);
    #private;
  }
  /**
   * This class representa a prev socket, a socket that
   * can be connected to other nexts sockets. The prev socket
   * cab have many peer (next) socket because the execution
   * can come from anywhere in the program
   */
  export class PrevSocket extends FlowSocket {
    /**
     * Construct a new PrevSocket
     * @param {string} name Name of the socket
     * @param {Node} node Parent node
     */
    constructor(name: string, node: Node);
    set peers(arg: Socket[]);
    get peers(): Socket[];
    /**
     * Connect this socket to a next socket
     * @param {Socket} socket The next socket to connect
     */
    connect(socket: Socket): void;
    /**
     * Disconnect this socket from a next socket
     * @param {Socket} socket The next socket to disconnect
     */
    disconnect(socket: Socket): void;
    #private;
  }
  /**
   * This class represents a socket to redirect the flow
   * to another node via a node's prev socket. This socket can
   * be connected to only one (prev) socket, because the program
   * flow have to be well defined
   */
  export class NextSocket extends FlowSocket {
    /**
     * Construct a new NextSocket
     * @param {string} name Name of the socket
     * @param {Node} node The parent node of the socket
     */
    constructor(name: string, node: Node);
    set peer(arg: Socket);
    get peer(): Socket;
    /**
     * Connect this socket to another (prev) socket
     * @param {Socket} socket The prev socket to connect to
     */
    connect(socket: Socket): void;
    /**
     * Disconnect this socket from the peer
     */
    disconnect(): void;
    #private;
  }

  /**
   * This is a function passed to the method clone of the class Node.
   * Its is used to create an instance of the correct type of the node
   * before cloning all its values in terms of IO and other characteristics
   */
  export type CloneFactoryFn = () => Node;

  /**
   * This is the base node class. A node have some input and output
   * to exchange data with other nodes, some nexts to determine next
   * execution nodes, and a prev to identify the entry point.
   * A node can be functional or iterative. If the node is funcitonal
   * the execution of the process method is repeated each time other
   * nodes read the output values, otherwise output nodes reports
   * the last computed value. Each node has a unique id to identify it
   */
  export class Node {
    /** An incremental index to generate unique node IDs */
    static lastNodeIdIndex: number;
    /**
     * Construct a new Node
     * @param {string} [name] The name of the node
     * @param {string} [title] The title of the node
     */
    constructor(name?: string, title?: string);
    set id(arg: string);
    get id(): string;
    set name(arg: string);
    get name(): string;
    set title(arg: string);
    get title(): string;
    set functional(arg: boolean);
    get functional(): boolean;
    set inputs(arg: InputSocket[]);
    get inputs(): InputSocket[];
    set outputs(arg: OutputSocket[]);
    get outputs(): OutputSocket[];
    set nexts(arg: NextSocket[]);
    get nexts(): NextSocket[];
    set prev(arg: PrevSocket);
    get prev(): PrevSocket;
    set program(arg: Program);
    get program(): Program;
    set removable(arg: boolean);
    get removable(): boolean;
    set creatable(arg: boolean);
    get creatable(): boolean;
    set canAddInput(arg: boolean);
    get canAddInput(): boolean;
    set canAddOutput(arg: boolean);
    get canAddOutput(): boolean;
    set canAddNext(arg: boolean);
    get canAddNext(): boolean;
    set meta(arg: any);
    get meta(): any;
    /**
     * Returns the input by name
     * @param {string} name Name of the input
     */
    input(name: string): any;
    /**
     * Returns the output by name
     * @param {string} name The name of the output
     */
    output(name: string): any;
    /**
     * Returns the next by name
     * @param {string} name The name of the next
     */
    next(name: string): any;
    /**
     * Evaluate all imputs of this node. Inputs are sockets.
     * If the socket is connected the evaluation will search
     * for the socket's peer and evaluate the output counterpart
     * eventually reprocess the output's nod, if the node is
     * functional
     */
    evaluateInputs(): Promise<void>;
    /**
     * This is an helper method to construct a Result instance
     * by name
     * @param {Socket} socket The Socket on which construct the Result instance
     */
    getFlowResult(socket: Socket): Result;
    /**
     * This method disconnect all sockets from the node
     */
    disconnectAllSockets(): void;
    /**
     * If this.#canAddInput is true, the user can add an input
     * Subclass with variable number of input should override this method
     */
    addInput(): void;
    /**
     * This method removes a specific input from the node, if
     * this is possible whit this instance
     * Subclass with variable number of input should override this method
     * @param {InputSocket} input The input to remove
     */
    removeInput(input: InputSocket): void;
    /**
     * Can this node remove a specific input?
     * Subclass with variable number of input should override this method
     * @param {InputsSocket} input The input to remove
     */
    canRemoveInput(input: InputSocket): boolean;
    /**
     * If this.#canAddOutput is true, the user can add an output
     * Subclass with variable number of output should override this method
     */
    addOutput(): void;
    /**
     * This method removes a specific output from the node, if
     * this is possible whit this instance
     * Subclass with variable number of output should override this method
     * @param {OutputSocket} output The output to remove
     */
    removeOutput(output: OutputSocket): void;
    /**
     * Can this node remove a specific output?
     * Subclass with variable number of output should override this method
     * @param {OutputSocket} output The output to remove
     */
    canRemoveOutput(output: OutputSocket): boolean;
    /**
     * This method defines if a particular socket of this node can
     * be connected to another one, based on sockets type.
     * Default implementation checks for types of sockets, following the rule:
     * - if sockets are FlowSockets, return true
     * - Otherwise if the type of one socket is Types.ANY, return true
     * - Otherwise if the two types are the same, return true
     * - Otherwise return false
     * @param {Socket} thisSocket The instance of socket of this node
     * @param {Socket} otherSocket The other socket
     */
    canBeConnected(thisSocket: Socket, otherSocket: Socket): boolean;
    /**
     * This method is called when the engine need to compute outputs
     * and the next socket on which pass, based on inputs and current state.
     * The engine calls the methos and expects back a instance of Result
     * class to know where to go for the next step. The method is asynchronous
     * so the engine will await it, this allow this method to perform
     * asynchronous calls in turn
     */
    process(): Promise<Result>;
    /**
     * This method clones the node. Cloning will create a new node
     * of the same type of the particular node, so each node must
     * override this method to return the exact class type to the
     * caller. The param "factory" is a function to create the specific
     * class instance, to this base version of the method can create
     * the instance and clone all sockets, and other propertiesthat
     * is a same process for all different instances
     *
     * @param {CloneFactoryFn} factory A function that return a new instance of the class
     */
    clone(factory?: CloneFactoryFn): Node;
    #private;
  }
  /**
   * The result class used by programs to receive
   * the next "next" in the flow
   */
  export class Result {
    /**
     * Construct a new Result
     * @param {NextSocket} next The next socket to follow
     */
    constructor(next?: NextSocket);
    set next(arg: NextSocket);
    get next(): NextSocket;
    #private;
  }
  /**
   * This class implements a cnode that is the starting point for a
   * program. The program can be top-level or not
   */
  export class Enter extends Node {
    static instance: () => Enter;
    #private;
  }
  /**
   * This class implements a cnode that is the starting point for a
   * program. The program can be top-level or not
   */
  export class Exit extends Node {
    static instance: () => Exit;
    #private;
  }
  /**
   * A program is a special node that contains nodes. The program
   * manages the flow of the global execution by starting from the
   * "Enter" default, autocreated node, call its process() method and receive the next
   * "next". A program also store a global variable space
   */
  export class Program extends Node {
    static instance: () => Program;
    /** Engine version */
    static version: number;
    /**
     * This method clone a group of nodes, by reconstructing the
     * connections from sockets too. All connections involvong nodes
     * outside this set will be not reconstructed.
     * @param {Node[]} nodes Nodes (and) connections to clone
     */
    static cloneNodes(nodes: Node[]): any[];
    /** The event emitter connected to the program */
    events: import("events").EventEmitter;
    set vars(arg: Map<string, any>);
    get vars(): Map<string, any>;
    set enter(arg: Enter);
    get enter(): Enter;
    set exit(arg: Exit);
    get exit(): Exit;
    set currentNode(arg: Node);
    get currentNode(): Node;
    set nodes(arg: Node[]);
    get nodes(): Node[];
    /**
     * Add a new node to this program
     * @param {Node} node The node to add
     */
    addNode(node: Node): Program;
    /**
     * Removes a node from this program, disconnect all sockets
     * @param {Node} node The node to remove
     */
    removeNode(node: Node): Program;
    /**
     * Execute a program useng node as starting point
     * @param {Node} node Starting point node
     */
    processFrom(node: Node): Promise<void>;
    #private;
  }
  /**
   * This class implements a subroutine/function call
   */
  export class Call extends Node {
    static instance: () => Call;
    #private;
  }

  /**
   * This class implements a cnode that print to the
   * console the input value
   */
  export class Console extends Node {
    static instance: () => Console;
    #private;
  }
  /**
   * This class implements a functional GetVar node,
   * a node to read a variable's value from the global
   * program's space
   */
  export class FGetvar extends Node {
    static instance: () => FGetvar;
    #private;
  }
  /**
   * This class implements a node that is able to
   * iterate over a range of integers, like the form
   * for(let i=start; i<end; i++) do();
   */
  export class For extends Node {
    static instance: () => For;
    #private;
  }
  /**
   * This class implements a node to get a variable's value
   * in the program's global space. This node has a functional
   * counterpart naamed FGetvar
   */
  export class Getvar extends Node {
    static instance: () => Getvar;
    #private;
  }
  /**
   * This class implements a node to set a variable
   * value in the program's global space. If the variable
   * don't exists, the processo function will create it
   */
  export class Setvar extends Node {
    static instance: () => Setvar;
    #private;
  }
  /**
   * This class implements a node that is able to
   * iterate until a condition become false, like
   * while(condition) do();
   */
  export class While extends Node {
    static instance: () => While;
    #private;
  }
  /**
   * This class implements a node that is able to
   * redirect the flow of execution based on the
   * "condition" input value
   */
  export class If extends Node {
    static instance: () => If;
    #private;
  }
  /**
   * This class implements a cnode that pushes a value
   * into an array
   */
  export class APush extends Node {
    static instance: () => APush;
    #private;
  }
  /**
   * This class implements a node to get an array
   * as a string constant by JSON.parse() the input string.
   */
  export class FAConst extends Node {
    static instance: () => FAConst;
    #private;
  }
  /**
   * This class implements a node to get an array
   * from a list of inputs
   */
  export class FAMake extends Node {
    static instance: () => FAMake;
    #private;
  }
  /**
   * This class implements a functional node for pick
   * a single value from an array
   */
  export class FAGet extends Node {
    static instance: () => FAGet;
    #private;
  }
  /**
   * This class implements a functional node for get
   * the length of an array
   */
  export class FALength extends Node {
    static instance: () => FALength;
    #private;
  }
  /**
   * This class implements a functional node for adding numeric values.
   * Supports a indefinite number of value inputs and one single output
   */
  export class FAdd extends Node {
    static instance: () => FAdd;
    #private;
  }
  /**
   * This class implements a functional node for divide numeric values.
   */
  export class FDiv extends Node {
    static instance: () => FDiv;
    #private;
  }
  /**
   * This class implements a functional node for multiply numeric values.
   * Supports a indefinite number of value inputs and one single output
   */
  export class FMul extends Node {
    static instance: () => FMul;
    #private;
  }
  /**
   * This class implements a functional node for Square Root.
   */
  export class FSqrt extends Node {
    static instance: () => FSqrt;
    #private;
  }
  export namespace Comparision {
    const EQUAL: string;
    const GT: string;
    const GTE: string;
    const LT: string;
    const LTE: string;
    const NOT_EQUAL: string;
  }
  /**
   * This class implements a functional node for compairing numeric values.
   */
  export class FCompare extends Node {
    static instance: () => FCompare;
    /**
     * Construct a new FCompare node
     * @param {Comparision} comparision The comparision type
     */
    constructor(comparision?: {
      EQUAL: string;
      GT: string;
      GTE: string;
      LT: string;
      LTE: string;
      NOT_EQUAL: string;
    });
    set comparision(arg: string);
    get comparision(): string;
    #private;
  }
  /**
   * This class override the FCompare node with a comparision of EQUAL
   */
  export class FEqual extends FCompare {
    #private;
  }
  /**
   * This class override the FCompare node with a comparision of GT
   */
  export class FGT extends FCompare {
    #private;
  }
  /**
   * This class override the FCompare node with a comparision of GTE
   */
  export class FGTE extends FCompare {
    #private;
  }
  /**
   * This class override the FCompare node with a comparision of FLT
   */
  export class FLT extends FCompare {
    #private;
  }
  /**
   * This class override the FCompare node with a comparision of FLTE
   */
  export class FLTE extends FCompare {
    #private;
  }
  /**
   * This class override the FCompare node with a comparision of NOT_EQUAL
   */
  export class FNotEqual extends FCompare {
    #private;
  }
  /**
   * This class implements a node to get return a simple
   * string constant. This is a functional node.
   */
  export class FSConst extends Node {
    static instance: () => FSConst;
    #private;
  }
  /**
   * This class implements a node that conctas two strings.
   * If other type are passed, these are converted to strings
   */
  export class FConcat extends Node {
    static instance: () => FConcat;
    #private;
  }
  /**
   * This class implements a functional node for modulus (%)
   */
  export class FMod extends Node {
    static instance: () => FMod;
    #private;
  }
  /**
   * This class implements a functional conditional node
   */
  export class FIf extends Node {
    static instance: () => FIf;
    #private;
  }
  /**
   * This class implements a node to get return a simple
   * number constant. This is a functional node.
   */
  export class FNConst extends Node {
    static instance: () => FNConst;
    #private;
  }
  /**
   * This class implements a node to get an object
   * from a list of fields
   */
  export class FOMake extends Node {
    static instance: () => FOMake;
    #private;
  }
  /**
   * This class implements a node to break down
   * an object to its fields, or part of them
   */
  export class FOBreak extends Node {
    static instance: () => FOBreak;
    #private;
  }
  /**
   * This class implements a cnode that map an array to another
   * by passing all items in sequence
   */
  export class AMap extends Node {
    static instance: () => AMap;
    #private;
  }
  /**
   * This class implements a cnode that reduces an array to
   * a value
   */
  export class AReduce extends Node {
    static instance: () => AReduce;
    #private;
  }
  /**
   * This is the functional version of the FAMap node
   */
  export class FAMap extends AMap {
    static instance: () => FAMap;
    #private;
  }
  /**
   * This is the functional version of the FAReduce node
   */
  export class FAReduce extends AReduce {
    static instance: () => FAReduce;
    #private;
  }
  /**
   * This class implements a cnode that log a message through
   * the events system
   */
  export class Log extends Node {
    /** Return an instance of this node */
    static instance: () => Log;
    #private;
  }
  /**
   * This class implements a functional node for ToFixed()
   * javascript number method.
   */
  export class FTofixed extends Node {
    static instance: () => FTofixed;
    #private;
  }
  /**
   * This class implements a cnode that waits for a specified
   * number of seconds
   */
  export class Wait extends Node {
    /** Return an instance of this node */
    static instance: () => Wait;
    #private;
  }

  export interface RegisterMakerOpts {
    recursive?: boolean,
    fillValues?: boolean,
    forceTypes?: boolean,
    editableInputs?: boolean
  }
  export interface RegisterBreakerOpts {
    recursive?: boolean,
    forceTypes?: boolean,
    editableOutputs?: boolean
  }
  export interface RegisterObjectOpts {
    recursive?: boolean,
    fillValues?: boolean,
    forceTypes?: boolean,
    editableInputs?: boolean
    editableOutputs?: boolean
  }

  /**
   * This class represents a main global environment for cnodes.
   * The class is a "static" class that is responible for maintaining a global
   * registry of registered nodes. A node registration is a object with three fields: a node name,
   * a category name and a factory, that returns a new instance for that node.
   * The global Env instance must be initialized one-time by calling the Env.init() method,
   * this method register all built-in nodes. Eventual custom nodes must be registered manually
   * via Env.registerNode(name, category, factory).
   */
  export class Env {
    /** The internal node registry */
    static "__#11@#nodeRegistry": Map<string, {category: string, factory: () => Node}>;
    /**
     * Initialize the CNodes global environment
     */
    static init(): void;
    /**
     * Register a node type
     * @param {string} name The name of the node
     * @param {string} category The category of the node
     * @param {() => Node} factory A class that instantiate the node
     */
    static registerNode(name: string, category: string, factory: () => Node): void;
    /**
     * Return the list of unique registered categories
     */
    static getCategories(): string[];
    /**
     * Return an array of registrations for nodes.
     * Registrations have the sign: {name, category, factory}
     * @param {string} category The category for which seacrh registrations
     */
    static getCategoryNodes(category: string): {name: string, category: string, factory: () => Node}[];
    /**
     * Instantiate a node by name
     * @param {string} name The name of the node
     */
    static getInstance(name: string): Node;
    /**
     * Create helper maker nodes to support user with dealing with
     * specific object structures. This method accepts optional
     * options that let you specify what exactly create:
     * {
     *   recursive: true,
     *   fillValues: true,
     *   forceTypes: true
     *   editableInputs: true
     * }
     *
     * @param {string} name The name of generated structure
     * @param {any} obj The object structure to consider whiel create nodes
     * @param {RegisterMakerOpts} opts The options on create nodes
     */
    static registerMaker(name: string, obj: any, opts?: RegisterMakerOpts): void;
    /**
     * Create helper breaker nodes to support user with dealing with
     * specific object structures. This method accepts optional
     * options that let you specify what exactly create:
     * {
     *   recursive: true,
     *   forceTypes: true,
     *   editableOutputs: true
     * }
     *
     * @param {string} name The name of generated structure
     * @param {any} obj The object structure to consider whiel create nodes
     * @param {RegisterBreakerOpts} opts The options on create nodes
     */
    static registerBreaker(name: string, obj: any, opts?: RegisterBreakerOpts): void;
    /**
     * Create both helper maker and breaker nodes to support user with dealing with
     * specific object structures. This method accepts optional
     * options that let you specify what exactly create:
     * {
     *   recursive: true,
     *   fillValues: true,
     *   forceTypes: true,
     *   editableInputs: true
     *   editableOutputs: true
     * }
     *
     * @param {string} name The name of generated structure
     * @param {any} obj The object structure to consider whiel create nodes
     * @param {RegisterObjectOpts} opts The options on create nodes
     */
    static registerObject(name: any, obj: any, opts?: RegisterObjectOpts): void;
    /**
     * Creates and returns a JSON representation of the entire program
     * @param {Program} program The program to export
     */
    static export(
      program: Program
    ): any;
    /**
     * Create a program instance based on export data created with export() method
     * @param {any} data A object with the export data format
     */
    static import(data: any): Program;
  }
}
