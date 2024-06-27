const display = document.getElementById('stopwatch');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    isRunning = true;
    update();
  }
}

function stop() {
  if (isRunning) {
    clearTimeout(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearTimeout(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = '00:00:00';
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  display.textContent = `${hours}:${minutes}:${seconds}`;
  timer = setTimeout(update, 10);
}
