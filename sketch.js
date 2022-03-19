
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;

var ground;
var leftside;
var rightside;

function preload()
{

}

var ball

function setup() {
	createCanvas(1000, 1000);

	engine = Engine.create();
	world = engine.world;

	

	var ball_options = {
		isstatic:false,
		restitution: 0.3,
		friction:0,
		density:1.2
	  }
	


	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);
	
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display()
  ground =new Ground(200,390,400,20);
	rightside = new Ground(390,200,20,400);
	leftside = new Ground(10,200,20,400);
 
  drawSprites();
 




function keyPressed() {
if(keyCode=== UP_ARROW){

function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

}



}
}