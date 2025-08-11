void (function () {
    const burgerMenu = document.querySelector('.header-menu__burger')
    const headerMenu = document.querySelector('.header-menu')

    burgerMenu?.addEventListener('click', () => {
        headerMenu?.classList.toggle('_opened')
    })
})()
