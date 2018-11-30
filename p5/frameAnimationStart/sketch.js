
var frameAmounts = 4;
var frameArray = [];
var currentFrame = 0;
var interval = 1000;
var prevMillis = 0;

var interval2 = 10;
var prevMillis2 = 0;
var counter=0;
var frameCount=0;

var controls = {"play":[300,400,50,"green"],
                "stop":[360,400,50,"red"],
                "forward":[100,400,50,"red"],
                "back":[160,400,50,"red"],
                "+1":[40,400,50,"red"],
                "-1":[220,400,50,"red"]
                };
var state = "stop";

function preload()
{


  for (var frames = 0; frames < frameAmounts; frames++)
  {
    var frameString = "assets/Thatwasclose" + frames +".jpg";
    frameArray[frames] = loadImage(frameString);
  }
}

function setup()
{
  createCanvas(500,500);
  console.log(controls["play"]);
    console.log(controls["play"][3]);

    for(var keys in controls)
    {
      console.log(keys);
      console.log(controls[keys][2]);
    }
}

function draw()
{

background("fff");
  image(frameArray[currentFrame],20,20);

  if(millis() - prevMillis >interval && state == "play")
  {
    currentFrame++;
    prevMillis = millis();
  }


if(millis() - prevMillis>interval && state == "forward")
{

  currentFrame++;
  prevMillis = millis();
}

if(millis() - prevMillis>interval && state == "back")
{

  currentFrame--;
  prevMillis = millis();
}
if(state == "+1")
{

  currentFrame++;
  state = "stop";
}

if(state == "-1")
{
  currentFrame--;
  state = "stop";

}

if (currentFrame<0)
{
  currentFrame=3;
}

fill("red");


  if(currentFrame>frameAmounts-1)
  {
    currentFrame=0;
  }

  for(var keys in controls)
  {
    fill(controls[keys][3]);
    rect(controls[keys][0],controls[keys][1],controls[keys][2],controls[keys][2]);
    text(keys, controls[keys][0],controls[keys][1]);

    if(mouseX > controls[keys][0] && mouseX < controls[keys][0]+controls[keys][2] && mouseY >controls[keys][1] && mouseY <controls[keys][1]+controls[keys][2])
    {
      fill(127,127);
      rect(controls[keys][0],controls[keys][1],controls[keys][2],controls[keys][2]);
    }
  }
  for(var i=0; i<20;i++)
  {
    fill(counter);
    rect(counter,i*40,10,10);
    rect(width-10,i*40,10,10);
  }
  if (counter==width)
  {
    counter=0;
  }


}


function mousePressed()
{
  for(var keys in controls)
  {

  if(mouseX > controls[keys][0] && mouseX < controls[keys][0]+controls[keys][2] && mouseY >controls[keys][1] && mouseY <controls[keys][1]+controls[keys][2])
      {
        state = keys;
      }
      if(state=="+1")
      {
        console.log("+1");
      }
  }
}
