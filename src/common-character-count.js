const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let obj = {};

  for (let el of s1) {
    if (obj[el]) {
      obj[el] += 1;
    } else {
      obj[el] = 1;
    }
  }

  let newObj = {...obj};

  for (let el of s2) {
    if (newObj[el]) {
      newObj[el] -= 1;
    }
  }

  let count = 0;

  for (let el of Object.keys(obj)) {
    count += obj[el] - newObj[el];
  }

  return count
}

module.exports = {
  getCommonCharacterCount
};
