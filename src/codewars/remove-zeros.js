/**
 * 冒泡排序逆向版，将最后一个0放在末尾，遍历除最后一项的子数列，再将最后一个0放在该子数列的末尾，继续遍历剩下的。
 * 注意点：只有0和“0”算0。
 */
function removeZeros(array) {
    function isZero(item) {
        if (item === "0" || item === 0)
            return true;    
    }
    for (let i = array.length-1; i >= 0; i--){
        for (let j = 0; j < i; j++){
            if (isZero(array[j]) && !isZero(array[j+1])) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}
let input = [0,1,0,false,0,0];
removeZeros(input);