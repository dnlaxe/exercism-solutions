//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {

  const theLongestString = input.reduce((max, string) => Math.max(max, string.length), 0);
  const answer = Array.from({length: theLongestString}, (_, i) => input.map((word) => word[i] || ' '));

  let threshold = 0;
  for (let c = input.length - 1; c >= 0; c--) {
    threshold = Math.max(threshold, input[c].length);
    if (threshold === theLongestString) break;
    answer.forEach((row, index) => index >= threshold && row.pop());
  } 
    return answer.map((row)=> row.join(''));
};