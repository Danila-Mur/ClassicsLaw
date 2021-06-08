import "./index.sass";

$(".header-mobile__link--open").on("click", function() {
  $(".header-mobile__sublist")
    .slideToggle()
    .toggleClass("header-mobile__sublist--active");
});
