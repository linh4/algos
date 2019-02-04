// Capitalize the first character of the sentence

function capitalize(str) {
  const words = []
  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1))
  }
  return words.join(' ')
}

capitalize('a lazy fox')
// return 'A Lazy Fox'

// Another solution

// function capitalize(str) {
//   let result = str[0].toUpperCase()
//   for (let i = 1; i < str.length; i++) {
//     if (str[i-1] === '') {
//       result += str[i].toUpperCase()
//     } else {
//       result += str[i]
//     }
//   }
//   return result
// }
// doesn't work well if the str starts with '?' or any special character
