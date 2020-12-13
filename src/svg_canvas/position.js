export class Position {
  #x = 0;
  #y = 0;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  get x() {
    return this.#x;
  }

  set x(val) {
    this.#x = val;
  }

  get y() {
    return this.#y;
  }

  set y(val) {
    this.#y = val;
  }

  add(pos) {
    return new Position(this.#x + pos.x, this.#y + pos.y);
  }

  sub(pos) {
    return new Position(this.#x - pos.x, this.#y - pos.y);
  }
}
