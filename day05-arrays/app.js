const iceCreams = ['vanilla', 'chocolate', 'strawberry'];
// Adds to end of array
const pushMethod = iceCreams.push('neopolitan');
// remove last item
const popMethod = iceCreams.pop();

//add item to beginning. return new length
const unshiftMethod = iceCreams.unshift('mint');

// remove first item
const shift = iceCreams.shift();

// String.split()
/* Take pattern and divide string into ordered list of sub strings by searching for pattern. substrings into array and returns array
limi number of elements to return */

const bananaSplit = 'banana vanilla whipped-cream';
const resultBananaSplit = bananaSplit.toUpperCase().split(' ', 3);
console.log(resultBananaSplit);

const bananaJoin = resultBananaSplit.join(' ');
console.log(bananaJoin.toLowerCase());

/* Array.slice() return copy of a portion of array into new array selected from start to end (end not included)
Og array not modified */

const fruitSlice = ['apple', 'orange', 'melon'];
const resultFruitSlice = fruitSlice.slice(1);
console.log(resultFruitSlice);

const sliceEx = ['html', 'css', 'JS', 'react'];
const resultSlice = sliceEx.slice(2, 3);
console.log(resultSlice);

const spliceEx = ['html', 'css', 'react'];
spliceEx.splice(2, 0, 'JS');
console.log(spliceEx);

/* Array.splice() modify by add, remove, replace elements at positioAns
allows changes to array in place instead of creating new array
returns array of deleted elements */
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

const numSplice = [0, 1, 2, 3, 4, 5];
// replace one element at index 2
const resultNumSplice = numSplice.splice(2, 1, 'elephant');
console.log(resultNumSplice);
console.log(numSplice);

// forEach()
// Apply function to all elements in array - need to pass function - args: element, index, originalArray

const iceCreamsForEach = iceCreams;
iceCreamsForEach.forEach(function (iceCream, index) {
   console.log(`${iceCream} ice-cream`);
});

const iceCreamMap = iceCreams;
const orderedIceCream = iceCreamMap.map((icecream, index) => {
   return `Flavour ${index + 1}: ${icecream}`;
});
console.log(orderedIceCream);

const numArray = [1, 2, 3, 4, 5];
const doubleArray = numArray.map((num) => num * 2);

console.log(doubleArray);

// Array.filter() return new array with all elements in OG that passed a test. Creates new array. takes index and og array as args
const icecreamCosts = [2.5, 5, 7.5];
const cheapIcecream = icecreamCosts.filter((cost) => {
   return cost < 3;
});
console.log(cheapIcecream);

const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArray = array4.filter((num) => {
   return !(num % 2);
});
console.log(evenArray);

// Array includes() - return Boolean stating whether at least one element in array passed test.

const thingsArray = ['mouse', 'keyboard', 'monitor', 'headphones'];

console.log('includes exercise');
// const userGuess = prompt("guess what's in the array").toLowerCase();
// console.log(userGuess);
// console.log(thingsArray.includes(userGuess));

console.log(thingsArray.includes('mouse')); // return true
console.log(thingsArray.includes('money')); // return false

// indexOf() - return a number = position of first element that passed a test. Search from start unless starting index specified in second arg
// if not match return  -1

const icecreamIndexOf = iceCreams;
let strawberryIndex = icecreamIndexOf.indexOf('strawberry');
console.log(strawberryIndex);

/* take string and convert first letter of every word to uppercase, every other letter to lowercase */

function doThings(array) {}
// const orderedIceCream = iceCreamMap.map((icecream, index) => {
//    return `Flavour ${index}: ${icecream}`;
// });
const testString = 'gOoD mOrNiNg tO yOu';

const convertString = (string) => {
   // split words into array
   // Split words seperated by spaces
   const stringArray = testString.split(' ');
   console.log(stringArray);
   // process each word - first letter uppercase, following letters lowercase
   const processWords = stringArray.map(
      (words) => words[0].toUpperCase() + words.slice(1).toLowerCase()
   );
   console.log(processWords);
   // Join words back to string
   const joinWords = processWords.join(' ');
   console.log(joinWords);
   /* ---------------- Combine into function -------------------------*/
   //  chain all methods
   return string
      .toLowerCase()
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');
};
// const eachWord = string
//    .split(' ')
//    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
// return eachWord.join(' ');

// return string
//    .split(' ')
//    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
//    .join(' ');

console.log('------ From convertString function--------------');
console.log(convertString(testString));

// function toTitleCase(str) {
//    return str
//       .trim() // Remove leading/trailing whitespace
//       .split(/\s+/) // Split into words using regex to handle multiple spaces
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Process each word
//       .join(' '); // Join words back into a single string
// }

// // Example usage:
// console.log(toTitleCase('hello world')); // Output: "Hello World"
// console.log(toTitleCase('  tHiS iS a tEsT  ')); // Output: "This Is A Test"
