/**
 * 问题：给定字符串s，求出包含内部字母的全排列数组，输出该数组中间位置项。  
 * 思路：  
 * 1. 求全排列数组；
 * 2. 得到数组后根据长度求出中间位置下标：len/2-1(偶数),(len-1)/2（奇数）
 */
function middlePermutation(s) {
    'use strict';
    const len = s.length;
    let mid = 0;
    let map = new Map();
    //求全排列的核心思想在于：长度为len>1的字符串的全排列，可以看作将第一个字符插入剩余子串的所有情况
    let result = perm(s);
    //空串返回空串
    if (result.length === 0) return "";
    //按字典序排序
    result.sort();
    //判断奇偶中间位置
    let resLen = result.length;
    if (resLen % 2 === 0) {
        mid = resLen / 2 - 1;
    } else {
        mid = (resLen - 1) / 2;
    }
    return result[mid];
}

function perm(str) {
    let result = [], tempArr = [];
    let subStr = str;
    //字符串长度为0时，结束循环
    while (subStr.length !== 0) {
        if (result.length === 0) {
            result.push(str[0]);
        } else {
            //遍历每一个子串全排列
            for (let i = 0; i < result.length; i++) {
                //第i个子串全排列
                let item = result[i];
                let itemLen = item.length;
                //遍历从头到尾每一个位置
                for (let j = 0; j < itemLen + 1; j++) {
                    //将递归串的第一个字符插入所有可以插入的位置，得到当前串的全排列
                    let temp = item.slice(0, j) + subStr[0] + item.slice(j);
                    tempArr.push(temp);
                }
            }
            result = tempArr;
            tempArr = [];
        }
        subStr = subStr.slice(1);
    }
    return result;
}
perm("12345678");
module.exports = middlePermutation;
