class Rope{

constructor(body1,body2,offsetX,offsetY){

this.offsetX=offsetX
this.offsetY=offsetY
var options={
bodyA:body1,
bodyB:body2,
pointB:{x:this.offsetX,y:this.offsetY}
}

this.rope=Constraint.create(options)
World.add(world,this.rope)

}
display(){

    var point1 =this.rope.bodyA.position
    var point2 =this.rope.bodyB.position
    
    strokeWeight(2)
    var point1X=point1.x;
    var point1Y=point1.y;

    var point2X=point2.x+this.offsetX;
    var point2Y=point2.y+this.offsetY;
    line(point1X,point1Y,point2X,point2Y)
    
    
    }




}