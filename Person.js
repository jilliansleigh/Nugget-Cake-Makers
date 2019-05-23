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
    fill(245,130,0);
    noStroke();
    //left anntena
    rect(this.pos.x+20, this.pos.y-5,this.mass*1, this.mass*1);
    //right anntena
     rect(this.pos.x+55, this.pos.y-5,this.mass*1, this.mass*1);
    //body
    rect(this.pos.x+30, this.pos.y+10, this.mass*3, this.mass*7);
    //left eye
    fill(39,178,309);
     rect(this.pos.x+47, this.pos.y+25,this.mass*1, this.mass*1);
    //right eye
       rect(this.pos.x+32, this.pos.y+25,this.mass*1, this.mass*1);
  }
  this.edges = function() {
    if (this.pos.y > 250) {
      this.vel.y *= 0;
      this.pos.y = 250;
      
      
      
    }
  }
}



