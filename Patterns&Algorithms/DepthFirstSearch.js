//Recursive Approach
function DFS(graph, startNode, visited){
    if(!visited) visited = new Set();

    visited.add(startNode);
    
    for(let neighbour of graph[startNode]){
        if(!visited.has(neighbour)){
            DFS(graph, neighbour, visited);
        }
    }
}

//Iterative Approach
function DFS2(graph, startNode){
    let visited = new Set();
    let stack = [startNode];
    
    while(stack.length){
        let currentNode = stack.pop();
        
        if(!visited.has(currentNode)){
            visited.add(currentNode);
            stack.push(...graph[currentNode]);
        }
    }
}

function main(){
    let graph = {
        0: [1,2],
        1: [0,3,4],
        2: [0],
        3: [1],
        4: [1]
    };
    
    DFS(graph, 0);
    DFS2(graph, 0);

    console.log(visited);


}