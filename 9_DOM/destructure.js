let std = {name:"gaurav", rollnum:42, city:"mumbai"}

function std_details({name, rollnum}){
    console.log(name, rollnum);
}
std_details(std)

let {name, city} = std
console.log(name, city);

// destructuring array values 
let marks = [95,93,98,94]
let [python, java, , GoLang] = marks
console.log(python, java, GoLang);