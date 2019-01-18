function createQueue(){
    const queue = [];
    return{
        enqueue(item){
            queue.unshift(item); //unfish add top
        },
        dequeue(){
            return queue.pop(); //del last element first in
        },
        get length(){
            return queue.length;
        },
        peek(){
            return queue[queue.length-1]
        },
        isEmpty(){
            return queue.length === 0;
        },
        print(){
            queue.forEach((value) => console.log(value));
        }
    }
}

function createNode(key){
    const neighbors = []
    return {
        key, 
        neighbors,
        addNeighbor(node){
            neighbors.push(node)
        }
    }
}

function createGraph(directed = false){
    const nodes = []
    const edges = []


    return{
        directed,
        nodes,
        edges,

        addNode(key){
            nodes.push(createNode(key))
        },


        getNode(key){
            return nodes.find(node => node.key===key)
        },

        addEdge(node1Key, node2key){
            const node1 = this.getNode(node1Key)
            const node2 = this.getNode(node2key)
           

            node1.addNeighbor(node2)
            edges.push(`${node1Key}--${node2key}`)

            if(!directed){
                node2.addNeighbor(node1)
            }


        },
        print(){
            return nodes.map(function ({key, neighbors}){
               let result = key;
               if(neighbors.length){
                   result += `=> ${neighbors.map(neighbor => neighbor.key)
                        .join (' ')}`
               } 
               return result
            })
            .join('\n')
        },
        breadthFirtSearch(startingNodeKey, visitFn)
        {
            const startingNode = this.getNode(startingNodeKey)

            const visited = nodes.reduce((acc, node) => {
                acc[node.key] = false
                return acc
            },{})
            const queue = createQueue()
            queue.enqueue(startingNode)


            while(!queue.isEmpty()){
                const currentNode = queue.dequeue()

                if(!visited[currentNode.key]){
                    visitFn(currentNode)
                    visited[currentNode.key] = true
                }

                currentNode.neighbors.forEach(node => {
                    if(!visited[node.key]){
                        queue.enqueue(node)
                    }
                })
            }

        },
        depthFirstSearch(startingNodeKey, visitFn){
            const startingNode = this.getNode(startingNodeKey)

            const visited = nodes.reduce((acc,node)=>{
                acc[node.key] = false
                return acc
            },{})
            function explore(node){
                if(visited[node.key]){
                    return 
                }

                visitFn(node)
                visited(node.key) = true

                node.neighbors.forEach(node =>{
                    explore(node)
                })
                explore(startingNode)
            }

            
        }  
    }
}

const graph = createGraph(true)
const nodes = ['a','b','c','d','e','f']
const edges = [
    ['a','b'],
    ['a','e'],
    ['a','f'],
    ['b','d'],
    ['b','e'],
    ['c','b'],
    ['d','c'],
    ['d','e'],
]

nodes.forEach(node => graph.addNode(node))
edges.forEach(edge => graph.addEdge(...edge))
graph.breadthFirtSearch('a',node => console.log(node.key))

//graph.depthFirstSearch('a',node => console.log(node.key))
/*

const graph = createGraph(true)

graph.addNode("Brian")
graph.addNode("Julio")
graph.addNode("Mario")
graph.addNode("Jhon")
graph.addNode("Ivan")
graph.addNode("Yuly")
graph.addNode("Dayana")

graph.addEdge("Brian","Julio")
graph.addEdge("Brian","Mario")
graph.addEdge("Brian","Jhon")
graph.addEdge("Julio","Brian")
graph.addEdge("Julio","Brian")
graph.addEdge("Julio","Mario")
graph.addEdge("Julio","Jhon")
graph.addEdge("Julio","Ivan")
graph.addEdge("Mario","Yuly")
graph.addEdge("Yuly","Dayana")

//console.log(graph.print())
graph.breadthFirtSearch('Brian',node => console.log(node.key) )
*/


