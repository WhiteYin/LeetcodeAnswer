/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var row = grid.length;
    if (row === 0) {
        return 0;
    }
    var col = grid[0].length;
    var sum = 0;
    for (let i = 0; i < row; i++){
        for (let j = 0; j < col; j++){
            if (grid[i][j]===1) {
                try {
                    if (i===0||grid[i - 1][j] === 0) {
                        console.log("["+i+','+j+"]up");
                        sum++;
                    }
                    if (i===row-1||grid[i + 1][j] === 0) {
                        console.log("["+i+','+j+"]down");
                        sum++;
                    }
                    if (j===col-1||grid[i][j + 1] === 0) {
                        console.log("["+i+','+j+"]right");
                        sum++;
                    }
                    if (j===0||grid[i][j - 1] === 0) {
                        console.log("["+i+','+j+"]left");
                        sum++;
                    }
                } catch (err) {
                    
                }
            }
        }
    }
    return sum;
};