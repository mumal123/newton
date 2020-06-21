class Bob{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.03,
            friction:0.5,
            density:1.2

        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)

    }
    display()
    {
        push()
        translate()
        ellipseMode(CENTER)
        ellipse(this.x,this.y,this.r)
pop()
    }
}