// Write a function which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// sliding window: add and substract
// time complexity: O(n)

ffunction maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) return null
  // create the first sum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  // start from the sum we have already
  for (let i = num; i < arr.length; i++) {
    // add the next element and substract 1 from the front
    tempSum = tempSum - arr[i-num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

maxSubarraySum([11,2,4,8,5,9,3,6], 3)
// return 22
