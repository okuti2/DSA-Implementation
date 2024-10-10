class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

function reverseLinkedList(head){ // using recursion
    if(head === null || head.next === null) return head;

    var newHead = reverseLinkedList(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
}

function reverseLinkedList2(head){ // using iteration
    var prev = null;
    var current = head;
    var next = null;

    while(current !== null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;

    }

    return prev;
}