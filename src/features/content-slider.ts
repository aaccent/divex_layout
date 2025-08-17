import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

void (function () {
    const content = document.querySelector('.content .container')
    if (!content) return

    const allImages: HTMLImageElement[] = Array.from(content.querySelectorAll('img'))

    const consecutiveImages: HTMLImageElement[][] = []
    let currentGroup: HTMLImageElement[] = []

    allImages.forEach((img: HTMLImageElement, index: number) => {
        if (index > 0 && img.previousElementSibling === allImages[index - 1]) {
            currentGroup.push(img)
        } else {
            if (currentGroup.length > 0) {
                consecutiveImages.push(currentGroup)
                currentGroup = []
            }
            currentGroup.push(img)
        }
    })

    if (currentGroup.length > 0) {
        consecutiveImages.push(currentGroup)
    }

    consecutiveImages.forEach((imagesArr) => {
        if (imagesArr.length < 2) return

        const swiperContainer = document.createElement('div')
        swiperContainer.classList.add('swiper-container')

        const swiper = document.createElement('div')
        swiper.classList.add('swiper')

        const swiperWrapper = document.createElement('div')
        swiperWrapper.classList.add('swiper-wrapper')

        const nextButton = document.createElement('div')
        nextButton.classList.add('slider-navigation', '_next')

        const prevButton = document.createElement('div')
        prevButton.classList.add('slider-navigation', '_prev')

        swiperContainer.append(swiper)
        swiper.append(swiperWrapper)
        swiperContainer.append(nextButton, prevButton)
        content.append(swiperContainer)

        imagesArr.forEach((item) => {
            const link = document.createElement('a')
            link.href = item.src
            link.setAttribute('data-fancybox', 'gallery')
            link.append(item)
            link.classList.add('swiper-slide')
            swiperWrapper.append(link)
        })

        new Swiper(swiper, {
            slidesPerView: 1.1,
            spaceBetween: 12,
            modules: [Navigation],
            navigation: {
                nextEl: '.content .slider-navigation._next',
                prevEl: '.content .slider-navigation._prev',
            },
            breakpoints: {
                1000: {
                    slidesPerView: 3,
                    spaceBetween: 18,
                },
            },
        })
    })
})()
