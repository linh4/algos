// Write a function which accepts an array of strings.
// Capitalize the first letter of each string in the array.

function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)]
  }
  const res = capitalizeFirst(array.slice(0, -1))
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1)
  res.push(string)
  return res
}

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


// Returns new array containing each word capitalized
function capitalizedWords (arr) {
  if(arr.length === 1) {
    return [arr[0].toUpperCase()]
  }
  let res = capitalizedWords(arr.slice(0,-1))
  res.push(arr.slice(arr.length-1)[0].toUpperCase());
  return res;
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizedWords(words);
// ['I', 'AM', 'LEARNING', 'RECURSION']

module.exports = { capitalizeFirst, capitalizedWords }
