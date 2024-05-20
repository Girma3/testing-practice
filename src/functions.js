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
function Calculator() {
  function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return NaN;
    return a + b;
  }
  function subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return NaN;
    return a - b;
  }
  function multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return NaN;
    return a * b;
  }
  const divide = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") return NaN;
    return a / b;
  };
  return { add, subtract, multiply, divide };
}

export { sum, capitalize, reverseString, Calculator };
