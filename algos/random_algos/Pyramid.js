// Write a function that accepts a possitive number N.
// The function should console log a pyramid shape
// with N levels using the # character.
// Make sure the step has spaces on both left and right hand side

function pyramid(n) {
  const midPoint = Math.floor((2 * n - 1) / 2)

  for (let row = 0; row < n; row++) {
    let level = ''
    for (let column = 0; column < 2 * n - 1; column++) {
      if (midPoint - row <= column && midPoint + row >= column) {
        level += '#'
      } else {
        level += ' '
      }
    }
    return level
  }
}

pyramid(3)
// return
//    '  #  '
//    ' ### '
//    '#####'


// another solution:
function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return
  }

  if (level.length === 2 * n -1) {
    console.log(level)
    return pyramid(n, row + 1)
  }

  const midpoint = Math.floor((2 * n - 1) / 2)
  let add
  if (midpoint - row <= level.lenth && midpoint + row >= level.length) {
    add = '#'
  } else {
    add = ' '
  }
  pyramid(n, row, level + add)
}
