//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (letter) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const index = alphabet.indexOf(letter);
  const range = alphabet.slice(0, index + 1);

  const topRight = [...range].map((_, index) => 
         Array.from({length:range.length}, (_,a) => index === a ? range[a] : ' '));

  const bottomRight = topRight.slice().reverse().slice(1)

  const right = [...topRight, ...bottomRight]

  const left = right.map(row => [...row].reverse().slice(0, -1));

  const diamond = left.map((row, index) => row.concat(right[index]).join(''))

  return diamond;
}