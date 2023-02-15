let ground;
let bird;
var bird_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  bird_img = loadAnimation("assets/bird_1.png","assets/bird_2.png","assets/bird_3.png","assets/bird_4.png","assets/bird_6.png");
  bg_img = loadImage("assets/bg.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);

  bird = createSprite(100,50,30,30);
  bird.addAnimation("bird_flying",bird_img);
  

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(bg_img);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  bird.position.y+=vy;
  if(keyDown("space")&& bird.y >=180) {
    bird.velocityY = -30;
}
  drawSprites();
}


