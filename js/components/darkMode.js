import Model from "../model.js"
import View from "../view.js"

export default class DarkMode {
    constructor() {
        this.model = new Model()
        this.view = new View()
        this.darkModeBtn = document.getElementById('dark-mode-btn')
        if (this.model.darkMode) {
            this.darkModeOn()
        }
        this.darkModeBtn.onclick = () => this.onClick()
    }

    darkModeOn() {
        this.view.darkModeOn()
    }

    darkModeOff() {
        this.view.darkModeOff()
    }

    changeDarkMode() {
        this.model.changeDarkMode()
    }

    onClick() {
        if (!this.model.darkMode) {
            this.darkModeOn()
        } else {
            this.darkModeOff()
        }

        this.changeDarkMode()
    }
}