function add(){
    let x = 10;
    let y = 20;
    result = x+y
    console.log(result);
    return result
}
console.log(add());

function sub(x,y){
    result=x-y
    console.log(result);
    return `substtraction of ${x}-${y}: ${result}`
}
console.log(sub(10,2));

function div(x,y){
    result=x/y
    // console.log(result);
    return `division of ${x}-${y}: ${result}`
}
console.log(div(10,2));

//anonymous function
let join_name = function (fname, lname)
                        {
                            console.log(`full name is ${fname} ${lname}`);
                        }
join_name("gaurav", 'warise')

//arrow function
let multi = (x,y) => { console.log(x*y); }
multi(10,2)
