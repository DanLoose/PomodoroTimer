const start = document.querySelector("button[name=START]");
const pause = document.querySelector("button[name=PAUSE]");

const minutes = document.querySelector("input[id=minutes]");
const seconds = document.querySelector("input[id=seconds]");

function handleUserInput(e) {

    if (e.value < 10) {
        e.value = "0" + e.value;
    }

    if (e.value > 59) {
        e.value = 59;
    } else if (e.value <= 0) {
        e.value = "00";
    }
}

function startTimer(secs) {

    let total_secs = secs;

    let updated_min;
    let updated_sec;

    let myInterval = setInterval(() => {

        total_secs--;

        updated_min = Math.floor(total_secs / 60);
        updated_sec = total_secs - 60 * updated_min;

        minutes.value = updated_min;
        seconds.value = updated_sec;

        handleUserInput(minutes);
        handleUserInput(seconds);

        if (updated_min == 0 && updated_sec == 0) {
            clearInterval(myInterval);
        }

    }, 1000);
}
