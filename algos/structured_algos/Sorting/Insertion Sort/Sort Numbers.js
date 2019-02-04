// Sort the array of numbers in order.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const unSortedEl = arr[i]
    let insertIndex = i
    for (let j = i - 1; j >= 0 && unSortedEl < arr[j]; j--) {
      arr[j + 1] = arr[j]
      insertIndex = j
    }
    arr[insertIndex] = unSortedEl
  }
  return arr
}

insertionSort([3,7,1,10,9])



// refactored with swapping elements
// const insertionSort = arr => {
//   let count = 0;
//   for (let i = 1; i < arr.length; i++) {
//     let currIndex = i;
//     for (let j = i - 1; j >= 0 && arr[currIndex] < arr[j]; j--) {
//       count++;
//       [arr[currIndex], arr[j]] = [arr[j], arr[currIndex]];
//       currIndex--;
//     }
//   }
//   return arr;
// }
