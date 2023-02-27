/* eslint-disable no-undef */
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

// document.addEventListener('click', documentClick);

// function documentClick(e) {
//   const targetItem = e.target;

//   if (targetItem.closest('.menu_burger')) {
//     document.documentElement.classList.toggle('menu_open');
//   }
// }

const iconMenu = document.querySelector('.burger_menu');

if (iconMenu) {
  iconMenu.addEventListener('click', function(e) {
    document.documentElement.classList.toggle('menu_open');
    iconMenu.classList.toggle('menu_open');
  });
}

// $(document).ready(function() {
//   iconMenu.click(function(event) {
//     $('.burger, .menu, .header_content, header')
//       .toggleClass('menu_open');
//     $('.page__body').toggleClass('lock');
//   });
// });

const menuLinks = document.querySelectorAll('.menu_link[data-goto]');

function onMenuLinkClick(e) {
  const menuLink = e.target;

  if (menuLink.dataset.goto
    && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top
     + scrollY - document.querySelector('header').offsetHeight;

    if (iconMenu.classList.contains('menu_open')) {
      document.documentElement.classList.remove('menu_open');
      iconMenu.classList.remove('menu_open');
    }

    window.scrollTo({
      top: gotoBlockValue,
      // behavior: "smooth",
    });
    e.preventDefault();
  };
};

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });
};
