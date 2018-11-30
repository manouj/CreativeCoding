var sun, moon;
var curImage;
var selection,textInput,submitButton;
var numberOfImages=0;
var imgSize;
function preload()
{
  sun = loadImage("assets/sun.png");
  moon = loadImage("assets/moon.png");
}

function setup()
{
  // put setup code here
  curImage = sun;
  createCanvas(600,600);
  selection = createSelect();
  selection.position(10,10);
  selection.option("sun");
  selection.option("moon");
  selection.changed(function(){
    console.log(selection.value());

    });

    textInput = createInput("");
    textInput.position(10,30);
    submitButton = createButton("Create Pattern");
    submitButton.position(10,50);
    submitButton.mousePressed(function()
    {
      if(selection.value()=="sun")
      {
        curImage=sun;
      }
      else if (selection.value()=="moon")
      {
        curImage=moon;
      }
      numberOfImages = textInput.value();


    });


    }

function draw() {
  // put drawing code here
  frameRate(2);
  background(255);
  imgSize = random(1,5);
  for(var i=0; i<numberOfImages; i++)
  {
  image(curImage, random(width/2),random(height/2),curImage.width/imgSize,curImage.height/imgSize);
  }

}

function showImage()
{

}
