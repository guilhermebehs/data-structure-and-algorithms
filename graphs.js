export class Graph{
  
  #vertices

  constructor(){
    this.#vertices = new Map()
  }

  addVertex(vertex){
    if(!this.#vertices.has(vertex))
        this.#vertices.set(vertex, [])
  }

  addEdge(vertex1,vertex2){
     if(this.#vertices.has(vertex1) && this.#vertices.has(vertex2)){
      this.#vertices.get(vertex1).push(vertex2)
      this.#vertices.get(vertex2).push(vertex1)
     }
  }

  breadhFirstSearch(startingFrom, target){
    const queue = [startingFrom]
    const visited = []

    while(queue.length){
      const vertex = queue.shift()
      if(vertex === target)
        return true
      this.#vertices
         .get(vertex)?.forEach((neighbour)=> {
           if(!visited.includes(neighbour)){
               queue.push(neighbour)
               visited.push(neighbour)
           }
         })
    }
    return false

  }
}


const graph = new Graph()

graph.addVertex('Campo Bom')
graph.addVertex('Novo Hamburgo')
graph.addVertex('Sapiranga')
graph.addVertex('São Leopoldo')
graph.addVertex('Canoas')
graph.addVertex('Porto Alegre')

graph.addEdge('Campo Bom', 'Sapiranga')
graph.addEdge('Campo Bom', 'Novo Hamburgo')
graph.addEdge('Sapiranga', 'Novo Hamburgo')
graph.addEdge('Novo Hamburgo', 'São Leopoldo')
graph.addEdge('São Leopoldo', 'Canoas')
graph.addEdge('São Leopoldo', 'Porto Alegre')
graph.addEdge('Canoas', 'Porto Alegre')


console.log(graph.breadhFirstSearch('Campo Bom','Porto Alegre'))




