	const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var holder1,hero,groundObject;	
var b1,b2,b3,b4,b5,b6,b7;
var bk1,bk2,bk3,bk4,bk5,bk6,bk7;
var block1,block2,block3,block4,block5,block6,block7;
var bg;
var monster;
var world;
var launcher;

function preload(){
	bg = loadImage("day.jpg");
}
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	hero=new Hero(250,100,70);
	
	groundObject=new Ground(width/2,670,width,20);
	holder1 = new Ground(300,480,500,10);
    monster = new Monster(600,300,100);


b1 = new Block(300,450,40,40);
b2 = new BlockB(300,450,40,40);
b3 = new Block(300,450,40,40);
b4 = new BlockB(300,450,40,40);
b5 = new Block(300,450,40,40);
b6 = new BlockB(300,450,40,40);
b7 = new Block(300,450,40,40);

bk1 = new BlockC(400,450,40,40);
bk2 = new Block(400,450,40,40);
bk3 = new BlockC(400,450,40,40);
bk4 = new Block(400,450,40,40);
bk5 = new BlockC(400,450,40,40);
bk6 = new Block(400,450,40,40);
bk7 = new BlockC(400,450,40,40);

block1 = new BlockB(500,450,40,40);
block2 = new BlockC(500,450,40,40);
block3 = new BlockB(500,450,40,40);
block5 = new BlockC(500,450,40,40);
block6 = new BlockB(500,450,40,40);
block7 = new BlockC(500,450,40,40);
block4 = new BlockB(500,450,40,40);


	launcher = new Launcher(hero.body,{x:100,y:300})
	


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(bg);
 
  
  hero.display();
  groundObject.display();
 
holder1.display();
 launcher.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  
  bk1.display();
  bk2.display();
  bk3.display();
  bk4.display();
  bk5.display();
  bk6.display();
  bk7.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

monster.display();

}

function mouseDragged(){
	Matter.Body.setPosition(hero.body,{x:mouseX, y: mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if(keyCode===32){
		launcher.attach(hero.body);
	}
}

