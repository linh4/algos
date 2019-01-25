// Given a string, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longest = 0
  let obj = {}
  let start = 0
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (obj[char]) {
      start = Math.max(start, obj[char]);
    }
    // start new search with repeated word's last location + 1
    // real length -> from for example 3 to 5 is 3, so it's 5-3+1 and + 1 happens later
    longest = Math.max(longest, i - start + 1)
    obj[char] = i + 1
  }
  return longest
}

lengthOfLongestSubstring("abcabcbb")
// return 3
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
             // Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
