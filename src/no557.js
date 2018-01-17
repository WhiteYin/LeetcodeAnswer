/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var array = s.split(' ');
    for(let i=0;i<array.length;i++){
        array[i]=array[i].split("").reverse().join("");
    }
    return array.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));