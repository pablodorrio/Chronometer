import Menu from './components/menu.js'
import DarkMode from './components/darkMode.js'
import Chronometer from './components/chronometer.js'

document.addEventListener('DOMContentLoaded', () => {
    const menu = new Menu()
    const darkMode = new DarkMode()
    const chronometer = new Chronometer()

    chronometer.chronometerOff()
})