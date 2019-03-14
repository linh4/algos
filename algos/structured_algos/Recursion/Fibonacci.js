// Write a function which accepts a number and return the nth number in the Fibonacci sequence.

function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

module.exports = fib

// another solution
function fib(n) {
  const result = [0, 1]

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1]
    const b = result[i - 2]

    result.push(a + b)
  }
  return result[n]
}
