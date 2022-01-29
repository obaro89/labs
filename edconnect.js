// function remainingTasks(totalTasks, completedTasks) {
// 	return totalTasks.filter(eachTask => !completedTasks.includes(eachTask))
// }

// console.log(remainingTasks([1,2,3,4,5,6], [1,2,3]))

// function checkArmstrong(num){
//     num = num+""
//     let numLength = num.length
//     let result = 0
    
//     for(let i = 0; i < num.length; i++) {
//         result += num[i]**numLength
//     }
//     num = parseInt(num)
   
//    return result == num ? true : false;
// }

// console.log(checkArmstrong(153))

// function getTopScores(scores) {
//     scores.sort((a,b)=> b - a)
//     scores.length = 3
//     return scores
    
// } 

// console.log(getTopScores([6,3,9,55,7,44,23,12]))




// /*
// In this challenge, you will test your knowledge of arrays.

// THE PROBLEM:
// Most processing centres often maintain a first come, first serve queue to
// determine the next user to attend to.
// In some cases, you will have 2 queues, one for regular users and the other for
// vip users. The vip users queue will typically move faster since you will have a
// lower number of users on that queue.

// YOUR CHALLENGE:
// Complete the code below to queue and process users appropriately taking into
// account their VIP status.
// */

// // Create 2 arrays, regularUsers and vipUsers which will store the names
// // of the users in both of these queues.

// // Task #1: WRITE CODE TO CREATE THE TWO ARRAYS HERE
// let regularUsers = []
// let vipUsers = []


// // Don't touch the next line, we will cover functions later.
// function queueUser(user, isVip){
//     // user is a string variable that contains the name of the user to be added
//     // to a queue.
//     // isVip is a boolean variable that indicates whether or not a user is a VIP
//     // isVip is true if the user is a VIP and false if the user is regular

//     // If a user is a VIP user, add the user to the vipUsers array,
//     // otherwise add the user to the regularUsers array

//     // Task #2: WRITE CODE HERE
//     if(isVip){
//         vipUsers.push(user)
//     }else {
//         regularUsers.push(user)
//     }

//     return [regularUsers, vipUsers]; // Do not remove or edit this line
// }

// // We also want to keep track of the number of users that we have processed so
// // that we can create a report for it.
// // Create 2 arrays processedRegularUsers and processedVipUsers.

// // Task #3: WRITE CODE TO CREATE THE TWO ARRAYS HERE
// let processedRegularUsers = []
// let processedVipUsers = []


// // Don't touch the next line, we will cover functions later.
// function processUsers(isVip){
//     // isVip is a boolean variable. We process the regularUsers queue if isVip
//     // is false and process the vipUsers queue if isVip is true


//    // If isVip is true, remove the first element in the vipUsers array and
//     // add it to the processedVipUsers array
//     // if isVip is false, remove the first element in the regularUsers array and
//     // add it to the processedRegularUsers array.

//     // If there is no element in the array to be processed,
//     // throw an error ‘empty queue’

//     // Task #4: WRITE CODE HERE

//     if(isVip){
//         if(vipUsers.length !== 0){
//             processedVipUsers.push(vipUsers.shift())
//         }else {
//             throw "empty queue"
//         }
//     }else {
//         if(regularUsers.length !== 0){
//             processedRegularUsers.push(regularUsers.shift())
//         }else {
//             throw "empty queue"
//         }
//     }
//     // Do not remove or edit this line
//     return [regularUsers, vipUsers, processedRegularUsers, processedVipUsers];
// }

// // THIS IS FOR YOUR TESTING ONLY.
// queueUser('Tunde', false);
// queueUser('Sola', true);
// const queues = queueUser('Nonso',false);
// console.log(queues[0].length) // This should print 2
// console.log(queues[1].length) // This should print 1

// try {
//     processUsers(false);
//     let queues = processUsers(false);
//     console.log(queues[0].length ) // This should print 0
//     console.log(queues[1].length) // This should print 1
//     console.log(queues[2].length ) // This should print 2
//     console.log(queues[3].length) // This should print 0
//     processUsers(true);
//     console.log(processUsers(true)); // This should throw an ‘empty queue’ error
// } catch (e) {
//    console.log(e)
// }




// /*
// You are developing an ecommerce application which allows users to add items to a virtual shopping cart. Once the user is done shopping, we will need to know the total amount of money to charge to the users based on what was purchased.
// */ 

// // The cart array stores all of the items selected in the shopping cart 
// let cart = [];

// // The quantity array stores the quantity of the items in the cart. 
// // quantity of cart[0] = quantity[0]
// // quantity of cart[1] = quantity[1], and so on
// let quantity = []; 

// // The prices multidimensional array stores the prices of the items in the store. There are 6 items that can be purchased from the store with codes 2, 7, 12, 17, 22 and 27. The price for item code 2 is 20, the price for item code 7 is 50 and so on. 
// const prices = [ [2, 20], [7, 50], [12, 100], [17, 40], [22, 32], [27, 25 ] ];

// // Given an itemCode, Write the code to add items to the cart and quantity arrays 
// // Don't touch this section, we will cover functions later. 
// function addItemToCart(itemCode) {
//     //itemCode is a variable that represents the item that is being added to the cart. Valid item codes are 2, 7, 12, 17, 22 and 27. An invalid code should throw an error ‘item code not recognized’
    
//     // WRITE CODE HERE
//     let validCode = [2,7,12,17,22,27]
//     if(validCode.includes(itemCode)){
//         if(cart.includes(itemCode)){
//             quantity[cart.indexOf(itemCode)] +=1
//         }else{
//             quantity.push(1)
//             cart.push(itemCode)
//         }
//     }else{
//     throw"item code not recognized"
//     }
// } 

// // Write the code to calculate the total cost of all items in the cart based on the items in the cart and the quantity of the items purchased. The total cost should be stored in the cost variable
// // Don't touch the next line, we will cover functions later. 
// function getTotal(){ 
//     let cost = 0; 
//     // WRITE CODE HERE
    
//     for(let i = 0; i < cart.length; i++) {

//         for(let j = 0; j < prices.length; j++){
//             for(let k = 0; k < prices[j].length; k++){
               
//                 if(cart[i] === prices[j][k]){
//                     cost += quantity[i] * prices[j][k+1]
//                 }
//             }
           
//         }
//     }
    
    
    

//     return cost; // Do not edit or remove this line. 
// }

// // THIS IS FOR YOUR TESTING ONLY.
// try{
//     addItemToCart(7);
//     addItemToCart(7);
//     addItemToCart(17);
//     addItemToCart(22);
//     console.log(addItemToCart(172)); // This should print 'item code not recognized'
// }catch(e){
//     console.log(e);
// }
  
// console.log(cart.length) // This should print 3
// console.log(quantity[0]) // This should print 2
// console.log(getTotal()); // This should print 172



// const book = {
//     name: "Understand Maths",
//     year: 2002,
//     Authors: []
//   }
  
//   console.log(JSON.stringify(book))
//   let stringifiedObj = JSON.stringify(book)
//   console.log(JSON.parse(stringifiedObj))








// /*
// In this challenge, you will test your knowledge of objects.

// THE PROBLEM:
// Social networks are key part of people's online experience. Platforms like
// facebook, tiktok, and linkedin etc allow people to connect online either for
// professional or casual friendships.

// Since it's relevatively easy to connect with friends online, most people often
// realize they are friends with some other person through indirect connections. i.e
// Chuks and Lola are friends because Adamu is a friend of Chuks and Lola.

// Chuks <--> Adamu <--> Lola.

// YOUR CHALLENGE:
// Complete the code below to establish friendship between two persons, and also
// determine if two people are friends. Two people are friends if and only if (iff)
//  -  They are direct friends.
//  -  They are separated by one degree of friendship i.e

//     Given: Chuks <--> Adamu <--> Lola

//        Chuks and Lola are friends because

//        Chuks is friends with Adamu

//        And Adamu is friends with Lola


//     Given: Chuks <--> Adamu <--> Lola <--> Sade

//        Chuks and Sade are NOT friends because they are separated by more
//        than one degree of friendship.

// */

// // Constructor function for a Person.
// // DO NOT MODIFY
// function Person(name) {
//     this.name = name;
//     this.friends = [];

//     // TASK1: Add a method friendCount that returns the number of friends a person has
//     // YOUR CODE HERE
//     this.friendCount = function(){
//     return this.friends.length
//     }
// }

// // Establishes a friendship between two persons
// // HINT: friendship is symmetrical.
// // i.e if a A is a fiend of B, then B is also a friend  of A
// function connect(personA, personB) {
//  // TASK 2: Connect two the users are friends
//  // YOUR CODE HERE
//     personA.friends.push(personB.name)
//     personB.friends.push(personA.name)
// }

// // Rturn true if and only if (iff)
// // 1) They are direct friends
// //           OR
// // 2) They are separated by one degree of friendship
// function friendship(personA, personB) {
//     let friends = false;

//     // TASK 3: Determine if two users are friends
//     // YOUR CODE HERE
//     let intersect = personA.friends.filter(friend => personB.friends.includes(friend))
//     let directFriendship = personA.friends.includes(personB.name) || personB.friends.includes(personA.name)
//     if(intersect.length > 0 || directFriendship) friends =true
//     return friends
// }

// // THIS IS FOR YOUR TESTING ONLY.
// const kogi = new Person('kogi')
// const fela = new Person('fela')
// const asa = new Person('asa')
// const david = new Person('david')
// const kanu = new Person('kanu')

// connect(kogi, fela)
// connect(kogi, asa)
// connect(asa, fela)
// connect(asa, david)
// connect(david, kanu)

// console.log('kogi and fela = ' + friendship(kogi, fela) )   // should print true
// console.log('fela and kogi = ' + friendship(fela, kogi) )   // should print true
// console.log('kogi and david = ' + friendship(kogi, david) ) // should print true
// console.log('kogi and kanu = ' + friendship(kogi, kanu))  // should print false
// console.log(kogi.friendCount()) // should print 2






// class Calculator {
//     constructor(){
    
//     }
//     add(numbers){
//         if(number.every((e) => typeof e === 'number')) {
//             return numbers.reduce((a,b) => a + b)
//         }else {
//             return "All elements must be a number"
//         }
       
//     }
//     substract(num1, num2){
//         return num1 - num2
//     }
//     multiply(numbers){
//         if(number.every((e) => typeof e === 'number')) {
//             return numbers.reduce((a,b) => a * b)
//         }else {
//             return "All elements must be a number"
//         }
        
//     }
//     divide(num1, num2){
//         return num1/num2
//     }
// }

const searchIndex = (numbers, target) => {
   let index = numbers.indexOf(target)
   if(index === -1) {
       numbers.push(target)
       numbers.sort((a,b) => a - b)
       return numbers.indexOf(target)
   }
   return index
}

console.log(searchIndex([1,3,4,6,8,9], 2))