// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  const obj = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  let stack = []

  for (let i of s) {
    if (obj[i]) {
      stack.push(obj[i])
    } else {
      if (i !== stack.pop()) return false
    }

    // or
    // if (!stack.length) stack.push(i);
    // else {
    //   if (i === obj[stack[stack.length - 1]])
    //     stack.pop();
    //   else
    //     stack.push(i);
    // }
  }
  return !stack.length;
}


isValid("()[]{}")
// return true


// Time complexity : O(n) because we simply traverse the given string one character at a time and push and pop operations on a stack take O(1) time.
// Space complexity : O(n) as we push all opening brackets onto the stack and in the worst case, we will end up pushing all the brackets onto the stack. e.g. ((((((((((.
