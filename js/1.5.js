const readlineSync = require("readline-sync");
let decimal = readlineSync.question('Can you gime me a decimal number please?');
let other = readlineSync.question('Can you gime me an other one please?')


console.log(Math.trunc(decimal) * other);

//Ask two numbers with decimal part to the user. For the first one only keep the integer part. Then multiply them and display the result.

//You will have to perform a search on Google to know how to only keep the integer part of a number.