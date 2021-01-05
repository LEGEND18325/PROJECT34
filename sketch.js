
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(width/2,height/10,width/4,20);
bobDiameter=40;
startBobPositionX=width/2;
startBobPositionY=height/4+500;
bob1=new Bob(startBobPositionX-bobDiameter*2,200,bobDiameter);
bob2=new Bob(startBobPositionX-bobDiameter,200,bobDiameter);
bob3=new Bob(startBobPositionX,200,bobDiameter);
bob4=new Bob(startBobPositionX+bobDiameter,200,bobDiameter);
bob5=new Bob(startBobPositionX+bobDiameter*2,200,bobDiameter);
rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0)
rope2=new Rope(bob2.body,roof.body,-bobDiameter*1,0)
rope2.isStatic=true,
rope3=new Rope(bob3.body,roof.body,0,0)
rope3.isStatic=true,
rope4=new Rope(bob4.body,roof.body,bobDiameter*1,0)
rope4.isStatic=true,
rope5=new Rope(bob5.body,roof.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
 
  drawSprites();
  roof.display();
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
 
}
/*function keyPressed(){

if (keyCode === UP_ARROW){

Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-500,y:-340})


}



}*/

function mouseDragged(){
  Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY})
}
