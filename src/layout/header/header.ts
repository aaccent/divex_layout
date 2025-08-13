void (function () {
    const burgerMenu = document.querySelectorAll('.header-menu__burger')
    const headerMenu = document.querySelector('.header-menu')

    burgerMenu.forEach((burger) => {
        burger.addEventListener('click', () => {
            headerMenu?.classList.toggle('_opened')
        })
    })
})()
