
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime=0



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey=createSprite(300,300,40,20)
 monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.2
  
    ground=createSprite(1,370,6006,20)
 stroke("black")
  ground.velocityX = (-3)

         FoodGroup=new Group()      
}


function draw() {
background("white")
       monkey.collide(ground);

  if(keyDown("space")){
    monkey.velocityY=-10
  }
  if(keyDown("space")) {
        monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
    BananaGroup();
 stroke("white")
  
  drawSprites();
}
function BananaGroup(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
        banana.lifetime = 200;
      FoodGroup.add(banana);


  
  }
  if (frameCount % 300 === 0) {
    var stone = createSprite(600,335,40,10);
    stone.addImage(obstacleImage);
    stone.scale = 0.2;
    stone.velocityX = -3;
   
}

}




