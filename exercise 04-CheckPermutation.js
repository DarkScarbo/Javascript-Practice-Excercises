// Given two words, write a function to check if one is a permutiation of the other.

const checkPermutationArray = (wordOne, wordTwo) => {
  if (wordOne.length !== wordTwo.length) return false;

  let orderedWordOne = wordOne
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  let orderedWordTwo = wordTwo
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  if (orderedWordOne === orderedWordTwo) {
    return true;
  } else {
    return false;
  }
};

// Time complexity: O(nlogn)
console.log(checkPermutationArray("god", "dog"));

const checkPermutationHash = (wordOne, wordTwo) => {
  if (wordOne.length !== wordTwo.length) return false;

  let letters = {},
    length = wordOne.length;

  for (let a = 0; a < length; a++) {
    let x = wordOne.toLowerCase().charAt(a);
    letters[x] = isNaN(letters[x]) ? 1 : letters[x] + 1;
  }

  for (let b = 0; b < length; b++) {
    let y = wordTwo.toLowerCase().charAt(b);
    letters[y]--;
  }

  for (let key in letters) {
    if (letters[key] !== 0) {
      return false;
    }
  }

  return true;
};

//   let wordOneHash = {};
//   let wordTwoHash = {};

//   for (let i = 0; i, wordOne.length; i++) {
//     if (hash[wordOne.charAt(i)]) {
//     }
//   }

// Time complexity: O(n)
console.log(checkPermutationHash("god", "dog"));
