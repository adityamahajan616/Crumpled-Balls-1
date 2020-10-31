
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper();

	bin1 = new Box(650,600,150,10);
	bin2 = new Box(580,570,10,70);
	bin3 = new Box(720,570,10,70);

	floor = new Box(400,620,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ball.display();

  bin1.display();
  bin2.display();
  bin3.display();
  
  floor.display();
}

function keyPressed() 
{
	if (keyCode === UP_ARROW) 
	{
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:65,y:-65});
	}
}



