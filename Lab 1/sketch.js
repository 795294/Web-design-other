

var monster = [{xpos: 400, ypos: 400, width: 100, height: 150, xspeed: 5, yspeed: 5},
              {xpos: 50, ypos: 400, width: 100, height: 150, xspeed: 5, yspeed: 5},
              {xpos: 600, ypos: 400, width: 100, height: 150, xspeed: 5, yspeed: 5}
              ];
var collision = false;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);

}

function draw() {
background(0,0,0);
stroke(0,0,0,0);

drawMonster();

moveMonster();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawMonster(){
  drawBody();
  drawEyes();

}

function drawBody(){
  fill(255,0,0);

  var n = 0;

  while(n < monster.length){

    ellipse(monster[n].xpos, monster[n].ypos, monster[n].width, monster[n].height);

    n += 1;
  }
}

function drawEyes(){
  //white portion
  var n = 0;

  while(n < monster.length){

  fill(255,255,255);
  ellipse(monster[n].xpos,monster[n].ypos - 20,monster[n].width - 60,monster[n].height - 110);
  //retina
  fill(100,200,200);
  ellipse(monster[n].xpos,monster[n].ypos - 20,monster[n].width - 75,monster[n].height - 125);
  //pupil
  fill(5,5,5);
  ellipse(monster[n].xpos,monster[n].ypos - 20,monster[n].width - 90,monster[n].height - 140);
  //refliction from light source
  fill(255,255,255);
  ellipse(monster[n].xpos + 7,monster[n].ypos - 25,monster[n].width - 90,monster[n].height - 140);

  n +=1;
  }
}

function moveMonster(){
  var v = 0;

  while (v < monster.length){
    if(monster[v].xpos + monster[v].width > windowWidth){
      collision = true;
    }
    if(monster[v].ypos + monster[v].height > windowHeight){
      collision = true;
    }
    if(monster[v].xpos + monster[v].width < 0){
      collision = true;
    }
    if(monster[v].ypos + monster[v].height < 0){
      collision = true;
    }

    if(collision === true){
      monster[v].xpos += monster[v].xspeed*-1;
      monster[v].xpos += monster[v].yspeed*-1;

      collison = false;
    }else{
      monster[v].xpos += monster[v].xspeed;
      monster[v].xpos += monster[v].yspeed;
    }
    v += 1;
  }
}
