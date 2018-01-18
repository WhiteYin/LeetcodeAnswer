const singleNumber = require("../src/no136");
const example = [1, 2, 3, 4, 1, 2, 3];
test("singleNumber", function () {
    expect(singleNumber(example)).toBe(4);
});