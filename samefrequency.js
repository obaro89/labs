//convert both intergers to strings
//loop thru the string after splitting
//create the objects to hold the results for both strings
//compare the objects if they are the same.
const isObjEqual = (obj1, obj2) => {
    const lengthOfobj1 = Object.keys(obj1).length
    const lengthOfobj2 = Object.keys(obj2).length
    if (lengthOfobj1 === lengthOfobj2) {
       return Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key])
        
    }
    return false;
}

const sameFrequency = (positiveInterger1, positiveInterger2) => {
    positiveInterger1 = positiveInterger1.toString().split('')
    positiveInterger2 = positiveInterger2.toString().split('')
    let obj1 = {}
    let obj2 = {}

    for (elem of positiveInterger1) {
        if (obj1.hasOwnProperty(elem)){
            obj1[elem]++
        }else {
            obj1[elem] = 1
        }

    }
    for (elem2 of positiveInterger2) {
        if (obj2.hasOwnProperty(elem2)){
            obj2[elem2]++
        }else {
            obj2[elem2] = 1
        }

    }
   
    return isObjEqual(obj1, obj2)

}


console.log(sameFrequency(22,222))