/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
  return remainingTime === null || remainingTime === undefined ? 'You forgot to set the timer.' : remainingTime === 0 ? 'Lasagna is done.' : 'Not done, please wait.';
  
}

export function preparationTime(layers, timePerLayer) {
  if (timePerLayer === null || timePerLayer === undefined) timePerLayer = 2;
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  const quantityNeeded = {
    noodles: 0,
    sauce: 0
  }
  for (let ingredient of layers) {
    if (ingredient === 'noodles') quantityNeeded.noodles += 50;
    if (ingredient === 'sauce') quantityNeeded.sauce += 0.2;
  }
  return quantityNeeded;
  }

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, scalar) {
  return Object.fromEntries(
    Object.entries(recipe).map(([key, value]) => [key, value * (scalar / 2)])
  );
}