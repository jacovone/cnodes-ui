import { Component } from "../canvas/component";

export class IOConnection extends Connection {
  constructor(source, target, canvas) {
    super(source, target);
    super.setup();
    canvas.addConnection(this);

    // CONNETTI ORA I SOCKET DI CNODES
  }

  createElement() {
    let nodeEl = document.createElementNS("http://www.w3.org/2000/svg", "g");
    // CREA LA CONNESSIONE SVG
  }
}
