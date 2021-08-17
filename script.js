
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minisEl = document.getElementById('min');    
const secondsEl = document.getElementById('sec');

const  newYear ='1 Jan 2022';
function countdown(){
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = new Date(newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds/ 3600 / 24);

    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds/ 60) %60;
    const seconds = Math.floor(totalSeconds)% 60;
    console.log(days, hours , minutes, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minisEl.innerHTML = minutes
    secondsEl.innerHTML = seconds;
}
function formatTime(time){
    return time < 10 ? '0${time}' : time;
}

countdown();

setInterval(countdown,1000);