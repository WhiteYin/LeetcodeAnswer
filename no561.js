Description��
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
/* ����˼·�����ȶ�������н�����������2n��Ԫ�أ�������Ժ����min()�������ٽ��õ������ۼӣ�Ҫ���ܹ��ó������ۼ�ֵ����ô����Ҫ��ȷһ�㣬���ǶԲ�ֵ�ܴ������ֵ����min()����������������ֵ�ܽӽ���ֵ����min����������һ���ģ����ǽ�С���Ǹ������������ۼӵĽ����˵�ǲ�һ���ģ�ǰ�ߵ��ۼ�ֵ����С�ں��ߡ���ˣ������������ڽ������еĽ�Сֵ��ԣ������ۼӡ�ͬʱ���и��������������Ǹ�����ԭ�������״̬Ӧ�ý������򡣼����֮���ǽ������С�������������2x�������ۼ�ֵ��js�е�sort�㷨����Ҫ����һ���ȽϺ������˴������� */