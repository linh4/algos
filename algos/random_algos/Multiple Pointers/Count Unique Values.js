// Write a function which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// time complexity: O(n)

function countUniqueValues(arr) {
  if (arr.length === 0) return 0
  let i = 0
  // loop from the next element
  for (let j = 1; j < arr.length; j++) {
    // if the elements are not the same, move the i and set the element (i) to the new element (j)
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  // i is the index so the count is i+1
  return i + 1
}

countUniqueValues([1,1,1,2,2,2,3,4,4,4,5,6])
// return 6
