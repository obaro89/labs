class Node {
    constructor(head, next = null) {
        this.head = head;
        this.next = next;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        
        
    }

    push(data) {
        
        if(!this.head) {
          this.head = new Node(data); 
          this.length++;
        }else {
            let temp = this.head;
            this.head = new Node (data, temp)
            this.length++;
        }
        
    }

    size() {
        return this.length;
    }

    reverseList() {
        let curr = this.head;
        let next = null;
        let prev = null;
        while(curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = curr.next
        }
        return prev;
    }

    print() {
        let arr = []
        let current = this.head
        while(current){
            arr.push(current.head)
            current = current.next
        }
        console.log(arr);
    }
}

const list = new linkedList();
list.push(1)
list.push(2)
list.push(3)
list.push(4)

list.reverseList()
list.print()
//console.log(list.reverseList())
