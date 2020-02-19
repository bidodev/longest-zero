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
