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
// return true


// for space between string and uppercase:

function anagrams(str1, str2) {
  const charMap1 = buildCharMap(str1)
  const charMap2 = buildCharMap(str2)

  if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
    return false
  }
  for(let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false
    }
  }
  return true
}

function buildCharMap(str) {
  const charMap = {}

  for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}

anagrams('rails safety', 'fairy tales')
// return true


// Another Solution using sort, code is shorter:

function anagrams(str1, str2) {
  return cleanString(str1) === cleanString(str2)
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}
