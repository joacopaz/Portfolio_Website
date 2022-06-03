const storedWidth = sessionStorage.getItem('containerWidth')
const storedHeight = sessionStorage.getItem('containerHeight')
const main = document.querySelector('main')
const container = document.querySelector('.background-container')

console.log(`Storage is: ${storedWidth} and ${storedHeight}`)

window.onload = async () => {
    document.querySelector('[data-video]').play()
    if (main.offsetWidth < storedWidth) {
        main.style.minWidth = storedWidth + 'px'
        await new Promise(r => setTimeout(r, 600));
        main.style.minWidth = ''
        await new Promise(r => setTimeout(r, 600));
    }
    if (main.offsetWidth > storedWidth) {
        main.style.maxWidth = storedWidth + 'px'
        await new Promise(r => setTimeout(r, 600));
        main.style.maxWidth = ''
        await new Promise(r => setTimeout(r, 600));
    }
}

const animated = document.querySelectorAll('[data-animated]')
document.onload = document.querySelector('.mask').style.opacity = '0%'
document.onload = document.querySelector('main').style.opacity = '100%'
animated.forEach(e => {
    e.addEventListener('mouseleave', async () => {
        const lines = e.children[0].children
        lines[0].style.transitionDelay = '600ms'
        lines[1].style.transitionDelay = '400ms'
        lines[2].style.transitionDelay = '200ms'
        lines[3].style.transitionDelay = '0ms'
        await new Promise(r => setTimeout(r, 600));
        for (const line of lines) {
            line.style.transitionDelay = ''
        }
    })
})

const links = document.querySelectorAll('a')
links.forEach(e => {
    e.addEventListener('click', async (event) => {
        const href = event.target.closest('a').href
        if (href.includes('#')) return false;
        event.preventDefault()
        document.querySelector('.mask').style.opacity = '100%'
        sessionStorage.setItem('containerHeight', container.offsetHeight)
        sessionStorage.setItem('containerWidth', container.offsetWidth)
        main.style.opacity = '0%'
        await new Promise(r => setTimeout(r, 500));
        window.location = href
    })
})