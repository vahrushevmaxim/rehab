import Swiper from 'swiper/bundle';
document.addEventListener('DOMContentLoaded', function () {

  /*Слайдер блока Что делает нас достойными*/
  if (document.querySelector('.adv__content-wrapper')) {
    const swiper = new Swiper('.adv__content-wrapper', {
      // Optional parameters
      loop: true,
      // If we need pagination
      pagination: {
        el: '.adv__pagin',
      },
      breakpoints: {
        1344: {
          slidesPerView: 3,
          watchOverflow: true, // Если слайдов меньше чем указано в slidesPerView, слайдер отключится
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 2,
          watchOverflow: true,
          spaceBetween: 32,
        },
        320: {
          spaceBetween: 0,
          slidesPerView: 1,
          watchOverflow: true,
        }
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

  /*Слайдер блока Наши специалисты*/
  if (document.querySelector('.speclist__slider')) {
    const swiper1 = new Swiper('.speclist__slider', {
      // Optional parameters
      loop: true,
      
      breakpoints: {
        1344: {
          spaceBetween: 32,
          slidesPerView: 4,
          watchOverflow: true, // Если слайдов меньше чем указано в slidesPerView, слайдер отключится
        },
        1024: {
          spaceBetween: 32,
          slidesPerView: 3,
          watchOverflow: true,
        },
        320: {
          spaceBetween: 8,
          slidesPerView: 2,
          watchOverflow: true,
        }
      },

      // Navigation arrows
      navigation: {
        nextEl: '.speclist__next-el',
        prevEl: '.speclist__prev-el',
      },

    });
  }

})