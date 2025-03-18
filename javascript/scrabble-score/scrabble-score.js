//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (word) => 
  [...word.toUpperCase()].reduce((acc, letter) => acc + (
    new Map(
      [, 'AEIOULNRST', 'DG', 'BCMP', 'FHVWY', 'K', , , 'JX', , 'QZ']
      .flatMap((letters, points) => letters ? [...letters].map(letter => [letter, points]) : [])
      ).get(letter)), 0);
