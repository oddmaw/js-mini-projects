const clockString = document.getElementById('clock');

function clockUpdated() {
  
  const now = new Date();
  let hours = now.getHours();
  const PMAM = hours>=12 ? 'PM' : 'AM' ;
  hours %= 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const clockDisplay = `${hours}:${minutes}:${seconds} ${PMAM}`;
  clockString.textContent = clockDisplay;
}

clockUpdated();
setInterval(clockUpdated ,1000);