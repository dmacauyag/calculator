var readout = document.querySelector('#readout')
var btnZero = document.querySelector('#zero')
var btnOne = document.querySelector('#one')
var btnTwo = document.querySelector('#two')
var btnThree = document.querySelector('#three')
var btnFour = document.querySelector('#four')
var btnFive = document.querySelector('#five')
var btnSix = document.querySelector('#six')
var btnSeven = document.querySelector('#seven')
var btnEight = document.querySelector('#eight')
var btnNine = document.querySelector('#nine')
var btnAdd = document.querySelector('#addition')
var btnSub = document.querySelector('#subtraction')
var btnMul = document.querySelector('#multiplication')
var btnDiv = document.querySelector('#division')
var btnResult = document.querySelector('#result')

btnZero.addEventListener('click', displayValue)
btnOne.addEventListener('click', displayValue)
btnTwo.addEventListener('click', displayValue)
btnThree.addEventListener('click', displayValue)
btnFour.addEventListener('click', displayValue)
btnFive.addEventListener('click', displayValue)
btnSix.addEventListener('click', displayValue)
btnSeven.addEventListener('click', displayValue)
btnEight.addEventListener('click', displayValue)
btnNine.addEventListener('click', displayValue)
btnAdd.addEventListener('click', displayValue)
btnSub.addEventListener('click', displayValue)
btnMul.addEventListener('click', displayValue)
btnDiv.addEventListener('click', displayValue)
btnResult.addEventListener('click', displayResult)

// Displays the button pressed on the readout
function displayValue() {
  if (readout.innerText == '0') {
    readout.innerText = this.value
  } else {
    readout.innerText += this.value
  }
}

// Gets the value in console and evaluates
function displayResult() {
    readout.innerText = eval(readout.innerText)
}
