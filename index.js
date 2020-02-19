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

console.log(longestZero("01100001011000"));
console.log(longestZero("1001001000"));
console.log(longestZero("11111"));
