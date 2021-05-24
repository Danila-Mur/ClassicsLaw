import Swiper, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "./index.sass";

Swiper.use([Navigation, Pagination]);
let menu = ["", "", "", "", "", ""];
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 60,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '">' + menu[index] + "</span>";
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
