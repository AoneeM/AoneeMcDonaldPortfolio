class CrazyBabyB {

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

      this.lx+=random(-3,3);
      this.ly+=random(-3,3);
   }  
 
   display() {
      push();
     translate(this.lx,this.ly);
   rotate(this.rot);
      scale(this.sc);
   
     this.body(this.k);
     fill(this.q);
   
     this.head(this.k,350,50,0,1.0,0);
     this.leg(this.k,0,90,0,1.0,0);
     this.leg2(this.k,35,10,-10,1.0,0);
     this.arm(this.k,-5,20,50,1.0,0);
     this.arm2(this.k,100,-100,-100,1.0,0);
     this.skirt(this.k,345,390,180,0.7,0);
   
   pop();
   }

body(k,lx,ly,r,sc,q) {
   push();
  
   fill(60,120,250);
   rect(300, 150, 100,150,10,10,100,100); //body is anchor
  pop();
}

head(k,lx,ly,r,sc,q) {
   push();
   translate(lx,ly);
   rotate(r);
      scale(sc);


   fill(120,200,290);
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
    translate(lx+=random(-3,3),ly+=random(-3,3));
    rotate(r);
       scale(sc);

    fill(120,200,290);
    rect(310,200,20,100,10);
  
    pop();
}

leg2(k,lx,ly,r,sc,q) {
    push();
    translate(lx+=random(-3,3),ly+=random(-3,3));
         rotate(r);
            scale(sc);
    fill(120,200,290);
    rect(280,330,20,100,10);
  
    pop();
}

arm(k,lx,ly,r,sc,q) {
   //left arm
    push();
    translate(lx+=random(-3,3),ly+=random(-3,3));
    rotate(r);
       scale(sc);
  
    fill(120,200,290);
    rect(310,-140,20,100,10);
  
    pop();
}
arm2(k,lx,ly,r,sc,q) {
 //right arm
    push();
    translate(lx+=random(-3,3),ly+=random(-3,3));
    rotate(r);
       scale(sc);

    fill(120,200,290);
    rect(-350,150,20,100,10);
  
    pop();
}
skirt(k,lx,ly,r,sc,q) {
    //right arm
       push();
       translate(lx,ly);
         rotate(r);
            scale(sc);
     
       fill(50);
       arc(-10, 190, 200, -150, -180, PI + QUARTER_PI, CHORD);
     
       pop();
      
     
     }
   }
  


