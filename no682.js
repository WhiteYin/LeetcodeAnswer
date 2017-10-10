/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    var num1 = 0, num2 = 0;
    var len = ops.length, i = 0;
    var arr = [];  //记录出现过的数；
    var tmp;
    var result = 0;
    while(i < len){
        switch(ops[i]){
            case '+': {
                tmp = num1 + num2;
                result = result + tmp;
                num1 = num2;
                num2 = tmp;
                arr.push(num2);
                break;
            }
            case 'C': {
                result = result - num2;
                arr.pop();
                num2 = num1;
                num1 = ((arr.lastIndexOf(num1)-1)>=0) ? arr[arr.lastIndexOf(num1)-1] : 0;
                break;
            }
            case 'D': {
                num1 = num2;
                num2 = num2 * 2;
                arr.push(num2);
                result = result + num2;
                break;
            }
            default:{
                num1 = num2;
                num2 = parseInt(ops[i]);
                result = result + num2;
                arr.push(num2);
                break;
            }
        }
        i++;
    }
    return result;
};