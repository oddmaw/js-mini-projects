
function clearInput() {
  document.getElementById('display').value = '';
}

function DisplayIT(char) {
  console.log(`Button pressed: ${char}`);
  document.getElementById('display').value += char;
}

function calcResult() {
  let display = document.getElementById('display');

  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
    console.log(e);
    alert('Error, Please try again!');
  }
}