import * as webpCheck from "./modules/webpcheck.js"
import * as burgerMenu from "./modules/burgermenu.js"
import * as themeButton from "./modules/themebtn.js"
import * as readMore from "./modules/readmore.js"
import * as scroll from "./modules/animateonscroll.js"
import * as tgAlert from "./modules/tgalert.js"

//import * as tabMenu from "./modules/tabs.js"
/* import * as Swiper from "./modules/swiper.js" */

webpCheck.isWebp()
burgerMenu.burger()
themeButton.themeChange()
readMore.readMoreFunc()
scroll.scrollAnimation()
tgAlert.tgalert()

//tabMenu.tabs()
/* Swiper.swiperModule() */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1.45,
  centeredSlides: true,
  preloadImages: false,
  lazy: true,
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


});