/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    if (moves.length % 2 !== 0) {
        return false;
    } else {
        var x = 0, y = 0;
        for (let i = 0; i < moves.length; i++){
            switch (moves[i]) {
                case 'U':
                    y++;
                    break;
                case 'D':
                    y--;
                    break;
                case 'L':
                    x++;
                    break;
                case 'R':
                    x--;
                    break;
            }
        }
        return x === 0 && y === 0;
    }
};