import Swiper from 'swiper/bundle';
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.department-slider__item')) {
        const swiper = new Swiper('.department-slider__item', {
          loop:true,
          watchOverflow: true, // Если слайдов меньше чем указано в slidesPerView, слайдер отключится
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
    }

    if (document.querySelector('.art__curat-inner')) {
      const swiper1 = new Swiper('.art__curat-inner', {
        loop:true,
        slidesPerView: 2,
        spaceBetween: 16,
        watchOverflow: true, // Если слайдов меньше чем указано в slidesPerView, слайдер отключится
        navigation: {
          nextEl: '.art__button-next',
          prevEl: '.art__button-prev',
        },

        pagination: {
          el: '.art__curat-num',
          type: 'fraction',
      },
      });
  }  
});
