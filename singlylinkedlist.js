//first we create a node class

// class Node {
//     constructor (val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor () {
//         this.head = null;
//         this.tail = null;
//         this.length = 0
//     }

//     push(val) {
//         var newNode = new Node (val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         }
//     }
// }

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
    }

    insertFirt(data) {
        this.head = new Node(data, this.head)  
    }

    size() {
       let count = 0;
       let currentNode = this.head;
        while (currentNode != null) {
            count++
            currentNode = currentNode.next
        }
        return count
    }

    getFirst() {
        return this.head
    }
    getLast() {
        let currentNode = this.head;
        if(/*this.size() === 0*/ !this.head) return null
        while(currentNode) {
            currentNode = currentNode.next
            if (currentNode.next === null) return currentNode
        }
    }
    clear() {
        this.head = null;
    }

    removeFirst() {
        if(!this.head) return;
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;
        if (!this.head.next) this.head = null;
        let prev = this.head;
        let node = prev.next;

        while(node.next) {
            prev = node;
            node = node.next

        }
       prev.next = null
       
    }

    insertLast(data) {
        const last = this.getLast()
        if (last) {
            last.next = new Node(data)
        }else {
            this.head = new Node(data)
        }
    }

    getAt(index) {
        if (!this.head) return null
        let current = this.head
        let pos = 0
        while (current) {
            if (pos === index) {
                return current;
            }
            pos++;
            current = this.head.next;
        }
        return null
    }

    removeAt(index) {
        if (index === 0){
            this.head = this.head.next;
            return;
        } 
       const previous = this.getAt(index - 1)
       if (!previous) return;
       if(!previous.next) return
       previous.next = previous.next.next;
    
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head)
            return;
        }
        let previous = this.getAt(index - 1) || this.getLast()
        let node = new Node(data, previous.next)
        previous.next = node;
    }

    
}


const list = new SinglyLinkedList()
list.insertAt('mike', 0)

console.log(list.getLast())