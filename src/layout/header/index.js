import "./header.sass";

$(".js-burger").on("click", function() {
  $(".js-open-nav")
    .slideToggle()
    .css("display", "flexz");
  $(".nav__burger-item").toggleClass("nav__burger-item--open");
});
