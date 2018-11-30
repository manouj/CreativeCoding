var balls = [];
var threshold = 30;
var accChangeX = 0;
var accChangeY = 0;
var accChangeT = 0;
var player;
var isJump;

function setup() {
  createCanvas(windowWidth, windowHeight);
person = new Person();
  for (var i=0; i<20; i++) {
    balls.push(new Ball());
  }
  isJump=false;
}

function draw() {
  background(0);


  for (var i=0; i<balls.length; i++) {
    balls[i].move();
    balls[i].display();
  }

  rect(0,windowHeight-200,windowWidth,200 );
  person.update();
  person.edges();
  person.display();
  checkForShake();

  var gravity = createVector(0,0.2);
  person.applyForce(gravity);

  if(isJump==true)
  {
    playerJump();
  }

 }

 function playerJump()
 {
   var jump = createVector(0,-20);
   person.applyForce(jump);
   
 }

 function keyPressed()
 {
   if (key=='q') {

       var jump = createVector(0,-8);
       person.applyForce(jump);
     }
}
//player
function Person(x, y) {
  this.pos = createVector(30, windowHeight-250);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.applyForce = function(force) {
  this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill("blue");
    // image(selectedPlayer,this.pos.x,this.pos.y-80,80,80);
    rect(this.pos.x,this.pos.y,20,50);

  }

  this.edges = function() {
    if (this.pos.y > windowHeight-250) {
      this.vel.y *= 0;
      this.pos.y = windowHeight-250;
    }

    if (this.pos.y < 50) {
      this.vel.y *= 0;
      this.pos.y = 50;
    }
  }
}


// Ball class
function Ball() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.xspeed = random(-2, 2);
  this.yspeed = random(-2, 2);
  this.oxspeed = this.xspeed;
  this.oyspeed = this.yspeed;
  this.direction = 0.7;

  this.move = function() {
    this.x += this.xspeed * this.direction;
    this.y += this.yspeed * this.direction;
  };

  // Bounce when touch the edge of the canvas
  this.turn = function() {
    if (this.x < 0) {
      this.x = 0;
      this.direction = -this.direction;
    }
    else if (this.y < 0) {
      this.y = 0;
      this.direction = -this.direction;
    }
    else if (this.x > width - 20) {
      this.x = width - 20;
      this.direction = -this.direction;
    }
    else if (this.y > height - 20) {
      this.y = height - 20;
      this.direction = -this.direction;
    }
  };

  // Add to xspeed and yspeed based on
  // the change in accelerationX value
  this.shake = function() {
    this.xspeed += random(5, accChangeX/3);
    this.yspeed += random(5, accChangeX/3);
  };

  // Gradually slows down
  this.stopShake = function() {
    if (this.xspeed > this.oxspeed) {
      this.xspeed -= 0.6;
    }
    else {
      this.xspeed = this.oxspeed;
    }
    if (this.yspeed > this.oyspeed) {
      this.yspeed -= 0.6;
    }
    else {
      this.yspeed = this.oyspeed;
    }
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

function checkForShake() {
  // Calculate total change in accelerationX and accelerationY
  accChangeX = abs(accelerationX - pAccelerationX);
  accChangeY = abs(accelerationY - pAccelerationY);
  accChangeT = accChangeX + accChangeY;
  // If shake
  if (accChangeT >= threshold||key=='p') {
    for (var i=0; i<balls.length; i++) {
      balls[i].shake();
      balls[i].turn();
    isJump=true;
    }
  }
  // If not shake
  else {
    for (var i=0; i<balls.length; i++) {
      balls[i].stopShake();
      balls[i].turn();
      balls[i].move();
    }
  }
}
