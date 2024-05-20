import { capitalize, sum, reverseString } from "./functions";
test("accept string only", () => {
  expect(capitalize(123)).toBeNull();
});
test("capitalize first letter", () => {
  expect(capitalize("you")).toBe("You");
});
test("capitalize only the first word", () => {
  expect(capitalize("hey, you")).toBe("Hey, you");
});
//write test for reversing string
//check input is string,check the return value is correct
test("check input is string", () => {
  expect(reverseString(123)).toBeNull();
});
test("is input reversed", () => {
  expect(reverseString("you")).toBe("uoy");
});
test("reverse multiple word", () => {
  expect(reverseString("learn to test")).toBe("tset ot nrael");
});
