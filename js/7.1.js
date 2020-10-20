let i;
let x;

function rand10(i) {
	return Math.floor(Math.random()*100)+1;
}

console.log(rand10(x));

const readlineSync = require('readline-sync');
let guess = new Number(readlineSync.question('Guess the number '));

if (x < guess) {
	console.log(`Too low`);
}else if (x > guess) {
	console.log(`too high`);
}else if (x == guess) {console.log(`Well guessed!`);
}else {console.log(`WTF`);}


// Make a program that generates an integer between 1 and 100 (don't display it to the user).

// Then the program should display "Guess the number" and ask the user to guess. 
// If the user enters a number which is too low it should display "Too low" and re-ask the question. 
// If the user enters a number which is too high it should display "Too high" and re-ask the question. 
// If the user guess correctly it should display "Well guessed!" and exit.