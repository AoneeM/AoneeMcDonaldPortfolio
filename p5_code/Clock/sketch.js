//particle class
class Particle {
    constructor(){
      this.x = random(width);
      this.y = random(height);
      this.r = random(20,20);
      this.xSpeed = random(-3,3);
      this.ySpeed = random(-3,3);
    }
  
    createParticle() {
      noStroke();
      fill(250,250,200);
      circle(this.x,this.y,this.r);
    }
  
    moveParticle() {
      if(this.x < 0 || this.x > width)
        this.xSpeed*=-1;
      if(this.y < 0 || this.y > height)
        this.ySpeed*=-1;
      this.x+=this.xSpeed;
      this.y+=this.ySpeed;
    }
  
    joinParticles(particles) {
      particles.forEach(element =>{
        let dis = dist(this.x,this.y,element.x,element.y);
        if(dis<85) {
          stroke('rgba(255,255,255,0.04)');
          line(this.x,this.y,element.x,element.y);
        }
      });
    }
  }
  
  let particles = [];

// the example code of the day
let s,m,h;
let ms,mm,mh;
let dc, nc,cc;
let d1;
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function setup() {
  createCanvas(800,800);
  background(100);
  fill(255);

  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
  }

  dc = color(300,150,100);
  nc = color(20,0,80);
  cc = dc;
}

function draw() {
  background(cc);
  let d1 = new Date();
  console.log( days[ d1.getDay()]); 
  // 0-6  where 0 is Sunday, and Sat is 6
  fill(150,0,200);
  textSize(50)
  text(days[ d1.getDay()], 330,70);
  s = second();
  m = minute();
  h = hour();

  if  ( d1.getDay()  ==  4) {  // Just thursday events

        if ( h > 6 && h < 20 ) { // what is the hour?
        // daytime
        if (m < 5 && m > 0 ) {
        cc = dc;
        if (s < 16 && s > 0 ) {
          fill(250);
          text("Day time list of things to do: Work, do homework, eat, go run errends",100,50);

        } else {
          cc = color(50);
          fill(255);
          text("Night time list of things to do: Work on assignments, make dinner, relax time, go out with friends if there is time",100,50);
        }

        } 

        } else {
        // nighttime
        cc = nc;

        }

  }

  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }

// input, input low, input high , mapped low , mapped high
 ms = map(s,0,59,0,width);
 mm = map(m,0,59,0,width);
 mh = map(h,0,59,0,width);

 
 fill(255, 255, 0);
 let biteSize = PI / 16;
 let startAngle = biteSize * sin(frameCount * 0.4) + biteSize;
 let endAngle = TWO_PI - startAngle;
 

 
 //pacman
 arc(400, 400, 300, 300, startAngle, endAngle, PIE);
 fill(0);
 ellipse(380,330,90,90);
 //eye
 fill(255);
 ellipse(390,319,40,40);
 ellipse(370,350,20,20);
 //pupil
 fill(300,100,100);
 ellipse(360,390,80,20);

//blue ghost
 push();
 translate(ms,100);
 rotate(radians(270));
 fill(100,350,250);
 ellipse(0, 250, 80, 80);
 ellipse(-30, 250, 80, 80);
 circle(-70, 240, 25);
 circle(-70, 230, 25);
 circle(-70, 260, 25);
 circle(-70, 270, 25);
 
 fill(255);
 ellipse(10, 230, 40, 20);
 ellipse(10, 270, 40, 20);
 
 fill(0)
 ellipse(10, 240, 30, 10);
 ellipse(10, 260, 30, 10);
 pop();

 let mmr = map(m,0,59,0,259); // degrees and rot
 push();
 translate(width/2,height/2);
 rotate(radians(mmr-90));
 fill(550,50,100);
 ellipse(60, 170, 50, 50);
 ellipse(0, 180, 50, 50);
 
 fill(0,300,20);
 rect(0,250,60,-10);
 rect(0,250,10,-50);
 rect(50,240,10,-50);
 arc(80, 170, 10, 50, 20, PI + QUARTER_PI);
 arc(-10, 180, 10, 70, 20, PI + QUARTER_PI);
 pop();

 let mhrr = map(h,0,59,259,0); // rot reversed
 push();
 translate(width/2,height/2);
 rotate(radians(mhrr));

 fill(350,20,20);
 ellipse(0, 340, 150, 120);
 ellipse(-30, 340, 150, 120);
 circle(-100, 350, 25);
 circle(-100, 330, 25);
 circle(-100, 310, 25);
 circle(-100, 370, 25);
 
 fill(255);
 ellipse(20, 320, 50, 40);
 ellipse(20, 370, 50, 40);
 
 fill(0)
 ellipse(20, 330, 30, 20);
 ellipse(20, 380, 30, 20); 
 pop();

}

