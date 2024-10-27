

let loy= 0;
let btnevent1 =false; //help
let btnevent2 =false; //start

let textX;
let textY;


function drop() {

  let player, pillar;
  this.enter = function()  {


  }

    this.setup = function() {
      world.gravity.y = 10;
	
      pillar = new Sprite(30, 362, 30, 500, 'static')
      player = new Sprite(30, 0, 50);
    }
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
    text("Scene Test Run",-40,90); 


    if (player.collides(pillar)) {
      player.vel.y = -5;
      pillar.h -= 52;
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
    text('THIS IS JUST A TEST RUN\n ,so if so many things are happening.\n remember I am testing the sound\n, the play, and scene! ', 50, 100);

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


  let floor, ball;
  this.setup = function()  {
      console.log("We are at setup for help");
      // access a different scene using the SceneManager
      
      world.gravity.y = 10;

      //                ([vertex0, vertex1, vertex2, ...])
      floor = new Sprite([[20, 60], [200, 140], [450, 180]]);
      floor.collider = 'static';
    
      ball = new Sprite(40, 0, 20);

    }

  this.enter = function()
  {
   console.log("We are at entering for help");
  
   
   

  }

  this.draw = function() {
    background(50);
    // this is the draw function for all p5.play commands
   
    rect(floor.x - 2, floor.y - 2, 4, 4);
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

 
