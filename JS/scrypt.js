function startTimer(secs) {

    let total_secs = secs;

    let updated_min;
    let updated_sec;

    var myInterval = setInterval(() => {

        if (timer.pauseListener()) {
            clearInterval(myInterval);
        } else {
            total_secs--;


            updated_min = Math.floor(total_secs / 60);
            updated_sec = total_secs - 60 * updated_min;

            minutes.value = updated_min;
            seconds.value = updated_sec;

            //IMPLEMENTAÇÕES PENDENTES
            title.innerHTML = updated_min + ":" + updated_sec;

            handleUserInput(minutes);
            handleUserInput(seconds);

            if (updated_min == 0 && updated_sec == 0) {
                handleButton("RESET");
                clearInterval(myInterval);
                setTimeout(() => {
                    alert("time is over!! time for a break.")
                }, 1000);
            }
        }



    }, 1000);
}

function pause() {
    handleButton("START");
}

function reset() {

    minutes.value = 25;
    seconds.value = 00;
    handleUserInput(minutes)
    handleUserInput(seconds)
    handleButton("START");

}