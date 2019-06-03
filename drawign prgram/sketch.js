
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);



}

//  The draw function is called @ 30 fps
function draw() {
  noStroke();

  fill(255,5,5,50);
  ellipse(mouseX,mouseY,50,50);
}

function mousePressed(){
  background(5, 5, 5);
}
