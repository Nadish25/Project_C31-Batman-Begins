class Umbrella {
    constructor(x, y, radius) {
        var options = {
           'isStatic':true
        }
        this.body = Bodies.circle(x, y, 120, options);
        this.radius = 300;
        this.image = loadImage("walkingFrame/walking_6.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
  };