// NAVBAR
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  if (scrolled > 20) {
    document.getElementById("navbar").classList.add("hello");
  } else {
    document.getElementById("navbar").classList.remove("hello");
  }
});

// HAMBURGER MENU
document.addEventListener("click", () => {
  document.getElementById("nav-menu").classList.toggle("active");
});

// ANIMATING HOME IMAGE
const container = document.querySelector(".home-image");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
  container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  container.style.transition = "none";
});

container.addEventListener("mouseleave", (e) => {
  container.style.transition = "all 0.5s ease";
  container.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// AUTOMATED TYPING JAVASCRIPT
const typeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

typeWriter.prototype.type = function () {
  const current = this.wordIndex % this.words.length;
  const fullTxt = this.words[current];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  let typeSpeed = 300;
  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  if(!this.isDeleting && this.txt === fullTxt){
    typeSpeed = this.wait;
    this.isDeleting = true;
  }
  else if(this.isDeleting && this.txt === '')
  {
    this.isDeleting = false;
    this.wordIndex++;
    typeSpeed = 500;
  }
  setTimeout(() => this.type(), typeSpeed);
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  new typeWriter(txtElement, words, wait);
}
