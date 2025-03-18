//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {

  #key
  
  constructor(key) {
    this.#key = key || this.#generateKey();
    this.keyAsShifts = [...this.#key].map((letter) => this.#letterToNumber(letter) - 1);
  }

  encode = (plainText) =>
    [...plainText].map((letter, index) =>
        this.#numberToLetter(
        (this.#letterToNumber(letter) + this.keyAsShifts[index % this.keyAsShifts.length] + 26) % 26 || 26))
        .join('');

  decode = (encodedText) =>
    [...encodedText].map((letter, index) => 
        this.#numberToLetter(
        (this.#letterToNumber(letter) - this.keyAsShifts[index % this.keyAsShifts.length] + 26) % 26 || 26))
        .join('');
   
  get key() {
    return this.#key;
  }

  #generateKey = () => Array.from({length:100}, () => this.#numberToLetter((Math.floor(Math.random() * 26) + 1))).join('');

  #letterToNumber = (letter) => letter.toLowerCase().charCodeAt(0) - 96;

  #numberToLetter = (number) => String.fromCharCode(number + 96);
}
