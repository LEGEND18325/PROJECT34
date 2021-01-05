class Bob{

    constructor(x,y,r){
    
    
    var option1={
    isStatic:false,
    restitution:1,
    density:1.0,
    friction:10
    
    
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r/2,option1)
    
    World.add(world,this.body);
    
    }
    display(){
    
    var p=this.body.position;
    push();
    translate(p.x,p.y);
    rectMode(CENTER);
    
    strokeWeight(5);
    
    fill("pink")
    ellipse(0,0,this.r,this.r);
    pop();
    }
    
    
    }