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
  events: EventEmitter;
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
import { EventEmitter } from "events";
