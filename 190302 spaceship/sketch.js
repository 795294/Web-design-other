let ships = [];
var planet,img1,img2;



function preload(){
  img1 = loadImage('assets/spaceship.png');
  img2 = loadImage('assets/mars.png');
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);


  loadShip(2);

  }


function draw() {
    background(5,5,5);
    for(let i = 0; i < ships.length; i++){
    ships[i].run();

    }
    planet.run();
}


function loadShip(n){

  for(let i = 0; i < n; i++){
    ships.push(new Ship(random(width),random(height),img1));
  }

  planet = new Ship(random(width),random(height),img2);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(5,5,5);
}
