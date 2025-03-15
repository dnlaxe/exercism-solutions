//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (string, shift) => {
  const lowerCase = [...'abcdefghijklmnopqrstuvwxyz'];
  const upperCase = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

  const rotatedLowerCase = [...lowerCase.slice(shift), ...lowerCase.slice(0, shift)];
  const rotatedUpperCase = [...upperCase.slice(shift), ...upperCase.slice(0, shift)];
  
  return [...string]
    .map((letter) => {
        return lowerCase.includes(letter) ? rotatedLowerCase[lowerCase.indexOf(letter)]
             : upperCase.includes(letter) ? rotatedUpperCase[upperCase.indexOf(letter)] : letter;
    }).join("");
};