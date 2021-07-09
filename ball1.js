class Smallball {
    constructor(x, y) {
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.circle(30, 30, 20,options);
      this.radius = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      stroke('red')
      fill('red')
      rectMode(CENTER)
      ellipse(0,0,this.radius);
      pop();
    };
  };
  