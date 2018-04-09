/**
 * 思路：先填充两个字符串长度一致，然后根据末尾的两个数相加，同时用C记录进位。
 * 如果最后数组长度为0，但C为1，则在首位加上1。
 * 如果字符串有前置0，则需要删除0。
 */
function sumStrings(a, b) {
    // 进位标识
    let C = 0;
    let result = '';

    function add(arrA, arrB) {
        // 如果数组为空则判断进位标识并跳出递归
        if (arrA.length === 0) {
            if (C === 1) {
                result = C + result;
            }
            return;
        }
        const sum = Number(arrA.pop()) + Number(arrB.pop()) + C;
        // 如果和有进位则C为1
        if (sum >= 10) {
            C = 1;
        }
        // 本次和没有进位则C重置为0
        else {
            C = 0;
        }
        // 将本次和的个位数加在结果的前面
        result = (sum % 10) + result;
        add(arrA, arrB);
    }
    // 填充0
    function fillZero(arrA, arrB) {
        const minArr = arrA.length <= arrB.length ? arrA : arrB,
            maxArr = arrA.length > arrB.length ? arrA : arrB,
            deltaLen = maxArr.length - minArr.length;

        for (let i = 0; i < deltaLen; i++) {
            minArr.unshift('0');
        }
    }
    // 删除前置0
    function removeZero(str) {
        const len = str.length;
        let i = 0;
        for (; i < len; i++) {
            if (str[i] !== '0') {
                break;
            }
        }
        if (i > 0) {
            return str.slice(i, len);
        }

        return str;
    }

    const newA = removeZero(a),
        newB = removeZero(b);
    // 转成数组
    const arrayA = newA.split(''),
        arrayB = newB.split('');
    fillZero(arrayA, arrayB);
    add(arrayA, arrayB);
    return result;
}
sumStrings('00103', '08567');

module.exports = sumStrings;
