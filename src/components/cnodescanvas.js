import { Canvas } from "../canvas/canvas";
import { Position } from "../canvas/position";
import { IOConnection } from "../connections/io_connection";
import { PrevNextConnection } from "../connections/prevnext_connection";
import { CnodeComponent } from "./cnode";
import { Theme } from "./theme";

export class CnodesCanvas extends Canvas {
  /** The edited program */
  #program = null;

  constructor(el) {
    super(el);

    let ioArrowMarker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    ioArrowMarker.setAttribute("id", "io-arrow");
    ioArrowMarker.setAttribute("viewBox", "0 0 10 10");
    ioArrowMarker.setAttribute("refX", "7");
    ioArrowMarker.setAttribute("refY", "5");
    ioArrowMarker.setAttribute("markerWidth", "5");
    ioArrowMarker.setAttribute("markerHeight", "5");
    ioArrowMarker.setAttribute("fill", Theme.current.CONNECTION_IO_COLOR);

    ioArrowMarker.setAttribute("orient", "auto-start-reverse");

    let ioArrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    ioArrowPath.setAttribute("d", "M 0 0 L 10 5 L 0 10 Z");
    ioArrowMarker.appendChild(ioArrowPath);

    let prevNextArrowMarker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    prevNextArrowMarker.setAttribute("id", "prevnext-arrow");
    prevNextArrowMarker.setAttribute("viewBox", "0 0 10 10");
    prevNextArrowMarker.setAttribute("refX", "7");
    prevNextArrowMarker.setAttribute("refY", "5");
    prevNextArrowMarker.setAttribute("markerWidth", "5");
    prevNextArrowMarker.setAttribute("markerHeight", "5");
    prevNextArrowMarker.setAttribute("fill", Theme.current.CONNECTION_PREV_NEXT_COLOR);

    prevNextArrowMarker.setAttribute("orient", "auto-start-reverse");

    let prevNextArrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    prevNextArrowPath.setAttribute("d", "M 0 0 L 10 5 L 0 10 Z");
    prevNextArrowMarker.appendChild(prevNextArrowPath);
    this.svgEl.appendChild(ioArrowMarker);
    this.svgEl.appendChild(prevNextArrowMarker);
  }

  get program() {
    return this.#program;
  }
  set program(val) {
    this.#importCnodesProgram(val);
    this.#program = val;
  }

  /**
   * Executes the program
   */
  run() {
    this.#program.process();
  }

  /**
   * Add a new component to the canvas
   * @param {*} component Component to add
   */
  addComponent(component) {
    super.addComponent(component);

    if (component instanceof CnodeComponent && this.program) {
      // Add the node to the program
      this.program.addNode(component.node);
    }
  }

  /**
   * Remove a component from the canvas
   * @param {*} component Component to remove
   */
  removeComponent(component) {
    super.removeComponent(component);

    if (component instanceof CnodeComponent && this.program) {
      // Add the node to the program
      this.program.removeNode(component.node);
    }
  }

  /**
   * This method returns che cnode's component from the cnode
   * @param {*} cnode The cnode
   */
  getCnodeComponentFromCnode(cnode) {
    return this.components.find((c) => c instanceof CnodeComponent && c.node === cnode);
  }

  /**
   * Checks if there is a connection between sockets already
   * @param {*} socket1 First socket component
   * @param {*} socket2 Second socket component
   */
  alreadyConnected(socket1, socket2) {
    return (
      this.connections.findIndex((c) => (c.source === socket1 && c.target === socket2) || (c.source === socket2 && c.target === socket1)) !== -1
    );
  }

  /**
   * This method imports an entire cnodes program
   * @param {*} program Program to import
   */
  #importCnodesProgram(program) {
    this.#program = null;
    this.removeAll();

    // Import the program
    for (let n of program.nodes) {
      let comp = new CnodeComponent(n, this);
      comp.moveable = true;
      comp.pos = new Position(100, 100);
    }

    // Setup connections
    for (let n of program.nodes) {
      let thisNodeComponent = this.getCnodeComponentFromCnode(n);
      // Setup prev
      if (n.prev && n.prev.peers.length > 0) {
        for (let peer of n.prev.peers) {
          let thisSocketComponent = thisNodeComponent.getCnodesSocketComponentFromSocket(n.prev);
          let otherNodeComponent = this.getCnodeComponentFromCnode(peer.node);
          let otherSocketComponent = otherNodeComponent.getCnodesSocketComponentFromSocket(peer);

          if (!this.alreadyConnected(otherSocketComponent, thisSocketComponent)) {
            // Create connection component without creating the connection on cnodes sockets
            new PrevNextConnection(otherSocketComponent, thisSocketComponent, this, false);
          }
        }
      }
      // Setup nexts
      for (let next of n.nexts) {
        if (next.peer) {
          let thisSocketComponent = thisNodeComponent.getCnodesSocketComponentFromSocket(next);
          let otherNodeComponent = this.getCnodeComponentFromCnode(next.peer.node);
          let otherSocketComponent = otherNodeComponent.getCnodesSocketComponentFromSocket(next.peer);

          if (!this.alreadyConnected(otherSocketComponent, thisSocketComponent)) {
            // Create connection component without creating the connection on cnodes sockets
            new PrevNextConnection(thisSocketComponent, otherSocketComponent, this, false);
          }
        }
      }
      // Setup inputs
      for (let inp of n.inputs) {
        if (inp.peer) {
          let thisSocketComponent = thisNodeComponent.getCnodesSocketComponentFromSocket(inp);
          let otherNodeComponent = this.getCnodeComponentFromCnode(inp.peer.node);
          let otherSocketComponent = otherNodeComponent.getCnodesSocketComponentFromSocket(inp.peer);

          if (!this.alreadyConnected(otherSocketComponent, thisSocketComponent)) {
            // Create connection component without creating the connection on cnodes sockets
            new IOConnection(otherSocketComponent, thisSocketComponent, this, false);
          }
        }
      }
      // Setup outputs
      for (let outp of n.outputs) {
        if (outp.peers.length > 0) {
          for (let peer of outp.peers) {
            let thisSocketComponent = thisNodeComponent.getCnodesSocketComponentFromSocket(outp);
            let otherNodeComponent = this.getCnodeComponentFromCnode(peer.node);
            let otherSocketComponent = otherNodeComponent.getCnodesSocketComponentFromSocket(peer);

            if (!this.alreadyConnected(otherSocketComponent, thisSocketComponent)) {
              // Create connection component without creating the connection on cnodes sockets
              new IOConnection(thisSocketComponent, otherSocketComponent, this, false);
            }
          }
        }
      }
    }
  }
}
