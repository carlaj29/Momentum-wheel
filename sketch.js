function setup() {
  createCanvas(800,600);
  background(200);
  angleMode(DEGREES);
  frameRate(12)
}

function draw() {
  translate(width/2, height/2);
  rotate(frameCount*3);
  noFill();
  stroke(lerpColor(color(216,244,34),color(121,34,244),(frameCount%120)/120));
  ellipse(0, 100, 50, 50);
  
  
  noStroke()
  fill(lerpColor(color(216,244,34),color(121,34,244),(frameCount%120)/120))
  ellipse(0, 100, 25, 25);

  if (mouseIsPressed) {
    fill(lerpColor(color(121,34,244),color(216,244,34),(frameCount%120)/120));
    ellipse(0, 100, 50, 50);
  
  
   }
  
}