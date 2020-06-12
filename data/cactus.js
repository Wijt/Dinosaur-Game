class Cactus {
    constructor(x,y){
        this.pos = {x:x, y:y};
        this.width = 25;
        this.height = 30;
        obstacleList.push(this);
    }

    update() {
        this.pos.x -= SLIDE_SPEED;
        if(this.pos.x <= -50){
            obstacleList.pop(this);
            new Cactus(620,height-50);
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