class Rope{
    constructor(body1, body2,point2){
        
        var options= {
            bodyA:body1,
            bodyB:body2,
            pointB:point2,
            stiffness:1,
            length:200
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    //fly(){
      //  this.sling.bodyA = null;
   // }
    
    display(){
        var pointA = this.rope.bodyA.position;
        var pointBx = this.rope.bodyB.position.x+this.rope.pointB.x;
        var pointBy = this.rope.bodyB.position.y+this.rope.pointB.y;
        strokeWeight(2);
        fill("grey");
        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;
        var Anchor2X = pointBx;
        var Anchor2Y = pointBy;
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
    
}