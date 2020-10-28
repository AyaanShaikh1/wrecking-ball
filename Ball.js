class Ball {
constructor(x,y,radius){
var options ={
  density:1.5,
  frictionAir:0.005
}
this.body = Bodies.circle(x,y,radius,options);
this.r = radius

World.add(world,this.body);
}
display(){
var pos = this.body.position;
var ang = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(ang);
ellipseMode(CENTER);
strokeWeight(4);
stroke("lightgreen");
fill("gray");
ellipse(0,0,this.r,this.r);
pop();
}

}