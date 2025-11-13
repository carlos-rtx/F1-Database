window.addEventListener("DOMContentLoaded", (e) => {
  console.log("dom loaded successfully")
});
const menuButton = document.querySelector(".open-button");
const langButton = document.querySelector(".lang-button");
const langTxt = document.querySelector(".nav-lang-text")
const navList = document.querySelector(".nav-list")
const navbarInternal = document.querySelector(".nav-wrapper")
const navbarExternal = document.querySelector(".nav-list")
const navbarDescriptions = document.getElementsByClassName("nav-link-content")
const navInnerContainer = document.querySelector(".nav-buttons-container")
const nav = document.querySelector("nav");
//functions
function toggleMenu(e) {
  navList.classList.toggle('novisible');
}
//event listeners

langTxt.addEventListener("click", (e) => {
  if (langTxt.innerText === "EN") {
  langTxt.innerText = "ES"
  } else {
    langTxt.innerText = "EN"
  }
})

langButton.addEventListener("click", (e) => {
  if (langTxt.innerText === "EN") {
  langTxt.innerText = "ES"
  } else {
    langTxt.innerText = "EN"
  }
})
function resizeHandler() {

  if (window.innerWidth >= 768 && !navInnerContainer.contains(navbarExternal)) {
  navInnerContainer.appendChild(navbarExternal);
  menuButton.removeEventListener("click", toggleMenu);
  navbarExternal.classList.remove("novisible")
  } else if (window.innerWidth < 768) {
    nav.appendChild(navbarExternal)
    menuButton.addEventListener("click", toggleMenu);
    navbarExternal.classList.add("novisible")
  } 
}
window.addEventListener("resize", resizeHandler)
resizeHandler()



  
fetch("standings-main.json").then(res => res.json()).then(data => data);
