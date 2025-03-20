//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target, candidates) => {
  
  const rearranger = (word) => [...word.toLowerCase()].sort().join('');
  
  return candidates.filter((candidate) => candidate.toLowerCase() !== target.toLowerCase() 
                                          && rearranger(candidate) === rearranger(target));
};
