
const isObjEqual = (obj1, obj2) => {
    const lengthOfobj1 = Object.keys(obj1).length
    const lengthOfobj2 = Object.keys(obj2).length
    if (lengthOfobj1 === lengthOfobj2) {
       return Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key])
        
    }
    return false;
}

const anagram = (str1, str2) => {
   if (str1.length !== str2.length) {
       return false
   }
   let obj1 = {}
   let obj2 = {}
   for (char of str1){
       if (obj1.hasOwnProperty(char)) {
           obj1[char]++
       }else {
           obj1[char] = 1
       }
   }
      for (char of str2){
       if (obj2.hasOwnProperty(char)) {
           obj2[char]++
       }else {
           obj2[char] = 1
       }
   }

   if (isObjEqual(obj1, obj2)) return true;
}

