//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldObj) => {
  return Object.fromEntries(
    Object.entries(oldObj).flatMap(([key, value]) => 
      value.map(letter => [letter.toLowerCase(), Number(key)])));
};
