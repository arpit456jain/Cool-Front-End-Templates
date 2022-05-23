$(document).ready(function () {
  /* For stiky navigation*/
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("stiky");
      } else {
        $("nav").removeClass("stiky");
      }
    },
    {
      offset: "60px;",
    }
  );
  /* Scroll on buttons*/
  $(".js--scroll-to-plan").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });
  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });
  /*------- Animation to scroll --------*/
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "50%",
    }
  );

  /* Mobile Navigation*/
  $(".nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $("js--nav-icon i");
    var xIcon = '<ion-icon name="close"></ion-icon>';
    nav.slideToggle(200);
    if (icon.hasClass("nav-icon")) {
      icon.add(xIcon);
      icon.removeClass("nav-icon");
    } else {
      icon.add("nav-icon");
      icon.removeClass(xIcon);
    }
  });
});

//  Stuck HERE Because of ICON !!!
