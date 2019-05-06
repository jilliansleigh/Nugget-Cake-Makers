var monster = function(x, y) {
    this.x = x;
    this.y = y;
};

monster.prototype.draw = function() {
    fill(245,130,0);  
    rectMode(CENTER);
    rect(x+400,280,60,60);
    fill(20,109,20);
    ellipse(420+x,300,10,10);
    ellipse(440+x,300,10,10);
    fill(2,140,10)
    ellipse(425+x,320,6,16); 
    ellipse(435+x,320,6,16);
};
