/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const modifiedStr = str.replace(/[\W_]/g, "");
  let j = modifiedStr.length - 1;
  for (i = 0; i <= j; i++) {
    if (modifiedStr[i].toLowerCase() != modifiedStr[j].toLowerCase())
      return false;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
