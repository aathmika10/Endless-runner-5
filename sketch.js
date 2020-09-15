var geekyBoy,GB, nerdyGirl,NG;
var actionGirl,AG, blueshirtBoy ,BSB;
var danceGirl,DG, pinkyGirlPG;
var redhoodieBoy,RHB, thiefBoy,TB;
var coin;
var zombieA;
var forestBG;
var gameState= "start";
var plrChoose=0;
var rightArrow;

function preload(){
  actionGirlA = loadAnimation("Characters/Action_Girl/AG1.png","Characters/Action_Girl/AG2.png","Characters/Action_Girl/AG3.png","Characters/Action_Girl/AG4.png","Characters/Action_Girl/AG5.png","Characters/Action_Girl/AG6.png");
  blueshirtBoyA = loadAnimation("Characters/Blue_Shirt_Boy/BSB1.png","Characters/Blue_Shirt_Boy/BSB2.png","Characters/Blue_Shirt_Boy/BSB3.png","Characters/Blue_Shirt_Boy/BSB4.png","Characters/Blue_Shirt_Boy/BSB5.png","Characters/Blue_Shirt_Boy/BSB6.png");
  geekyBoyA = loadAnimation("Characters/Geeky_Boy/GB1.png","Characters/Geeky_Boy/GB2.png","Characters/Geeky_Boy/GB3.png","Characters/Geeky_Boy/GB4.png","Characters/Geeky_Boy/GB5.png","Characters/Geeky_Boy/GB6.png");
  nerdyGirlA = loadAnimation("Characters/Nerdy_Girl/NG1.png","Characters/Nerdy_Girl/NG2.png","Characters/Nerdy_Girl/NG3.png","Characters/Nerdy_Girl/NG4.png","Characters/Nerdy_Girl/NG5.png","Characters/Nerdy_Girl/NG6.png");
  pinkyGirlA= loadAnimation("Characters/Pinky_Girl/PG1.png","Characters/Pinky_Girl/PG2.png","Characters/Pinky_Girl/PG3.png","Characters/Pinky_Girl/PG4.png","Characters/Pinky_Girl/PG5.png","Characters/Pinky_Girl/PG6.png");
  redhoodieBoyA = loadAnimation("Characters/Red_Hoodie_Boy/RHB1.png","Characters/Red_Hoodie_Boy/RHB2.png","Characters/Red_Hoodie_Boy/RHB3.png","Characters/Red_Hoodie_Boy/RHB4.png","Characters/Red_Hoodie_Boy/RHB5.png","Characters/Red_Hoodie_Boy/RHB6.png");
  thiefBoyA = loadAnimation("Characters/Thief_Boy/TB1.png","Characters/Thief_Boy/TB2.png","Characters/Thief_Boy/TB3.png","Characters/Thief_Boy/TB4.png","Characters/Thief_Boy/TB5.png","Characters/Thief_Boy/TB6.png");
  danceGirlA = loadAnimation("Characters/Dance_Girl/DG1.png","Characters/Dance_Girl/DG2.png","Characters/Dance_Girl/DG3.png","Characters/Dance_Girl/DG4.png","Characters/Dance_Girl/DG5.png","Characters/Dance_Girl/DG6.png");
  coin = loadImage("Characters/Things/Coin.png");
  zombieA = loadAnimation("Characters/Zombie1/Zombie1.png","Characters/Zombie1/Zombie2.png","Characters/Zombie1/Zombie3.png","Characters/Zombie1/Zombie4.png","Characters/Zombie1/Zombie5.png","Characters/Zombie1/Zombie6.png",)
  forestBG= loadImage("Characters/Back_Ground/forestBG.jpg");
  GB= loadImage("Characters/Geeky_Boy/GB1.png");
  NG= loadImage("Characters/Nerdy_Girl/NG1.png");
  AG= loadImage("Characters/Action_Girl/AG1.png");
  BSB= loadImage("Characters/Blue_Shirt_Boy/BSB1.png");
  DG= loadImage("Characters/Dance_Girl/DG1.png");
  PG=loadImage("Characters/Pinky_Girl/PG1.png");
  RHB=loadImage("Characters/Red_Hoodie_Boy/RHB1.png")
  TB=loadImage("Characters/Thief_Boy/TB1.png")

  //cityBG= loadImage("Characters/Back_Ground/CityBG.png")
  //nightCityBG= loadImage("Characters/Back_Ground/nightCityBG.jpg")
}

function setup() {
  createCanvas(990,500);
  //createSprite(400, 200, 50, 50);
  startButton = createButton("START");
  startButton.hide();
  danceGirl=createSprite(200,400,20,20)
    danceGirl.addImage(DG);
    danceGirl.visible=false;
    geekyBoy=createSprite(200,200,20,20)
    geekyBoy.addImage(GB);
    geekyBoy.visible=false;
    nerdyGirl=createSprite(350,200,20,20)
    nerdyGirl.addImage(NG);
    nerdyGirl.visible=false;
    blueshirtBoy=createSprite(500,200,20,20)
    blueshirtBoy.addImage(BSB);
    blueshirtBoy.scale=0.8;
    blueshirtBoy.visible=false;
   actionGirl=createSprite(790,200,20,20)
    actionGirl.addImage(AG);
    actionGirl.visible=false;
     pinkyGirl=createSprite(350,400,20,20)
    pinkyGirl.addImage(PG);
    pinkyGirl.scale=0.8;
    pinkyGirl.visible=false;
    redhoodieBoy=createSprite(500,400,20,20)
    redhoodieBoy.addImage(RHB);
    redhoodieBoy.scale=0.8;
    redhoodieBoy.visible=false;
    thiefBoy=createSprite(650,400,20,20)
    thiefBoy.addImage(TB);
   thiefBoy.scale=0.8;
   thiefBoy.visible=false;
}

function draw() {
  background("black");
  if (gameState==="start"){
    textSize(20);
    fill("purple")
    textFont("showcard gothic");
  text("MIRACULOUS RUN",400,70);
  textSize(15);
  fill("white");
  textFont("Comic sans ms")
    text("There is a peaceful town. Recently, there was a new kind of disease which is caused by eating a kid of mushroom.  ",100, 200)
    text("When people eat the mushroom, they become zombies. There were a few cute kids studying in the nearby school.",100,220);
    text("They are a team of 8 kids. They like adventures and like to get involved in them. They also have some super powers.", 100, 240)
    text("They go to fight with they zombies. But, unfortunately the zombies started chasing them and the kids are in danger. ",100,260);
    text("So, they run to save their lives.",100,280)
   startButton.show();
  startButton.position(900,400);
  startButton.mousePressed(start);
  }  
  if (gameState==="choosePlayer"){
    startButton.hide();
    if(plrChoose===0){
      background("black")
    }
    textSize(20);
    textFont("showcard gothic")
    fill("pink")
    text("CLICK ON THE CHARACTER THAT YOU CHOOSE TO PLAY WITH",150,90)
    textSize(15)
    text("After you go to the game screen, click on the right arrow on your keyboard",150,490)
   
    geekyBoy.visible=true;
    geekyBoy.debug=true;
   if(mousePressedOver(geekyBoy)){
      plrChoose=1;
      gameState="play";
      console.log(plrChoose)
     
      
    }
    nerdyGirl.visible=true;
    nerdyGirl.debug=true;
    if(mousePressedOver(nerdyGirl)){
      plrChoose=2;
      gameState="play";
      console.log(plrChoose)
     
    }
    blueshirtBoy.visible=true;
    blueshirtBoy.debug=true;
    if(mousePressedOver(blueshirtBoy)){
      plrChoose=3;
      gameState="play";
      console.log(plrChoose)
    }
    actionGirl.visible=true;
    actionGirl.debug=true;
    actionGirl.setCollider("rectangle",-150,0,100,150)
    if(mousePressedOver(actionGirl)){
      plrChoose=4;
      gameState="play";
      console.log(plrChoose)
  
    }
    danceGirl.visible=true;
    danceGirl.scale=0.8;
    danceGirl.debug=true;
    if(mousePressedOver(danceGirl)){
      plrChoose=5;
      gameState="play";
      console.log(plrChoose)
  
    }
    pinkyGirl.visible=true;
    pinkyGirl.debug=true;
    if(mousePressedOver(pinkyGirl)){
      plrChoose=6;
      gameState="play";
      console.log(plrChoose)
   
    }
    redhoodieBoy.visible=true;
    redhoodieBoy.debug=true;
    if(mousePressedOver(redhoodieBoy)){
      plrChoose=7;
      gameState="play";
      console.log(plrChoose)
    
    }
   thiefBoy.visible=true;
   thiefBoy.debug=true;
   if(mousePressedOver(thiefBoy)){
    plrChoose=8;
    gameState="play";
    console.log(plrChoose)
    
  }
  }
  if(gameState==="play"){
    clear();
   nerdyGirl.visible=false;
      danceGirl.visible=false;
      blueshirtBoy.visible=false;
      pinkyGirl.visible=false;
      redhoodieBoy.visible=false;
      thiefBoy.visible=false;
      actionGirl.visible=false;
      geekyBoy.visible=false;
     
      //var bg= createSprite(400,200,700,500)
      //bg.addImage(forestBG);
      //bg.velocityX=-8
      background(forestBG);
      background.velocityX=-7;
      if (World.frameCount % 50=== 0) {
        var Coin = createSprite(2000,300,40,10);
        Coin.addImage(coin);
        Coin.scale = 0.1;
        Coin.velocityX = -3;
      }
    
  
      
    if(plrChoose===1){
      if(keyDown(RIGHT_ARROW)){
      var player1=createSprite(250,270,20,20);
      player1.addAnimation("player1",geekyBoyA)
      
      var zombie= createSprite(100,250,20,20)
      zombie.addAnimation("zombieA",zombieA)
      zombie.scale=1.6;
   
      }
  }
    else if(plrChoose===2){
      if(keyDown(RIGHT_ARROW)){
        var player2=createSprite(250,270,20,20);
        player2.addAnimation("player2",nerdyGirlA)
        
        var zombie= createSprite(100,250,20,20)
      zombie.addAnimation("zombieA",zombieA)
      zombie.scale=1.8;
        }
      
    }
    else if(plrChoose===3){
      if(keyDown(RIGHT_ARROW)){
        var player3=createSprite(250,270,20,20);
        player3.addAnimation("player3",blueshirtBoyA)
        player3.scale=0.8
        var zombie= createSprite(100,250,20,20)
      zombie.addAnimation("zombieA",zombieA)
      zombie.scale=1.6;
        }
    }
    else if(plrChoose===4){
      if(keyDown(RIGHT_ARROW)){
        var player4=createSprite(250,270,20,20);
        player4.addAnimation("player4",actionGirlA)
        player4.scale=0.8
        var zombie= createSprite(100,250,20,20)
      zombie.addAnimation("zombieA",zombieA)
      zombie.scale=1.6;
        }
    }
    else if(plrChoose===5){
      if(keyDown(RIGHT_ARROW)){
        var player5=createSprite(250,270,20,20);
        player5.addAnimation("player5",danceGirlA)
        player5.scale=0.8
        var zombie= createSprite(100,250,20,20)
      zombie.addAnimation("zombieA",zombieA)
      zombie.scale=1.6;
        }
    }
    else if(plrChoose===6){
      if(keyDown(RIGHT_ARROW)){
        var player6=createSprite(250,270,20,20);
        player6.addAnimation("player6",pinkyGirlA)
        player6.scale=0.8
        var zombie= createSprite(100,250,20,20)
      zombie.addAnimation("zombieA",zombieA)
      zombie.scale=1.6;
        }
    }
    else if(plrChoose===7){
      if(keyDown(RIGHT_ARROW)){
        var player7=createSprite(250,270,20,20);
        player7.addAnimation("player7",redhoodieBoyA)
        player7.scale=0.8
        var zombie= createSprite(100,250,20,20)
      zombie.addAnimation("zombieA",zombieA)
      zombie.scale=1.6;
        }
    }
    else if(plrChoose===8){
      if(keyDown(RIGHT_ARROW)){
        var player8=createSprite(250,270,20,20);
        player8.addAnimation("player8",thiefBoyA)
        player8.scale=0.8
        var zombie= createSprite(100,250,20,20)
        zombie.addAnimation("zombieA",zombieA)
        zombie.scale=1.6;
     
          clear();
        
      /*  for (var c = 300; c < 1000; c=c+100){
          var coin=createSprite(c, 300, 20, 20)
          coin.addImage(coin);
        }
         for (var o = 600; o < 1000; o=o+900){
          var obstacle=createSprite(o, 300, 30, 30)
        }*/
      }
    }
    else{
      background("purple");
  }

}
  drawSprites();
}
function start(){
  gameState="choosePlayer"
  console.log("buttonPressed")
}
