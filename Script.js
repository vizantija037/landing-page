const buttonOpen = document.querySelector(".button");
const menu = document.querySelector(".menu");
const buttonClose = document.querySelector(".button-close")

buttonOpen.addEventListener("click", ()=>{
    menu.classList.toggle("active");
})

buttonClose.addEventListener("click", ()=>{
    menu.classList.toggle("active");
})

