
function Planet(x,y,r,deg){
  this.position = createVector(x,y);
  this.velocity = createVector(random(-2, 2), random(-2, 2));
  this.clr = color(random(255),random(255),random(255));
  this.r=r;
  this.rad=deg;
  this.length = random(50,150);
  this.growth = 1;

this.move=function(){
  //this.position.add(this.velocity);
  this.position.x = mouseX;
  this.position.y = mouseY;
}

this.grow=function(){
  if(this.length > 150){
    this.growth *= -1;
  }else if(this.length < 50){
    this.growth *= -1;
  }
  this.length += this.growth;
}

this.update = function(){
  this.position.x = cos (this.rad)*this.length;
  this.position.x += sun.position.x;
  this.position.y = sin (this.rad)*this.length;
  this.position.y += sun.position.y;
  this.rad += 0.01;
}

this.checkEdges = function(){
  if(this.position.x > windowWidth){
    this.velocity.x *= -1;
    }
  if(this.position.y > windowHeight){
    this.velocity.y *= -1;
    }
  if(this.position.x < 0){
    this.velocity.x *= -1;
    }
  if(this.position.y < 0){
    this.velocity.y *= -1;
    }
}

this.render = function(){
  fill(this.clr);
  ellipse(this.position.x, this.position.y, this.r, this.r)

  stroke(this.clr);
  line(this.position.x, this.position.y, sun.position.x, sun.position.y);
}

this.run = function(){
  if (this != sun){
  this.grow();
  this.update();
  }
  this.render();
  if (this === sun){
    this.checkEdges();
    this.move();
  }
}

}
