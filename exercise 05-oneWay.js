// There are three types of edits that can be performed on strings: insert a character, remove a character,
// or replace a character. Given two  strings, write a function to check if they are one edit or zero edits away.

const oneEdit = (stringOne, stringTwo) => {
  if (stringOne.length == stringTwo.length)
    return oneEditReplace(stringOne, stringTwo);
  if (stringOne.length + 1 == stringTwo.length)
    return oneEditInsert(stringOne, stringTwo);
  if (stringOne.length - 1 == stringTwo.length)
    return oneEditInsert(stringTwo, stringOne);
  return false;
};

const oneEditReplace = (stringOne, stringTwo) => {
  let foundDifference = false;
  for (let i = 0; i < stringOne.length; i++) {
    if (stringOne.charAt(i) != stringTwo.charAt(i)) {
      if (foundDifference) return false;
      foundDifference = true;
    }
  }
  return true;
};

const oneEditInsert = (stringOne, stringTwo) => {
  let indexOne = 0;
  let indexTwo = 0;
  while (indexOne < stringOne.length && indexTwo < stringTwo.length) {
    if (stringOne.charAt(indexOne) != stringTwo.charAt(indexTwo)) {
      if (indexOne != indexTwo) {
        return false;
      }
      indexTwo++;
    } else {
      indexOne++;
      indexTwo++;
    }
  }
  return true;
};

console.log(oneEdit("aco", "aclo"));

const oneEditWay = (stringOne, stringTwo) => {
  if (Math.abs(stringOne.length - stringTwo.length) > 1) {
    return false;
  }
  let s1 = stringOne.length < stringTwo.length ? stringOne : stringTwo;
  let s2 = stringOne.length < stringTwo.length ? stringTwo : stringOne;

  let indexOne = 0;
  let indexTwo = 0;
  let foundDifference = false;

  while (indexOne < s1.length && indexTwo < s2.length) {
    if (s1.charAt(indexOne) != s2.charAt(indexTwo)) {
      if (foundDifference) return false;
      foundDifference = true;
      if (s1.length == s2.length) {
        indexOne++;
      }
    } else {
      indexOne++;
    }
    indexTwo++;
  }
  return true;
};

console.log(oneEditWay("aco", "aclo"));
