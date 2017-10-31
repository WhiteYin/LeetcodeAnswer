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
var averageOfLevels = function (root) {
    //count计算每一层节点数，下标代表层号
    var count = [];
    //sum计算每一层值总和
    var sum = [];
    var result = [];

    //深度递归遍历树
    var helper = function (node, level) {
        //节点判空
        if (node !== null) {
            //如果是每一层第一个节点，初始化sum和count相应层号（下标）项
            if (count[level] ===undefined) {
                count[level] = 0;
            } 
            if (sum[level]===undefined) {
                sum[level] = 0;
            } 
            //计算总值和计数
            sum[level] += node.val;
            count[level]++;
            
            //深度递归左右
            helper(node.left, level + 1);
            helper(node.right, level + 1);
        }
    }

    helper(root, 0);
    
    //计算平均值
    for (let i = 0; i < count.length; i++){
        result[i] = sum[i] / count[i];
    }

    return result;
};