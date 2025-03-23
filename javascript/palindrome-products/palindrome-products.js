//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
  static generate({ minFactor, maxFactor }) {
    if (minFactor > maxFactor) {
      throw new Error("min must be <= max");
    }

    const maxProduct = maxFactor ** 2;
    const minProduct = minFactor ** 2;

    let smallestValue = null;
    let largestValue = null;
    let smallestFactors = [];
    let largestFactors = [];

    const isPalindrome = (n) =>
      n.toString() === [...n.toString()].reverse().join('');

    const findAllFactorPairs = (n, direction) => {
      const pairs = [];
      const [start, end, step] =
        direction === 'asc'
          ? [minFactor, maxFactor, 1]
          : [maxFactor, minFactor, -1];

      for (let i = start; direction === 'asc' ? i <= end : i >= end; i += step) {
        if (n % i === 0) {
          const j = n / i;
          if (j >= minFactor && j <= maxFactor) {
            pairs.push([i, j]);
          }
        }
      }

      if (pairs.length > 0) {
        if (direction === 'asc' && smallestValue === null) {
          smallestValue = n;
          smallestFactors = pairs;
        }
        if (direction === 'desc' && largestValue === null) {
          largestValue = n;
          largestFactors = pairs;
        }
      }
    };

    const findPalindrome = ({ direction }) => {
      const [start, end, step] =
        direction === 'asc'
          ? [minProduct, maxProduct, 1]
          : [maxProduct, minProduct, -1];

      for (let i = start; direction === 'asc' ? i <= end : i >= end; i += step) {
        if (isPalindrome(i)) {
          findAllFactorPairs(i, direction);
          if (
            (direction === 'asc' && smallestValue !== null) ||
            (direction === 'desc' && largestValue !== null)
          ) {
            break;
          }
        }
      }
    };

    findPalindrome({ direction: 'asc' });   // Find smallest
    findPalindrome({ direction: 'desc' });  // Find largest

    return {
      smallest: {
        value: smallestValue,
        factors: smallestFactors,
      },
      largest: {
        value: largestValue,
        factors: largestFactors,
      },
    };
  }
}
