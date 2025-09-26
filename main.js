window.addEventListener("DOMContentLoaded", (e) => {
  console.log("dom loaded successfully")
});
const menuButton = document.querySelector(".open-button");
const navList = document.querySelector(".nav-list")
menuButton.addEventListener("click", (e) => {
  navList.classList.toggle('novisible'); }
)