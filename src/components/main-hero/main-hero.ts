import Swiper from 'swiper'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'

void (function () {
    const mainHeroSwiper = document.querySelector<HTMLElement>('.main-hero.swiper')
    if (!mainHeroSwiper) return
    new Swiper(mainHeroSwiper, {
        modules: [Autoplay, EffectFade, Pagination],
        effect: 'fade',
        slidesPerView: 1,
        loop: true,
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 3000,
        },
        allowTouchMove: false,
        pagination: {
            el: '.main-hero__pagination',
            clickable: true,
        },
    })
})()
