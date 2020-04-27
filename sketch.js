const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var ground_options ={
        isStatic: true
      }
ground=Bodies.rectangle(200,390,200,50,ground_options)
World.add(world,ground)
console.log(ground)
    

    //ground = Bodies.rectangle(200,390,200,20,ground_options);
    //World.add(world,ground);

    //console.log(ground);
}

function draw(){
    background(0);
    rectMode(CENTER);
    //rect(200,200,50,50)
//    Engine.update(engine);
   rect(ground.position.x,ground.position.y,200,50)
   // rect(ground.position.x,ground.position.y,400,20);
}