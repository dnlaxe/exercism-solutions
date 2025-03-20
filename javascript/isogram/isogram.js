//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
  
  const cleanedWord = word ? [...word.toLowerCase().match(/[a-z]/g)] : [];
  
  return cleanedWord ? new Set(cleanedWord).size === cleanedWord.length : false;
};
