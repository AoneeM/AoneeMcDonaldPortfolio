let currentkey = '1';
let bgc ;
let gkcount;

function setup() {
    createCanvas(800, 600);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
}


function draw() {
    // triggering the clear_print function
    
    if( keyIsPressed) {
      clear_print();
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
     drawChoice();
    }
}



// wrapper function ( no parameters or arguments )
function drawChoice() {
   let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // black line
 // let k = color(0);
 AoneesfanxyBrush(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;

  case '2':
  console.log("2");  // black line
 // let k = color(0);
 pinkbrush(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;

  case '3':
  console.log("3");  // black line
 // let k = color(0);
 leavebrush(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
}

}

function AoneesfanxyBrush() { // function defining
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function
  // key global variable contains whatever key was last pressed

  
  
  // R, G & B integer values.
colorMode(HSB);
strokeWeight(1.2);
stroke(255, 204, 100);
fill(50, 200, 100, 20, 0)
triangle(mouseX, mouseY, pmouseX, pmouseY, width/2, height/2);
describe('A yellow triangle with a blue outline.');
}

function pinkbrush() {

    // Three-digit hex RGB notation.
fill('#fae');
triangle(mouseX, mouseY, pmouseX, pmouseY, width/2, height/2);
describe('A pink triangle with a blue outline.');
      // magial triangle


  }

  function leavebrush() {

    fill(100,300,100)
    circle(mouseX, mouseY, 30, 30, 20);
    describe('A cirle with a black outline')
  }


function clear_print() {

  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
    background(255);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }

}

