

let loy= 0;
let btnevent1 =false; //help
let btnevent2 =false; //start

let textX;
let textY;

function drop() {

  this.enter = function()  {


  }

    this.setup = function() {

fruits1 = loadImage("asset/banana.png");
  fruits2 = loadImage("asset/cherry.png");
  fruits3 = loadImage("asset/orange.png");
  fruits4 = loadImage("asset/pear.png");
  fruits5 = loadImage("asset/pine.png");
  fruits6 = loadImage("asset/star.png");
  fruits7 = loadImage("asset/raspberry.png");
  fruits8 = loadImage("asset/water.png");
  fruits9 = loadImage("asset/tomato.png");
  fruits0 = loadImage("asset/chili.png");
  fruits11 = loadImage("asset/eggplant.png");
  fruits12 = loadImage("asset/grapes.png");
  fruits13 = loadImage("asset/pepper.png");
  fruits14 = loadImage("asset/pump.png");

}

this.draw = function()
{ 

    background(200);
    push();
        
    translate(width/2,loy-100);
    fill(300,150,150);
    stroke(0);
    strokeWeight(5); 
    textSize(20);
    text("Health Catch",-40,90); 

image(fruits1, 100, 100, 100, 100);
image(fruits2, 100, 200, 100, 100);
image(fruits3, 20, 100, 100, 100);
image(fruits4, 10, 200, 100, 100);
image(fruits5, -60, 200, 100, 100);
image(fruits6, -120, 210, 100, 100);
image(fruits7, -50, 100, 100, 100);
image(fruits8, -120, 100, 100, 100);
image(fruits9, 100, 300, 100, 100);
image(fruits0, -90, 300, 100, 100);
image(fruits11, -190, 100, 100, 100);
image(fruits12, -190, 200, 100, 100);
image(fruits14, 10, 290, 100, 100);
image(fruits13, -170, 290, 100, 100);

if (loy > 700) {
    loy = 5;
  }
   loy++;

  pop();
  
  if ( !sponge.isPlaying() ) {
    sponge.play(0);
 }

  image(fruits14, mouseX, mouseY,50,50);
                       // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
btnevent1 = checkButtonPress("Help",width-120,height-150,100,40,color(200,250,150),color(100),color(250));  
if (btnevent1) { // help
  btnevent1 = false;
  sponge.stop();
  this.sceneManager.showScene( help );
}
                      // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
btnevent2 = checkButtonPress("Start Here",width/60,height-150,120,40,color(320,100,150),color(100),color(250));
if (btnevent2) {   // main or next scene
  btnevent2 = false;
  sponge.stop();

    
  
   this.sceneManager.showNextScene( main );
}

}

this.mousePressed = function() {

     
}
}

function main()  {
 

  let ball, floor;

   this.setup = function() {
       console.log("We are at setup for main");
       
       world.gravity.y = 10;

       ball = new Sprite(400, 20, 30);
       floor = new Sprite(500, 560, 160, 20, 'static');
      
      }
 
   this.enter = function()
   {
     console.log("We are at entering main");
     
  }

    this.draw = function() {
       background(200);

floor.position.x = mouseX;
      
    
    if (frameCount % 100 == 0) {
      ball.life = 200;
      let x = random(350, 100);
      ball = new Sprite(x, 100, 30);
      ball.bounciness = 5;
      playshortsound2();
    }
  
    fill(200, 0, 200);
    textSize(20);
    stroke(5);
    text('You DO NOT wanna put alot\n of candy in your body.\n so when the candy falls.\n block it with the board! ', 50, 100);

 btnevent1 = checkButtonPress("Help",width-120,height-150,100,40,color(200,250,150),color(100),color(250));  
if (btnevent1) { // help
  btnevent1 = false;
  sponge.stop();
  this.sceneManager.showScene( help );

}
    
   }  
  

    this.mousePressed = function()
    {

    }
}

function help() {

  this.setup = function()  {
      console.log("We are at setup for help");
      // access a different scene using the SceneManager
      
 

    }

  this.enter = function()
  {
   console.log("We are at entering for help");
  
   
   

  }

  this.draw = function() {
    background(50);
    // this is the draw function for all p5.play commands
   
   image(fruits14, mouseX, mouseY,50,50);
   
    image(fruits2, 360, 20, 130, 130);
    stroke(6)
    fill(250, 100, 100);
    textAlign(LEFT);
    textSize(20);
    text( "Did you know. \nCherries contain melatonin, \nwhich can help treat insomnia. " , 30,60);
    
    image(fruits1, 360, 120, 130, 130);
    stroke(6)
    fill(250, 250, 150);
    textAlign(LEFT);
    textSize(20);
    text( "Did you know. \nBananas are a good source of many,\nitamins and minerals, including\npotassium, vitamin B6, and vitamin C", 30, 150);
   
    image(fruits5, 360, 450, 130, 130);
    stroke(6)
    fill(90, 190, 100);
    textAlign(LEFT);
    textSize(20);
    text( "Did you know. \nPineapple is rich in,\nnutrients and health\nmanganese, and digestive enzymes", 30, 490);
   
    image(fruits6, 360, 320, 130, 130);
    stroke(6)
    fill(350, 250, 150);
    textAlign(LEFT);
    textSize(20);
    text( "Did you know. \nStar fruit which helps your body make,\n germ-fighting white blood cells for\na stronger immune system", 30, 370);
   
    image(fruits7, 360, 230, 130, 130);
    stroke(6)
    fill(250, 150, 150);
    textAlign(LEFT);
    textSize(20);
    text( "Did you know. \nRasberries high in fiber and\nlow in calories\nthat provide anti-aging ", 30, 270);
  
    playshortsound3();
  }

  this.mousePressed = function()
  {

  }
}

 function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

    let btnc = "";
    let btnstate =false;
  
    // Test if the cursor is over the box
    if ( mouseX > bx - boxW &&
         mouseX < bx + boxW &&
         mouseY > by - boxH &&
         mouseY < by + boxH ) {
         overBox = true;
  
      if (!mouseIsPressed) {
        stroke(255);
        btnc = ovcolor;
        btnstate = false;
      } else {
        console.log(str + " pressed");
        stroke(255);
        btnc = dncolor;
        btnstate = true;
      }
  
    } else {
      stroke(255);
      btnc = upcolor;
      overBox = false;
    }
  
    push();
    translate(bx,by);
    fill(btnc);
    rect(0, 0, boxW, boxH,10); // draw the box
  
    fill(20);
    noStroke();
    textSize(20);
    textAlign(CENTER);
    text (str,boxW/2,28);
  
      pop();
  
      return btnstate;
  
  }

  function playshortsound() {
    if ( !sponge.isPlaying() ) {
      sponge.play();
    } else {
       sponge.stop();
   }
  }
   function playshortsound2() {
   if ( !yippee.isPlaying() ) {
    yippee.play(1);
  } else {
     
 }
   }

  function playshortsound3() {
   if ( !spiderman.isPlaying() ) {
    spiderman.play(0);
  } else {
     
 }
   }

   function Fruitdrop() {

    fruits1 = loadImage("asset/banana.png");
    fruits2 = loadImage("asset/cherry.png");
    fruits3 = loadImage("asset/orange.png");
    fruits4 = loadImage("asset/pear.png");
    fruits5 = loadImage("asset/pine.png");
    fruits6 = loadImage("asset/star.png");
    fruits7 = loadImage("asset/raspberry.png");
    fruits8 = loadImage("asset/water.png");
    fruits9 = loadImage("asset/tomato.png");
    fruits0 = loadImage("asset/chili.png");
    fruits11 = loadImage("asset/eggplant.png");
    fruits12 = loadImage("asset/grapes.png");
    fruits13 = loadImage("asset/pepper.png");
    fruits14 = loadImage("asset/pump.png");

   }
