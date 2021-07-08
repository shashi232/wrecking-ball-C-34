class Rope{
    constructor(body1, point1){
        var options = {
           bodyA: body1,
           pointB: point1,
           length: 300,
           stiffness: 1.2
        }
        this.rope = Constraint.create(options);
        this.pointB = point1;
       
        World.add(world, this.rope);

    }

    fly(){
        this.rope.bodyA = null;   
    }
    attach(body){
           this.rope.bodyA = body;
    }
    display(){
     
       if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(3);
        stroke(48,22,8)
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
       
       }
       
    }
}