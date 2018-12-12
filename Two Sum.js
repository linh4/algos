// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target) {
                arr.push(i, j)
            }
        }
    }
    return arr
};

// Another Solution

// const twoSum = function(nums, target) {
    // let temp = [];
    // for (let i = 0; i < nums.length; i++) {
    //     if (temp[target - nums[i]] !== undefined) {
    //         return [temp[target - nums[i]], i];
    //     }
    //     if (temp[nums[i]] === undefined) {
    //         temp[nums[i]] = i;
    //     }
    // }
// };
