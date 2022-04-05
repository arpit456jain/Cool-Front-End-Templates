$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $("nav").toggleClass("active");
    $("h1").toggleClass("active1");
    $("button").toggleClass("active1");
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() < 300) {
      $(".arrow").css("visibility", "hidden");
    } else {
      $(".arrow").css("visibility", "visible");
    }
  });
});

$(document).ready(function () {
  $(".arrow").on("click", function () {
    $("html, body").animate(
      { scrollTop: "0px", display: "none" },
      { duration: 500, easing: "linear" }
    );
  });
});
