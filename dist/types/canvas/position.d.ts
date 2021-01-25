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
