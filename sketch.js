const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide
var world;
var radius = 70;
var dustbin,dustbinImg
var paper,paperImg

function preload(){

	

}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}

	
	
	paper=createImg("paper.png")
	paper.position(260,600)
	paper.size(70,70)

	ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,10,120);
	rightSide = new Ground(1270,600,10,120);
	bottomSide = new Ground(1185,650,150,20);

	Engine.run(engine);
  
}


function draw() {
	background(200);
	rectMode(CENTER);


	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();

	

	rectMode(CENTER);

    ellipse(paper.position.x,paper.position.y,40);

	


	dustbin=createImg("dustbin.png")
	dustbin.position(1085,470,200,200)
	dustbin.size(200,200)
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});

  	}
}
