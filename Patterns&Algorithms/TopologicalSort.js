/*
Topological ordering on a directed graph is a linear ordering of its vertices such that for every 
directed edge uv from vertex u to vertex v, u comes before v in the ordering. 
A topological ordering is possible if and only if the graph has no directed cycles, 
that is, if it is a directed acyclic graph (DAG).
*/

/*
    Algorithm Psuedocode:
    pick an unvisited node
    begin to visit node, do a depth first search on the node exploring only unvisited nodes
    on the recursive callback of the depth first search, add the current node to the topological ordering in reverse order
    


*/