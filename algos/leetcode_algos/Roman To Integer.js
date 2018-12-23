// Given a roman numeral, convert it to an integer

/**
 * @param {string} s
 * @return {number}
 */
let list = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

let romanToInt = function(s) {
  let result = 0
    for (let i = 0; i < s.length; i++) {
      let current = list[s[i]]
      // the loop return 0 if given only one letter, length = 1
      let next = i + 1 === s.length ? 0 : list[s[i+1]];
      if(current < next) {
        result += next - current
        // jump to the next 2 element so it won't repeat the same element
        i++
      } else {
        result += current
      }
    }
    return result
};
