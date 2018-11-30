var posX = 100;
var posY = 100;
var eSize = 100;
var colors = "green";
var button1=[];

function setup() {
  // put setup code here
  createCanvas(1600,400);
 button1[0] = new interfaces(100,200,50,"red");

 for(var j=0; j<10; j++)
 {
   button1[j].display();
   button1.push(new interfaces(100*j,200,50,"red"));
 }
}

function draw() {
  // put drawing code here
display(100,200);

}

function display(tempX, tempY)
{
  fill(colors)

  ellipse(tempX,tempY,eSize,eSize);
}

class interfaces{
  constructor(tempX, tempY, tempS, tempC){
      this.x = tempX;
      this.y = tempY;
      this.s = tempS;
      this.c = tempC;
  }

    display()
  {
    fill(this.c)
    rect(this.x, this.y, this.s, this.s);
  }

}
