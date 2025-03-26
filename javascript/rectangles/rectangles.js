//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function count(grid) {
  if (!isValid(grid)) return 0;

  const potentialHorizontalLines = new Map();
  identifyValidTopLinesAndBottomLines(potentialHorizontalLines, grid);

  return checkVerticalLinesAndTally(potentialHorizontalLines, grid);
}

function isValid(grid) {
  return Array.isArray(grid) && grid.length > 0 && !grid.every((n) => n.trim() === '');
};

function identifyValidTopLinesAndBottomLines(potentialHorizontalLines, grid) {
  for (let [row, input] of grid.entries()) {
    for (let [start, char] of [...input].entries()) {
      if (char === '+') {
        for (let end = start + 1; end < input.length; end++) {
          if (input[end] === '+') {
            appendToListInMap(potentialHorizontalLines, String([start, end]), row);
          }
          if (input[end] !== '+' && input[end] !== '-') break;
        }
      }
    }
  }
};

function appendToListInMap(map, key, value) {
  map.set(key, [...(map.get(key) ?? []), value]);
};

function checkVerticalLinesAndTally(potentialHorizontalLines, grid) {
  let tally = 0;

  for (let [line, row] of potentialHorizontalLines) {
    if (row.length < 2) continue;

    const [left, right] = line.split(',').map(Number);

    for (let start of row) {
      for (let currentRow = start + 1; currentRow < row[row.length - 1] + 1; currentRow++) {
        if (grid[currentRow][left] === '+' && grid[currentRow][right] === '+') {
          tally += 1;
          continue;
        }

        if ((grid[currentRow][left] !== '|' && grid[currentRow][left] !== '+') ||
            (grid[currentRow][right] !== '|' && grid[currentRow][right] !== '+')) break;
      }
    }
  }

  return tally;
};
