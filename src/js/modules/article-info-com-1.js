import Swiper from 'swiper/bundle';
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.art__curat')) {
        const swiper = new Swiper('.art__curat', {
            loop:true,
            slidesPerView: 2,
            watchOverflow: true, // Если слайдов меньше чем указано в slidesPerView, слайдер отключится
            navigation: {
              nextEl: '.art__nav2',
              prevEl: '.art__nav1',
            },
        });
    }

    if (document.querySelector('.art__swiper')) {
        const swiper1 = new Swiper('.art__swiper', {
            loop:true,
            slidesPerView: 1,
            spaceBetween: 16,
            watchOverflow: true, // Если слайдов меньше чем указано в slidesPerView, слайдер отключится
            navigation: {
              nextEl: '.art__next',
              prevEl: '.art__prev',
            },
            pagination: {
                el: '.art__count',
                type: 'fraction',
            },
        });
    }
});