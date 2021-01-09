/**
 * cnodes-ui
 *
 * A GUI for cnodes
 * License: MIT
 * Author: Marco Jacovone
 * Year: 2020
 */
import { TextComponent } from "../canvas/text";

/**
 * This is a sample component to draw a simple SVG Text
 */
export class CnodesTitleComponent extends TextComponent {
  constructor(text) {
    super(text);
  }

  /**
   * Update the component element according to x and y local coordinates,
   * This method was overridden in order to register meta info
   */
  updateSVGElement() {
    super.updateSVGElement();

    // Update UI data in meta info
    if (this.parent) {
      if (!this.parent.node.meta) {
        this.parent.node.meta = {};
      }
      this.parent.node.meta.titlePos = {
        x: this.pos.x,
        y: this.pos.y,
      };
    }
  }
}
