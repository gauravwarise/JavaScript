data1 = [10,20]
data2 = [30,40]
data3 = [data1, data2]
console.log(data3);

data4 = [...data1, ...data2]
console.log(data4);

data5 = [...data4, 99, ...data1, 100, ...data2]
console.log(data5);

data6 = {name:'raj', age:22}
data7 = {salary:30000, city:'mumbai'}

x = {data6, data7}
console.log(x);


emp = {...data6, ...data7}
console.log(emp);


function add(...num){
    console.log(num);
    let sum=0
    for (n of num){
        sum+=n;
    }
    console.log(sum);
}
add(10,20,30)

