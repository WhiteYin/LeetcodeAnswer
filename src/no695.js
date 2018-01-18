/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if (grid === null || grid.length === 0) {
        return 0;
    }
    const m = grid.length,
        n = grid[0].length;
    var max = 0;
    for(let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++){
            if (grid[i][j] === 1) {
                let area = dfs(grid, i, j, m, n, 0);
                max = Math.max(max, area);
            }
        }
    }
    return max;
};

/**
 * 
 * 深度优先算法
 * @param {number[][]} grid 地图
 * @param {number} i 当前x坐标
 * @param {number} j 当前y坐标
 * @param {number} m 列数
 * @param {number} n 行数
 * @param {number} area 岛面积 
 * @returns {number} area 岛面积
 */
function dfs(grid, i, j, m, n, area) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
        return area;
    }
    grid[i][j] = 0;
    area++;
    area = dfs(grid, i + 1, j, m, n, area);
    area = dfs(grid, i - 1, j, m, n, area);
    area = dfs(grid, i, j - 1, m, n, area);
    area = dfs(grid, i, j + 1, m, n, area);
    return area;
}

module.exports = maxAreaOfIsland;