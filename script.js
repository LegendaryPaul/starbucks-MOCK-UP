

const dropbox = document.querySelectorAll(".links__item h4");

dropbox.forEach((show) => {
    show.addEventListener("click", () => {
        show.nextElementSibling.classList.toggle("open");
        show.querySelector("i").classList.toggle("open");
    })
})

//----------------------------

const toggle = document.querySelector(".toggle__menu");
const nav = document.querySelector(".header__nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("open");

});


