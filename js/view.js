import Model from './model.js'

export default class View {
    constructor() {
        this.menu = document.getElementById('menu')
        this.nav = document.getElementById('nav')
        this.body = document.getElementById('body')
        this.chronometer = document.getElementById('chronometer')
        this.model = new Model()
    }

    showMenu() {
        this.menu.classList.add('d-none')
    }

    hideMenu() {
        this.menu.classList.remove('d-none')
    }

    changeMenuIcon() {
        const menuIcon = document.getElementById('menu-icon')

        this.model.changeMenuIcon()
        menuIcon.setAttribute('src', this.model.menuIcon.valueOf())
    }

    changeDarkModeIcon() {
        const darkModeIcon = document.getElementById('dark-mode-icon')

        this.model.changeDarkModeIcon()
        darkModeIcon.setAttribute('src', this.model.darkModeIcon.valueOf())
    }

    darkModeOn() {
        this.menu.classList.add('dark-mode-element')
        this.nav.classList.add('dark-mode-element')
        this.body.classList.add('dark-mode-background')
        this.chronometer.classList.add('dark-mode-chronometer')
        this.changeMenuIcon()
        this.changeDarkModeIcon()
    }

    darkModeOff() {
        this.menu.classList.remove('dark-mode-element')
        this.nav.classList.remove('dark-mode-element')
        this.body.classList.remove('dark-mode-background')
        this.chronometer.classList.remove('dark-mode-chronometer')
        this.changeMenuIcon()
        this.changeDarkModeIcon()
    }

    showChronometer(mins, segs, cents) {
        this.chronometer.innerText = `${mins}:${segs}.${cents}`
    }
}