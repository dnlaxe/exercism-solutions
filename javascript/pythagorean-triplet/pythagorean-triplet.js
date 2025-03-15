//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function triplets({ minFactor = 1, maxFactor, sum }) {

  let triplets = [];
  
  for (let c = (maxFactor || sum); c >= minFactor; c--) {
    for (let a = minFactor; a <= (maxFactor || sum); a++) {
      let b = sum - (c + a);
      if (a > b) break;
      (a ** 2 + b ** 2 === c ** 2) && triplets.push(new Triplet(a, b, c));
    }
  }

  return triplets;
}

class Triplet {
  constructor(a, b, c) {
    Object.assign(this, {a, b, c});
  }

  toArray = () => [this.a, this.b, this.c];
}
