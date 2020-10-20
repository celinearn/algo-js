class Rectangle {
	constructor(topLeftXPos, topLeftYPos, width, lenght){
	this.topLeftXPos = topLeftXPos;
	this.topLeftYPos = topLeftYPos;
	this.width = width;
	this.lenght = lenght;
	}
	// method
	collides(otherRectangle){
        
        let collides = false;
        if (this.topLeftXPos + this.width >= otherRectangle.topLeftXPos &&     // r1 right edge past r2 left
			  this.topLeftXPos <= otherRectangle.topLeftXPos + otherRectangle.width &&       // r1 left edge past r2 right
			  this.topLeftYPos + this.lenght >= otherRectangle.topLeftYPos &&       // r1 top edge past r2 bottom
			  this.topLeftYPos <= otherRectangle.topLeftYPos + otherRectangle.lenght) {
        	collides = true;
		}
		return collides;
	}
	}


let rectangle1 = new Rectangle(1, 1, 2, 2);
let rectangle2 = new Rectangle(30, 20, 10, 50);

console.log(rectangle1.collides(rectangle2));



// if (5 < 30 &&
//     55 > 20 &&
//     5 < 20 &&
//     55 > 10) {
//     console.log(`collision détectée`);
// 	}else{console.log(`Pas de collision détectée`)};



// Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and lenght. 
// Add a method named collides(otherRectangle) that returns true only if the current rectangle 
// collides with otherRectangle.

// Test the collides(otherRectangle) method by using multiple test cases.