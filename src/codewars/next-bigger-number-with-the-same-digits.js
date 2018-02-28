/**
 * 问题：给定一个数a，返回比该数大的数b，满足要求a和b的组成数字相同
 * 思路：
 * 1. 求出a的组成数字中能够组成的最大数max；
 * 2. 若max与a相等，返回-1；
 * 3. 否则，遍历[a,max]区间。一旦遇到比temp大的满足要求的数，则返回该数。
 */
function nextBigger(num) {
    let temp = num,result = -1;
    let max = maxNum(num);
    if (max === num) return;
    while (temp++<max) {
        if (arrEqual(temp, num)) {
            result = temp;
            break;
        }
    }
    //比较两个数字的组成是否一样
    function arrEqual(num1, num2) {
        let arr1 = String(num1).split("");
        let arr2 = String(num2).split("");
        let str1 = arr1.sort().join("");
        let str2 = arr2.sort().join("");
        if (str2 === str1) {
            return true;
        }
        return false;
    }
    //获取组成该数字
    function maxNum(num) {
        let arr = String(num).split("");
        arr.sort().reverse();
        return parseInt(arr.join(""));
    }
    return result;
}
module.exports = nextBigger;