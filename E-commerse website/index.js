let bars=document.querySelector("#bar");
let close =document.querySelector("#close");
let nav=document.querySelector("#navbar");


if(bars){
    bars.addEventListener('click',()=>{
        console.log("hello");
        nav.classList.add('active');

    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');

    })
}
