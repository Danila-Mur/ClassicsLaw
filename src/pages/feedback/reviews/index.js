import Swiper, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "./index.sass";

Swiper.use([Navigation, Pagination]);
let reviewsMenu = ["", "", "", "", "", ""];
const reviewsSwiper = new Swiper(".reviews__cards", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination--reviews",
    clickable: true,
    bulletClass: "swiper-pagination-bullet--reviews",
    bulletActiveClass: "swiper-pagination-bullet-active--reviews"
  },
  navigation: {
    nextEl: ".swiper-button-next--reviews",
    prevEl: ".swiper-button-prev--reviews"
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 14
    }
  }
});
