const homeLink = document.querySelector(".nav-link1");
const aboutLink = document.querySelector(".nav-link2");
const projectLink = document.querySelector(".nav-link3");
const contactLink = document.querySelector(".nav-link4");
const toggleBtn = document.getElementById("menu");

toggleBtn.addEventListener("click", function () {
  homeLink.classList.toggle("active");
  aboutLink.classList.toggle("active");
  projectLink.classList.toggle("active");
  contactLink.classList.toggle("active");
});