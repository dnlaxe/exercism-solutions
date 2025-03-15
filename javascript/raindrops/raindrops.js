//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  let string = "";
  if (number % 3 === 0) string += "Pling";
  if (number % 5 === 0) string += "Plang";
  if (number % 7 === 0) string += "Plong";
  return !string ? String(number) : string;
};
