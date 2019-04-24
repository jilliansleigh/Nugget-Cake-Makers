var person;
var sceneNum=0

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
    fill(0,255,127);
    text("THE EQUINOX DELIVERY",100,100);
    fill(255,20,147);
    text("PRESS B TO BEGIN",200,200);
    text("USE THE SPACE BAR TO JUMP",250,250);
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
    
  }
  
  //during the game screen
                         
else if(sceneNum===1){
  noStroke();
  background(51);
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
    ellipse(60,350,52,25);
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
  translate(-person.pos.x,0);
  //gravity
  var gravity = createVector(0,0.09);
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
  rect(450,230,random(90,95),random(80,56));
}else{
  
  //end screen
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
  text("YOU LOSE!");
	}
}  
