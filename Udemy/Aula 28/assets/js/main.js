let timerInterval;
let minutes = 0;
let seconds = 0;
let hours = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  const timer = document.querySelector("#timer");
  timer.textContent = `${Zero(hours)}:${Zero(minutes)}:${Zero(
    seconds
  )}`;
}

function resetTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  const timer = document.querySelector("#timer");
  timer.textContent = "00:00:00";
}

function pauseTimer() {
  clearInterval(timerInterval);
}


function Zero(number) {
  return number.toString().padStart(2, "0");
}
