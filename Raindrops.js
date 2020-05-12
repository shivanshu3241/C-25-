class Raindrops
 {
  constructor()
  {
      var options =
      {
          restitution :0.8,
          density :1
      }
      this.x = random(10,400);
      this.y = random(0,-20);
      this.body = Bodies.rectangle(this.x,this.y,10,20);
      this.body.speed = random(50,1000);
      this.width = 20;
      this.height = 20;
      this.image = loadImage("Images/raindrop.PNG");

      World.add(world,this.body);
  }
  display()
  {
      var pos = this.body.position;
      push();
      imageMode(CENTER);
      //fill(255);
      image(this.image, pos.x, pos.y, this.width, this.height);
      pop();
  }
}