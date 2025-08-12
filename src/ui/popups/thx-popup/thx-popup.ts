import { closeActivePopup } from 'features/popup/popup'

void (function () {
    const thxPopupButton = document.querySelector('.thx-popup__button')
    thxPopupButton?.addEventListener('click', () => closeActivePopup())
})()
