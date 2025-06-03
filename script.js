let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let lapCount = 0;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

function timeToString(time) {
  let date = new Date(time);
  let hours = String(date.getUTCHours()).padStart(2, "0");
  let minutes = String(date.getUTCMinutes()).padStart(2, "0");
  let seconds = String(date.getUTCSeconds()).padStart(2, "0");
  let milliseconds = String(date.getUTCMilliseconds()).padStart(3, "0");
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
  }, 10);
}

function pauseStopwatch() {
  clearInterval(timerInterval);
}

function resetStopwatch() {
  clearInterval(timerInterval);
  display.textContent = "00:00:00.000";
  elapsedTime = 0;
  laps.innerHTML = "";
  lapCount = 0;
}

function recordLap() {
  if (elapsedTime === 0) return;
  lapCount++;
  const lapTime = timeToString(elapsedTime);
  const li = document.createElement("li");
  li.textContent = `Lap ${lapCount}: ${lapTime}`;
  laps.appendChild(li);
}
