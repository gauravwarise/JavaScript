let my_h1 = document.getElementById('my_h1')
let my_btn = document.getElementById('my_btn')

let click_count = 2;
my_btn.addEventListener('click', ()=>{
    console.log(click_count);
    if (click_count%2==0){
        my_h1.style.color = 'red';
    }
    else{
        my_h1.style.color = 'black';
    }
    click_count += 1

})



let my_h2 = document.getElementById('my_h2')
let my_btn2 = document.getElementById('my_btn2')

my_btn2.addEventListener('dblclick', ()=>{
    my_h2.textContent = 'new data added'
})


let parent = document.getElementById('parent')
let my_btn3 = document.getElementById('my_btn3')

my_btn3.addEventListener('click', ()=>{
    parent.innerHTML = "<h1> Hello i am new here </h1>"
})