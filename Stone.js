class Stone{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/stone.png")
        World.add(world, this.body);
}
         display(){
            push();
            translate(this.body.position.x, this.body.position.y);

            ellipse()
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
         }
}