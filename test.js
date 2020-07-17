// this runs by executing jest

const sum = require("./sum");

test("1 + 1", () => {
  expect(sum(1, 1)).toEqual(2);
});
