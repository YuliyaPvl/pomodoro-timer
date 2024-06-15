const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const pomodoroTime = document.getElementById('pomodoro-time');
const breakButton = document.getElementById('break');
const pomodoroButton = document.getElementById('pomodoro');

let timeLeft = 25 * 60; 
let timer;
let mode = "pomodoro";

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  pomodoroTime.textContent = `${padZero(minutes)}:${padZero(seconds)}`;

 
  if (timeLeft === 0) {
    stopTimer();
    resetTimer();
  }

  timeLeft--;
}


function padZero(num) {
    return num < 10 ? `0${num}` : num;
}


function startTimer() {
  timer = setInterval(updateTimer, 1000);
  startButton.textContent = 'Stop';
}


function stopTimer() {
  clearInterval(timer);
  startButton.textContent = 'Start';
  timer = null;
}


function resetTimer() {
  clearInterval(timer);
  timeLeft = mode === "pomodoro" ? 25 * 60 : 5 * 60;
  updateTimer();
}

function startPomodoro() {
  clearInterval(timer);
  timeLeft = 25 * 60;
  updateTimer();
  if (timer) {
    startButton.textContent = 'Start';
  }
}
  
function startBreak() {
  clearInterval(timer);
  timeLeft = 5 * 60;
  updateTimer();
}
  
startButton.addEventListener('click', () => {
  timer ? stopTimer() : startTimer();
});

resetButton.addEventListener('click', resetTimer);

breakButton.addEventListener('click', startBreak);

pomodoroButton.addEventListener('click', startPomodoro);

