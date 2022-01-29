class Car {
    constructor(make,model,color,year) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.year = year;
    }

    changeColor (color) {
        this.color = color;
        return `${this.make}  ${this.model} has been change to ${this.color}`
    }
}

const car = new Car ("Lexus", "RX330", "Silver", 2006)
console.log(car.make, car.model, car.changeColor('red'))