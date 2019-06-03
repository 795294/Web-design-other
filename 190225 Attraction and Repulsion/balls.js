
function Ball (x,y){
  this.s = random(0.25,2);
  this.width = 10;
  this.height = 10;
  this.acceleration = createVector(0,0.05);
  this.velocity = createVector(random(-2, 2), random(-2, 2));
  this.position = createVector(x,y);
  this.clr = color(random(255),random(255),random(255));


  this.run = function(){
    this.render();
    this.update();
    this.checkEdges();

  }

  this.render = function(){
if(this != repulsionBall){
      fill(this.clr);
      ellipse(this.position.x, this.position.y, this.width/this.s, this.height/this.s);
} else {
  fill(255,0,0);
  ellipse(this.position.x, this.position.y, 60, 60);
}
  }

  this.update = function(){


  //  this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.velocity.limit(4);

    var d = this.position.dist(repulsionBall.position)

    if(d<200){
      var repulsionForce = p5.Vector.sub(this.position, repulsionBall.position);
      repulsionForce.normalize();
      repulsionForce.mult(0.9);
      this.velocity.add(repulsionForce);
    }

    if(200 < d && d < 400){
      var attractionForce = p5.Vector.sub(repulsionBall.position, this.position);
      attractionForce.normalize();
      attractionForce.mult(0.5);
      this.velocity.add(attractionForce);
    }

    }

this.checkEdges = function(){
  if(this.position.x > windowWidth){
  this.position.x = 0;
  }
  if(this.position.y > windowHeight){
  this.position.y = 0;
  }
  if(this.position.x < 0){
  this.position.x = windowWidth;
  }
  if(this.position.y < 0){
  this.position.y = windowHeight;
  }
}
  }
