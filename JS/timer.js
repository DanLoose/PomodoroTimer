const timer = {

    pomodoro: {},
    short: {},
    long: {},

    current: {},
    paused: undefined,

    timer(option) {
        this.pomodoro = createTimer(25, 0);
        this.short = createTimer(5, 0);
        this.long = createTimer(10, 0);

        switch (option) {
            case "pomodoro":
                this.current = this.pomodoro;
                break;
            case "shortBreak":
                this.current = this.short;
                break;
            case "longBreak":
                this.current = this.long;
                break;


        }

        this.paused = true;
    },

    pauseListener() {
        return this.paused;
    },

    setPaused(option) {
        this.paused = option;
    },

    updateMin(total_secs) {
        this.current.setMinutes(Math.floor(total_secs / 60));
    },

    updateSecs(total_secs) {
        this.current.setSeconds(total_secs - 60 * this.current.minutes);
    },

    updateTimer(total_secs) {
        this.updateMin(total_secs);
        this.updateSecs(total_secs);
    },

    startTimer(secs) {
        let total_secs = secs;
        this.setPaused(false);

        let myInterval = setInterval(() => {
            if (this.pauseListener()) {
                clearInterval(myInterval);
            } else {
                if (total_secs <= 0) {
                    this.setPaused(true);
                    clearInterval(myInterval);
                    setTimeout(() => {
                        alert("time is over!! time for a break.")
                    }, 1000);
                }
                this.updateTimer(total_secs);
                total_secs--;
            }
        }, 1000);

    },
}


function createTimer(min, secs) {
    return {
        minutes: min,
        seconds: secs,
        contagens: 0,

        setMinutes(minutes) {
            this.minutes = minutes;
        },
        setSeconds(seconds) {
            this.seconds = seconds;
        },
        addContagem() {
            this.contagens++;
        },
    }
}