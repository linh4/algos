// Given a sorted array and a target value,
// return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    let len = nums.length,
        i;

    for (i = 0; i < len; i++) {
        if (target <= nums[i]) {
            return i;
        }
    }
    return len;
};

// Input: [1,3,5,6], 5
// Output: 2

// Input: [1,3,5,6], 7
// Output: 4

// Input: [1,3,5,6], 0
// Output: 0

// Another solution:
/*
const searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let middle = parseInt((start + end) / 2);

    while(start <= end) {
        if (target === nums[middle]) {
            return middle;
        } else if (target > nums[middle]) {
            start = middle + 1;
        } else if (target < nums[middle] ) {
            end = middle - 1;
        }
        if (start > end) {
            if (target < nums[middle]) {
                return middle;
            } else {
                return middle + 1;
            }
        } else {
            middle = parseInt((start + end) / 2);
        }
    }
};
*/
