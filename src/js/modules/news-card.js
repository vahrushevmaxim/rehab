import Swiper from 'swiper/bundle';
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.news-card__slaider-wrapper')) {
        const swiper1 = new Swiper('.news-card__slaider-wrapper', {
            slidesPerView: 3,
            spaceBetween: 25,
            loop: true,
            grabCursor: true,
            touchRatio: 0.2,
            watchOverflow: true, // Если слайдов меньше чем указано в slidesPerView, слайдер отключится
            navigation: {
                nextEl: '.news-card__next',
                prevEl: '.news-card__prev',
                disabledClass: '.news-card__prev',
            },
        });
    };
});