import "./header.sass";

import "./mobile-navigation";

$(".js-burger").on("click", function() {
  $(".header-mobile")
    .slideToggle()
    .css("display", "flex");
  $(".nav__burger-item").toggleClass("nav__burger-item--open");
});
