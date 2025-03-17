//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (input) => {
  const brackets = [...input.match(/[{}()\[\]]/g) || []];
  const bracketMap = { '(': 1, '{': 2, '[': 3, ')': 4, '}': 5, ']': 6 };
  const bracketsAsNumbers = brackets.map(bracket => bracketMap[bracket]);

  return bracketsAsNumbers.reduce((acc, num) => {
    if (!acc) return false;
    if (num <= 3) return [...acc, num]; 
    return acc.pop() + 3 === num ? acc : false;
  }, []).length === 0;
};
