const getMax = require("../../../__workshop/exercise-3");

test("Exercise 3", () => {
  expect(getMax(12, 9)).toBe(12);
  expect(getMax(0, 4)).toBe(4);
});
