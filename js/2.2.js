const readlineSync = require("readline-sync");

let min = new Number(readlineSync.question('Enter min'));
let max = new Number(readlineSync.question('Enter max'));
let current = new Number(readlineSync.question('Enter current'));

if ((current > min) && (current < max)) {
	console.log("It's between min and max");
} else if (min > max) {
	console.log("Tu comprends rien wesh.");
} else {
	console.log("Tu comprends rien wesh.");
}



//Ask the user to enter three numbers: min, max and current. Display if current is between min and max.

//Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)

//Bonus 2: be polite in the error messages. (facultative)