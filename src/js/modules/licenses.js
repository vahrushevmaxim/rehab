import Swiper from 'swiper/bundle';
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.licenses__slaider')) {
        const swiper1 = new Swiper('.licenses__slaider', {
            slidesPerView: 4,
            spaceBetween: 32,
            loop: true,
            grabCursor: true,
            touchRatio: 0.2,
            watchOverflow: true, // Если слайдов меньше чем указано в slidesPerView, слайдер отключится
            navigation: {
                nextEl: '.licenses-next',
                prevEl: '.licenses-prev',
                disabledClass: '.licenses-prev',
            },
            pagination: {
                el: '.licenses__count',
                type: 'fraction',
            },

            breakpoints: {
                1344: {
                  slidesPerView: 4,
                  watchOverflow: true, // Если слайдов меньше чем указано в slidesPerView, слайдер отключится
                  spaceBetween: 36,
                },
                1025: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                  watchOverflow: true,
                },
                300: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  watchOverflow: true,
                }
              },
        });
    };
});