var readout = document.querySelector('#readout')
var digits = document.querySelectorAll('.digit')

for (var i = 0; i < digits.length; i++) {
  digits[i].addEventListener('click', displayValue)
}

// Displays the button pressed on the readout
function displayValue() {
  if (readout.innerText == '0') {
    readout.innerText = this.value
  } else if (this.value == '=') {
      displayResult()
  } else if (this.value == 'clear') {
      clearConsole()
  } else {
      readout.innerText += this.value
  }
}

// Gets the value in console and evaluates
function displayResult() {
    readout.innerText = eval(readout.innerText)
}

// Clears the console
function clearConsole() {
  readout.innerText = "0"
}
