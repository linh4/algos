const { Node, BinarySearchTree } = require('./Binary Search Trees')
// Calling the breadth first search from our binary tree class

test('input of 20,10,4,11,23,29 to return array [10,6,15,3,8,20]', () => {
  let tree = new BinarySearchTree()
  tree.insert(20)
  tree.insert(10)
  tree.insert(4)
  tree.insert(11)
  tree.insert(23)
  tree.insert(29)

  expect(tree.BFS()).toMatchObject([20,10,23,4,11,29])
})

test('expect BST with input of 20,25,4,10,13 to do a pre-ordered DSF to return [20,4,10,13,25,24]', () => {
  let tree = new BinarySearchTree()
  tree.insert(20)
  tree.insert(25)
  tree.insert(4)
  tree.insert(10)
  tree.insert(13)
  tree.insert(24)
  expect(tree.DFSPreOrder()).toMatchObject([20,4,10,13,25,24])
})

test('expect BST with input of 20,25,4,10,13 to do a pre-ordered DSF to return [13,10,4,24,25,20]', () => {
  let tree = new BinarySearchTree()
  tree.insert(20)
  tree.insert(25)
  tree.insert(4)
  tree.insert(10)
  tree.insert(13)
  tree.insert(24)
  expect(tree.DFSPostOrder()).toMatchObject([13,10,4,24,25,20])
})
