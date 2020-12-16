import { SocketComponent } from "../canvas/socket";
import { Theme } from "./theme";

export class OutputSocketComponent extends SocketComponent {
  constructor(socket) {
    super(socket);
    super.setup();
  }

  createElement() {
    let symbolElem = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    symbolElem.setAttribute("cx", 0);
    symbolElem.setAttribute("cy", 0);
    symbolElem.setAttribute("r", 10);
    symbolElem.setAttribute("stroke-width", Theme.current.NODE_IO_STROKE_WIDTH);
    symbolElem.setAttribute("stroke", Theme.current.NODE_IO_STROKE_COLOR);
    symbolElem.setAttribute("fill", Theme.current.NODE_IO_FILL_COLOR);

    let labelElem = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    labelElem.style = `
      font: ${Theme.current.NODE_IO_NAME_FONT}; 
      color: ${Theme.current.NODE_IO_NAME_COLOR}; 
      text-align: right;
      width: ${Theme.current.NODE_WIDTH - 30}px;
      height: 30px;
      line-height: 30px;
      user-select: none;
      `;

    labelElem.innerHTML = `${this.socket.name}`;

    labelElem.setAttribute("x", 0);
    labelElem.setAttribute("y", 0);
    labelElem.setAttribute("transform", `translate(${-Theme.current.NODE_WIDTH + 15}, ${-15})`);
    labelElem.setAttribute("width", Theme.current.NODE_WIDTH - 30);
    labelElem.setAttribute("height", 30);

    let outputElem = document.createElementNS("http://www.w3.org/2000/svg", "g");
    outputElem.setAttribute("x", 0);
    outputElem.setAttribute("y", 0);
    outputElem.appendChild(symbolElem);
    outputElem.appendChild(labelElem);

    return outputElem;
  }
}
