

// ================ SQUARE BODY ================ 
minutes.addEventListener("change", () => {
    handleUserInput(minutes);
})

seconds.addEventListener("change", () => {
    handleUserInput(seconds);
})

// ================ SQUARE FOOTER ================
button.addEventListener("click", () => {

    switch (button.getAttribute("name")) {
        case "START":
            start();
            break;
        case "PAUSE":
            pause();
            break;
        case "RESET":
            reset();
            break;
        default:
            console.log("Botão não indentificado");
    }

})

// ================ CONTROL FUNCTIONS ================
function start() {

    isPaused.setPause(false);
    let min = Number(minutes.value);
    let sec = Number(seconds.value);

    let total_secs = min * 60 + sec;

    startTimer(total_secs);

    handleButton("PAUSE");
}

function pause() {
    isPaused.setPause(true);
    handleButton("START");
}

function reset() {

    minutes.value = 25;
    seconds.value = 00;
    handleUserInput(minutes)
    handleUserInput(seconds)
    handleButton("START");

}