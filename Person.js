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

//Work in progress
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
    fill(45,160,40);
    noStroke();
    //left anntena
    rect(this.pos.x+23, this.pos.y-5,this.mass*1, this.mass*1);
    //right anntena
     rect(this.pos.x+55, this.pos.y-5,this.mass*1, this.mass*1);
    //body
    rect(this.pos.x+30, this.pos.y+10, this.mass*3, this.mass*6);
    //left eye
    fill(1,1,200);
     rect(this.pos.x+47, this.pos.y+25,this.mass*1, this.mass*1);
    //right eye
       rect(this.pos.x+32, this.pos.y+25,this.mass*1, this.mass*1);
  }
  this.edges = function() {
    if (this.pos.y > 250) {
      this.vel.y *= 0;
      this.pos.y = 250;
      
      this.checkForCollision = function(collision) {
    if ((collision.x >= this.x && collision.x <= (this.x + 60)) &&
        (collision.y >= this.y && collision.y <= (this.y + 40))) {
        collision.y = 
 //end screen-> lose
    background(40);
    noStroke();
      fill(255, 255, 255);
      ellipse(200,200,10,10);
      ellipse(300,100,6,6);
      ellipse(100,100,7,7);
      ellipse(200,300,10,10);
      ellipse(150,78,8,8);
      ellipse(400,155,9,9);
      ellipse(10,210,7,7);
      ellipse(489,327,9,9);
      ellipse(360,323,10,10);
      ellipse(378,46,5,5);
      ellipse(23,70,8,8);
      ellipse(90,280,5,5);
      ellipse(120,230,7,7);
      ellipse(400,270,9,9);
      ellipse(370,100,9,9);
      ellipse(500,200,9,9);
      ellipse(600,209,10,10);
      ellipse(570,20,7,7);
      ellipse(550,200,6,6);
      ellipse(520,150,8,8);
      ellipse(468,300,9,9);
      ellipse(70,309,9,9);
      ellipse(130,40,10,10);
      ellipse(170,170,9,9);
      ellipse(80,150,8,8);
      ellipse(50,260,9,9);
      ellipse(260,230,9,9);
      ellipse(270,170,8,8);
      fill(70,130,180);
    
      rect(0,315,1000,50);
      fill(100,149,200);
      ellipse(450,329,30,15);
      ellipse(270,330,41,21); 
      ellipse(70,329,40,20);
      ellipse(400,340,51,21); 
      ellipse(170,339,60,30);
      ellipse(270,330,41,21); 
      ellipse(530,345,50,30);
      ellipse(600,340,45,25);
      ellipse(30,350,52,25);
       fill(255,7,92);
      text("YOU LOSE!",250,200);
    }
      };
        
        
      
      
    }
  }
}
