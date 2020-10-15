const readlineSync = require("readline-sync");

function rand10() {
	return parseInt(Math.random()*10)+1;
}

let arr = [];
let howmany = parseInt(readlineSync.question('how many number do you want in your array? '));
let c = 0, i;


function multiRand10(n) {
	for (let x=0;x<=(n-1);x++) {
		arr.push(rand10());
	}
	return arr;
}

function average(arr) {
	
  	for (i = 0; i < arr.length; i++) {
    c += Number(arr[i]);
 	 }
  	return c/arr.length;
}

function min(arr) {
 	return Math.min(...arr);
}

function max(arr) {
	return Math.max(...arr);
}

console.log(`you have ${howmany} random numbers in your array : ${multiRand10(howmany)}. The average number of this array is ${average(arr)}, the min number is ${min(arr)} and the max number is ${max(arr)}`);


//Create a function named average(arr) that takes an array of numbers as argument and returns the average.

//Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

//Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.

//Create a program that asks a number to the user then generate that same amount of random numbers 
//but also displays their average, min and max. 
//To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.

//Write a documentation for all the functions you created.