const solve = require("../src/codewars/simple_frequency_sort");

test("1", function () {
    expect(solve([2, 3, 5, 3, 7, 9, 5, 3, 7])).toEqual([3, 3, 3, 5, 5, 7, 7, 2, 9]);
})
test("2", function () {
    expect(solve([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1])).toEqual([1, 1, 1, 0, 0, 6, 6, 8, 8, 2, 3, 5, 9]);
})
test("3", function () {
    expect(solve([5, 9, 6, 9, 6, 5, 9, 9, 4, 4])).toEqual([9, 9, 9, 9, 4, 4, 5, 5, 6, 6]);
})
test("4", function () {
    expect(solve([4, 4, 2, 5, 1, 1, 3, 3, 2, 8])).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 8]);
})
test("5", function () {
    expect(solve([4, 9, 5, 0, 7, 3, 8, 4, 9, 0])).toEqual([0, 0, 4, 4, 9, 9, 3, 5, 7, 8]);
})