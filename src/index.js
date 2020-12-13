import { Canvas } from "./svg_canvas/canvas";
import { Component, TestComponent, TestComponent2 } from "./svg_canvas/component";

export function canvas(elId) {
  let el = document.getElementById(elId);
  if(!el) {
    console.log(`No element with id ${elId}`)
  } else {
    let canvas = new Canvas(el);


    for(let i=0; i< 1000; i++) {

      let x = Math.random() * 20000;
      let y = Math.random() * 20000;

      let comp2 = new TestComponent2();
      comp2.x = x;
      comp2.y = y;
      canvas.addComponent(comp2);

      x = Math.random() * 20000;
      y = Math.random() * 20000;

      comp2 = new TestComponent();
      comp2.x = x;
      comp2.y = y;
      canvas.addComponent(comp2);


    }



    





  }
};
