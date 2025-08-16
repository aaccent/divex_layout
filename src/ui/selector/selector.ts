import { isMobile } from 'globals/adaptive'

void (function () {
    const selectors = document.querySelectorAll('.selector')
    selectors.forEach((selector) => {
        selector.addEventListener('click', () => {
            selector.classList.toggle('_opened')
        })
    })

    if (isMobile) {
        const selectorHeader = document.querySelector('.selector__header')
        selectorHeader?.classList.add('_mobile')
    }
})()
