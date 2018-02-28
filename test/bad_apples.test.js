const badApples = require('../src/bad_apples');
test("测试坏苹果1", function () {
    expect(badApples([])).toEqual([]);
});
test("测试坏苹果2", function () {
    expect(badApples([[0, 3], [7, 6], [0, 2], [1, 3], [2, 3], [4, 0], [0, 6]])).toEqual([[3, 2], [7, 6], [1, 3], [2, 3], [4,6]]);
});
test("测试坏苹果3", function () {
    expect(badApples([[0,0],[0,0],[0,1],[0,0],[0,0]])).toEqual([]);
});
test("测试坏苹果4", function () {
    expect(badApples([[1, 3], [7, 6], [7, 2], [1, 3], [0, 1], [4, 5], [0, 3], [7, 6]])).toEqual([[1, 3], [7, 6], [7, 2], [1, 3], [1, 3], [4, 5], [7, 6]]);
});
test("测试坏苹果5", function () {
    expect(badApples([[1,3],[7,6],[7,2],[0,0],[0,3],[1,3],[1,3],[4,5],[7,6]])).toEqual([[1,3],[7,6],[7,2],[1,3],[1,3],[4,5],[7,6]]);
});
test("测试坏苹果6", function () {
    expect(badApples([[1, 3], [7, 6], [7, 2], [1, 3], [2, 3], [4, 5], [7, 6]])).toEqual([[1, 3], [7, 6], [7, 2], [1, 3], [2, 3], [4, 5], [7, 6]]);
});
