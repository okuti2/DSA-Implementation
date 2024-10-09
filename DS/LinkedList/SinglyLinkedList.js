class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(value) {
        const newNode = {
            value,
            next: null
        }

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    removeNode(value) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        if (currentNode.value === value) {
            this.head = currentNode.next;
            return currentNode;
        }

        while (currentNode.next) {
            if (currentNode.next.value === value) {
                const removedNode = currentNode.next;
                currentNode.next = currentNode.next.next;
                return removedNode;
            }
            currentNode = currentNode.next;
        }

        return null;
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