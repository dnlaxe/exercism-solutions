// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let count = 0;
  for (const num of stack) {
    if (num === card) count++;
  }
  return count;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let even = 0;
  let odd = 0;
  for (const num of stack) {
    if (num % 2 === 0) even++;
    if (num % 2 != 0) odd++;
  }
  return type ? even : odd;
}
