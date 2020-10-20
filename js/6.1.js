class Circle {
  constructor(xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
	}
    // Getter
  get surface() {
    return (this.radius * this.radius) * Math.PI;
  	}
    // Method
  move(xOffset, yOffset) {
  	this.xPos=this.xPos+xOffset;
  	this.yPos=this.yPos+yOffset;
  	console.log(`La nouvelle position de mon cercle est X:${this.xPos} Y:${this.yPos}`);
  	}
}


let test = new Circle(10, 10, 5);
let nouvPos = test.move(10,30);

console.log(`The surface is of the circle is ${test.surface}`);



// Create a class named Circle with attributes xPos, yPos and radius. 
// Add a method named move(xOffset, yOffset) that will adjust the position of the circle. 
// Add a getter accessor named surface that will return the surface of the circle.

// Test its method and accessors by modifying the values and checking if everything is consistent.