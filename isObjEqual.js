const isObjEqual = (obj1, obj2) => {
    const lengthOfobj1 = Object.keys(obj1).length
    const lengthOfobj2 = Object.keys(obj2).length
    if (lengthOfobj1 === lengthOfobj2) {
       return Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key])
        
    }
    return false;
}
