//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (question) => {
  question = question.slice(8).slice(0, -1);

  // empty array
  if (question.length === 0) throw new Error('Syntax error');
  
  // a single number
  if (!isNaN(question)) return Number(question);
  
  // invalid words
  const symbols = new Set(['plus', 'minus', 'divided', 'multiplied', 'by']);
  question.split(' ').forEach((value, index) => {
    if (isNaN(value) && !symbols.has(value)) throw new Error('Unknown operation');
  });
  
  // array: number symbol number etc
  let matches = question.match(/(-?\d+|plus|minus|divided by|multiplied by)/g);
  if (matches.length % 2 === 0) throw new Error('Syntax error')
  if (matches.some((val, i) => (i % 2 === 0 && isNaN(Number(val)) || i % 2 === 1 && !isNaN(Number(val))))) throw new Error('Syntax error');
  
  return matches.reduce((acc, num, index) => {
    if (num === 'plus') return acc + Number(matches[index + 1]);
    if (num === 'minus') return acc - Number(matches[index + 1]);
    if (num === 'divided by') return acc / Number(matches[index + 1]);
    if (num === 'multiplied by') return acc * Number(matches[index + 1]);
    return acc;
  }, Number(matches[0]));
}



  

