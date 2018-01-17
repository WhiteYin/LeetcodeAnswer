/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    var len = nums.length;
    var node = new TreeNode(null);
    if (len > 0) {
        var maxObj = max(nums);
        //最大值和其下标
        var index = maxObj.index;
        var num = maxObj.num;
        //左右数组
        var left = nums.slice(0, index);
        var right = nums.slice(index + 1, len);
        node.val = num;
        //若左、右数组为空则赋左、右节点为null，否则递归调用constructMaximumBinaryTree
        node.left = left.length>0?constructMaximumBinaryTree(left):null;
        node.right = right.length>0?constructMaximumBinaryTree(right):null;
    }
    return node;
};
/**
 * 获取每个数组中的最大值和下标
 * @param {number[]} nums 
 */
function max(nums) {
    var num = {};
    var maxNum = nums[0];
    var temp = 0;
    var index = 0;
    var len = nums.length;
    for (var i = 1; i < len; i++){
        temp = nums[i];
        if (temp> maxNum) {
            maxNum = temp;
            index = i;
        }
    }
    num.num = maxNum;
    num.index = index;
    return num;
}