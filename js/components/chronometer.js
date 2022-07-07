import View from "../view.js"

export default class Chronometer {
    constructor() {
        this.mins = 0
        this.segs = 0
        this.cents = 0

        this.btnContainer = document.getElementById('btn-container')
        this.startBtn = document.getElementById('startBtn')
        this.restartBtn = document.getElementById('restartBtn')
        this.startBtn.onclick = () => this.chonometerOn()

        this.view = new View()
    }

    formatNumber(num) {
        if (num < 10) {
            return `0${num}`
        }

        return num
    }

    showChronometer() {
        this.view.showChronometer(this.formatNumber(this.mins), 
                                    this.formatNumber(this.segs), this.formatNumber(this.cents))
    }

    addStartBtn() {
        const startBtn = document.createElement('button')
        startBtn.classList.add('chronometer-button')
        startBtn.innerText = 'Start'
        this.startBtn = startBtn

        this.btnContainer.children[1].remove()
        this.btnContainer.appendChild(this.startBtn)
    }

    addStopBtn() {
        const stopBtn = document.createElement('button')
        stopBtn.classList.add('chronometer-button')
        stopBtn.innerText = 'Stop'

        this.btnContainer.children[1].remove()
        this.btnContainer.appendChild(stopBtn)
    }

    chronometerOff() {
        this.mins = 0
        this.segs = 0
        this.cents = 0

        this.showChronometer()
    }

    //Start, stop and restart
    chonometerOn() {
        const i = setInterval(() => {
            this.mins += 1

            if (this.mins === 100) {
                this.mins = 0
            }

            this.showChronometer()
        }, 60000);

        const j = setInterval(() => {
            this.segs += 1

            if (this.segs === 60) {
                this.segs = 0
            }

            this.showChronometer()
        }, 1000);

        const k = setInterval(() => {
            this.cents += 1

            if (this.cents === 100) {
                this.cents = 0
            }

            this.showChronometer()
        }, 10);

        this.restartBtn.onclick = () => {
            clearInterval(i)
            clearInterval(j)
            clearInterval(k)

            this.chronometerOff()
        }

        this.addStopBtn()

        this.btnContainer.children[1].onclick = () => {
            clearInterval(i)
            clearInterval(j)
            clearInterval(k)

            this.addStartBtn()
            this.startBtn.onclick = () => this.chonometerOn()
        }
    }
}