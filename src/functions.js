function sum(a, b) {
  return a + b;
}
function capitalize(str) {
  if (typeof str !== "string") return null;
  let arr = [...str];
  let firstLetter = arr[0].toUpperCase();
  let result = firstLetter + arr.slice(1).join("");
  return result;
}

function reverseString(str) {
  if (typeof str !== "string") return null;
  return str.split("").reverse().join("");
}
//object that has four methods to add, subtract , divide, and multiply 2 numbers.
function Calculator() {
  function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "invalid input";
    else {
      return a + b;
    }
  }
  function subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "invalid input";
    else {
      return a - b;
    }
  }
  function multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "invalid input";
    else {
      return a * b;
    }
  }
  const divide = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") return "invalid input";
    else if (a === 0) return "0 can't be numerator";
    else {
      return a / b;
    }
  };
  return { add, subtract, multiply, divide };
}
//cesar cipher object that has method to encrypt and decrypt text
function CesarCipher() {
  let hashMap = new Map();
  let charSet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  //store number as key from 0 to 27 and alphabet as value
  for (let i = 0; i < charSet.length; i++) {
    hashMap.set(i, charSet[i]);
  }

  //function that return hashmap for punctuation key:punctuation,  value:it's index on the original string array
  function getPunctuation(str) {
    let stringArray = [...str];
    let reg = /^[a-zA-Z]*$/;
    let punctuation = new Map();

    for (let i = 0; i < stringArray.length; i++) {
      if (reg.test(stringArray[i]) === false) {
        punctuation.set(stringArray[i], stringArray.indexOf(stringArray[i]));
      }
    }
    return punctuation;
  }
  //function that return hashmap for capital Letters key:index of capital letter, value:the letter itself
  function getCapitalLetters(str) {
    let stringArray = [...str];
    let reg = /[A-Z]/;
    let upperCase = new Map();
    for (let i = 0; i < stringArray.length; i++) {
      if (reg.test(stringArray[i])) {
        upperCase.set(i, stringArray[i]);
      }
    }
    return upperCase;
  }
  //function that return string array only containing lowercase letters
  function onlyLetters(str) {
    let stringArray = [...str];
    let reg = /[a-zA-Z]/;
    let result = [];
    for (let i = 0; i < stringArray.length; i++) {
      if (reg.test(stringArray[i])) {
        result.push(stringArray[i].toLowerCase());
      }
    }
    return result;
  }
  //function that return modulo for index divided by alphabet length
  function fixIndex(index) {
    return index % charSet.length;
  }
  function encrypt(str, index) {
    let capitalLetters = getCapitalLetters(str);
    let punctuation = getPunctuation(str);
    let stringArray = onlyLetters(str);
    let result = [];
    if (index > charSet.length) {
      index = fixIndex(index);
    }

    for (let k = 0; k < stringArray.length; k++) {
      for (let j = 0; j < charSet.length; j++) {
        if (stringArray[k] === charSet[j]) {
          let position = j + index;
          if (position >= charSet.length) {
            position = position - charSet.length;
            let shifter = hashMap.get(position);
            result.push(shifter);
            position = j + index;
          } else if (position < charSet.length) {
            let shift = hashMap.get(position);
            result.push(shift);
          }
        }
      }
    }

    //function that restore punctuation and upper case letter to encrypted string based on original string array
    function restorePunctuation(stringArray) {
      for (const key of punctuation) {
        //key[0] is punctuation , key[1] is index, add punctuation
        stringArray.splice(key[1], 0, key[0]);
      }
      for (const key of capitalLetters) {
        //replace the lower case letter with upper case
        let letter = stringArray[key[0]];
        stringArray.splice(key[0], 1, letter.toUpperCase());
      }
      return stringArray.join("");
    }
    let restore = restorePunctuation(result);
    return restore;
  }

  return {
    encrypt,
  };
}
//function that accept array return min, max average, and length
function analyzeArray(array) {
  let sortArray = array.sort((a, b) => a - b);
  let min = sortArray[0];
  let max = sortArray[sortArray.length - 1];
  let length = sortArray.length;
  let initialValue = 0;
  let sum = sortArray.reduce((total, num) => total + num, initialValue);
  let average = sum / length;
  return { min, max, length, average };
}

export {
  sum,
  capitalize,
  reverseString,
  Calculator,
  CesarCipher,
  analyzeArray,
};
