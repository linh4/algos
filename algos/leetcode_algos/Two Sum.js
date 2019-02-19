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

// Another Solution using HashMap

// const twoSum = function(nums, target) {
//   let obj = {}
//   let arr = []
//   for (let i = 0; i < nums.length; i++) {
//     let element = nums[i]
//     if (obj[element]) {
//       arr.push([obj[element], element])
//     } else {
//       obj[target - element] = element
//     }
//   }
//   return arr
// }
//
// twoSum([10,20,10,40,50,60,70,30],50)
// // return [[10,40], [20,30]]
