const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var backgroundImg;
var msnow=100;
var snow=[];
var rand

function preload(){

backgroundImg=loadImage("snow1.jpg")

}
function setup() {
  engine=Engine.create()
  world=engine.world;

   createCanvas(800,400);
  // createSprite(400, 200, 50, 50);


}



function draw() {
  Engine.update(engine);

  background(backgroundImg);  
  rand=Math.round(random(1,4))

  if(frameCount%5===0){

snow.push(new Snow(random(0,800),30,30))

  }
  for(j=0;j<snow.length;j++){

snow[j].display();

  }

  drawSprites();


}