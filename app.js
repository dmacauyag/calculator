var readout = document.querySelector('#readout')
var inputs = document.querySelectorAll('.input')

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', displayValue)
}

// Displays the button pressed on the readout
function displayValue() {
  if (this.className == 'input operator' && readout.innerText == '0') {
    console.log('not a valid initial input');
  } else if (readout.innerText == '0') {
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
