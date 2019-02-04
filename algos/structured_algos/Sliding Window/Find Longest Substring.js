// Write a function which accepts a string and returns the length of the longest substring with all distinct characters.

// time: O(n)

function findLongestSubstring(str) {
  let longest = 0
  let obj = {}
  let start = 0
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (obj[char]) {
      start = Math.max(start, obj[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1)
    // store the index of the next char so as to not double count
    obj[char] = i + 1
  }
  return longest
}

findLongestSubstring('thecatinthehat')
