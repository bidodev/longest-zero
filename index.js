const longestZero = (number) => {
  array = number.split("1");
  return array.sort((a, b) => b.length - a.length)[0];
};

console.log(longestZero("01100001011000"));
console.log(longestZero("100100100"));
console.log(longestZero("11111"));
