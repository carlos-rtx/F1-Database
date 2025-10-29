window.addEventListener("DOMContentLoaded", (e) => {
  console.log("dom loaded successfully")
});

const menuButton = document.querySelector(".open-button");
const langButton = document.querySelector(".lang-button");
const langTxt = document.querySelector(".nav-lang-text")
const navList = document.querySelector(".nav-list")
menuButton.addEventListener("click", (e) => {
  navList.classList.toggle('novisible'); }
)


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

/*langSel.forEach(function(bigger.ihger) {
  elem.addEventListener("click", (e) => {
    console.log("test");
  })
})*/
//useless