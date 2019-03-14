// Write a function that returns the number of vowels
// used in the string. "aeiuo"


function vowels(str) {
  let count = 0
  const checker = ['a', 'e', 'i', 'o', 'u']
  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++
    }
  }

  return count
}


vowels('Hi there')
// return 3
vowels('why')
// return 0


// Another solution
/*
function vowels(str) {
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}
*/
