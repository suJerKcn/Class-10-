
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite (50,160,20,50); 
 trex.addAnimation ("running",trex_running);
 edges = createEdgeSprites();
 trex.scale = 0.5;
 trex.X=50;
}

function draw(){
  background("white")
  
if (keyDown("space")){
  trex.velocityY = -10
}
trex.velocityY = trex.velocityY+0.5
trex.collide(edges);
  drawSprites();

}
