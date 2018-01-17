/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var binx = d2b(x);
    var biny = d2b(y);
    var lenx = binx.length;
    var leny = biny.length;
    var maxLen = 0;
    var count = 0;

    if (lenx > leny) {
        maxLen = lenx;
        biny = add0(biny, lenx);
    } else {
        maxLen = leny;
        binx = add0(binx, leny);
    }

    for (var i = 0; i < maxLen; i++){
        if (binx[i] !== biny[i]) {
            count++;
        }
    }
    return count;
};

function d2b(dig) {
    var bin = [];
    var i = 0;
    do {
        bin[i++] = dig % 2;
        dig = Math.floor(dig / 2);
    } while (dig !== 0);
    return bin;
}

function add0(bin, len) {
    for (var i = bin.length; i < len; i++){
        bin[i] = 0;
    }
    return bin;
}

