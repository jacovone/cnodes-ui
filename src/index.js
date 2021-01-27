/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020/2021\
 */

import { Canvas } from "./canvas/canvas";
import { Component } from "./canvas/component";
import { Connection } from "./canvas/connection";
import { Menu, MenuItem } from "./canvas/menu";
import { Position } from "./canvas/position";
import { SocketComponent } from "./canvas/socket";

import { CnodeComponent } from "./components/cnode";
import { CnodesCanvas } from "./components/cnodescanvas";
import { CnodesConnection } from "./components/cnodesconnection";
import { CnodesEditableTextComponent } from "./components/cnodeseditabletext";
import { CnodesMenu } from "./components/cnodesmenu";
import { CnodesSocketComponent } from "./components/cnodessocket";
import { InputSocketComponent } from "./components/input";
import { OutputSocketComponent } from "./components/output";
import { PrevSocketComponent } from "./components/prev";
import { NextSocketComponent } from "./components/next";
import { Theme, defaultLight } from "./components/theme";

import { CnodeProgramComponent } from "./components/nodes/cnodeprogram";
import { CnodeBreakComponent } from "./components/nodes/cnodebreak";
import { IOConnection } from "./connections/ioconnection";
import { PrevNextConnection } from "./connections/prevnextconnection";

export {
  Canvas,
  Component,
  Connection,
  Menu,
  MenuItem,
  Position,
  SocketComponent,
  CnodeComponent,
  CnodesCanvas,
  CnodesConnection,
  CnodesEditableTextComponent,
  CnodesMenu,
  CnodesSocketComponent,
  InputSocketComponent,
  OutputSocketComponent,
  PrevSocketComponent,
  NextSocketComponent,
  Theme,
  defaultLight,
  CnodeProgramComponent,
  CnodeBreakComponent,
  IOConnection,
  PrevNextConnection,
};

import { Program, FOBreak, Env } from "@marco.jacovone/cnodes/index";
export * from "@marco.jacovone/cnodes/index";

/**
 * This is the main entrypoint function. You can pass an ID of a
 * DOM element by parameter (tipically a DIV element).
 * For example, having a simple DOM element like
 *
 * <div id="mycanvas" class="fullscreen"></div>
 *
 * You can do
 *
 * <script>
 *  let canvas = cnui.canvas('mycanvas');
 *  let prg = cnui.Env.import(JSON.parse('...'));
 *  canvas.program = prg;
 * </script>
 *
 * @param {string} elId The id of the DOM element you want to become a CNODES-UI canvas
 */
export function canvas(elId) {
  let el = document.getElementById(elId);
  if (!el) {
    console.log(`No element with id '${elId}'`);
    return null;
  }
  Env.init();
  return new CnodesCanvas(el);
}

// register core custom nodes
CnodesCanvas.registerNodeUI(new Program(), CnodeProgramComponent.instance);
CnodesCanvas.registerNodeUI(new FOBreak(), CnodeBreakComponent.instance);
