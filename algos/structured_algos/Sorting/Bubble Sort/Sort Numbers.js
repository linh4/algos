// Sort the array of numbers in order.

function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
      }
    }
  }
  return arr
}

// or
// line 10 =>
// let temp = arr[j]
// arr[j] = arr[j+1]
// arr[j+1] = temp

bubbleSort([24,5,6,1,78,34,2,10])


// no swaps:
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  let noswaps
  for (let i = arr.length; i > 0; i--) {
    noswaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
        noswaps = false
      }
    }
    if(noswaps) break
  }
  return arr
}

bubbleSort([8,1,2,3,4,5,6,7])
