/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    //���鳤��
    var len=nums.length;
    var index = 0;
    var newNums = new Array();
    for(let i=0;i<len;i++){
        //�����ļ���
        index=(Math.abs(nums[i])-1)%len; 
        if(nums[index]>0){
            //�������ֵ�һ�Σ��ø���
         nums[index] = -nums[index];
        }else{
            //�������ֵڶ��Σ�����ֵ�ټ�ȥ����
          nums[index] -= len;   
        }
    }
    for(let i=0;i<len;i++){
        //����δ���ֵ���i����������Ϊ�������������µ�����������
        if(nums[i]>0){
            newNums.push(i+1);
        }
    }
    return newNums;
};