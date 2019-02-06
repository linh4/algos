const isPalindrome = require('./Is Palindrome')
const { capitalizeFirst, capitalizedWords } = require('./Capitalize First')
const fib = require('./Fibonacci');
const flatten = require('./Flatten')
const someRecursive = require('./Some Recursive')

// palindrome
test('input tacocat should be true', () => {
  expect(isPalindrome('tacocat')).toBe(true)
})
test('input foobar should be true', () => {
  expect(isPalindrome('foobar')).toBe(false)
})

// Capitalize
test('input car, taco ,banana should capitalize first character', () => {
  expect(capitalizeFirst(['car','taco','banana'])).toEqual(['Car','Taco','Banana'])
})
test('input array of strings should capitalize all the characters', () => {
  expect(capitalizedWords(['i', 'am', 'learning', 'recursion'])).toEqual(['I', 'AM', 'LEARNING', 'RECURSION'])
})

test('input 10 should return 55', () => {
  expect(fib(10)).toBe(55)
})

test('input [1, 2, 3, [4, 5] ] should flat the array', () => {
  expect(flatten([1, 2, 3, [4, 5] ])).toEqual([1,2,3,4,5])
})

test('input [4,6,8] return false', () => {
  const isOdd = val => val % 2 !== 0
  expect(someRecursive([4,6,8], isOdd)).toBe(false)
})
