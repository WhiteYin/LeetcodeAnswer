/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    var result = [];
    var isSelfDividing = function (num) {
        var s = num.toString();
        if (s.indexOf('0')!==-1) {
            return false;
        }
        var string = s.split('');
        var newString = string.filter(function (i) {
            return num % i===0;
        });
        if (newString.length != string.length) {
            return false;
        }
        return true;
    };
    for (let i = left; i <= right; i++){
        if (isSelfDividing(i)) {
            result.push(i);
        }
    }
    return result;
};