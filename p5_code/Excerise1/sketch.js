// runs first, runs only once
function setup () {
  // width, height in pixels
  createCanvas (600,600);
  
  fill(200, 150, 400);
  background(50);
  noStroke();
frameRate(10);
}
// runs second and then runs again, and again...

function draw() {
//grey, alpha
background(15,30);

let mx= mouseX;
let my= mouseY;

let r=random(width);
let rr=random(255); //0 - <100
let rg=random(255); //0 - <100
let rb=random(255); //0 - <100

let r2=random(width);
let rr2=random(255); //0 - <100
let rg2=random(255); //0 - <100
let rb2=random(255); //0 - <100

if (mouseX < 250)
  fill(200, 150, 300);
square(100, 100, 400);
ellipse(50, 280, 280, 80);
ellipse(550, 280, 280, 80);
ellipse(306, 550, 75, 200);
ellipse(306, 39, 75, 200);

console.log(r);
//e, g, b 0-255
fill(rr2, rg2, rb2);
arc(mx,my,20,30,50,40,0, PI + QUARTER_PI, CHORD)
if (mouseY > 500)
for (let i = 100; i < 500; i += 20) 
  for (let j = 100; j < 500; j += 20) {
    rand = random(255);
    fill(rr2, rg2, rb2);
    rect(i+5, j+5, 10, 10 );
    console.log(rand);
    
  }
  if (mouseY > 500)
  for (let i=100; i < 300; i+=50) 
  for (let j = 100; j < 300; j += 50) {
    fill(rr2, rg2, rb2);
    rect(0, i, width, 5);
    fill(rr2, rg2, rb2);
    rect(i+5, j+5, 5, height);
    console.log(i);

    
  }
  }