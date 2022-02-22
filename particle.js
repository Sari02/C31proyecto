class Particle {
    constructor(x, y) {
        var options = {
            restitution: 0.1,
            friction: 0.001,
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        //color
        this.color = color(random(0,255), random(0,255), random(0,255));
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        //aqui se asigna el color
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};