var start = document.getElementById("start");
var distance = 1000 * 60 * 0.1 - 1000;

start.addEventListener("click", timer);

function timer(){

    var x = setInterval(function(){
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        document.getElementById("timer").innerText = minutes + ":"+  seconds;
        distance === 0 ? stopTimer(x)  : distance -= 1000;

    }, 1000);
    
    
}

function stopTimer(x){
    clearInterval(x);
    alert("Time is over! Take a break from work.");
}

function mode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var element2 = document.getElementsByClassName("mode");
    element2[0].classList.toggle("mode-class");
 }