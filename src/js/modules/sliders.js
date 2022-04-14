import Swiper from 'swiper/bundle';
document.addEventListener('DOMContentLoaded', function() {
    
    const swiper = new Swiper('.adv__content-wrapper', {
        // Optional parameters
        loop: true,
        // If we need pagination
        pagination: {
          el: '.adv__pagin',
        },
        breakpoints: {
            1344: {
              spaceBetween: 32,
                slidesPerView: 3,
                watchOverflow: true, // Если слайдов меньше чем указано в slidesPerView, слайдер отключится
                spaceBetween: 24,
            },
            1024: {
              spaceBetween: 32,
                slidesPerView: 2,
                watchOverflow: true,
                spaceBetween: 24,
            },
            320: {
              spaceBetween: 0,
                slidesPerView: 1,
                watchOverflow: true,
                spaceBetween: 16,
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
})