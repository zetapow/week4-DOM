const myName = 'Jarnathan';
let year = '2025';

function printer() {
   let paper = 'The New York Times';
   let advert;
   if (true) {
      console.log(paper);
      // variable not accessible outside of if statement
      let advert = 'Help wanted';
   }
   console.log(advert);
   console.log(paper);
}
/* If variable defined inside block then variable can only be accessed inside */
printer();

const greet = () => {
   const myName = 'Dingo';
   console.log(`${myName} says hello`);

   function greet2() {
      console.log(`${myName} says hello again`);
   }
   greet2();
};

greet();
// greet2() not accessible outside of greet
// greet2();

const theYear = () => {
   let text = 'The year is';
   // return `${text} ${year}`;
   if (10 < 20) {
      let greeting = "G'day maaaaate";
      return greeting;
   }
};

console.log(theYear());

// ========= Block Scope Example 2======== //
console.log('======= Block Scope ========');

function house() {
   const dinner = "Mom's recipe";

   // block scope
   if (true) {
      console.log(`Maybe I will bring ${dinner} into my room`);
      let phoebesSecret1 = 'diary 📔';
      var phoebesSecret2 = 'stray cat 🐈';
   }

   console.log(phoebesSecret2);
}

house();

/*  Global scope */

const globalVariable1 = 'Sun 🌅';

const hut = () => {
   console.log(globalVariable1);
};

const mansion = () => {
   console.log(globalVariable1);
};

hut();
mansion();
