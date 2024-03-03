class StudentDetails{
    name = ''
    rollNum = 0
    static course = "MERN"
    constructor(name, rollNum){
        this.name = name;
        this.rollNum = rollNum
    }
    studying() {
        console.log(`${this.name} study for 3 hrs a day`);
    }
}

let s1 = new StudentDetails('gaurav', 42)
let s2 = new StudentDetails('Tarak', 41)
console.log(s1.name);
s1.studying();
console.log(s2.name);   