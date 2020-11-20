
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

	roof = new Roof(400,100,600,50)
	bobObject1= new Bob(300,400,50);
	bobObject2= new Bob(350,400,50);
	bobObject3 = new Bob(400,400,50);
	bobObject4= new Bob(450,400,50);
	bobObject5= new Bob(500,400,50);

	rope1= new Rope(roof.body,bobObject1.body,10,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  drawSprites();
 
}
function keyPressed(){
    if(keyDown(UP_ARROW)){
        Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-5,y:-20});
    }
    }
    




