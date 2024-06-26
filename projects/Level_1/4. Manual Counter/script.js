const increasebtn = document.getElementById("Increase");
const resetbtn = document.getElementById("Reset");
const decreasebtn = document.getElementById("Decrease");
const counterdisplay = document.getElementById('counter-display');
let count = 0;
counterdisplay.textContent = 0;

increasebtn.onclick = function() {
  count++;
  counterdisplay.textContent = count;
}

resetbtn.onclick = function() {
  count = 0;
  counterdisplay.textContent = count;
}

decreasebtn.onclick = function() {
  count--;
  counterdisplay.textContent = count;
}