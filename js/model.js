export default class Model {
    constructor() {
        this.hideMenu = true
        this.darkMode = false
        this.MenuIcon = {
            MAIN_COLOR: '../assets/bars.png',
            DARK_COLOR: '../assets/white-bars.png'
        }
        this.DarkModeIcon = {
            MAIN_COLOR: '../assets/dark-mode.png',
            DARK_COLOR: '../assets/white-dark-mode.png'
        }
        this.menuIcon = this.MenuIcon.MAIN_COLOR
        this.darkModeIcon = this.DarkModeIcon.MAIN_COLOR
    }

    changeHideMenu() {
        this.hideMenu = !this.hideMenu
    }

    changeDarkMode() {
        this.darkMode = !this.darkMode
    }

    changeMenuIcon() {
        if (this.menuIcon === this.MenuIcon.MAIN_COLOR) {
            this.menuIcon = this.MenuIcon.DARK_COLOR
        } else {
            this.menuIcon = this.MenuIcon.MAIN_COLOR
        }
    }

    changeDarkModeIcon() {
        if (this.darkModeIcon === this.DarkModeIcon.MAIN_COLOR) {
            this.darkModeIcon = this.DarkModeIcon.DARK_COLOR
        } else {
            this.darkModeIcon = this.DarkModeIcon.MAIN_COLOR
        }
    }
} 