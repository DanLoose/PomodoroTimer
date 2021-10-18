const title = document.querySelector("title");

const pomodoro = document.querySelector("#pomodoro");
const shortBreak = document.querySelector("#shortBreak");
const longBreak = document.querySelector("#longBreak");
const selected = document.querySelector(".selected");

const minutes = document.querySelector("input[id=minutes]");
const seconds = document.querySelector("input[id=seconds]");

const button = document.querySelector("button[id=button]");

window.addEventListener("DOMContentLoaded", () => {

    let option = selected.getAttribute("id");
    timer.timer(option);
    updateTimer();

});

button.addEventListener("click", () => {

    let option = selected.getAttribute("id");

    let min = +(minutes.value);
    let sec = +(seconds.value);
    let total_secs = min * 60 + sec;

    switch (button.getAttribute("name")) {
        case "START":
            timer.startTimer(total_secs);
            break;
        case "PAUSE":
            pause();
            break;
        case "RESET":
            reset();
            break;
        default:
            console.log("Erro desconhecido");
    }

})


function updateTimer() {
    let min = timer.current.minutes;
    let secs = timer.current.seconds;

    minutes.value = min;
    seconds.value = secs;
    handleInputs();
}

function handleStringNumbers(e) {

    let result = e;

    if (result.length > 2) {
        result.substr(0, 2);
    }

    if (result.length == 1) {
        result = "0" + result;
    }

    if (result == "" || result == 0) {
        result = "00";
    }

    return result;

}

function handleValueNumbers(u) {

    let result = u;

    if (result > 59) {
        result = 59;
    }

    if (result < 0) {
        result = 0;
    }

    return result;
}

function handleInputs() {

    minutes.value = handleValueNumbers(minutes.value);
    seconds.value = handleValueNumbers(seconds.value);

    minutes.value = handleStringNumbers(minutes.value);
    seconds.value = handleStringNumbers(seconds.value);

}

function handleButton(option) {
    // console.log(button);
    button.innerHTML = option;
    button.setAttribute("name", option)
}

