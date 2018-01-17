/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var binary = num.toString(2);
    var numstr = '';
    for(var i = 0; i<binary.length; i++){
        numstr = numstr + (binary[i] === '1' ? '0':'1');
    }
    return parseInt(numstr,2);
};