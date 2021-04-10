/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrN = n.toString().split('');
  const min = arrN.reduce((prev, item) => (item < prev ? item : prev), arrN[0]);
  arrN.splice(arrN.lastIndexOf(min), 1);
  const res = +arrN.join('');
  return res;
}

module.exports = deleteDigit;
