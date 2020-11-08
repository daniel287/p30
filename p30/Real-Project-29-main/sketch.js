const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,250,200,10);
 
  //Stand 1
  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block16 = new Box(390,155,30,40);

  //Stand 2
  box1 = new Box(710, 235, 10, 20);
  box2 = new Box(720, 235, 10, 20);
  box3 = new Box(730, 235, 10, 20);
  box4 = new Box(740, 235, 10, 20);
  box5 = new Box(750, 235, 10, 20);
  box6 = new Box(720, 210, 10, 20);
  box7 = new Box(730, 210, 10, 20);
  box8 = new Box(740, 210, 10, 20);
  box9 = new Box(730, 195, 10, 20);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:100,y:200});
}

function draw() {
  background(56,44,44); 
  Engine.update(engine);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("blue");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("green");
  block13.display();
  block14.display();
  block15.display();
  fill("purple");
  block16.display();
  fill("skyblue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  fill("pink");
  box6.display();
  box7.display();
  box8.display();
  fill("maroon")
  box9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
  slingShot.display();

  keyPresed();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
  }

  function keyPresed(){
    if(keyCode === 32){
      slingShot.attach(this.ball);
    }
  }