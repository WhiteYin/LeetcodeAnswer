/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    var result = [];
    for (let i = 0; i < findNums.length; i++){
        var index = nums.indexOf(findNums[i]);
        for (var j = index+1;j< nums.length; j++){
            if (nums[j] > findNums[i]) {
                result.push(nums[j]);
                break;
            }
        }
        if (j === nums.length) {
            result.push(-1);
        }
    }
    return result;
};

console.log(nextGreaterElement([4,1,2],[1,3,4,2]));