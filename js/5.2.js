const readlineSync = require("readline-sync");

    
let serie = {};
let c = [];

function askTvSerie(){ 
    
        let nom = readlineSync.question("Quel est le nom de la série ? ");
		let annee = readlineSync.question("Quel est l'année de production ? ");
		let acteurs = new Number(readlineSync.question("Combien d'acteurs pouvez-vous citer? "));

   		serie.nom = nom;
   		serie.annee = annee;
   		serie.acteurs = c;

   		for (let x = 0; x < acteurs; x++) {
   			c.push(readlineSync.question("Le nom: "));	
   		}

    
    return serie;  

 }



function randomizeCast(arr) {
	for (let x = arr.length-1; x > 0; x--) {
		let random = Math.floor(Math.random()*x);
		let temp = arr[x];
		arr[x] = arr[random];
		arr[random] = temp;
	}

	console.log(arr);
}


askTvSerie();
randomizeCast(c);
console.log(JSON.stringify(serie));;

//Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined 
//in the previous exercise and return a list of the same cast but in a random order.

//Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user 
//about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.

