class Stack{
    constructor(){
        this.stack = [];
    }

    constructor(firstValue){
        this.stack.push(firstValue);
    }

    push(value){
        this.stack.onshift(value);
    }

    pop(){
        return this.stack.shift();
    }

    size(){
        return this.stack.length;
    }

    isEmpty(){
        return this.stack.length === 0;
    }

    peek(){
        return this.stack[0];
    }


}