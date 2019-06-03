let monsters = [];

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);

  for(let i = 0; i < 1000; i++){
    monsters.push(new Monster(random(100,800),random(100,800),100,150,random(-10,10),random(-10,10)));
  }
}

function draw() {
    background(0,0,0);
    stroke(0,0,0,0);

    for(let i = 0; i < monsters.length; i++){
        monsters[i].run();

    }

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
