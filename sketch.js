const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero, monster, rope, ground;

function preload() 
{
  bg = loadImage("images/GamingBackground.png"); 
}

function setup() 
{
  let canvas = createCanvas(3000, 700);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400, 800, 250);
  rope = new String(hero.body, { x: 500, y: 50 });
  
  monster = new Monster(1100,550,300);

  box1 = new Blocks(600, 100, 70, 70);
  box2 = new Blocks(900, 100, 70, 70);
  box3 = new Blocks(900, 100, 70, 70);
  box4 = new Blocks(900, 100, 70, 70);

}
function mouseDragged() {
Matter.Body.setPosition(hero.body,{x: mouseX ,y:mouseY});

}
function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  hero.display();
  rope.display();
  
  monster.display();
}
