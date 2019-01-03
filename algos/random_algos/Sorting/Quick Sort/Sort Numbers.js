// Sort the array of numbers in order.

function pivot(arr, start=0, end=arr.length-1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  let pivot = arr[start]
  let swapIdx = start
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

function quickSort(arr, left=0, right=arr.length-1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right)
    // left
    quickSort(arr, left, pivotIdx-1)
    // right
    quickSort(arr, pivotIdx+1, right)
  }
  return arr
}

// pivot([4,6,1,9,15,3,12])
quickSort([9,4,1,8,34,23,-3,6])
