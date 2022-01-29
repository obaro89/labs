/*
In this challenge you will test your knowledge of arrays and array methods.


THE PROBLEM:
SPAM is major problem on the internet. Email applications like gMail do a lot of
work to identify spam and remove them from user's inbox.

YOUR CHALLENGE:
Complete the code below to correctly process a set of messages. The ones identified
as spam should be placed in a spam folder, otherwise they should be placed in the
inbox folder. You are provided with a spam detector function "isSpam" that will
return true if a message is spammy, and false otherwise.

Good luck!
*/

// This is your spam detection function.
// It will return true is a message is spam, and false otherwise
// DON'T UPDATE THE NEXT LINE
const isSpam = (message) =>  /money/.test(message.content)


//  Accepts an array of messages and returns an object with two properties
//  spam, and inbox.
//  spam and inbox are array of spam and not spam messages respectively and are
//  sorted
function processMessages (messages) {

  // Hint: to sort the messages by time, you will use the sortFn below as your
  // compare fuunction.
  // the function accepts two message arguments (a and b) to be compared,
  // and you will be comparing the time property i.e a.time and b.time

  const sortFn = (a, b) => a.time - b.time // your code here (~ 1 line)

  // use the isSpam function provided above to determine if a message is a spam
  const inbox =  [] // code your here.
  const spam = [] // code your here.
    let spamFiltered = messages.filter(message => isSpam(message)).sort(sortFn)
   
    let inboxFiltered = messages.filter(message => !isSpam(message)).sort(sortFn) 
    inbox.push(...inboxFiltered)
    spam.push(...spamFiltered)
    
 // DON'T UPDATE THE LINE BELOW.
 return {
    inbox,
    spam
  }
}
// THIS IS HERE FOR YOUR TEST ONLY
const messages = [
  {content: 'click here to make a lot of money', time: 10} ,
  {content: 'hello are are you', time: 4} ,
  {content: 'I just won some money, send your account number', time: 2},
  {content: 'do you want to have launch', time: 11},
  {content: 'we received your application', time: 3},
 ]
 const {spam, inbox } = processMessages(messages)
 // should print
 // [ "I just won some money, send your account number",
 //   "click here to make a lot of money"]
console.log(spam.map(s => s.content))

 // should print
 // ["we received your application", "hello are are you",
 //  "do you want to have launch"]
 console.log(inbox.map(s => s.content))