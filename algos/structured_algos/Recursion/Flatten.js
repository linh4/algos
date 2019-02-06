// Write a function which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr){
  let newArr = []
  if(arr.length === 0) return newArr
  for(let i = 0; i<arr.length; i++) {
    // check if the passed value is an array
    if(Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]))
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}

flatten([1, 2, 3, [4, 5] ])

module.exports = flatten
