/**
 * Longest Sequence of Consecutive Zeroes
 * Write a function that returns the longest sequence of consecutive zeroes in a binary string.
 *
 * Examples
 * longestZero("01100001011000") ➞ "0000"
 * longestZero("100100100") ➞ "00"
 * longestZero("11111") ➞ ""
 * NB. If no zeroes exist in the input, return an empty string.
 */

longestZero = (binaryNumber) => {
  const array = binaryNumber.split("1");

  const result = array.reduce((saver, current) => {
    if (current > saver) {
      saver = current;
    }
    return saver;
  });
  return result;
};

longestZero("01100001011000");
longestZero("1001001000");
longestZero("11111");
