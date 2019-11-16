// Check if a word is a palindrome (a sequence of characters which reads
// the same backward as forward, like the word “redivider”).

const isPalindrome = word => {
  let wordLowCase = word.toLowerCase();
  let wordLength = word.length;
  for (let i = 0; i < wordLength / 2; i++) {
    if (wordLowCase[i] === wordLowCase[wordLength - 1 - i]) {
      return true;
    }
  }
  return false;
};

console.log(isPalindrome("redivider"));

// return Array.from(word).toString() === Array.from(word).reverse().toString()
