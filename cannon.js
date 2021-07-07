class Cannon{
constructor(x,y,w,h,angle){


this.w=w
this.y=y
this.w=w
this.h=h

this.body=Bodies.rectangle(x,y,w,h,)
World.add(world,this.body)
}

display(){
    var pos=this.body.position
    var ag=this.body.angle
    push ()
    translate (pos.x,pos.y)
    rotate (ag)
    fill ("black")
    rectMode(CENTER)
    rect(-10,-20,this.width,this.height)
    pop ()
arc (this.x-40,this.y+80,180,230,PI,TWO_PI)
}
}