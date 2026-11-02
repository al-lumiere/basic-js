const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr2 = [];

  for (let el of arr) {
    if (el === -1) {
      continue
    }

    arr2.push(el);
  }

  arr2.sort((a, b) => b - a);

  for (let [ind, el] of arr.entries()) {
    if (el === -1) {
      continue
    }

    arr[ind] = arr2[arr2.length - 1];
    arr2.pop();
  }

  return arr
}

module.exports = {
  sortByHeight
};
