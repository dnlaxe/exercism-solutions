//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (input) => {

  const bracketPairs = new Map([['[', ']'], ['(', ')'], ['{', '}']]);
  const box = [];
  const brackets = [...input.match(/[{}()\[\]]/g) || []];
  
  for (const bracket of brackets) {   
    if (bracketPairs.has(bracket)) {
      box.push(bracket);
    } else if (bracket !== bracketPairs.get(box.pop())) {
      return false;
    }
  }
  return box.length === 0;
  };
