void (function () {
    const closeCookieButton = document.querySelector('.cookie__button')
    const cookie = document.querySelector('.cookie')
    closeCookieButton?.addEventListener('click', () => {
        cookie?.classList.add('invisible')
    })
})()
