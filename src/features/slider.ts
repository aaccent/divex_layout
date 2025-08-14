import { isDesktop } from 'globals/adaptive'
import Swiper from 'swiper'

void (function () {
    if (isDesktop) return
    const sliders = document.querySelectorAll<HTMLElement>('.decor__list, .advantages__list')
    sliders.forEach((slider) => {
        new Swiper(slider, {
            slidesPerView: 1.1,
            spaceBetween: 12,
        })
    })
})()
