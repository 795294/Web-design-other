
function Ship (x,y,img){
  this.s = random(0.25,2);
  this.width = 10;
  this.height = 10;
  this.acceleration = createVector(0,0.05);
  this.velocity = createVector(random(-2, 2), random(-2, 2));
  this.position = createVector(x,y);
  this.clr = color(random(255),random(255),random(255));
  this.angle = 0;
  this.img = img;



  this.run = function(){
    this.render();
    this.update();
    this.checkEdges();

  }

  this.render = function(){
    if(this != planet){
      fill(this.clr);

      push();
      imageMode(CENTER);
      translate(this.position.x, this.position.y);
      this.angle = this.velocity.heading();
      rotate(this.angle);
      image(img1, 0, 0, img1.width/9, img1.height/9);

      pop();

    } else {
      imageMode(CENTER);
      image(img2, this.position.x, this.position.y, img2.width/4, img2.height/4);
    }
  }

  this.update = function(){

    if (this != planet){
      this.position.add(this.velocity);

      var d = this.position.dist(planet.position)

      if(d < 120){

        planet.position = createVector(random(width), random(height));

      }
      if(d > 120){

        var attractionForce = p5.Vector.sub(planet.position, this.position);
        attractionForce.normalize();
        attractionForce.mult(0.05);
        this.velocity.add(attractionForce);

      }

      this.velocity.limit(5);

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
