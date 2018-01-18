const canWinNim = require("../src/no292");
const example = 4;
const example2 = 2;

test("i can't win", function () {
    expect(canWinNim(example)).toBeFalsy();
});

test("i can win", function () {
    expect(canWinNim(example2)).toBeTruthy();
});