//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strandA, strandB) => {
  let differences = strandA.length;

  for (let i = strandA.length - 1; i >= 0; i--) { strandA[i] === strandB[i] ? differences-- : null; }
  
  return !strandA && !strandB ? 0 
       : strandA.length === strandB.length ? differences 
       : (() => { throw new Error('strands must be of equal length'); })();
};