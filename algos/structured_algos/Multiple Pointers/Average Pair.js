// Write a function which accepts a sorted array and a target average
// determine if there is a pair of values in the array where the avarage of the pair equal to the target average.
// There may be more than one pair that matches the average target.


// time: O(n)
// space: O(1)
function averagePair(arr, num){
  let start = 0
  let end = arr.length - 1
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if(avg === num) return true
    // move to the next element
    else if (avg < num) start++
    // move back 1 element
    else end--
  }
  return false
}

averagePair([1,2,3], 2.5)
