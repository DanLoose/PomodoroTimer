const button = document.querySelector("button[id=button]");

const minutes = document.querySelector("input[id=minutes]");
const seconds = document.querySelector("input[id=seconds]");

const title = document.querySelector("title");

const isPaused = {
    flag: false,
    pauseListener() {
        return this.flag;
    },
    setPause(f) {
        this.flag = f;
    }
}

function handleUserInput(e) {

    if (e.value < 10) {
        e.value = "0" + e.value;
    }

    if (e.value > 59) {
        e.value = 59;
    } else if (e.value <= 0) {
        e.value = "00";
    }

    if (e.value > 0 && button.getAttribute("name") == "RESET") {
        handleButton("START");
    }

}

function startTimer(secs) {

    let total_secs = secs;

    let updated_min;
    let updated_sec;

    var myInterval = setInterval(() => {

        if (isPaused.pauseListener()) {
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

function handleButton(option) {
    // console.log(button);
    button.innerHTML = option;
    button.setAttribute("name", option)
}

