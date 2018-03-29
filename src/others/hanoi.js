//x为起始位置；y为辅助位置；z为目标位置
function hanoi(n, x, y, z) {
    if (n === 1) {
        move(n, x, z);
    } else {
        //n之上的n-1个盘子要从当前位置移动到原辅助位置
        hanoi(n - 1, x, z, y);
        //第n个盘子从当前位置移动到目标位置
        move(n, x, z);
        //n-1个盘子从辅助位置移动到目标位置
        hanoi(n - 1, y, x, z);
    }
}

function move(n, x, y) {
    console.log(`move ${n} from ${x} to ${y}`);
}

/**
move 1 from x to z
move 2 from x to y
move 1 from z to y
move 3 from x to z
move 1 from y to x
move 2 from y to z
move 1 from x to z
 */
hanoi(3,'x','y','z')