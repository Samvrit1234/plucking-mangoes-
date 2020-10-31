
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boyimage;
function preload()
{
	 boyimage = loadImage("boy.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    boy = createSprite(700,100,50,50);
	boy.addImage(boyimage)
	boy.scale = 0.5;

	tree = new Tree(20,100,20,100);

	stone = new Stone(600,100,20,20);

	mango1 = new Mango(100,200,20,20);

	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  tree.display();
  
  stone.display();

  mango1.display();
  drawSprites();
 
}



