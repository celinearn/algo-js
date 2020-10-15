const readlineSync = require("readline-sync");

function rand10() {
	return parseInt(Math.random()*10)+1;
}

let arr = [];
let howmany = parseInt(readlineSync.question('how many random number do you want? '));

function multiRand10(n) {
	for (let x=0;x<=(n-1);x++) {
		arr.push(rand10());
	}
	return arr;
}

console.log(`you have ${howmany} random numbers in your array : ${multiRand10(howmany)}`);


//By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) 
//that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.

//Write a documentation for the multiRand(n) function.

//Use that function to create a program that will ask the number of random numbers to generate 
//then display that same number of random numbers.