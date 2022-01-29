function Employee (name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    let bonus = 10000;

    this.getFullSalary = function () {
        console.log(`${this.name} is to be paid ${this.salary+bonus}`)
    }
}

let employee1 = new Employee('Osar', 31, 300000)
//employee1.bonus = 200000
employee1.getFullSalary()
console.log(employee1.bonus)