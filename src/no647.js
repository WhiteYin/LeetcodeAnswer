/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    var len = s.length;
    var count = 0;
    var subString = "";
    if (s === "") {
        return 0;
    }
    if (len === 1) {
        return 1;
    }
    for (let i = 0; i<len;i++){
        for (let j = i + 1; j < len + 1; j++){
            subString = s.substring(i, j);
            if (isPalindromic(subString)) {
                count++;
            }
        }
    }
    return count;
};

var isPalindromic = function (s) {
    var len = s.length;
    for (let i = 0; i < len / 2; i++){
        if (s[i] !== s[len - 1 - i]) {
            return false;
        }
    }
    return true;
}