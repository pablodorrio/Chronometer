document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu')
    const menu = document.getElementById('menu')
    const darkModeBtn = document.getElementById('btn-dark-mode')
    const nav = document.getElementById('nav')
    const body = document.getElementById('body')
    const chronometer = document.getElementById('chronometer')
    let menuHide = true
    let darkMode = false

    btnMenu.onclick = () => {
        if (menuHide) {
            menu.classList.add('d-none')
        } else {
            menu.classList.remove('d-none')
        }

        menuHide = !menuHide
    }

    darkModeBtn.onclick = () => {
        const menuIcon = document.getElementById('menu-icon')
        const darkModeIcon = document.getElementById('dark-mode-icon')
        
        if (!darkMode) {
            menu.classList.add('dark-mode-element')
            nav.classList.add('dark-mode-element')
            body.classList.add('dark-mode-background')
            chronometer.classList.add('dark-mode-chronometer')
            menuIcon.setAttribute('src', './assets/white-bars.png')
            darkModeIcon.setAttribute('src', './assets/white-dark-mode.png')
        } else {
            menu.classList.remove('dark-mode-element')
            nav.classList.remove('dark-mode-element')
            body.classList.remove('dark-mode-background')
            chronometer.classList.remove('dark-mode-chronometer')
            menuIcon.setAttribute('src', './assets/bars.png')
            darkModeIcon.setAttribute('src', './assets/dark-mode.png')
        }

        darkMode = !darkMode
    }
})