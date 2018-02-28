/**
 * 问题：给定一个字符串，空格分割每个数字，权重是数字每一位相加之和。根据权重排序，权重小的在前，相同的按字典序排序。  
 * 思路：  
 * 1. 判空，不为空则string.split()获取每个数字字符串；
 * 2. 对原数组进行字典序排序后，再将每个数字字符串继续分割成一个数组，parseInt后调用reduce方法获得权重
 * 3. 将每个权重保存在新数组中
 * 4. 对每一项根据权重排序。这样应该能保证相同权重的数按字典序排序，也就是说sort方法此时应该是稳定的。
 * 5. 将排序后的数组调用join方法转为字符串输出。
 */
function orderWeight(string) {
    if (string.length === 0) return string;
    let firstArr = string.split(" ").sort(),
        weightArr = [];
    for (let i = 0; i < firstArr.length; i++){
        let sum = firstArr[i].split("").reduce(function (a, b) {
            return a + Number.parseInt(b);
        }, 0);
        weightArr.push(sum);
    }
    let secondArr = firstArr.slice();
    return secondArr.sort(function (a, b) {
        let aIndex = firstArr.indexOf(a),
            bIndex = firstArr.indexOf(b),
            delta = weightArr[aIndex] - weightArr[bIndex];
        if (delta === 0) {
            if (a > b) {
                return 1;
            } else if(a===b){
                return 0;
            } else {
                return -1;
            }
        } else {
            return delta;
        }
    }).join(" ");
}
orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123");
module.exports = orderWeight;