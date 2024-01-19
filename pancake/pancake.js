
const timer = 2;
let amountTime = timer * 60;

function calculateTime() {
    const timer = document.querySelector('#timer');
    const btnTimer = document.querySelector('#btnTimer');
    btnTimer.addEventListener('click', function() {
        btnTimer.style.display = 'none';
        timer.style.display = 'block';
        
        })
    

    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;
    
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes <= 0 && seconds <= 0) {
        timer.style.display = 'none';
    }

    timer.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    if (amountTime < 0) {
        stopTimer();
        amountTime = 0;
    }

    }

    function stopTimer() {
        clearInterval(timerId);
        }

let timerId =  setInterval(calculateTime, 1000);

    

