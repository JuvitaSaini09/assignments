/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let strArr = str.toLowerCase().split("");
  let countOfVowels = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (
      strArr[i] === "a" ||
      strArr[i] === "e" ||
      strArr[i] === "i" ||
      strArr[i] === "o" ||
      strArr[i] === "u"
    )
      countOfVowels++;
  }
  return countOfVowels;
}

module.exports = countVowels;