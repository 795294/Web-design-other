
function Ball (x,y){
  this.s = random(0.25,2);
  this.width = 10;
  this.height = 10;
  this.acceleration = createVector(0,0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = createVector(x,y);
  this.clr = color(random(255),random(255),random(255));
  this.history = [];

  this.run = function(){
    this.render();
    this.update();
    this.checkEdges();

  }

  this.render = function(){
      fill(this.clr);
      ellipse(this.position.x, this.position.y, this.width/this.s, this.height/this.s);

      for (var i = 0; i < this.history.length; i++){
        var pos = this.history[i];
        ellipse(pos.x, pos.y, this.width/this.s, this.height/this.s);
      }
  }

  this.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    var v = createVector(this.position.x, this.position.y);
    this.history.push(v);
    if(this.history.length > 25){
      this.history.splice(0,1);
    }

    }

this.checkEdges = function(){
  if(this.position.x > windowWidth){
  this.velocity.x *= -0.9;
  }
  if(this.position.y > windowHeight){
  this.velocity.y *= -0.9;
  }
  if(this.position.x < 0){
  this.velocity.x *= -0.9;
  }
  if(this.position.y < 0){
    this.velocity.y *= -0.9;
  }
}
  }
