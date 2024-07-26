let startTime, updatedTime, difference, tInterval;
let running = false;

const display = document.getElementById('display');
const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');

function startPause() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
        startPauseBtn.textContent = 'Pause';
        resetBtn.style.display = 'inline';
    } else {
        clearInterval(tInterval);
        running = false;
        startPauseBtn.textContent = 'Start';
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    startPauseBtn.textContent = 'Start';
    display.textContent = '00:00:00';
    resetBtn.style.display = 'none';
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.textContent = hours + ':' + minutes + ':' + seconds;
}

startPauseBtn.addEventListener('click', startPause);
resetBtn.addEventListener('click', reset);