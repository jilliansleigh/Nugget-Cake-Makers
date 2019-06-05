var person;
var monster = [];
var sceneNum=0
var monster = function (x) {
  fill(200,109,20);  
  rect(400+x,280,45,45);
  fill(139,69,19);
  ellipse(415+x,300,8,8);
  ellipse(430+x,300,8,8);
  fill(129,69,19)
  ellipse(418+x,315,5,13);
  ellipse(427+x,315,5,13);
};


function setup() {
  createCanvas(640, 360);
  person = new Person();
  for(var i = 0; i<10000;i++){
    monster[i]=new Monster(i*50,300*random(0,1.9));
  }
      
}


function keyPressed(){
  if (key == ' '){
    var jump = createVector(0,-5);
  person.applyForce(jump);
  }else if (key=='b'){ 
    sceneNum++;
  }
}
//start screen
function draw() {
  if(sceneNum===0){ 
    background(10, 30, 103);
    textSize(20);
    noStroke();
    fill(0,255,127);
    text("THE EQUINOX DELIVERY",100,100);
    fill(255,20,147);
    text("PRESS B TO BEGIN",200,200);
    text("USE THE SPACE BAR TO JUMP",250,250);
     fill(70,130,180);
  	
        fill(255,255,255);
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
    
    fill(177, 140, 15);//ground
    rect(0,315,1000,50);
    fill(149, 120, 15);
    ellipse(450,329,30,15);
    ellipse(270,330,41,21); 
    ellipse(70,329,40,20);
    ellipse(400,340,51,21); 
    ellipse(170,339,60,30);
    ellipse(270,330,41,21); 
    ellipse(530,345,50,30);
    ellipse(600,340,45,25);
    ellipse(30,350,52,25);
    
    fill(50);
    rect(589,335,50,25);
     fill(30,0,170);
    text("Logo", 593,355);
   fill(80,90,90); 
    if(mouseIsPressed&&mouseX>589&&mouseY>335){
      background(10, 30, 103);
        fill(255,20,147);
      text("Nugget Cake Makers",190,100);
        fill(255,255,255);
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
    }
  }
  
  //during the game screen
                         
else if(sceneNum===1){
  noStroke();
  background(10, 30, 103);
  
  fill(255, 255, 255);//stars
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
    ellipse(60,350,52,25);//end of stars
  
  fill(177, 140, 15);//ground
    rect(0,315,1000,50);
    fill(149, 120, 15);
    ellipse(450,329,30,15);
    ellipse(270,330,41,21); 
    ellipse(70,329,40,20);
    ellipse(400,340,51,21); 
    ellipse(170,339,60,30);
    ellipse(270,330,41,21); 
    ellipse(530,345,50,30);
    ellipse(600,340,45,25);
    ellipse(30,350,52,25);//end of ground
  translate(-person.pos.x,0);
  
  
  
  //gravity
  var gravity = createVector(0,0.11);
  person.applyForce(gravity);
  if(mouseIsPressed){
  
  var force = createVector(-0.000000000001,0);
  person.applyForce(force);
  }
  //translate(-person.pos.x,0);
    person.update();
  person.edges();
  for(var i = 0; i<100;i++){
    monster[i].show();
  }
 
  
  
  //monster
 
  person.display();
  fill(153,50,204);
  // monster(100);
  // monster(500);
  // monster(1000);
  // monster(1500);
  // monster(2000);
  // monster(2500);
  // monster(3000); 
  // monster(3500);
  // monster(4000);
  // monster(4500);
  
  
  
  
  
}else{
  
  //end screen-> lose
  background(10, 30, 103);
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
    fill(177, 140, 15);
    
  rect(0,315,1000,50);
    fill(149, 120, 15);
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
} 

//work in progress
var person;
var monster = [];
var sceneNum=0
var monster = function (x) {
  fill(200,109,20);  
  rect(400+x,280,45,45);
  fill(139,69,19);
  ellipse(415+x,300,8,8);
  ellipse(430+x,300,8,8);
  fill(129,69,19)
  ellipse(418+x,315,5,13);
  ellipse(427+x,315,5,13);
};
var drawstar = function draw(){
  fill(255,255,255);
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
}

var drawground = function draw(){
  
  fill(177, 140, 15);//ground
    rect(0,315,1000,50);
    fill(149, 120, 15);
    ellipse(450,329,30,15);
    ellipse(270,330,41,21); 
    ellipse(70,329,40,20);
    ellipse(400,340,51,21); 
    ellipse(170,339,60,30);
    ellipse(270,330,41,21); 
    ellipse(530,345,50,30);
    ellipse(600,340,45,25);
    ellipse(30,350,52,25);//end of ground
}


function setup() {
  createCanvas(640, 360);
  person = new Person();

  //floating monster dudes 
  for(var i = 0; i<10000;i++){
    monster[i]=new Monster(i*50,300*random(0,1.9));
  }
      
}


function keyPressed(){
  if (key == ' '){
    var jump = createVector(0,-5);
  person.applyForce(jump);

  }else if (key=='b'){ 
    sceneNum++;
  }
}




function collision() {
  
  
  
  text("---DEBUG---",100,100);
  
 
  //floating monster dudes 
  for(var i = 0; i<10000;i++){
    //monster[i]=new Monster(i*50,300*random(0,1.9)); 
  
  
    if ((person.pos.x >= monster[i].x && person.pos.x <= (monster[i].x + 40)) &&
        (person.pos.y >= monster[i].y && person.pos.y <= (monster[i].y + 40))) {
      
       text("   COLLISION !!!",100,100);
        //monster[i].pos.y = -400;
     //   this.monster++;
      
      //  var jump = createVector(0,-5);
      //  person.applyForce(jump);     
      
    }
   
  }
}



//start screen
function draw() {
  if(sceneNum===0){ 
    background(10, 30, 103);
    textSize(20);
    noStroke();
    
    drawstar();
    drawground();
    
    fill(0,255,127);
    text("THE EQUINOX DELIVERY",100,100);
    fill(255,20,147);
    text("PRESS B TO BEGIN",200,200);
    text("USE THE SPACE BAR TO JUMP",250,250);
     fill(70,130,180);
    
    fill(50);
    rect(589,335,50,25);
     fill(30,0,170);
    text("Logo", 593,355);
   fill(80,90,90); 
    if(mouseIsPressed&&mouseX>589&&mouseY>335){
      background(10, 30, 103);
        fill(255,20,147);

 
      fill(87, 103, 210);
  triangle(469,219,330,360,159,221);
      triangle(422,365,261,364,158,221);
 triangle(422,365,261,364,492,220);
      fill(213, 143, 56);
  ellipse(327,230,340,120);
      
     fill(197, 122, 56);
      ellipse(300,245,30,30);
      ellipse(350,215,25,25);
      ellipse(390,265,20,20);
      ellipse(280,185,15,15);
      ellipse(220,210,20,20);
      ellipse(440,225,25,25);
      ellipse(200,250,18,18);
    fill(255,165,210);
     ellipse(325,180,260,100);
    fill(255,180,217);
     ellipse(325,150,210,60);
    fill(255,195,225);
     ellipse(325,130,170,30);
    fill(255,210,232);
       ellipse(325,120,140,20);
    fill(255,225,240);
       ellipse(325,112,105,20);
      fill(131, 249, 0);
      text("Nugget Cake Makers",230,50);

      
    }
  }
  
  //during the game screen
                         
else if(sceneNum===1){
  noStroke();
  background(10, 30, 103);
  
  
  drawstar();
 drawground();

  translate(-person.pos.x,0);
  
  
  
  //gravity
  var gravity = createVector(0,0.11);
  person.applyForce(gravity);
  if(mouseIsPressed){
  
  var force = createVector(-0.000000000001,0);
  person.applyForce(force);
  }
  //translate(-person.pos.x,0);
    person.update();
  person.edges();
  for(var i = 0; i<100;i++){
    monster[i].show();
    collision();
  }
  
  
  
  //monster
 
  person.display();
  fill(153,50,204);

   


}else if (sceneNum===2){
  
  //end screen-> lose
  background(10, 30, 103);
  noStroke();
 
  drawstar();
  drawground();
  
     fill(255,7,92); 
    text("YOU LOSE!",250,200);
	}
  
   else if (sceneNum===3){
  
  //end screen-> win
  background(202, 250, 238);
  noStroke();
    
    //monster
   
    
    fill(216, 112, 162,120);
  rect(220,220,70,70,7);
    ellipse(215,250,17,17);
    ellipse(295,250,17,17);
    
    
  fill(0,0,0);
  ellipse(270,240,17,17);
  ellipse(240,240,17,17);
  ellipse(255,265,13,13);
    
    fill(232, 16, 171);
    ellipse(20,30,300,300);
    fill(194, 116, 63);
    ellipse(600,350,300,300);
  fill(101, 0, 235);
    ellipse(200,300,30,30);
    ellipse(150,150,40,40);
    ellipse(350,100,30,30);
    ellipse(450,250,40,40);
   
     fill(82, 115, 127);
    rect(242,210,25,9);
     triangle(258,210,267,210,261,196);
     triangle(248,210,259,210,253,196);
     triangle(242,210,252,210,245,196);
     fill(0,0,0); 
    text("YOU WIN!",300,200);
	}

  
  

}  
 
