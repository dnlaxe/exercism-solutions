//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const spiralMatrix = (number) => {
  const matrix = Array.from({ length : number }, () => Array(number).fill(0));
  
  let top = 0;
  let bottom = number - 1;
  let right = number - 1;
  let left = 0;
  let value = 1;

  while (value <= number * number) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = value++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = value++;
    } 
    right--;

    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = value++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = value++;
    }
    left++;
  }
  return matrix;
};
