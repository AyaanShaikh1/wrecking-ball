class Box {
constructor(x,y,width,height){
var options ={
   restitution:1,
   friction:0.5,
   density:1
}
this.body = Bodies.rectangle(x,y,width,height);
this.w = width;
this.h = height;

World.add(world,this.body);
}
display(){
var pos = this.body.position;
var ang = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(ang);
strokeWeight(4);
stroke("red");
fill("yellow");
rectMode(CENTER);
rect(0,0,this.w,this.h);
pop();
}

}