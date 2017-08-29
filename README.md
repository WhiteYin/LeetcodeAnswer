# LeetcodeAnswer
leedcode解答，新手向
***
no.566 Reshape Matrix<br/>
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
***
<h3>no.442 Find All Duplicates in an Array </h3>
<p>2017-8-24 17：52</p>

Decription:<br/>
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements that appear twice in this array.
Could you do it without extra space and in O(n) runtime?

Example:
<pre>
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
</pre>

解题思路：
1. 不使用辅助空间的情况下确定数组内是否有重复，且复杂度为O（n）。该题传来的数组中，所有值都是1~n（n为数组长度），同时每个值最多出现2次；
2. 那么要操作原数组实现该算法，可以参考电灯开关的问题；
3. 当遍历到某个数时，检查将对应的灯是否打开。若关闭，则说明第一次遇到该数；否则，该数第二次出现。
4. 那么，数和灯该怎么对应呢？提示：数组中，所有值的范围都是1~n（n为数组长度）。<br/>
5. 将数组的值与数组的索引对应，灯的开与关的状态用数组值的正负表示即可。<br/>
**注意：所有值都是从1开始，而数组索引从0开始。**
***
<h3>485. Max Consecutive Ones </h3>
<p>2017-8-25 11:55</p>

Decription:<br/>
Given a binary array, find the maximum number of consecutive 1s in this array.

Example:
<pre>
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
</pre>

解题思路：
1. 需要一个计数器和最大值的记录；
2. 遍历二进制数组需要进行判断，对计数器赋值；
3. 使用逻辑操作对计数器赋值；
4. 在赋值后比较最大值与计数器的大小，将max（）赋给最大值记录器，返回即可。<br/>
*逻辑表*
<table>
  <tr>
    <th>count</th>
    <th>num[1]</th>
    <th>result</th>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>!0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>!0</td>
    <td>1</td>
    <td>count++</td>
  </tr>
</table>

*总结：题目做完一定要自己手动测一遍，而不是run code看结果，这样习惯很不好。
***

<h3>495. Teemo Attacking </h3>
<p>2017-8-28 11:28</p>

Decription:<br/>
In LOL world, there is a hero called Teemo and his attacking can make his enemy Ashe be in poisoned condition. Now, given the Teemo's attacking ascending time series towards Ashe and the poisoning time duration per Teemo's attacking, you need to output the total time that Ashe is in poisoned condition.

You may assume that Teemo attacks at the very beginning of a specific time point, and makes Ashe be in poisoned condition immediately.

Example1:
<pre>
Input: [1,4], 2
Output: 4
Explanation: At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned immediately. 
This poisoned status will last 2 seconds until the end of time point 2. 
And at time point 4, Teemo attacks Ashe again, and causes Ashe to be in poisoned status for another 2 seconds. 
So you finally need to output 4.
</pre>

Example2:
<pre>
Input: [1,2], 2
Output: 3
Explanation: At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned. 
This poisoned status will last 2 seconds until the end of time point 2. 
However, at the beginning of time point 2, Teemo attacks Ashe again who is already in poisoned status. 
Since the poisoned status won't add up together, though the second poisoning attack will still work at time point 2, it will stop at the end of time point 3. 
So you finally need to output 3.
</pre>

解题思路：<br/>
　　本来我是想用递归做的，但是因为给定的参数只有２个，所以用迭代了。
1. 迭代函数需要3个参数：前一个时间点、下一个时间点和中毒间隔，还需要一个计算出的中毒消失时间点；<br/>
2. 通过分类讨论，可以分成2种情况：下一个时间点艾希仍处于中毒中和艾希脱离中毒，然后分别计算出增加的中毒时间返回给原函数即可。<br/>

*注意:测试的数据中有一个很坑的地方，就是会传一个空数组。你这空数组有什么意思啊？提莫不攻击的咯？*
***
<h3>448. Find All Numbers Disappeared in an Array </h3>
<p>2017-8-29 15：54</p>

<strong>Decription:</strong><br/>
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements of [1, n] inclusive that do not appear in this array.
Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

<strong>Example:</strong>
<pre>
Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
</pre>

解题思路：
思路和no.442一样，但是要标记出现0次和出现2次，需要修改标志。具体怎么标识看个人想法，我是从第二次出现开始就减去数组长度，这种情况要注意在取值当索引时应该进行模运算。
