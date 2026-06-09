const btn = document.querySelector(".btn-burger");
const menu = document.querySelector(".burger-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("open");
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 990) {
    menu.classList.remove("open");
  }
});
