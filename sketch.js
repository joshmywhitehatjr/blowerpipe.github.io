const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var world;
var engine;
var ball;
var blower;
var blowermouth;
var button;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  blower = new Blower(300, 400, 70, 70);
  ball = new Ball(300, 200, 30, 30);
  blowermouth = new BlowerMouth(460, 350, 50, 50);

  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  blower.show();
  ball.show();
  blowermouth.show();


  drawSprites();
}

function blow() {
  Matter.Body.applyForce(ball.body, { x: 0, y: 0}, { x: 0, y: 0.01 });
}