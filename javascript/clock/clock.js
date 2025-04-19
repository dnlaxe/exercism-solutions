//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour = 0, minutes = 0) {
    this.totalMinutes = (hour * 60) + minutes;
  }

  toString() {
    return `${String((((Math.floor(this.totalMinutes / 60))%24)+24)%24).padStart(2, '0')}:${String(((this.totalMinutes % 60)+60)%60).padStart(2, '0')}`;
  }

  plus(minutes) {
    this.totalMinutes += minutes;
    return this;
  }

  minus(minutes) {
    this.totalMinutes -= minutes;
    return this;
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }
}