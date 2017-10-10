/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
    var reverse = '';
    for (let i = s.length-1; i >=0; i--){
        reverse += s[i];
    }
    return reverse;
};

console.log(reverseString("hello"));