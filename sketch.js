var hr, mn, sc;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0, 0, 0);  
  translate(200, 200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr % 12, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  push();
  rotate(hrAngle);
  stroke(255, 0, 255);
  strokeWeight(7);
  line( 0, 0, 100, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(255, 255, 0);
  strokeWeight(7);
  line( 0, 0, 100, 0);
  pop();

  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line( 0, 0, 100, 0);
  pop();

  noFill();
  stroke(255, 0, 255);
  strokeWeight(7);
  arc(0, 0, 280, 280, 0, hrAngle);

  stroke(255, 255, 0);
  strokeWeight(7);
  arc(0, 0, 290, 290, 0, mnAngle);

  stroke(255, 0, 0);
  strokeWeight(7);
  arc(0, 0, 300, 300, 0, scAngle);
}