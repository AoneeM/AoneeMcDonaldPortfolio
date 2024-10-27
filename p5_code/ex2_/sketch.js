let bgcounter = 0;
let counter = 0;
let value = 0;
let purpOn = false;
let counterG = 0;
let counterR = 0;
let f; 


function setup() {
createCanvas(500, 500);
background(255);
frameRate(10);
rectMode(CENTER);
  bc = color('#008800');
}

function draw() {
noStroke();
fill(255,255,0,120);
rect(0, counter, width - random(50), 10);
fill(155,240,255,120);
rect(counter, 0, 10, height - random(50));


ellipse(width/2, height/2, 100, 100);       
         
          if (mouseIsPressed == true) {  // tests true or false
            console.log("show that purple");
            fill(255,0,255);
            let r = random(100,width-10);
            ellipse(width/2, height/2, r, r);
          }
if (counter > height) {
  background(bgcounter);
  bgcounter+=3;
  counter = 0;
  } else {
  counter+=20;
  

  // this is an example of 'and' logic
  if ( mouseIsPressed == true )  {
    
    textSize((counterG+25)/3);
    textAlign(RIGHT);
    fill(150, 200, 250);
text("Drowning in this class", width/2, counterG);
  
    counterG +=2.25;
      if (counterG > width) {
        counterG = -90;
      }
     
      console.log("show that purple");
      textSize((counterG+20)/2);
      textAlign(LEFT);
      fill(250, 200, 50);
      text("THIS CLASS IS HARD", width/2, counterG);
    
      counterG +=2.25;
        if (counterG > width) {
          counterG = -90;
        }
    }
      if ( key == 'b' || key == 'B' ) { 
        // example of toggle logic 
        if (value == 0) { 
          value = 255;
        } else { 
          value = 0;
        }
      }

   
       }
  

}