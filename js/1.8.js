const readlineSync = require("readline-sync");

let name = readlineSync.question('Donne moi ton prénom stp');
let adjectif = readlineSync.question('Comment qualifies-tu les choux de Bruxelles?');
let odeur = readlineSync.question('Tu te situes où en ce moment?');

console.log(name + ' ' + 'est' + ' ' + adjectif + ' ' + 'parce que que je suis' + ' ' + odeur);


// Create a "Story Teller".

//Ask questions to the user about different things. Store the results he gives to you. Display them in a way that it creates a fun story!

//Bonus: when you ask questions to the user he should be able to see how many questions remain to be asked.