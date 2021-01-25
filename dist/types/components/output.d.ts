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
import { CnodesSocketComponent } from "./cnodessocket";
import { MenuItem } from "../canvas/menu";
