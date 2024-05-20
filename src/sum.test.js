import { capitalize, sum, reverseString, Calculator } from "./functions";
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
//test for calculator methods for add,sub multiple and divide for two numbers
//check input is number only, check the return value is correct
test("check the input is number only", () => {
  expect(Calculator().add("13", 5)).toBe("invalid input");
  expect(Calculator().subtract(4, "1")).toBe("invalid input");
  expect(Calculator().divide("123", "5")).toBe("invalid input");
  expect(Calculator().multiply("4", 0)).toBe("invalid input");
  expect(Calculator().divide(0, 2)).toBe("0 can't be numerator");
});
test("check result for addition method", () => {
  expect(Calculator().add(3, 6)).toEqual(9);
  expect(Calculator().add(8, -10)).toEqual(-2);
});

test("check result for subtract method", () => {
  expect(Calculator().subtract(8, 6)).toEqual(2);
  expect(Calculator().subtract(3, -8)).toEqual(-5);
});
test("check result for multiplication method", () => {
  expect(Calculator().multiply(4, 5)).toEqual(20);
  expect(Calculator().multiply(4, -3)).toEqual(-12);
});
test("check result for division method", () => {
  expect(Calculator().divide(15, 3)).toEqual(5);
  expect(Calculator().divide(-15, 3)).toEqual(-5);
});
