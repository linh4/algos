// Given 2 strings, write a function to determine if the 2nd string is an anagram of the first.
// An anagram is a word, a phrase, or name formed by regarding the letters of another, such as cinema formed from iceman.


function anagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  const obj = {}
  for (let i in str1) {
    let letter = str1[i]
    obj[letter] ? obj[letter] += 1 : obj[letter] = 1
  }
  for (let i in str2) {
    let letter = str2[i]
    // can't find the letter -> false
    if (!obj[letter]) {
      return false
    }
    // reduce the count of each found letter
    else {
      obj[letter] -= 1
    }
  }
  return true
}

anagrams('cinema', 'iceman')
