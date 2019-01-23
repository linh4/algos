// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Solution 1

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || strs.length === 0) return ''

 // get the first word so we can compare with other words
  const prev = strs[0];
  for (let i = 0; i < prev.length; i++) {
    // the letter of the first word
    const char = prev[i];
    for (let j = 1; j < strs.length; j++) {
      // get the next word
      const next = strs[j];
      if (next[i] !== char) return prev.slice(0, i);
    }
  }
  return prev;
};

longestCommonPrefix(["leetcode", "leet", "lee", "le"])

// Solution 2
// apply reduce

// var longestCommonPrefix = function(strs) {
//      if (!strs || strs.length === 0) return ''
//     return strs.reduce((prev, next) => {
//         let i = 0
//         while (prev[i] && next[i] && prev[i] === next[i]) i++
//         return prev.slice(0, i)
//     });
// };
