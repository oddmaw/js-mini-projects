
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

  const lowercaseChars = 'wxcvbnqsdfghjklmazertyuiop';  
  const uppercaseChars = 'WXCVBNQSDFGHJKLMAZERTYUIOP';
  const numbersChars = '0123456789';
  const symbolsChars = '&|[`\^@]ç_è_çà)-("é';

  let allowedChars = '';
  let password = '';

  allowedChars += includeLowercase ? lowercaseChars : '';
  allowedChars += includeUppercase ? uppercaseChars : '';
  allowedChars += includeNumbers ? numbersChars : '';
  allowedChars += includeSymbols ? symbolsChars : '';

  if(length <= 0 ) {
    return `[Password length must be at least 1!]`;
  }
  if (allowedChars.length === 0) {
    return `[Min character is 1]`;
  }

  for(let i=0 ; i<length ; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

const Lowercase = document.getElementById('Lowercase');
const Uppercase = document.getElementById('Uppercase');
const Numbers = document.getElementById('Numbers');
const Symbols = document.getElementById('Symbols');
const Submitbtn = document.getElementById('Submit');
const passwordDisplay = document.getElementById('passwordDisplay');
const Length = document.getElementById('Length');
const h3 = document.getElementById('h3');

Submitbtn.onclick = function() {
  passwordLength = Number(Length.value);
  includeLowercase = Lowercase.checked;
  includeUppercase = Uppercase.checked;
  includeNumbers = Numbers.checked;
  includeSymbols = Symbols.checked;

  const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
  
  h3.textContent = 'Password Generated: ';
  passwordDisplay.textContent = password;
  console.log(`Generated Password: ${password}`);
}
