class UnionFind{
    constructor(){
        this.size = 0; // number of elements in the union find
        this.numComponents = 0; // number of components in the union find
        this.sz = []; // size of each component
        this.id = []; // id[i] points to the parent of i, if id[i] = i then i is a root node
    }

    constructor(size){
        if(size <= 0) throw new Error("Size must be greater than 0");

        this.size = this.numComponents = size;
        this.sz = new Array(size);
        this.id = new Array(size);

        for(let i=0; i<size; i++){
            this.id[i] = i; // link each element to itself 
            this.sz[i] = 1; // each component is originally of size one
        }
    }

    // Find which component/set 'p' belongs to, takes amortized constant time. and uses path compression
    find(p){
        let root = p;
        while(root !== this.id[root]){
            root = this.id[root];
        }

        // path compression
        while(p !== root){
            let next = this.id[p];
            id[p] = root;
            p = next;
        }
        
    }

    // using recursion for path compression
    find2(p){
        if(p === this.id[p]) return p;

        return this.id[p] = find2(this.id[p]);
    }

    // return whether or not the elements 'p' and 'q' are in the same component/set
    connected(p, q){
        return this.find(p) === this.find(q);
    }

    // return the size of the component/set 'p' belongs to
    componentSize(p){
        return this.sz(find(p))
    }

    size(){
        return this.size;
    }

    numComponents(){
        return this.numComponents;
    }

    unify(p, q){
        let root1 = this.find(p);
        let root2 = this.find(q);

        if(root1 === root2) return;

        // merge two components together
        if(this.size[root1] < this.size[root2]){
            this.sz[root2] += this.sz[root1];
            this.id[root1] = root2;
        }else{
            this.sz[root1] += this.sz[root2];
            this.id[root2] = root1;
        }

        this.numComponents--;
    }
}