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

export { sum, capitalize, reverseString };
