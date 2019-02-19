const Graph = require('./Graphs')

let g = new Graph
g.addVertex('Dog')
g.addVertex('Cat')
g.addVertex('Bird')

it('returns keys with empty array when adding vertex', () => {
  expect(g.adjacencyList).toMatchObject({'Dog': [], 'Cat': [], 'Bird': []})
})

it('returns values which are connection between vertexes', () => {
  g.addEdge('Cat', 'Dog')
  g.addEdge('Bird', 'Cat')
  expect(g.adjacencyList).toMatchObject({'Dog': ['Cat'], 'Cat': ['Dog', 'Bird'], 'Bird': ['Cat']})
})

it('removes edges between vertex', () => {
  g.removeEdge('Cat', 'Dog')
  expect(g.adjacencyList).toMatchObject({'Dog': [], 'Cat': ['Bird'], 'Bird': ['Cat']})
})

it('remove vertex and its connection', () => {
  g.removeVertex('Cat')
  expect(g.adjacencyList).toMatchObject({'Dog': [], 'Bird': []})
})
