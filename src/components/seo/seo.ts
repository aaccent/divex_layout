void (function () {
    const moreButton = document.querySelector('.seo__button')
    const seoText = document.querySelector('.seo__content')

    moreButton?.addEventListener('click', () => {
        const opened = !!seoText?.classList.contains('_opened')

        if (opened) {
            seoText?.classList.remove('_opened')
            moreButton.textContent = 'Читать полностью'
        } else {
            seoText?.classList.add('_opened')
            moreButton.textContent = 'Свернуть'
        }
    })
})()
