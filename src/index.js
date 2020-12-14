import { Canvas } from "./svg_canvas/canvas";
import {
  Component,
  TestComponent,
  TestComponent2,
} from "./svg_canvas/component";
import { TextComponent } from "./svg_canvas/text";
import { HTMLComponent } from "./svg_canvas/html";
import { Position } from "./svg_canvas/position";

let can;

export function fill() {
  can.clear();
  for (let i = 0; i < 100; i++) {
    let x = Math.random() * 8000;
    let y = Math.random() * 8000;

    let comp3 = new HTMLComponent(
      `<div 
        style='border: 5px solid orange;border-radius:20px;
        top:0;left:0;right:0;bottom:0;position:absolute;
        background-color: lightyellow;
        display: flex;
        flex-flow: column;
        padding:5px;user-select:none'>

        <div style="display: flex; flex-flow: row">
          <div style="flex: 1 1 auto"></div>
          <div style="font-size: 24px; font-weight: bold">Add</div>
          <div style="flex: 1 1 auto"></div>
        </div>



      </div>`,
      200,
      300
    );
    comp3.moveable = true;
    comp3.pos = new Position(x, y);
    can.addComponent(comp3);
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
