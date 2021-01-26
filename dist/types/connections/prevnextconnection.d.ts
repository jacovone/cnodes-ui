/**
 * This class implements a connection for Input->Output connection
 * in the cnodes world. It embed both source and target sockets that
 * must be of type InputSocketComponent and OutputSocketComponent, and manages
 * the connection status of the embedded cnodes's socket
 */
export class PrevNextConnection extends CnodesConnection {
    constructor(source: any, target: any, canvas: any);
    #private;
}
import { CnodesConnection } from "../components/cnodesconnection";
