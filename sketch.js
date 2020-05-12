const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;

var raindrops = [];

var random1 = 0;
var raindrop1;
var r1;

var backgroundImg;

function preload(){
  backgroundImg = loadImage("Images/rainback.PNG");
}

function setup() 
{
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world

  r1 = new Raindrops();
  raindrops.push(r1); 
  r1.body.velocity.y = 100;
  console.log(r1.body.velocity.y);
}

function draw()
{
  background(backgroundImg);  
  Engine.update(engine);
  //console.log(raindrops);
  //random1 = random(10,400);
  //r1.display();

  raindrop1 = new Raindrops();
  //raindrop1.body.speed = random(50,100);
  raindrops.push(raindrop1);

  for(var i = 0; i < raindrops.length; i=i+1)
  {
    raindrops[i].display();
    //console.log(raindrops[i].body.speed);
  }
  
  drawSprites();
}