/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort(function (a, b) {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return b[0] - a[0];
        }
    });
    var temp = [];
    for (let i = 0; i < people.length; i++){
        for (let j = 1; j < people.length-i; j++){
            if ( people[j - 1][0] > people[j][0] && (
                people[j - 1][1] >= people[j][1] ||
                (people[j][1]<j))
            ) {
                temp = people[j];
                people[j] = people[j - 1];
                people[j - 1] = temp;
            }
            console.log(i + ":"+j);
            console.log(people);
        }
    }
    return people;
};
reconstructQueue([[9,0],[7,0],[1,9],[3,0],[2,7],[5,3],[6,0],[3,4],[6,2],[5,2]]);
/**
 * 先按高度排序，h大的在前，k小的在前(sort参数方法：从小到大排则前-后，否则后-前，返回>0则交换两者顺序)
 * 比较排序后的数
 * h1>h2时
 *      1. k1>=k2 或 k2比当前下标小时（此时应前移到正确下标，如[4,4]应该在下标4及其后处）:p2在p1前
 *      2. k1<k2：p1在p2前
 */