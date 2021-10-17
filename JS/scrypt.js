

// ================ SQUARE BODY ================ 
minutes.addEventListener("change", () => {
    handleUserInput(minutes);
})

seconds.addEventListener("change", () => {
    handleUserInput(seconds);
})

// ================ SQUARE FOOTER ================
start.addEventListener("click", () => {

    let min = Number(minutes.value);
    let sec = Number(seconds.value);

    let total_secs = min * 60 + sec;

    startTimer(total_secs);

})
