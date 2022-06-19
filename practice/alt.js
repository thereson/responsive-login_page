const orange = document.querySelector(".orange");
const menu = document.querySelectorAll(".men");
const bar = document.querySelector(".toggle");

bar.addEventListener("click", () => {
  orange.classList.toggle("active");
});

const query = window.matchMedia("(max-width:500px)");
if (query.matches) {
  menu.forEach((mov) => {
    mov.style.display = "none";
  });
}
