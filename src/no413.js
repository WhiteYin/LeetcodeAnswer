/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
    var result = 0;
    const len = A.length;
    var delta = A[1] - A[0]
    var count = 0;
    var j = 0;
    for (let i = 2; i < len; i++){
        j = A[i] - A[i - 1];
        if ( j !== delta) {
            delta = j;
            count = 0;
        } else {
            count++;
            result+=count;
        }
    }
    return result;
};