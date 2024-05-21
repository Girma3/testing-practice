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
  //
  let reg = /^[a-zA-Z]*$/;
  function encrypt(str, index) {
    let allArr = [...str];
    let arr = allArr;
    let punctuation = new Map();
    for (let i = 0; i < allArr.length; i++) {
      if (reg.test(allArr[i]) === false) {
        punctuation.set(allArr[i], allArr.indexOf(allArr[i]));
      }
    }
    //

    let upperCase = new Map();
    for (let i = 0; i < allArr.length; i++) {
      let regs = /[A-Z]/;
      if (regs.test(allArr[i])) {
        upperCase.set(i, allArr[i]);
      }
    }
    //don't remove the capital letter before encrypt make it lower case instead
    for (const key of upperCase) {
      arr.splice(key[0], 0, key[1].toLowerCase());
    }
    //
    let result = [];

    for (let k = 0; k < arr.length; k++) {
      for (let j = 0; j < charSet.length; j++) {
        if (arr[k] === charSet[j]) {
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
    for (const key of punctuation) {
      result.splice(key[1], 0, key[0]);
    }

    for (const key of upperCase) {
      let make = result[key[0]];
      if (make !== undefined) {
        result.splice(key[0], 1, make.toUpperCase());
      }
    }

    return result.join("");
  }

  return {
    encrypt,
  };
}

export { sum, capitalize, reverseString, Calculator, CesarCipher };
