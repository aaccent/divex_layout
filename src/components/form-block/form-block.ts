void (function () {
    const form = document.querySelector<HTMLFormElement>('.form-block form')
    form?.addEventListener('form-sent', () => {
        form.classList.add('_success')
    })

    const thxButton = document.querySelector('.form-block__content--thx button')
    thxButton?.addEventListener('click', () => {
        form?.reset()
        form?.classList.remove('_success')
    })
})()
