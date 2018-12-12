// Given a 32-bit signed integer, reverse digits of an integer.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     let r = 0;
    while (x!=0) {
        r = r*10 + x % 10;
        x = parseInt(x/10);
    }
    if (Math.abs(r) > Math.pow(2, 31)) {
        return 0;
    }
    return r;
};

// Another Solution

// var reverse = function(x) {
//     const result = (Math.abs(x)+ '').split('').reverse().join('') * (x > 0 ? 1: -1);
//     return Math.abs(result) > 2**31 ? 0 : result;
// };
