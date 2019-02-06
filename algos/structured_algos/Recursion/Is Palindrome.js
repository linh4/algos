// Write a function which returns true if the string passed to it is a palindrome.
// Otherwise, return false

function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true


// Return the string in reverse
// function reverse(str){
//   if(str.length === 0) return str
//   return reverse(str.slice(1)) + str[0];
// }
// reverse('awesome') // 'emosewa'

module.exports = isPalindrome
