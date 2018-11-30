var xPos = 0;
var yPos = 0;
var ballSize = 20;
var trigger = false;
var speed = 5;
var force = 0.1;
=
var circle;
function setup() {
  // put setup code here
  createCanvas(500,500);
  xPos = random(0,width);
  circle = createSprite(400, 200);
   //compact way to add an image
   circle.addImage(loadImage('assets/plain_circle.png'));
}

function draw() {
  // put drawing code here
  background(255);
  ellipse(xPos,yPos,ballSize,ballSize);
  rect(10,400,489,20);
  yPos=yPos+force*speed;

  if (trigger == false)
  {
  speed++;
  if(yPos>391)
  {
    speed=0;
    force=0;
  }
  }

  if(trigger == true)
  {
    speed--;
    force = -0.1/2;
    if(speed == 0)
    {
      trigger = false;
      force = 0.08;
      if(yPos>391)
      {
        speed=0;
        force=0;
      }
    }
    }

  if(yPos>390)
  {
  trigger = true;
  }
}
