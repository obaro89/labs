// const hasSameBread = (sandwich1, sandwich2) => {
//     if ((sandwich1[0] === sandwich2[0]) && (sandwich1[sandwich1.length -1] === sandwich2[sandwich2.length -1])) {
//         return true
//     }else {
//         return false
//     }
// }


// console.log(hasSameBread(

//     ["white bread", "lettuce", "white bread"],

//     ["white bread", "tomato", "white bread"]
  
//   ) )

/*Create a function that takes an array of words and transforms it into an array of each word's length.

Examples:

wordLengths(["hello", "world"]) ➞ [5, 5]


wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9] */

// const wordLengths = (arr) => {
//     let lengths = [];
  
//     for (let i = 0; i < arr.length; i++) {
//         lengths.push(arr[i].length)
//     }

//     return lengths;
// }
// console.log(wordLengths(["hello", "world"]))
// console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]))

// const isSameNum = (num1, num2) => num1 === num2 ? true: false;

// console.log(isSameNum(2,2))

// const sayHelloBye = (name, num) => num === 1 ? console.log("Hello "+name): num === 0 ? console.log("Bye "+name): console.log("num should be 1 or 0")
// sayHelloBye("alon", 2) 

// const sayHelloBye = (name, num) => {
//     if (num === 1) {
//         console.log("Hello "+name);
//     }else {
//         console.log("Bye "+name)
//     }
// }
// console.log(sayHelloBye("alon", 2))

// const equal = (a,b,c) => {
//   if (a === b && b === c) {
//       return 3
//   }
//     if ( a===b || a === c || b===c) {
//         return 2
//     }
//     return 0
// }

// console.log(equal(1,3,3))


// const rps = (p1, p2) => {

//     if (p1 === p2) return "It's a draw";
//     if (p1 === "Rock" && p1 === "Paper") return "The winner is p2";
//     if (p1 === "Scissors" && p2 === "Paper") return "The winner is p1";
    

// }
// console.log(rps("Paper", "Paper") )


// const unrepeated = (str) => {
//     let unique = new Set (str.split(''))
//     console.log([...unique].join(''))
//     let uniqueStr = [];
//     for (let i = 0; i < str.length; i++) {
//         if (!uniqueStr.includes(str[i])) {
//             uniqueStr.push(str[i])
//         }
//         console.log(uniqueStr.join(''))
//     }
// }
// unrepeated("hellloooeee")



// const addUp = (num) => {
//     let result = 0;
//     for (let i = num; num > 0; num--) {
//         result += num
//     }

//     return result
// }

// const addUp = (num) => {
//     if (num === 1) return 1;
//     return num + addUp(num - 1)
// }

// console.log(addUp(600))

// const minMax = (arr) => [Math.min(...arr),Math.max(...arr)]

// console.log(minMax([2334454, 5]))

// const findLargestNums = (arrOfarr) => {
//     let result = []
//     for (let i = 0; i < arrOfarr.length; i++) {
//         result.push(Math.max(...arrOfarr[i]))
//     }

//     return result
// }

// console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))

//chaining four in-built methods

// const reverseCapitalize = (str) => str.split('').reverse().join('').toUpperCase();
// console.log(reverseCapitalize("hellothere"))
// //using a decremental for loop:

// const reverseCapitalize = (str) => {
//     let reversedString = '';
//     for (i = str.length - 1; i >= 0; i--) {
//         reversedString += str[i].toUpperCase()
//     }

//     return reversedString;
// }

// const findIndex = (arr, str) => arr.indexOf(str)

// const findIndex = (arr, str) => arr.indexOf(str)

// console.log(findIndex(["a", "g", "y", "d"], "d"))


// const oddishOrEvenish = (num) => {
//     let string =''+num;
// let sum = 0
// for(let i = 0; i < string.length; i++){
//     sum += parseInt(string[i]);
// }
//    return sum % 2 == 0 ? "Evenish" : "Oddish";
  

// }

// const aveSpeed = (timeMins, uphillRate, downhillRate) => {
//     let timeHr = timeMins/60;
//     let distanceMile = uphillRate*timeHr;
//     let totalDis = distanceMile*2;
//     let downhillTime = distanceMile/downhillRate;
//     let totalTime = downhillTime + timeHr
//     return totalDis/totalTime; 
// }

// console.log(aveSpeed(30, 8, 24))

//charAtPos([2, 4, 6, 8, 10], "even") ➞ [4, 8]

// const charAtPos = (a, b) => {
    
//     if(Array.isArray(a)){
//         let result = []
//         if(b==="even"){
//             for(let i = 1; i < a.length; i+=2){
//                 result.push(a[i])
//             }

//         }

//         if(b==="odd"){
//             for(let i = 0; i < a.length; i+=2){
//                 result.push(a[i])
//             }
            
//         }
        
//         return result;
//     }
//     let result = ""
//            if(b==="even"){
//             for(let i = 1; i < a.length; i+=2){
//                 result+=a[i]
//             }

//         }

//         if(b==="odd"){
//             for(let i = 0; i < a.length; i+=2){
//                 result+=a[i]
//             }
            
//         }
//     return result;
// }


// console.log(charAtPos("fullstack", "odd"))

// const isRepdigit = (num) => {
//     if(num === 0) return true;
//    num = num.toString()
//    let p1 = 0
//    let p2 = 1
//   while(p2 < num.length){
//         if(num[p1] !== num[p2]){
//             return false
//         }
//     p2++
//   }
//    return true;
// }
// console.log(isRepdigit(5555))

// function isVowel (elem){
//     const vowels = ["a", "e", "i", "o", "u"];
//     if(vowels.includes(elem)) return true;

//     return false

// }

// const split = (str) => {
//     str = str.split("")
//    let vowels = str.filter((e)=>{
//         return isVowel(e)
//     })
//     let consonants = str.filter((e)=>{
//         return !isVowel(e)
//     })
//    return vowels.concat(consonants).join('')
    


// }
// console.log(split("What's the time?") )

// const transformUpvotes = (str) => {
//     let arr = []
//     str =str.replace(/k/g, '*1000').split(' ')
//     str.forEach((e)=>{
//         arr.push(eval(e))
//     })
//     return arr
// }
// console.log(transformUpvotes("20.3k 3.8k 7.7k 992") )


// const isOddorEven = (num) => num % 2 === 0 ? "even" : "odd"

// const isSpecialArray = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         if(isOddorEven(i) !== isOddorEven(arr[i])){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]))

// function callback(num){
//     console.log(num)
// }
// let numberList = [1,2, 3, 4]
// const processSum = (numberList, callback) => {
//     let sum = numberList.reduce((a, b)=> a + b);
// callback(sum)
// }

// processSum(numberList, callback)

// function callback(num){
//     console.log(num)
// }
// let arr = [1,2, 3, 4, true, undefined, "Osar"]
// const processLength = (arr, callback) => {
//     let length = arr.length;
// callback(length)
// }

// processLength(arr, callback)

// function callback(bool){
//     console.log(bool)
// }

// const processContains = (item, arr, callback) => {
  
// callback(arr.includes(item))
// }

// processContains(7,[10, 3, 6, 11, 5], callback)


// function callback(str){
//     console.log(str)
// }
// let stringList = ["1","2", "3", "4", "true", "undefined", "Osar"]
// const processLastItem = (stringList, callback) => {
//     let lastItem = stringList[stringList.length -1];
// callback(lastItem)
// }

// processLastItem(stringList, callback)

// function callback(num){
//     console.log(num)
// }

// const processProduct = (num1, num2, callback) => {
//    let product = num1 * num2;
// callback(product)
// }

// processProduct(6,10, callback)
// [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2],
//   );
// console.log([1,2].concat([0,1]))

// [1, 2, 3, 4].reduce((x, y) => console.log(x, y))

 //➞ [[4], [1, 2, 3, 4, 5, 9]]

//intersectionUnion([1, 1], [1, 1, 1, 1])

// const intersectionUnion = (arr1, arr2) => {
   
//     let intersection = arr1.filter(e => arr2.includes(e))
//     intersection = [...new Set(intersection)]

//     let union = [...new Set([...arr1, ...arr2])]
    
//     return [intersection, union];
// }
// console.log(intersectionUnion([1, 2, 3, 4, 4], [4, 5, 9]))
// console.log(intersectionUnion([1, 1], [1, 1, 1, 1]))

// var num = 123456;
// var digits = num.toString().split('');
// var realDigits = digits.map(Number)
// console.log(realDigits);

// function digits(n) {
//     return Array.from(String(n), Number);
//   }
  
//   // Example:
//   console.log(digits(1234))

// const isOddorEven = (num) => num % 2 === 0 ? "even" : "odd"
// const countDigits = (arr, condition) => {
//    let result =[]
//    let count = 0
//   let arrStr = arr.map(e => e.toString().split(''))
//   for(let i = 0; i < arrStr.length; i++){
//     arrStr[i].forEach(element => {
//         if(isOddorEven(parseInt(element)) == condition) count++
//     });
//     result.push(count)
//     count = 0

//   }
//   return result
// }

// console.log(countDigits([22, 53, 99, 61, 777, 8], "even"))

// const reorderDigits = (array, condition) => {

//     if(condition === "asc"){
//         let newArr = array.map((e=>e.toString().split('').sort((a,b)=> a-b)))
//         return newArr.map(e => parseInt(e.join('')))
//     }else if(condition ==="desc"){
//         let newArr = array.map((e=>e.toString().split('').sort((a,b)=> b-a)))
//         return newArr.map(e => parseInt(e.join('')))
//     }
  
// }
// console.log(reorderDigits([515, 341, 98, 44, 211], "asc"))
// console.log(reorderDigits([515, 341, 98, 44, 211], "desc"))
// console.log(reorderDigits([63251, 78221], "asc"))
// console.log(reorderDigits([63251, 78221], "desc"))
// console.log(reorderDigits([1, 2, 3, 4], "desc"))



// const stringCode = (str) =>{
//     function isVowel (elem){
//         const vowels = ["a", "e", "i", "o", "u", "A","E","I","O","U"];
//         if(vowels.includes(elem)) return true;
    
//         return false
    
//     }
//     str = str.replace(/[^a-zA-Z ]/g, "")
//     str = str.split(' ')
   
//    let vowelCode = str.map(e => e.split('').filter(x => isVowel(x)).length)
//    let consonantCode = str.map(e => e.split('').filter(x => !isVowel(x)).length)
//    consonantCode = consonantCode.reduce((a, b) => {
//        return a.toString() + b.toString()
//    })
//    vowelCode = vowelCode.reduce((a, b) => {
//     return a.toString() + b.toString()
// })
 
//     return([consonantCode, vowelCode])
// }
// console.log(stringCode("Happy Birthday To Me!"))
// console.log(stringCode("I'd like to drink my first glass of champagne."))
// console.log(stringCode("The first man to walk on the moon was Neil Armstrong."))


// const squish = (arr, direction) => {
//     let squished = [[...arr]]
//     if(arr.length === 0) return []
//     while(true){
//         if(direction === "left"){
//             var sum = arr.splice(0,2).reduce((a, b) => a + b)
//             arr.splice(0, 0, sum)
//             squished.push([...arr])

//             if(arr.length === 1) break;
//         }else if(direction === "right"){
//             var sum = arr.splice(arr.length -2, 2).reduce((a, b) => a + b)
//             arr.splice(arr.length , 0, sum)
//             squished.push([...arr])
//             if(arr.length === 1) break;
//         }
        
//     }
//     return squished
// }
// console.log(squish([1, 2, 3, 4, 5], "right"))
// console.log(squish([1, 0, 2, -3], "left"))
// console.log(squish([1, 0, 2, -3], "right"))


// const leader = (array) => {
//     let pointer1 = 0;
//     let pointer2 = 1
//     for (let i = 0; i < array.length; i++){
//         if (array[pointer1] > array[pointer2]) {
//             pointer2++
//         }else {
//             pointer1 = pointer2
//             pointer2++
//         }
//         if (pointer2 === array.length){
//             return array.splice(pointer1)
//         }

//     }
// }
// console.log(leader([1, 2, 3, 4, 5]))

// function isVowel (elem){
//             const vowels = ["a", "e", "i", "o"];
//             if(vowels.includes(elem)) return true;
        
//             return false
        
//         }
// const sumOfVowels = (str) => {
//     let vowelNumber = {
//         "a": 4,
//         "e": 3,
//         "i": 1,
//         "o": 0
//     }
//     str = str.toLowerCase().split('')
//     let vowels = str.filter((e) => isVowel(e))
//     let sum = 0
//     for (let i = 0; i < vowels.length; i++) {
//         sum += vowelNumber[vowels[i]]
//     }
    
//     return sum
// }
// console.log(sumOfVowels("Let\'s test this function."))
// console.log(sumOfVowels("Do I get the correct output?"))



