import "./index.sass";

$(".js-nav-link").on("click", function() {
  $(".js-nav-search")
    .toggleClass("nav__search--active")
    .focus();
});
// $(document).on("click", function(e) {
//   if (!$(e.target).closest(".nav__item").length) {
//     $(".js-nav-search").toggleClass("nav__search--active");
//   }
//   e.stopPropagation();
// });
