// 题目来源：https://www.zhihu.com/question/265935669/answer/301605826
function monkey(num, sum) {
    const newSum = ((sum * 5) + 1) / 4,
        intSum = Number.parseInt(newSum, 10);
    if (num === 1) {
        console.warn((sum * 5) + 1);
        return true;
    }
    if (newSum !== intSum) {
        return false;
    }
    // console.warn(num, (sum * 5) + 1);
    return monkey(num - 1, newSum);
}
for (let i = 1; ; i++) {
    if (monkey(5, i)) {
        break;
    }
}
