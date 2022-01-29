class Queue {
    constructor(){
        this.storage = {}
        this.head = this.tail = 0
        this.size = 0
    }

    enqueue(element){
        this.storage[this.tail] = element
        this.tail++
        this.size++

    }

    dequeue(){
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
       
        return removed
    }
}

const queue = new Queue()
queue.enqueue('Uniport')
queue.enqueue('Uniben')
queue.enqueue('Unilag')

console.log(queue)
console.log(queue.dequeue())

console.log(queue)