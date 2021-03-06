/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums,r,c){
	//获取列数
	var cols = nums[0].length；
	//获取行数
	var rows = num.length;
	//声明新数组
	var newNums = new Array();
	var newRows = 0;
	//二维数组第二维
	newNums[newRows] = new Array();
	//判断参数合法
	if(r==0||(r*c!=cols*rows)){
		//返回原数组
		return nums;
	}else{
		//循环赋值
		for(let i=0;i<rows;i++){
			for(let j=0;j<cols;j++){
				newNums[newRows].push(nums[i][j]);
				if((newNums[newRows].length==c)&&newRows<r-1){
					//当列数被填满则行数增加再次赋值
					newRows++;
					newNums[newRows] = new Array();
				}
			}
		}
		return newNums;
	}
	
};