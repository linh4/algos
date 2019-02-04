// return the count of each character in the string

function charCount(str) {
  // create an obj which contain char as key and count as value
  const obj = {}
  for(let i = 0; i < str.length; i++){
    const char = str[i].toLowerCase()
    // use regex to get only characters
    if(/[a-z0-9]/.test(char)){
      if(obj[char] > 0) {
        obj[char]++
      } else {
        obj[char] = 1
      }
    }
  }
  return obj
}


// Another Solution

// function charCount(str) {
//   const obj = {}
//   for(let char of str){
//     char = char.toLowerCase()
//     if(isChar(char)){
//       obj[char] = ++obj[char] || 1
//     }
//   }
//   return obj
// }

// using code will reduce the time complexity, it runs 55% faster than regex

// function isChar(str) {
//   let code
//   code = str.charCodeAt(0)
//   if(!(code > 47 && code < 58) && //numeric (0-9)
//     !(code > 64 && code < 91) && //upper alpha (A-Z)
//     !(code > 96 && code < 123)) { //lower alpha (a-z)
//       return false
//   }
//   return true
// }

charCount("Hello Hiii!!!")
