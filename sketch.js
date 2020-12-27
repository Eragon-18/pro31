const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var i, j;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,620);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,610,480,20)

  for (i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, 500, 10, 200));
  }

  for (j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for (j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for (j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }
console.log(plinkos)
}

function draw() {
  Engine.update(engine)
  background("black");  
  
  if (frameCount % 60 === 0){
    particles.push(new Particle(random(20,460), 10, 10));
  }

  drawSprites();

  ground.display();

  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

}