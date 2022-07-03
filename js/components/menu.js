import Model from '../model.js'
import View from '../view.js'

export default class Menu {
    constructor() {
        this.btnMenu = document.getElementById('menu-btn')
        this.model = new Model()
        this.view = new View()
        this.btnMenu.onclick = () => this.onClick()
    }

    showMenu() {
        this.view.showMenu()
    }

    hideMenu() {
        this.view.hideMenu()
    }

    changeHideMenu() {
        this.model.changeHideMenu()
    }

    onClick() {
        if (this.model.hideMenu) {
            this.showMenu()
        } else {
            this.hideMenu()
        }

        this.changeHideMenu()
    }
}