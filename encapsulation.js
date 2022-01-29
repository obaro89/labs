let employee = {
    baseSalary: 20000,
    rate: 10,
    overtime: 20,
    getWage : function () {
        return this.baseSalary + (this.overtime * this.rate)
    }
}

employee.getWage()