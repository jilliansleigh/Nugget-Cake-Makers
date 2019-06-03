function Monster(x,y) {
  this.x=x;
  this.y=y;
  
  this.show=function(){
// body
    fill(246, 220, 84);  
  rect(400+this.x,280-this.y,45,45,7);
    
// face
  fill(0,0,0);
  rect(405+this.x,290-this.y, 33,2);
  rect(415+this.x,290-this.y,9,9,3);
  rect(430+this.x,290-this.y,9,9,3);
  ellipse(425+this.x,315-this.y,13,13);
    
    // hat
       fill(28, 72, 166);
   ellipse(442+this.x,280-this.y, 43,12);
      fill(28, 72, 220);
  rect(399+this.x,277-this.y, 46,10);
  ellipse(423+this.x,277-this.y, 47,10);
   
  }
}
