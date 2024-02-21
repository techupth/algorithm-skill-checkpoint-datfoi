// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  const countCharacter = {};
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    if (countCharacter[character] === undefined) {
      countCharacter[character] = 1;
    } else {
      countCharacter[character]++;
    }
  }

  for (const character in countCharacter) {
    if (countCharacter[character] > maxCount) {
      maxChar = character;
      maxCount = countCharacter;
    }
  }

  return maxChar;
};

console.log(getMaxCharacters("abcccccccd"));
console.log(getMaxCharacters("apple 1231111"));
