const readlineSync = require("readline-sync");
let n = new Number(readlineSync.question('Enter a number between 1 and 10 please'));

let i = 1
while (i <= n) {
	console.log(readlineSync.question('Enter a new number please'));
	i++;
}

console.log(n + 1);



//Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. 
//At the end display the sum of all the numbers collected this way.

//Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.