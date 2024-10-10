class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) { // add node to end
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = null;
            return;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;

    }

    pop(){ // remove last node
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){ // remove first node
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    unshift(value){ // add node to beginning
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = value;
            return true;
        }
        return false;
    }

    insert(index, value){
        
    }

    printList() {
        let currentNode = this.head;
        let output = '';

        while (currentNode) {
            output += `${currentNode.value} -> `;
            currentNode = currentNode.next;
        }

        console.log(output);
    }
}

function main(){
    const list = new SinglyLinkedList();
    list.addNode(1);
    list.addNode(2);
    list.addNode(3);
    console.log("List after adding nodes:", JSON.stringify(list));

    list.removeNode(2);
    console.log("List after removing node with value 2:", JSON.stringify(list));
}

main();