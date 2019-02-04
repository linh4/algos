// Given an array and a chunk size, divide the array into many subarrays
// where each subarrays is of length size

function chunkArr(arr, size) {
  const chunked = []

  for (let element of arr) {
    const sub = chunked[chunked.length-1]
    if (!sub || last.length === size) {
      chunked.push([element])
    } else {
      sub.push(element)
    }
  }
  return chunked
}

chunkArr([1,2,3,4,5], 3)
// return [[1,2,3], [4,5]]

// Another solution
// function chunkArr(arr, size) {
//   const chunked = []
//   let idx = 0
//   while(idx < arr.length) {
//     chunked.push(arr.slice(idx, idx + size))
//     idx += size
//   }
//   return chunked
// }
