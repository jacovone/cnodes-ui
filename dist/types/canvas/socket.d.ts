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
import { Component } from "./component";
