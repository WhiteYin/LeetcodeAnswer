/**
 * 思路：单词转数组排序再转单词检测是否相等
*/
function anagrams(word, words) {
    let wordStr = word => word.split("").sort().join("");
    let result = [];
    words.map(element => {
        if (wordStr(element) === wordStr(word)) {
            result.push(element);
        }
    });
    return result;
}
module.exports = anagrams;