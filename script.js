const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const pomodoroTime = document.getElementById('pomodoro-time');
const breakButton = document.getElementById('break');

let timeLeft = 25 * 60; 
let timer;


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
}


function resetTimer() {
  timeLeft = 25 * 60;
  updateTimer();
}

function startPomodoro() {
    timeLeft = 25 * 60;
    updateTimer();
  }
  
  function startBreak() {
    timeLeft = 5 * 60; 
    updateTimer();
  }
  
  startButton.addEventListener('click', () => {
    timer ? stopTimer() : startTimer();
  });
  
  resetButton.addEventListener('click', resetTimer);
  
  breakButton.addEventListener('click', startBreak);
