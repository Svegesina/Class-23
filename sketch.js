const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ground;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    angle=-PI/4
    ground=new Ground(0,height-1,width*2,1)
    tower= new Tower(150,250,160,310)
cannon= new Cannon(180,110,110,50,angle)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display()
   tower.display()
    cannon.display()
   
}
