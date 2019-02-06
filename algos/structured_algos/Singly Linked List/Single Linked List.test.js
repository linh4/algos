const { SinglyLinkedList, Node } = require('./Singly Linked List')

let list = new SinglyLinkedList()

test('If the list has one value, expect the head to be that value', () => {
  list.push('hi');
  expect(list.head.val).toBe('hi')
})

test('If the list has one value, expect the tail to be that value', () => {
  expect(list.tail.val).toBe('hi')
})

test('Singly linked list can add on by pushing.', () => {
  list.push('you')
  expect(list.tail.val).toBe('you')
})
