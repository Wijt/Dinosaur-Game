class Dinosaur {
    constructor(x,y){
        this.pos = {x:x, y:y};
        this.width = 25;
        this.height = 60;
        this.velocity = 0;
        this.jumpC = 0;
    }

    jump(){
        if(this.jumpC==0){
            this.velocity = 0;
            this.velocity -= D_JUMP_FORCE;
            this.jumpC=1;        
        }
    }

    update() {
        this.pos.y += this.velocity;
        if(this.pos.y < height - GROUND_HEIGHT){
            this.velocity += GRAVITY;
        }else{
            this.pos.y = height - GROUND_HEIGHT;
            this.jumpC = 0;
        }
    }

    show() {
        push();
            rectMode(CENTER);
            fill(255);
            rect(this.pos.x, this.pos.y, this.width, this.height);
        pop();
    }
}