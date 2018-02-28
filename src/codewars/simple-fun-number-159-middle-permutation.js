/**
 * 问题：给定字符串s，找出全排列的中间位置字符串的特点  
 * 思路：  下面的思路，自己画树理解吧。
 * 1. 如果串长度为偶数，中间串为str[len/2]+剩余串的倒序
 * 2. 如果串长度为奇数，中间串为str[(len-1)/2]+剩余偶数长度串的全排列的中间串
 * */
function middlePermutation(str) {
    if (str === "") return "";
    const len = str.length;
    str = str.split("").sort().join("");
    function evenMid(str) {
        let tempLen = str.length,
            mid = tempLen / 2-1;    
            tempStr = str.slice(0,mid)+str.slice(mid+1);
        return str[mid]+tempStr.split("").reverse().join("");
    }
    if (len % 2 === 0) {
        return evenMid(str);
    } else {
        let mid = (len - 1) / 2;
        restStr = str.slice(0, mid) + str.slice(mid + 1);
        return str[mid] + evenMid(restStr);
    }
}
module.exports = middlePermutation;
