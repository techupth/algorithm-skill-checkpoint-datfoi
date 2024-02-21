// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
  return str === str.split("").reverse().join("");
};

const result1 = palindrome("abba");
const result2 = palindrome("abcdefg");
const result3 = palindrome("madam.");

console.log(result1);
console.log(result2);
console.log(result3);
