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
export function canvas(elId: string): CnodesCanvas;
import { CnodesCanvas } from "./components/cnodescanvas";
import { Canvas } from "./canvas/canvas";
import { Component } from "./canvas/component";
import { CnodeComponent } from "./components/cnode";
import { Position } from "./canvas/position";
import { Theme } from "./components/theme";
import { defaultLight } from "./components/theme";
import { CnodeProgramComponent } from "./components/nodes/cnodeprogram";
import { Menu } from "./canvas/menu";
import { MenuItem } from "./canvas/menu";
export { Canvas, Component, CnodeComponent, Position, Theme, defaultLight, CnodesCanvas, CnodeProgramComponent, Menu, MenuItem };
