/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020/2021
 */
// TEST
import { Canvas } from './canvas/canvas';
import { Component } from './canvas/component';
import { Position } from './canvas/position';
import { Menu, MenuItem } from './canvas/menu';
import { CnodeComponent } from './components/cnode';
import { CnodeProgramComponent } from './components/nodes/cnodeprogram';
import { Theme, defaultLight } from './components/theme';
import { CnodesCanvas } from './components/cnodescanvas';
import { Env } from '@marco.jacovone/cnodes/cnodes';
import { Program } from '@marco.jacovone/cnodes/lib/core/program';
import { FOBreak } from '@marco.jacovone/cnodes/lib/nodes/object/fobreak';
import { CnodeBreakComponent } from './components/nodes/cnodebreak';

export { Canvas, Component, CnodeComponent, Position, Theme, defaultLight, CnodesCanvas, CnodeProgramComponent, Menu, MenuItem };

export * from '@marco.jacovone/cnodes/cnodes';

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
