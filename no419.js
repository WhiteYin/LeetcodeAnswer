/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
    var len1 = board.length;
    var len2 = board[0].length;
    var count = 0;
    for (let i = 0; i < len1; i++){
        for (let j = 0; j < len2; j++){
             //船头的左边和上边一定不是‘X‘
             if(board[i][j] === 'X' && (i === 0 || board[i-1][j] === '.') && (j === 0 ||board[i][j-1] === '.')){
                count ++;
            }
        }
    }
    return count;
};