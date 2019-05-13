var person;
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
  //monster
 
  person.display();
  fill(153,50,204);
  monster(100);
  monster(500);
  monster(1000);
  monster(1500);
  monster(2000);
  monster(2500);
  monster(3000); 
  monster(3500);
  monster(4000);
  monster(4500);
  
  
  
  
  
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
 

//Work in progress
var person;
var sceneNum=0;
var centerX = floor(random(0,600));
var centerY = floor(random(0,300));

var monster = function (x) {
  fill(245,130,0);  
  rect(400+x,280,60,60);
  fill(51, 25, 0);
  ellipse(420+x,300,10,10);
  ellipse(440+x,300,10,10);
  fill(102,51,0);
  ellipse(425+x,320,6,16);
  ellipse(435+x,320,6,16);
};

function setup() {
  createCanvas(640, 360);
  person = new Person();
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
    background(40);
    textSize(20);
   noStroke();
var drawStar = function(){

var StarLength = 9;
var StarHeight = 9;
fill(255,255,255);

noStroke();

ellipse(floor(random(0,600)), floor(random(0,300)), StarLength, StarHeight);
};
drawStar();
    
    fill(0,255,127);
    text("THE EQUINOX DELIVERY",100,100);
    fill(255,20,147);
    text("PRESS B TO BEGIN",100,150);
    text("USE THE SPACE BAR TO JUMP",100,200);
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
    
    fill(50);
    rect(589,335,50,25);
     fill(30,0,170);
    text("Logo", 593,355);
   fill(80,90,90); 
    if(mouseIsPressed&&mouseX>589&&mouseY>335){
      background(40);
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
  background(51);
  
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
  
  fill(70,130,200);//ground
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
  //end of ground
  translate(-person.pos.x,0);
  //gravity
  var gravity = createVector(0,0.122);
  person.applyForce(gravity);
  if(mouseIsPressed){
  
  var force = createVector(-0.000000000001,0);
  person.applyForce(force);
  }
  //translate(-person.pos.x,0);
    person.update();
  person.edges();
  //monster
 
  
  var person = new Person(200, 300);

  var Monster = [];
for (var i = 0; i < 40; i++) {  
    Monster.push(new monster(i+ 400, 280));
}

var NewPerson = new Person(this.pos.x+30, this.pos.y+10);

 for (var i = 0; i < Monster.length; i++) {
        Monster[i].draw();
        person.checkForCollision(Monster[i]);
        Monster[i].x -= 1;
    }
   

}else{
  
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
} 

//stars??
var centerX = floor(random(0,600));
var centerY = floor(random(0,300));

ellipse(floor(random(0,600)), floor(random(0,300)), StarLength, StarHeight);
};
drawStar();
