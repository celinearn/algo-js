const readlineSync = require('readline-sync');
let number = new Number(readlineSync.question('Enter a number between 1 and 7'));

if (number == 1) {
	console.log('Monday');
} else if (number == 2) {
	console.log('Tuesday');
} else if (number == 3) {
	console.log('Mercredi');
}
else if (number == 4) {
	console.log('Jeudi');
}
else if	(number == 5) {
	console.log('Vendredi');
}
else if	(number == 6) {
	console.log('Samedi');
}
else if	(number == 7) {
	console.log('Dimanche');
}






//Make a program that ask the user to enter a number between 1 and 7. 
//Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)