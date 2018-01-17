/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    var len = nums.length;
    var start = 0;
    var end = len-1;
    if (len === 1) {
        return nums[0];
    }
    while (start < end) {
        //因为只有一个单身狗，其他的都是成对，所以start+end是偶数
        let mid = (start + end) / 2;
        if (mid % 2 === 1) {
            mid--;
        }

        if (nums[mid] !== nums[mid + 1]) {
            end = mid;
        }else{
            start = mid+2;
        }
    }
    
    return nums[start];
};

console.log(singleNonDuplicate([1,1,2,2,3,3,4,4,9,8,8]));