//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (number) => {

  const showError = (problem, message) => { if (problem) throw new Error(message);}
  const numberToWord = (n) => n === '0' ? 'zero' : 'one';

  showError(number.match(/[,\/#!$%\^&\*;:{}=\_`~]/), 'Punctuations not permitted')
  showError(number.match(/[a-zA-Z]/), 'Letters not permitted');
  
  let num = number.match(/[0-9]/g).join('');
  
  showError(num.length > 11, 'More than 11 digits');
  showError(![10, 11].includes(num.length), 'Incorrect number of digits');

  num.length === 11 && !showError(num[0] !== '1', '11 digits must start with 1') && (num = num.slice(1));
  
  showError(/[01]/.test(num[0]), `Area code cannot start with ${numberToWord(num[0])}`) 
  showError(/[01]/.test(num[3]), `Exchange code cannot start with ${numberToWord(num[3])}`) 
  
  return num;
};
