const readlineSync = require("readline-sync");

    
let a = readlineSync.question("Quel est le nom de la série ? ");
let b =readlineSync.question("Quel est l'année de production ? ");
let c = readlineSync.question("Citez des personnages de la série ");

function askTvSerie(){ 
    
    let serie = {
        Nom : a,
        Année : b,
        Personnages : c,
    }

    
    return serie;  
}


    console.log(askTvSerie()) ;





//Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

//Name
//Production year
//Names of the cast members (there can be as much as the user want)
//That function must gather all the data in a single object and return it. The data structure must be elegant.

//Create a program that use that function to generate a TV serie object and display it to the user in JSON format.