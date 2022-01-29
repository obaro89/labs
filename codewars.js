
// //UDDDUDUU
// function countingValleys(steps, path) {
//   let countVal = 0
//   let seaLevel = 0
//   path = path.split('')
//   for(let i = 0; i < path.length; i++) {
//     if(path[i] =="U"){
//       seaLevel++
//     }else if(path[i] == "D"){
//       seaLevel--
//     }

//     if(seaLevel == 0 && path[i]=="U"){
//      countVal++
//     }

//   }

// return countVal
// }

// console.log(countingValleys(8,"UDDDUDUUDUUUDUDDDUU"))



// function jumpingOnClouds(c) {
//   let jumps = 0;
//   let p = 0
//   while(p < c.length) {
//     if(c[p + 2] === 0){
//       jumps++;
//       p += 2
//     }else if (c[p + 1] === 0) {
//       jumps++
//       p += 1
//     }else {
//       return jumps
//     }
//   }


//   return jumps
// }
// let c = [0,0,1,0,0,0,0,1,0,0]
// console.log(jumpingOnClouds(c))

// function equalizeArray(arr) {
//   let hashMap = {}
//    for (let i = 0; i < arr.length; i++){
//      hashMap[arr[i]] ?  hashMap[arr[i]]++ : hashMap[arr[i]] = 1
//    }
// return arr.length - Math.max(...(Object.values(hashMap)))

// }

// console.log(equalizeArray([3, 3, 2, 1, 3]))


///closures///
// const addSix = (arg) => {
//   var num = arg
//   const createBase = () => num + 6
//  return createBase()
// }

// console.log(addSix(10))



// function myFunc (){
//   var _count = 0
//   return {
//     increase: function (){
//       _count+=2
//     },
//     decrease: function(){
//       _count-=2
//     },
//     display: function(){
//       return _count
//     }
//   }
// }

// var calculate = myFunc()
//  console.log(calculate.display()); // logs 0
// calculate.increase();
// calculate.increase();
// calculate.increase();
// console.log(calculate.display()); // logs 6
// calculate.decrease();