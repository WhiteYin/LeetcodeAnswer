/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums,r,c){
	//��ȡ����
	var cols = nums[0].length��
	//��ȡ����
	var rows = num.length;
	//����������
	var newNums = new Array();
	var newRows = 0;
	//��ά����ڶ�ά
	newNums[newRows] = new Array();
	//�жϲ����Ϸ�
	if(r==0||(r*c!=cols*rows)){
		//����ԭ����
		return nums;
	}else{
		//ѭ����ֵ
		for(let i=0;i<rows;i++){
			for(let j=0;j<cols;j++){
				newNums[newRows].push(nums[i][j]);
				if((newNums[newRows].length==c)&&newRows<r-1){
					//�����������������������ٴθ�ֵ
					newRows++;
					newNums[newRows] = new Array();
				}
			}
		}
		return newNums;
	}
	
};