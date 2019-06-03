
var xposition = 100;
var yposition = 96;
var bodywidth = 25;
var bodyheight = 87;
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(300, 300);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);



}

//  The draw function is called @ 30 fps
function draw() {
monster1();
monster2();
monster3();
}

function monster1(){
  // body
  fill(87, 95, 186);
  ellipse(xposition,yposition,bodywidth,bodyheight);

  // eye ball
  fill(209, 204, 204);
  ellipse(xposition,yposition,bodywidth,bodyheight-62);

  // eye black
  fill(5,5,5);
  ellipse(xposition,yposition,bodywidth-15,bodyheight-77);

  // eye red
  fill(232,23,23);
  ellipse(xposition,yposition,bodywidth-20,bodyheight-82);
}

function monster2(){
  // body 2
  fill(87, 95, 186);
  ellipse(xposition+50,yposition+50,bodywidth,bodyheight);

  // eye ball2
  fill(209, 204, 204);
  ellipse(xposition+50,yposition+50,bodywidth,bodyheight-62);

  // eye black2
  fill(5,5,5);
  ellipse(xposition+50,yposition+50,bodywidth-15,bodyheight-77);

  // eye red2
  fill(232,23,23);
  ellipse(xposition+50,yposition+50,bodywidth-20,bodyheight-82);
}

function monster3(){
  // body3
  fill(87, 95, 186);
  ellipse(xposition-40,yposition+104,bodywidth,bodyheight);

  // eye ball3
  fill(209, 204, 204);
  ellipse(xposition-40,yposition+104,bodywidth,bodyheight-62);

  // eye black3
  fill(5,5,5);
  ellipse(xposition-40,yposition+104,bodywidth-15,bodyheight-77);

  // eye red3
  fill(232,23,23);
  ellipse(xposition-40,yposition+104,bodywidth-20,bodyheight-82);
}
