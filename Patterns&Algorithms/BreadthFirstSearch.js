//shortest path in an unweighted graph
function BFS(graph, startNode, endNode){
    let prev = solve(startNode)

    return reconstructedPath(startNode, endNode, prev)
}

function solve(s){
    let queue = [s]
    let visited = new Set()
    let prev = {}
    visited.add(s)

    while(queue.length){
        let currentNode = queue.shift()

        for(let neighbour of graph[currentNode]){
            if(!visited.has(neighbour)){
                visited.add(neighbour)
                queue.push(neighbour)
                prev[neighbour] = currentNode
            }
        }
    }
    return prev
}

function reconstructedPath(startNode, endNode, prev){
    let path = []
    let at = endNode

    while(at != null){
        path.push(at)
        at = prev[at]
    }
    path.reverse()
    if(path[0] === startNode) return path
    return []
}

//Iterative Approach
function BFS2(graph, startNode){
    let visited = new Set();
    let queue = [startNode];
    
    while(queue.length){
        let currentNode = queue.shift();
        
        if(!visited.has(currentNode)){
            visited.add(currentNode);
            queue.push(...graph[currentNode]);
        }
    }
}