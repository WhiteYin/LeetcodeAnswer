Description：
Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible. 

Example:
Input: [1,4,3,2]
Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).


/**
 * @param {number[]} nums
 * @return {number}
 */

var arrayPairSum = function(nums){
	var sortNums = nums.sort(function(a,b){
		return a-b;
	});
	var number=0;
	for(let i=0;i<nums.length;i+=2){
		number+=nums[i];
	}
	return number;
}
/* 解题思路：首先对题意进行解析。数组中2n个元素，两两配对后进行min()操作，再将得到的数累加，要求能够得出最大的累加值。那么首先要明确一点，若是对差值很大的两个值进行min()操作，其结果与两个值很接近的值进行min（）操作是一样的，都是较小的那个数。但对于累加的结果来说是不一样的，前者的累加值明显小于后者。因此，真正题意在于将数组中的较小值配对，进行累加。同时，有个隐含条件，就是该数组原本无序的状态应该进行排序。简而言之就是将数组从小到大排序并输出第2x个数的累加值。js中的sort算法还需要传入一个比较函数，此处不表。 */