// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
//
// If the last word does not exist, return 0.
//
// Note: A word is defined as a character sequence consists of non-space characters only.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(' ').filter( e => {
        return e.length > 0
    })
    return arr.length > 0 ? arr[arr.length - 1].length : 0
};

// Another Solution
// var lengthOfLastWord = function(s) {
//     let arr = s.match(/\S+/g) || 0;
//     return arr && arr.pop().length;
// };

// Another Solution

// var lengthOfLastWord = function(s) {
//     let arr = s.split(' ')
//     for (let i = arr.length - 1; i >= 0; i--) {
//       if (arr[i] !== '' && arr[i] !== ' ') {
//         return arr[i].length
//       }
//     }
//     return 0
// }

lengthOfLastWord("Hello World")
// return 5
lengthOfLastWord("a")
// return 1
