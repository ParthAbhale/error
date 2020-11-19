class Mango{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true})
        this.image = loadImage("sprites/mango.png")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        image(this.image,pos.x,pos.y,50,50)
    }
}