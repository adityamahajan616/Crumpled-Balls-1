class Paper {

    constructor() 
    {
      var options = 
      {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density: 1.2
      }

      this.body = Bodies.circle(50,450,20,options);
      
      World.add(world, this.body);
    }

    display()
    {

      strokeWeight(3);
      stroke("grey");
      fill(255);
      ellipse(this.body.position.x, this.body.position.y,30);

    }

}