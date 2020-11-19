class Stone{
    constructor(x,y,r){

        var options = {
            isStatic:false,
            restituion:0,
            friction:1,
            density:1.2
        }

        
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.rectangle(x,y,r,options)
        this.image = loadImage("sprites/stone.png")
        World.add(world,this.body)
    }
    display(){
        var stonepos = this.body.position
        // var angle = this.body.angle
        push()
        translate(stonepos.x,stonepos.y)
        // rotate(angle)
        imageMode(CENTER)
        ellipseMode(RADIUS)
        image(this.image,stonepos.x,stonepos.y,50,50)
        // rect(pos.x,pos.y,width,height)
        pop()
    }
}