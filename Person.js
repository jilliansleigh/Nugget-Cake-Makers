function Person() {
  this.pos = createVector(50, 250);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);
  this.mass = 10;
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  this.display = function() {
    fill(0, 51, 102);
    noStroke();
    //left anntena
    rect(this.pos.x+20, this.pos.y-2,this.mass*1, this.mass*1,30);
    //right anntena
     rect(this.pos.x+55, this.pos.y-2,this.mass*1, this.mass*1,30);
    fill(139,129,169);
    
    //body
    rect(this.pos.x+30, this.pos.y+10, this.mass*3, this.mass*7);
    fill(204, 102, 153);
    rect(this.pos.x+30, this.pos.y+40, this.mass*2.96, this.mass*4);
    //left eye
    fill(0,0,0);
     rect(this.pos.x+47, this.pos.y+23,this.mass*1, this.mass*1,30);
    //right eye
    fill(0,0,0);
       rect(this.pos.x+32, this.pos.y+23,this.mass*1, this.mass*1,30);
   
      
    fill(0, 51, 102);
    rect(this.pos.x+29, this.pos.y+5,this.mass*3.2, this.mass*1);
    fill(128, 0, 0);
//bow    
  rect(this.pos.x+32, this.pos.y+2,this.mass*1, this.mass*1,2);
  rect(this.pos.x+45, this.pos.y+2,this.mass*1, this.mass*1,2);
      rect(this.pos.x+40, this.pos.y+4,this.mass*1, this.mass*0.5);
    fill(0,0,0);
    rect(this.pos.x+40, this.pos.y+34,this.mass*1, this.mass*0.4);
    
  }
  this.edges = function() {
    if (this.pos.y > 250) {
      this.vel.y *= 0;
      this.pos.y = 250;
      
      
      
    }
  }
}


