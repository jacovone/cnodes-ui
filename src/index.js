import { Canvas } from "./svg_canvas/canvas";
import {
  Component,
  TestComponent,
  TestComponent2,
} from "./svg_canvas/component";
import { Position } from "./svg_canvas/position";

let can;

export function fill() {
  can.clear();
  for (let i = 0; i < 1000; i++) {
    let x = Math.random() * 40000;
    let y = Math.random() * 20000;

    let comp = new TestComponent2();
    comp.pos = new Position(x, y);
    can.addComponent(comp);

    let comp2 = new TestComponent();
    // comp2.moveable = false;

    comp2.pos = new Position(200, 200);
    comp.addComponent(comp2);

    let comp3 = new TestComponent();
    comp3.moveable = false;

    comp3.pos = new Position(200, 200);
    comp2.addComponent(comp3);
  }
}

export function canvas(elId) {
  let el = document.getElementById(elId);
  if (!el) {
    console.log(`No element with id '${elId}'`);
  } else {
    can = new Canvas(el);
    fill();
  }
}
