let balls = [];
var repulsionBall;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);


  loadBall(1000);

  }


function draw() {
    background(5,5,5);
    for(let i = 0; i < balls.length; i++){
    balls[i].run();

    }
    repulsionBall.run();
}


function loadBall(n){

  for(let i = 0; i < n; i++){
    balls.push(new Ball(width/2,height/2));
  }

  repulsionBall = new Ball(width/2,height/2);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(5,5,5);
}
