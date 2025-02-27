// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  constructor() {
    this._name = this.addName();
  }

  get name() {
    return this._name;
  }

  addName() {
    let newName = this.generateName();
    while (Robot.takenNames.has(newName)) {
      newName = this.generateName();
    }
    Robot.takenNames.add(newName);
    return newName;
  }

  reset() {
    this._name = this.addName();
  }

  generateName() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random() * 26)] +
           letters[Math.floor(Math.random() * 26)] +
           String(Math.floor(Math.random() * 900) + 100);
  }
}

Robot.takenNames = new Set();
Robot.releaseNames = () => Robot.takenNames = new Set();;
