//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list) {
    this.list = list;
    this.length = list.length;
  }
  compare(otherList) {
    if (this.list.every((value, index) => value === otherList.list[index])) return 'EQUAL';

   
  }
  
  arrayOfIndices (A, B) {
    A.reduce((acc, val, index) => val === B[0] ? [...acc, index] : acc, []);
  }
  

}

const listOne = new List([1, 2, 3]);
const listTwo = new List([1, 2, 3]);

console.log(arrayOfIndices(listOne, listTwo));

console.log(listOne.compare(listTwo));