const nextBigger = require("../src/codewars/next-bigger-number-with-the-same-digits");
test("12", function () {
    expect(nextBigger(12)).toBe(21);
});
test("513", function () {
    expect(nextBigger(513)).toBe(531);
});
test("123456789", function () {
    expect(nextBigger(123456789)).toBe(123456798);
});
test("414", function () {
    expect(nextBigger(414)).toBe(441);
});
test("9", function () {
    expect(nextBigger(9)).toBe(-1);
});