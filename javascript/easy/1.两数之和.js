/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    tem = [];
    for(let i = 0; i < nums.length; i++){
        let num2 = target - nums[i];
        let num2_index = nums.indexOf(num2); // 这个里面的内部还是遍历数组
        if(num2_index){
            tem.push(i);
            tem.push(num2_index);
            break;
        }
    }
    return tem;
};


