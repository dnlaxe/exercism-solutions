//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (forest) => {

const transposedForest = transposeMatrix(forest);

const maxTreeInRow = findExtremeTree(forest, 'max');
const minTreeInCol = findExtremeTree(transposedForest, 'min')

return validTrees(maxTreeInRow, minTreeInCol).map(([row, column]) => ({ row : row, column : column }));;

function getExtremeValue (array, type) {
  return type === 'min' ? Math.min(...array) : Math.max(...array);
}

function transposeMatrix (matrix) {
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

function findExtremeTree (line, extreme) {
  const arrayOfExtremeTrees = [];
  line.forEach((lineOfTrees, lineOfTreesPosition) => {
    const x = getExtremeValue(lineOfTrees, extreme);
    lineOfTrees.forEach((tree, treePosition) => {
      if (tree === x) {
        arrayOfExtremeTrees.push(extreme === 'max' ? [lineOfTreesPosition + 1, treePosition +1] : [treePosition + 1, lineOfTreesPosition + 1]);
      }
    })
  })
  return arrayOfExtremeTrees;
}

function validTrees (maxTreeInRow, minTreeInCol) {
  return maxTreeInRow.filter(tallest => minTreeInCol.some(smallest => tallest[0] === smallest[0] && tallest[1] === smallest[1]))
};
};