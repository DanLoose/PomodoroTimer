start.addEventListener("click", () => {

})

minutes.addEventListener("click", () => {

})

function startTimer() {

}



minutes.addEventListener("change", () => {

    if (minutes.value < 10) {
        minutes.value = "0" + minutes.value;
    }

    if (minutes.value > 59) {
        minutes.value = 59;
    } else if (minutes.value <= 0) {
        minutes.value = "00";
    }
})

seconds.addEventListener("change", () => {

    if (seconds.value < 10) {
        seconds.value = "0" + seconds.value;
    }

    if (seconds.value > 59) {
        seconds.value = 59;
    } else if (seconds.value <= 0) {
        seconds.value = "00";
    }
})