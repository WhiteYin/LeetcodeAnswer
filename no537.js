/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (a, b) {
    var resultx = 0,resulty = 0;
    var ax = a.split('+')[0];
    var ay = a.split('+')[1].split('i')[0];
    var bx = b.split('+')[0];
    var by = b.split('+')[1].split('i')[0];
    ax = parseInt(ax);
    ay = parseInt(ay);
    bx = parseInt(bx);
    by = parseInt(by);

    resultx = ax * bx + -(ay * by);
    resulty = ax * by + bx * ay;
    var result = resultx + "+" + resulty + "i";
    return result;
};