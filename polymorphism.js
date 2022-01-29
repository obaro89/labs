class Example {
    constructor(val1, val2) {
        this.val1 = val1
        this.val2 = val2
    }

    addition () {
        console.log(this.val1 + this.val2)
    }
}
const newExample = new Example(2,2)
newExample.addition() // return 4
const secondExample = new Example('Mike', 'James')
secondExample.addition() // return MikeJames