import Swiper from 'swiper/bundle';
document.addEventListener('DOMContentLoaded', function () {
  let galleryTop = new Swiper('.gallery-top', {
    slidesPerView: '1',
    navigation: {
      prevEl: '.heading-btn--prev',
      nextEl: '.heading-btn--next',
    },
  });

  let galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: '4',
    touchRatio: 0.2,
    slideToClickedSlide: true,
  });

  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;
});