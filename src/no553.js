/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
    if (nums.length <= 2) {
        return nums.join('/');
    }
    return nums.join('/').replace(/\W/,'/(').replace(/$/,')');
};
console.log(optimalDivision([2,1,3]));