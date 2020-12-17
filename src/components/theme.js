export class Theme {
  constructor() {}

  get NODE_WIDTH() {
    return 200;
  }

  get NODE_BORDER_RADIUS() {
    return 15;
  }
  get NODE_FILL_COLOR() {
    return "#FAD7A0";
  }
  get NODE_FUNCTIONAL_FILL_COLOR() {
    return "#C5F0FF";
  }
  get NODE_STROKE_COLOR() {
    return "#FAD7A0";
  }
  get NODE_FUNCTIONAL_STROKE_COLOR() {
    return "#C5F0FF";
  }
  get NODE_STROKE_WIDTH() {
    return 3;
  }

  get NODE_TITLE_COLOR() {
    return "brown";
  }
  get NODE_FUNCTIONAL_TITLE_COLOR() {
    return "069DD1";
  }
  get NODE_TITLE_FONT() {
    return "bold 18px verdana";
  }

  get NODE_SYMBOL_STROKE_WIDTH() {
    return 3;
  }
  get NODE_SYMBOL_STROKE_COLOR() {
    return "#FEF9E7";
  }
  get NODE_SYMBOL_FILL_COLOR() {
    return "#FEF9E7";
  }

  get NODE_PREV_NEXT_STROKE_WIDTH() {
    return 2;
  }
  get NODE_PREV_NEXT_STROKE_COLOR() {
    return "#31A200";
  }
  get NODE_PREV_NEXT_FILL_COLOR() {
    return "#31A200";
  }
  get NODE_PREV_NEXT_NAME_FONT() {
    return "bold 11px verdana";
  }
  get NODE_PREV_NEXT_NAME_COLOR() {
    return "bold 11px black";
  }

  get NODE_IO_STROKE_WIDTH() {
    return 2;
  }
  get NODE_IO_STROKE_COLOR() {
    return "#008EBF";
  }
  get NODE_IO_FILL_COLOR() {
    return "#008EBF";
  }
  get NODE_IO_NAME_FONT() {
    return "bold 11px verdana";
  }
  get NODE_IO_NAME_COLOR() {
    return "bold 11px black";
  }

  static current = new Theme();
}
