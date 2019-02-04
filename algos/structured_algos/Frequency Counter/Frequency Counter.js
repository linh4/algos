// Write a function that accepts 2 arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.


// This method uses nested loop and the time complexity is O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    let rightIdx = arr2.indexOf(arr1[i] ** 2)
    if (rightIdx === -1) {
      return false
    }
    arr2.splice(rightIdx, 1)
  }
  return true
}

same([1, 2, 3, 2], [1, 9, 4, 4])
// return true


// Another Solution
// This method uses Frequency Counter and it has 3 loops which is O(3n) => O(n)
// Better than the method above

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false
//   }
//   let frequency1 = {}
//   let frequency2 = {}
//   // count each element in in arr1 and arr 2
//   for (let i of arr1) {
//     frequency1[i] = (frequency1[i] || 0) + 1
//   }
//   for (let i of arr2) {
//     frequency2[i] = (frequency2[i] || 0) + 1
//   }
//   // check if the key in obj 1 is the key^2 in obj 2
//   for (let key in frequency1) {
//     if (!(key ** 2 in frequency2)) {
//       return false
//     }
//     if (frequency2[key ** 2] !== frequency1[key]) {
//       return false
//     }
//   }
//   return true
// }
