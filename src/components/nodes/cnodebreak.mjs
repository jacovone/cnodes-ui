/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020/2021
 */

import { Theme } from "../../index.mjs";
import { MenuItem } from "../../canvas/menu.mjs";
import { CnodeComponent } from "../cnode.mjs";

export class CnodeBreakComponent extends CnodeComponent {
  // Factory function
  static instance = (node, canvas) => new CnodeBreakComponent(node, canvas);

  /**
   * Maintains a copy of original output array, so we
   * can restore/reset on user request
   */
  #originalOutputs = null;

  constructor(node, canvas) {
    super(node, canvas);

    // Save original outputs
    this.#originalOutputs = [...node.outputs];
  }

  /**
   * Returns the array of context menu items. This node gets
   * the base node items, and add the action of delete unconnected outputs
   * and reset the output sockets
   */
  getContextMenuItems() {
    let items = super.getContextMenuItems() ?? [];

    items.unshift(
      new MenuItem(
        `<tspan alignment-baseline="middle" style="${Theme.current.MENU_SPECIAL_ITEM_STYLE}">Remove unused</tspan>`,
        () => {
          for (let o of this.node.outputs) {
            if (
              this.node.canAddOutput &&
              this.node.canRemoveOutput(o) &&
              o.peers.length === 0
            ) {
              this.node.removeOutput(o);
              o.__comp.destroy();
            }
          }
          this.updateSVGElement();
        },
        "remove unused"
      ),
      new MenuItem(
        `<tspan alignment-baseline="middle" style="font: ${Theme.current.MENU_SPECIAL_ITEM_STYLE}">Reset outputs</tspan>`,
        () => {
          for (let o of this.#originalOutputs) {
            if (!this.node.outputs.includes(o)) {
              this.node.addOutput(o);
            }
          }
          this.updateSVGElement();
        },
        "reset outputs"
      )
    );

    return items.length ? items : null;
  }
}
