let first_page = document.getElementById("first_page");
let second_page = document.getElementById("second_page");
let third_page = document.getElementById("third_page");
let footer_1_link_page = document.getElementById("footer_1_link_page");
let footer_2_link_page = document.getElementById("footer_2_link_page");
let footer_3_link_page = document.getElementById("footer_3_link_page");

footer_1_link_page.addEventListener("click", function () {
  first_page.style.display = "flex";
  second_page.style.display = "none";
  third_page.style.display = "none";
});

footer_2_link_page.addEventListener("click", function () {
  first_page.style.display = "none";
  second_page.style.display = "flex";
  third_page.style.display = "none";
});

footer_3_link_page.addEventListener("click", function () {
  first_page.style.display = "none";
  second_page.style.display = "none";
  third_page.style.display = "flex";
});
