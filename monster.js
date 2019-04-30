var monster = function(x, y) {
    this.x = x;
    this.y = y;
};

monster.prototype.draw = function() {
    fill(50, 151, 78);
    rectMode(CENTER);
    rect(this.x, this.y, 60, 60);
};

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
