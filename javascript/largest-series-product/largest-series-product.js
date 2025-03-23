//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (input, span) => {

  if (span > input.length || input.length === 0) throw new Error('span must be smaller than string length');
  if (span < 0) throw new Error('span must not be negative');
  if (/\D/.test(input)) throw new Error('digits input must only contain digits');

  const inputToArrayOfNumbers = (input) => [...input].map(Number);

  const splitArrayOfNumbersBySpan = (array, span) => Array.from({ length: array.length - span + 1 }, (_, index) => array.slice(index,index+span));

  const productsOfArrays = (array) => {
    return array.map((innerArray) => innerArray.reduce((acc, num) => acc * num, 1));
  };

  const findLargestProduct = (array) => Math.max(...array);

  const pipe = (...fns) => (input) => fns.reduce((acc, fn) => fn(acc), input);

  const process = pipe (
    inputToArrayOfNumbers,
    (arr) => splitArrayOfNumbersBySpan(arr, span),
    productsOfArrays,
    findLargestProduct
  );
  
  return process(input);
};