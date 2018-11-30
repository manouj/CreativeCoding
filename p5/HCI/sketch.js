var inbox;

function preload()
{
    inbox = loadImage('screens/inbox.png');
}

function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  // put drawing code here
  image (inbox,0,0,width,height);

}
