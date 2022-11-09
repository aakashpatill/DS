// piece of data
// refrence to next node

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var first = new Node('Hi')
first.next = 'Hello'

console.log('first', first);

// Singly linked list

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this
    }
    traverse() {
        var current = this.head
        while(current) {
            console.log(current);
            current = current.next
        }
    }
    pop() {
        if(!this.head) return undefined;
        else {
            var current = this.head;
            var newTail = current;
            // newTail is for second last item which will eventually be the tail
            while(current.next) {
                newTail = current;
                current = current.next;
            }
            console.log(newTail.val);
            console.log(current.val);
            this.tail = newTail;
            this.tail.next = null;
            this.length --;
            if(this.length === 0) {
                this.head = null;
                this.tail = null
            }
        }
    }

}
var second = new SinglyLinkedList();
second.push('Hello');
// console.log('seconfd', second);
second.push('Hi');
// console.log('seconfd', second);
second.push('Bonjour');
second.pop();
console.log('second', second);