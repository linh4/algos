// Write a function which accepts an array of numbers and return the array which contains only odd values.

function collectOddValues(arr) {
  let newArr = []
  if (arr.length === 0) {
    return newArr
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)))
  return newArr
}

collectOddValues([1,3,2,5,6,7,8])
