import { Canvas } from "./canvas/canvas";
import { Component } from "./canvas/component";
import { TextComponent } from "./canvas/text";
import { HTMLComponent } from "./canvas/html";
import { CnodeComponent } from "./canvas/cnode";
import { Position } from "./canvas/position";
import { Env } from "@marco.jacovone/cnodes/core/env";

export {
  Canvas,
  Component,
  TextComponent,
  HTMLComponent,
  CnodeComponent,
  Position,
};

export * from "@marco.jacovone/cnodes/cnodes.js";

export function canvas(elId) {
  let el = document.getElementById(elId);
  if (!el) {
    console.log(`No element with id '${elId}'`);
    return null;
  }
  Env.init();
  return new Canvas(el);
}
