class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stacks {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }
  push(val){
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      let temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    return ++this.length
  }
  pop(){
    if (!this.first) return null
    let temp = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.length--
    return temp.val
  }
}
