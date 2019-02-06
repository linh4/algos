class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(val === current.val) return undefined;
            if(val < current.val){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(val){
        if(this.root === null) return false;
        let current = this.root,
            found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            } else if(val > current.val){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(val){
        if(this.root === null) return false;
        let current = this.root,
            found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            } else if(val > current.val){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){
      let node = this.root
      let queue = []
      let data = []
      queue.push(node)
      while(queue.length){
        node = queue.shift()
        data.push(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
      return data
    }
    DFSPreOrder(){
      let data = []
      function traverse(node) {
        data.push(node.val)
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)
      }
      traverse(this.root)
      return data
    }
    DFSPostOrder(){
      let data = []
      function traverse(node) {
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)
        data.push(node.val)
      }
      traverse(this.root)
      return data
    }
    DFSInOrder(){
      let data = []
      function traverse(node) {
        node.left && traverse(node.left)
        data.push(node.val)
        node.right && traverse(node.right)
      }
      traverse(this.root)
      return data
    }
}


//queue: [20]
// data: []
// result: [20,10,23,4,11,29]

//      20
//  10     23
// 4  11     29

// let tree = new BinarySearchTree();
// tree.insert(20)
// tree.insert(10)
// tree.insert(4)
// tree.insert(11)
// tree.insert(23)
// tree.insert(29)
// tree.BFS()

module.exports = { Node, BinarySearchTree }
