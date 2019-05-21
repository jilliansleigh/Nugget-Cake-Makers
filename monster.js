function Monster() {
  this.x=0;
  this.y=0;
  
  this.show();{
    fill(200,109,20);  
  rect(400+this.x,280,45,45);
  fill(139,69,19);
  ellipse(415+this.x,300,8,8);
  ellipse(430+this.x,300,8,8);
  fill(129,69,19)
  ellipse(418+this.x,315,5,13);
  ellipse(427+this.x,315,5,13);
  }
  
  this.update();{
    
  }
}
keyUpHandler();{
function collisionDetection() {
    for(var c=0; c<monsterColumnCount; c++) {
        for(var r=0; r<monsterRowCount; r++) {
            var b = Monster[c][r];
            if(x > b.x && x < b.x+monsterWidth && y > b.y && y < b.y+monsterHeight) {
                dy = -dy;
            }
        }
    }
} 
}
