class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.3,
        'density':0.5,
        'isStatic':true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    this.image = loadImage("dustbin.png")

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill(255);
    strokeWeight(4);
    stroke('green');
    image(this.image, 0, -50, this.width, this.height+100);
    pop();
  }
};
