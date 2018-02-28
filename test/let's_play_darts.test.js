const getDartboardScore = require("../src/codewars/let's_play_darts");

test("脱靶", function () {
    expect(getDartboardScore(-133.69, -147.38)).toBe("X");
});
test("靶心", function () {
    expect(getDartboardScore(4.06, 0.71)).toBe("DB");
});
test("靶环", function () {
    expect(getDartboardScore(2.38, -6.06)).toBe("SB");
});
test("20分值", function () {
    expect(getDartboardScore(-5.43, 117.95)).toBe("20");
});
test("7分值", function () {
    expect(getDartboardScore(-73.905, -95.94)).toBe("7");
});
test("三倍2分值", function () {
    expect(getDartboardScore(55.53, -87.95)).toBe("T2");
});
test("双倍9分值", function () {
    expect(getDartboardScore(-145.19, 86.53)).toBe("D9");
});