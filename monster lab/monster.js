

function Monster (xpos,ypos,width,height,xspeed,yspeed){
  this.s = random(0.25,2);
  this.xpos = xpos;
  this.ypos = ypos;
  this.width = width/this.s;
  this.height = height/this.s;
  this.xspeed = xspeed;
  this.yspeed = yspeed;


  this.run = function(){
    this.render();
    this.update();
    this.checkEdges();

  }

  this.render = function(){
    //body

      fill(255,0,0);
      ellipse(this.xpos, this.ypos, this.width, this.height);

      //white portion
      fill(255,255,255);
      ellipse(this.xpos,this.ypos - 20,this.width - (60/this.s),this.height - (110/this.s));
      //retina
      fill(100,200,200);
      ellipse(this.xpos,this.ypos - 20,this.width - (75/this.s),this.height - (125/this.s));
      //pupil
      fill(5,5,5);
      ellipse(this.xpos,this.ypos - 20,this.width - (90/this.s),this.height - (140/this.s));
      //refliction from light source
      fill(255,255,255);
      ellipse(this.xpos + 7,this.ypos - 25,this.width - (90/this.s),this.height - (140/this.s));
  }

  this.update = function(){
    this.xpos += this.xspeed;
    this.ypos += this.yspeed;
    }

this.checkEdges = function(){
  if(this.xpos > windowWidth){
    this.xspeed *= -1;
  }
  if(this.ypos > windowHeight){
    this.yspeed *= -1;
  }
  if(this.xpos < 0){
    this.xspeed *= -1;
  }
  if(this.ypos < 0){
    this.yspeed *= -1;
  }
}
  }
