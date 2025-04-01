let ballColor;
let diam;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballColor = color(255, 0, 0); // color( ) 함수는 color 객체를 만드는 함수. 
  fill(ballColor);
  diam = 50;
}

function draw() {
  background(128);

  if (mouseIsPressed){
    ballColor = color(255, 255, 0);
  } else{
    ballColor = color(255, 0, 0);
  }
  
  fill(ballColor);
  ellipse(mouseX, mouseY, diam, diam);
}