void (function () {
    const eventsItems = document.querySelectorAll<HTMLElement>('.events__item')
    const eventsList = document.querySelector<HTMLElement>('.events__list')

    eventsItems.forEach((event, index) => {
        const fullHeight = event.scrollHeight

        const eventImage = event.querySelector<HTMLElement>('.events__item-image')
        if (eventImage) eventImage.style.height = fullHeight + 'px'

        event.addEventListener('mouseover', () => {
            event.animate([{}, { height: fullHeight + 'px' }], {
                duration: 300,
                fill: 'forwards',
            })
        })

        event.addEventListener('mouseout', () => {
            event.animate([{}, { height: '148px' }], {
                duration: 300,
                fill: 'forwards',
            })
        })
    })
})()
