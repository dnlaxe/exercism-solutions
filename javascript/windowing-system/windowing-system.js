// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function move (newX, newY) {
  this.x = newX;
  this.y = newY;
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size;
    this.position = new Position;
  }

  resize(newSize) {
    this.size.width = newSize.width <= 1 ? 1 : newSize.width > this.screenSize.width - this.position.x ? this.screenSize.width - this.position.x : newSize.width;
    this.size.height = newSize.height <= 1 ? 1 : newSize.height > this.screenSize.height - this.position.y ? this.screenSize.height - this.position.y : newSize.height;
  }

  move(newPosition) {
    this.position.x = newPosition.x < 0 ? 0 : newPosition.x > this.screenSize.width - this.size.width ? this.screenSize.width - this.size.width : newPosition.x;
    this.position.y = newPosition.y < 0 ? 0 : newPosition.y > this.screenSize.height - this.size.height ? this.screenSize.height - this.size.height : newPosition.y;
  }
}

export function changeWindow(programWindow) {
    const newSize = new Size(400, 300);
    const newPosition = new Position(100, 150);

    programWindow.resize(newSize);
    programWindow.move(newPosition);

    return programWindow;
  }