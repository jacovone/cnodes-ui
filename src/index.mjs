/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020/2021\
 */

import { Canvas } from "./canvas/canvas.mjs";
import { Component } from "./canvas/component.mjs";
import { Connection } from "./canvas/connection.mjs";
import { Menu, MenuItem } from "./canvas/menu.mjs";
import { Position } from "./canvas/position.mjs";
import { SocketComponent } from "./canvas/socket.mjs";

import { CnodeComponent } from "./components/cnode.mjs";
import { CnodesCanvas } from "./components/cnodescanvas.mjs";
import { CnodesConnection } from "./components/cnodesconnection.mjs";
import { CnodesEditableTextComponent } from "./components/cnodeseditabletext.mjs";
import { CnodesMenu } from "./components/cnodesmenu.mjs";
import { CnodesSocketComponent } from "./components/cnodessocket.mjs";
import { InputSocketComponent } from "./components/input.mjs";
import { OutputSocketComponent } from "./components/output.mjs";
import { PrevSocketComponent } from "./components/prev.mjs";
import { NextSocketComponent } from "./components/next.mjs";
import { Theme, defaultLight, defaultDark } from "./components/theme.mjs";

import { CnodeProgramComponent } from "./components/nodes/cnodeprogram.mjs";
import { CnodeBreakComponent } from "./components/nodes/cnodebreak.mjs";
import { IOConnection } from "./connections/ioconnection.mjs";
import { PrevNextConnection } from "./connections/prevnextconnection.mjs";

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
  defaultDark,
  CnodeProgramComponent,
  CnodeBreakComponent,
  IOConnection,
  PrevNextConnection,
};

import { Program, FOBreak, Env } from "@marco.jacovone/cnodes";
export * from "@marco.jacovone/cnodes";

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
  return new CnodesCanvas(el);
}

// Register core custom nodes
CnodesCanvas.registerNodeUI(new Program(), CnodeProgramComponent.instance);
CnodesCanvas.registerNodeUI(new FOBreak(), CnodeBreakComponent.instance);
