const middlePermutation = require("../src/simple-fun-number-159-middle-permutation");
test("空串", function () {
    expect(middlePermutation("")).toBe("");
});
test("abc", function () {
    expect(middlePermutation("abc")).toBe("bac");
});
test("abcdx", function () {
    expect(middlePermutation("abcdx")).toBe("cbxda");
});
test("abcdxg", function () {
    expect(middlePermutation("abcdxg")).toBe("cxgdba");
}); 
test("abcdxgz", function () {
    expect(middlePermutation("abcdxgz")).toBe("dczxgba");
});