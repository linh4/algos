// Given an array nums and a value val, remove all instances of that value in-place and return the new length


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  let i = 0;
  while (nums[i] !== undefined) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
};

removeElement([3, 2, 2, 3], 3)
// return [2,2]
