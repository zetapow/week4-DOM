// --------------- ALL PETS DUMMY DATABASE -------------- //

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

// -------------- GENERATE REPORT FUNCTION -------------- //

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

// ------------- RENDERING MULTIPLE REPORTS ------------- //

for (pet of allPets) {
   generateReport(pet);
}
