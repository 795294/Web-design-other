let planets = [];
var sun, radian;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  radian = 0;
  sun = new Planet(width/2,height/2,40,0);
  loadOrbit(13);
  }


function draw() {
    background(5,5,5);

    for(let i = 0; i < planets.length; i++){
    planets[i].run();

    }

        sun.run();
}


function loadOrbit(n){

  for(let i = 0; i < n; i++){
    planets.push(new Planet(0,0,8,radian));
    radian+=((2*PI)/n);
  }


}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(5,5,5);
}
