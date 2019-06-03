let balls = [];

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);


  loadBall(50);

  }


function draw() {
    background(5,5,5);
    for(let i = 0; i < balls.length; i++){
    balls[i].run();

    }

}


function loadBall(n){
  for(let i = 0; i < n; i++){
    balls.push(new Ball(width/2,50));
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(5,5,5);
}
