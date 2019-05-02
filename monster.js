Person.prototype.checkForCollision = function(collision) {
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
        this.collision++;
    
};

var monster = function(x, y) {
    this.x = x;
    this.y = y;
};

monster.prototype.draw = function() {
    fill(50,151,78);  
    rectMode(CENTER);
    rect(x+400,280,60,60);
    fill(20,109,20);
    ellipse(420+x,300,10,10);
    ellipse(440+x,300,10,10);
    fill(2,140,10)
    ellipse(425+x,320,6,16); 
    ellipse(435+x,320,6,16);
};

var person = new Person(200, 300);

var Monster = [];
for (var i = 0; i < 40; i++) {  
    Monster.push(new monster(i+ 400, 280));
}



var person = new Person(this.pos.x+30, this.pos.y+10);


    for (var i = 0; i < Monster.length; i++) {
        Monster[i].draw();
        person.checkForStickGrab(Monster[i]);
        Monster[i].x -= 1;
    }
