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

/* Array.splice() modify by add, remove, replace elements at positions
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
   console.log(iceCream + ' ice-cream');
});

const iceCreamMap = iceCreams;
const orderedIceCream = iceCreamMap.map((icecream, index) => {
   return `Flavour ${index}: ${icecream}`;
});
console.log(orderedIceCream);

const numArray = [1, 2, 3, 4, 5];
const doubleArray = numArray.map((num) => {
   return num * 2;
});

console.log(doubleArray);

// Array.filter() return new array with all elements in OG that passed a test. Creates new array. takes index and og array as args
const icecreamCosts = [2.5, 5, 7.5];
const cheapIcecream = icecreamCosts.filter(function (cost, index, array) {
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

console.log(thingsArray.includes('mouse')); // return true
console.log(thingsArray.includes('money')); // return false

// indexOf() - return a number = position of first element that passed a test. Search from start unless starting index specified in second arg
// if not match return  -1

const icecreamIndexOf = iceCreams;
let strawberryIndex = icecreamIndexOf.indexOf('strawberry');
console.log(strawberryIndex);

/* take string and convert first letter of every word to uppercase, every other letter to lowercase */

const testString = 'gOoD mOrNiNg tO yOu';

function doThings(array) {}

// const orderedIceCream = iceCreamMap.map((icecream, index) => {
//    return `Flavour ${index}: ${icecream}`;
// });

// split words into array
const stringArray = testString.split(' ');
console.log(stringArray);

// convert to upper and lowercase
const convertString = doThings(testString);

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
