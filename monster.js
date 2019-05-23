function Monster(x,y) {
  this.x=x;
  this.y=y;
  
  this.show=function(){
    fill(200,109,20);  
  rect(400+this.x,280-this.y,45,45);
  fill(139,69,19);
  ellipse(415+this.x,300-this.y,8,8);
  ellipse(430+this.x,300-this.y,8,8);
  fill(129,69,19)
  ellipse(418+this.x,315-this.y,5,13);
  ellipse(427+this.x,315-this.y,5,13);
  }
}
