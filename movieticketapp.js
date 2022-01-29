class MovieStore {
    constructor() {
        this.store = []
    }
    save(obj) {
        this.store.push(obj)
        console.log(`${obj.title} has been successfully saved into the store`)
    }

    getMovieById(id) {
        let foundMovie = this.store.find(movie => movie.id === id)
        if(foundMovie) return foundMovie
        return false
    }

    getAllMovies() {
        return this.store
    }
    update(obj, id) {
       let foundMovie = this.store.find(movie => movie.id === id)
     // let foundMovie = this.getMovieById(id)
       if(foundMovie) {
           let index = this.store.indexOf(foundMovie)
           obj = {
               ...foundMovie,
               ...obj
           }
           this.store[index] = obj
           console.log(this.store[index])
           console.log(`The Movie ${foundMovie.title} has been successfully updated`)
       }else {
           console.log("Unable to update! Please confirm movie ID")
       }
      
    }
    delete(id) {
        let foundMovie = this.getMovieById(id)
        if(foundMovie) {
            let index = this.store.indexOf(foundMovie)
            this.store.splice(index, 1)
            
            console.log(`The Movie ${foundMovie.title} has been deleted.`)
        }
    }

}

class Movie {
    constructor(id, title, type, language, duration, desc, rating, isAvailable = false, seatType) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.language = language;
        this.duration = duration;
        this.desc = desc;
        this.rating = rating;
        this.isAvailable = isAvailable;
        this.seatType = seatType;
    }

}

class Movies extends MovieStore {
    getByMovieTitle(title) {
       let foundMovie = this.store.find(movie => movie.title.toLowerCase() === title.toLowerCase())
       if(foundMovie) {
           return foundMovie
       }else {
         console.log("Movie not found!")  
       }
       
    }

    rateMovie(id, rating) {
        let getMovie = this.getMovieById(id)
        if(getMovie) {
            getMovie.rating = rating
            return true
        }
        console.log(`Could not find a movie with id ${id}`)
        return false
    }

    availMovie(id) {
        let getMovie = this.getMovieById(id)
        if(getMovie) {
            //toggler
            //let toggleAvail = !getMovie.isAvailable
          let toggleAvail = getMovie.isAvailable ? false : true
           let availability = toggleAvail ? "Available" : "Unavailable"
            console.log(`The movie ${getMovie.title} with id ${id} is ${availability}`)
            return true
        }
        console.log(`Could not find a movie with id ${id}`)
        return false
    }
    assignSeat(id, seatType) {
        let getMovie = this.getMovieById(id)
        if(getMovie) {
            getMovie.seatType = seatType
            console.log(`The movie ${getMovie.title} with id ${id} has its seat type changed to ${seatType}`)
            return true
        }
        console.log(`Could not find a movie with id ${id}`)
        return false
    }
}


//Creating Instance of Different Movie
const movie1 = new Movie(1, "Lion King", "Action", "English", "3 Hours", "This is a short description of lion king", 13, false, "VIP")
const movie2 = new Movie(2, "Acapela", "Romance", "French", "2.3 Hours", "This is a short description of Acapela", 18, false, "Premium")
const movie3 = new Movie(3, "Three Idiots", "Commedy", "English/Hindi", "3 Hours", "This is a short description of Three Idiots", 10, false, "Regular")
const movie4 = new Movie(4, "Omo Ghetto", "Action/Commedy", "English/Pigin/Yoruba/Igbo", "3 Hours", "This is a short description of Omo Ghetto is a Nigerian Movie", 17, false, "Regular")


const movies = new Movies()

//Saving each movie to the movie store
movies.save(movie1)
movies.save(movie2)
movies.save(movie3)
movies.save(movie4)

//Make a movie available
movies.availMovie(3)

//Assign VIP seat
movies.assignSeat(3, "VIP")
movies.assignSeat(1, "Regular")

//Update Movie
movies.update({rating: 21}, 2)

//Show all movies in our store
console.log(movies.getAllMovies())

//Get movie by title
console.log(movies.getByMovieTitle("Lion King"))
movies.availMovie(3)
movies.update({rating: 21, desc: "The coming of the Lion King", rating: "All", language: "Spanish", title: "Lion King HD", type:"Cartoon"}, 1)


movies.delete(3)
console.log(movies.getAllMovies())
