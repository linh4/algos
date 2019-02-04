class MaxBinaryHeap {
  constructor() {
    this.val = [60, 45, 34, 17, 28, 10]
  }
  insert(element){
    this.val.push(element)
    this.bubbleUp()
  }
  bubbleUp(){
    let idx = this.val.length - 1
    const element = this.val[idx]
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1)/2)
      let parent = this.val[parentIdx]
      if (element <= parent) break
      this.val[parentIdx] = element
      this.val[idx] = parent
      idx = parentIdx
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(40)
