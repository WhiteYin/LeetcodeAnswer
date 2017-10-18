/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    var node = {
        dep: 0,
        val: root.val
    }
    dfs(root, 0, node);
    return node.val;
};

var dfs = function (root, dep, node) {
    if (dep > node.dep) {
        node.dep = dep;
        node.val = root.val;
    }
    if (root.left !== null) {
        dfs(root.left, dep + 1, node);
    }
    if (root.right !== null) {
        dfs(root.right, dep+1, node);
    }
}
