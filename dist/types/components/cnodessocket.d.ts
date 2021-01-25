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
import { SocketComponent } from "../canvas/socket";
