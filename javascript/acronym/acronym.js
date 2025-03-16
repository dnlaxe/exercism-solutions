//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (longName) => {
  return longName
    .replace('-', ' ')
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .split(' ')
    .map((i) => i[0])
    .join('')
    .toUpperCase();
};
