let close1 = document.querySelector(".close");
let menu = document.querySelector(".sitenav_menu-icon");
let lists = document.querySelector("#lists");
let bg = document.querySelector(".site-header");
let facts = document.querySelector(".header__facts");

 menu.addEventListener("click", function(){
    menu.classList.add("d-none");
    facts.classList.add("d-none");
    close1.classList.remove("d-none");
    lists.classList.remove("d-none");
    bg.classList.add("bg-none");
 })

 close1.addEventListener("click", function(){
    facts.classList.remove("d-none");
    menu.classList.remove("d-none");
    close1.classList.add("d-none");
    lists.classList.add("d-none");
    bg.classList.remove("bg-none");
 })