
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperObject;
var dustbinObject;
var groundObject;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	

	engine = Engine.create();
	world = engine.world;
	paperObject = new Paper(200,450,40);
	dustbinObject = new Dustbin(200,200,200,50);
	groundObject = new Ground(200,200,50,650);
	
	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject.display();
 
  keyPressed();
}

function keyPressed(){

	 if(keyCode === UP_ARROW){
         Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85,y:-85})
	 }
}

