// Write a function which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return the array that includes both values that sum to zero or undefined if a pair does not exist

// use multiple pointers pattern, point to the left and right
// Time complexity: O(n)
// Space complexity: O(1)

function sumZero(arr) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

sumZero([-3, -2, -1, 0, 1, 2, 3, 4])
// return [-3, 3]
