/**
 * 多种方式实现一个斐波那契数列
 */
var numbers = [];
function fibonacciRecursion(n) {
    if (numbers[n] !== undefined) {
        return numbers[n];
    }
    if (n === 1 || n === 2) {
        numbers[n] = 1;
    } else {
        numbers[n] = fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
    }
    return numbers[n];
}

/**
 * 
 * @param {*} n 序号
 */
function fibonacciLoop(n) {
    var result = 0,
        former = 1,
        temp = 0;
    for (var i = 1; i <= n; i++){
        if (i <= 2) {
            result = 1;
        } else {
            temp = result;
            result += former;
            former = temp;
        }
    }
    return result;
}

/**
 * 
 * @param {number} n 第n项
 * @param {*} last 
 * @param {*} former 
 */
function fibonacciTail(n,former,result) {
    "use strict";
    if (n === 1 || n === 2) {
        return result;
    }
    return fibonacciTail(n - 1, result, former + result);
}

module.exports = {
    fibonacciRecursion,
    fibonacciTail,
    fibonacciLoop
};