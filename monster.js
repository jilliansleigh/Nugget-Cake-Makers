Person.prototype.checkForCollision = function(collision) {
    if ((collision.x >= this.x && collision.x <= (this.x + 60)) &&
        (collision.y >= this.y && collision.y <= (this.y + 40))) {
        collision.y = fill(90,90,90); rect(100,100,100,100);
        this.collision++;
    }
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
