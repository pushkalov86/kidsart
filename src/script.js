'use strict';

/* eslint no-new: "error" */

// eslint-disable-next-line no-unused-vars, no-undef
const swiper = new Swiper('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  grabCursor: true,

  slidesPerView: 3,

  spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    980: {
      slidesPerView: 3,
    },
  },
});
