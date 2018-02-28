/**
 * 问题：
 * 1. 数组判空,判断当前元素是3种情况中哪一种；
 * 2. 处理有一个坏苹果的包裹，若能成对则替换坏苹果，不能成对则删除当前包裹；
 * 3. 处理两个坏苹果的包裹，直接删除；
 * 4. 返回数组。
 */
function badApples(input) {
    const len = input.length;
    if (len === 0) return input;
    let packagePoi = 0, result = [],temp = [];
    for (let i = 0; i < len; i++){
        if (input[i][0] === 0 && input[i][1] === 0) {
            //两个都是0的不复制
        } else if (input[i][1] === 0 || input[i][0] === 0) {
            //有一个是0
            //先找到不为0的数位置
            let poi = 1 - input[i].indexOf(0);
            //获取该值，插入temp数组
            temp.push(input[i][poi]);
            //若temp数组长度为1，记录当前result数组的长度len
            if (temp.length === 1) {
                packagePoi = result.length;
            }
            //若temp数组长度为2，插入result的packagePoi位置，清空temp
            if (temp.length === 2) {
                result.splice(packagePoi, 0, temp);
                temp = [];
            }
            //如果没有配对的，则temp长度不可能到2，也就不会插入result数组。
        } else {
            //都不为0
            result.push(input[i]);
        }
    }
    return result;
}

module.exports = badApples;