var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wall1, wall2, wall3;
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
	createCanvas(800, 500);
	rectMode(CENTER);
	
	wall1 = createSprite(width/2, 445, 200,20);
	wall1.shapeColor = "red";

	wall2 = createSprite(width/2 - 100, 430, 20,70);
	wall2.shapeColor = "red";
	
	wall3 = createSprite(width/2 + 100, 430, 20,70);
	wall3.shapeColor = "red";
	
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale= 0.2;

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	wall1 = Bodies.rectangle(width/2, 445, 200, 20 , {isStatic:true} );
	 World.add(world, wall1);
	 
	wall2 = Bodies.rectangle(width/2 - 100, 430, 20,70, {isStatic:true} );
	 World.add(world, wall2);
	 
	wall3 = Bodies.rectangle(width/2 + 100, 430, 20,70, {isStatic:true} );
 	World.add(world, wall3);

	packageBody = Bodies.circle(width/2 , 100 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 450, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(keyDown(DOWN_ARROW)){
	Matter.Body.setStatic(packageBody, false);
  }
  drawSprites();
  
}



