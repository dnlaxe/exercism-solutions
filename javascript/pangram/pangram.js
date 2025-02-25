//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (word) => {
  return new Set(word.replace(/[\d\W_]+/g, '').toLowerCase()).size === 26;
};
