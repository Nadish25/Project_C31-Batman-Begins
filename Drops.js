class Drops {
    constructor(x,y){
        var options ={
            friction:0.001,
            restitution:0.1,
            isStatic:false
        }
        this.body = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world,this.body);
    }
    
    update(){
        if(this.body.position.y>580){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,100)})
        }
    }

    display(){
       var pos=this.body.position;
        push();
        fill("blue");
        translate(pos.x,pos.y)
        ellipseMode(CENTER)
        ellipse(0,0,this.radius,this.radius)
        pop();

    }

}