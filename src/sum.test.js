import { capitalize, sum } from "./functions";

test("accept string only", () => {
  expect(capitalize(123)).toBe(null);
});
test("capitalize first letter", () => {
  expect(capitalize("you")).toBe("You");
});
test("capitalize only the first word", () => {
  expect(capitalize("hey, you")).toBe("Hey, you");
});
