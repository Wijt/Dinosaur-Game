let d;

let obstacleList = [];

function setup(){
    createCanvas(600,200);
    d = new Dinosaur(100,100);
    new Cactus(620, height-50);
}

function draw(){
    background(0);
    update();
    push();
        rectMode(CENTER);
        fill(150);
        rect(300, height-10, width, GROUND_HEIGHT/2);
    pop();
    d.show();
    obstacleList.forEach(element => {
        element.show();
    });
}

function update() {
    d.update();
    obstacleList.forEach(element => {
        element.update();
    });
}

function mouseReleased(){
    d.jump();
}