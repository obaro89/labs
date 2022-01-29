// function Animal () {
  
//   }

//   Animal.prototype.walk = function () {
//     console.log("Walking")
//   }
//   Animal.prototype.talk = function () {
//       console.log("Talking")
// }
  
// const bigCat = new Animal()

// const smallCat = new Animal()

// bigCat.type = function () {
//     console.log("A big Cat")
// }

// smallCat.type = function () {
//     console.log( "A small Cat")
// }

// bigCat.talk()
// bigCat.type()

// let name = {
//     name: "Osas",
//     age: 31
// }

// let {name: anotherName, age} = name;
// console.log(anotherName    +" "+ age)

// let array1 = ["osas", "Riemen", "Rhema", "Igbinobaro", "Iwinosa"]
// let [osas, riemen, ...restNames] = array1
// console.log(restNames)

// let a = 3
// let b = 5;
// [a,b] = [b,a]
// console.log(a)

// let book = {
//     title: 'XYZ',
//     author: 'ABC',
//     ISBN: 122345566,
//     getBookName: function () {
//         return this.title
//     }
// }

// class Movie {
//     //
// }

function Person(name) {
    this.name = name;
    this.greeting = function() {
      console.log('Hi! I\'m ' + this.name + '.');
    };
  }

  let person1 = new Person('Bob');
let person2 = new Person('Sarah');

class Person {
    constructor(name) {
        this.name = name;
    }
    greeting () {
        console.log('Hi! I\'m ' + this.name + '.');
    }
}