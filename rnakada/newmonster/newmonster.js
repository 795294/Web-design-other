
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(500, 500);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  monster1();


}

//  The draw function is called @ 30 fps
function draw() {

}

function monster1(){
  for(var i = 1; i<180; i++){
    rotate(Math.random()*2*Math.PI);
    var x = Math.random()*500;
    var y = Math.random()*100;
    //body
    fill(87, 95, 186);
    ellipse(x,x,y+60,y+60);
    //eye ball
    fill(209, 204, 204);
    ellipse(x,x,y+40,y+40);
    //eye black
    fill(5,5,5);
    ellipse(x,x,y+30,y+30);
    // eye red
    fill(232,23,23);
    ellipse(x,x,y,y);
  }
}
