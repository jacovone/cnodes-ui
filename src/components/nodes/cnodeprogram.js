/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */

import { Program } from "@marco.jacovone/cnodes/lib/core/program";
import { Theme } from "../..";
import { MenuItem } from "../../canvas/menu";
import { CnodeComponent } from "../cnode";

export class CnodeProgramComponent extends CnodeComponent {
  // Factory function
  static instance = (node, canvas) => new CnodeProgramComponent(node, canvas);

  constructor(node, canvas) {
    super(node, canvas);
  }

  /**
   * Returns the array of context menu items. This node gets
   * the base node items, and add the action of edit internal program
   */
  getContextMenuItems() {
    let items = super.getContextMenuItems() ?? [];

    items.unshift(
      new MenuItem(
        `<tspan alignment-baseline="middle" style="font: ${Theme.current.MENU_SPECIAL_ITEM_FONT}">Edit...</tspan>`,
        () => {
          this.canvas.pushProgram(this.node);
        }
      )
    );

    return items.length ? items : null;
  }
}
