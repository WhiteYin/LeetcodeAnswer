/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    //数组长度
    var len=nums.length;
    var index = 0;
    var newNums = new Array();
    for(let i=0;i<len;i++){
        //索引的计算
        index=(Math.abs(nums[i])-1)%len; 
        if(nums[index]>0){
            //索引出现第一次，置负数
         nums[index] = -nums[index];
        }else{
            //索引出现第二次，将数值再减去长度
          nums[index] -= len;   
        }
    }
    for(let i=0;i<len;i++){
        //所有未出现的数i在数组中作为索引，该索引下的数都是正数
        if(nums[i]>0){
            newNums.push(i+1);
        }
    }
    return newNums;
};