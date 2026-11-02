const { NotImplementedError } = require("../lib");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const blockedColumns = new Set();

  for (const row of matrix) {
    for (const [column, el] of row.entries()) {
      if (blockedColumns.has(column)) {
        continue;
      }

      if (el === 0) {
        blockedColumns.add(column);
      } else {
        sum += el;
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
