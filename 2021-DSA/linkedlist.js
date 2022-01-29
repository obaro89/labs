class Node {
  constructor(val, next = null) {
    (this.val = val), (this.next = next);
  }
}

class SinglyLinkedList {
  constructor() {
    (this.head = null), (this.tail = null);
    this.length = 0;
  }

  //   push(val) {
  //     let node = new Node(val);
  //     if (!this.head) {
  //       this.head = this.tail = node;
  //       this.tail.next = null;
  //     } else {
  //       this.head.next = node;
  //       this.tail = node;
  //     }
  //     this.length++;
  //     return this;
  //   }

  //   pop() {
  //     if (!this.head) return;
  //   }

  push(val) {
    let node = new SinglyLinkedList(val);
    if (!this.head) {
      this.head = node;
      this.head.next = null;
    } else {
      this.head.next = node;
    }
  }
}

const singleList = new SinglyLinkedList();
singleList.push("Canon");
singleList.push("Rhema");
singleList.push("Osaretin");

console.log(singleList);
