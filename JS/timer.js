const timer = {

    pomodoro: {},
    short: {},
    long: {},

    current: {},

    timer() {
        this.pomodoro = createTimer(25, 0);
        this.short = createTimer(5, 0);
        this.long = createTimer(10, 0);

        this.current = this.pomodoro.returnTimer();
    },

    setCurrent(option) {
        switch (option) {
            case "pomodoro":
                this.current = this.pomodoro.returnTimer();
                break;
            case "shortBreak":
                this.current = this.short.returnTimer();
                break;
            case "longBreak":
                this.current = this.long.returnTimer();
                break;
        }
    },
}


function createTimer(min, sec) {
    return {
        minutes: min,
        seconds: sec,
        paused: true,

        returnTimer() {
            return this;
        },
        pauseListener() {
            return this.paused;
        },

        setTimer(m, s) {
            this.minutes = m;
            this.seconds = s;
        },

        setPaused(op) {
            this.paused = op;
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

        pauseTimer() {
            this.setPaused(true);
        },

        updateMin(total_secs) {
            this.minutes = Math.floor(total_secs / 60);
        },

        updateSecs(total_secs) {
            this.seconds = total_secs - 60 * this.minutes;
        },

        updateTimer(total_secs) {
            this.updateMin(total_secs);
            this.updateSecs(total_secs);
        },
    }
}