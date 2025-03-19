//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (string) => {
  const numbers = string.match(/[0-9]/g)?.map(Number) || [];
  if (numbers.length <= 1 || /[^0-9\s]/.test(string)) return false;

  return numbers
    .reverse()
    .map((num, i) => (i % 2 ? (num * 2 > 9 ? num * 2 - 9 : num * 2) : num))
    .reduce((sum, num) => sum + num, 0) % 10 === 0;
};