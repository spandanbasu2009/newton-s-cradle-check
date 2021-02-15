
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject;
var ropeObject1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobDiameter = 50;

	roof = new Roof(400,100,300,20);
	bobObject1 = new Bob(300,500,50,50);
	bobObject2 = new Bob(350,500,50,50);
	bobObject3 = new Bob(400,500,50,50);
	bobObject4 = new Bob(450,500,50,50);
	bobObject5 = new Bob(500,500,50,50);
	ropeObject1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  ropeObject1.display();
  drawSprites();
 
}



