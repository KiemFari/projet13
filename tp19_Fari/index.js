// window.onload =() => {
//     document.querySelector("main1").style.display = "initial";
// }
// const main1 = document.querySelector("main1")
// const main2 = document.querySelector("main2")
// const main3 = document.querySelector("main3")
//selections des variables*******************
const fars = document.querySelector(".fars")
const fart = document.querySelector(".fart")
const farq = document.querySelector(".farq")
const page1 = document.querySelector(".page1")
const page2= document.querySelector(".page2")
const page3 = document.querySelector(".page3")
// page1.style.querySelector(".page1");
// page2.style.querySelector(".page2");
// page3.style.querySelector(".page3");
fars.addEventListener("click", () => {
    page1.style.display = "block"
    page2.style.display = "none"
    page3.style.display = "none"
});

fart.addEventListener("click", () => {
    page1.style.display = "none"
    page2.style.display = "block"
    page3.style.display = "none"
});
farq.addEventListener("click", () => {
    page1.style.display = "none"
    page2.style.display = "none"
    page3.style.display = "block"
});
const farf = document.querySelector(".farf")
const farv = document.querySelector(".farv")
const farb = document.querySelector(".farb")
// const page1 = document.querySelector(".page1")
// const page2= document.querySelector(".page2")
// const page3 = document.querySelector(".page3")
farf.addEventListener("click", () => {
    page1.style.display = "block"
    page2.style.display = "none"
    page3.style.display = "none"
});
farv.addEventListener("click", () => {
    page1.style.display = "none"
    page2.style.display = "block"
    page3.style.display = "none"
});
farb.addEventListener("click", () => {
    page1.style.display = "none"
    page2.style.display = "none"
    page3.style.display = "block"
});
const farp = document.querySelector(".farp")
const farh = document.querySelector(".farh")
const fard = document.querySelector(".fard")
farp.addEventListener("click", () => {
    page1.style.display = "block"
    page2.style.display = "none"
    page3.style.display = "none"
});
farh.addEventListener("click", () => {
    page1.style.display = "none"
    page2.style.display = "block"
    page3.style.display = "none"
});
fard.addEventListener("click", () => {
    page1.style.display = "none"
    page2.style.display = "none"
    page3.style.display = "block"
});