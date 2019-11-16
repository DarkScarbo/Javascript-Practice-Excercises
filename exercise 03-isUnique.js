// Implement an algorithm to determine if a string has all unique characters.
// What if you can't use additional data structures?

// 1. Using an Array.

const hasUniqueCharsArray = string => {
  let charSet = [];
  for (let i = 0; i < string.length; i++) {
    let val = string.charAt(i);
    if (charSet.includes(val)) {
      return false;
    } else {
      charSet.push(val);
    }
  }
  return true;
};

console.log(hasUniqueCharsArray("qwerty"));
``;
// 2. Using an Object.

const hasUniqueCharsHash = string => {
  let charSet = {};
  for (let i = 0; i < string.length; i++) {
    let val = string.charAt(i);
    if (charSet[val] === true) {
      return false;
    } else {
      charSet[val] = true;
    }
  }
  return true;
};

console.log(hasUniqueCharsHash("qwerty"));

const hasUniqueCharsLoops = string => {
  for (let x = 0; x < string.length - 1; x++) {
    for (let y = 1; y < string.length; y++) {
      if (string.charAt(x) === string.charAt(y)) {
        return false;
      } else {
        return true;
      }
    }
  }
};

console.log(hasUniqueCharsLoops("qwerty"));
