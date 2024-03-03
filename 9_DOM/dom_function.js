let in_green = document.getElementById('in_green')
console.log(in_green);
in_green.style.color = "green"

let in_red = document.getElementById('in_red')
console.log(in_red);
in_red.style.color = "red"


let h2 = document.getElementsByTagName('h2')
for (tag of h2){
    tag.style.color = "blue"   
}


let in_purple = document.getElementsByClassName('in_purple')
// for (tag of in_purple){
//     tag.style.color = "purple"   
// }

Array.from(in_purple).forEach(tag => {
    tag.style.color = "purple"
})


// let div_p = document.querySelector('div>p')
// div_p.style.color = "pink"

let divs_ps = document.querySelectorAll('div>p')
Array.from(divs_ps).forEach(tag => {
    tag.style.color = "pink"  
    tag.style.backgroundColor = "black"  
})