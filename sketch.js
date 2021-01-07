
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;

	ground1= new Ground(600,height,1200,20)
	paper1= new paper(50,400);
	log1 = new Line(810,485,20,200);
	log2 = new Line(720,430,80,20);
	log3 = new Line(900,430,80,20)
	paper1.setCollider=0;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.setCollider=0;
  drawSprites();
 ground1.display();
 paper1.display();
 log1.display();
 log2.display();
 log3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-100})
}

}