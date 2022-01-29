/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as t
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".*/

function rot13(message) {
  //your code here
  message = message.split("");
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let alphabetsMap = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  let ciphered = "";
  for (let i = 0; i < message.length; i++) {
    if (!alphabets.split("").includes(message[i].toLowerCase())) {
      ciphered += message[i];
    } else {
      ciphered += alphabetsMap[alphabets.indexOf(message[i])];
    }
  }
  return ciphered;
}

console.log(rot13("Test"));
