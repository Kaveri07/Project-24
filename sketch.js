const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper, dustbinbottom, dustbinright, dustbinleft;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800, 680, 1600, 10);
	paper = new Paper(100, 650, 30);
	dustbinleft = new Dustbin(1315,625,20,100);
	dustbinright = new Dustbin(1485,625,20,100);
	dustbinbottom = new Dustbin(1400,665,150,20);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  dustbinbottom.display();
  paper.display();
  dustbinleft.display();
  dustbinright.display();
  
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:230,y:-230});
	}
}