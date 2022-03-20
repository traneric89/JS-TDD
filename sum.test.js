const sum = require("./sum");

test("Adds two numbers: ", () => {
  expect(sum(2, 2)).toBe(4);
});
