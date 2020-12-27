
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bananaGroup

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(1280,720); 
  
 monkey = createSprite(80,600,20,20);
 monkey.addAnimation("run",monkey_running); 
 monkey.scale = 0.2; 
  
 ground = createSprite(1280,660,2560,10);
 ground.velocityX = -2; 
  
 bananaGroup = createGroup();
 
 survivalTime = 0; 
}


function draw() {
 background("white");
 
  console.log(survivalTime);
  text("Survival Time:"+ survivalTime,640,100);
  survivalTime = survivalTime + Math.round(getFrameRate()/50);
  
 if(ground.x < 0){
   ground.x = 1280;
 }  
  
 if(keyDown("space") && monkey.y>580){
   monkey.velocityY = -25; 
 } 
  
  monkey.velocityY =  monkey.velocityY + 1; 
  monkey.collide(ground);
    
  spawnObstacle();
  spawnBanana();
  drawSprites(); 
}

function spawnBanana(){
   
 if(frameCount % 80 === 0 ){
 banana = createSprite(1280,random(310,410),10,10);
 banana.addImage(bananaImage);
 banana.scale = 0.1;  
 banana.velocityX = -2;
 banana.lifetime = 640;  
   
 bananaGroup.add(banana) 
}}

function spawnObstacle(){

 if(frameCount % 300 === 0 ){ 
 obstacle = createSprite(1280,600); 
 obstacle.addImage(obstaceImage); 
 obstacle.velocityX = -7; 
 obstacle.scale = 0.3; 
}}



