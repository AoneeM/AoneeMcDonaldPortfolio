
 // 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16 This is eggplant
let gridarr1 = [
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0,0,0,0,0,0,0], //1
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 0,0,0,0,0,0,0], //2
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1,0,0,0,0,0,0], //3
    [0, 0, 0, 0, 1, 2, 1, 2, 1, 1,0,0,0,0,0,0], //4
    [0, 0, 0, 0, 2, 2, 2, 2, 1, 0,0,0,0,0,0,0], //5
    [0, 0, 0, 2, 2, 3, 3, 2, 2, 0,0,0,0,0,0,0], //6
    [0, 0, 0, 2, 2, 2, 3, 2, 2, 0,0,0,0,0,0,0], //7
    [0, 0, 0, 2, 3, 2, 2, 2, 2, 0,0,0,0,0,0,0], //8
    [0, 0, 0, 2, 3, 2, 2, 2, 2, 2,0,0,0,0,0,0], //9
    [0, 0, 0, 2, 2, 2, 2, 2, 2, 2,2,2,2,2,0,0], //10
    [0, 0, 0, 2, 2, 2, 2, 2, 2, 2,2,2,2,2,2,0], //11
    [0, 0, 0, 0, 2, 2, 2, 2, 2, 2,2,3,3,2,2,0], //12
    [0, 0, 0, 0, 0, 2, 2, 2, 2, 2,2,2,2,2,2,0], //13
    [0, 0, 0, 0, 0, 2, 2, 2, 2, 2,2,2,2,2,0,0], //14
    [0, 0, 0, 0, 0, 0, 0, 2, 2, 2,2,2,2,0,0,0], //15
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0] //16
];

let gridarr2 = [  //This is cucumber
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0], //1
    [0, 0, 0, 4, 4, 4, 0, 0, 0, 0,0,0,0,0,0,0], //2
    [0, 4, 4, 1, 1, 1, 4, 0, 0, 0,0,0,0,0,0,0], //3
    [4, 1, 1, 1, 1, 1, 1, 4, 0, 0,0,0,0,0,0,0], //4
    [4, 1, 1, 5, 1, 1, 1, 1, 4, 0,0,0,0,0,0,0], //5
    [4, 1, 1, 5, 1, 1, 1, 1, 1, 4,0,0,0,0,0,0], //6
    [0, 4, 1, 1, 5, 1, 1, 1, 1, 1,4,0,0,0,0,0], //7
    [0, 0, 4, 1, 1, 1, 1, 1, 1, 1,1,4,0,0,0,0], //8
    [0, 0, 0, 4, 1, 5, 1, 1, 1, 1,1,1,4,0,0,0], //9
    [0, 0, 0, 0, 4, 1, 5, 1, 1, 1,1,1,1,4,0,0], //10
    [0, 0, 0, 0, 0, 4, 1, 1, 1, 1,1,1,1,1,4,0], //11
    [0, 0, 0, 0, 0, 0, 4, 1, 1, 1,1,1,5,1,4,0], //12
    [0, 0, 0, 0, 0, 0, 0, 4, 1, 1,1,1,1,1,4,0], //13
    [0, 0, 0, 0, 0, 0, 0, 0, 4, 1,1,1,1,1,4,0], //14
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 4,4,4,4,4,0,0], //15
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0] //16
];

    // 16 x 16
    //1,2,3,4,5,6,7,8,8,9,10,11,12,13,14,15,16
let textarr = [
    ["back","back", "back", "back", "back", "back", "back", "back", "back", "back","back","back","back","back","back","back"], //1
    ["back", "back", "back", "veg", "veg", "veg", "back", "back", "back","back","back","back","back","back","back","back"], //2
    ["back", "veg", "veg", "plant", "plant", "plant", "veg", "back", "back", "back","back","back","back","back","back","back"], //3
    ["veg", "plant", "plant", "plant", "plant", "plant", "plant", "veg", "back", "back","back","back","back","back","back","back"], //4
    ["veg", "plant", "plant", "light", "plant", "plant", "plant", "plant", "veg", "back","back","back","back","back","back","back"], //5
    ["veg", "plant", "plant", "light", "plant", "plant", "plant", "plant", "plant", "veg","back","back","back","back","back","back"], //6
    ["back", "veg", "plant", "plant", ";ight", "plant", "plant", "plant", "plant", "plant","veg","back","back","back","back","back"], //7
    ["back", "back", "veg", "plant","plant" , "plant", "plant", "plant", "plant", "plant","plant","veg","back","back","back","back"], //8
    ["back", "back", "back", "veg", "plant", "light", "plant", "plant", "plant", "plant","plant","plant","veg","back","back","back"], //9
    ["back", "back", "back", "back", "veg", "plant", "light", "plant", "plant", "plant","plant","plant","plant","veg","back","back"], //10
    ["back", "back", "back", "back", "back", "veg", "plant", "plant", "plant", "plant","plant","plant","plant","plant","veg","back"], //11
    ["back", "back", "back", "back", "back", "back", "veg", "plant", "plant", "plant","plant","plant","light","plant","veg","back"], //12
    ["back", "back", "back", "back", "back", "back", "back", "veg", "plant", "plant","plant","plant","plant","plant","veg","back"], //13
    ["back", "back", "back", "back", "back", "back", "back", "back", "veg", "plant","plant","plant","plant","plant","veg","back"], //14
    ["back","back" , "back", "back","back","back", "back", "back", "back", "back", "veg","veg","veg","veg","veg","back","back"], //15
    ["back", "back", "back", "back", "back", "back", "back", "back", "back", "back","back","back","back","back","back","back"] //16
];

//Sophias Garlic array

let garlic = [
    ["dirt", "dirt", "soil", "mud", "soil" ,"dirt" ,"mud" ,"mud" ,"soil","soil","mud","dirt","dirt","soil","mud","soil"],
    ["dirt", "dirt", "soil", "mud", "soil" ,"dirt" ,"garlic" ,"garlic" ,"soil","soil","mud","dirt","dirt","soil","mud","soil"],
    ["dirt", "dirt", "soil", "mud", "soil" ,"garlic" ,"garlic" ,"garlic" ,"garlic","soil","mud","dirt","dirt","soil","mud","soil"],
    ["dirt", "dirt", "soil", "mud", "garlic" ,"sharp" ,"sharp" ,"pungent" ,"garlic","soil","mud","dirt","dirt","soil","mud","soil"],
    ["dirt", "dirt", "soil", "mud", "garlic" ,"garlic" ,"sharp" ,"pungent" ,"garlic","soil","mud","dirt","dirt","soil","mud","soil"],
    ["dirt", "dirt", "soil", "garlic", "stinky" ,"stinky" ,"garlic" ,"stinky" ,"garlic","garlic","garlic","dirt","dirt","soil","mud","soil"],
    ["dirt", "dirt", "soil", "garlic", "garlic" ,"pungent" ,"garlic" ,"stinky" ,"garlic","garlic","mud","dirt","dirt","soil","mud","soil"],
    ["dirt", "dirt", "soil", "mud", "soil" ,"garlic" ,"pungent" ,"stinky" ,"sharp","sharp","garlic","dirt","dirt","soil","mud","soil"],
    ["dirt", "dirt", "soil", "mud", "garlic" ,"dirt" ,"pungent" ,"stinky" ,"sharp","sharp","garlic","dirt","dirt","soil","mud","soil"],
    ["dirt", "dirt", "soil", "garlic", "stinky" ,"dirt" ,"sharp" ,"stinky" ,"stinky","stinky","stinky","garlic","dirt","soil","mud","soil"],
["dirt", "dirt", "garlic", "pungent", "sharp" ,"stinky" ,"sharp" ,"mud" ,"stinky","stinky","stinky","pungent","garlic","soil","mud","soil"],
    ["dirt", "dirt", "garlic", "pungent", "sharp" ,"stinky" ,"sharp" ,"mud" ,"pungent","sharp","stinky","pungent","garlic","soil","mud","soil"],
    ["dirt", "dirt", "garlic", "pungent", "sharp" ,"stinky" ,"sharp" ,"mud" ,"pungent","sharp","stinky","pungent","garlic","soil","mud","soil"],
    ["dirt", "dirt", "soil", "garlic", "pungent" ,"pungent" ,"sharp" ,"pungent" ,"soil","soil","mud","garlic","dirt","soil","mud","soil"],
    ["dirt", "dirt", "soil", "mud", "garlic" ,"stinky" ,"pungent" ,"mud" ,"soil","soil","garlic","dirt","dirt","soil","mud","soil"],
    ["dirt", "dirt", "soil", "mud", "soil" ,"garlic" ,"garlic" ,"garlic" ,"garlic","garlic","mud","dirt","dirt","soil","mud","soil"]
];

// Kathys leek array

let leek = [
    ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing"],
    ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing"],
    ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing","back", "back", "back", "back"],
    ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "back", "back", "back", "back", "back", "back"],
    ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "back", "back", "back", "back", "back", "back", "back"],
    ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "darkest", "darkest", "darkest", "darkest", "back", "back", "back", "back"],
    ["nothing", "bulb", "bulb", "bulb", "stem", "stem", "stem", "transition", "leaf", "leaf", "darker", "darker", "darker", "darkest", "darkest", "darkest"],
    ["nothing", "bulb", "bulb", "bulb", "stem", "stem", "stem", "transition", "leaf", "leaf", "darker", "darker", "darker", "darkest", "darkest", "darkest"],
    ["nothing", "bulb", "bulb", "bulb", "stem", "stem", "stem", "transition", "leaf", "leaf", "darker", "darker", "darker", "darkest", "darkest", "darkest"],
    ["nothing", "bulb", "bulb", "bulb", "stem", "stem", "stem", "transition", "leaf", "leaf", "darker", "darker", "darker", "darkest", "darkest", "darkest"],
    ["nothing", "bulb", "bulb", "bulb", "stem", "stem", "stem", "transition", "darker", "darker", "darker", "darker", "darker", "darkest", "nothing", "nothing"],
    ["nothing", "bulb", "bulb", "bulb", "stem", "stem", "stem", "transition", "darker", "darker", "darker", "darkest", "darkest", "darkest", "back", "back"],
    ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "darkest", "darkest", "darkest", "back", "back", "back", "back"],
    ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "back", "back", "back", "back", "back", "back", "back"],
    ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "back", "back", "back", "back"],
    ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing"],
    
];


let font1;
let images =[];

let currentPage = 1;

function preload()  {
       font1 = loadFont('assets/oswald.ttf');
       images[0] = loadImage('assets/slay.jpeg');
       images[1] = loadImage('assets/eggplants.jpeg');
       images[2] = loadImage('assets/leaves.jpeg');
       images[3] = loadImage('assets/koi.jpeg');
}

function setup() {
     createCanvas(800, 800);
     background(0, 60, 150);
     fill(100);
     textAlign(LEFT);
     textFont(font1);
      
}

function draw() {
    background(0,15);

    if (currentPage == 1) {
      //2darr, x,y,rot,scale, alpha
    
      mapToColorPixels(gridarr1, 40, 50, 360, 1.9);
      mapToColorPixels(gridarr2, 420, 350, 360, 1.9);

      push();
      translate(10,10);
      fill(200);
      textSize(30);
      let t = "This is my array to make a eggplant in pixels."
      text(t,20,30,600);  // the 4th argument is the textWidth per line.
      pop();
 

    } else if (currentPage == 2) {
     
        mapToColorText(textarr, -40, 300, 360, 1.6);
  

     push();
     translate(20,40);
     fill(200);
     textSize(40);
     let t = "This is my array to make a cucumber with text."
     text(t,20,30,600);
     pop();


    } else if (currentPage == 3) {
        mapToTintedBitMaps(gridarr1,images, -400, 0, -20, 10.85,7);
        mapToBitMaps(gridarr1,images, 100, 130, -3, 1.55);
        mapToTintedBitMaps(gridarr1,images, 400, 120, 0, 2.85,190);
        push();
        translate(40,50);
        fill(100, 250, 100);
        textSize(20);
        let t = "This is the eggplant arrays with different images";
        t += "\n";   // this is a command you can put in text to create a line break.
        t += "if you can read the one image in the array you have good eyesight";
        text(t,0,0,400);
        pop();

    } else {


        mapToColorText2(garlic, 50, 300, 0, 1.2, 5);
        mapToColorText3(leek, 100, 500, 0, 1.2, 5);
        push();
        translate(100,100);
        fill(200);
        textSize(30);
        text ("My groups memebers were the veggies cult",0 ,0, 800 );
        translate(0,110);
        text ("I have two of my groups different arrays and put the other veggies on this page with at least twice \nfor a total of more than 16.",-100 ,-50,700 );
        translate(250,120);
        pop();

    }
}

function keyPressed() { 

  
    //console.log(key);
     // or 
    if ( key == '1' ) { 
      console.log("Page 1");
      currentPage = 1;

     } else if ( key == '2' ) { 
        console.log("Page 2");
        currentPage = 2;
        
     } else if ( key == '3' ) { 
        console.log("Page 3");
        currentPage = 3;   
     } else {
        currentPage = 0;

     }
  
    }

function mapToColorPixels(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                  fill(200,190,100,80); //background
              } else if ( value == 1 ){
                  fill(100,250,50,60) //leave color
              } else if ( value == 2 ) {
                  fill(90,30,90, fade); //eggplant
              } else if ( value == 3 ){
                 fill(150,30,170, fade); //light detail
                } else if ( value == 4 ){
                    fill(20,350,50,10) //leave color
            } else if ( value == 5 ){
                fill(255) //highlight 2
            }
            rect(j * 12, i * 12, 10, 10);
        }
    }
    pop();

}



function mapToColorShapes(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                  fill(200,70,0, fade);
                  ellipse(j * 12, i * 12, 10, 10);
              } else if ( value == 1 ){
                  fill(50,0,30, fade);
                   rect(j * 12-6, i * 12-6, 10, 10,2);
              } else {
                  fill(0,150,0, fade);
                   ellipse(j * 12, i * 12, 15, 10,5);
              }
        }
    }
    pop();

}

function mapToColorText(arr,lx,ly,rot,sc,fade) {
    textSize(15);
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == "back" ) {
                  fill(200,190,100,80); //background
              } else if ( value == "plant" ){
                  fill(100,250,50,60) //leave color
              } else if ( value == "egg" ) {
                  fill(90,30,90, fade); //eggplant
              } else if ( value == "slay" ){
                 fill(150,30,170, fade); //light detail
                } else if ( value == "veg" ){
                    fill(20,350,50,10) //leave color
            } else if ( value == "light" ){
                fill(255) //highlight 2
              }
               text(value, j * 35, i * 10,100);
               //rect( j * 35, i * 10,100,100);
        }
    }
    pop();

}


function mapToColorText2(garlic,lx,ly,rot,sc) {
    textSize(16);
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < garlic.length; i++) {
        for (var j = 0; j < garlic[0].length; j++) {
             let value = garlic[i][j];
              if ( value == "dirt" ) {
                  fill(210,105,30);
              } else if ( value == "soil" ){
                  fill(244,164,96);
              }
             else if ( value == "mud" ){
                fill(210,180,140);
            }
            else if ( value == "garlic" ){
                fill(75,70,0);
            }
            else if ( value == "stinky" ){
                fill(218,165,32);
            }
            else if ( value == "pungent" ){
                fill(184,134,11);
            }
            else if ( value == "sharp" ){
                fill(238,232,170);
            }
              
               else {
                  fill(255);
              }
               text(value, j * 35, i * 10,100);
        }
    }
    pop();

}

function mapToColorText3(arr,lx,ly,rot,sc,fade) {
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if (value == "bulb") {
                fill(["#e8e4d8"], fade);
                textSize(15);
            } else if (value == "stem") {
                fill(["#b9c993"], fade);
                textSize(13);
            } else if (value == "transition") {
                fill(["#85a35f"], fade);
                textSize(10);
            } else if (value == "nothing") {
                fill(["#918569"], fade);
                textSize(15);
            } else if (value == "back") {
                fill(["#103010"], fade);
                textSize(12);
            } else if (value == "darker") {
                fill(["#426933"], fade);
                textSize(13);
            } else if (value == "darkest") {
                fill(["#1c451d"], fade);
                textSize(14);
            } else {
                fill(['#638c46'], fade);
                textSize(15);
            }
            text(value, j * 30, i * 10, 100);
        }
    }
    pop();
}


                            //2darray,images in array ,x,y,rot,scale, alpha
 function mapToBitMaps(arr,imgarr,lx,ly,rot,sc) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            let nuimg;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == 0 ) {
                        nuimg = imgarr[0];
                      } else if ( value == 1 ){
                        nuimg = imgarr[2];
                      } else if ( value == 2 ) {
                        nuimg = imgarr[1];
                      } else {
                        nuimg = imgarr[3];
                      }
                    image(nuimg, j * 12, i * 12, 14, 14);
                }
            }
            pop();
        
}

    //2darray,images in array ,x,y,rot,scale, alpha
    function mapToTintedBitMaps(arr,imgarr,lx,ly,rot,sc,fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    let nuimg;
    let c;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
                let value = arr[i][j];
                if ( value == 0 ) {
                nuimg = imgarr[3];
                c = color(255,100,0,fade);
                } else if ( value == 1 ){
                c = color(255,0,255,fade);
                nuimg = imgarr[2];
                } else if ( value == 2 ) {
                nuimg = imgarr[1];
                c = color(20,200,120,fade);
                } else {
                nuimg = imgarr[0];
                c = color(120,0,240,fade);
                }
            
            c = color(255,fade);
            tint(c);
            image(nuimg, j * 9, i * 9, 15, 15);
        }
    }
    pop();

    }
