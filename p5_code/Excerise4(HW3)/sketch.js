
let speedX, speedY, loX, loY;
let baby1;
let baby2;
let my = mouseY;

function setup() {
createCanvas(800,800);
background(90);
angleMode(DEGREES);
    


speedX = random();
speedY = random();
loX = height
loY = width 

baby1 = new CrazyBabyG(color(255),150,150,0,1,0);
baby2 = new CrazyBabyB(color(255),150,150,0,1,0);
}

 function draw() {
 
   baby1.display();
   baby1.wiggle();
   baby2.display();
baby2.arm();
   
 if (loX < 0) {
   speedX = -speedX;
}
if (loX > width) {
   speedX = -speedX;
}
// this is the short hand way of doing the same as the 2 'ifs' above
// this uses or '||'
if ((loY < 0) || (loY > height)) {
   speedY = -speedY;
}


// update the position of the ball and print to screen
loX += speedX;
loY += speedY;


 }
