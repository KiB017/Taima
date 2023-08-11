var timer;
var e = document.querySelector('timer');
var pauseButton = document.querySelector('pause-button');
var startButton = document.querySelector('start-button');

pauseButton.addEventListener('click', pauseTimer);
startButton.addEventListener('click', startTimer);

function startTimer()
{
    var sec = 0;
    timer = setInterval(() => {
        e.innerHTML = '00:' + sec;
        sec++;
    }, 1000)
}

function pauseTimer()
{
    clearInterval(timer);
}