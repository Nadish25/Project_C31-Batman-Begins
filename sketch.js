const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var maxDrops=200;
drops=[]
var ground;
var umbrella;
var thunder1,thunder2,thunder3,thunder4;
var sound;

function preload(){
   thunder1=loadImage("thunderbolt/thunder1.png")
   thunder2=loadImage("thunderbolt/thunder2.png")
   thunder3=loadImage("thunderbolt/thunder3.png")
   thunder4=loadImage("thunderbolt/thunder4.png")
   sound=loadSound("thundersound.mp3")
}

function setup(){
    createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
    
    ground=new Ground(200,height,400,10)
    umbrella=new Umbrella(200,470)
    
    if(frameCount%900==0){
    sound.play();
    }
//creating drops
if(frameCount % 150==0 )
{

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400), random(0,400)));
    }


}
}

function draw(){
    background(10)
    
    Engine.update(engine);

     

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,400),random(10,30),10,10)
        switch(rand){
        case 1: thunder.addImage(thunder1);
        break;
        case 2:thunder.addImage(thunder2);
        break;
        case 3:thunder.addImage(thunder3);
        break;
        case 4:thunder.addImage(thunder4);
        break;
        default : break;
        }
        thunder.scale=random(0.3,0.7)
    }
    if(frameCount%90===0){
        thunder.destroy();
    }

   
   ground.display();
   umbrella.display();

   //displaying drops

   for(var i = 0; i<maxDrops; i++){
    drops[i].display();
    drops[i].update()
    
   }
   drawSprites();
}
