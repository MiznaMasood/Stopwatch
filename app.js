var hourHeading = document.getElementsByClassName('hour')[0]

var minHeading = document.getElementsByClassName('min')[0]

var secHeading = document.getElementsByClassName('sec')[0]

var msecHeading = document.getElementsByClassName('msec')[0]

var interval;

var hour = 0
var min = 0
var sec = 0
var msec = 0

function timer(){
    msec++;
    msecHeading.innerHTML = msec
    if(msec >= 100 ){
        sec ++;
        secHeading.innerHTML = sec
        msec = 0
    }
    else if(sec >= 60){
        min++;
        minHeading.innerHTML = min;
        sec = 0;

    }

    else if(min >= 60){
        hour++;
        hourHeading.innerHTML = hour;
        min = 0;

    }
}
function start() {
    if (!interval) {
        interval = setInterval(timer, 10);
    }
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hourHeading.innerHTML = hour;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop()
}
