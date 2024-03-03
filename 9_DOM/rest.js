let prices = [99,888,777]
let [candy, potato, tomato, jalebi] = prices
console.log(candy);
console.log(potato);
console.log(tomato);
console.log(jalebi);

let [abc, ...rest_prices] = prices
console.log(abc);
console.log(rest_prices);

let std = {name:"gaurav", rollnum:42, city:"mumbai"}

let {name, ...rest_details} = std;
console.log(name, rest_details);

// rest must be last 

data1 = [10,20,30,40]
// let [a,...rest_data1, b] = data1 ===== gives error 

// calculate sum of first two digit from array using rest
function add([a,b,...rest_numbers]=given_array){
    console.log(a,b);
    console.log(`sum of first two digits :  ${a+b}`);
}
add(data1)
