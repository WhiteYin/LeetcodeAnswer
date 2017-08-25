/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var count = 0;
    var maxCount = 0;
    for(let i=0;i<nums.length;i++){
        if(count===0){
            count=nums[i]||count;
        }else if(nums[i]){
            count++;
        }else{
            count=0;
        }
        if(count>maxCount){
            maxCount = count;
        }
    }
    return maxCount;
};