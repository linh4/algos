const HashTable = require('./Hash Table')

let ht = new HashTable()
ht.set('cats', 'are great')
ht.set('hola', 'gracious')
ht.set('dogs', 'are ok')

it('return array value input with nested array', () => {
  expect(ht.keyMap).toMatchObject([[["hola", "gracious"]], [["cats", "are great"]], undefined, [["dogs", "are ok"]]])
})

it('return the value of get method', () => {
  expect(ht.get('cats')).toMatchObject(['cats', 'are great'])
})
it('return an array of keys', () => {
  expect(ht.keys()).toMatchObject(['hola', 'cats', 'dogs'])
})
it('return an array of values', () => {
  expect(ht.values()).toMatchObject(['gracious', 'are great', 'are ok'])
})
