const hambrgrMenu = document.querySelector(".hamburger-menu");
const navLink = document.querySelector(".nav-links");

hambrgrMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    navLink.classList.toggle("hide");
});

document.addEventListener("click", (e) => {
    if(!navLink.contains(e.target))
        navLink.classList.add("hide");
});

navLink.addEventListener("click", (e) => {
    if(e.target.tagName === 'A') 
        navLink.classList.add("hide");

})