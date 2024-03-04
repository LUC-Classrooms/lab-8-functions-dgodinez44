function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  //this is a call to myShape()
  myShape(width / 2, height / 2, 1); // face in the middle, normal size
  myShape(width -100, height - 100, 2); // face in the bottom right corner, doubled size
  myShape(width - 450, height - 300, 0.5); // small face towards the top left corner, halfed size
  // myShape() takes three arguments
  // arg1: horizontal location
  // arg2: vertical location
  // arg3: scale factor (1 is full size)
  /* add two more calls to myShape that draw your shape in different locations
  */
  
}

function myShape(x, y, s) {
  // make this function more interesting
  push(); // make a separate layer
  translate(x, y); // move the origin point
  scale(s);
  
  fill("yellow"); // fills in the face with yellow
  ellipse(0, 0, 100); // simple ellipse at the translated origin (0,0)
  strokeWeight(3); // makes the lines of the eyes and mouth thicker 
  line(-20, -20, -20, 0); // left eye
  line(20, 0, 20, -20); // right eye
  line(20, 20, -20, 20); // mouth
  
  pop(); // dispose of the layer
}
