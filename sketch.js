var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0 ;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas=(900,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=.1;
  
  ground=createSprite(450,350,900,10);
  
   
  obstaclesGroup = new Group();
  bananasGroup = new Group();
  
    
  
}


function draw() {
  background(100,255,100)
  text("Score: "+ score, 150,80);
  monkey.collide(ground)

  
  if(gameState===PLAY){

    if(frameCount % 60 === 0) {
      spawnObstacle()
    
      }
    if(frameCount % 80 === 0){
      spawnBananas()
    }
   if(keyDown("space") && monkey.y>=300) {
      monkey.velocityY = -18;
      }
  
  
    monkey.velocityY = monkey.velocityY + 0.7
    if(bananasGroup.isTouching(monkey)){
      score=score+1
      
    }
      
    
     
    
    if(obstaclesGroup.isTouching(monkey)){
      gameState=END;
      monkey.velocityY=0;
      obstaclesGroup.setVelocityXEach(0);
      bananasGroup.setVelocityXEach(0);
      obstaclesGroup.setLifetimeEach(-1);
      bananasGroup.setLifetimeEach(-1);
      }
    
    }
  if(gameState===END){
    gameState=PLAY;
    obstaclesGroup.destroyEach();
    bananasGroup.destroyEach();
    score=0;
    
  }
    drawSprites()
  
  }

  
   
  
  
function spawnObstacle(){
    var obstacle=createSprite(400,335,40,40);
    obstacle.velocityX = -4
    obstacle.addImage(obstacleImage); 
    obstacle.scale=.09
    obstacle.lifetime=300;
    
    obstaclesGroup.add(obstacle);
}
function spawnBananas(){
  var banana = createSprite(400,250,5,5);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
  bananasGroup.add(banana)
 
  
}










