# LeetcodeAnswer
leedcode解答，新手向

no.566
Decription:
In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix. 

/*解题思路
js没有多维数组的概念，但是仍可使用arr[i][j]访问相应的元素。所以该题首先接收nums数组，获取其列、行数。再与传来的变形后数组行列数比较。变形后数组用newNums声明，将其每一行都赋值为一个新的数组，从而实现多维数组的定义。之后就是循环赋值，并判断临界条件：每一行的长度=指定的列数。
*/

/*反思
该题并不算困难，但是在js中多维数组的概念并不明确，所以想了一天半的时间。后来想到多维数组不过是每一行都是一个数组而已，从而如解题思路中所说做了出来。如果换做c++或java，怕是很快就做出来了。可惜我目前是个前端工程师，应该多练习js编程。
有空还要看看markdown语法，把文本格式搞得好看些。
*/
