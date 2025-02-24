/*
let manipulate = document.body.style;

// manipulate.style.background = 'wheat';
// manipulateBody.innerHTML = '<h1>Hello World</h1>';
function changeColour() {
   if (manipulate.backgroundColor !== 'blue') {
      manipulate.backgroundColor = 'blue';
   } else {
      manipulate.backgroundColor = 'grey';
   }
}
let currentIndex = 0;
function multiColour() {
   const colourArray = [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'indigo',
      'violet',
   ];
   manipulate.backgroundColor = colourArray[currentIndex];
   if (currentIndex === colourArray.length - 1) {
      currentIndex = 0;
   } else {
      currentIndex++;
   }
}
*/

let manipulate = document.body.style;

function randomColour() {
   function rand255() {
      return Math.floor(Math.random() * 255) + 1;
   }
   const red = rand255();
   const green = rand255();
   const blue = rand255();
   manipulate.backgroundColor = `rgb(${red},${green},${blue})`;
}

// Improvement attempt
// Return generated colour
// Reusable random nubmer

function makeRandomNumber(max) {
   return Math.floor(Math.random() * max + 1);
}

function makeRGBColour() {
   const red = makeRandomNumber(255);
   const green = makeRandomNumber(255);
   const blue = makeRandomNumber(255);
   return `rgb(${red},${green},${blue})`;
}

function randColour() {
   manipulate.backgroundColor = makeRGBColour();
}
///////////////////////////////////////////////////
let currentCount = 0;
const counter = document.querySelector('.counter');

function addCount() {
   currentCount++;
   counter.textContent = currentCount;
}

function reset() {
   currentCount = 0;
   counter.textContent = currentCount;
}

///////////////////////////////////////////////////
const header1 = document.querySelector('h1');
// const header1 = document.querySelector('#header');
// const header1 = document.querySelector('.header');
// const header1 = document.getElementById('header');
header1.style.fontSize = '60px';
header1.textContent = 'textContent changes the text';

const paragraphs = document.querySelectorAll('.triplets');
console.log(paragraphs);

/*
for (let i = 0; i < paragraphs.length; i++) {
   paragraphs[i].style.color = 'purple';
}
*/

for (const paragraph of paragraphs) {
   paragraph.style.color = 'blue';
   paragraph.style.fontSize = '30px';
}
/*
const countObject = {
   currentCount: 0,
   countElement: document.querySelector('.counter'),
   init() {
      this.countElement.textContent = this.currentCount;
   },

   addCount() {
      this.currentCount++;
      this.countElement.textContent = this.currentCount;
   },
   reset() {
      this.currentCount = 0;
      this.countElement.textContent = this.currentCount;
   },
};
countObject.init();
*/
