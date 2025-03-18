//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (word) => {
  const letterPoints = new Map([
    ...'AEIOULNRST'.split('').map(letter => [letter, 1]),
    ...'DG'.split('').map(letter => [letter, 2]),
    ...'BCMP'.split('').map(letter => [letter, 3]),
    ...'FHVWY'.split('').map(letter => [letter, 4]),
    ...'K'.split('').map(letter => [letter, 5]),
    ...'JX'.split('').map(letter => [letter, 8]),
    ...'QZ'.split('').map(letter => [letter, 10]),
]);
  return [...word.toUpperCase()].reduce((acc, letter) => acc += letterPoints.get(letter),0);
};
