import "./index.sass";

$(".service__link--search").on("click", function(event) {
  event.preventDefault();
  $(".service__link--search").toggleClass("service__link--acvtive");
  $(".service__sublist")
    .slideToggle()
    .css("display", "block");
});
