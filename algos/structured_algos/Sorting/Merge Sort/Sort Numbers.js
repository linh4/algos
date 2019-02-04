// Sort the array of numbers in order.

function merge(arr1, arr2) {
  let results = []
  let i = 0
  let j = 0
  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }
  while(i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while(j < arr2.length) {
    results.push(arr2[j])
    j++
  }
  return results
}

merge([100,200], [6,12,34])

// Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

mergeSort([7, 13, 56, 34])

// Another Solution

function merge(arr1, arr2) {
    let result = []
    let i = 0
    let j = 0
    while (i < arr1.length || j < arr2.length) {
        if (arr1[i] < arr2[j] || j >= arr2.length) {
            result.push(arr1[i++])
        } else {
            result.push(arr2[j++])
        }
    }
    return result
}
