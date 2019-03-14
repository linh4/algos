// Given a sorted array nums,
// remove the duplicates in-place such that each element appear only once and return the new length.

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let i=0;
  while(nums[i] !== undefined){
    if(nums[i] === nums[i-1]){
      nums.splice(i,1);
    }
    else{
      i++;
    }
  }
  return nums.length;
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])
// return 5
