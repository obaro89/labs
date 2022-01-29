class Node{
    constructor(val, next=null){
        this.val = val;
        this.next = next;
    }
}

//push
//pop
//shift
//unshift
//removeAt
//insertAt
//findIndex
//reverse
//size
//delete

class SinglyLinkedList{
    constructor(){
        this.head = null;
       // this.tail = null;
        this.length = 0
    }

    size(){
        return this.length
    }

    append(val){
        if (!val) return;
        let newNode = new Node (val)
        if(this.head === null) {
           this.head = newNode; 
          
        }else {
            let temp = this.head
            this.head = newNode;
            this.head.next = temp
        }
        this.length++;
    }

    prepend(val){
        if(!val) return;
        let newNode = new Node (val)
        if (!this.head){
            this.head = newNode;
        }else {
            let current = this.head;
            
            while (current){
                if(current.next === null){
                    current.next = newNode;
                    this.length++;
                    return
                }
                current = current.next
            }
        }
    }

    getAt(index) {
        if(!this.head) return;
        let count = 0
        let current = this.head
        while (current){
            if(count === index) {
                return current
            }
            count++;
            current = this.head.next
           
        }
    }
 
    removeAt(index) {
        
    }
    printList(){
        if(this.length === 0) return []
        let current = this.head
        let result= []
        while(current){
            result.push(current.val)
            current = current.next;
        }

        return result;
    }
}

// const list = new SinglyLinkedList()
// list.append(1)
// list.append(3)
// list.append(4)
// list.append(8)
// list.append("Osaretin")
// list.prepend("Uniport")

// console.log(list.printList())

const me = (str) => {
    const abc = "abcdefghijklmnopqrstuvwxyz"
   str = str.replace("a", "");
    console.log(str)
}

me("abracadabra")
