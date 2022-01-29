// const person = {
//     name: ['Bob', 'smith'],
//     age: 32,
//     gender: 'male',
//     interest: ['music', 'skiing'],
//     greeting: function(){
//         alert('Hi! I am Bob')
//     }
// }

// for (var key in person){
//     console.log(person[key])
// }

// const movieDirector = {
//     director: 'Tyler Perry',
//     nationality: 'American',
//     genre: ['Romance', 'Comedy'],
//     members: 8,
//     released: 2007,
//     hit: true,
//     movies: [
//         {
//             name: 'album 1',
//             released: 2006,

//         },{
//             name: 'album 2',
//             released: 2004
//         }
//     ]

// }

// const movieInfo = `${movieDirector.director} is an ${movieDirector['nationality']} movie director that
// has been active since ${movieDirector.released} and with genre of ${movieDirector.genre[0]} and ${movieDirector.genre[1]}

// `
// console.log(movieInfo)

const person = {
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 ={
    firstName: "Osaretin",
    lastName: "Igbinobaro"
}

const person2 ={
    firstName: "Osariemen",
    lastName: "Osarumwense"
}
console.log(person.getFullName.call(person2))