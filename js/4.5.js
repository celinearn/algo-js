
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);


//let A = [x0, y0];
//let B = [x1, y2];

function calcDistance(A, B) {
	return distance(x0, y0, x1, y1);
}

console.log(distance(-2, 2, 2, -2));








//Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. 
//That function must return the distance between those two points.

//Examples results:

//Point A = [1, 1], point B = [2, 2] => 1.41
//Point A = [1, 1], point B = [3, 1] => 2
//Point A = [4, 1], point B = [1, 1] => 3
//Point A = [-2, 2], point B = [2, -2] => 5.65
//Create a program to use that function.

//Write a documentation for the calcDistance function.

//Note: You probably need to make some search on Google to learn the mathematical formula to do that. 
//You will also probably need to search for useful functions in JavaScript 
//to help you making complex mathematical formulas...