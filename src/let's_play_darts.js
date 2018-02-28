/**
 * 问题：
 * 1. 根据点的坐标，计算到原点的距离d=Math.sqrt(x^2+y^2)获取输出前缀pre。这里d是半径，而题目给的是直径
 * 2. 所以，2*d有7种情况：
 *      * 0~12.7mm 靶心
 *      * 12.7~31.8mm 靶心环
 *      * 31.8~198mm 单倍
 *      * 198~214mm 三倍
 *      * 214~324mm 单倍
 *      * 324~340mm 双倍
 *      * 340~inf 脱靶
 * 3. 如果是在得分区，那么根据点的坐标求出与y轴夹角rad = Math.atan(x/y)。
 * 4. 将弧度rad转为角度deg=rad*180/Math.PI。
 * 5. 根据夹角（deg+9）/18取整得到的下标获取score。
 * 6. 输出pre+score字符串
 */
function getDartboardScore(x, y) {
    const scores = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
    const d = Math.sqrt(x * x + y * y);
    let score = "";
    let { isScored, pre } = poiSelect(2*d);
    if (isScored) {
        let rad = Math.atan(x / y);
        if (y < 0) {
            rad += Math.PI; 
        }
        const deg = rad * 180 / Math.PI;
        const index = (deg + 9) / 18;
        score = scores.splice(Math.floor(index),1);
    }
    return pre + score;
}

function poiSelect(d) {
    let isScored = false,pre="";
    if (d >= 0 && d < 12.7) {
        //靶心
        pre = "DB";
    } else if (d >= 12.7 && d < 31.8) {
        //靶环
        pre = "SB";
    } else if (d >= 198 && d < 214) {
        //三倍
        isScored = true;
        pre = "T";
    } else if (d >= 324 && d <= 340) {
        //双倍
        isScored = true;
        pre = "D";
    } else if (d > 340) {
        //脱靶
        pre = "X";
    } else {
        isScored = true;
    }
    return { isScored, pre };
}
module.exports = getDartboardScore;