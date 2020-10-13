function calcSurface(lenght, width) {
  return width * lenght;
}

const readlineSync = require('readline-sync');
x = readlineSync.question('Give me the lenght of the rectangle please? ');
y = readlineSync.question('Give me the width of the rectangle please? ');

console.log("The surface is " + calcSurface(x, y));



//Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. 
//Then create a program that asks the length and width of a rectangle to the user 
//then displays the surface of that rectangle. That program must use the function you created.

//Write a documentation for the calcSurface function.