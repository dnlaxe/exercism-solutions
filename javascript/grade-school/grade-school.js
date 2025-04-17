//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this._grades = new Map();
    this._studentRegistry = new Map();
  }

  add(name, grade) {
    if (this._studentRegistry.has(name)) {
      this._studentRegistry.set(name, null);
      return;
    }
    this._studentRegistry.set(name, grade);
  }

  grade(grade) {
    // Filter valid students who belong to this grade
    const studentsInGrade = [];

    for (const [name, studentGrade] of this._studentRegistry.entries()) {
      if (studentGrade === grade) {
        studentsInGrade.push(name);
      }
    }
    return studentsInGrade.sort();
  }

  roster() {
    const rosterMap = {};

    for (const [name, grade] of this._studentRegistry.entries()) {
      if (grade === null) continue;
      if (!rosterMap[grade]) {
        rosterMap[grade] = [];
      }
      rosterMap[grade].push(name);
    }
    
    const sortedRoster = {};
    for (const grade of Object.keys(rosterMap).map(Number).sort((a, b) => a - b)) {
      sortedRoster[grade] = rosterMap[grade].sort();
    }
    return sortedRoster;
  }
}

