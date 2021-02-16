
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100,300,10)
	dustbase = new Dustbin(630,360,150,20);
	dustleft = new Dustbin(545,325,20,100);
	dustright = new Dustbin(690,325,20,100);
	base = new Ground(400,380,800,20);
	Engine.run(engine);
    
}


function draw() {
   background(0);

 	dustbase.display();
	dustleft.display();
    dustright.display();
    ball.display();
	base.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15})
   }
}



