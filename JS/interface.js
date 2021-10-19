const title = document.querySelector("title");
const pomodoro = document.querySelector("#pomodoro");
const shortBreak = document.querySelector("#shortBreak");
const longBreak = document.querySelector("#longBreak");
const minutes = document.querySelector("input[id=minutes]");
const seconds = document.querySelector("input[id=seconds]");
const button = document.querySelector("button[id=button]");

let selected = document.querySelector(".selected");


//  ============== WINDOW IMPORTANT SETTINGS ==============
window.addEventListener("DOMContentLoaded", () => {

    timer.timer();
    updateDisplay();

});

setInterval(() => {
    // se o timer estiver rodando
    if (!(timer.current.pauseListener())) {
        minutes.disabled = true;
        seconds.disabled = true;
        updateDisplay();
    } else {
        minutes.disabled = false;
        seconds.disabled = false;
    }
}, 30);


// ============== SQUARE HEADER BUTTONS ==============
pomodoro.addEventListener("click", () => {
    selected.classList.remove("selected");
    pomodoro.classList.add("selected");
    selected = pomodoro;

    timer.setCurrent("pomodoro");
    updateDisplay();
})

shortBreak.addEventListener("click", () => {
    selected.classList.remove("selected");
    shortBreak.classList.add("selected");
    selected = shortBreak;

    timer.setCurrent("shortBreak");
    updateDisplay();
})

longBreak.addEventListener("click", () => {
    selected.classList.remove("selected");
    longBreak.classList.add("selected");
    selected = longBreak;

    timer.setCurrent("longBreak");
    updateDisplay();
})


// ============== INPUTS ==============
minutes.addEventListener("change", () => {
    handleInputs();
    timer.current.setTimer(minutes.value, seconds.value);
    console.log(timer.current);
})

seconds.addEventListener("change", () => {
    handleInputs();
    timer.current.setTimer(minutes.value, seconds.value);
    console.log(timer.current);
})

// ============== BUTTON ==============
button.addEventListener("click", () => {

    let min = +(minutes.value);
    let sec = +(seconds.value);
    let total_secs = min * 60 + sec;

    switch (button.getAttribute("name")) {
        case "START":
            manageTimer("START");
            timer.current.startTimer(total_secs);
            button.setAttribute("name", "PAUSE");
            button.innerText = "PAUSE";
            break;
        case "PAUSE":
            manageTimer("PAUSE");
            button.setAttribute("name", "START");
            button.innerText = "START";
            break;
        case "RESET":
            break;
        default:
            console.log("Erro desconhecido");
    }

})

// ================ DISPLAY ================
function updateDisplay() {
    let min = timer.current.minutes;
    let secs = timer.current.seconds;

    minutes.value = min;
    seconds.value = secs;
    handleInputs();
}

// ================ TIMER CONTROLER ================
function manageTimer(op) {
    if (op == "START") {
        if (selected.getAttribute("id") == "pomodoro") {
            timer.short.setTimer(5, 0);
            timer.long.setTimer(10, 0);
        } else if (selected.getAttribute("id") == "shortBreak") {
            timer.pomodoro.setTimer(25, 0);
            timer.long.setTimer(10, 0);
        } else if (selected.getAttribute("id") == "longBreak") {
            timer.pomodoro.setTimer(25, 0);
            timer.short.setTimer(5, 0);
        }
    }
    else if (op == "PAUSE") {
        if (timer.pomodoro.pauseListener() == false) {
            timer.pomodoro.setPaused(true);
        } else if (timer.short.pauseListener() == false) {
            timer.short.setPaused(true);
        } else if (timer.long.pauseListener() == false) {
            timer.long.setPaused(true);
        }
    }
}


// ================ HANDLES ================
function handleStringNumbers(e) {

    let result = e;

    if (result.length > 2) {
        result = "00";
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
