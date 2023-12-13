/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;

  let lowerCaseStr1 = str1.toLowerCase();
  let lowerCaseStr2 = str2.toLowerCase();
  let str2Remaining = lowerCaseStr2;
  for (let i = 0; i < lowerCaseStr1.length; i++) {
    if (str2Remaining.includes(lowerCaseStr1[i])) {
      str2Remaining = str2Remaining.split(lowerCaseStr1[i]).join("");
    }
  }

  return str2Remaining === "";
}

module.exports = isAnagram;
