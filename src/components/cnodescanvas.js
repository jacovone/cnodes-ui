import { Canvas } from "../canvas/canvas";
import { Theme } from "./theme";

export class CnodesCanvas extends Canvas {
  constructor(el) {
    super(el);

    let ioArrowMarker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    ioArrowMarker.setAttribute("id", "io-arrow");
    ioArrowMarker.setAttribute("viewBox", "0 0 10 10");
    ioArrowMarker.setAttribute("refX", "7");
    ioArrowMarker.setAttribute("refY", "5");
    ioArrowMarker.setAttribute("markerWidth", "5");
    ioArrowMarker.setAttribute("markerHeight", "5");
    ioArrowMarker.setAttribute("fill", Theme.current.CONNECTION_IO_COLOR);

    ioArrowMarker.setAttribute("orient", "auto-start-reverse");

    let ioArrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    ioArrowPath.setAttribute("d", "M 0 0 L 10 5 L 0 10 Z");
    ioArrowMarker.appendChild(ioArrowPath);

    let prevNextArrowMarker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    prevNextArrowMarker.setAttribute("id", "prevnext-arrow");
    prevNextArrowMarker.setAttribute("viewBox", "0 0 10 10");
    prevNextArrowMarker.setAttribute("refX", "7");
    prevNextArrowMarker.setAttribute("refY", "5");
    prevNextArrowMarker.setAttribute("markerWidth", "5");
    prevNextArrowMarker.setAttribute("markerHeight", "5");
    prevNextArrowMarker.setAttribute("fill", Theme.current.CONNECTION_PREV_NEXT_COLOR);

    prevNextArrowMarker.setAttribute("orient", "auto-start-reverse");

    let prevNextArrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    prevNextArrowPath.setAttribute("d", "M 0 0 L 10 5 L 0 10 Z");
    prevNextArrowMarker.appendChild(prevNextArrowPath);
    this.svgEl.appendChild(ioArrowMarker);
    this.svgEl.appendChild(prevNextArrowMarker);
  }
}
