console.log("Cześć!");

let section_przycisk = document.querySelector(".js-section__przycisk");
let photo = document.querySelector(".js-section__photo");
let section__motyw = document.querySelector(".js-section__theme");
let body = document.querySelector(".body");
let motywName = document.querySelector(".js-section__themeName");

section_przycisk.addEventListener("click", () => {
  photo.remove();
});

section__motyw.addEventListener("click", () => {
  body.classList.toggle("body--dark");
  motywName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
});
