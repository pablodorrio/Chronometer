import View from "../view.js"

export default class Chronometer {
    constructor() {
        this.mins = 0
        this.segs = 0
        this.cents = 0
        this.initBtn = document.getElementById('initBtn')
        this.restartBtn = document.getElementById('restartBtn')
        this.view = new View()
        this.initBtn.onclick = () => this.chonometerOn()
    }

    formatNumber(num) {
        if (num < 10) {
            return `0${num}`
        }

        return num
    }

    showChronometer(mins, segs, cents) {
        this.view.showChronometer(this.formatNumber(mins), 
                                    this.formatNumber(segs), this.formatNumber(cents))
    }

    interval(mins, segs, cents, interval) {
        setInterval(() => {
            
        }, interval);
    }

    chronometerOff() {
        this.showChronometer(this.mins, this.segs, this.cents)
    }

    chonometerOn() {
        let chronoMins = this.mins
        let chronoSegs = this.segs
        let chronoCents = this.cents
        
        setInterval(() => {
            chronoMins += 1

            if (chronoMins === 100) {
                chronoMins = 0
            }

            this.showChronometer(chronoMins, chronoSegs, chronoCents)
        }, 60000);

        setInterval(() => {
            chronoSegs += 1

            if (chronoSegs === 60) {
                chronoSegs = 0
            }

            this.showChronometer(chronoMins, chronoSegs, chronoCents)
        }, 1000);

        setInterval(() => {
            chronoCents += 1

            if (chronoCents === 100) {
                chronoCents = 0
            }

            this.showChronometer(chronoMins, chronoSegs, chronoCents)
        }, 10);
    }
}