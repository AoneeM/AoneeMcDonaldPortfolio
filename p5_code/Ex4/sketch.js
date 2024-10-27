// Example 2.4.3 Adjustable Array Version

let count = 6;
let loX = new Array(count);
let loY = new Array(count);
let speedX = new Array(count);
let speedY = new Array(count);
let cirSize = new Array(count);
let colorsR = new Array(count);
let colorsG = new Array(count);
let colorsB = new Array(count);
let sss = new Array(count);

let speedXlist = [0.0, 0.0,0.0];
let speedYlist = [0.0, 0.0,0.0];
let loXlist = [0.0, 0.0,0.0];
let loYlist = [0.0, 0.0,0.0];
let baby1;


function setup() {
  createCanvas(600, 600);
  noStroke();
  angleMode(DEGREES);

  for (let i=0; i < loX.length; i++) {
    loX[i] = width/2;
    loY[i] = height/2;
    speedX[i] = random(-3, 3);
    speedY[i] = random(10, 9);
    cirSize[i] = random(10, 90);
    console.log(speedX);
    
    baby1 = new CrazyBabyG(color(255),150,150,0,1,0);
  }

}
function draw() {

 background(100)

  baby1.display();
  baby1.wiggle();

 for (let i = 0; i < loX.length; i++) {

     //check boundaries for all balls
     // note the '40+' and '-40' are to pull in the borders to match 
     // the background rect

    if (loX[i] < -30+cirSize[i] || loX[i] > (width-20)-cirSize[i] ) {
      speedX[i] = -speedX[i];
    }
    if (loY[i] < -30+cirSize[i] || loY[i] > (height-20)-cirSize[i]) {
      speedY[i] = -speedY[i];
    }
    
   
    //update all positions
    loX[i] += speedX[i];
    loY[i] += speedY[i];

  if (mouseIsPressed === true) {
    push();
    translate(loX[i],loY[i]);
    fill(200,50,100);
    ellipse(200,100,100);
fill(255);
    rect(240,90,200,30)
    pop(); 
  }
}
}