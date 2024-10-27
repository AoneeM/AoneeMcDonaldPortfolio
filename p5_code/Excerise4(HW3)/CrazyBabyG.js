class CrazyBabyG {

   k;
   lx;
   ly;
   rot;
   sc;
   q;
 
    constructor(lk,llx,lly,lrot,lsc,lq) {
 
     this.k =  lk;
     this.lx = llx;
     this.ly = lly;
     this.rot = lrot;
     this.sc  = lsc;
     this.q = lq;
 
     console.log("I hate Coding, Ya I work hoe");
    
   
   }


   wiggle() {

      this.lx+=random(-10,10);
      this.ly+=random(-10,10);
   }  
 

display() {
   push();
    background(90);
   translate(this.lx,this.ly);
rotate(this.rot);
   scale(this.sc);
  this.body(this.k);

this.head(this.k,50,-90,0,1.0,0);
this.leg(this.k,0,90,0,1.0,0);
this.leg2(this.k,35,10,-10,1.0,0);
this.arm(this.k,-5,20,50,1.0,0);
this.arm2(this.k,60,30,-130,1.0,0);
this.skirt(this.k,58,120,180,0.7,0);
this.bow(this.k,-310,20,-90,4.0,0);
pop();
}


body(k,lx,ly,r,sc,q) {
   push();
  
   fill(290,120,200);
   rect(0, 0, 100,150,10,10,100,100); //body is anchor
  pop();
}

head(k,lx,ly,r,sc,q) {
   push();
   translate(lx,ly);
   rotate(r);
      scale(sc);

   fill(300,100,100);
   ellipse(0,50,180,180);
   //eye
fill(300,200,100);
ellipse(-50,50,50,10);
// make second eye
ellipse(40,50,40,40);
//mouth
fill(0)
arc(-20, 98, 60, -100, -90, PI + QUARTER_PI, PIE);
   pop();

}

leg(k,lx,ly,r,sc,q) {
    push();
    translate(lx,ly);
    rotate(r);
       scale(sc);

    fill(300,100,100);
    rect(10,40,20,120,10);
  
    pop();
}

leg2(k,lx,ly,r,sc,q) {
    push();
    translate(lx,ly);
    rotate(r);
       scale(sc);
    fill(300,100,100);
    rect(20,120,20,120,10);
  
    pop();
}

arm(k,lx,ly,r,sc,q) {
   //left arm
    push();
    translate(lx,ly);
    rotate(r);
       scale(sc);
  
    fill(300,100,100);
    rect(15,-3,20,90,10);
  
    pop();
}

arm2(k,lx,ly,r,sc,q) {
 //right arm
    push();
    translate(lx,ly);
    rotate(r);
       scale(sc);

    fill(300,100,100);
    rect(-50,20,20,90,10);
  
    pop();
}

skirt(k,lx,ly,r,sc,q) {
    //right arm
       push();
       translate(lx,ly);
       rotate(r);
          scale(sc);
     
       fill(255);
       arc(10, 20, 200, 150, 180, PI + QUARTER_PI, CHORD);
     
       pop();
      
   }

bow(k,lx,ly,r,sc,q) {
    
         push();
         translate(lx,ly);
         rotate(r);
            scale(sc);
       
         fill(255,0,0);
         ellipse(30,90,9,40,70);
         ellipse(30,90,10,10,90);
         
         pop();
        
   
     }
   }
  
   


