//alert("test")
//----------------------------------
//Scroll Events

const nav = document.querySelector("nav");
console.log(nav);

let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");

toggle.addEventListener("click", function(){
    body.classList.toggle("open");
});