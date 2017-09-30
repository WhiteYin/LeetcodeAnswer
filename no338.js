/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    var nums = [];
    for (let i = 0;i <= num; i++){
        nums.push(one_count(i));
    }
    return nums;
};
function one_count(i) {
    var count = 0;
    var mod = i;
    if (i < 2) {
        return i;
    } else if (i === 2) {
        return 1;
    }
    while (mod !== 0) {
        count += mod % 2;
        mod = Math.floor(mod / 2);
    }
    return count;
}