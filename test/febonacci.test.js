const febonacci = require("../src/fibonacci");

test("使用递归", function () {
    expect(febonacci.fibonacciRecursion(5)).toBe(5);
});

test("使用迭代", function () {
    expect(febonacci.fibonacciLoop(5)).toBe(5);
});

test("使用尾递归", function () {
    expect(febonacci.fibonacciTail(5, 1, 1)).toBe(5); 
});