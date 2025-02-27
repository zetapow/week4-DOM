const display = document.querySelector('#display');

console.log('________Arrow functions___________');
// named params with default values if no value or undefined passed
const divideNum = (num1, num2 = 1) => num1 / num2;

const calc = divideNum(10, 2);
console.log(calc);
console.log(divideNum(3));

display.textContent = calc;

const isEven = (num) => num % 2 === 0;
console.log(isEven(10)); // expect true
console.log(isEven(5)); // expect false

console.log('________Exercise 2___________');

const word1 = 'Goodbye';
const word2 = 'Farewell';

const combineString = (word1, word2) => `${word1} ${word2}`;
console.log(combineString(word1, word2));

// Spread operator
const array1 = [1, 2, 3, 4, 5];
const array2 = [0, ...array1, 6, 7, 8, 9];
console.log(array1);
console.log(array2);

const array3 = [1, 2, 3];
const array4 = ['a', 'b', 'c'];

const spreadArray = [...array3, ...array4];
console.log(spreadArray);

const likeJavaScript = true;
// if(likeJavaScript ===true)
if (likeJavaScript) {
   console.log(!likeJavaScript);
}

let userName;
let userInput = '';
const defaultUserName = 'guest';

if (userInput) {
   userName = userInput;
} else {
   userName = defaultUserName;
   console.log('please enter your name');
}

// Shorthand OR, check if value exists and set default value
userName = userInput || defaultUserName;

console.log(userName);

// Short hand string to Numbers (+)
const num1 = Number('100');
const num2 = Number('100.01');
const num3 = +'100.01';
const num4 = +'100.01';

//  REGEX
// RegEx object or between
/* 
regular expressions used with RegExp methods: test() and exec()
string methods: match(), matchAll(), replace(), replaceAll(), search(), split()

[a-z] matches a character from lowercase a - z
[A-Z] matches a character from uppercase A - Z
[0-9] character from 0 to 9
[a-zA-Z0-9] matches any letter and digit
\s whitespace character
\S non whitespace character
\w word
\W non-word
\d one digit
\D one non-digit

 */

let letterCheck = new RegExp('[cat]');
let letterCheckShort = /[cat]/;

console.log(letterCheck.test('dog'));
console.log(letterCheckShort.test('cattery'));

// const mobileCheck = /02[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
// const mobileCheck = /02[0-9]{6,9}/;
const mobileCheck = /02\d{6,9}/;
// const licenseCheck = /[a-zA-Z][a-zA-Z][0-9][0-9][0-9][0-9][0-9][0-9]/;
const licenseCheck = /[a-zA-Z]{2}\d{6}/;

const emailCheck = /\w+@\w+.com/;


/* password of at least 8 characters
   start with uppercase letter
   ^[A-Z] -checks uppercase first character

   .= any character *= 0 or more occurences to left of symbol

   end with number
   \d$ checks number at last character
*/
const passwordCheck = /^[A-Z].{6,}\d$/;
console.log(passwordCheck.test('extfals7'));
console.log(passwordCheck.test('Expectfa'));
console.log(passwordCheck.test('Shouldbetrue7'));

/*^[A-Z] -checks uppercase first character */

// const billion = 1_000_000_000;
// console.log(billion);
