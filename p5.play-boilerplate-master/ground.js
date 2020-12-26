class Ground{
    constructor(x,y,width,height){

var options={isStatic:true}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width
this.height=height
this.image=loadImage("sprites/ground.png")
 //Add bodies to game world
  World.add(myWorld,this.body);
    }
    display(){
//to add body to this.body soul
 imageMode(CENTER); 
//the rect should be designed in the x and y axis of soul
 image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}