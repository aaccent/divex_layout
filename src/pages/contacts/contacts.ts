void (function () {
    const fileInput = document.querySelector<HTMLInputElement>('.form-block input[type="file"]')

    if (!fileInput) return

    const label = fileInput?.closest('label')
    const textContent = label?.querySelector('span')

    fileInput?.addEventListener('change', () => {
        if (!fileInput.files?.length || !label) return

        label.classList.add('_changed')
        if (textContent) textContent.textContent = fileInput.files[0].name
    })

    label?.addEventListener('click', (e) => {
        if (!label.classList.contains('_changed')) return
        e.preventDefault()

        fileInput.value = ''
        label.classList.remove('_changed')
        if (textContent) textContent.textContent = 'прикрепить файл'
    })
})()
