// function giveFood(food1, food2) {
//    return `Have some ${food1} and ${food2}`;
// }

// console.log(giveFood('juice', 'oranges'));

const pet = {
   name: 'Angus',
   species: 'dog',
   breed: 'German Shepherd',
   age: 5,
   weight: 15,
   diet: 'Freeze-Dried',
   exercise: ['walking', 'running'],
};

const allPets = [
   {
      petName: 'Bobby',
      species: 'dog',
      breed: 'labrador',
      age: 3,
      weight: 20,
      diet: 'kibble',
      exercise: ['walks', 'fetch', 'swimming'],
   },
   {
      petName: 'Tweety',
      species: 'bird',
      breed: 'canary',
      age: 1,
      weight: 0.02,
      diet: 'seeds',
      exercise: ['flying in the room'],
   },
   {
      petName: 'Fluffy',
      species: 'cat',
      breed: 'persian',
      age: 5,
      weight: 4,
      diet: 'wet food',
      exercise: ['playing with toys'],
   },
   {
      petName: 'Goldie',
      species: 'fish',
      breed: 'goldfish',
      age: 2,
      weight: 0.1,
      diet: 'fish food',
      exercise: ['swimming in the tank'],
   },
   {
      petName: 'Speedy',
      species: 'turtle',
      breed: 'red-eared slider',
      age: 4,
      weight: 1,
      diet: 'vegetables',
      exercise: ['swimming in the tank'],
   },
];

function horizontalLine() {
   return '_____________________________________________';
}

function petName(pet) {
   return `Report for ${pet['petName']}`;
}

function petDetails(pet) {
   return `${pet['petName']} is a ${pet['breed']} ${pet['species']}.
   Age: ${pet['age']} years old, weighing ${pet['weight']} kg.
   Diet: ${pet['diet']}`;
}

function petActivity(pet) {
   return `${pet['petName']} enjoys: ${pet['exercise'].join(', ')}`;
}

function theDate() {
   const theDate = new Date();
   /*
   const date = new Date();
   const day = date.getDate();
   // 0 index- January Starts from 0
   const month = date.getMonth() + 1;
   const year = date.getFullYear();
   return `Generated: ${day}-${month}-${year}`; */
   return theDate.toLocaleString('en-NZ');
}

function makeReport(pet) {
   const dateNow = theDate();
   const line = horizontalLine();
   const nameSection = petName(pet);
   const detailsSection = petDetails(pet);
   const activitySection = petActivity(pet);

   return `
   ${line}
   ${nameSection} 
   ${line}
   ${detailsSection}
   ${line} 
   ${activitySection}
   ${line}
   ${dateNow}
   `;
}

for (let pet of allPets) {
   console.log(makeReport(pet));
}

/* Report */
/*
const report = `
Report for ${pet.name}.
${horizontalLine}

${pet.name} is a ${pet.breed} ${pet.species}.
Age: ${pet.age} years old, weighing ${pet.weight} kg.
Diet: ${pet.diet}

${horizontalLine}

${pet.name} enjoys: ${pet.exercise.join(', ')}

${horizontalLine}
`;
*/

const bobby = {
   petName: 'Bobby',
   species: 'dog',
   breed: 'labrador',
   age: 3,
   weight: 20,
   diet: 'kibble',
   exercise: ['walks', 'fetch', 'swimming'],
};
/*
function generateReport(pet) {
   const horizontalLine = '------------------------';

   const report = `
   ${horizontalLine}
   
   Vet Report for ${pet.petName}.
   
   ${horizontalLine}
   
   ${pet.petName} is a ${pet.species} of the breed ${pet.breed}.
   Age: ${pet.age} years old, weighting ${pet.weight} kgs.
   Diet: ${pet.diet}.
   
   ${horizontalLine}
   
   ${pet.petName} enjoys the following activities:
   ${pet.exercise}
   
   ${horizontalLine}
   `;

   console.log(report);
}

generateReport(bobby);
*/
