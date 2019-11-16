// Implement a method to perform basic string compression using the counts of repeated characters. For example,
// the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the
// original string, your method should return the original string. You can assume the string has only uppercase
// and lowercase letters.

const compressBad = string => {
  let compressedString = "";
  let countConsecutive = 0;
  for (let i = 0; i < string.length; i++) {
    countConsecutive++;
    if (i + 1 >= string.length || string.charAt(i) != string.charAt(i + 1)) {
      compressedString += string.charAt(i) + countConsecutive;
      countConsecutive = 0;
    }
  }
  return compressedString.length < string.length ? compressedString : string;
};

console.log(compressBad("aabcccccaaa"));

const compress = string => {
  let finalLength = countCompression(string);
  if (finalLength >= string.length) return string;

  let compressedString = "";
  let countConsecutive = 0;
  for (let i = 0; i < string.length; i++) {
    countConsecutive++;
    if (i + 1 >= string.length || string.charAt(i) != string.charAt(i + 1)) {
      compressedString += string.charAt(i) + countConsecutive;
      countConsecutive = 0;
    }
  }
  return compressedString.length < string.length ? compressedString : string;
};

const countCompression = string => {
  let compressedLength = 0;
  let countConsecutive = 0;
  for (let i = 0; i < string.length; i++) {
    if (i + 1 >= string.length || string.charAt(i) != string.charAt(i + 1)) {
      compressedLength += 1 + String.valueOf(countConsecutive).length;
      countConsecutive = 0;
    }
  }
  return compressedLength;
};

console.log(countCompression("aabcccccaaaa"));
