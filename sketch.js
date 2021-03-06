
var bananaImage
var obstacleImage,obstacleGroup,backImage;
var foodGroup
var monkey
var monk
var score=0

function preload() {
backImage=loadImage("jungle.jpg")

monk=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
}

bananaImage = loadImage("banana.png")
obstacleImage = loadImage("stone.png")

function setup() { 
  createCanvas(400, 400);
  
  Background = createSprite(200,200,20,20)
  Background.addImage("background",backImage)
  Background.velocityX=10
  
  ground.visible=false
  
  monkey =createSprite(200,200,20,20) 
  monkey.addAnimation("monk",monk);
} 

function draw() {
  background(220);
  
  if(Background.x>400){
  Background.x=200
  } 
  
  if(foodGroup.isTouching(monkey)){
  score=score+2
  foodGroup.destroyEach()
  }
  
  switch(score){
    case 10:monkey.scale=0.12
      break;
    case 20:monkey.scale=0.14
      break;
      case 30:monkey.scale=0.16
      break;
      default:break;
  }    
  if(obstacleGroup.isTouching(monkey)){
  monkey.scale=0.10
  }
  
  stroke("white")
  textSize(20)
  fill("white")
  text("score: "+ score,400,50);  
  drawSprites()
}
function Food(){
   if (frameCount % 60 === 0) {
    var food = createSprite(600,120,40,10);
    food.y = Math.round(random(80,120));
    food.addImage(bananaImage);
    food.scale = 0.5;
    food.velocityX = -3;
    
     //assign lifetime to the variable
    food.lifetime = 200;
    
    //adjust the depth
    food.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    foodGroup.add(food);
}
}

function Obstacle(){
   if (frameCount % 60 === 0) {
    var obstacle = createSprite(600,80,40,10);
    obstacle.y =80
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.5;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    //adjust the depth
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
}
}
