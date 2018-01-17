/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    var maxNums = [];
    if (root === null) return maxNums;
    var search = function (root, rows) {
        if (root.left !== null) {
            search(root.left, rows + 1);
        }
        if (root.right !== null) {
            search(root.right, rows + 1);
        }
        if (maxNums[rows] !== undefined) {
            if (root.val > maxNums[rows]) {
                maxNums[rows] = root.val;
            }
        } else {
            maxNums[rows] = root.val;
        }
    }
    search(root, 0);
    return maxNums;
};