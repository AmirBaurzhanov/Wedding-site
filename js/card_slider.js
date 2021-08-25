var Swipes = new Swiper('.s1', {
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});

var Swipes = new Swiper('.s2', {
  spaceBetween: 20,
  slidesPerView: 3,
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  autoplay: {
      delay: 10000,
      disableOnInteraction: false,
  },
  breakpoints: {
      280: {
          slidesPerView: 1,
      },
      310: {
          slidesPerView: 1,
      },
      640: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 3,
      },
  },
});