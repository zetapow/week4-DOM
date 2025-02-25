const myDiv = document.getElementById('div-id');

myDiv.addEventListener('mouseover', function () {
   myDiv.style.background = 'pink';
});
myDiv.addEventListener('mouseout', function () {
   myDiv.style.background = 'grey';
});

const textBox = document.querySelector('#textBox');
const charCount = document.querySelector('.charCount');
const clearButton = document.querySelector('#clearText');

// Clear text button
const clearText = () => {
   textBox.value = '';
   charCount.textContent = 0;
};

// Check string length
const displayCharCount = (event) => {
   const inputString = event.target.value;
   const stringLength = inputString.length;
   charCount.textContent = stringLength;
};

textBox.addEventListener('input', displayCharCount);
clearButton.addEventListener('click', clearText);

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

   const sum = number1 + number2;
   result.textContent = `${number1} + ${number2} = ${sum}`;

   // clear numbers from input
   num1.value = '';
   num2.value = '';
}

addButton.addEventListener('click', sumNumbers);
