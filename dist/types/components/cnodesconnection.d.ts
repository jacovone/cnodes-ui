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
import { Connection } from "../canvas/connection";
