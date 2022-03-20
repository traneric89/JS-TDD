const capitalize = require("./capitalize");

test("foo should become Foo: ", () => {
  expect(capitalize("foo")).toBe("Foo");
});

test("tester should not become TESTER: ", () => {
  expect(capitalize("tester")).not.toBe("TESTER");
});

test("capitalize should not become Capitalize: ", () => {
  expect(capitalize("capitalize")).toEqual("Capitalize");
});
