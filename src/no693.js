/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    var result = [];
    var len;
    var d2b = function(dig) {
        var bin = [];
        var i = 0;
        do {
            bin[i++] = dig % 2;
            dig = Math.floor(dig / 2);
        } while (dig !== 0);
        return bin;
    }
    result = d2b(n);
    len = result.length;
    for (let i = 0; i < len-1; i++){
        if (result[i] === result[i+1])
            return false;    
    }
    return true;
};

console.log(hasAlternatingBits(10));