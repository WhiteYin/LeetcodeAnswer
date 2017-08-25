/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var newNums = new Array();
    for(var i=0;i<nums.length;i++){
        var index = Math.abs(nums[i])-1;
        if(nums[index]>0){
            nums[index]=-nums[index];
        }else{
            newNums.push(index+1);
        }
    }
    return newNums;
};