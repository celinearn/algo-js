const readlineSync = require("readline-sync");

    
let serie = {};

function askTvSerie(){ 
    
        let nom = readlineSync.question("Quel est le nom de la série ? ");
		let annee = readlineSync.question("Quel est l'année de production ? ");
		let acteurs = new Number(readlineSync.question("Combien d'acteurs pouvez-vous citer? "));
   		let c = [];

   		serie.nom = nom;
   		serie.annee = annee;
   		for (let x = 0; x < acteurs; x++) {
   			c.push(readlineSync.question("Le nom: "));	
   		}
   		serie.acteurs=c;

    
    return serie;  

 }


askTvSerie();
    console.log(JSON.stringify(serie));





//Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

//Name
//Production year
//Names of the cast members (there can be as much as the user want)
//That function must gather all the data in a single object and return it. The data structure must be elegant.

//Create a program that use that function to generate a TV serie object and display it to the user in JSON format.