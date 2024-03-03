class Person{
    vehicle = 'SUV'
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person{
    constructor (name, age, salary){
        super(name, age)
        this.salary = salary;
    }
}

e1 = new Employee('gaurav', 22, 15000)
console.log(e1.name, e1.vehicle);