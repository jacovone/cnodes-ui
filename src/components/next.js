import { SocketComponent } from "../canvas/socket";
import { Theme } from "./theme";

export class NextSocketComponent extends SocketComponent {
  constructor(socket) {
    super(socket);
    super.setup();
  }

  createElement() {
    let symbolElem = document.createElementNS("http://www.w3.org/2000/svg", "path");

    symbolElem.setAttribute(
      "d",
      `
      M -7 -8
      L 7 -8
      L 12 0
      L 7 8
      L -7 8
      Z
      `
    );
    symbolElem.setAttribute("stroke", Theme.current.NODE_PREV_NEXT_STROKE_COLOR);
    symbolElem.setAttribute("stroke-width", Theme.current.NODE_PREV_NEXT_STROKE_WIDTH);
    symbolElem.setAttribute("fill", Theme.current.NODE_PREV_NEXT_FILL_COLOR);

    let labelElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    labelElem.style = `
      font: ${Theme.current.NODE_PREV_NEXT_NAME_FONT}; 
      color: ${Theme.current.NODE_PREV_NEXT_NAME_COLOR}; 
      text-align: right;
      width: ${Theme.current.NODE_WIDTH / 2 - 15}px;
      height: 30px;
      line-height: 30px;
      user-select: none;
      `;

    labelElem.innerHTML = `${this.socket.name}`;

    labelElem.setAttribute("x", 0);
    labelElem.setAttribute("y", 0);
    labelElem.setAttribute("transform", `translate(${-Theme.current.NODE_WIDTH / 2}, ${-15})`);
    labelElem.setAttribute("width", Theme.current.NODE_WIDTH / 2 - 15);
    labelElem.setAttribute("height", 30);

    let prevElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
    prevElem.setAttribute("x", 0);
    prevElem.setAttribute("y", 0);
    prevElem.appendChild(symbolElem);
    prevElem.appendChild(labelElem);

    return prevElem;
  }
}
