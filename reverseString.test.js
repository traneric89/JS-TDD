const reverseString = require("./reverseString");

test("apple should become elppa: ", () => {
  expect(reverseString("apple")).toEqual("elppa");
});

test("string should NOT become string: ", () => {
  expect(reverseString("string")).not.toEqual("string");
});
