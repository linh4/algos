// Write a function which accepts a variable of arguments, and check if there are any duplicates among the arguments passed in.

// time: O(n)
// space: O(n)

// Use Frequency Counter:
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

// Use Multiple Pointers
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

// Use Set to solve the problem in one line
// Set return unique arguments
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

areThereDuplicates(1,2,2)
// return true
