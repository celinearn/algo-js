class Rectangle {
	constructor(topLeftXPos, topLeftYPos, width, lenght){
	this.topLeftXPos = topLeftXPos;
	this.topLeftYPos = topLeftYPos;
	this.width = width;
	this.lenght = lenght;
	}
	// method
	collides(otherRectangle){
        if this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width
		this.topLeftXPos + this.width > otherRectangle.topLeftXPos
		this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.lenght
		this.topLeftYPos + this.lenght > otherRectangle.topLeftYPos {
        	console.log('Collision detected');
		}else{console.log(`Pas de collision`);}
	}

}

let rectangle1 = new Rectangle(250, 50, 0, 50);
let rectangle2 = new Rectangle(250, 300, 0, -50);
console.log(rectangle1.collides(Rectangle));



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