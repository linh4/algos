
// const findClosest = (arr, goal) => {
//   arr.reduce(function (prev, curr) {
//     return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
//   });
// }

let counts = [4, 9, 15, 6, 2],
  goal = 5;

let closest = counts.reduce(function(prev, curr) {
  return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
});

console.log(closest);
// return 4



findClosest([2, 42, 82, 122, 162, 202, 242, 282, 322, 362], 80)
// Outputs 82

/*
function closest(arr,val){
    return Math.max.apply(null, arr.filter(function(v){return v <= val}))
}
*/
