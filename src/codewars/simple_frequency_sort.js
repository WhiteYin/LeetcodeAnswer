/**
 * 思路：
 * 1. 遍历输入的数组，统计频率存入一个Map。因为数组中的数字可能是分散的，为了节省空间应该使用Map
 * 2. 循环找出最大频率数，第三个数组中加入相应数目的值
 * 3. 返回第三个数组
 */
function solve(arr) {
    let frequency = new Map(),
        result = [],
        max = 0,
        number = 0;
    arr.forEach(ele => {
        if (frequency.has(ele)) {
            let value = frequency.get(ele);
            frequency.set(ele,value+1);
        } else {
            frequency.set(ele,1);
        }
    });
    for (let i = 0; i < frequency.size; i++){
        for (let [ key, value ] of frequency) {
            //获取数字类型的键
            let num = Number.parseInt(key);
            //获取最大频度
            if (value > max || (value===max && num < number)) {
                //如果没有添加过该数字
                if (result.indexOf(num) < 0) {
                    //保存最大频度和数
                    max = value;
                    number = num;
                }
            }
        }       
        //循环插入
        for (let j = 0; j < max; j++){
            result.push(number);
        }
        max = 0;
    }
    return result;
}
module.exports = solve;