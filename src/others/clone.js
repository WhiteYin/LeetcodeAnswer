// 存放已遍历过的对象和复制后的对象
const mapOldtoNew = [];

// 检查一个对象是否被遍历并且返回其复制对象
function check(obj) {
    const result = mapOldtoNew.filter((item) => {
        if (Object.is(item.old, obj)) {
            return true;
        }
        else {
            return false;
        }
    });
    // 如果已被遍历
    if (result.length === 1) {
        return result[0].new;
    }
    // 否则返回undefined
    else {
        return;
    }
}

// 记录已遍历的对象和其映射
function record(oldObj, newObj) {
    const item = {
        new: newObj,
        old: oldObj
    };

    mapOldtoNew.push(item);
}

/**
 * 遍历对象属性和值并输出
 * 1. 对于number、string、boolean、null和undefined和Function和Date直接输出
 * 2. 对于Array、Object类型需要递归调用
 */
function tranverse(obj) {
    // 如果不是对象或数组则返回原变量
    if ((Object.prototype.toString.call(obj) !== '[object Object]') && !Array.isArray(obj)) {
        return obj;
    }

    // 目标对象
    const newObj = {};
    // 如果是数组则需复制其length属性，否则Array.from方法无法将其转换成数组
    if (Array.isArray(obj)) {
        newObj.length = obj.length;
    }
    // 源对象的键
    const keys = Object.keys(obj);
    // 记录当前复制的对象
    record(obj, newObj);

    for (const key of keys) {
        const value = obj[key];
        // 如果属性值类型为基础数据类型和Function
        if (typeof value !== 'object') {
            newObj[key] = value;
        }
        // 如果是null
        else if (Object.is(value, null)) {
            newObj[key] = value;
        }
        // 如果为数组
        else if (Array.isArray(value)) {
            // TODO: 如果数组项为对象？
            const checked = check(value);
            // 如果已经遍历过了
            if (checked) {
                newObj[key] = checked;
            }
            // 否则进行递归遍历
            else {
                const newArray = tranverse(value);
                newObj[key] = Array.from(newArray);
            }
        }
        // 如果是Date或Math等对象
        else if (Object.prototype.toString.call(value) !== '[object Object]') {
            newObj[key] = value;
        }
        // 如果是对象
        else if (Object.prototype.toString.call(value) === '[object Object]') {
            const checked = check(value);
            // 如果已经遍历过了
            if (checked) {
                newObj[key] = checked;
            }
            // 否则进行递归遍历
            else {
                newObj[key] = tranverse(value);
            }
        }
    }
    return newObj;
}

module.exports = tranverse;

const testObj = {
    a: 'a',
    b: '1',
    c: true,
    d: undefined,
    e: null,
    f: [1, 2, 3],
    h: function () {
        alert(123);
    }
};
const childObj = {
    i: 1,
    j: false
};
testObj.f.push(childObj);
testObj.g = testObj;
testObj.k = childObj;
testObj.l = childObj;

const newObj = tranverse(testObj);
newObj.f[3].i = 0;
newObj.f.push(4);
newObj.g.m = 123;
childObj.i = 2;

testObj;
newObj;
