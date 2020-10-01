const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var hangingbeam;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	hangingbeam = new roof(800, 150, 700, 50);
	bobd = 40;
	bobpx = width/2;
	bobpy = height/4+500;


	bob1 = new bob(bobpx-bobd*2, bobpy, bobd);
	bob2 = new bob(bobpx-bobd, bobpy,bobd);
	bob3 = new bob(bobpx, bobpy, bobd);
	bob4 = new bob(bobpx+bobd, bobpy, bobd);
	bob5 = new bob(bobpx+bobd*2, bobpy, bobd);

	rope1 = new rope(bob1.body, hangingbeam.body, -bobd*2, 0);
	rope2 = new rope(bob2.body, hangingbeam.body, -bobd*1, 0);
	rope3 = new rope(bob3.body, hangingbeam.body, 0, 0);
	rope4 = new rope(bob4.body, hangingbeam.body, bobd*1, 0);
	rope5 = new rope(bob5.body, hangingbeam.body, bobd*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  hangingbeam.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50, y:-45});
	}
}
function drawline(){
	bobBodyPosition = Constraint.bodyA.position;
	roofBodyPosition = Constraint.bodyB.position;

	roofBodyOffset = Constraint.pointB;

	roofBodyX = roofBodyPosition.x+roofBodyOffset.x;
	roofBodyY = roofBodyPosition.y+roofBodyOffset.y;

	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}



