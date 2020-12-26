class Base{
    constructor(x,y,width,height,angle){

var options={friction:1.0,density:1.0,restitution:0.4}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width
this.height=height
this.image=loadImage("sprites/base.png")
 //Add bodies to game world
  World.add(myWorld,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angle)
        

//to add body to this.body soul
imageMode(CENTER); 
//the rect should be designed in the x and y axis of soul
 image(this.image,0,0,this.width,this.height);
 pop ()
    }
}