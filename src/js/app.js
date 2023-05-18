import * as webpCheck from "./modules/webpcheck.js"
import * as burgerMenu from "./modules/burgermenu.js"
import * as themeButton from "./modules/themebtn.js"
import * as readMore from "./modules/readmore.js"
import * as scroll from "./modules/animateonscroll.js"

//import * as tabMenu from "./modules/tabs.js"
import * as Swiper from "./modules/swiper.js"

webpCheck.isWebp()
burgerMenu.burger()
themeButton.themeChange()
readMore.readMoreFunc()
scroll.scrollAnimation()

//tabMenu.tabs()
Swiper.swiper()