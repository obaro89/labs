//LIFO -> last in first out
//operations are push, pop, peek(lookup the last item)

class Stack {
    constructor() {
        this.storage = {}
        this.size = 0
    }
    push(element){
        this.size++
        this.storage[this.size] = element
    }

    pop(){
        let removed = this.storage[this.size]
       delete this.storage[this.size]
        this.size--
        return removed
    }

    peek() {
        return this.storage[this.size]
    }
}

let stack = new Stack()
stack.push('Osaretin')
stack.push('Osariemen')
stack.push('Rhema')
console.log(stack)
console.log(stack.pop())
console.log(stack)