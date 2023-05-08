
export const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1.45,
  centeredSlides: true,
  lazyLoading: true,
  autoHeight: true,
  // Navigation arrows
  navigation: {
    autoHeight: true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  speed: 800,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,

    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.45,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1.45,

    }
  }
  // coverflowEffect: {
  //   rotate: 0,
  //   strech: 0,
  //   depth: 100,
  //   modifier: 2,
  //   slideShadows: true,
  // }

});