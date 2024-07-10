const icons = document.querySelector("#icons");
const nav = document.querySelector(".nav");
const container_nav = document.querySelector(".container_nav");
const body = document.querySelector("body");

icons.addEventListener("click", () => {
    nav.classList.toggle("active");
    container_nav.classList.toggle("active");
    body.classList.toggle('stop-scrolling');
    window.scrollTo(0, 0);
});
