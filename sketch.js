var helicopterIMG, helicopterSprite, packageSprite,packageIMG,g,b1,b2,b3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.45, isStatic:true});
	World.add(world, packageBody);
	

	

  g= new Ground(width/2, 650, width, 10)
   b1= new Box(400, 625, 200, 20)
   b2 = new Box(290,585,20,100)
   b3 = new Box(510,585,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
    b1.display();
    b2.display();
    b3.display();
    g.display();
	packageSprite.x= packageBody.position.x 
    packageSprite.y= packageBody.position.y
    drawSprites();
    keyPressed(); 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
      // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		Matter.Body.setStatic(packageBody, false);
    }
}



