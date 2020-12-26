//declaring alias to avoid use of big names for matter modules
 const Engine=Matter.Engine;
  const World= Matter.World;
  const Bodies=Matter.Bodies; 
  //declaring variables to create game world and engine using matter modules
   var myEngine,myWorld,ground,box1,box2,box3,box4,ball;
   function preload(){
     bg=loadImage("sprites/bg.png")
   }
function setup() {
   //create canvas 
   createCanvas(1200,400);
    //create game engine using create method of Engine Module of Matter
     myEngine=Engine.create();
      //myWorld is the myEngine's world
       myWorld=myEngine.world;
       ground=new Ground(600,380,1200,20);
       box1=new Box(700,320,70,70);
       box2=new Box(700,240,70,70);
       box3=new Box(920,320,70,70);
       box4=new Box(920,240,70,70);
       box5=new Box(810,160,70,70);
       log1=new Log(810,180,300,PI/2);
       log2=new Log(810,260,300,PI/2);
       log3=new Log(760,120,150,PI/7);
       log4=new Log(870,120,150,-PI/7);
       pig1=new Pig(810,220);
       pig2=new Pig(810,350);
       bird=new Bird(100,100);
}    
function draw(){
  background(bg);
  Engine.update(myEngine)
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  log1.display(); 
  log2.display();
  log3.display();
  log4.display();
  pig1.display();
  pig2.display();
  bird.display();
}
