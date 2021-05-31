import Swiper, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "./index.sass";

Swiper.use([Navigation, Pagination]);
let feedbackMenu = ["", "", "", "", "", ""];
const swiper = new Swiper(".feedback__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".feedback__pagination",
    clickable: true,
    renderBullet: function(index, className) {
      return (
        '<span class="' + className + '">' + feedbackMenu[index] + "</span>"
      );
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1025: {
      slidesPerView: 2,
      spaceBetween: 28
    },
    1337: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});
