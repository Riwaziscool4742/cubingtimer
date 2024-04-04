let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  document.getElementById('hours').textContent = padZero(hours);
  document.getElementById('minutes').textContent = padZero(minutes);
  document.getElementById('seconds').textContent = padZero(seconds);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById('hours').textContent = '00';
  document.getElementById('minutes').textContent = '00';
  document.getElementById('seconds').textContent = '00';
}

function padZero(value) {
  return value < 10 ? '0' + value : value;
}

