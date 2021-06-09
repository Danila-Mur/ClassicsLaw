// import { throttle } from "lodash-es";
import "./header.sass";

import "./mobile-navigation";

$(window).on("resize", function() {
  if ($(window).outerWidth() > 768) {
    $(".header-mobile").css("display", "");
    if ($(".nav__burger-item").hasClass("nav__burger-item--open")) {
      $(".nav__burger-item").removeClass("nav__burger-item--open");
    }
  }
});

$(".js-burger").on("click", function() {
  $(".header-mobile")
    .slideToggle()
    .css("display", "flex");
  $(".nav__burger-item").toggleClass("nav__burger-item--open");
});
