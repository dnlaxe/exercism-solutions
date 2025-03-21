//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numberOfRows) => {
  
  const factorial = (x) => Array.from({length:x}, (_,i) => i + 1).reduce((acc, num) => acc * num, 1);
  const binomial = (n, k) => n !== 0 ? factorial(n) / (factorial(k) * factorial(n - k)) : 1;
  
  return Array.from({length: numberOfRows}, (_, r) => Array.from({length: r + 1}, (_, c) => binomial(r, c)));

};
