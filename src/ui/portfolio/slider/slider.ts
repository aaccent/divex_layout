import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

void (function () {
    const portfolioSlider = document.querySelector<HTMLElement>('.portfolio-slider .swiper')
    if (!portfolioSlider) return

    new Swiper(portfolioSlider, {
        slidesPerView: 1.1,
        spaceBetween: 12,
        modules: [Navigation],
        navigation: {
            nextEl: '.portfolio-slider__navigation-next',
            prevEl: '.portfolio-slider__navigation-prev',
        },
        breakpoints: {
            1000: {
                slidesPerView: 4,
                spaceBetween: 18,
            },
        },
    })
})()
