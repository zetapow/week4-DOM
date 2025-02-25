const myDiv = document.getElementById('my-div');
const wombatTitle = document.querySelector('#wombat-title');

function makeRandomNumber(max) {
   return Math.floor(Math.random() * max + 1);
}

function makeRGBColour() {
   const red = makeRandomNumber(255);
   const green = makeRandomNumber(255);
   const blue = makeRandomNumber(255);
   return `rgb(${red},${green},${blue})`;
}
function changeToColour(event) {
   event.target.style.backgroundColor = makeRGBColour();
   event.target.style.color = makeRGBColour();
}

myDiv.addEventListener('mouseover', changeToColour);
myDiv.addEventListener('mouseleave', changeToColour);
wombatTitle.addEventListener('click', changeToColour);

// declare variables
const textBox = document.querySelector('#textBox');
const charCount = document.querySelector('.charCount');
const clearButton = document.querySelector('#clearText');

// Clear text button
const clearText = () => {
   // console.log(textBox.value);
   textBox.value = '';
   // console.log(textBox.value);
   charCount.textContent = 0;
};

// Check string length
const displayCharCount = (evt) => {
   const inputString = evt.target.value;
   charCount.textContent = inputString.length;
};

textBox.addEventListener('input', displayCharCount);
clearButton.addEventListener('click', clearText);

// const stringLength = inputString.length;

// Arrow function
// const logValue = (event) => {
//    return event.target.value;
// };

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const addButton = document.querySelector('#addButton');
const result = document.querySelector('#result');

function sumNumbers() {
   const number1 = parseFloat(num1.value);
   const number2 = parseFloat(num2.value);

   if (isNaN(number1) || isNaN(number2)) {
      alert('Please enter a valid number');
      num1.value = '';
      num2.value = '';
   } else {
      const sum = number1 + number2;
      result.innerHTML = `${number1} + ${number2} = ${sum}`;
      // clear numbers after sum
      num1.value = '';
      num2.value = '';
   }
}

addButton.addEventListener('click', sumNumbers);

